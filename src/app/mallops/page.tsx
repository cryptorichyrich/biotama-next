import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MallOps Suite - Sistem Operasional Gedung & Parkir",
  description:
    "Paket lengkap otomasi gedung: parkir ala operator besar dengan sensor lahan real-time, meter listrik dan air tenant, leasing dan billing otomatis, e-Faktur, portal tenant, dan bot monitoring. Dibangun dan didukung engineer, data milik gedung.",
};

const pains = [
  ["Parkir bocor", "Tiket palsu, kasir kolusi, papan kapasitas tidak pernah akurat."],
  ["Tagihan manual", "Listrik dan air tenant dicatat lewat pencatatan tangan, sengketa tiap bulan."],
  ["Sewa dan IPL telat", "Penagihan bergantung ingatan manusia, laporan kepemilikan tidak real-time."],
  ["Tanpa data", "Okupansi, pendapatan per zona, dan arus kas gedung tidak bisa dipantau dari HP."],
];

const features = [
  [
    "Parkir + Sensor Lahan",
    "Lima mode masuk: tiket, QR, kartu member, uang elektronik bank, LPR tanpa tiket. Papan SISA real-time dari sensor per slot atau loop counter. Shift kasir dengan deteksi selisih.",
  ],
  [
    "Meter IoT Listrik dan Air",
    "Pembacaan otomatis per unit tenant, langsung menjadi tagihan IPL dan utilitas tanpa entry manual.",
  ],
  [
    "Leasing dan Billing",
    "Kontrak sewa, eskalasi tahunan, denda telat, faktur otomatis, e-Faktur Pajak sesuai format DJP.",
  ],
  [
    "Portal Tenant dan Bot",
    "Tenant melihat tagihan dan membayar online; pengelola memantau okupansi dan alarm perangkat lewat Telegram.",
  ],
];

const packages = [
  {
    name: "Starter Parkir",
    target: "Ruko besar, kompleks, apartemen kecil",
    price: "Rp 75 - 150 juta",
    amc: "AMC Rp 1,5 - 3 juta/bulan",
    items: [
      "1 - 2 gate + 50 - 150 slot",
      "Sensor bay atau loop + papan SISA",
      "Kasir + shift + laporan harian",
      "Member dan voucher parkir",
    ],
    highlight: false,
  },
  {
    name: "Pro Mall",
    target: "Mall kecil-menengah, plaza strata",
    price: "Rp 200 - 500 juta",
    amc: "AMC Rp 4 - 8 juta/bulan",
    items: [
      "2 - 8 gate + LPR kamera",
      "Validasi tenant + chargeback",
      "Portal tenant + bot Telegram",
      "QRIS / uang elektronik / tunai",
    ],
    highlight: true,
  },
  {
    name: "ERP Gedung Penuh",
    target: "Mall menengah, office tower, apartemen",
    price: "Rp 500 juta - 1,5 miliar",
    amc: "AMC Rp 8 - 20 juta/bulan",
    items: [
      "Semua fitur Pro Mall",
      "Leasing, IPL, meter IoT listrik dan air",
      "Procurement + e-Faktur sendiri",
      "Integrasi sistem yang sudah ada",
    ],
    highlight: false,
  },
];

const steps = [
  ["1. Survey gratis", "Kami hitung kebocoran parkir dan biaya manual gedung Anda, jadi angka, bukan perasaan."],
  ["2. Proposal ROI", "Rencana paket lengkap dengan perhitungan balik modal, biasanya 12 - 24 bulan."],
  ["3. Pilot 30 hari", "Sistem jalan nyata di lokasi Anda sebelum kontrak penuh. Bukti dulu, janji kemudian."],
  ["4. Kontrak + AMC", "Instalasi, pelatihan, lalu dukungan bulanan dengan SLA jelas. Gate mati = prioritas tertinggi."],
];

export default function MallopsLandingPage() {
  return (
    <main className="bg-[#fdfbf6] text-[#1a2e22]">
      {/* HERO */}
      <section className="mx-auto max-w-5xl px-5 pt-16 pb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a7229]">
          Paket Otomasi Gedung
        </p>
        <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
          Parkir ala operator besar.
          <br />
          Ekonomi gedung dalam satu dashboard.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#4b5a50]">
          MallOps Suite menggabungkan sistem parkir berbasis sensor, meter listrik dan
          air IoT, penagihan otomatis, dan portal tenant ke dalam satu sistem yang
          datanya milik gedung Anda, bukan milik operator.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:fxwisdom1@gmail.com?subject=Permintaan%20Demo%20MallOps%20Suite"
            className="rounded-xl bg-[#14532d] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0e3b21]"
          >
            Minta Demo Gratis
          </a>
          <a
            href="/mallops-proposal-template.pdf"
            className="rounded-xl border border-[#14532d]/30 px-6 py-3 text-sm font-semibold text-[#14532d] transition hover:bg-[#14532d]/5"
          >
            Unduh Contoh Proposal (PDF)
          </a>
        </div>
      </section>

      {/* PAIN */}
      <section className="border-y border-[#e7e0cf] bg-white/60">
        <div className="mx-auto max-w-5xl px-5 py-12">
          <h2 className="text-center text-xl font-bold">Kenapa gedung kehilangan uang diam-diam</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {pains.map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-[#e7e0cf] bg-white p-5">
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4b5a50]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <h2 className="text-center text-xl font-bold">Satu sistem, semua berputar</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#4b5a50]">
          Sistem ini bukan konsep: sudah berjalan dengan uji otomatis lulus penuh dan
          demo end-to-end, dari pelat nomor masuk sampai faktur pajak terbit.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {features.map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-[#e7e0cf] bg-white p-6">
              <h3 className="font-semibold text-[#14532d]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4b5a50]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="border-y border-[#e7e0cf] bg-white/60">
        <div className="mx-auto max-w-5xl px-5 py-12">
          <h2 className="text-center text-xl font-bold">Paket dan harga</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#4b5a50]">
            Harga tergantung hasil survey lokasi. Angka di bawah adalah kisaran proyek
            serupa agar Anda bisa membandingkan sebelum kami datang.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col rounded-2xl border p-6 ${
                  p.highlight
                    ? "border-[#8a7229] bg-white shadow-md ring-1 ring-[#8a7229]/40"
                    : "border-[#e7e0cf] bg-white"
                }`}
              >
                {p.highlight && (
                  <span className="mb-3 w-fit rounded-full bg-[#8a7229] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                    Paling sering diambil
                  </span>
                )}
                <h3 className="text-lg font-bold">{p.name}</h3>
                <p className="mt-1 text-xs text-[#4b5a50]">{p.target}</p>
                <p className="mt-4 text-xl font-bold text-[#14532d]">{p.price}</p>
                <p className="text-xs text-[#8a7229]">{p.amc}</p>
                <ul className="mt-4 space-y-2 text-sm text-[#4b5a50]">
                  {p.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[#8a7229]">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-5xl px-5 py-12">
        <h2 className="text-center text-xl font-bold">Cara kerja kami</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, body]) => (
            <div key={title} className="rounded-2xl border border-[#e7e0cf] bg-white p-5">
              <h3 className="text-sm font-bold text-[#14532d]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4b5a50]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="border-t border-[#e7e0cf] bg-[#14532d] text-white">
        <div className="mx-auto max-w-5xl px-5 py-12">
          <h2 className="text-center text-xl font-bold">Kenapa MallOps</h2>
          <div className="mt-8 grid gap-6 text-sm leading-relaxed sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-[#d9b64a]">Dibangun engineer, bukan reseller</h3>
              <p className="mt-2 text-white/85">
                Kode teruji dengan puluhan pengujian otomatis, dapat diaudit teknisi
                Anda saat proses kerja, dan dikembangkan sendiri dari nol.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#d9b64a]">Data milik gedung Anda</h3>
              <p className="mt-2 text-white/85">
                Tidak ada bagi hasil parkir. Basis data, kamera, dan laporan adalah
                milik Anda. Kami hanya mengoperasikan.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#d9b64a]">Siap UU PDP</h3>
              <p className="mt-2 text-white/85">
                Retensi foto plat terbatas, akses berjenjang dengan jejak audit, dan
                perjanjian pemrosesan data sejak hari pertama.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#d9b64a]">Gate mati = darurat</h3>
              <p className="mt-2 text-white/85">
                Monitoring perangkat proaktif lewat bot: sering kali kami tahu
                perangkat bermasalah sebelum petugas Anda sadar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-5 py-14 text-center">
        <h2 className="text-2xl font-bold">Hitung kebocoran gedung Anda</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#4b5a50]">
          Survey gratis tanpa komitmen. Jika angkanya tidak menarik, kami yang akan
          bilang sistem ini tidak cocok untuk Anda.
        </p>
        <a
          href="mailto:fxwisdom1@gmail.com?subject=Survey%20Gratis%20MallOps%20Suite"
          className="mt-6 inline-block rounded-xl bg-[#14532d] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#0e3b21]"
        >
          Jadwalkan Survey
        </a>
        <p className="mt-6 text-xs text-[#4b5a50]">
          <Link href="/" className="underline hover:text-[#14532d]">
            biotama.cv
          </Link>{" "}
          - Agustinus Biotamalo Lumbantoruan, engineer di balik MallOps Suite
        </p>
      </section>
    </main>
  );
}
