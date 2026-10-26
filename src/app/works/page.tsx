import type { Metadata } from "next";
import BrowserFrame from "@/components/works/BrowserFrame";
import { archive, works } from "@/data/works";

const description =
  "Delapan produk yang dibangun dan dijalankan: Srabutan, Dharmakarsa, MallOps, Toko Vavelle, UMKM St. Servatius, Healer Path, Travel To Bali, dan Beligih.";
const canonical = "https://biotama.cv/works/";

export const metadata: Metadata = {
  title: { absolute: "Works — Sistem yang dipakai, bukan mockup | Biotama" },
  description,
  alternates: { canonical },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Biotama",
    url: canonical,
    title: "Works — Sistem yang dipakai, bukan mockup",
    description,
    images: [{ url: "/assets/shots/srabutan-desktop.webp", width: 1600, height: 1000, alt: "Biotama Works" }],
  },
  twitter: { card: "summary_large_image", title: "Works — Sistem yang dipakai, bukan mockup", description },
};

const extra = [
  {
    slug: "dharmakarsa",
    name: "Dharmakarsa",
    category: "Commerce OS",
    tagline: "Toko online yang dibaca AI, dibeli manusia.",
    href: "/dharmakarsa",
    accent: "#C8F169",
    shots: { desktop: "/assets/shots/dharmakarsa-desktop.webp", mobile: "/assets/shots/dharmakarsa-mobile.webp" },
  },
  {
    slug: "mallops",
    name: "MallOps Suite",
    category: "Building operations",
    tagline: "Gedung bocor tiap bulan. Pertanyaannya berapa.",
    href: "/mallops",
    accent: "#FF6B35",
    shots: { desktop: "/assets/shots/mallops-desktop.webp", mobile: "/assets/shots/mallops-mobile.webp" },
  },
];

const featured = [
  ...works.slice(0, 1).map((w) => ({ ...w, href: `/works/${w.slug}` })),
  ...extra.slice(0, 1),
  ...extra.slice(1),
  ...works.slice(1).map((w) => ({ ...w, href: `/works/${w.slug}` })),
].map((item, index) => ({ ...item, no: String(index + 1).padStart(2, "0") }));

const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7", "md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Works — Biotama",
  url: canonical,
  description,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: featured.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.href.startsWith("http") ? item.href : `https://biotama.cv${item.href}`,
    })),
  },
};

export default function WorksPage() {
  const marquee = [...featured.map((f) => f.name), ...featured.map((f) => f.name)];
  const archived = archive.filter((a) => !featured.some((f) => f.name === a.name));

  return (
    <div className="min-h-screen bg-[#080706] text-[#F2ECE2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080706]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="/" className="flex items-center gap-2 text-sm font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-[#F2ECE2] text-[#080706]">B</span>
            biotama<span className="text-[#E8B44A]">.</span>
          </a>
          <nav className="hidden items-center gap-6 text-xs text-[#A79E90] md:flex">
            <a href="#index" className="hover:text-white">Index</a>
            <a href="#archive" className="hover:text-white">Archive</a>
            <a href="/layanan" className="hover:text-white">Services</a>
          </nav>
          <a href="mailto:fxwisdom1@gmail.com?subject=Project%20inquiry" className="rounded-full bg-[#E8B44A] px-4 py-2 text-xs font-bold text-[#080706]">
            Start a project
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
          <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-16 lg:pt-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#E8B44A]">Selected works · 2017—2026</p>
            <h1 className="mt-5 max-w-5xl text-[clamp(3rem,9vw,8rem)] font-[family-name:var(--font-display)] font-semibold leading-[0.86] tracking-[-0.05em]">
              Sistem yang dipakai, <span className="italic text-[#E8B44A]">bukan mockup.</span>
            </h1>
            <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_.7fr] lg:items-end">
              <p className="max-w-xl text-base leading-relaxed text-[#A79E90]">
                Delapan produk yang kami rancang, bangun, dan jalankan. Sebagian bisa Anda buka sekarang,
                sebagian lagi menjadi mesin di belakang layar. Tidak ada logo klien fiktif di halaman ini.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[["08", "produk"], ["06", "domain live"], ["08", "tahun"]].map(([v, l]) => (
                  <div key={l} className="border-l border-white/15 pl-3">
                    <p className="font-mono text-2xl font-bold text-[#E8B44A]">{v}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-wide text-[#7E766A]">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="works-marquee bg-[#0E0D0B]">
          <div className="works-track text-2xl font-[family-name:var(--font-display)] italic text-[#3A352E] sm:text-3xl">
            {marquee.map((name, i) => (
              <span key={`${name}-${i}`} className="flex items-center gap-6">
                {name}<span className="text-[#E8B44A]">✳</span>
              </span>
            ))}
          </div>
        </div>

        <section className="mx-auto max-w-6xl px-5 py-16 lg:py-24" id="index">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-4xl">The index</h2>
            <p className="hidden max-w-xs text-right text-xs leading-relaxed text-[#7E766A] sm:block">
              Klik untuk membaca masalah, keputusan, dan hasilnya.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-5">
            {featured.map((project, i) => (
              <a key={project.slug} href={project.href} className={`work-card group block ${spans[i]}`}>
                <BrowserFrame src={project.shots.desktop} alt={`${project.name} tampilan desktop`} priority={i < 2} />
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#7E766A]">
                      {project.no} · {project.category}
                    </p>
                    <h3 className="mt-1 font-[family-name:var(--font-display)] text-2xl leading-tight transition-colors group-hover:text-white">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#A79E90]">{project.tagline}</p>
                  </div>
                  <span className="mt-1 shrink-0 text-lg text-[#E8B44A] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0E0D0B]" id="archive">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#E8B44A]">Archive</p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl tracking-tight sm:text-4xl">Sisanya juga pernah saya bangun.</h2>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#7E766A]">
                  Proyek yang tidak masuk etalase utama, tapi tetap bagian dari cara saya bekerja.
                </p>
              </div>
              <div>
                {archived.map((item, i) => (
                  <div key={item.name} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-t border-white/10 py-4">
                    <span className="font-mono text-[10px] text-[#5E574D]">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-base font-semibold">{item.name}</h3>
                    <p className="flex-1 text-xs leading-relaxed text-[#7E766A]">{item.desc}</p>
                    <p className="font-mono text-[9px] uppercase tracking-wide text-[#5E574D]">{item.tech.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#E8B44A]">Next</p>
          <h2 className="mx-auto mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-tight tracking-tight sm:text-5xl">
            Karya berikutnya bisa jadi milik Anda.
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="mailto:fxwisdom1@gmail.com?subject=Project%20inquiry" className="rounded-full bg-[#E8B44A] px-6 py-3 text-sm font-bold text-[#080706]">
              Mulai diskusi
            </a>
            <a href="/layanan" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold">
              Lihat layanan
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-7 text-[10px] text-[#5E574D]">
          <span>© {new Date().getFullYear()} Biotama · works</span>
          <div className="flex gap-5">
            <a href="/" className="hover:text-white">Beranda</a>
            <a href="/layanan" className="hover:text-white">Layanan</a>
            <a href="/works" className="hover:text-white">Works</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
