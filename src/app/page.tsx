import type { Metadata } from "next";
import Image from "next/image";
import { profile } from "@/data/profile";
import { works } from "@/data/works";
import "./home.css";

export const metadata: Metadata = {
  title: "Arsitektur untuk sistem yang tidak boleh gagal",
  description:
    "Payment rail, agen otonom, dan batas kepercayaan yang membuat keduanya layak dipakai di produksi. Catatan Bio Lumbantoruan.",
  alternates: { canonical: "https://biotama.cv" },
};

const socials = profile.socials.filter((s) => ["LinkedIn", "GitHub", "Twitter"].includes(s.platform));
const linkedin = profile.socials.find((s) => s.platform === "LinkedIn")?.url ?? "https://www.linkedin.com/in/agustinus-biotamalo-lumbantoruan-99126149/";
const github = profile.socials.find((s) => s.platform === "GitHub")?.url ?? "https://github.com/cryptorichyrich";
const whatsapp = `https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}`;

const workDecisions: Record<string, string> = {
  srabutan: "Kustodi di provider. Platform mencatat status, tidak memegang dana.",
  tokovavelle: "Storefront statis di edge. Katalog cepat tanpa server aplikasi.",
  "umkm-st-servatius": "Verifikasi tiga lapis. Izin kertas menjadi PDF bernomor.",
  "healer-path": "CMS berbasis git. Pemilik mengedit sendiri tanpa developer.",
  "travel-bali": "Booking langsung ke WhatsApp. Tanpa form panjang yang ditinggalkan.",
  beligih: "Satu basis kode, banyak toko. Konfigurasi menggantikan fork.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Solutions Architect",
  description:
    "Solutions architect for systems where failure is expensive: payment rails, agentic AI, and security.",
  url: "https://biotama.cv",
  image: "https://biotama.cv/photo.jpg",
  address: { "@type": "PostalAddress", addressLocality: "Jakarta", addressCountry: "ID" },
  sameAs: socials.map((s) => s.url),
  knowsAbout: [
    "Payment rails",
    "Agentic AI",
    "Threat modeling",
    "KYC and AML",
    "ERP implementation",
    "System architecture",
  ],
};

export default function Home() {
  return (
    <div className="v5">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="mast">
        <div className="wrap">
          <a className="name" href="#top">{profile.name}</a>
          <span className="role">{profile.role}</span>
          <span className="place">{profile.location}</span>
        </div>
      </header>

      <main id="top">
        <section className="title">
          <div className="wrap">
            <div className="grid">
              <div>
                <div className="kicker"><span>Catatan arsitektur</span></div>
                <h1>Arsitektur untuk sistem yang tidak boleh gagal</h1>
                <p className="dek">
                  Payment rail, agen otonom, dan batas kepercayaan yang membuat keduanya layak dipakai di produksi.
                </p>
                <div className="abstract">
                  <span className="label">Ringkasan</span>
                  <p>
                    Tulisan ini merangkum tiga hal yang saya kerjakan: memindahkan uang tanpa memegangnya,
                    memberi agen akses tulis tanpa kehilangan kendali, dan membuktikan keduanya lewat sistem
                    yang berjalan. Setiap klaim disertai contoh yang bisa diperiksa.
                  </p>
                </div>
              </div>
              <figure className="portrait">
                <Image
                  src={profile.photoUrl}
                  alt={profile.name}
                  width={896}
                  height={1194}
                  sizes="(max-width: 900px) 210px, 320px"
                  priority
                />
                <figcaption>{profile.name}. Sebelas tahun di fintech, brokerage, dan ERP.</figcaption>
              </figure>
              <div className="author">
                <span className="who"><b>{profile.name}</b> · {profile.role} · Jakarta</span>
                <span className="date">November 2026 · <a href="/resume.pdf" download>CV (PDF) ↓</a></span>
              </div>
            </div>
          </div>
        </section>

        <section className="contents">
          <div className="wrap">
            <div className="grid">
              <div>
                <h2>Isi</h2>
                <ol className="toc">
                  <li><a href="#kasus"><span className="t">Payment rails</span><span className="d">uang bergerak tanpa kustodi</span></a></li>
                  <li><a href="#agen"><span className="t">Agen dan batas tulis</span><span className="d">akses, guardrail, audit</span></a></li>
                  <li><a href="#keamanan"><span className="t">Keamanan yang bisa diaudit</span><span className="d">threat model dan blast radius</span></a></li>
                  <li><a href="#karya"><span className="t">Karya terpilih</span><span className="d">enam produk berjalan</span></a></li>
                  <li><a href="#kerja"><span className="t">Model kerja</span><span className="d">tiga bentuk keterlibatan</span></a></li>
                  <li><a href="#kontak"><span className="t">Kontak</span><span className="d">mulai percakapan</span></a></li>
                </ol>
              </div>
              <div>
                <h2>Kata kunci</h2>
                <p className="kw">Payment rails, agentic AI, threat modeling, audit trail, ERP.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="case" id="kasus">
          <div className="wrap">
            <div className="case-head">
              <span className="k">Kasus</span>
              <span className="k2">Srabutan / marketplace</span>
            </div>
            <h2>Escrow tanpa kustodi: memindahkan uang tanpa memegangnya</h2>

            <div className="body">
              <div className="prose">
                <p><span className="sub">Masalah</span>Marketplace dengan escrow biasanya berakhir memegang dana pengguna. Begitu itu terjadi, perusahaan software berubah menjadi perantara pembayaran yang wajib berizin, dengan risiko gagal bayar dan kewajiban pelaporan yang mengikuti.</p>
                <p><span className="sub">Keputusan</span>Kustodi tetap di provider. Platform hanya menyimpan status dan memanggil payment request API. Setiap payout idempoten, dan ledger pergerakan bersifat append-only supaya koreksi bisa direkonstruksi.</p>
                <p><span className="sub">Hasil</span>Nol persen komisi untuk talenta. Tidak ada dana pengguna yang pernah masuk rekening platform, sehingga batas tanggung jawabnya jelas sejak awal.</p>
              </div>

              <figure className="fig">
                <div className="flow">
                  <div className="node"><span className="n">01</span><b>Pembeli</b><em>membayar</em></div>
                  <div className="arw" aria-hidden="true">→</div>
                  <div className="node hold"><span className="n">02</span><b>Provider</b><em>menyimpan dana</em></div>
                  <div className="arw" aria-hidden="true">→</div>
                  <div className="node"><span className="n">03</span><b>Talenta</b><em>menerima payout</em></div>
                </div>
                <div className="rail"><span>Platform mencatat status dan ledger. Tidak pernah memegang dana.</span></div>
                <figcaption>Gambar 1. Alur dana. Platform berada di luar jalur kustodi. Skema, bukan tangkapan layar.</figcaption>
              </figure>
            </div>

            <div className="decisions">
              <div className="cap"><span className="label">Keputusan dan konsekuensinya</span><span className="label">Tabel 1</span></div>
              <div className="tablewrap">
                <table className="dec">
                  <thead><tr><th>Keputusan</th><th>Alternatif</th><th>Alasan</th><th>Biaya kalau salah</th></tr></thead>
                  <tbody>
                    <tr><td>Kustodi di provider</td><td>Platform memegang dana</td><td>Menghindari lisensi dan kewajiban pelaporan dana pihak ketiga</td><td>Dana pengguna tidak bisa dicairkan saat provider bermasalah</td></tr>
                    <tr><td>Payout idempoten</td><td>Update optimistis</td><td>Retry tidak boleh menggandakan transfer</td><td>Pembayaran ganda yang sulit ditarik kembali</td></tr>
                    <tr><td>Ledger append-only</td><td>Update baris</td><td>Setiap koreksi punya jejak dan waktu</td><td>Selisih tidak bisa direkonstruksi saat sengketa</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <figure className="wide">
              <Image
                src="/assets/shots/srabutan-desktop.webp"
                alt="Beranda Srabutan, marketplace talenta Indonesia"
                width={1600}
                height={1000}
                sizes="(max-width: 900px) 100vw, 1180px"
              />
              <figcaption>Gambar 2. Beranda publik Srabutan, 9 November 2026. Produk berjalan, bukan mockup.</figcaption>
            </figure>

            <div className="notes">
              <span className="label">Catatan</span>
              <ol>
                <li>Kustodi berarti kewenangan menyimpan dan mencairkan dana pihak ketiga, bukan sekadar mencatat status transaksi.</li>
                <li>Idempoten berarti permintaan yang diulang menghasilkan satu efek, bukan dua.</li>
                <li>Angka komisi dan status produk diperiksa langsung di srabutan.com pada November 2026.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="works" id="karya">
          <div className="wrap">
            <div className="sec-head">
              <h2>Enam produk berjalan, satu keputusan per produk.</h2>
              <p>Bukan konsep. Semuanya bisa dibuka, dan keputusan arsitekturnya bisa dipertanyakan.</p>
            </div>
            <div className="wlist">
              {works.map((w) => (
                <div className="wrow" key={w.slug}>
                  <a className="wname" href={`/works/${w.slug}/`}>{w.name}<span className="war" aria-hidden="true"> →</span></a>
                  <span className="wcat">{w.category}</span>
                  <span className="wdec">{workDecisions[w.slug]}</span>
                  <span className="wgo"><a href={w.live} target="_blank" rel="noopener noreferrer" aria-label={`Buka situs ${w.name}`}>Buka situs ↗</a></span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="agent" id="agen">
          <div className="wrap">
            <div className="sec-head">
              <span className="k">Agen</span>
              <h2>Agen boleh menulis. Batasnya harus jelas.</h2>
            </div>
            <p className="lede">
              Agen yang hanya membaca itu demo. Agen yang menulis ke sistem produksi butuh izin, jejak,
              dan cara berhenti. Saya membangun ketiganya sebelum menambah kemampuan.
            </p>
            <div className="tablewrap">
              <table className="data">
                <thead><tr><th>Permukaan</th><th>Izin</th><th>Kontrol</th><th>Bukti</th></tr></thead>
                <tbody>
                  <tr><td>Pengetahuan internal</td><td>Baca dokumen terindeks</td><td>Filter per peran, sitasi wajib</td><td>Eval 40 pertanyaan</td></tr>
                  <tr><td>UMKM Servatius</td><td>Tulis katalog dan status</td><td>Guard kontribusi di UI, consent, RLS</td><td>Tiga lapis guard</td></tr>
                  <tr><td>Dharmakarsa</td><td>Tulis transaksi via gateway</td><td>Idempoten, batas nominal, audit log</td><td>Log per aksi</td></tr>
                </tbody>
              </table>
            </div>
            <p className="after">Setiap agen punya eval set. Kalau tidak bisa diukur, tidak diluncurkan.</p>
          </div>
        </section>

        <section className="security" id="keamanan">
          <div className="wrap">
            <div className="sec-head">
              <span className="k">Keamanan</span>
              <h2>Serangan datang dari prompt, bukan hanya port.</h2>
            </div>
            <p className="lede">
              Model bahasa memperluas permukaan serangan: instruksi di dokumen, data pelanggan di konteks,
              dan tool yang bisa menulis. Saya memperlakukannya seperti input pengguna biasa: tidak dipercaya.
            </p>
            <div className="tablewrap">
              <table className="data dark">
                <thead><tr><th>Permukaan</th><th>Ancaman</th><th>Kontrol</th></tr></thead>
                <tbody>
                  <tr><td>Dokumen dan email</td><td>Prompt injection</td><td>Pemisahan instruksi, allowlist tool, sanitasi</td></tr>
                  <tr><td>Data pelanggan</td><td>Kebocoran konteks</td><td>Minimisasi data, redaksi, retensi</td></tr>
                  <tr><td>Tool tulis</td><td>Aksi tak diinginkan</td><td>Izin per tool, batas nominal, konfirmasi</td></tr>
                  <tr><td>Identitas</td><td>Akun palsu</td><td>KYC, liveness, device check</td></tr>
                </tbody>
              </table>
            </div>
            <p className="after">
              Sebelas tahun di brokerage teregulasi: KYC lewat Sumsub, aturan anti-fraud, dan pelaporan.
              Keamanan bukan fitur yang ditambahkan di akhir.
            </p>
          </div>
        </section>

        <section className="engage" id="kerja">
          <div className="wrap">
            <div className="sec-head">
              <h2>Tiga bentuk keterlibatan.</h2>
              <p>Tidak semua masalah butuh proyek baru. Kadang butuh keputusan yang benar lebih dulu.</p>
            </div>
            <div className="erows">
              <div className="erow">
                <b>Review arsitektur</b>
                <span className="edur">1 sampai 2 minggu</span>
                <p>Keputusan, risiko, dan rencana perbaikan. Untuk sistem yang sudah berjalan dan mulai mahal diubah.</p>
              </div>
              <div className="erow">
                <b>Bangun sistem</b>
                <span className="edur">4 sampai 12 minggu</span>
                <p>Dari discovery sampai handover. Satu tim kecil, keputusan tercatat, kode diserahkan.</p>
              </div>
              <div className="erow">
                <b>Jaga dan rawat</b>
                <span className="edur">Bulanan</span>
                <p>SLA, on-call, dan perbaikan berkelanjutan. Untuk sistem yang tidak boleh mati.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="kontak">
          <div className="wrap">
            <div className="cgrid">
              <div>
                <p className="k" style={{ marginBottom: 10 }}>Kontak</p>
                <h2>Punya sistem yang mahal kalau gagal?</h2>
                <p>Ceritakan keputusan yang sedang macet. Saya balas dengan pertanyaan, bukan penawaran.</p>
              </div>
              <div className="cact">
                <a className="btn primary" href={`mailto:${profile.email}`}>Kirim email</a>
                <a className="btn" href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                <a className="btn" href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
            <p className="cnote">Jakarta, WIB. Balas dalam satu hari kerja. {profile.email}</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>{profile.name} / 2026</span>
          <div className="flinks">
            <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="/works">Karya</a>
            <a href="/layanan">Layanan</a>
            <a href="/resume/">CV</a>
            <a href="/resume.pdf" download>CV (PDF)</a>
            <a href="/blog">Blog</a>
            <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
