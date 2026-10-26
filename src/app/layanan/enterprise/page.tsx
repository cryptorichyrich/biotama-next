import type { Metadata } from "next";
import "./landing.css";
import LandingFX from "@/components/landing/LandingFX";
import { serviceSchema } from "@/lib/service-schema";

const title = "Biotama — Mitra IT, Data & Keamanan Perusahaan";
const description = "Konsultan teknologi untuk perusahaan: managed IT, keamanan siber, data, aplikasi, POS, dan CCTV. SLA tertulis dan bisa diaudit. Jadwalkan konsultasi.";
const canonical = "https://biotama.cv/layanan/enterprise/";

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
        url: "/assets/og-v2.png",
        width: 1200,
        height: 630,
        alt: "Mitra IT, data, dan keamanan perusahaan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/assets/og-v2.png"],
  },
  other: { "content-language": "id-ID" },
};

const schema = serviceSchema({
  canonical,
  title,
  description,
  breadcrumbLabel: "enterprise",
  pageLabel: "Enterprise",
  image: "/assets/og-v2.png",
});

export default function Page() {
  return (
    <div className="lp lp-ent" lang="id">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <a className="skip" href="#konten">Lewati ke konten utama</a>
      <div className="topline"><div className="wrap">
        <span><strong>Catatan:</strong> NDA tersedia sebelum diskusi teknis. Slot audit awal bulan ini terbatas.</span>
        <span className="meta">JAKARTA · WIB · <a href="https://wa.me/6281398253186?text=Halo%20Biotama%2C%20saya%20ingin%20menjadwalkan%20konsultasi." target="_blank" rel="noopener">Jadwalkan konsultasi</a></span>
      </div></div>
      <header className="site-header" id="siteHeader">
        <div className="wrap nav">
          <a className="logo" href="#top" aria-label="Biotama — beranda">
            <span className="mark" aria-hidden="true">B</span>
            <span>biotama</span><em>digital</em>
          </a>
          <nav className="nav-links" id="navLinks" aria-label="Navigasi utama"><a href="#layanan">Layanan</a><a href="#proses">Cara Kerja</a><a href="#hasil">Hasil</a><a href="#harga">Paket</a><a href="#faq">FAQ</a></nav>
          <div className="nav-cta">
            <a className="btn btn-teal btn-sm" href="#kontak">Minta proposal</a>
            <button className="nav-toggle" type="button" aria-label="Buka menu" aria-expanded="false" aria-controls="navLinks">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>
      </header>
      <main id="konten">
      <section className="hero" id="top">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <span className="kicker">Konsultan teknologi · sejak 2017</span>
              <h1>Mitra teknologi untuk keputusan yang <em>tidak boleh salah.</em></h1>
              <p className="lede">Biotama membantu perusahaan menata <strong>infrastruktur IT, keamanan siber, data, dan produk digital</strong> dengan lingkup kerja, SLA, dan dokumentasi yang bisa dipertanggungjawabkan — bukan janji lisan di ruang rapat.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#kontak">Jadwalkan konsultasi <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
                <a className="btn btn-outline" href="#layanan">Tinjau layanan</a>
              </div>
              <ul className="hero-chips">
                <li>Kontrak &amp; SLA tertulis</li><li>Source code milik klien</li><li>NDA di setiap engagement</li><li>Tim in-house, bukan freelancer lepas</li>
              </ul>
            </div>
            <aside className="dossier" aria-label="Ringkasan kredensial Biotama">
              <div className="dossier-head"><span>Credential docket</span><b>BIOTAMA / 2026</b></div>
              <div className="dossier-body">
                <dl style={{margin: "0"} as React.CSSProperties}>
                  <div className="dossier-row"><dt>Berdiri</dt><dd>2017 · Jakarta Selatan</dd></div>
                  <div className="dossier-row"><dt>Fokus</dt><dd>AI & data, software, infrastruktur, pertumbuhan</dd></div>
                  <div className="dossier-row"><dt>Klien</dt><dd>Retail, F&B, kesehatan, distribusi, fintech, pendidikan</dd></div>
                  <div className="dossier-row"><dt>Metodologi</dt><dd>OWASP ASVS, ITIL 4, praktik ISO/IEC 27001</dd></div>
                  <div className="dossier-row"><dt>Engagement</dt><dd>Proyek tetap, retainer bulanan, tim dedikasi</dd></div>
                </dl>
              </div>
              <div className="dossier-foot"><div className="n">11</div><span>layanan dalam satu tim yang sama</span></div>
            </aside>
          </div>
          <div className="hero-strip"><div><b>120+</b><span>proyek digital dikerjakan</span></div><div><b>40+</b><span>klien aktif &amp; berulang</span></div><div><b>8 thn</b><span>pengalaman tim inti</span></div><div><b>99.9%</b><span>uptime layanan terkelola</span></div></div>
        </div>
      </section>
      <section className="section" id="layanan" style={{paddingTop: "clamp(48px,6vw,76px)"} as React.CSSProperties}>
        <div className="wrap">
          <div className="section-head">
            <div><span className="kicker">01 — Layanan</span><h2>Sebelas disiplin, satu standar kerja.</h2></div>
            <p className="lead">Setiap engagement dimulai dari pemetaan masalah dan diakhiri dengan serah terima yang terdokumentasi. Pilih satu layanan, atau gabungkan sesuai prioritas.</p>
          </div>
          <div className="svc-group">
            <div className="svc-group-head">
              <span>AI &amp; Data</span>
              <h3>Otomasi yang menghemat jam kerja</h3>
              <p>Dua hal yang paling sering diminta klien: mengurangi pekerjaan berulang, dan membuat angka di laporan akhirnya konsisten.</p>
            </div>
            
            <article className="svc" id="chatbot">
              <div className="svc-no">01</div>
              <div>
                <h4><a href="#kontak">Chatbot &amp; Otomasi AI Bisnis <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></h4>
                <p className="sub">Chatbot WhatsApp, Instagram, dan web yang benar-benar paham alur bisnis Anda.</p>
              </div>
              <ul><li>Kanal WhatsApp, Instagram DM, web chat, dan telepon</li><li>Integrasi CRM, Google Sheets, dan sistem internal</li><li>Human handover, guardrail, dan dashboard percakapan</li></ul>
              <div className="svc-price"><span>Investasi</span><b>Mulai Rp 15 juta</b></div>
            </article>
            <article className="svc" id="data">
              <div className="svc-no">02</div>
              <div>
                <h4><a href="#kontak">Data Analytics &amp; Business Intelligence <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></h4>
                <p className="sub">Dari data yang berserakan jadi satu dashboard yang dipakai rapat direksi.</p>
              </div>
              <ul><li>Audit data dan pemetaan sumber</li><li>Dashboard operasional, finance, dan marketing</li><li>Pelatihan tim internal agar mandiri</li></ul>
              <div className="svc-price"><span>Investasi</span><b>Mulai Rp 25 juta</b></div>
            </article>
          </div>
          <div className="svc-group">
            <div className="svc-group-head">
              <span>Software &amp; Produk Digital</span>
              <h3>Produk digital yang dipakai tiap hari</h3>
              <p>Website, aplikasi, dan kasir yang dibangun dengan lingkup jelas, source code milik Anda, serta pendampingan setelah rilis.</p>
            </div>
            
            <article className="svc" id="website">
              <div className="svc-no">03</div>
              <div>
                <h4><a href="#kontak">Website &amp; Aplikasi Web <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></h4>
                <p className="sub">Company profile, e-commerce, sampai sistem internal yang dipakai tim tiap hari.</p>
              </div>
              <ul><li>Desain custom, bukan template seragam</li><li>SEO teknis dan kecepatan halaman sejak awal</li><li>Source code diserahkan, tanpa vendor lock-in</li></ul>
              <div className="svc-price"><span>Investasi</span><b>Mulai Rp 9 juta</b></div>
            </article>
            <article className="svc" id="mobile">
              <div className="svc-no">04</div>
              <div>
                <h4><a href="#kontak">Aplikasi Mobile <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></h4>
                <p className="sub">iOS, Android, dan cross-platform dengan proses yang transparan.</p>
              </div>
              <ul><li>Flutter / React Native / native</li><li>Prototype dan pengujian sebelum development</li><li>Garansi bug fix pasca-rilis</li></ul>
              <div className="svc-price"><span>Investasi</span><b>Mulai Rp 45 juta</b></div>
            </article>
            <article className="svc" id="pos">
              <div className="svc-no">05</div>
              <div>
                <h4><a href="#kontak">Sistem Kasir POS Digital <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></h4>
                <p className="sub">Kasir cloud + offline untuk retail dan F&amp;B multi-outlet.</p>
              </div>
              <ul><li>Mode offline dan sinkronisasi otomatis</li><li>Multi-outlet, multi-gudang, dan hak akses</li><li>Migrasi data dan pelatihan kasir</li></ul>
              <div className="svc-price"><span>Investasi</span><b>Mulai Rp 8 juta</b></div>
            </article>
          </div>
          <div className="svc-group">
            <div className="svc-group-head">
              <span>Infrastruktur &amp; Keamanan</span>
              <h3>Fondasi IT yang tenang</h3>
              <p>Dari managed services sampai penetration testing dan instalasi CCTV — semuanya dengan SLA dan dokumentasi tertulis.</p>
            </div>
            
            <article className="svc" id="it">
              <div className="svc-no">06</div>
              <div>
                <h4><a href="#kontak">IT Consulting &amp; Managed Services <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></h4>
                <p className="sub">Tim IT Anda diperkuat, atau seluruh fungsi IT kami kelola.</p>
              </div>
              <ul><li>IT health check dan roadmap 12 bulan</li><li>Monitoring 24/7 dan helpdesk dengan SLA</li><li>Laporan bulanan yang bisa dibaca manajemen</li></ul>
              <div className="svc-price"><span>Investasi</span><b>Mulai Rp 12 juta/bulan</b></div>
            </article>
            <article className="svc" id="cyber">
              <div className="svc-no">07</div>
              <div>
                <h4><a href="#kontak">Cybersecurity &amp; Penetration Testing <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></h4>
                <p className="sub">Temukan celah sebelum pihak yang tidak berwenang menemukannya.</p>
              </div>
              <ul><li>Web app, API, mobile, dan infrastruktur</li><li>Laporan severity + bukti dan langkah remediasi</li><li>Pendampingan penutupan temuan</li></ul>
              <div className="svc-price"><span>Investasi</span><b>Mulai Rp 20 juta</b></div>
            </article>
            <article className="svc" id="cctv">
              <div className="svc-no">08</div>
              <div>
                <h4><a href="#kontak">Instalasi CCTV &amp; Smart Home <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></h4>
                <p className="sub">Survei titik kamera, instalasi rapi, dan garansi pemasangan.</p>
              </div>
              <ul><li>Survei lokasi dan desain titik kamera</li><li>Integrasi smart home, access control, alarm</li><li>Garansi pemasangan dan pendampingan aplikasi</li></ul>
              <div className="svc-price"><span>Investasi</span><b>Mulai Rp 3,5 juta/titik</b></div>
            </article>
          </div>
          <div className="svc-group">
            <div className="svc-group-head">
              <span>Pertumbuhan &amp; Talenta</span>
              <h3>Mesin pertumbuhan yang bisa diukur</h3>
              <p>SEO, performance marketing, operasional marketplace, dan bootcamp internal untuk tim yang ingin naik level.</p>
            </div>
            
            <article className="svc" id="marketing">
              <div className="svc-no">09</div>
              <div>
                <h4><a href="#kontak">Digital Marketing &amp; SEO <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></h4>
                <p className="sub">Laporan yang menghubungkan traffic ke pipeline penjualan.</p>
              </div>
              <ul><li>SEO teknis, on-page, dan konten</li><li>Google Ads, Meta Ads, dan landing page</li><li>Atribusi dan laporan konversi</li></ul>
              <div className="svc-price"><span>Investasi</span><b>Mulai Rp 7,5 juta/bulan</b></div>
            </article>
            <article className="svc" id="marketplace">
              <div className="svc-no">10</div>
              <div>
                <h4><a href="#kontak">Kelola Toko Online &amp; Marketplace <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></h4>
                <p className="sub">Operasional Shopee, Tokopedia, dan TikTok Shop ditangani end-to-end.</p>
              </div>
              <ul><li>Shopee, Tokopedia, TikTok Shop, Lazada</li><li>Optimasi listing dan iklan marketplace</li><li>Rekap stok, rating, dan CS harian</li></ul>
              <div className="svc-price"><span>Investasi</span><b>Mulai Rp 6 juta/bulan</b></div>
            </article>
            <article className="svc" id="bootcamp">
              <div className="svc-no">11</div>
              <div>
                <h4><a href="#kontak">Bootcamp &amp; Kursus Coding <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></h4>
                <p className="sub">Kelas kecil, mentor aktif, dan portofolio yang benar-benar jadi.</p>
              </div>
              <ul><li>Web development, data, dan automation</li><li>Batch kecil, mentor live, review kode</li><li>Proyek akhir yang layak masuk portofolio</li></ul>
              <div className="svc-price"><span>Investasi</span><b>Mulai Rp 4,5 juta</b></div>
            </article>
          </div></div></section>
      <section className="section">
        <div className="wrap why">
          <div>
            <span className="kicker">02 — Pendekatan</span>
            <h2>Kredibilitas dibangun dari hal yang membosankan.</h2>
            <p className="lead">Kontrak, dokumentasi, uji, dan serah terima. Kami percaya pekerjaan teknologi yang baik jarang terlihat spektakuler di presentasi — tapi terasa di operasional sehari-hari.</p>
            <div className="why-quote">
              <blockquote>“Vendor yang baik membuat tim internal Anda lebih tenang, bukan lebih bergantung.”</blockquote>
              <cite>Prinsip kerja Biotama</cite>
            </div>
          </div>
          <div className="why-list">
            <div className="why-item">
              <div className="num">01</div>
              <div><h4>Lingkup dan SLA ditulis sebelum mulai</h4><p>Proposal memuat deliverable, siapa yang mengerjakan, batas revisi, dan waktu respons. Perubahan di luar lingkup punya prosedur, bukan negosiasi mendadak.</p></div>
            </div>
            <div className="why-item">
              <div className="num">02</div>
              <div><h4>Source code dan akses menjadi milik Anda</h4><p>Repositori, dokumentasi, dan kredensial diserahkan saat proyek selesai. Tidak ada lisensi tersembunyi atau ketergantungan pada satu vendor.</p></div>
            </div>
            <div className="why-item">
              <div className="num">03</div>
              <div><h4>Bukti kerja, bukan klaim pemasaran</h4><p>Laporan progres, hasil uji, dan metrik operasional tersedia untuk diaudit. Kami menolak angka yang tidak bisa kami pertanggungjawabkan.</p></div>
            </div>
            <div className="why-item">
              <div className="num">04</div>
              <div><h4>Tim yang bisa dihubungi setelah rilis</h4><p>Garansi bug, monitoring, dan sesi pelatihan admin. Sistem harus stabil dan dipakai, bukan hanya lolos demo.</p></div>
            </div></div>
        </div>
      </section>
      <section className="section" id="proses" style={{background: "var(--bg-alt)", borderBlock: "1px solid var(--line)"} as React.CSSProperties}>
        <div className="wrap">
          <div className="section-head">
            <div><span className="kicker">03 — Proses</span><h2>Alur kerja yang bisa diikuti siapa pun.</h2></div>
            <p className="lead">Setiap tahap menghasilkan dokumen. Jika proyek berhenti di tengah, Anda tetap memegang semua artefak yang sudah dibayar.</p>
          </div>
          <div className="proc">
            <div className="proc-step">
              <div className="no">01</div>
              <h4>Discovery &amp; audit</h4>
              <p>Sesi 60–90 menit untuk memetakan masalah, proses bisnis, sistem yang sudah ada, dan batasan anggaran.</p>
              <div className="meta">Ringkasan temuan + ruang lingkup awal<span>1–3 hari</span></div>
            </div>
            <div className="proc-step">
              <div className="no">02</div>
              <h4>Proposal &amp; kontrak</h4>
              <p>Lingkup kerja, timeline, milestone, harga, dan SLA ditulis jelas. Tidak ada biaya yang muncul belakangan.</p>
              <div className="meta">Proposal teknis &amp; komersial<span>2–5 hari</span></div>
            </div>
            <div className="proc-step">
              <div className="no">03</div>
              <h4>Desain &amp; sprint</h4>
              <p>Wireframe, desain, lalu development per sprint dua minggu dengan demo dan progres yang bisa Anda lihat.</p>
              <div className="meta">Prototype, sprint demo, catatan revisi<span>2–12 minggu</span></div>
            </div>
            <div className="proc-step">
              <div className="no">04</div>
              <h4>Uji &amp; peluncuran</h4>
              <p>QA fungsional, uji perangkat, uji keamanan dasar, lalu deployment bertahap dengan rollback plan.</p>
              <div className="meta">Checklist QA, akses, dan dokumentasi<span>3–10 hari</span></div>
            </div>
            <div className="proc-step">
              <div className="no">05</div>
              <h4>Pendampingan &amp; optimasi</h4>
              <p>Masa garansi, monitoring, pelatihan admin, dan review performa untuk memastikan sistem benar-benar dipakai.</p>
              <div className="meta">Laporan performa &amp; rekomendasi<span>30–90 hari</span></div>
            </div></div>
        </div>
      </section>
      <section className="section" id="hasil">
        <div className="wrap">
          <div className="section-head">
            <div><span className="kicker">04 — Studi kasus</span><h2>Hasil yang diukur dengan konteks.</h2></div>
            <p className="lead">Nama klien disamarkan sesuai NDA. Metrik berasal dari laporan proyek yang disetujui untuk dipublikasikan, bukan estimasi pemasaran.</p>
          </div>
          <div className="cases">
            <article className="case">
              <div className="sector">Retail multi-outlet</div>
              <h4>Kasir cloud untuk 14 outlet</h4>
              <div className="row"><b>Masalah</b><span>Tutup buku manual, stok sering selisih antaroutlet.</span></div>
              <div className="row"><b>Tindakan</b><span>POS cloud + offline, migrasi 12.000 SKU, pelatihan 60 kasir.</span></div>
              <div className="metrics">
                <div><b>2 jam</b><span>waktu tutup buku harian, dari sebelumnya 3 hari</span></div>
                <div><b>+18%</b><span>akurasi stok</span></div>
              </div>
            </article>
            <article className="case">
              <div className="sector">Klinik &amp; layanan kesehatan</div>
              <h4>Chatbot WhatsApp + CRM</h4>
              <div className="row"><b>Masalah</b><span>Admin kewalahan 900+ chat/bulan, leads banyak yang hilang.</span></div>
              <div className="row"><b>Tindakan</b><span>Chatbot alur pendaftaran, pengingat jadwal, dan handover ke admin.</span></div>
              <div className="metrics">
                <div><b>82%</b><span>chat terselesaikan tanpa admin</span></div>
                <div><b>8 dtk</b><span>rata-rata respons pertama</span></div>
              </div>
            </article>
            <article className="case">
              <div className="sector">Distribusi B2B</div>
              <h4>Dashboard BI lintas cabang</h4>
              <div className="row"><b>Masalah</b><span>Laporan bulanan disusun manual dari 12 file spreadsheet.</span></div>
              <div className="row"><b>Tindakan</b><span>Warehouse ringan, definisi metrik tunggal, dashboard per cabang.</span></div>
              <div className="metrics">
                <div><b>1 hari</b><span>penyusunan laporan bulanan, dari 5 hari</span></div>
                <div><b>12</b><span>sumber data terintegrasi</span></div>
              </div>
            </article>
            <article className="case">
              <div className="sector">Fintech</div>
              <h4>Penetration test &amp; remediasi</h4>
              <div className="row"><b>Masalah</b><span>Persyaratan audit keamanan sebelum peluncuran produk baru.</span></div>
              <div className="row"><b>Tindakan</b><span>Pentest web &amp; API, laporan dua lapis, pendampingan perbaikan.</span></div>
              <div className="metrics">
                <div><b>17</b><span>temuan kritis ditutup sebelum rilis</span></div>
                <div><b>0</b><span>insiden keamanan pasca-rilis</span></div>
              </div>
            </article></div>
        </div>
      </section>
      <section className="section" id="harga" style={{paddingTop: "0"} as React.CSSProperties}>
        <div className="wrap">
          <div className="section-head" style={{borderTop: "1px solid var(--line-strong)", paddingTop: "32px"} as React.CSSProperties}>
            <div><span className="kicker">05 — Paket</span><h2>Struktur komersial yang transparan.</h2></div>
            <p className="lead">Angka berikut adalah titik awal. Proposal final menyebutkan lingkup, durasi, dan SLA secara eksplisit.</p>
          </div>
          <div className="prices">
            <div className="price">
              <div className="tier">Mulai</div>
              <h4>Mulai</h4>
              <div className="for">UMKM &amp; bisnis yang butuh kehadiran digital yang rapi</div>
              <div className="amt">Rp 9 jt</div>
              <div className="per">per proyek · belum termasuk PPN</div>
              <ul><li>Landing page / company profile 5–7 halaman</li><li>SEO teknis dasar &amp; Google Analytics</li><li>Copywriting dan desain custom</li><li>Revisi 2 putaran</li><li>Garansi bug 30 hari</li></ul>
              <a className="btn btn-outline" href="#kontak">Mulai dari sini</a>
            </div>
            <div className="price featured">
              <div className="tier">Tumbuh</div>
              <h4>Tumbuh</h4>
              <div className="for">Bisnis yang butuh sistem, otomasi, atau integrasi</div>
              <div className="amt">Rp 25 jt</div>
              <div className="per">per proyek · belum termasuk PPN</div>
              <ul><li>Web app / POS / chatbot sesuai kebutuhan</li><li>Integrasi maksimal 3 sistem</li><li>Dashboard operasional</li><li>Pendampingan 60 hari</li><li>Prioritas support &lt; 4 jam kerja</li></ul>
              <a className="btn btn-teal" href="#kontak">Diskusikan kebutuhan</a>
            </div>
            <div className="price">
              <div className="tier">Enterprise</div>
              <h4>Enterprise</h4>
              <div className="for">Perusahaan dengan kebutuhan keamanan, data, dan SLA</div>
              <div className="amt">Custom</div>
              <div className="per">per retainer / proyek · belum termasuk PPN</div>
              <ul><li>Managed services &amp; helpdesk dengan SLA</li><li>Pentest dan audit keamanan berkala</li><li>Tim dedikasi &amp; NDA</li><li>Roadmap IT 12 bulan</li><li>Quarterly business review</li></ul>
              <a className="btn btn-outline" href="#kontak">Minta proposal</a>
            </div></div>
        </div>
      </section>
      <section className="section" style={{background: "var(--bg-alt)", borderBlock: "1px solid var(--line)"} as React.CSSProperties}>
        <div className="wrap">
          <div className="section-head" style={{borderBottom: "0", paddingBottom: "0"} as React.CSSProperties}>
            <div><span className="kicker">06 — Referensi</span><h2>Dari mereka yang sudah melewati prosesnya.</h2></div>
            <p className="lead">Testimoni dikutip dengan izin. Nama dan perusahaan ditampilkan sesuai permintaan klien.</p>
          </div>
          <div className="quotes">
            <figure className="quote">
              <div className="mark" aria-hidden="true">“</div>
              <blockquote>Yang paling saya apresiasi bukan hasil akhirnya, tapi prosesnya. Tiap sprint ada demo, tiap keputusan ada alasannya. Waktu ada perubahan scope, dampaknya dijelaskan di depan.</blockquote>
              <figcaption><b>Rani Kusuma</b>Head of Operations<br />Retail multi-outlet, Jakarta</figcaption>
            </figure>
            <figure className="quote">
              <div className="mark" aria-hidden="true">“</div>
              <blockquote>Sebelumnya kami pakai vendor yang hilang di tengah proyek. Di Biotama, laporan mingguan selalu datang dan source code diserahkan sesuai kontrak. Itu yang bikin kami lanjut ke proyek kedua.</blockquote>
              <figcaption><b>Aditya Prasetyo</b>IT Manager<br />Perusahaan distribusi, Surabaya</figcaption>
            </figure>
            <figure className="quote">
              <div className="mark" aria-hidden="true">“</div>
              <blockquote>Dashboard-nya tidak cuma bagus dilihat. Angka yang muncul akhirnya sama dengan yang dipakai tim finance, dan rapat bulanan jadi jauh lebih cepat.</blockquote>
              <figcaption><b>Melati Anggraini</b>Finance Director<br />Grup layanan kesehatan</figcaption>
            </figure></div>
        </div>
      </section>
      <section className="section" id="faq">
        <div className="wrap faq-wrap">
          <div className="faq-aside">
            <span className="kicker">07 — FAQ</span>
            <h2>Sebelum proposal, biasanya ini yang ditanyakan.</h2>
            <p>Untuk pertanyaan spesifik seputar keamanan, integrasi, atau pengadaan, hubungi <a href="mailto:fxwisdom1@gmail.com">fxwisdom1@gmail.com</a>.</p>
          </div>
          <div className="faq"><details><summary>Berapa lama pengerjaan website atau aplikasi?</summary><p>Landing page biasanya 2–3 minggu, company profile 3–5 minggu, aplikasi mobile 8–16 minggu, dan sistem internal 6–12 minggu. Estimasi final diberikan setelah sesi discovery, lalu dikunci di kontrak beserta milestone-nya.</p></details><details><summary>Apakah source code menjadi milik klien?</summary><p>Ya. Untuk proyek development, source code dan akses repositori diserahkan penuh setelah pelunasan, tanpa lisensi tersembunyi atau vendor lock-in. Kami juga menyertakan dokumentasi teknis agar tim internal Anda bisa melanjutkan.</p></details><details><summary>Bagaimana skema pembayaran?</summary><p>Umumnya 30% di awal, 40% setelah milestone desain/prototype disetujui, dan 30% saat peluncuran. Untuk retainer bulanan, pembayaran dilakukan di awal periode dengan SLA tertulis.</p></details><details><summary>Bisakah mulai dari skala kecil dulu?</summary><p>Bisa. Banyak klien mulai dari satu modul atau satu kanal — misalnya chatbot WhatsApp saja atau dashboard satu divisi — lalu berkembang setelah hasilnya terukur. Kami sengaja menyusun roadmap bertahap agar anggaran tidak membengkak di depan.</p></details><details><summary>Bagaimana Anda menjaga kerahasiaan data?</summary><p>Setiap engagement menandatangani NDA. Akses ke sistem klien diberikan per-orang, dicatat, dan dicabut setelah proyek selesai. Untuk pekerjaan keamanan, semua bukti temuan disimpan terenkripsi dan hanya diserahkan ke pihak yang berwenang.</p></details><details><summary>Apakah melayani klien di luar Jakarta?</summary><p>Ya. Sekitar 60% klien kami berada di luar Jakarta dan dikerjakan secara remote dengan ritme meeting yang disepakati. Untuk instalasi CCTV, smart home, dan audit on-site, kami menjadwalkan kunjungan teknisi ke lokasi.</p></details><details><summary>Apa bedanya chatbot Biotama dengan chatbot template?</summary><p>Chatbot template menjawab skenario umum. Kami memetakan alur bisnis Anda lebih dulu, menghubungkan ke CRM dan sistem internal, menetapkan guardrail, serta menyiapkan human handover ketika pertanyaan di luar cakupan. Setelah rilis, ada evaluasi percakapan dan perbaikan rutin.</p></details><details><summary>Apakah ada garansi dan maintenance?</summary><p>Ada. Proyek development mendapat garansi bug 30–90 hari tergantung paket. Untuk maintenance berkelanjutan tersedia paket bulanan yang mencakup monitoring, update keamanan, backup, dan jam dukungan sesuai SLA.</p></details><details><summary>Bagaimana cara kerja bootcamp &amp; kursus coding?</summary><p>Kelas dijalankan per batch dengan kuota kecil (maksimal 15 peserta), mentor live setiap minggu, review kode, dan proyek akhir. Untuk perusahaan, silabus bisa disesuaikan dengan stack dan kebutuhan tim, lalu dijalankan secara internal.</p></details><details><summary>Bisakah integrasi dengan sistem yang sudah kami pakai?</summary><p>Bisa, selama sistem tersebut menyediakan API, database access, atau jalur ekspor-impor. Pada tahap discovery kami memetakan integrasi yang memungkinkan, risikonya, dan estimasi biayanya sebelum kontrak ditandatangani.</p></details></div>
        </div>
      </section>
      <section className="section" id="kontak" style={{paddingTop: "0"} as React.CSSProperties}>
        <div className="wrap">
          <div className="contact">
            <div className="contact-left">
              <span className="kicker">08 — Kontak</span>
              <h2>Minta proposal atau jadwalkan diskusi.</h2>
              <p>Kami membalas dalam 1 hari kerja. Untuk urusan yang membutuhkan NDA, sebutkan di pesan agar dokumen disiapkan lebih dulu.</p>
              <ul className="contact-info">
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><div><b>Email</b><a href="mailto:fxwisdom1@gmail.com">fxwisdom1@gmail.com</a></div></li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="5" y="2" width="14" height="20" rx="2.5"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg><div><b>Telepon</b><a href="tel:+6281398253186">+62 813-9825-3186</a></div></li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><div><b>Kantor</b>Jakarta Selatan, Jakarta</div></li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><div><b>Jam kerja</b>Senin–Jumat 09.00–18.00 WIB · Sabtu 09.00–13.00 WIB</div></li>
              </ul>
            </div>
            <div className="contact-right">
              <h3>Form permintaan proposal</h3>
              <p className="hint">Isi ringkas. Kami akan menghubungi Anda untuk sesi discovery 60 menit.</p>
              <form className="form" data-wa-form="" data-status="formStatus" noValidate>
                <div className="form-row">
                  <div className="field"><label htmlFor="nama">Nama</label><input id="nama" name="nama" type="text" autoComplete="name" required placeholder="Nama lengkap" /></div>
                  <div className="field"><label htmlFor="perusahaan">Perusahaan</label><input id="perusahaan" name="perusahaan" type="text" autoComplete="organization" required placeholder="Nama perusahaan" /></div>
                </div>
                <div className="form-row">
                  <div className="field"><label htmlFor="email">Email kerja</label><input id="email" name="email" type="email" autoComplete="email" required placeholder="nama@perusahaan.com" /></div>
                  <div className="field"><label htmlFor="wa">Telepon / WhatsApp</label><input id="wa" name="wa" type="tel" autoComplete="tel" required placeholder="0812…" /></div>
                </div>
                <div className="form-row">
                  <div className="field"><label htmlFor="layanan">Kebutuhan utama</label><select id="layanan" name="layanan"><option>Chatbot &amp; Otomasi AI Bisnis</option><option>Data Analytics &amp; Business Intelligence</option><option>Website &amp; Aplikasi Web</option><option>Aplikasi Mobile</option><option>Sistem Kasir POS Digital</option><option>IT Consulting &amp; Managed Services</option><option>Cybersecurity &amp; Penetration Testing</option><option>Instalasi CCTV &amp; Smart Home</option><option>Digital Marketing &amp; SEO</option><option>Kelola Toko Online &amp; Marketplace</option><option>Bootcamp &amp; Kursus Coding</option></select></div>
                  <div className="field"><label htmlFor="budget">Estimasi budget</label><select id="budget" name="budget"><option>Di bawah Rp 10 juta</option><option>Rp 10–25 juta</option><option>Rp 25–50 juta</option><option>Rp 50–100 juta</option><option>Di atas Rp 100 juta</option><option>Belum ditentukan</option></select></div>
                </div>
                <div className="field"><label htmlFor="pesan">Konteks singkat</label><textarea id="pesan" name="pesan" rows={4} placeholder="Sistem yang sudah ada, masalah utama, dan target waktu."></textarea></div>
                <input className="hp" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <button className="btn btn-teal" type="submit">Kirim permintaan proposal <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
                <p className="note">Dengan mengirim, Anda setuju kami menghubungi Anda terkait permintaan ini.</p>
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
              <a className="logo" href="#top"><span className="mark" aria-hidden="true">B</span><span>biotama</span></a>
              <p>Biotama. Mitra AI, software, dan infrastruktur digital untuk bisnis Indonesia.</p>
              <div className="standards"><span>OWASP ASVS &amp; Top 10</span><span>ITIL 4 aligned</span><span>ISO/IEC 27001 practices</span><span>Google Ads &amp; Analytics</span><span>Meta Business Partner tools</span><span>Flutter &amp; React Native</span></div>
            </div>
            <div className="foot-col"><h5>Layanan</h5><ul><li><a href="#chatbot">Chatbot &amp; Otomasi AI Bisnis</a></li><li><a href="#data">Data Analytics &amp; Business Intelligence</a></li><li><a href="#website">Website &amp; Aplikasi Web</a></li><li><a href="#mobile">Aplikasi Mobile</a></li><li><a href="#pos">Sistem Kasir POS Digital</a></li><li><a href="#it">IT Consulting &amp; Managed Services</a></li></ul></div>
            <div className="foot-col"><h5>Lainnya</h5><ul><li><a href="#cyber">Cybersecurity &amp; Penetration Testing</a></li><li><a href="#cctv">Instalasi CCTV &amp; Smart Home</a></li><li><a href="#marketing">Digital Marketing &amp; SEO</a></li><li><a href="#marketplace">Kelola Toko Online &amp; Marketplace</a></li><li><a href="#bootcamp">Bootcamp &amp; Kursus Coding</a></li><li><a href="#harga">Paket</a></li><li><a href="/llms.txt">llms.txt</a></li></ul></div>
            <div className="foot-col">
              <h5>Kantor</h5>
              <address>Jakarta Selatan<br />Jakarta<br /><a href="mailto:fxwisdom1@gmail.com">fxwisdom1@gmail.com</a><br /><a href="tel:+6281398253186">+62 813-9825-3186</a></address>
            </div>
          </div>
          <div className="ai-summary">
            <h5>Ringkasan untuk mesin pencari & agen AI</h5>
            <p>Biotama (Biotama) berkantor di Jakarta Selatan, Jakarta Selatan. Layanan: Jasa Pembuatan Chatbot &amp; Otomasi AI Bisnis, Konsultan Data Analytics &amp; Business Intelligence, Jasa Pembuatan Website &amp; Aplikasi, Pengembang Aplikasi Mobile iOS &amp; Android, Penyedia Sistem Kasir POS Digital, IT Consulting &amp; Managed Services, Konsultan Cybersecurity &amp; Penetration Testing, Jasa Instalasi CCTV &amp; Smart Home, Digital Marketing &amp; SEO Agency, Jasa Kelola Toko Online &amp; Marketplace, Bootcamp &amp; Kursus Coding untuk Tim dan Individu. Area layanan: Indonesia. Konsultasi awal gratis 30 menit. Kontak: fxwisdom1@gmail.com, +62 813-9825-3186. Data terstruktur lengkap tersedia di https://biotama.cv/llms.txt dan schema.org pada halaman ini.</p>
          </div>
          <div className="foot-bottom">
            <span>© <span data-year="">2026</span> Biotama. Seluruh hak cipta dilindungi.</span>
            <span>Jakarta, Indonesia · <a href="#top">Kembali ke atas</a></span>
          </div>
        </div>
      </footer>
      <a className="wa-float" href="https://wa.me/6281398253186?text=Halo%20Biotama%2C%20saya%20ingin%20konsultasi%20tentang%20kebutuhan%20digital%20bisnis%20saya." target="_blank" rel="noopener" aria-label="Chat WhatsApp Biotama"><svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.2-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.4z"/><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg><span>Chat WhatsApp</span></a>
      <LandingFX />
    </div>
  );
}
