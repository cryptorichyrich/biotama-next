import type { Metadata } from "next";
import { brand, waLink } from "@/data/services";
import { servicePages, variantMeta } from "@/data/service-pages";

const title = "Layanan — 20 layanan, 3 sudut pandang, 60 halaman";
const description =
  "Katalog layanan Biotama: chatbot AI, POS, aplikasi mobile, data analytics, cybersecurity, CCTV, digital marketing, IT consulting, website, marketplace, bootcamp, cloud, jaringan, PC, game, arsip, animasi, smart home, IT support, dan drone.";
const canonical = `https://${brand.domain}/layanan/`;

export const metadata: Metadata = {
  title: { absolute: `${title} | Biotama` },
  description,
  alternates: { canonical },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Biotama",
    url: canonical,
    title,
    description,
    images: [{ url: "/assets/og-v2.png", width: 1200, height: 630, alt: "Layanan Biotama" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/og-v2.png"],
  },
};

const variantTone: Record<string, string> = {
  v1: "border-[#0E6B5C]/60 text-[#7FD3C2] hover:bg-[#0E6B5C]/15",
  v2: "border-[#FF5A1F]/60 text-[#FF9A73] hover:bg-[#FF5A1F]/15",
  v3: "border-[#35D0C6]/60 text-[#8BE9E3] hover:bg-[#35D0C6]/10",
};

export default function LayananPage() {
  const categories = Array.from(new Set(servicePages.map((s) => s.category)));

  return (
    <div className="layanan-hub min-h-screen bg-[#070B12] text-[#E7EDF5]">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-5">
          <a href="/" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#3AE2B4] text-[#04110D]">
              B
            </span>
            <span className="text-lg">
              biotama<span className="text-[#3AE2B4]">.</span>
            </span>
          </a>
          <nav className="flex items-center gap-4 text-sm text-white/65">
            <a href="/portfolio" className="hidden hover:text-white sm:block">
              Portofolio
            </a>
            <a href="/llms.txt" className="hidden hover:text-white sm:block">
              llms.txt
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="rounded-lg bg-[#3AE2B4] px-4 py-2 font-semibold text-[#04110D]"
            >
              Konsultasi
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-14">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#3AE2B4]">
          Katalog · {servicePages.length} layanan · {servicePages.length * 3} halaman
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Setiap layanan punya tiga cara bercerita.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/60">
          Versi <strong className="text-white/80">Editorial</strong> untuk presentasi ke manajemen,
          <strong className="text-white/80"> Poster</strong> untuk kampanye yang berani, dan
          <strong className="text-white/80"> Terminal</strong> untuk tim teknis. Isi dan penawarannya
          sama, sudut pandangnya berbeda.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {variantMeta.map((v) => (
            <div key={v.id} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#3AE2B4]">
                {v.id} · {v.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{v.angle}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 space-y-12">
          {categories.map((category) => {
            const items = servicePages.filter((s) => s.category === category);
            return (
              <section key={category}>
                <div className="flex items-baseline justify-between border-b border-white/10 pb-3">
                  <h2 className="text-lg font-semibold">{category}</h2>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white/35">
                    {items.length} layanan
                  </span>
                </div>
                <div>
                  {items.map((service) => {
                    const number = servicePages.findIndex((s) => s.slug === service.slug) + 1;
                    return (
                      <div
                        key={service.slug}
                        className="grid gap-3 border-b border-white/5 py-5 md:grid-cols-[40px_1fr_auto] md:items-center"
                      >
                        <span className="font-mono text-xs text-white/35">
                          {String(number).padStart(2, "0")}
                        </span>
                        <div>
                          <h3 className="text-base font-semibold">{service.name}</h3>
                          <p className="mt-1 text-xs leading-relaxed text-white/50">
                            {service.tagline}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {variantMeta.map((v) => (
                            <a
                              key={v.id}
                              href={`/layanan/${service.slug}/${v.id}`}
                              className={`rounded-md border px-3 py-1.5 font-mono text-[10px] uppercase tracking-wide transition ${variantTone[v.id]}`}
                            >
                              {v.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-[#3AE2B4]/10 to-transparent p-8">
          <h2 className="text-2xl font-semibold">Bingung pilih layanan atau sudut pandang?</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60">
            Ceritakan masalah operasionalnya. Kami bantu pilih layanan dan format yang paling
            relevan dalam sesi 30 menit, tanpa biaya.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="rounded-lg bg-[#3AE2B4] px-5 py-3 text-sm font-semibold text-[#04110D]"
            >
              WhatsApp {brand.phoneDisplay}
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold"
            >
              {brand.email}
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-7 text-xs text-white/45">
          <span>
            © {new Date().getFullYear()} {brand.name}. Seluruh hak cipta dilindungi.
          </span>
          <div className="flex gap-5">
            <a href="/" className="hover:text-white">
              Beranda
            </a>
            <a href="/portfolio" className="hover:text-white">
              Portofolio
            </a>
            <a href="/llms.txt" className="hover:text-white">
              llms.txt
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
