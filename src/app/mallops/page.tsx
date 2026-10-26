import type { Metadata } from "next";
import RoICalculator from "@/components/mallops/RoICalculator";
import AppleShowcase from "@/components/service-pages/AppleShowcase";

const description =
  "MallOps Suite menyatukan parkir, meter listrik-air, leasing, tagihan, e-Faktur, dan portal tenant dalam satu dashboard. Data milik gedung, kebocoran kelihatan.";
const canonical = "https://biotama.cv/mallops/";

export const metadata: Metadata = {
  title: { absolute: "MallOps Suite — Setiap gedung bocor. Pertanyaannya berapa." },
  description,
  alternates: { canonical },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Biotama",
    url: canonical,
    title: "MallOps Suite — Setiap gedung bocor. Pertanyaannya berapa.",
    description,
    images: [{ url: "/assets/og-v2.png", width: 1200, height: 630, alt: "MallOps Suite" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MallOps Suite — Setiap gedung bocor. Pertanyaannya berapa.",
    description,
    images: ["/assets/og-v2.png"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "MallOps Suite",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: canonical,
      description,
      creator: { "@type": "Organization", name: "Biotama", url: "https://biotama.cv" },
      featureList: [
        "Parkir dengan sensor lahan real-time",
        "Meter listrik dan air IoT",
        "Leasing dan billing otomatis",
        "e-Faktur",
        "Portal tenant",
        "Bot monitoring Telegram",
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: "https://biotama.cv/" },
        { "@type": "ListItem", position: 2, name: "MallOps Suite", item: canonical },
      ],
    },
  ],
};

const leaks = [
  { no: "01", title: "Parkir bocor", desc: "Tiket palsu, kasir kolusi, dan papan kapasitas yang tidak pernah akurat. Pendapatan hilang tanpa jejak.", signal: "selisih kas harian" },
  { no: "02", title: "Tagihan manual", desc: "Listrik dan air dicatat tangan. Setiap bulan ada sengketa, dan angka yang salah dibayar oleh gedung.", signal: "sengketa tenant" },
  { no: "03", title: "Sewa telat", desc: "Penagihan bergantung ingatan manusia. Denda tidak jalan, dan piutang menua tanpa tindakan.", signal: "piutang menua" },
  { no: "04", title: "Data terlambat", desc: "Laporan baru jadi akhir bulan. Keputusan diambil dari perasaan, bukan okupansi dan arus kas.", signal: "keputusan intuitif" },
];

const modules = [
  ["Parkir & sensor lahan", "Lima mode masuk, tarif progresif, shift kasir, papan SISA real-time."],
  ["Meter listrik & air", "Pembacaan otomatis per unit, langsung jadi tagihan tanpa entry manual."],
  ["Leasing & billing", "Kontrak, eskalasi, prorata, denda, pengingat bertahap, laporan aging."],
  ["Portal tenant", "Tenant lihat tagihan, bayar online, dan buat tiket maintenance."],
  ["e-Faktur & procurement", "PO per vendor, approval berjenjang, ekspor e-Faktur format DJP."],
  ["Bot operasional", "Okupansi, pendapatan, tagihan lewat Telegram. Chat allowlist."],
];

const packages = [
  { name: "Starter Parkir", price: "Rp 75–150 jt", note: "AMC Rp 1,5–3 jt/bulan", for: "Ruko besar, kompleks, apartemen kecil.", items: ["1–2 gate + 50–150 slot", "Sensor bay atau loop", "Papan SISA", "Kasir + laporan harian"] },
  { name: "Pro Mall", price: "Rp 200–500 jt", note: "AMC Rp 4–8 jt/bulan", for: "Mall kecil-menengah, plaza strata.", items: ["2–8 gate + LPR", "Validasi tenant", "Portal tenant + bot", "QRIS / e-money / tunai"] },
  { name: "Enterprise", price: "Custom", note: "multi-lokasi", for: "Grup properti dengan beberapa gedung.", items: ["Multi-gedung", "Integrasi ERP", "SLA & on-site", "Roadmap bersama"] },
];

const faqs = [
  ["Apakah harus ganti sistem yang sudah jalan?", "Tidak selalu. Kami bisa mulai dari satu modul yang paling bocor, misalnya parkir atau billing, lalu menambahkan modul lain tanpa menghentikan operasional."],
  ["Berapa lama implementasi?", "Starter parkir 3–5 minggu. Pro Mall 6–10 minggu tergantung jumlah gate, migrasi data, dan integrasi pembayaran."],
  ["Data disimpan di mana?", "Di server yang Anda kendalikan atau cloud yang disepakati. Data dan akses menjadi milik gedung, bukan vendor."],
  ["Apakah bisa integrasi dengan pembayaran yang sudah ada?", "Bisa. Kami sudah mengintegrasikan DOKU VA/QRIS, dan bisa menyesuaikan dengan penyedia lain yang punya API."],
  ["Bagaimana kalau perangkat bermasalah?", "Monitoring perangkat berjalan proaktif. Bot memberi peringatan sebelum petugas menyadari gate atau meter mati."],
];

export default function MallOpsPage() {
  return (
    <div className="mallops-page min-h-screen bg-[#0A1018] text-[#E8F0F7]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A1018]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="/mallops" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-[#FF6B35] font-mono text-[10px] font-bold text-[#0A1018]">MO</span>
            <span>
              <span className="block text-sm font-semibold tracking-tight">MallOps Suite</span>
              <span className="block font-mono text-[9px] uppercase tracking-[0.16em] text-[#8FA3B5]">building operations · by Biotama</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-xs text-[#A9BACB] md:flex">
            <a href="#kebocoran" className="hover:text-white">Kebocoran</a>
            <a href="#modul" className="hover:text-white">Modul</a>
            <a href="#hitung" className="hover:text-white">Hitung</a>
            <a href="#harga" className="hover:text-white">Harga</a>
          </nav>
          <a href="#survey" className="rounded-md bg-[#FF6B35] px-4 py-2.5 text-xs font-bold text-[#0A1018]">Survey gratis</a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="pointer-events-none absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(rgba(255,107,53,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,.16) 1px, transparent 1px)", backgroundSize: "52px 52px", maskImage: "radial-gradient(circle at 70% 30%, black, transparent 72%)" }} />
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1.1fr_.9fr] lg:py-24">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#FF8A5B]">MallOps Suite · building operations</p>
              <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
                Gedung Anda bocor tiap bulan. <span className="text-[#FF8A5B]">Pertanyaannya: berapa?</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#A9BACB]">
                Parkir, listrik-air, sewa, tagihan, dan tenant masih dijalankan terpisah. MallOps menyatukan semuanya jadi satu dashboard, dengan data milik gedung. Kebocoran jadi kelihatan, keputusan jadi lebih cepat.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#hitung" className="rounded-md bg-[#FF6B35] px-5 py-3 text-sm font-bold text-[#0A1018]">Hitung potensi kebocoran</a>
                <a href="#survey" className="rounded-md border border-white/20 px-5 py-3 text-sm font-semibold">Minta survey gratis</a>
              </div>
              <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[#8FA3B5]">
                <li>parkir · utilitas · leasing</li>
                <li>e-Faktur siap</li>
                <li>data milik gedung</li>
              </ul>
            </div>

            <aside className="self-start rounded-xl border border-white/12 bg-[#0F1924] p-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#8FA3B5]">gedung · live</span>
                <span className="font-mono text-[9px] text-[#35D0C6]">● terhubung</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {[["87%", "okupansi"], ["Rp 1,24 M", "pendapatan"], ["Rp 38 jt", "potensi bocor"], ["12", "tagihan telat"]].map(([v, l], i) => (
                  <div key={l} className="rounded-lg border border-white/8 bg-[#0A1018] p-3">
                    <p className={`font-mono text-xl font-bold ${i === 2 ? "text-[#FF8A5B]" : "text-[#E8F0F7]"}`}>{v}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-wide text-[#6F8397]">{l}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-2">
                {[["Parkir", 82], ["Utilitas", 64], ["Sewa", 91]].map(([label, pct]) => (
                  <div key={label as string}>
                    <div className="flex justify-between font-mono text-[10px] text-[#8FA3B5]"><span>{label}</span><span>{pct}%</span></div>
                    <div className="mt-1 h-1.5 rounded-full bg-white/10"><div className="h-1.5 rounded-full bg-[#FF6B35]" style={{ width: `${pct}%` }} /></div>
                  </div>
                ))}
              </div>
              <p className="mt-4 border-t border-white/10 pt-3 text-[10px] leading-relaxed text-[#6F8397]">Contoh tampilan. Angka aktual mengikuti data gedung Anda.</p>
            </aside>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#0F1924]">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 py-7 sm:grid-cols-4">
            {[["5", "modul operasional"], ["60+", "test otomatis"], ["1", "dashboard"], ["100%", "data milik gedung"]].map(([v, l]) => (
              <div key={l} className="px-2 py-2"><p className="font-mono text-2xl font-bold text-[#FF8A5B]">{v}</p><p className="mt-1 text-[10px] uppercase tracking-wide text-[#8FA3B5]">{l}</p></div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14">
          <AppleShowcase
            accent="#FF6B35"
            shot={{
              desktop: "/assets/shots/mallops-desktop.webp",
              mobile: "/assets/shots/mallops-mobile.webp",
              name: "MallOps Suite",
            }}
          />
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16" id="kebocoran">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF8A5B]">Masalah</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Kebocoran paling mahal adalah yang tidak terlihat.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {leaks.map((l) => (
              <div key={l.no} className="rounded-lg border border-white/10 bg-[#0F1924] p-5">
                <div className="flex items-center justify-between font-mono text-[10px] text-[#6F8397]"><span>{l.no}</span><span className="text-[#FF8A5B]">{l.signal}</span></div>
                <h3 className="mt-3 text-base font-semibold">{l.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#8FA3B5]">{l.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0F1924]" id="modul">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#35D0C6]">Satu sistem</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Semua yang berputar di gedung, dalam satu layar.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {modules.map(([t, d], i) => (
                <div key={t} className="rounded-lg border border-white/10 bg-[#0A1018] p-5">
                  <span className="font-mono text-[10px] text-[#35D0C6]">0{i + 1}</span>
                  <h3 className="mt-2 text-sm font-semibold">{t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#8FA3B5]">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16" id="hitung">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF8A5B]">Kalkulator</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Berapa yang bisa Anda selamatkan tahun ini?</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#8FA3B5]">Ubah asumsinya. Kalkulator ini hanya untuk memberi gambaran skala, bukan penawaran. Angka final datang dari survey dan audit tagihan.</p>
              <a href="#survey" className="mt-6 inline-flex rounded-md border border-white/20 px-4 py-2.5 text-xs font-semibold">Minta angka yang sebenarnya</a>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0F1924] p-5"><RoICalculator /></div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0F1924]" id="harga">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF8A5B]">Paket</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Mulai dari modul yang paling bocor.</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {packages.map((p, i) => (
                <div key={p.name} className={`rounded-xl border p-5 ${i === 1 ? "border-[#FF6B35] bg-[#FF6B35]/5" : "border-white/10"}`}>
                  <div className="flex items-baseline justify-between"><h3 className="text-base font-semibold">{p.name}</h3><span className="font-mono text-[9px] text-[#6F8397]">{p.note}</span></div>
                  <p className="mt-4 text-2xl font-semibold text-[#FF8A5B]">{p.price}</p>
                  <p className="mt-2 text-xs leading-relaxed text-[#8FA3B5]">{p.for}</p>
                  <ul className="mt-4 space-y-2 text-sm text-[#C9D6E3]">{p.items.map((item) => <li key={item}>— {item}</li>)}</ul>
                  <a href={`mailto:fxwisdom1@gmail.com?subject=Paket%20MallOps%20${p.name}`} className={`mt-6 block rounded-md px-4 py-2.5 text-center text-xs font-bold ${i === 1 ? "bg-[#FF6B35] text-[#0A1018]" : "border border-white/20"}`}>Minta proposal</a>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[10px] text-[#6F8397]">Harga indikatif, belum termasuk pajak. Proposal final menyebut lingkup dan SLA.</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-8 md:grid-cols-4">
            {[["01", "Survey", "Kami hitung titik parkir, unit, tagihan, dan alur yang berjalan sekarang."], ["02", "Baseline", "Tiga bulan data dipakai untuk menentukan titik bocor dan prioritas."], ["03", "Implementasi", "Modul dipasang bertahap, tanpa menghentikan operasional."], ["04", "Serah terima", "Pelatihan, SOP, dan pendampingan setelah go-live."]].map(([no, t, d]) => (
              <div key={no} className="border-t border-white/15 pt-4"><span className="font-mono text-[10px] text-[#35D0C6]">{no}</span><h3 className="mt-2 text-base font-semibold">{t}</h3><p className="mt-1 text-sm leading-relaxed text-[#8FA3B5]">{d}</p></div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0F1924]">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-2">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#35D0C6]">Bukti teknis</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Dibangun untuk audit, bukan hanya demo.</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#8FA3B5]">MallOps berjalan di Odoo 19 dengan pengujian otomatis di database bersih. Integrasi pembayaran, pajak, dan perangkat diuji, bukan diasumsikan.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[["Odoo 19", "accounting & invoicing core"], ["60+ tests", "fresh database, bukan mock"], ["DOKU", "VA / QRIS, webhook bertanda tangan"], ["e-Faktur", "format DJP, NSFP unik"], ["ESP32", "Modbus RS485 & pulse input"], ["Tenant portal", "token per tenant, httpOnly"]].map(([t, d]) => (
                <div key={t} className="rounded-lg border border-white/10 bg-[#0A1018] p-4"><p className="font-mono text-xs text-[#FF8A5B]">{t}</p><p className="mt-1 text-[11px] leading-relaxed text-[#8FA3B5]">{d}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-5 py-16" id="faq">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Pertanyaan sebelum tanda tangan</h2>
          <div className="mt-6">
            {faqs.map(([q, a]) => (
              <details key={q} className="border-t border-white/10 py-4">
                <summary className="cursor-pointer list-none text-sm font-semibold">{q}</summary>
                <p className="mt-2 text-sm leading-relaxed text-[#8FA3B5]">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#FF6B35] text-[#0A1018]" id="survey">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-12">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-70">Survey gratis</p>
              <h2 className="mt-2 max-w-xl text-2xl font-bold leading-tight sm:text-3xl">Kalau tidak ada kebocoran, kami yang bilang.</h2>
              <p className="mt-2 max-w-lg text-sm opacity-80">Satu kunjungan, satu laporan singkat, tanpa kewajiban lanjut.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="mailto:fxwisdom1@gmail.com?subject=Survey%20Gratis%20MallOps%20Suite" className="rounded-md bg-[#0A1018] px-5 py-3 text-sm font-bold text-[#FF8A5B]">Jadwalkan survey</a>
              <a href="/" className="rounded-md border border-[#0A1018]/30 px-5 py-3 text-sm font-bold">biotama.cv</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#0A1018]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-7 text-[10px] text-[#6F8397]">
          <span>© {new Date().getFullYear()} MallOps Suite · dibangun oleh Biotama</span>
          <div className="flex gap-5">
            <a href="/" className="hover:text-white">biotama.cv</a>
            <a href="/dharmakarsa" className="hover:text-white">Dharmakarsa</a>
            <a href="/layanan" className="hover:text-white">Layanan</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
