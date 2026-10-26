import type { Metadata } from "next";
import "./landing.css";
import LandingFX from "@/components/landing/LandingFX";
import { serviceSchema } from "@/lib/service-schema";

const title = "Biotama — Jasa AI, Software & Keamanan Digital";
const description = "Biotama membangun chatbot AI, aplikasi, POS, dashboard data, infrastruktur IT, dan keamanan siber untuk bisnis Indonesia. Konsultasi gratis 30 menit.";
const canonical = "https://biotama.cv/layanan/ai/";

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
        url: "/assets/og-v1.png",
        width: 1200,
        height: 630,
        alt: "AI, software, dan infrastruktur digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/og-v1.png"],
  },
  other: { "content-language": "id-ID" },
};

const schema = serviceSchema({
  canonical,
  title,
  description,
  breadcrumbLabel: "ai",
  pageLabel: "AI & Automation",
  image: "/assets/og-v1.png",
});

export default function Page() {
  return (
    <div className="lp lp-ai" lang="id">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <a className="skip" href="#konten">Lewati ke konten utama</a>
      <div className="topbar"><div className="wrap">
        <span><strong>Slot konsultasi gratis</strong> bulan ini tersisa 4 — dapatkan audit kebutuhan 30 menit, tanpa komitmen.</span>
        <a href="https://wa.me/6281398253186?text=Halo%20Biotama%2C%20saya%20ingin%20ambil%20slot%20konsultasi%20gratis%2030%20menit." target="_blank" rel="noopener">Ambil slot →</a>
      </div></div>
      <header className="site-header" id="siteHeader">
        <div className="wrap nav">
          <a className="logo" href="#top" aria-label="Biotama — beranda">
            <span className="logo-mark" aria-hidden="true">B</span>
            <span>biotama<span className="dot">.</span></span>
          </a>
          <nav className="nav-links" id="navLinks" aria-label="Navigasi utama"><a href="#layanan">Layanan</a><a href="#proses">Cara Kerja</a><a href="#hasil">Hasil</a><a href="#harga">Paket</a><a href="#faq">FAQ</a></nav>
          <div className="nav-cta">
            <a className="btn btn-primary btn-sm" href="#kontak">Konsultasi gratis</a>
            <button className="nav-toggle" type="button" aria-label="Buka menu" aria-expanded="false" aria-controls="navLinks">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>
      </header>
      <main id="konten">
      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">AI · Software · Infrastructure</span>
            <h1>Sistem digital yang <span className="grad">bekerja</span>, bahkan saat tim Anda tidur.</h1>
            <p className="lede">Biotama merancang, membangun, dan merawat <strong>chatbot AI, aplikasi, kasir POS, dashboard data, sampai keamanan siber</strong> — satu tim yang bertanggung jawab dari kontrak sampai setelah rilis.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#kontak"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4z"/><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg> Konsultasi gratis 30 menit</a>
              <a className="btn btn-ghost" href="#layanan">Lihat 11 layanan <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
            </div>
            <ul className="hero-trust"><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg> Kontrak &amp; SLA tertulis</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg> Source code milik klien</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg> NDA di setiap engagement</li><li><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg> Tim in-house, bukan freelancer lepas</li></ul>
            <p className="hero-note">Balasan pertama rata-rata di bawah 2 jam kerja. Tidak ada biaya untuk sesi diskusi awal.</p>
          </div>
          <div className="hero-visual">
            <div className="float-chip chip-a"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg> CRM tersinkron</div>
            <div className="float-chip chip-b"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> 1.284 chat / bulan</div>
            <div className="console" role="img" aria-label="Ilustrasi percakapan chatbot Biotama yang menangani pertanyaan stok, ongkir, lalu menyerahkan ke admin">
              <div className="console-bar">
                <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                <span className="console-title">biotama.flow — whatsapp</span>
                <span className="live">live</span>
              </div>
              <div className="console-body">
                <div className="msg in">Halo, stok ukuran L masih ada?</div>
                <div className="msg bot">Ada, 3 unit tersisa. Mau saya bantu buat pesanan?<span className="tag">AI · 1,2 dtk</span></div>
                <div className="msg in">Bisa kirim ke Bandung?</div>
                <div className="msg bot">Bisa. Estimasi 2 hari, ongkir Rp 18.000.<span className="tag">Cek ongkir · CRM sync</span></div>
                <div className="handover"><span>Human handover</span><strong>Admin Rani</strong><em>pelanggan minta invoice</em></div>
              </div>
              <div className="console-foot">
                <div><b>1.284</b><span>chat bulan ini</span></div>
                <div><b>82%</b><span>tanpa admin</span></div>
                <div><b>8 dtk</b><span>respons</span></div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="marquee" aria-hidden="true">
            <div className="marquee-track">
              <span>Chatbot &amp; Otomasi AI Bisnis</span><span>Data Analytics &amp; Business Intelligence</span><span>Website &amp; Aplikasi Web</span><span>Aplikasi Mobile</span><span>Sistem Kasir POS Digital</span><span>IT Consulting &amp; Managed Services</span><span>Cybersecurity &amp; Penetration Testing</span><span>Instalasi CCTV &amp; Smart Home</span><span>Digital Marketing &amp; SEO</span><span>Kelola Toko Online &amp; Marketplace</span><span>Bootcamp &amp; Kursus Coding</span>
              <span>Chatbot &amp; Otomasi AI Bisnis</span><span>Data Analytics &amp; Business Intelligence</span><span>Website &amp; Aplikasi Web</span><span>Aplikasi Mobile</span><span>Sistem Kasir POS Digital</span><span>IT Consulting &amp; Managed Services</span><span>Cybersecurity &amp; Penetration Testing</span><span>Instalasi CCTV &amp; Smart Home</span><span>Digital Marketing &amp; SEO</span><span>Kelola Toko Online &amp; Marketplace</span><span>Bootcamp &amp; Kursus Coding</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section" style={{paddingTop: "38px", paddingBottom: "0"} as React.CSSProperties} aria-label="Angka singkat Biotama">
        <div className="wrap">
          <div className="stats">
            <div className="stat"><b><span data-count="120" data-decimals="0">0</span><span className="u">+</span></b><span>proyek digital dikerjakan</span></div><div className="stat"><b><span data-count="40" data-decimals="0">0</span><span className="u">+</span></b><span>klien aktif &amp; berulang</span></div><div className="stat"><b><span data-count="8" data-decimals="0">0</span><span className="u"> thn</span></b><span>pengalaman tim inti</span></div><div className="stat"><b><span data-count="99.9" data-decimals="1">0</span><span className="u">%</span></b><span>uptime layanan terkelola</span></div>
          </div>
        </div>
      </section>
      <section className="section" id="layanan">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Layanan</span>
            <h2>Sebelas layanan. Satu tim yang bertanggung jawab.</h2>
            <p>Anda tidak perlu berpindah vendor untuk chatbot, aplikasi, kasir, data, keamanan, dan marketing. Semua dikerjakan dengan standar kontrak, dokumentasi, dan serah terima yang sama.</p>
          </div>
          <div className="cluster">
            <div className="cluster-aside">
              <div className="cluster-label">AI &amp; Data</div>
              <h3>Otomasi yang menghemat jam kerja, data yang bisa dipercaya</h3>
              <p>Dua hal yang paling sering diminta klien: mengurangi pekerjaan berulang, dan membuat angka di laporan akhirnya konsisten.</p>
            </div>
            <div className="svc-grid">
            <article className="svc" id="chatbot">
              <div className="svc-top">
                <span className="svc-icon"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/></svg></span>
                <span className="svc-no">01</span>
              </div>
              <h4>Chatbot &amp; Otomasi AI Bisnis</h4>
              <p>Kami membangun asisten AI yang menjawab pertanyaan pelanggan, mengumpulkan data leads, dan menyerahkan percakapan ke tim manusia saat dibutuhkan — bukan bot template yang bikin pelanggan marah.</p>
              <ul><li>Kanal WhatsApp, Instagram DM, web chat, dan telepon</li><li>Integrasi CRM, Google Sheets, dan sistem internal</li><li>Human handover, guardrail, dan dashboard percakapan</li></ul>
              <div className="svc-foot">
                <span className="svc-price">Mulai Rp 15 juta</span>
                <a className="svc-link" href="#kontak">Diskusikan <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
              </div>
            </article>
            <article className="svc" id="data">
              <div className="svc-top">
                <span className="svc-icon"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></span>
                <span className="svc-no">02</span>
              </div>
              <h4>Data Analytics &amp; Business Intelligence</h4>
              <p>Kami merapikan sumber data, membangun warehouse ringan, dan membuat dashboard yang menjawab pertanyaan bisnis nyata — bukan sekadar grafik cantik yang tidak dipakai.</p>
              <ul><li>Audit data dan pemetaan sumber</li><li>Dashboard operasional, finance, dan marketing</li><li>Pelatihan tim internal agar mandiri</li></ul>
              <div className="svc-foot">
                <span className="svc-price">Mulai Rp 25 juta</span>
                <a className="svc-link" href="#kontak">Diskusikan <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
              </div>
            </article></div>
          </div>
          <div className="cluster">
            <div className="cluster-aside">
              <div className="cluster-label">Software &amp; Produk Digital</div>
              <h3>Produk digital yang dipakai tiap hari, bukan cuma diluncurkan</h3>
              <p>Website, aplikasi, dan kasir yang dibangun dengan lingkup jelas, source code milik Anda, serta pendampingan setelah rilis.</p>
            </div>
            <div className="svc-grid">
            <article className="svc" id="website">
              <div className="svc-top">
                <span className="svc-icon"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></span>
                <span className="svc-no">03</span>
              </div>
              <h4>Website &amp; Aplikasi Web</h4>
              <p>Dibangun cepat, rapi secara teknis, dan siap tumbuh. Setiap proyek punya kontrak, timeline, dan milestone tertulis — plus source code yang 100% menjadi milik Anda.</p>
              <ul><li>Desain custom, bukan template seragam</li><li>SEO teknis dan kecepatan halaman sejak awal</li><li>Source code diserahkan, tanpa vendor lock-in</li></ul>
              <div className="svc-foot">
                <span className="svc-price">Mulai Rp 9 juta</span>
                <a className="svc-link" href="#kontak">Diskusikan <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
              </div>
            </article>
            <article className="svc" id="mobile">
              <div className="svc-top">
                <span className="svc-icon"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="5" y="2" width="14" height="20" rx="2.5"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg></span>
                <span className="svc-no">04</span>
              </div>
              <h4>Aplikasi Mobile</h4>
              <p>Tim in-house yang membangun aplikasi dari perencanaan, desain, development, sampai rilis di App Store dan Google Play. Anda mendapat progres mingguan, bukan kabar baik di akhir proyek.</p>
              <ul><li>Flutter / React Native / native</li><li>Prototype dan pengujian sebelum development</li><li>Garansi bug fix pasca-rilis</li></ul>
              <div className="svc-foot">
                <span className="svc-price">Mulai Rp 45 juta</span>
                <a className="svc-link" href="#kontak">Diskusikan <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
              </div>
            </article>
            <article className="svc" id="pos">
              <div className="svc-top">
                <span className="svc-icon"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/><line x1="7" y1="15" x2="7.01" y2="15"/><line x1="12" y1="15" x2="12.01" y2="15"/></svg></span>
                <span className="svc-no">05</span>
              </div>
              <h4>Sistem Kasir POS Digital</h4>
              <p>Transaksi tetap jalan saat internet putus, stok per outlet akurat, dan laporan penjualan bisa dibuka dari mana saja. Migrasi data dari sistem lama kami lakukan tanpa menghentikan operasional.</p>
              <ul><li>Mode offline dan sinkronisasi otomatis</li><li>Multi-outlet, multi-gudang, dan hak akses</li><li>Migrasi data dan pelatihan kasir</li></ul>
              <div className="svc-foot">
                <span className="svc-price">Mulai Rp 8 juta</span>
                <a className="svc-link" href="#kontak">Diskusikan <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
              </div>
            </article></div>
          </div>
          <div className="cluster">
            <div className="cluster-aside">
              <div className="cluster-label">Infrastruktur &amp; Keamanan</div>
              <h3>Fondasi IT yang tenang, aman, dan bisa diaudit</h3>
              <p>Dari managed services sampai penetration testing dan instalasi CCTV — semuanya dengan SLA dan dokumentasi tertulis.</p>
            </div>
            <div className="svc-grid">
            <article className="svc" id="it">
              <div className="svc-top">
                <span className="svc-icon"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg></span>
                <span className="svc-no">06</span>
              </div>
              <h4>IT Consulting &amp; Managed Services</h4>
              <p>Untuk perusahaan yang butuh kepastian uptime dan dukungan yang bisa diaudit. Kami mulai dari IT health check, lalu menyusun SLA, prosedur, dan rencana pemeliharaan yang realistis.</p>
              <ul><li>IT health check dan roadmap 12 bulan</li><li>Monitoring 24/7 dan helpdesk dengan SLA</li><li>Laporan bulanan yang bisa dibaca manajemen</li></ul>
              <div className="svc-foot">
                <span className="svc-price">Mulai Rp 12 juta/bulan</span>
                <a className="svc-link" href="#kontak">Diskusikan <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
              </div>
            </article>
            <article className="svc" id="cyber">
              <div className="svc-top">
                <span className="svc-icon"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15.5 9.5"/></svg></span>
                <span className="svc-no">07</span>
              </div>
              <h4>Cybersecurity &amp; Penetration Testing</h4>
              <p>Pengujian keamanan dengan metodologi OWASP dan pelaporan dua lapis: teknis untuk tim engineer, eksekutif untuk manajemen. Setiap engagement memakai NDA dan disertai rencana remediasi yang bisa dieksekusi.</p>
              <ul><li>Web app, API, mobile, dan infrastruktur</li><li>Laporan severity + bukti dan langkah remediasi</li><li>Pendampingan penutupan temuan</li></ul>
              <div className="svc-foot">
                <span className="svc-price">Mulai Rp 20 juta</span>
                <a className="svc-link" href="#kontak">Diskusikan <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
              </div>
            </article>
            <article className="svc" id="cctv">
              <div className="svc-top">
                <span className="svc-icon"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg></span>
                <span className="svc-no">08</span>
              </div>
              <h4>Instalasi CCTV &amp; Smart Home</h4>
              <p>Kami memetakan blindspot lebih dulu, menghitung kebutuhan bandwidth dan penyimpanan, baru memasang. Hasilnya sistem yang benar-benar terpakai — bukan kamera banyak tapi tidak bisa diakses.</p>
              <ul><li>Survei lokasi dan desain titik kamera</li><li>Integrasi smart home, access control, alarm</li><li>Garansi pemasangan dan pendampingan aplikasi</li></ul>
              <div className="svc-foot">
                <span className="svc-price">Mulai Rp 3,5 juta/titik</span>
                <a className="svc-link" href="#kontak">Diskusikan <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
              </div>
            </article></div>
          </div>
          <div className="cluster">
            <div className="cluster-aside">
              <div className="cluster-label">Pertumbuhan &amp; Talenta</div>
              <h3>Mesin pertumbuhan yang bisa diukur, plus tim yang bisa dibangun</h3>
              <p>SEO, performance marketing, operasional marketplace, dan bootcamp internal untuk tim yang ingin naik level.</p>
            </div>
            <div className="svc-grid">
            <article className="svc" id="marketing">
              <div className="svc-top">
                <span className="svc-icon"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></span>
                <span className="svc-no">09</span>
              </div>
              <h4>Digital Marketing &amp; SEO</h4>
              <p>Kami tidak berhenti di peringkat dan impresi. Setiap bulan Anda menerima laporan yang menjelaskan biaya per leads, kualitas leads, dan apa yang akan diubah bulan berikutnya.</p>
              <ul><li>SEO teknis, on-page, dan konten</li><li>Google Ads, Meta Ads, dan landing page</li><li>Atribusi dan laporan konversi</li></ul>
              <div className="svc-foot">
                <span className="svc-price">Mulai Rp 7,5 juta/bulan</span>
                <a className="svc-link" href="#kontak">Diskusikan <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
              </div>
            </article>
            <article className="svc" id="marketplace">
              <div className="svc-top">
                <span className="svc-icon"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx="9" cy="21" r="1.4"/><circle cx="20" cy="21" r="1.4"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg></span>
                <span className="svc-no">10</span>
              </div>
              <h4>Kelola Toko Online &amp; Marketplace</h4>
              <p>Upload produk, optimasi judul dan foto, balas chat, kelola iklan, dan jaga rating. Anda menerima dashboard penjualan harian dan rekap performa mingguan tanpa harus membuka satu per satu marketplace.</p>
              <ul><li>Shopee, Tokopedia, TikTok Shop, Lazada</li><li>Optimasi listing dan iklan marketplace</li><li>Rekap stok, rating, dan CS harian</li></ul>
              <div className="svc-foot">
                <span className="svc-price">Mulai Rp 6 juta/bulan</span>
                <a className="svc-link" href="#kontak">Diskusikan <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
              </div>
            </article>
            <article className="svc" id="bootcamp">
              <div className="svc-top">
                <span className="svc-icon"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></span>
                <span className="svc-no">11</span>
              </div>
              <h4>Bootcamp &amp; Kursus Coding</h4>
              <p>Program cohort untuk career switcher maupun upskilling tim perusahaan. Materi disusun dari proyek nyata, dengan mentor yang bisa dihubungi dan review kode setiap minggu.</p>
              <ul><li>Web development, data, dan automation</li><li>Batch kecil, mentor live, review kode</li><li>Proyek akhir yang layak masuk portofolio</li></ul>
              <div className="svc-foot">
                <span className="svc-price">Mulai Rp 4,5 juta</span>
                <a className="svc-link" href="#kontak">Diskusikan <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
              </div>
            </article></div>
          </div></div></section>
      <section className="section" aria-labelledby="why-title">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Kenapa Biotama</span>
            <h2 id="why-title">Yang membedakan bukan portofolio, tapi cara kami bekerja.</h2>
          </div>
          <div className="why">
            <div className="why-card">
              <h3>Kontrak dulu, kode kemudian.</h3>
              <p style={{marginTop: "10px"} as React.CSSProperties}>Setiap proyek dimulai dengan dokumen yang menjelaskan lingkup, milestone, siapa bertanggung jawab, dan apa yang terjadi kalau ada perubahan. Anda tidak perlu menebak.</p>
              <ul className="why-list">
                <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg> Source code dan repositori diserahkan penuh</li>
                <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg> Progres mingguan, bukan kabar di akhir proyek</li>
                <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg> NDA dan pembatasan akses per orang</li>
                <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg> Garansi bug 30–90 hari sesuai paket</li>
              </ul>
            </div>
            <div className="why-grid">
              <div className="why-card why-quote">
                <div>
                  <div className="big">98%</div>
                  <blockquote>“Proyek selesai tanpa ganti vendor, tanpa tim yang hilang di tengah jalan.”</blockquote>
                </div>
                <cite>Rekap internal proyek 2024–2025</cite>
              </div>
              <div className="why-card">
                <h4>Tim in-house</h4>
                <p>Engineer, desainer, dan analyst yang bisa Anda temui di meeting — bukan rantai freelance tanpa jejak.</p>
              </div>
              <div className="why-card">
                <h4>Bahasa bisnis</h4>
                <p>Kami menjelaskan trade-off teknis dalam dampak operasional dan biaya, bukan jargon.</p>
              </div>
              <div className="why-card">
                <h4>Setelah rilis</h4>
                <p>Monitoring, pelatihan admin, dan review performa. Sistem harus dipakai, bukan sekadar online.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="proses" style={{paddingTop: "20px"} as React.CSSProperties}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Cara kerja</span>
            <h2>Lima tahap, tanpa kejutan di tengah jalan.</h2>
            <p>Setiap tahap punya deliverable dan estimasi waktu. Kalau ada yang berubah, Anda tahu sebelum biayanya bertambah.</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-no">01 / 05</div>
              <h4>Discovery &amp; audit</h4>
              <p>Sesi 60–90 menit untuk memetakan masalah, proses bisnis, sistem yang sudah ada, dan batasan anggaran.</p>
              <div className="out"><b>Ringkasan temuan + ruang lingkup awal</b><br />1–3 hari</div>
            </div>
            <div className="step">
              <div className="step-no">02 / 05</div>
              <h4>Proposal &amp; kontrak</h4>
              <p>Lingkup kerja, timeline, milestone, harga, dan SLA ditulis jelas. Tidak ada biaya yang muncul belakangan.</p>
              <div className="out"><b>Proposal teknis &amp; komersial</b><br />2–5 hari</div>
            </div>
            <div className="step">
              <div className="step-no">03 / 05</div>
              <h4>Desain &amp; sprint</h4>
              <p>Wireframe, desain, lalu development per sprint dua minggu dengan demo dan progres yang bisa Anda lihat.</p>
              <div className="out"><b>Prototype, sprint demo, catatan revisi</b><br />2–12 minggu</div>
            </div>
            <div className="step">
              <div className="step-no">04 / 05</div>
              <h4>Uji &amp; peluncuran</h4>
              <p>QA fungsional, uji perangkat, uji keamanan dasar, lalu deployment bertahap dengan rollback plan.</p>
              <div className="out"><b>Checklist QA, akses, dan dokumentasi</b><br />3–10 hari</div>
            </div>
            <div className="step">
              <div className="step-no">05 / 05</div>
              <h4>Pendampingan &amp; optimasi</h4>
              <p>Masa garansi, monitoring, pelatihan admin, dan review performa untuk memastikan sistem benar-benar dipakai.</p>
              <div className="out"><b>Laporan performa &amp; rekomendasi</b><br />30–90 hari</div>
            </div></div>
        </div>
      </section>
      <section className="section" id="hasil" style={{paddingTop: "20px"} as React.CSSProperties}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Hasil</span>
            <h2>Angka yang bisa diverifikasi, bukan testimoni tanpa konteks.</h2>
            <p>Nama klien kami rahasiakan karena NDA. Metrik dan konteks industri di bawah adalah ringkasan proyek nyata yang disetujui untuk dipublikasikan.</p>
          </div>
          <div className="cases">
            <article className="case">
              <div className="case-sector">Retail multi-outlet</div>
              <h4>Kasir cloud untuk 14 outlet</h4>
              <div className="case-metrics">
                <div><b>2 jam</b><span>waktu tutup buku harian, dari sebelumnya 3 hari</span></div>
                <div><b>+18%</b><span>akurasi stok</span></div>
              </div>
              <div className="case-row"><b>Masalah</b><span>Tutup buku manual, stok sering selisih antaroutlet.</span></div>
              <div className="case-row"><b>Yang kami lakukan</b><span>POS cloud + offline, migrasi 12.000 SKU, pelatihan 60 kasir.</span></div>
            </article>
            <article className="case">
              <div className="case-sector">Klinik &amp; layanan kesehatan</div>
              <h4>Chatbot WhatsApp + CRM</h4>
              <div className="case-metrics">
                <div><b>82%</b><span>chat terselesaikan tanpa admin</span></div>
                <div><b>8 dtk</b><span>rata-rata respons pertama</span></div>
              </div>
              <div className="case-row"><b>Masalah</b><span>Admin kewalahan 900+ chat/bulan, leads banyak yang hilang.</span></div>
              <div className="case-row"><b>Yang kami lakukan</b><span>Chatbot alur pendaftaran, pengingat jadwal, dan handover ke admin.</span></div>
            </article>
            <article className="case">
              <div className="case-sector">Distribusi B2B</div>
              <h4>Dashboard BI lintas cabang</h4>
              <div className="case-metrics">
                <div><b>1 hari</b><span>penyusunan laporan bulanan, dari 5 hari</span></div>
                <div><b>12</b><span>sumber data terintegrasi</span></div>
              </div>
              <div className="case-row"><b>Masalah</b><span>Laporan bulanan disusun manual dari 12 file spreadsheet.</span></div>
              <div className="case-row"><b>Yang kami lakukan</b><span>Warehouse ringan, definisi metrik tunggal, dashboard per cabang.</span></div>
            </article>
            <article className="case">
              <div className="case-sector">Fintech</div>
              <h4>Penetration test &amp; remediasi</h4>
              <div className="case-metrics">
                <div><b>17</b><span>temuan kritis ditutup sebelum rilis</span></div>
                <div><b>0</b><span>insiden keamanan pasca-rilis</span></div>
              </div>
              <div className="case-row"><b>Masalah</b><span>Persyaratan audit keamanan sebelum peluncuran produk baru.</span></div>
              <div className="case-row"><b>Yang kami lakukan</b><span>Pentest web &amp; API, laporan dua lapis, pendampingan perbaikan.</span></div>
            </article></div>
        </div>
      </section>
      <section className="section" aria-labelledby="calc-title" style={{paddingTop: "20px"} as React.CSSProperties}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Kalkulator</span>
            <h2 id="calc-title">Berapa jam yang bisa Anda kembalikan ke tim?</h2>
            <p>Hitung kasar dampak otomasi chat sebelum bicara angka proyek.</p>
          </div>
          <div className="calc">
            <div className="calc-form">
              <h3>Asumsi operasional Anda</h3>
              <p className="hint">Ubah angkanya sesuai kondisi tim Anda saat ini.</p>
              <div className="field">
                <label htmlFor="chats">Chat masuk per hari</label>
                <input id="chats" type="number" defaultValue="120" min="0" max="5000" step="10" inputMode="numeric" />
              </div>
              <div className="field">
                <label htmlFor="mins">Menit admin per chat — <span className="range-val" id="minsVal">4 menit</span></label>
                <input id="mins" type="range" min="1" max="15" defaultValue="4" step="1" />
              </div>
              <div className="field">
                <label htmlFor="cost">Biaya admin per jam (Rp)</label>
                <input id="cost" type="number" defaultValue="45000" min="0" step="5000" inputMode="numeric" />
              </div>
            </div>
            <div className="calc-out" aria-live="polite">
              <div className="k">Estimasi penghematan</div>
              <div className="num"><span id="saveHours">0</span><small> jam/bulan</small></div>
              <p className="sub">Setara <strong id="saveRp">Rp 0</strong> biaya admin per bulan, dengan asumsi 70% chat bisa ditangani otomatis.</p>
              <p className="fine">Estimasi kasar, bukan penawaran. Angka final ditentukan setelah audit alur percakapan dan volume nyata.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="harga" style={{paddingTop: "20px"} as React.CSSProperties}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Paket</span>
            <h2>Titik mulai yang jelas, ruang untuk disesuaikan.</h2>
            <p>Harga di bawah adalah contoh paket. Setiap proposal menyebutkan lingkup, jumlah revisi, dan SLA secara eksplisit.</p>
          </div>
          <div className="prices">
            <div className="price">
              <div className="tier">Mulai</div>
              <h4>Mulai</h4>
              <div className="for">UMKM &amp; bisnis yang butuh kehadiran digital yang rapi</div>
              <div className="amount">Rp 9 jt</div>
              <div className="unit">per proyek · belum termasuk pajak</div>
              <ul><li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg> Landing page / company profile 5–7 halaman</li><li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg> SEO teknis dasar &amp; Google Analytics</li><li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg> Copywriting dan desain custom</li><li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg> Revisi 2 putaran</li><li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg> Garansi bug 30 hari</li></ul>
              <a className="btn btn-ghost" href="#kontak">Mulai dari sini</a>
            </div>
            <div className="price featured"><span className="badge">Paling dipilih</span>
              <div className="tier">Tumbuh</div>
              <h4>Tumbuh</h4>
              <div className="for">Bisnis yang butuh sistem, otomasi, atau integrasi</div>
              <div className="amount">Rp 25 jt</div>
              <div className="unit">per proyek · belum termasuk pajak</div>
              <ul><li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg> Web app / POS / chatbot sesuai kebutuhan</li><li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg> Integrasi maksimal 3 sistem</li><li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg> Dashboard operasional</li><li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg> Pendampingan 60 hari</li><li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg> Prioritas support &lt; 4 jam kerja</li></ul>
              <a className="btn btn-primary" href="#kontak">Diskusikan kebutuhan</a>
            </div>
            <div className="price">
              <div className="tier">Enterprise</div>
              <h4>Enterprise</h4>
              <div className="for">Perusahaan dengan kebutuhan keamanan, data, dan SLA</div>
              <div className="amount">Custom</div>
              <div className="unit">per retainer / proyek · belum termasuk pajak</div>
              <ul><li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg> Managed services &amp; helpdesk dengan SLA</li><li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg> Pentest dan audit keamanan berkala</li><li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg> Tim dedikasi &amp; NDA</li><li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg> Roadmap IT 12 bulan</li><li><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><polyline points="20 6 9 17 4 12"/></svg> Quarterly business review</li></ul>
              <a className="btn btn-ghost" href="#kontak">Minta proposal</a>
            </div></div>
          <p style={{fontSize: ".76rem", color: "var(--dim)", marginTop: "16px"} as React.CSSProperties}>Semua harga dalam Rupiah. Untuk kebutuhan gabungan (mis. chatbot + POS + dashboard), kami susun paket khusus setelah discovery.</p>
        </div>
      </section>
      <section className="section" aria-labelledby="quotes-title" style={{paddingTop: "20px"} as React.CSSProperties}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Kata klien</span>
            <h2 id="quotes-title">Yang mereka nilai bukan cuma hasilnya.</h2>
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
      <section className="section" id="faq" style={{paddingTop: "20px"} as React.CSSProperties}>
        <div className="wrap faq-layout">
          <div className="faq-aside">
            <span className="eyebrow">FAQ</span>
            <h2>Pertanyaan yang biasanya muncul sebelum kontrak.</h2>
            <p>Belum terjawab? Kirim pertanyaan Anda lewat <a href="https://wa.me/6281398253186?text=Halo%20Biotama%2C%20saya%20punya%20pertanyaan%20sebelum%20mulai%20proyek." target="_blank" rel="noopener">WhatsApp</a> — dijawab tim, bukan bot.</p>
          </div>
          <div className="faq"><details><summary>Berapa lama pengerjaan website atau aplikasi?</summary><p>Landing page biasanya 2–3 minggu, company profile 3–5 minggu, aplikasi mobile 8–16 minggu, dan sistem internal 6–12 minggu. Estimasi final diberikan setelah sesi discovery, lalu dikunci di kontrak beserta milestone-nya.</p></details><details><summary>Apakah source code menjadi milik klien?</summary><p>Ya. Untuk proyek development, source code dan akses repositori diserahkan penuh setelah pelunasan, tanpa lisensi tersembunyi atau vendor lock-in. Kami juga menyertakan dokumentasi teknis agar tim internal Anda bisa melanjutkan.</p></details><details><summary>Bagaimana skema pembayaran?</summary><p>Umumnya 30% di awal, 40% setelah milestone desain/prototype disetujui, dan 30% saat peluncuran. Untuk retainer bulanan, pembayaran dilakukan di awal periode dengan SLA tertulis.</p></details><details><summary>Bisakah mulai dari skala kecil dulu?</summary><p>Bisa. Banyak klien mulai dari satu modul atau satu kanal — misalnya chatbot WhatsApp saja atau dashboard satu divisi — lalu berkembang setelah hasilnya terukur. Kami sengaja menyusun roadmap bertahap agar anggaran tidak membengkak di depan.</p></details><details><summary>Bagaimana Anda menjaga kerahasiaan data?</summary><p>Setiap engagement menandatangani NDA. Akses ke sistem klien diberikan per-orang, dicatat, dan dicabut setelah proyek selesai. Untuk pekerjaan keamanan, semua bukti temuan disimpan terenkripsi dan hanya diserahkan ke pihak yang berwenang.</p></details><details><summary>Apakah melayani klien di luar Jakarta?</summary><p>Ya. Sekitar 60% klien kami berada di luar Jakarta dan dikerjakan secara remote dengan ritme meeting yang disepakati. Untuk instalasi CCTV, smart home, dan audit on-site, kami menjadwalkan kunjungan teknisi ke lokasi.</p></details><details><summary>Apa bedanya chatbot Biotama dengan chatbot template?</summary><p>Chatbot template menjawab skenario umum. Kami memetakan alur bisnis Anda lebih dulu, menghubungkan ke CRM dan sistem internal, menetapkan guardrail, serta menyiapkan human handover ketika pertanyaan di luar cakupan. Setelah rilis, ada evaluasi percakapan dan perbaikan rutin.</p></details><details><summary>Apakah ada garansi dan maintenance?</summary><p>Ada. Proyek development mendapat garansi bug 30–90 hari tergantung paket. Untuk maintenance berkelanjutan tersedia paket bulanan yang mencakup monitoring, update keamanan, backup, dan jam dukungan sesuai SLA.</p></details><details><summary>Bagaimana cara kerja bootcamp &amp; kursus coding?</summary><p>Kelas dijalankan per batch dengan kuota kecil (maksimal 15 peserta), mentor live setiap minggu, review kode, dan proyek akhir. Untuk perusahaan, silabus bisa disesuaikan dengan stack dan kebutuhan tim, lalu dijalankan secara internal.</p></details><details><summary>Bisakah integrasi dengan sistem yang sudah kami pakai?</summary><p>Bisa, selama sistem tersebut menyediakan API, database access, atau jalur ekspor-impor. Pada tahap discovery kami memetakan integrasi yang memungkinkan, risikonya, dan estimasi biayanya sebelum kontrak ditandatangani.</p></details></div>
        </div>
      </section>
      <section className="section" id="kontak" style={{paddingTop: "20px"} as React.CSSProperties}>
        <div className="wrap">
          <div className="contact">
            <div>
              <span className="eyebrow">Kontak</span>
              <h2>Mulai dari percakapan 30 menit.</h2>
              <p className="lede">Ceritakan masalahnya, bukan solusinya. Kami akan bantu memetakan mana yang bisa diselesaikan cepat dan mana yang perlu diprioritaskan.</p>
              <ul className="contact-info">
                <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4z"/><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg><div><b>WhatsApp</b><a href="https://wa.me/6281398253186?text=Halo%20Biotama%2C%20saya%20ingin%20konsultasi%20tentang%20kebutuhan%20digital%20bisnis%20saya." target="_blank" rel="noopener">+62 813-9825-3186</a></div></li>
                <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><div><b>Email</b><a href="mailto:fxwisdom1@gmail.com">fxwisdom1@gmail.com</a></div></li>
                <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><div><b>Kantor</b>Jakarta Selatan, Jakarta</div></li>
                <li><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><div><b>Jam kerja</b>Senin–Jumat 09.00–18.00 WIB · Sabtu 09.00–13.00 WIB</div></li>
              </ul>
            </div>
            <form className="form" data-wa-form="" data-status="formStatus" noValidate>
              <div className="form-row">
                <div className="field"><label htmlFor="nama">Nama</label><input id="nama" name="nama" type="text" autoComplete="name" required placeholder="Nama Anda" /></div>
                <div className="field"><label htmlFor="perusahaan">Perusahaan</label><input id="perusahaan" name="perusahaan" type="text" autoComplete="organization" placeholder="Nama usaha" /></div>
              </div>
              <div className="form-row">
                <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required placeholder="nama@perusahaan.com" /></div>
                <div className="field"><label htmlFor="wa">WhatsApp</label><input id="wa" name="wa" type="tel" autoComplete="tel" required placeholder="0812…" /></div>
              </div>
              <div className="form-row">
                <div className="field"><label htmlFor="layanan">Layanan</label><select id="layanan" name="layanan"><option>Chatbot &amp; Otomasi AI Bisnis</option><option>Data Analytics &amp; Business Intelligence</option><option>Website &amp; Aplikasi Web</option><option>Aplikasi Mobile</option><option>Sistem Kasir POS Digital</option><option>IT Consulting &amp; Managed Services</option><option>Cybersecurity &amp; Penetration Testing</option><option>Instalasi CCTV &amp; Smart Home</option><option>Digital Marketing &amp; SEO</option><option>Kelola Toko Online &amp; Marketplace</option><option>Bootcamp &amp; Kursus Coding</option></select></div>
                <div className="field"><label htmlFor="budget">Estimasi budget</label><select id="budget" name="budget"><option>Di bawah Rp 10 juta</option><option>Rp 10–25 juta</option><option>Rp 25–50 juta</option><option>Rp 50–100 juta</option><option>Di atas Rp 100 juta</option><option>Belum tahu</option></select></div>
              </div>
              <div className="field"><label htmlFor="pesan">Kebutuhan singkat</label><textarea id="pesan" name="pesan" rows={4} placeholder="Contoh: butuh chatbot WhatsApp yang terhubung ke Google Sheets dan tim CS."></textarea></div>
              <input className="hp" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <button className="btn btn-primary" type="submit"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4z"/><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg> Kirim & lanjut ke WhatsApp</button>
              <p className="note">Data hanya dipakai untuk membalas permintaan ini. Tidak ada newsletter otomatis.</p>
              <p className="form-status" id="formStatus" role="status" aria-live="polite"></p>
            </form>
          </div>
        </div>
      </section>
      </main>
      <footer className="site-footer">
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <a className="logo" href="#top"><span className="logo-mark" aria-hidden="true">B</span><span>biotama<span className="dot">.</span></span></a>
              <p>Mitra AI, software, dan infrastruktur digital untuk bisnis Indonesia. Kontrak jelas, source code milik Anda.</p>
              <div className="foot-social">
                <a href="https://www.linkedin.com/company/biotama" target="_blank" rel="noopener" aria-label="LinkedIn Biotama"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
                <a href="https://www.instagram.com/biotama" target="_blank" rel="noopener" aria-label="Instagram Biotama"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.4A4 4 0 1 1 12.6 8 4 4 0 0 1 16 11.4z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
                <a href="https://wa.me/6281398253186?text=Halo%20Biotama%2C%20saya%20ingin%20konsultasi%20tentang%20kebutuhan%20digital%20bisnis%20saya." target="_blank" rel="noopener" aria-label="WhatsApp Biotama"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4z"/><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg></a>
              </div>
            </div>
            <div className="foot-col">
              <h5>Layanan</h5>
              <ul><li><a href="#chatbot">Chatbot &amp; Otomasi AI Bisnis</a></li><li><a href="#data">Data Analytics &amp; Business Intelligence</a></li><li><a href="#website">Website &amp; Aplikasi Web</a></li><li><a href="#mobile">Aplikasi Mobile</a></li><li><a href="#pos">Sistem Kasir POS Digital</a></li><li><a href="#it">IT Consulting &amp; Managed Services</a></li></ul>
            </div>
            <div className="foot-col">
              <h5>Lainnya</h5>
              <ul><li><a href="#cyber">Cybersecurity &amp; Penetration Testing</a></li><li><a href="#cctv">Instalasi CCTV &amp; Smart Home</a></li><li><a href="#marketing">Digital Marketing &amp; SEO</a></li><li><a href="#marketplace">Kelola Toko Online &amp; Marketplace</a></li><li><a href="#bootcamp">Bootcamp &amp; Kursus Coding</a></li><li><a href="#kontak">Kontak</a></li><li><a href="/llms.txt">llms.txt</a></li></ul>
            </div>
            <div className="foot-col">
              <h5>Kantor</h5>
              <address>Biotama<br />Jakarta Selatan<br />Jakarta<br /><a href="mailto:fxwisdom1@gmail.com">fxwisdom1@gmail.com</a><br /><a href="tel:+6281398253186">+62 813-9825-3186</a></address>
            </div>
          </div>
          <div className="ai-summary">
            <h5>Ringkasan untuk mesin pencari & agen AI</h5>
            <p>Biotama (Biotama) adalah perusahaan teknologi di Jakarta Selatan yang menyediakan 11 layanan: Jasa Pembuatan Chatbot &amp; Otomasi AI Bisnis, Konsultan Data Analytics &amp; Business Intelligence, Jasa Pembuatan Website &amp; Aplikasi, Pengembang Aplikasi Mobile iOS &amp; Android, Penyedia Sistem Kasir POS Digital, IT Consulting &amp; Managed Services, Konsultan Cybersecurity &amp; Penetration Testing, Jasa Instalasi CCTV &amp; Smart Home, Digital Marketing &amp; SEO Agency, Jasa Kelola Toko Online &amp; Marketplace, Bootcamp &amp; Kursus Coding untuk Tim dan Individu. Melayani klien di seluruh Indonesia, dengan konsultasi awal gratis 30 menit melalui WhatsApp +62 813-9825-3186 atau email fxwisdom1@gmail.com. Situs: https://biotama.cv. Ringkasan terstruktur: https://biotama.cv/llms.txt</p>
          </div>
          <div className="foot-bottom">
            <span>© <span data-year="">2026</span> Biotama. Seluruh hak cipta dilindungi.</span>
            <span>Jakarta, Indonesia · <a href="#top">Kembali ke atas</a></span>
          </div>
        </div>
      </footer>
      <a className="wa-float" href="https://wa.me/6281398253186?text=Halo%20Biotama%2C%20saya%20ingin%20konsultasi%20tentang%20kebutuhan%20digital%20bisnis%20saya." target="_blank" rel="noopener" aria-label="Chat WhatsApp Biotama"><svg width="27" height="27" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4z"/><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg><span>Chat WhatsApp</span></a>
      <LandingFX calculator />
    </div>
  );
}
