import type { Metadata } from "next";
import { brand, waLink } from "@/data/services";

const title = "Dharmakarsa — Toko online yang dibaca AI, dibeli manusia";
const description =
  "Dharmakarsa membangun toko online yang siap era AI: katalog terbaca agent, checkout tetap enak untuk manusia, admin gampang dipakai tim. Launch 3-4 minggu.";
const canonical = `https://${brand.domain}/dharmakarsa/`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Biotama",
    url: canonical,
    title,
    description,
    images: [{ url: "/assets/og-dharmakarsa.png", width: 1200, height: 630, alt: "Dharmakarsa — toko online untuk era AI" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/assets/og-dharmakarsa.png"] },
  other: { "content-language": "id-ID" },
};

const layers = [
  {
    no: "01",
    tag: "Manusia",
    title: "Storefront yang bikin orang percaya",
    desc: "Halaman cepat, foto tajam, checkout singkat. Tanpa popup mengganggu, tanpa alur yang bikin batal.",
    points: ["Mobile-first", "Checkout 2 langkah", "SEO teknis"],
  },
  {
    no: "02",
    tag: "Mesin",
    title: "Katalog yang bisa dibaca agent",
    desc: "Produk, harga, stok, dan kebijakan toko dalam format yang dipahami AI pencari dan shopping agent.",
    points: ["Schema.org lengkap", "Product feed", "Agent endpoint"],
  },
  {
    no: "03",
    tag: "Operator",
    title: "Admin yang tidak bikin tim kewalahan",
    desc: "Produk, pesanan, konten, tema, dan sewa dalam satu panel. Ubah tampilan tanpa deploy.",
    points: ["39 halaman admin", "Runtime theme", "Rental & bukti"],
  },
];

const deliverables = [
  "Storefront siap jual, 40+ halaman",
  "Admin produk, pesanan, konten, dan tema",
  "Katalog machine-readable: schema, feed, API",
  "Checkout, pembayaran, dan pengiriman",
  "Modul sewa, booking, dan bukti serah terima",
  "Analytics dan audit akses agent",
  "Onboarding tim dan dokumentasi",
];

const packages = [
  {
    name: "Launch",
    price: "Rp 35 jt",
    note: "3-4 minggu",
    for: "Brand baru atau toko yang mau pindah dari template.",
    items: ["1 brand", "40 halaman storefront", "Admin lengkap", "Agent-ready dasar", "Training 2 sesi"],
  },
  {
    name: "Growth",
    price: "Rp 75 jt",
    note: "5-7 minggu",
    for: "Toko yang butuh sewa, multi-brand, atau integrasi.",
    items: ["3 brand", "Modul rental & bukti", "Integrasi pembayaran", "Agent endpoint + policy", "Pendampingan 60 hari"],
  },
  {
    name: "Partner",
    price: "Custom",
    note: "retainer",
    for: "Agency atau operator yang ingin basis putih-label.",
    items: ["Tenant tak terbatas", "Onboarding klien", "SLA & monitoring", "Roadmap bersama"],
  },
];

const faqs: [string, string][] = [
  [
    "Apa maksudnya toko yang bisa dibaca AI?",
    "Artinya katalog, harga, stok, dan kebijakan toko disajikan dalam format terstruktur yang bisa dibaca assistant dan shopping agent: schema.org, product feed, dan endpoint resmi. Jadi saat calon pembeli bertanya ke AI, toko Anda punya kesempatan muncul sebagai jawaban, bukan hanya saat mereka mengetik di Google.",
  ],
  [
    "Apakah agent bisa checkout sendiri?",
    "Bisa dibuka bertahap, tetapi tidak harus. Default kami: agent boleh mencari, membandingkan, dan menyiapkan keranjang; keputusan membayar tetap di tangan manusia kecuali Anda mengaktifkan alur khusus dengan policy dan batas nominal.",
  ],
  [
    "Bedanya dengan Shopify atau WooCommerce?",
    "Anda dapat storefront yang dirancang untuk brand Anda, bukan template yang sama dengan ribuan toko lain. Datanya milik Anda, kodenya diserahkan, dan lapisan agent serta modul sewa bisa dibangun sesuai model bisnis.",
  ],
  [
    "Kalau saya sudah punya toko, bisa migrasi?",
    "Bisa. Kami migrasi produk, pelanggan, pesanan, dan URL penting dengan redirect plan supaya trafik tidak jatuh. Migrasi diuji di staging sebelum cutover.",
  ],
  [
    "Berapa lama sampai bisa jualan?",
    "Paket Launch 3-4 minggu setelah konten dan akses siap. Yang paling sering memperlambat bukan coding, tapi kesiapan foto, deskripsi, dan kebijakan toko.",
  ],
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Service", "SoftwareApplication"],
      name: "Dharmakarsa",
      serviceType: "Pembuatan toko online untuk era AI",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: canonical,
      description,
      provider: { "@type": "Organization", name: "Biotama", url: `https://${brand.domain}` },
      areaServed: { "@type": "Country", name: "Indonesia" },
      offers: packages.map((p) => ({
        "@type": "Offer",
        name: p.name,
        priceCurrency: "IDR",
        description: `${p.price} · ${p.note}`,
        availability: "https://schema.org/InStock",
        url: canonical,
      })),
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
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: `https://${brand.domain}/` },
        { "@type": "ListItem", position: 2, name: "Dharmakarsa", item: canonical },
      ],
    },
  ],
};

export default function DharmakarsaPage() {
  return (
    <div className="dharma-page min-h-screen bg-[#F4F0E6] text-[#0E1512]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="sticky top-0 z-50 border-b border-[#0E1512]/10 bg-[#F4F0E6]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="/dharmakarsa" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#0E1512] font-mono text-[10px] font-bold text-[#C8F169]">
              DK
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-tight">Dharmakarsa</span>
              <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-[#5C6A62]">
                commerce for the AI era
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-xs text-[#3E4A44] md:flex">
            <a href="#cara-kerja" className="hover:text-[#0E1512]">Cara kerja</a>
            <a href="#bukti" className="hover:text-[#0E1512]">Bukti</a>
            <a href="#harga" className="hover:text-[#0E1512]">Harga</a>
            <a href="#faq" className="hover:text-[#0E1512]">FAQ</a>
          </nav>
          <a href="#audit" className="rounded-full bg-[#0E1512] px-5 py-2.5 text-xs font-bold text-[#F4F0E6]">
            Audit gratis
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-14 lg:grid-cols-[1.08fr_.92fr] lg:pb-24 lg:pt-20">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#123B2E]">
              E-commerce untuk era agentic AI
            </p>
            <h1 className="mt-5 text-[clamp(2.6rem,5.4vw,4.6rem)] font-[family-name:var(--font-display)] font-semibold leading-[0.98] tracking-[-0.03em]">
              Pelanggan pertama toko Anda mungkin <span className="italic text-[#123B2E]">bukan manusia.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4A574F]">
              Orang sekarang bertanya ke AI sebelum membeli. Kalau katalog Anda tidak
              terbaca mesin, toko Anda tidak masuk pertimbangan. Dharmakarsa membangun
              toko yang dibaca agent, tetap enak dipakai manusia, dan gampang dijalankan tim Anda.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#audit" className="rounded-full bg-[#0E1512] px-6 py-3.5 text-sm font-bold text-[#F4F0E6]">
                Audit kesiapan AI toko Anda, gratis
              </a>
              <a href="#bukti" className="rounded-full border border-[#0E1512]/25 px-6 py-3.5 text-sm font-semibold">
                Lihat bukti Vavelle
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.08em] text-[#5C6A62]">
              <span>Launch 3-4 minggu</span>
              <span>Data &amp; kode milik Anda</span>
              <span>Tanpa tim developer</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 -z-0 rounded-[28px] bg-[#C8F169]/45 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-[#0E1512]/12 bg-white shadow-[0_24px_60px_rgba(14,21,18,0.12)]">
              <div className="flex items-center justify-between border-b border-[#0E1512]/8 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#0E1512]/20" />
                  <span className="h-2 w-2 rounded-full bg-[#0E1512]/20" />
                  <span className="h-2 w-2 rounded-full bg-[#C8F169]" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#5C6A62]">
                  asisten AI · 21.04
                </span>
              </div>
              <div className="space-y-3 p-4 text-[13px]">
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#0E1512] px-3.5 py-2.5 text-[#F4F0E6]">
                  Rekomendasi kopi Vietnam untuk hadiah kantor, budget 300 ribu.
                </div>
                <div className="max-w-[92%] rounded-2xl rounded-bl-sm bg-[#F1EDE2] px-3.5 py-3 text-[#26332C]">
                  <p>Saya temukan beberapa opsi. Salah satunya:</p>
                  <div className="mt-3 flex gap-3 rounded-xl border border-[#0E1512]/10 bg-white p-2.5">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-[#123B2E] text-[10px] font-bold text-[#C8F169]">
                      VV
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold">Trung Nguyen G7 — Vavelle</p>
                      <p className="mt-0.5 text-[11px] text-[#5C6A62]">Kopi Vietnam · stok tersedia · 4.8</p>
                      <p className="mt-1 text-[11px] font-semibold">Rp 89.000</p>
                    </div>
                  </div>
                  <p className="mt-3 text-[11px] text-[#5C6A62]">
                    Data produk dibaca dari katalog terstruktur. Sumber: vavelle.com
                  </p>
                </div>
              </div>
              <div className="border-t border-[#0E1512]/8 bg-[#F9F6EE] px-4 py-3 font-mono text-[9px] uppercase tracking-[0.12em] text-[#5C6A62]">
                schema.org · product feed · agent endpoint
              </div>
            </div>
            <p className="mt-4 text-center text-[11px] leading-relaxed text-[#5C6A62]">
              Kalau toko Anda tidak muncul di jawaban seperti ini, Anda kehilangan pembeli
              yang tidak pernah membuka Google.
            </p>
          </div>
        </section>

        <section className="border-y border-[#0E1512]/10 bg-[#0E1512] text-[#F4F0E6]">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 sm:grid-cols-3">
            {[
              ["3-4 minggu", "dari brief ke toko siap jual"],
              ["52 halaman", "storefront pilot Vavelle"],
              ["1 panel", "produk, pesanan, tema, sewa"],
            ].map(([v, l]) => (
              <div key={l} className="border-l border-[#F4F0E6]/20 pl-4">
                <p className="text-2xl font-semibold text-[#C8F169]">{v}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-[#F4F0E6]/60">{l}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 lg:py-20" id="cara-kerja">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#123B2E]">Kenapa sekarang</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-tight tracking-tight sm:text-4xl">
                Tempat pertama orang mencari barang sudah pindah.
              </h2>
            </div>
            <div className="space-y-5 text-sm leading-relaxed text-[#4A574F]">
              <p>
                Dulu orang membuka Google, klik satu dari sepuluh tautan, lalu membandingkan
                sendiri. Sekarang mereka bertanya ke assistant, mendapat tiga rekomendasi,
                dan langsung membeli yang paling meyakinkan.
              </p>
              <p>
                Agent tidak melihat desain cantik. Ia membaca struktur: nama produk, harga,
                stok, variasi, ongkir, kebijakan retur, dan ulasan. Kalau informasi itu tidak
                tersedia dalam format yang jelas, toko Anda tidak masuk jawaban.
              </p>
              <p className="font-semibold text-[#0E1512]">
                Dharmakarsa menyiapkan kedua sisi: manusia yang membeli, dan mesin yang merekomendasikan.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {layers.map((l) => (
              <div key={l.no} className="rounded-2xl border border-[#0E1512]/12 bg-white p-6">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-[#5C6A62]">
                  <span>{l.no}</span>
                  <span className="rounded-full bg-[#C8F169] px-2.5 py-1 text-[#0E1512]">{l.tag}</span>
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl leading-snug">{l.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A574F]">{l.desc}</p>
                <ul className="mt-4 space-y-1.5 text-xs text-[#123B2E]">
                  {l.points.map((p) => (
                    <li key={p}>— {p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-[#0E1512]/10 bg-[#E9E3D5]">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2 lg:py-20">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#123B2E]">Yang Anda dapat</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-tight tracking-tight sm:text-4xl">
                Bukan cuma website. Ini mesin jualan.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#4A574F]">
                Semua yang dibutuhkan untuk mulai berjualan, dalam satu kontrak dan satu tim.
                Tidak ada plugin tambahan yang harus Anda cari sendiri.
              </p>
              <a href="#harga" className="mt-6 inline-flex rounded-full bg-[#0E1512] px-5 py-3 text-xs font-bold text-[#F4F0E6]">
                Lihat paket
              </a>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {deliverables.map((d) => (
                <li key={d} className="flex gap-3 rounded-xl border border-[#0E1512]/10 bg-[#F4F0E6] px-4 py-3 text-sm">
                  <span className="text-[#123B2E]">✓</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 lg:py-20" id="bukti">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#123B2E]">Bukti</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-tight tracking-tight sm:text-4xl">
                Sudah dipakai berjualan, bukan cuma didemokan.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#4A574F]">
                Pilot pertama Dharmakarsa adalah Toko Vavelle. Storefront, admin, tema,
                dan modul sewa berjalan di sistem yang sama. Kami menunjukkan angka dan
                batasannya, bukan hanya portofolio cantik.
              </p>
              <div className="mt-6 rounded-2xl border border-[#0E1512]/12 bg-white p-5">
                <p className="font-[family-name:var(--font-display)] text-lg leading-snug">
                  &ldquo;Yang saya butuhkan bukan toko yang bagus di presentasi, tapi toko
                  yang bisa saya kelola sendiri setelah serah terima.&rdquo;
                </p>
                <p className="mt-3 text-xs text-[#5C6A62]">
                  Prinsip kerja Dharmakarsa
                </p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["52", "halaman storefront", "katalog, cart, checkout, konten"],
                ["39", "halaman admin", "produk, pesanan, tema, tenant"],
                ["0", "deploy untuk ganti tema", "warna dan tipografi dari panel"],
                ["live", "rental & bukti", "booking, checklist, foto watermark"],
              ].map(([v, t, d]) => (
                <div key={t} className="rounded-2xl border border-[#0E1512]/12 bg-white p-5">
                  <p className="font-[family-name:var(--font-display)] text-3xl text-[#123B2E]">{v}</p>
                  <p className="mt-1 text-sm font-semibold">{t}</p>
                  <p className="mt-1 text-[11px] leading-relaxed text-[#5C6A62]">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#0E1512]/10 bg-[#0E1512] text-[#F4F0E6]" id="harga">
          <div className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C8F169]">Paket</p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl leading-tight tracking-tight sm:text-4xl">
                  Harga jelas. Mulai dari yang paling masuk akal.
                </h2>
              </div>
              <p className="max-w-sm text-xs leading-relaxed text-[#F4F0E6]/55">
                Angka di bawah adalah titik awal. Proposal final menyebut lingkup, jumlah revisi,
                dan waktu serah terima secara tertulis.
              </p>
            </div>
            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {packages.map((p, i) => (
                <div
                  key={p.name}
                  className={`rounded-2xl p-6 ${i === 1 ? "bg-[#C8F169] text-[#0E1512]" : "border border-[#F4F0E6]/20"}`}
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-[family-name:var(--font-display)] text-xl">{p.name}</h3>
                    <span className="font-mono text-[9px] uppercase tracking-wide opacity-60">{p.note}</span>
                  </div>
                  <p className="mt-4 text-3xl font-semibold">{p.price}</p>
                  <p className={`mt-2 text-xs leading-relaxed ${i === 1 ? "text-[#0E1512]/70" : "text-[#F4F0E6]/55"}`}>
                    {p.for}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {p.items.map((item) => (
                      <li key={item}>— {item}</li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:${brand.email}?subject=Paket%20Dharmakarsa%20${p.name}`}
                    className={`mt-6 block rounded-full px-4 py-2.5 text-center text-xs font-bold ${
                      i === 1 ? "bg-[#0E1512] text-[#C8F169]" : "bg-[#F4F0E6] text-[#0E1512]"
                    }`}
                  >
                    Ambil paket {p.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 lg:py-20">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              ["01", "Audit", "Kami cek katalog, schema, kecepatan, checkout, dan kesiapan agent."],
              ["02", "Rancang", "Struktur produk, alur beli, dan prioritas fitur disepakati."],
              ["03", "Bangun", "Storefront, admin, dan lapisan agent dikerjakan per sprint."],
              ["04", "Luncurkan", "Migrasi, QA, pelatihan, dan pendampingan setelah rilis."],
            ].map(([no, t, d]) => (
              <div key={no} className="border-t border-[#0E1512]/20 pt-4">
                <span className="font-mono text-[10px] text-[#123B2E]">{no}</span>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl">{t}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#4A574F]">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#0E1512]/10 bg-[#E9E3D5]" id="faq">
          <div className="mx-auto max-w-3xl px-5 py-16">
            <h2 className="font-[family-name:var(--font-display)] text-3xl tracking-tight">Yang biasanya ditanyakan</h2>
            <div className="mt-6">
              {faqs.map(([q, a]) => (
                <details key={q} className="border-b border-[#0E1512]/15 py-4">
                  <summary className="cursor-pointer list-none text-sm font-semibold">{q}</summary>
                  <p className="mt-2 text-sm leading-relaxed text-[#4A574F]">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 lg:py-20" id="audit">
          <div className="rounded-[28px] bg-[#C8F169] p-8 sm:p-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#0E1512]/60">
              Audit gratis · 30 menit
            </p>
            <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-3xl leading-tight tracking-tight sm:text-4xl">
              Cek dulu: toko Anda terbaca AI atau tidak?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#0E1512]/70">
              Kami periksa 12 titik: schema produk, feed, kecepatan, checkout, kebijakan,
              dan akses agent. Anda dapat hasilnya dalam bentuk laporan singkat, tanpa kewajiban lanjut.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`mailto:${brand.email}?subject=Audit%20Kesiapan%20AI%20Toko`}
                className="rounded-full bg-[#0E1512] px-6 py-3 text-sm font-bold text-[#C8F169]"
              >
                Minta audit gratis
              </a>
              <a
                href={waLink("Halo Biotama, saya ingin audit kesiapan AI untuk toko online saya.")}
                target="_blank"
                rel="noopener"
                className="rounded-full border border-[#0E1512]/25 px-6 py-3 text-sm font-semibold"
              >
                WhatsApp {brand.phoneDisplay}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#0E1512]/10 bg-[#F4F0E6]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-7 text-[10px] text-[#5C6A62]">
          <span>© {new Date().getFullYear()} Dharmakarsa · dibangun oleh Biotama</span>
          <div className="flex gap-5">
            <a href="/" className="hover:text-[#0E1512]">biotama.cv</a>
            <a href="/layanan" className="hover:text-[#0E1512]">Layanan</a>
            <a href="/mallops" className="hover:text-[#0E1512]">MallOps</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
