import type { Metadata } from "next";
import { brand, waLink } from "@/data/services";

const title = "Dharmakarsa — Agentic Commerce & Operations OS";
const description =
  "Dharmakarsa menyatukan storefront, admin, API, dan agent gateway dalam satu sistem multi-tenant. Agent boleh bekerja, tetapi setiap aksi melewati policy, persetujuan, dan jejak audit.";
const canonical = `https://${brand.domain}/dharmakarsa/`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Biotama",
    url: canonical,
    title,
    description,
    images: [
      {
        url: "/assets/og-dharmakarsa.png",
        width: 1200,
        height: 630,
        alt: "Dharmakarsa — agentic commerce and operations OS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/og-dharmakarsa.png"],
  },
  other: { "content-language": "id-ID" },
};

const modules = [
  {
    no: "01",
    title: "Storefront multi-tenant",
    desc: "Satu basis kode, konfigurasi per klien. Storefront Astro dengan katalog, cart, checkout, dan halaman legal yang bisa diganti tanpa fork.",
    tag: "52 halaman",
  },
  {
    no: "02",
    title: "Admin & runtime theme",
    desc: "Admin 39 halaman untuk produk, pesanan, konten, dan tema. Warna dan tipografi bisa diubah dari panel tanpa deploy ulang.",
    tag: "39 halaman",
  },
  {
    no: "03",
    title: "Satu API gateway",
    desc: "Logika bisnis, otorisasi, dan audit ditulis sekali di edge, lalu dipakai oleh storefront, admin, dan agent.",
    tag: "Hono · Workers",
  },
  {
    no: "04",
    title: "Agent gateway",
    desc: "MCP, UCP, ACP, dan REST sebagai pintu masuk. Tool yang tersedia dibatasi per tenant, bukan akses bebas ke database.",
    tag: "MCP · UCP · ACP",
  },
  {
    no: "05",
    title: "Policy & approval",
    desc: "Policy engine deterministik, approval inbox untuk aksi berisiko, dan change set yang bisa ditinjau sebelum dieksekusi.",
    tag: "human in the loop",
  },
  {
    no: "06",
    title: "Rental & evidence",
    desc: "Modul sewa unit dengan ketersediaan, booking, checklist, dan foto bukti ber-watermark. Sudah berjalan di pilot pertama.",
    tag: "live · mig 0059–0062",
  },
];

const security = [
  {
    no: "01",
    title: "Isolasi tenant",
    desc: "Token per tenant, konfigurasi per tenant, dan akses lintas tenant ditolak secara desain.",
  },
  {
    no: "02",
    title: "Policy, bukan prompt",
    desc: "Setiap tool punya izin eksplisit. Model tidak bisa menambah kemampuan hanya dengan instruksi.",
  },
  {
    no: "03",
    title: "Approval inbox",
    desc: "Aksi yang mengubah uang, stok, atau konten menunggu persetujuan manusia sebelum dieksekusi.",
  },
  {
    no: "04",
    title: "Change set & audit",
    desc: "Perubahan dikelompokkan, dicatat, dan bisa ditinjau ulang. Tidak ada tulisan agent langsung ke D1.",
  },
];

const faqs: [string, string][] = [
  [
    "Apakah Dharmakarsa hanya untuk toko online?",
    "Tidak. Intinya adalah commerce dan operasional: katalog, checkout, pembayaran, pengiriman, sewa unit, bukti serah terima, dan konten. Storefront adalah salah satu antarmuka, bukan keseluruhan sistem.",
  ],
  [
    "Bagaimana agent dicegah mengubah data sembarangan?",
    "Agent tidak menulis langsung ke database. Ia memanggil tool di edge, dan setiap tool melewati policy, validasi, serta approval untuk aksi berisiko. Semua perubahan masuk ke change set dan tercatat.",
  ],
  [
    "Bisakah dipakai untuk klien kedua?",
    "Bisa. Tenant dikonfigurasi lewat client config dan script onboarding. Storefront dan admin dibangun dari basis yang sama, dengan teks, tema, dan konten per klien.",
  ],
  [
    "Apakah harus memakai Cloudflare?",
    "Stack produksi berjalan di Cloudflare Workers, D1, KV, R2, Queues, dan Durable Objects. Alasannya operasional: satu orang harus bisa deploy, memantau, dan mematikan sistem tanpa tim platform besar.",
  ],
];

export default function DharmakarsaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Dharmakarsa",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: canonical,
        description,
        creator: {
          "@type": "Organization",
          name: "Biotama",
          url: `https://${brand.domain}`,
        },
        featureList: modules.map((m) => m.title),
      },
      {
        "@type": "FAQPage",
        "@id": `${canonical}#faq`,
        mainEntity: faqs.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Beranda", item: `https://${brand.domain}/` },
          { "@type": "ListItem", position: 2, name: "Dharmakarsa", item: canonical },
        ],
      },
    ],
  };

  return (
    <div className="dharma-page min-h-screen bg-[#070B0F] text-[#E6F0EC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070B0F]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="/dharmakarsa" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-md border border-[#3AE2B4]/40 bg-[#3AE2B4]/10 font-mono text-xs font-bold text-[#3AE2B4]">
              DK
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-tight">Dharmakarsa</span>
              <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-[#8CA19A]">
                agentic OS · by Biotama
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-xs text-[#A9BDB6] md:flex">
            <a href="#platform" className="hover:text-white">Platform</a>
            <a href="#arsitektur" className="hover:text-white">Arsitektur</a>
            <a href="#keamanan" className="hover:text-white">Keamanan</a>
            <a href="#pilot" className="hover:text-white">Pilot</a>
          </nav>
          <a
            href={`mailto:${brand.email}?subject=Demo%20Dharmakarsa`}
            className="rounded-md bg-[#3AE2B4] px-4 py-2 text-xs font-bold text-[#04110D]"
          >
            Minta demo
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(58,226,180,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(58,226,180,.25) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage: "radial-gradient(circle at 50% 20%, black, transparent 75%)",
            }}
          />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.15fr_.85fr] lg:py-24">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#3AE2B4]">
                Agentic commerce &amp; operations OS
              </p>
              <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl">
                Commerce yang bisa dijalankan agent, tanpa kehilangan kendali.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#A9BDB6]">
                Dharmakarsa menyatukan storefront, admin, API, dan agent gateway dalam
                satu sistem multi-tenant. Agent boleh bekerja, tetapi setiap aksi
                melewati policy, persetujuan, dan jejak audit.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <a
                  href={`mailto:${brand.email}?subject=Demo%20Dharmakarsa`}
                  className="rounded-md bg-[#3AE2B4] px-5 py-3 font-bold text-[#04110D]"
                >
                  Minta demo privat
                </a>
                <a
                  href="#arsitektur"
                  className="rounded-md border border-white/20 px-5 py-3 font-semibold text-[#D7E6E1]"
                >
                  Lihat arsitektur
                </a>
              </div>
              <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[#8CA19A]">
                <li>tenant-scoped</li>
                <li>agent off critical path</li>
                <li>approval sebelum eksekusi</li>
              </ul>
            </div>

            <aside className="self-start rounded-xl border border-white/12 bg-[#0B1216] p-5 font-mono text-[11px]">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[9px] uppercase tracking-[0.18em] text-[#8CA19A]">
                  runtime · pilot
                </span>
                <span className="text-[#3AE2B4]">● healthy</span>
              </div>
              <dl className="mt-2 divide-y divide-white/5">
                {[
                  ["edge", "Cloudflare Workers"],
                  ["api", "Hono · REST + adapters"],
                  ["data", "D1 · KV · R2 · Queues"],
                  ["storefront", "Astro · 52 halaman"],
                  ["admin", "39 halaman · runtime theme"],
                  ["agents", "MCP · UCP · ACP"],
                  ["client", "Toko Vavelle"],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-[80px_1fr] gap-3 py-3">
                    <dt className="text-[#6F827C]">{k}</dt>
                    <dd className="text-[#D7E6E1]">{v}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#0A1115]">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 py-8 sm:grid-cols-4">
            {[
              ["52", "halaman storefront"],
              ["39", "halaman admin"],
              ["1", "API gateway"],
              ["0", "tulisan agent langsung ke DB"],
            ].map(([v, l]) => (
              <div key={l} className="px-2 py-3">
                <p className="font-mono text-2xl font-bold text-[#3AE2B4]">{v}</p>
                <p className="mt-1 text-[10px] uppercase tracking-wide text-[#8CA19A]">{l}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16" id="masalah">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFC46B]">
            Masalah
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Tiga hal yang bikin commerce agency berhenti tumbuh.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Toko baru, kode baru", "Setiap klien dimulai dari fork. Perbaikan di satu toko tidak otomatis sampai ke toko lain."],
              ["Agent tanpa pagar", "Agent diberi akses langsung ke database, lalu berharap prompt cukup untuk menjaga batas."],
              ["Operasional tercecer", "Tema, konten, stok, dan pesanan tersebar di banyak panel yang tidak saling bicara."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-lg border border-white/10 bg-[#0B1216] p-5">
                <h3 className="text-base font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#8CA19A]">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0A1115]" id="platform">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#3AE2B4]">
              Platform
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Enam bagian yang membuat agent aman dijalankan.
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {modules.map((m) => (
                <article key={m.no} className="rounded-lg border border-white/10 bg-[#070B0F] p-5">
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#6F827C]">
                    <span>{m.no}</span>
                    <span className="text-[#3AE2B4]">{m.tag}</span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#8CA19A]">{m.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16" id="arsitektur">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#3AE2B4]">
            Arsitektur
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Dua bidang, satu batas.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#8CA19A]">
            Bidang edge melayani manusia. Bidang agent melayani otomasi. Keduanya
            bertemu di tool gateway, bukan di database.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <div className="rounded-lg border border-[#3AE2B4]/30 bg-[#0B1216] p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#3AE2B4]">
                edge plane · per tenant
              </p>
              <div className="mt-4 space-y-2 font-mono text-[11px]">
                {[
                  ["Storefront", "Astro · 52 halaman · runtime theme"],
                  ["Admin", "39 halaman · konten, pesanan, tema"],
                  ["API", "Hono di Workers · REST"],
                  ["Data", "D1 · KV · R2 · Queues · DO"],
                ].map(([k, v], i) => (
                  <div key={k}>
                    <div className="rounded border border-white/12 bg-[#070B0F] p-3">
                      <span className="text-[#3AE2B4]">{k}</span>
                      <span className="ml-3 text-[#8CA19A]">{v}</span>
                    </div>
                    {i < 3 && <p className="py-1 text-center text-[#3A4A46]">↓</p>}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-[#FFC46B]/30 bg-[#0B1216] p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#FFC46B]">
                agent plane · guardrails
              </p>
              <div className="mt-4 space-y-2 font-mono text-[11px]">
                {[
                  ["Agent", "MCP · UCP · ACP · REST"],
                  ["Model gateway", "routing · fallback · budget"],
                  ["Tool gateway", "allowlist per tenant"],
                  ["Policy & approval", "deterministic · change set · audit"],
                ].map(([k, v], i) => (
                  <div key={k}>
                    <div className="rounded border border-white/12 bg-[#070B0F] p-3">
                      <span className="text-[#FFC46B]">{k}</span>
                      <span className="ml-3 text-[#8CA19A]">{v}</span>
                    </div>
                    {i < 3 && <p className="py-1 text-center text-[#3A4A46]">↓</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-4 rounded border border-dashed border-[#3AE2B4]/30 bg-[#3AE2B4]/5 px-4 py-3 font-mono text-[11px] text-[#B9D9CF]">
            Aturan: agent tidak pernah menulis langsung ke D1. Semua aksi lewat tool di edge.
          </p>
        </section>

        <section className="border-y border-white/10 bg-[#0A1115]" id="keamanan">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFC46B]">
              Keamanan
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Agent boleh cepat. Batasnya tetap tegas.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {security.map((s) => (
                <div key={s.no} className="flex gap-4 border-t border-white/10 pt-4">
                  <span className="font-mono text-[10px] text-[#3AE2B4]">{s.no}</span>
                  <div>
                    <h3 className="text-sm font-semibold">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#8CA19A]">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16" id="pilot">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#3AE2B4]">
                Pilot
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Bukan demo. Sudah dipakai jualan.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#8CA19A]">
                Deployment pertama adalah Toko Vavelle. Storefront, admin, tema,
                dan modul sewa berjalan di stack yang sama. Yang belum selesai
                kami tulis terbuka, bukan disembunyikan di balik kata pilot.
              </p>
              <a
                href={`mailto:${brand.email}?subject=Studi%20kasus%20Dharmakarsa`}
                className="mt-6 inline-flex rounded-md border border-white/20 px-4 py-2.5 text-xs font-semibold"
              >
                Minta walkthrough
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Storefront", "52 halaman", "katalog, cart, checkout, konten"],
                ["Admin", "39 halaman", "produk, pesanan, tema, tenant"],
                ["Theme runtime", "tanpa deploy", "warna dan tipografi dari panel"],
                ["Rental & evidence", "live", "unit, booking, checklist, foto bukti"],
              ].map(([t, v, d]) => (
                <div key={t} className="rounded-lg border border-white/10 bg-[#0B1216] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-wide text-[#6F827C]">{t}</p>
                  <p className="mt-2 text-xl font-semibold text-[#3AE2B4]">{v}</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-[#8CA19A]">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#0A1115]">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FFC46B]">
              Cocok untuk
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                ["Agency & studio", "Klien bertambah, tim tetap kecil. Butuh basis yang bisa dipakai ulang tanpa fork."],
                ["Multi-brand operator", "Beberapa merek, satu operasional. Butuh isolasi data dan tema per merek."],
                ["Marketplace & rental", "Produk, sewa, dan bukti serah terima dalam satu alur, bukan tiga sistem."],
              ].map(([t, d]) => (
                <div key={t} className="border-t border-white/10 pt-4">
                  <h3 className="text-base font-semibold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#8CA19A]">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-16" id="faq">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Pertanyaan teknis</h2>
          <div className="mt-6">
            {faqs.map(([q, a]) => (
              <details key={q} className="border-t border-white/10 py-4">
                <summary className="cursor-pointer list-none text-sm font-semibold">{q}</summary>
                <p className="mt-2 text-sm leading-relaxed text-[#8CA19A]">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#3AE2B4] text-[#04110D]">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-12">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-70">
                Demo privat
              </p>
              <h2 className="mt-2 max-w-xl text-2xl font-bold leading-tight sm:text-3xl">
                Lihat Dharmakarsa dengan data dan tenant contoh.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${brand.email}?subject=Demo%20Dharmakarsa`}
                className="rounded-md bg-[#04110D] px-5 py-3 text-sm font-bold text-[#3AE2B4]"
              >
                {brand.email}
              </a>
              <a
                href={waLink("Halo Biotama, saya ingin demo Dharmakarsa.")}
                target="_blank"
                rel="noopener"
                className="rounded-md border border-[#04110D]/30 px-5 py-3 text-sm font-bold"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#070B0F]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-7 text-[10px] text-[#6F827C]">
          <span>© {new Date().getFullYear()} Dharmakarsa · dibangun oleh Biotama</span>
          <div className="flex gap-5">
            <a href="/" className="hover:text-white">biotama.cv</a>
            <a href="/layanan" className="hover:text-white">Layanan</a>
            <a href="/mallops" className="hover:text-white">MallOps</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
