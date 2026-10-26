import type { Metadata } from "next";
import Link from "next/link";
import { services, brand, waLink } from "@/data/services";

const title = "Layanan — AI, Software, Infrastruktur & Pertumbuhan";
const description =
  "11 layanan Biotama: chatbot AI, aplikasi mobile, sistem kasir POS, data analytics, managed IT, keamanan siber, CCTV, digital marketing, marketplace, dan bootcamp coding.";
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

const tracks = [
  {
    href: "/layanan/ai",
    label: "AI & Automation",
    desc: "Chatbot, otomasi, data, dan produk digital. Untuk tim yang ingin mengurangi kerja berulang.",
    accent: "#3AE2B4",
  },
  {
    href: "/layanan/enterprise",
    label: "Enterprise",
    desc: "Managed IT, keamanan siber, dan tata kelola teknologi dengan SLA yang bisa diaudit.",
    accent: "#0E6B5C",
  },
  {
    href: "/layanan/growth",
    label: "Growth",
    desc: "Kasir, website, iklan, dan operasional marketplace. Untuk bisnis yang butuh hasil cepat.",
    accent: "#FF5A1F",
  },
];

export default function LayananPage() {
  return (
    <div className="min-h-screen bg-[#070B12] text-[#E7EDF5]">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#3AE2B4] text-[#04110D]">
              B
            </span>
            <span className="text-lg">
              biotama<span className="text-[#3AE2B4]">.</span>
            </span>
          </Link>
          <nav className="flex items-center gap-3 text-sm text-white/70 sm:gap-5">
            <div className="hidden items-center gap-5 sm:flex">
              <Link href="/layanan/ai" className="hover:text-white">
                AI
              </Link>
              <Link href="/layanan/enterprise" className="hover:text-white">
                Enterprise
              </Link>
              <Link href="/layanan/growth" className="hover:text-white">
                Growth
              </Link>
            </div>
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

      <main className="mx-auto max-w-6xl px-5 py-16">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#3AE2B4]">
          Layanan · Biotama
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          Sebelas layanan, satu tim yang bertanggung jawab.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65">
          Pilih jalur yang paling dekat dengan masalah Anda. Setiap jalur memuat
          layanan lengkap, proses kerja, dan cara menghubungi tim.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {tracks.map((track) => (
            <Link
              key={track.href}
              href={track.href}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/25 hover:bg-white/[0.05]"
            >
              <span
                className="mb-5 block h-1 w-10 rounded-full"
                style={{ backgroundColor: track.accent }}
              />
              <h2 className="text-xl font-semibold">{track.label}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{track.desc}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#3AE2B4]">
                Buka halaman
                <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>

        <section className="mt-20 border-t border-white/10 pt-12">
          <h2 className="text-2xl font-semibold">Semua layanan</h2>
          <div className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/layanan/enterprise/#${service.id}`}
                className="group flex gap-4 border-b border-white/10 pb-4"
              >
                <span className="font-mono text-xs text-[#3AE2B4]">{service.no}</span>
                <span>
                  <span className="block text-sm font-semibold group-hover:text-[#3AE2B4]">
                    {service.name}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-white/50">
                    {service.short}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-br from-[#3AE2B4]/10 to-transparent p-8">
          <h2 className="text-2xl font-semibold">Belum yakin mulai dari mana?</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65">
            Ceritakan masalah operasional Anda. Kami bantu memetakan prioritas
            dalam sesi 30 menit, tanpa biaya dan tanpa kewajiban lanjut.
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
              className="rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white"
            >
              {brand.email}
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-xs text-white/50">
          <span>
            © {new Date().getFullYear()} {brand.name}. Seluruh hak cipta dilindungi.
          </span>
          <div className="flex gap-5">
            <Link href="/" className="hover:text-white">
              Beranda
            </Link>
            <Link href="/portfolio" className="hover:text-white">
              Portofolio
            </Link>
            <a href="/llms.txt" className="hover:text-white">
              llms.txt
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
