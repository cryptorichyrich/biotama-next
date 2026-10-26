import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLanding from "@/components/service-pages/ServiceLanding";
import {
  getService,
  getVariant,
  servicePages,
  variantMeta,
  type VariantId,
} from "@/data/service-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.flatMap((service) =>
    variantMeta.map((variant) => ({ service: service.slug, variant: variant.id })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string; variant: string }>;
}): Promise<Metadata> {
  const { service: slug, variant: variantId } = await params;
  const service = getService(slug);
  const variant = getVariant(variantId);
  if (!service || !variant) return {};

  const titles: Record<string, string> = {
    v1: `${service.name} — ${service.tagline}`,
    v2: `${service.name}: ${service.pains[0]}`,
    v3: `${service.name} — spesifikasi, SLA & paket`,
  };
  const title = `${titles[variant.id]} | Biotama`;
  const description = `${service.intro} ${service.outcomes[0]}. Konsultasi gratis 30 menit.`;
  const canonical = `https://biotama.cv/layanan/${service.slug}/${variant.id}/`;
  const image = `/assets/og-${variant.id === "v1" ? "v2" : variant.id === "v2" ? "v3" : "v1"}.png`;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
    openGraph: {
      type: "website",
      locale: "id_ID",
      siteName: "Biotama",
      url: canonical,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: `${service.name} — Biotama` }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
    other: { "content-language": "id-ID" },
  };
}

export default async function ServiceVariantPage({
  params,
}: {
  params: Promise<{ service: string; variant: string }>;
}) {
  const { service: slug, variant: variantId } = await params;
  const service = getService(slug);
  const variant = getVariant(variantId);
  if (!service || !variant) notFound();

  const canonical = `https://biotama.cv/layanan/${service.slug}/${variant.id}/`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": "https://biotama.cv/#organization",
        name: "Biotama",
        url: "https://biotama.cv",
        email: "fxwisdom1@gmail.com",
        telephone: "+62 813-9825-3186",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jakarta",
          addressCountry: "ID",
        },
        knowsAbout: servicePages.map((s) => s.name),
      },
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name: service.name,
        serviceType: service.category,
        description: service.intro,
        provider: { "@id": "https://biotama.cv/#organization" },
        areaServed: { "@type": "Country", name: "Indonesia" },
        offers: service.tiers.map((tier) => ({
          "@type": "Offer",
          name: tier.name,
          priceCurrency: "IDR",
          description: `${tier.price} · ${tier.note}`,
          availability: "https://schema.org/InStock",
          url: canonical,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: service.faqs.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Beranda", item: "https://biotama.cv/" },
          { "@type": "ListItem", position: 2, name: "Layanan", item: "https://biotama.cv/layanan/" },
          { "@type": "ListItem", position: 3, name: service.name, item: `https://biotama.cv/layanan/${service.slug}/v1/` },
          { "@type": "ListItem", position: 4, name: variant.label, item: canonical },
        ],
      },
    ],
  };

  const index = servicePages.findIndex((item) => item.slug === service.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ServiceLanding service={service} variant={variant.id as VariantId} index={index} />
    </>
  );
}
