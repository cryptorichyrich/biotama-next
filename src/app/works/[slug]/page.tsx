import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BrowserFrame from "@/components/works/BrowserFrame";
import AppleShowcase from "@/components/service-pages/AppleShowcase";
import { works } from "@/data/works";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((item) => item.slug === slug);
  if (!work) return {};
  const title = `${work.name} — ${work.category} | Biotama Works`;
  const description = work.description;
  const canonical = `https://biotama.cv/works/${work.slug}/`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
    openGraph: {
      type: "article",
      locale: "id_ID",
      siteName: "Biotama",
      url: canonical,
      title,
      description,
      images: [{ url: work.shots.desktop, width: 1600, height: 1000, alt: work.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: [work.shots.desktop] },
  };
}

export default async function WorkPage({ params }: Params) {
  const { slug } = await params;
  const index = works.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();
  const work = works[index];
  const next = works[(index + 1) % works.length];
  const p = work.palette;
  const font = work.font === "serif" ? "font-[family-name:var(--font-display)]" : "font-sans";
  const canonical = `https://biotama.cv/works/${work.slug}/`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        name: work.name,
        url: canonical,
        description: work.description,
        creator: { "@type": "Organization", name: "Biotama", url: "https://biotama.cv" },
        keywords: work.stack.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Beranda", item: "https://biotama.cv/" },
          { "@type": "ListItem", position: 2, name: "Works", item: "https://biotama.cv/works/" },
          { "@type": "ListItem", position: 3, name: work.name, item: canonical },
        ],
      },
    ],
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: p.bg, color: p.ink }}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="sticky top-0 z-50 border-b backdrop-blur-xl" style={{ borderColor: `${p.ink}1f`, backgroundColor: `${p.bg}e6` }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="/works" className="flex items-center gap-2 text-xs font-semibold" style={{ color: p.muted }}>
            <span aria-hidden="true">←</span> Works
          </a>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: p.muted }}>
            {work.category} · {work.status}
          </span>
          <a
            href={work.live}
            target="_blank"
            rel="noopener"
            className="rounded-full px-4 py-2 text-xs font-bold"
            style={{ backgroundColor: p.ink, color: p.bg }}
          >
            Buka situs ↗
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <span
            aria-hidden="true"
            className={`${font} pointer-events-none absolute -top-10 right-0 select-none text-[16rem] leading-none opacity-[0.05] sm:text-[24rem]`}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="relative mx-auto max-w-6xl px-5 pb-12 pt-16 lg:pt-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: p.muted }}>
              {work.category} · {work.role}
            </p>
            <h1 className={`${font} mt-5 text-[clamp(3rem,9vw,7rem)] leading-[0.9] tracking-[-0.05em]`}>
              {work.name}
            </h1>
            <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
              <p className={`${font} max-w-2xl text-2xl leading-snug`} style={{ color: p.ink }}>
                {work.tagline}
              </p>
              <p className="max-w-md text-sm leading-relaxed lg:justify-self-end" style={{ color: p.muted }}>
                {work.description}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-xs" style={{ color: p.muted }}>
              <span>{work.stack.join(" · ")}</span>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-5 pb-16">
            <BrowserFrame src={work.shots.desktop} alt={`${work.name} tampilan desktop`} priority />
          </div>
        </section>

        <section className="border-y" style={{ borderColor: `${p.ink}1f` }}>
          <div className="mx-auto grid max-w-6xl gap-px sm:grid-cols-3" style={{ backgroundColor: `${p.ink}1f` }}>
            {work.outcomes.map((item) => (
              <div key={item.l} className="p-6" style={{ backgroundColor: p.bg }}>
                <p className={`${font} text-3xl font-semibold`}>{item.v}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide" style={{ color: p.muted }}>{item.l}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: p.muted }}>Masalah</p>
              <h2 className={`${font} mt-3 text-2xl leading-tight tracking-tight sm:text-3xl`}>Yang bikin repot sebelum ada sistem.</h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: p.muted }}>{work.challenge}</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: p.muted }}>Keputusan</p>
              <h2 className={`${font} mt-3 text-2xl leading-tight tracking-tight sm:text-3xl`}>Yang kami bangun, dan kenapa.</h2>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: p.muted }}>{work.solution}</p>
            </div>
          </div>
        </section>

        <section className="border-y" style={{ borderColor: `${p.ink}1f`, backgroundColor: p.card }}>
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: p.muted }}>Tiga hal yang menonjol</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {work.highlights.map((item, i) => (
                <div key={item.title} className="border-t pt-4" style={{ borderColor: `${p.ink}26` }}>
                  <span className="font-mono text-[10px]" style={{ color: p.muted }}>0{i + 1}</span>
                  <h3 className={`${font} mt-2 text-xl leading-snug`}>{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: p.muted }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: p.muted }}>Responsive</p>
              <h2 className={`${font} mt-3 text-3xl tracking-tight sm:text-4xl`}>Layar besar, layar saku.</h2>
            </div>
            <p className="max-w-sm text-xs leading-relaxed" style={{ color: p.muted }}>
              Screenshot diambil dari situs yang berjalan, bukan komposisi di Figma.
            </p>
          </div>
          <div className="mt-8">
            <AppleShowcase accent={p.accent} shot={{ desktop: work.shots.desktop, mobile: work.shots.mobile, name: work.name }} />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-20">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t pt-6" style={{ borderColor: `${p.ink}1f` }}>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: p.muted }}>Berikutnya</p>
              <a href={`/works/${next.slug}`} className={`${font} mt-2 block text-2xl hover:opacity-70`}>
                {next.name} →
              </a>
            </div>
            <a
              href={`mailto:fxwisdom1@gmail.com?subject=${encodeURIComponent(work.name)}`}
              className="rounded-full px-5 py-3 text-sm font-bold"
              style={{ backgroundColor: p.ink, color: p.bg }}
            >
              Diskusikan proyek seperti ini
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t" style={{ borderColor: `${p.ink}1f` }}>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-7 text-[10px]" style={{ color: p.muted }}>
          <span>© {new Date().getFullYear()} {work.name} · dibangun oleh Biotama</span>
          <div className="flex gap-5">
            <a href="/works" className="hover:opacity-70">Works</a>
            <a href="/" className="hover:opacity-70">biotama.cv</a>
            <a href={work.live} target="_blank" rel="noopener" className="hover:opacity-70">Live site</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
