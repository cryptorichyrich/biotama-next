import type { Metadata } from "next";
import { archive, works } from "@/data/works";
import { profile } from "@/data/profile";
import "../home.css";
import "./works.css";

const description =
  "Delapan produk yang dirancang, dibangun, dan dijalankan: Srabutan, Dharmakarsa, MallOps, Toko Vavelle, UMKM St. Servatius, Healer Path, Travel To Bali, dan Beligih. Bukan mockup.";
const canonical = "https://biotama.cv/works/";

export const metadata: Metadata = {
  title: { absolute: "Karya — Sistem yang dipakai, bukan mockup | Bio Lumbantoruan" },
  description,
  alternates: { canonical },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Biotama",
    url: canonical,
    title: "Karya — Sistem yang dipakai, bukan mockup",
    description,
    images: [{ url: "/assets/shots/srabutan-desktop.webp", width: 1600, height: 1000, alt: "Karya Bio Lumbantoruan" }],
  },
  twitter: { card: "summary_large_image", title: "Karya — Sistem yang dipakai, bukan mockup", description },
};

const extra = [
  {
    slug: "dharmakarsa",
    name: "Dharmakarsa",
    category: "Commerce OS",
    decision: "Agent gateway dengan izin per tool. Multi-tenant tanpa fork.",
    href: "/dharmakarsa",
  },
  {
    slug: "mallops",
    name: "MallOps Suite",
    category: "Building operations",
    decision: "ERP per gedung. Parkir, utilitas, leasing, dan pembayaran dalam satu ledger.",
    href: "/mallops",
  },
];

const decisions: Record<string, string> = {
  srabutan: "Kustodi di provider. Platform mencatat status, tidak memegang dana.",
  tokovavelle: "Storefront statis di edge. Katalog cepat tanpa server aplikasi.",
  "umkm-st-servatius": "Verifikasi tiga lapis. Izin kertas menjadi PDF bernomor.",
  "healer-path": "CMS berbasis git. Pemilik mengedit sendiri tanpa developer.",
  "travel-bali": "Booking langsung ke WhatsApp. Tanpa form panjang yang ditinggalkan.",
  beligih: "Satu basis kode, banyak toko. Konfigurasi menggantikan fork.",
};

const featured = [
  ...works.slice(0, 1).map((w) => ({ ...w, href: `/works/${w.slug}/`, decision: decisions[w.slug] })),
  ...extra.slice(0, 1).map((w) => ({ ...w, href: w.href, decision: w.decision })),
  ...extra.slice(1).map((w) => ({ ...w, href: w.href, decision: w.decision })),
  ...works.slice(1).map((w) => ({ ...w, href: `/works/${w.slug}/`, decision: decisions[w.slug] })),
];

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Karya — Bio Lumbantoruan",
  url: canonical,
  description,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: featured.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: `https://biotama.cv${item.href}`,
    })),
  },
};

const github = profile.socials.find((s) => s.platform === "GitHub")?.url ?? "";
const linkedin = profile.socials.find((s) => s.platform === "LinkedIn")?.url ?? "";

export default function WorksPage() {
  const archived = archive.filter((a) => !featured.some((f) => f.name === a.name));

  return (
    <div className="v5">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="mast">
        <div className="wrap">
          <a className="name" href="/">{profile.name}</a>
          <span className="role">{profile.role}</span>
          <span className="place">{profile.location}</span>
        </div>
      </header>

      <main>
        <section className="whead">
          <div className="wrap">
            <p className="k">Karya</p>
            <h1>Sistem yang dipakai, bukan mockup.</h1>
            <p className="wdek">
              Delapan produk yang saya rancang, bangun, dan jalankan. Enam di antaranya bisa dibuka
              sekarang. Setiap baris menyebut satu keputusan arsitektur yang menentukan hasilnya.
            </p>
            <p className="wmeta">
              <span>2017—2026</span>
              <span>{featured.length} produk</span>
              <span>0 mockup</span>
            </p>
          </div>
        </section>

        <section className="works">
          <div className="wrap">
            <div className="wlist">
              {featured.map((item) => (
                <a
                  className="wrow"
                  href={item.href}
                  key={item.slug}
                  {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span className="wname">{item.name}</span>
                  <span className="wcat">{item.category}</span>
                  <span className="wdec">{item.decision}</span>
                  <span className="wgo" aria-hidden="true">{item.href.startsWith("/works") ? "Baca →" : "Buka →"}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="arc">
          <div className="wrap">
            <div className="arhead">
              <p className="k">Arsip</p>
              <h2>Sisanya juga pernah dibangun.</h2>
              <p>Proyek yang tidak masuk etalase utama, tetapi tetap bagian dari cara kerja saya.</p>
            </div>
            <div>
              {archived.map((item, i) => (
                <div className="arow" key={item.name}>
                  <span className="ano">{String(i + 1).padStart(2, "0")}</span>
                  <span className="aname">{item.name}</span>
                  <span className="adesc">{item.desc}</span>
                  <span className="atech">{item.tech.join(" · ")}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="wcta">
          <div className="wrap">
            <h2>Karya berikutnya bisa jadi milik Anda.</h2>
            <p>Ceritakan sistem yang sedang macet. Saya balas dengan pertanyaan, bukan penawaran.</p>
            <a className="btn primary" href={`mailto:${profile.email}`}>Mulai diskusi</a>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>{profile.name} / 2026</span>
          <div className="flinks">
            <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="/">Beranda</a>
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
