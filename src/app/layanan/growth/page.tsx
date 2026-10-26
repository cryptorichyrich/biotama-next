import type { Metadata } from "next";
import "./landing.css";
import LandingFX from "@/components/landing/LandingFX";
import { serviceSchema } from "@/lib/service-schema";

const title = "Biotama — Chatbot, POS, Website & Digital Marketing";
const description = "Biotama bantu bisnis jualan lebih rapi: chatbot AI, kasir POS, website, aplikasi, iklan, dan kelola marketplace. Mulai dari Rp 9 juta. Konsultasi gratis.";
const canonical = "https://biotama.cv/layanan/growth/";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
        url: "/assets/og-v3.png",
        width: 1200,
        height: 630,
        alt: "Sistem digital untuk bisnis yang bertumbuh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/og-v3.png"],
  },
  other: { "content-language": "id-ID" },
};

const schema = serviceSchema({
  canonical,
  title,
  description,
  breadcrumbLabel: "growth",
  pageLabel: "Growth",
  image: "/assets/og-v3.png",
});

export default function Page() {
  return (
    <div className="lp lp-grow" lang="id">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <a className="skip" href="#konten">Lewati ke konten utama</a>
      <div className="ticker" aria-hidden="true"><div className="ticker-track">
        <span>Chatbot AI</span><span>Sistem POS</span><span>Aplikasi mobile</span><span>Dashboard data</span><span>Pentest</span><span>CCTV &amp; smart home</span><span>SEO</span><span>Kelola marketplace</span><span>Bootcamp coding</span><span>Website</span><span>Chatbot AI</span><span>Sistem POS</span><span>Aplikasi mobile</span><span>Dashboard data</span><span>Pentest</span><span>CCTV &amp; smart home</span><span>SEO</span><span>Kelola marketplace</span><span>Bootcamp coding</span><span>Website</span>
      </div></div>
      <header className="site-header" id="siteHeader">
        <div className="wrap nav">
          <a className="logo" href="#top" aria-label="Biotama — beranda">
            <span className="logo-mark" aria-hidden="true">B</span>
            <span>biotama<span className="dot">.</span></span>
          </a>
          <nav className="nav-links" id="navLinks" aria-label="Navigasi utama"><a href="#layanan">Layanan</a><a href="#proses">Cara Kerja</a><a href="#hasil">Hasil</a><a href="#harga">Paket</a><a href="#faq">FAQ</a></nav>
          <div className="nav-cta">
            <a className="btn btn-orange btn-sm" href="#kontak">Konsultasi gratis</a>
            <button className="nav-toggle" type="button" aria-label="Buka menu" aria-expanded="false" aria-controls="navLinks">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>
      </header>
      <main id="konten">
      <section className="hero" id="top">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <div className="eyebrow-row">
                <span className="tag orange">11 layanan · 1 tim</span>
                <span className="tag">Jakarta · melayani seluruh Indonesia</span>
              </div>
              <h1>Bisnis Anda butuh <span className="underline">sistem</span>,<br />bukan tambahan <span className="stroke">aplikasi.</span></h1>
              <p className="lede">Chatbot, kasir, website, iklan, sampai operasional marketplace — <b>dikerjakan satu tim</b> dengan lingkup jelas dan hasil yang bisa diukur. Bukan setumpuk tools yang tidak nyambung.</p>
              <div className="hero-actions">
                <a className="btn btn-orange" href="#kontak">Konsultasi gratis <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
                <a className="btn" href="#layanan">Lihat layanan</a>
              </div>
              <div className="hero-proof">
                <div className="avatars" aria-hidden="true"><span>RK</span><span>AP</span><span>MA</span><span>+</span></div>
                <span><b>40+ klien</b> retail, F&B, klinik, distribusi, dan fintech</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="sticker" aria-hidden="true"><span><b>11</b>layanan<br />satu tim</span></div>
              <div className="brief">
                <div className="brief-head"><b>Brief awal — gratis</b><span>30 MENIT</span></div>
                <div className="brief-body"><div className="row"><span className="num">01</span><span><b>Chatbot &amp; Otomasi AI Bisnis</b> — Chatbot WhatsApp, Instagram, dan web yang benar-benar paham alur bisnis Anda.</span></div><div className="row"><span className="num">02</span><span><b>Data Analytics &amp; Business Intelligence</b> — Dari data yang berserakan jadi satu dashboard yang dipakai rapat direksi.</span></div><div className="row"><span className="num">03</span><span><b>Website &amp; Aplikasi Web</b> — Company profile, e-commerce, sampai sistem internal yang dipakai tim tiap hari.</span></div><div className="row"><span className="num">04</span><span><b>Aplikasi Mobile</b> — iOS, Android, dan cross-platform dengan proses yang transparan.</span></div><div className="row"><span className="num">05</span><span><b>Sistem Kasir POS Digital</b> — Kasir cloud + offline untuk retail dan F&amp;B multi-outlet.</span></div><div className="row"><span className="num">06</span><span><b>IT Consulting &amp; Managed Services</b> — Tim IT Anda diperkuat, atau seluruh fungsi IT kami kelola.</span></div></div>
                <div className="brief-foot"><span>Audit kebutuhan + rekomendasi prioritas</span><b>Rp 0</b></div>
              </div>
            </div>
          </div>
          <div className="hero-band"><div><b>120+</b><span>proyek digital dikerjakan</span></div><div><b>40+</b><span>klien aktif &amp; berulang</span></div><div><b>8 thn</b><span>pengalaman tim inti</span></div><div><b>99.9%</b><span>uptime layanan terkelola</span></div></div>
        </div>
      </section>
      <section className="section" id="layanan">
        <div className="wrap">
          <div className="section-head">
            <span className="tag yellow">Layanan</span>
            <h2>Pilih yang paling <span className="underline">nyangkut</span> dulu.</h2>
            <p>Tidak harus ambil semuanya. Mulai dari satu masalah yang paling mahal, buktikan hasilnya, lalu lanjut ke yang berikutnya.</p>
          </div>
          <div className="svc-groups">
            <div>
              <div className="svc-group-head">
                <h3>AI &amp; Data</h3>
                <span className="count">2 layanan</span>
                <p>Dua hal yang paling sering diminta klien: mengurangi pekerjaan berulang, dan membuat angka di laporan akhirnya konsisten.</p>
              </div>
              <div className="svc-grid">
              <article className="svc" id="chatbot">
                <div className="svc-top"><span className="svc-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/></svg></span><span className="svc-no">01</span></div>
                <h4>Chatbot &amp; Otomasi AI Bisnis</h4>
                <p>Chatbot WhatsApp, Instagram, dan web yang benar-benar paham alur bisnis Anda.</p>
                <ul><li>Kanal WhatsApp, Instagram DM, web chat, dan telepon</li><li>Integrasi CRM, Google Sheets, dan sistem internal</li><li>Human handover, guardrail, dan dashboard percakapan</li></ul>
                <div className="svc-foot"><span className="svc-price">Mulai Rp 15 juta</span><a className="svc-link" href="#kontak">Tanya <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div>
              </article>
              <article className="svc" id="data">
                <div className="svc-top"><span className="svc-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></span><span className="svc-no">02</span></div>
                <h4>Data Analytics &amp; Business Intelligence</h4>
                <p>Dari data yang berserakan jadi satu dashboard yang dipakai rapat direksi.</p>
                <ul><li>Audit data dan pemetaan sumber</li><li>Dashboard operasional, finance, dan marketing</li><li>Pelatihan tim internal agar mandiri</li></ul>
                <div className="svc-foot"><span className="svc-price">Mulai Rp 25 juta</span><a className="svc-link" href="#kontak">Tanya <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div>
              </article></div>
            </div>
            <div>
              <div className="svc-group-head">
                <h3>Software &amp; Produk Digital</h3>
                <span className="count">3 layanan</span>
                <p>Website, aplikasi, dan kasir yang dibangun dengan lingkup jelas, source code milik Anda, serta pendampingan setelah rilis.</p>
              </div>
              <div className="svc-grid">
              <article className="svc" id="website">
                <div className="svc-top"><span className="svc-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></span><span className="svc-no">03</span></div>
                <h4>Website &amp; Aplikasi Web</h4>
                <p>Company profile, e-commerce, sampai sistem internal yang dipakai tim tiap hari.</p>
                <ul><li>Desain custom, bukan template seragam</li><li>SEO teknis dan kecepatan halaman sejak awal</li><li>Source code diserahkan, tanpa vendor lock-in</li></ul>
                <div className="svc-foot"><span className="svc-price">Mulai Rp 9 juta</span><a className="svc-link" href="#kontak">Tanya <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div>
              </article>
              <article className="svc" id="mobile">
                <div className="svc-top"><span className="svc-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="5" y="2" width="14" height="20" rx="2.5"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg></span><span className="svc-no">04</span></div>
                <h4>Aplikasi Mobile</h4>
                <p>iOS, Android, dan cross-platform dengan proses yang transparan.</p>
                <ul><li>Flutter / React Native / native</li><li>Prototype dan pengujian sebelum development</li><li>Garansi bug fix pasca-rilis</li></ul>
                <div className="svc-foot"><span className="svc-price">Mulai Rp 45 juta</span><a className="svc-link" href="#kontak">Tanya <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div>
              </article>
              <article className="svc" id="pos">
                <div className="svc-top"><span className="svc-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><line x1="7" y1="15" x2="7.01" y2="15"/><line x1="12" y1="15" x2="12.01" y2="15"/></svg></span><span className="svc-no">05</span></div>
                <h4>Sistem Kasir POS Digital</h4>
                <p>Kasir cloud + offline untuk retail dan F&amp;B multi-outlet.</p>
                <ul><li>Mode offline dan sinkronisasi otomatis</li><li>Multi-outlet, multi-gudang, dan hak akses</li><li>Migrasi data dan pelatihan kasir</li></ul>
                <div className="svc-foot"><span className="svc-price">Mulai Rp 8 juta</span><a className="svc-link" href="#kontak">Tanya <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div>
              </article></div>
            </div>
            <div>
              <div className="svc-group-head">
                <h3>Infrastruktur &amp; Keamanan</h3>
                <span className="count">3 layanan</span>
                <p>Dari managed services sampai penetration testing dan instalasi CCTV — semuanya dengan SLA dan dokumentasi tertulis.</p>
              </div>
              <div className="svc-grid">
              <article className="svc" id="it">
                <div className="svc-top"><span className="svc-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg></span><span className="svc-no">06</span></div>
                <h4>IT Consulting &amp; Managed Services</h4>
                <p>Tim IT Anda diperkuat, atau seluruh fungsi IT kami kelola.</p>
                <ul><li>IT health check dan roadmap 12 bulan</li><li>Monitoring 24/7 dan helpdesk dengan SLA</li><li>Laporan bulanan yang bisa dibaca manajemen</li></ul>
                <div className="svc-foot"><span className="svc-price">Mulai Rp 12 juta/bulan</span><a className="svc-link" href="#kontak">Tanya <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div>
              </article>
              <article className="svc" id="cyber">
                <div className="svc-top"><span className="svc-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15.5 9.5"/></svg></span><span className="svc-no">07</span></div>
                <h4>Cybersecurity &amp; Penetration Testing</h4>
                <p>Temukan celah sebelum pihak yang tidak berwenang menemukannya.</p>
                <ul><li>Web app, API, mobile, dan infrastruktur</li><li>Laporan severity + bukti dan langkah remediasi</li><li>Pendampingan penutupan temuan</li></ul>
                <div className="svc-foot"><span className="svc-price">Mulai Rp 20 juta</span><a className="svc-link" href="#kontak">Tanya <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div>
              </article>
              <article className="svc" id="cctv">
                <div className="svc-top"><span className="svc-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg></span><span className="svc-no">08</span></div>
                <h4>Instalasi CCTV &amp; Smart Home</h4>
                <p>Survei titik kamera, instalasi rapi, dan garansi pemasangan.</p>
                <ul><li>Survei lokasi dan desain titik kamera</li><li>Integrasi smart home, access control, alarm</li><li>Garansi pemasangan dan pendampingan aplikasi</li></ul>
                <div className="svc-foot"><span className="svc-price">Mulai Rp 3,5 juta/titik</span><a className="svc-link" href="#kontak">Tanya <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div>
              </article></div>
            </div>
            <div>
              <div className="svc-group-head">
                <h3>Pertumbuhan &amp; Talenta</h3>
                <span className="count">3 layanan</span>
                <p>SEO, performance marketing, operasional marketplace, dan bootcamp internal untuk tim yang ingin naik level.</p>
              </div>
              <div className="svc-grid">
              <article className="svc" id="marketing">
                <div className="svc-top"><span className="svc-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></span><span className="svc-no">09</span></div>
                <h4>Digital Marketing &amp; SEO</h4>
                <p>Laporan yang menghubungkan traffic ke pipeline penjualan.</p>
                <ul><li>SEO teknis, on-page, dan konten</li><li>Google Ads, Meta Ads, dan landing page</li><li>Atribusi dan laporan konversi</li></ul>
                <div className="svc-foot"><span className="svc-price">Mulai Rp 7,5 juta/bulan</span><a className="svc-link" href="#kontak">Tanya <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div>
              </article>
              <article className="svc" id="marketplace">
                <div className="svc-top"><span className="svc-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx="9" cy="21" r="1.4"/><circle cx="20" cy="21" r="1.4"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg></span><span className="svc-no">10</span></div>
                <h4>Kelola Toko Online &amp; Marketplace</h4>
                <p>Operasional Shopee, Tokopedia, dan TikTok Shop ditangani end-to-end.</p>
                <ul><li>Shopee, Tokopedia, TikTok Shop, Lazada</li><li>Optimasi listing dan iklan marketplace</li><li>Rekap stok, rating, dan CS harian</li></ul>
                <div className="svc-foot"><span className="svc-price">Mulai Rp 6 juta/bulan</span><a className="svc-link" href="#kontak">Tanya <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div>
              </article>
              <article className="svc" id="bootcamp">
                <div className="svc-top"><span className="svc-icon"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></span><span className="svc-no">11</span></div>
                <h4>Bootcamp &amp; Kursus Coding</h4>
                <p>Kelas kecil, mentor aktif, dan portofolio yang benar-benar jadi.</p>
                <ul><li>Web development, data, dan automation</li><li>Batch kecil, mentor live, review kode</li><li>Proyek akhir yang layak masuk portofolio</li></ul>
                <div className="svc-foot"><span className="svc-price">Mulai Rp 4,5 juta</span><a className="svc-link" href="#kontak">Tanya <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div>
              </article></div>
            </div></div></div></section>
      <section className="section" style={{paddingTop: "0"} as React.CSSProperties}>
        <div className="wrap">
          <div className="section-head">
            <span className="tag yellow">Kenapa Biotama</span>
            <h2>Karena hasil harus bisa <span className="underline">dihitung</span>.</h2>
          </div>
          <div className="why">
            <div className="why-card big">
              <div className="ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg></div>
              <h3>“Sistem yang bagus bikin tim Anda lebih tenang, bukan lebih sibuk.”</h3>
              <p>Kami mengukur keberhasilan dari jam kerja yang kembali, error yang berkurang, dan penjualan yang lebih rapi — bukan dari jumlah fitur di presentasi.</p>
              <ul className="why-list" style={{marginTop: "18px"} as React.CSSProperties}>
                <li style={{color: "#E9DFD3"} as React.CSSProperties}>Source code milik Anda</li>
                <li style={{color: "#E9DFD3"} as React.CSSProperties}>Kontrak &amp; timeline tertulis</li>
                <li style={{color: "#E9DFD3"} as React.CSSProperties}>Garansi bug 30–90 hari</li>
              </ul>
            </div>
            <div className="why" style={{gridTemplateColumns: "1fr 1fr", gap: "14px"} as React.CSSProperties}>
              <div className="why-card"><div className="ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><h4>Tim in-house</h4><p>Engineer, desainer, dan analyst yang bisa Anda temui langsung di meeting.</p></div>
              <div className="why-card"><div className="ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div><h4>Laporan angka</h4><p>Setiap pekerjaan punya metrik awal dan metrik akhir. Tidak ada klaim tanpa data.</p></div>
              <div className="why-card"><div className="ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div><h4>NDA &amp; akses terbatas</h4><p>Akses diberikan per orang, dicatat, dan dicabut setelah proyek selesai.</p></div>
              <div className="why-card"><div className="ico"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8 5.8 21.3l2.4-7.4L2 9.4h7.6z"/></svg></div><h4>Setelah rilis</h4><p>Monitoring, pelatihan admin, dan review performa. Bukan hilang setelah invoice terakhir.</p></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="proses" style={{paddingTop: "0"} as React.CSSProperties}>
        <div className="wrap">
          <div className="section-head">
            <span className="tag yellow">Cara kerja</span>
            <h2>Lima langkah. Tidak ada <span className="underline">kejutan</span>.</h2>
            <p>Anda tahu apa yang dikerjakan, kapan, dan apa yang diterima di tiap tahap.</p>
          </div>
          <div className="proc">
            <div className="proc-step">
              <div className="no">01</div>
              <h4>Discovery &amp; audit</h4>
              <p>Sesi 60–90 menit untuk memetakan masalah, proses bisnis, sistem yang sudah ada, dan batasan anggaran.</p>
              <div className="meta">1–3 hari<span>Ringkasan temuan + ruang lingkup awal</span></div>
            </div>
            <div className="proc-step">
              <div className="no">02</div>
              <h4>Proposal &amp; kontrak</h4>
              <p>Lingkup kerja, timeline, milestone, harga, dan SLA ditulis jelas. Tidak ada biaya yang muncul belakangan.</p>
              <div className="meta">2–5 hari<span>Proposal teknis &amp; komersial</span></div>
            </div>
            <div className="proc-step">
              <div className="no">03</div>
              <h4>Desain &amp; sprint</h4>
              <p>Wireframe, desain, lalu development per sprint dua minggu dengan demo dan progres yang bisa Anda lihat.</p>
              <div className="meta">2–12 minggu<span>Prototype, sprint demo, catatan revisi</span></div>
            </div>
            <div className="proc-step">
              <div className="no">04</div>
              <h4>Uji &amp; peluncuran</h4>
              <p>QA fungsional, uji perangkat, uji keamanan dasar, lalu deployment bertahap dengan rollback plan.</p>
              <div className="meta">3–10 hari<span>Checklist QA, akses, dan dokumentasi</span></div>
            </div>
            <div className="proc-step">
              <div className="no">05</div>
              <h4>Pendampingan &amp; optimasi</h4>
              <p>Masa garansi, monitoring, pelatihan admin, dan review performa untuk memastikan sistem benar-benar dipakai.</p>
              <div className="meta">30–90 hari<span>Laporan performa &amp; rekomendasi</span></div>
            </div></div>
        </div>
      </section>
      <section className="section" id="hasil" style={{paddingTop: "0"} as React.CSSProperties}>
        <div className="wrap">
          <div className="section-head">
            <span className="tag yellow">Hasil</span>
            <h2>Angka sebelum dan <span className="underline">sesudah</span>.</h2>
            <p>Nama klien kami samarkan karena NDA. Metriknya nyata dan disetujui untuk dipublikasikan.</p>
          </div>
          <div className="results">
            <article className="result">
              <div className="sector">Retail multi-outlet</div>
              <h4>Kasir cloud untuk 14 outlet</h4>
              <p className="prob"><b>Masalah:</b> Tutup buku manual, stok sering selisih antaroutlet.</p>
              <p className="prob"><b>Solusi:</b> POS cloud + offline, migrasi 12.000 SKU, pelatihan 60 kasir.</p>
              <div className="nums">
                <div><b>2 jam</b><span>waktu tutup buku harian, dari sebelumnya 3 hari</span></div>
                <div><b>+18%</b><span>akurasi stok</span></div>
              </div>
            </article>
            <article className="result">
              <div className="sector">Klinik &amp; layanan kesehatan</div>
              <h4>Chatbot WhatsApp + CRM</h4>
              <p className="prob"><b>Masalah:</b> Admin kewalahan 900+ chat/bulan, leads banyak yang hilang.</p>
              <p className="prob"><b>Solusi:</b> Chatbot alur pendaftaran, pengingat jadwal, dan handover ke admin.</p>
              <div className="nums">
                <div><b>82%</b><span>chat terselesaikan tanpa admin</span></div>
                <div><b>8 dtk</b><span>rata-rata respons pertama</span></div>
              </div>
            </article>
            <article className="result">
              <div className="sector">Distribusi B2B</div>
              <h4>Dashboard BI lintas cabang</h4>
              <p className="prob"><b>Masalah:</b> Laporan bulanan disusun manual dari 12 file spreadsheet.</p>
              <p className="prob"><b>Solusi:</b> Warehouse ringan, definisi metrik tunggal, dashboard per cabang.</p>
              <div className="nums">
                <div><b>1 hari</b><span>penyusunan laporan bulanan, dari 5 hari</span></div>
                <div><b>12</b><span>sumber data terintegrasi</span></div>
              </div>
            </article>
            <article className="result">
              <div className="sector">Fintech</div>
              <h4>Penetration test &amp; remediasi</h4>
              <p className="prob"><b>Masalah:</b> Persyaratan audit keamanan sebelum peluncuran produk baru.</p>
              <p className="prob"><b>Solusi:</b> Pentest web &amp; API, laporan dua lapis, pendampingan perbaikan.</p>
              <div className="nums">
                <div><b>17</b><span>temuan kritis ditutup sebelum rilis</span></div>
                <div><b>0</b><span>insiden keamanan pasca-rilis</span></div>
              </div>
            </article></div>
        </div>
      </section>
      <section className="section" id="harga" style={{paddingTop: "0"} as React.CSSProperties}>
        <div className="wrap">
          <div className="section-head">
            <span className="tag yellow">Paket</span>
            <h2>Harga jelas dari <span className="underline">awal</span>.</h2>
            <p>Harga contoh untuk gambaran. Proposal final menyebut lingkup, revisi, dan SLA secara tertulis.</p>
          </div>
          <div className="prices">
            <div className="price">
              <div className="tier">Mulai</div>
              <h4>Mulai</h4>
              <div className="for">UMKM &amp; bisnis yang butuh kehadiran digital yang rapi</div>
              <div className="amt">Rp 9 jt</div>
              <div className="per">per proyek</div>
              <ul><li>Landing page / company profile 5–7 halaman</li><li>SEO teknis dasar &amp; Google Analytics</li><li>Copywriting dan desain custom</li><li>Revisi 2 putaran</li><li>Garansi bug 30 hari</li></ul>
              <a className="btn btn-orange" href="#kontak">Mulai dari sini</a>
            </div>
            <div className="price featured"><span className="ribbon">Paling dipilih</span>
              <div className="tier">Tumbuh</div>
              <h4>Tumbuh</h4>
              <div className="for">Bisnis yang butuh sistem, otomasi, atau integrasi</div>
              <div className="amt">Rp 25 jt</div>
              <div className="per">per proyek</div>
              <ul><li>Web app / POS / chatbot sesuai kebutuhan</li><li>Integrasi maksimal 3 sistem</li><li>Dashboard operasional</li><li>Pendampingan 60 hari</li><li>Prioritas support &lt; 4 jam kerja</li></ul>
              <a className="btn btn-yellow" href="#kontak">Diskusikan kebutuhan</a>
            </div>
            <div className="price">
              <div className="tier">Enterprise</div>
              <h4>Enterprise</h4>
              <div className="for">Perusahaan dengan kebutuhan keamanan, data, dan SLA</div>
              <div className="amt">Custom</div>
              <div className="per">per retainer / proyek</div>
              <ul><li>Managed services &amp; helpdesk dengan SLA</li><li>Pentest dan audit keamanan berkala</li><li>Tim dedikasi &amp; NDA</li><li>Roadmap IT 12 bulan</li><li>Quarterly business review</li></ul>
              <a className="btn btn-orange" href="#kontak">Minta proposal</a>
            </div></div>
          <p style={{fontSize: ".72rem", color: "var(--muted)", marginTop: "14px"} as React.CSSProperties}>Belum termasuk PPN. Kebutuhan gabungan disusun sebagai paket khusus setelah sesi discovery.</p>
        </div>
      </section>
      <section className="section" style={{paddingTop: "0"} as React.CSSProperties}>
        <div className="wrap">
          <div className="section-head">
            <span className="tag yellow">Kata klien</span>
            <h2>Bukan kami yang bilang, <span className="underline">mereka</span> yang bilang.</h2>
          </div>
          <div className="quotes">
            <figure className="quote">
              <div className="stars" aria-label="5 dari 5">★★★★★</div>
              <blockquote>“Yang paling saya apresiasi bukan hasil akhirnya, tapi prosesnya. Tiap sprint ada demo, tiap keputusan ada alasannya. Waktu ada perubahan scope, dampaknya dijelaskan di depan.”</blockquote>
              <figcaption><b>Rani Kusuma</b>Head of Operations · Retail multi-outlet, Jakarta</figcaption>
            </figure>
            <figure className="quote">
              <div className="stars" aria-label="5 dari 5">★★★★★</div>
              <blockquote>“Sebelumnya kami pakai vendor yang hilang di tengah proyek. Di Biotama, laporan mingguan selalu datang dan source code diserahkan sesuai kontrak. Itu yang bikin kami lanjut ke proyek kedua.”</blockquote>
              <figcaption><b>Aditya Prasetyo</b>IT Manager · Perusahaan distribusi, Surabaya</figcaption>
            </figure>
            <figure className="quote">
              <div className="stars" aria-label="5 dari 5">★★★★★</div>
              <blockquote>“Dashboard-nya tidak cuma bagus dilihat. Angka yang muncul akhirnya sama dengan yang dipakai tim finance, dan rapat bulanan jadi jauh lebih cepat.”</blockquote>
              <figcaption><b>Melati Anggraini</b>Finance Director · Grup layanan kesehatan</figcaption>
            </figure></div>
        </div>
      </section>
      <section className="section" id="faq" style={{paddingTop: "0"} as React.CSSProperties}>
        <div className="wrap faq-wrap">
          <div className="faq-aside">
            <span className="tag yellow">FAQ</span>
            <h2>Yang sering ditanya sebelum mulai.</h2>
            <p>Masih ada yang mengganjal? <a href="https://wa.me/6281398253186?text=Halo%20Biotama%2C%20saya%20mau%20tanya%20dulu%20sebelum%20mulai." target="_blank" rel="noopener">Chat langsung</a> — dijawab manusia.</p>
          </div>
          <div className="faq"><details><summary>Berapa lama pengerjaan website atau aplikasi?</summary><p>Landing page biasanya 2–3 minggu, company profile 3–5 minggu, aplikasi mobile 8–16 minggu, dan sistem internal 6–12 minggu. Estimasi final diberikan setelah sesi discovery, lalu dikunci di kontrak beserta milestone-nya.</p></details><details><summary>Apakah source code menjadi milik klien?</summary><p>Ya. Untuk proyek development, source code dan akses repositori diserahkan penuh setelah pelunasan, tanpa lisensi tersembunyi atau vendor lock-in. Kami juga menyertakan dokumentasi teknis agar tim internal Anda bisa melanjutkan.</p></details><details><summary>Bagaimana skema pembayaran?</summary><p>Umumnya 30% di awal, 40% setelah milestone desain/prototype disetujui, dan 30% saat peluncuran. Untuk retainer bulanan, pembayaran dilakukan di awal periode dengan SLA tertulis.</p></details><details><summary>Bisakah mulai dari skala kecil dulu?</summary><p>Bisa. Banyak klien mulai dari satu modul atau satu kanal — misalnya chatbot WhatsApp saja atau dashboard satu divisi — lalu berkembang setelah hasilnya terukur. Kami sengaja menyusun roadmap bertahap agar anggaran tidak membengkak di depan.</p></details><details><summary>Bagaimana Anda menjaga kerahasiaan data?</summary><p>Setiap engagement menandatangani NDA. Akses ke sistem klien diberikan per-orang, dicatat, dan dicabut setelah proyek selesai. Untuk pekerjaan keamanan, semua bukti temuan disimpan terenkripsi dan hanya diserahkan ke pihak yang berwenang.</p></details><details><summary>Apakah melayani klien di luar Jakarta?</summary><p>Ya. Sekitar 60% klien kami berada di luar Jakarta dan dikerjakan secara remote dengan ritme meeting yang disepakati. Untuk instalasi CCTV, smart home, dan audit on-site, kami menjadwalkan kunjungan teknisi ke lokasi.</p></details><details><summary>Apa bedanya chatbot Biotama dengan chatbot template?</summary><p>Chatbot template menjawab skenario umum. Kami memetakan alur bisnis Anda lebih dulu, menghubungkan ke CRM dan sistem internal, menetapkan guardrail, serta menyiapkan human handover ketika pertanyaan di luar cakupan. Setelah rilis, ada evaluasi percakapan dan perbaikan rutin.</p></details><details><summary>Apakah ada garansi dan maintenance?</summary><p>Ada. Proyek development mendapat garansi bug 30–90 hari tergantung paket. Untuk maintenance berkelanjutan tersedia paket bulanan yang mencakup monitoring, update keamanan, backup, dan jam dukungan sesuai SLA.</p></details><details><summary>Bagaimana cara kerja bootcamp &amp; kursus coding?</summary><p>Kelas dijalankan per batch dengan kuota kecil (maksimal 15 peserta), mentor live setiap minggu, review kode, dan proyek akhir. Untuk perusahaan, silabus bisa disesuaikan dengan stack dan kebutuhan tim, lalu dijalankan secara internal.</p></details><details><summary>Bisakah integrasi dengan sistem yang sudah kami pakai?</summary><p>Bisa, selama sistem tersebut menyediakan API, database access, atau jalur ekspor-impor. Pada tahap discovery kami memetakan integrasi yang memungkinkan, risikonya, dan estimasi biayanya sebelum kontrak ditandatangani.</p></details></div>
        </div>
      </section>
      <section className="section" id="kontak" style={{paddingTop: "0"} as React.CSSProperties}>
        <div className="wrap">
          <div className="contact">
            <div className="contact-left">
              <span className="tag">Konsultasi gratis</span>
              <h2>Ceritakan masalahnya. Kami bantu petakan.</h2>
              <p>Sesi 30 menit, tanpa biaya, tanpa kewajiban lanjut. Anda keluar dengan prioritas yang jelas, meski tidak jadi kerja sama.</p>
              <ul className="contact-info">
                <li><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4z"/><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg><div><b>WhatsApp</b><a href="https://wa.me/6281398253186?text=Halo%20Biotama%2C%20saya%20ingin%20konsultasi%20tentang%20kebutuhan%20digital%20bisnis%20saya." target="_blank" rel="noopener">+62 813-9825-3186</a></div></li>
                <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><div><b>Email</b><a href="mailto:fxwisdom1@gmail.com">fxwisdom1@gmail.com</a></div></li>
                <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><div><b>Kantor</b>Jakarta Selatan, Jakarta Selatan</div></li>
                <li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><div><b>Jam kerja</b>Senin–Jumat 09.00–18.00 WIB · Sabtu 09.00–13.00 WIB</div></li>
              </ul>
            </div>
            <div className="contact-right">
              <h3>Isi brief singkat</h3>
              <p className="hint">Kami balas di hari kerja yang sama.</p>
              <form className="form" data-wa-form="" data-status="formStatus" noValidate>
                <div className="form-row">
                  <div className="field"><label htmlFor="nama">Nama</label><input id="nama" name="nama" type="text" autoComplete="name" required placeholder="Nama Anda" /></div>
                  <div className="field"><label htmlFor="perusahaan">Usaha</label><input id="perusahaan" name="perusahaan" type="text" autoComplete="organization" placeholder="Nama usaha" /></div>
                </div>
                <div className="form-row">
                  <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required placeholder="nama@usaha.com" /></div>
                  <div className="field"><label htmlFor="wa">WhatsApp</label><input id="wa" name="wa" type="tel" autoComplete="tel" required placeholder="0812…" /></div>
                </div>
                <div className="form-row">
                  <div className="field"><label htmlFor="layanan">Butuh apa</label><select id="layanan" name="layanan"><option>Chatbot &amp; Otomasi AI Bisnis</option><option>Data Analytics &amp; Business Intelligence</option><option>Website &amp; Aplikasi Web</option><option>Aplikasi Mobile</option><option>Sistem Kasir POS Digital</option><option>IT Consulting &amp; Managed Services</option><option>Cybersecurity &amp; Penetration Testing</option><option>Instalasi CCTV &amp; Smart Home</option><option>Digital Marketing &amp; SEO</option><option>Kelola Toko Online &amp; Marketplace</option><option>Bootcamp &amp; Kursus Coding</option></select></div>
                  <div className="field"><label htmlFor="budget">Budget</label><select id="budget" name="budget"><option>Di bawah Rp 10 juta</option><option>Rp 10–25 juta</option><option>Rp 25–50 juta</option><option>Rp 50–100 juta</option><option>Di atas Rp 100 juta</option><option>Belum tahu</option></select></div>
                </div>
                <div className="field"><label htmlFor="pesan">Masalah yang mau dibereskan</label><textarea id="pesan" name="pesan" rows={3} placeholder="Contoh: chat masuk 200/hari, admin cuma 2 orang, banyak yang tidak dibalas."></textarea></div>
                <input className="hp" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <button className="btn btn-orange" type="submit">Kirim &amp; lanjut WhatsApp <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
                <p className="note">Kami tidak mengirim spam. Data dipakai hanya untuk membalas permintaan ini.</p>
                <p className="form-status" id="formStatus" role="status" aria-live="polite"></p>
              </form>
            </div>
          </div>
        </div>
      </section>
      </main>
      <footer className="site-footer">
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <a className="logo" href="#top"><span className="logo-mark" aria-hidden="true">B</span><span>biotama<span className="dot">.</span></span></a>
              <p>Mitra AI, software, dan infrastruktur digital. Kontrak jelas, source code milik Anda, hasil bisa diukur.</p>
            </div>
            <div className="foot-col"><h5>Layanan</h5><ul><li><a href="#chatbot">Chatbot &amp; Otomasi AI Bisnis</a></li><li><a href="#data">Data Analytics &amp; Business Intelligence</a></li><li><a href="#website">Website &amp; Aplikasi Web</a></li><li><a href="#mobile">Aplikasi Mobile</a></li><li><a href="#pos">Sistem Kasir POS Digital</a></li><li><a href="#it">IT Consulting &amp; Managed Services</a></li></ul></div>
            <div className="foot-col"><h5>Lainnya</h5><ul><li><a href="#cyber">Cybersecurity &amp; Penetration Testing</a></li><li><a href="#cctv">Instalasi CCTV &amp; Smart Home</a></li><li><a href="#marketing">Digital Marketing &amp; SEO</a></li><li><a href="#marketplace">Kelola Toko Online &amp; Marketplace</a></li><li><a href="#bootcamp">Bootcamp &amp; Kursus Coding</a></li><li><a href="#harga">Paket</a></li><li><a href="/llms.txt">llms.txt</a></li></ul></div>
            <div className="foot-col"><h5>Kantor</h5><address>Biotama<br />Jakarta Selatan<br />Jakarta<br /><a href="mailto:fxwisdom1@gmail.com">fxwisdom1@gmail.com</a><br /><a href="tel:+6281398253186">+62 813-9825-3186</a></address></div>
          </div>
          <div className="ai-summary">
            <h5>Ringkasan untuk mesin pencari & agen AI</h5>
            <p>Biotama adalah mitra teknologi di Jakarta untuk 11 layanan: Jasa Pembuatan Chatbot &amp; Otomasi AI Bisnis, Konsultan Data Analytics &amp; Business Intelligence, Jasa Pembuatan Website &amp; Aplikasi, Pengembang Aplikasi Mobile iOS &amp; Android, Penyedia Sistem Kasir POS Digital, IT Consulting &amp; Managed Services, Konsultan Cybersecurity &amp; Penetration Testing, Jasa Instalasi CCTV &amp; Smart Home, Digital Marketing &amp; SEO Agency, Jasa Kelola Toko Online &amp; Marketplace, Bootcamp &amp; Kursus Coding untuk Tim dan Individu. Konsultasi gratis 30 menit via WhatsApp +62 813-9825-3186 atau fxwisdom1@gmail.com. Situs resmi: https://biotama.cv. Ringkasan mesin: https://biotama.cv/llms.txt</p>
          </div>
          <div className="foot-bottom">
            <span>© <span data-year="">2026</span> Biotama.</span>
            <span><a href="#top">Kembali ke atas</a></span>
          </div>
        </div>
      </footer>
      <div className="mobile-cta">
        <a className="btn btn-ink" href="#kontak">Konsultasi gratis</a>
        <a className="btn btn-orange" href="https://wa.me/6281398253186?text=Halo%20Biotama%2C%20saya%20ingin%20konsultasi%20tentang%20kebutuhan%20digital%20bisnis%20saya." target="_blank" rel="noopener"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4z"/><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg> WhatsApp</a>
      </div>
      <a className="wa-float" href="https://wa.me/6281398253186?text=Halo%20Biotama%2C%20saya%20ingin%20konsultasi%20tentang%20kebutuhan%20digital%20bisnis%20saya." target="_blank" rel="noopener" aria-label="Chat WhatsApp Biotama"><svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4z"/><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg></a>
      <LandingFX />
    </div>
  );
}
