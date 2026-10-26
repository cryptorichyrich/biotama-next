import { brand, faqs, services } from "@/data/services";

type SchemaOptions = {
  canonical: string;
  title: string;
  description: string;
  breadcrumbLabel: string;
  pageLabel: string;
  image: string;
};

export function serviceSchema({
  canonical,
  title,
  description,
  breadcrumbLabel,
  pageLabel,
  image,
}: SchemaOptions) {
  const base = `https://${brand.domain}`;
  const orgId = `${base}/#organization`;
  const siteId = `${base}/#website`;
  const pageId = `${canonical}#webpage`;

  const serviceNodes = services.map((service) => ({
    "@type": "Service",
    "@id": `${canonical}#service-${service.id}`,
    name: service.seo,
    serviceType: service.name,
    description: service.desc,
    provider: { "@id": orgId },
    areaServed: [{ "@type": "Country", name: "Indonesia" }],
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "UMKM, startup, dan perusahaan menengah di Indonesia",
    },
    url: `${canonical}#${service.id}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: String(service.priceIdr),
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "IDR",
        minPrice: String(service.priceIdr),
        valueAddedTaxIncluded: false,
      },
      availability: "https://schema.org/InStock",
      url: `${canonical}#harga`,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": orgId,
        name: brand.name,
        legalName: brand.legal,
        alternateName: "Biotama Digital",
        url: base,
        logo: {
          "@type": "ImageObject",
          url: `${base}/assets/logo-biotama.png`,
          width: 512,
          height: 512,
        },
        image: `${base}${image}`,
        description:
          "Biotama adalah mitra teknologi di Jakarta yang membangun chatbot AI, aplikasi mobile, sistem kasir POS, dashboard data, infrastruktur IT, keamanan siber, CCTV, dan strategi digital marketing untuk bisnis Indonesia.",
        slogan: brand.tagline,
        foundingDate: brand.founded,
        email: brand.email,
        telephone: brand.phoneDisplay,
        address: {
          "@type": "PostalAddress",
          streetAddress: brand.address.street,
          addressLocality: brand.address.city,
          addressRegion: brand.address.region,
          postalCode: brand.address.postal,
          addressCountry: brand.address.country,
        },
        areaServed: [
          { "@type": "Country", name: "Indonesia" },
          { "@type": "City", name: "Jakarta" },
          { "@type": "City", name: "Bandung" },
          { "@type": "City", name: "Surabaya" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
            ],
            opens: "09:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "09:00",
            closes: "13:00",
          },
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            telephone: brand.phoneDisplay,
            email: brand.email,
            areaServed: "ID",
            availableLanguage: ["Indonesian", "English"],
          },
        ],
        sameAs: [
          `https://www.linkedin.com/company/${brand.domain.split(".")[0]}`,
          `https://www.instagram.com/${brand.domain.split(".")[0]}`,
        ],
        knowsAbout: services.map((service) => service.seo),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Layanan Biotama",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: { "@id": `${canonical}#service-${service.id}` },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: base,
        name: brand.name,
        inLanguage: "id-ID",
        publisher: { "@id": orgId },
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: canonical,
        name: title,
        description,
        isPartOf: { "@id": siteId },
        about: { "@id": orgId },
        inLanguage: "id-ID",
        dateModified: "2026-02-10",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${base}${image}`,
        },
        breadcrumb: { "@id": `${canonical}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: `${base}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: pageLabel,
            item: canonical,
          },
        ],
      },
      ...serviceNodes,
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };
}
