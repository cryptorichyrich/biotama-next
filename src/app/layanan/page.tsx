import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { SiteFooter } from "@/components/site-footer";
import { servicePages, variantMeta } from "@/data/service-pages";
import "../home.css";
import "./layanan.css";

const title = "Layanan — 20 layanan, 3 sudut pandang, 60 halaman";
const description =
  "Katalog layanan Biotama: chatbot AI, POS, aplikasi mobile, data analytics, cybersecurity, CCTV, digital marketing, IT consulting, website, marketplace, bootcamp, cloud, jaringan, PC, game, arsip, animasi, smart home, IT support, dan drone.";
const canonical = "https://biotama.cv/layanan/";

export const metadata: Metadata = {
  title: { absolute: `${title} | Bio Lumbantoruan` },
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
  twitter: { card: "summary_large_image", title, description, images: ["/assets/og-v2.png"] },
};


export default function LayananPage() {
  const categories = Array.from(new Set(servicePages.map((s) => s.category)));

  return (
    <div className="v5" id="top">
      <header className="mast">
        <div className="wrap">
          <a className="name" href="/">{profile.name}</a>
          <span className="role">{profile.role}</span>
          <span className="place">{profile.location}</span>
        </div>
      </header>

      <main>
        <section className="lhead">
          <div className="wrap">
            <p className="k">Layanan</p>
            <h1>Dua puluh layanan. Tiga cara membaca.</h1>
            <p className="ldek">
              Versi Editorial untuk presentasi ke manajemen, Poster untuk kampanye, dan Terminal
              untuk tim teknis. Isi dan penawarannya sama. Sudut pandangnya yang berbeda.
            </p>
            <p className="lmeta">
              <span>{servicePages.length} layanan</span>
              <span>{servicePages.length * variantMeta.length} halaman</span>
              <span>{categories.length} kategori</span>
            </p>
          </div>
        </section>

        <section className="variants">
          <div className="wrap">
            {variantMeta.map((v) => (
              <div className="vrow" key={v.id}>
                <span className="vid">{v.id}</span>
                <span className="vlabel">{v.label}</span>
                <span className="vangle">{v.angle}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="lcats">
          <div className="wrap">
            {categories.map((category) => {
              const items = servicePages.filter((s) => s.category === category);
              return (
                <div className="lcat" key={category}>
                  <div className="lcathead">
                    <h2>{category}</h2>
                    <span>{items.length} layanan</span>
                  </div>
                  {items.map((service) => {
                    const number = servicePages.findIndex((s) => s.slug === service.slug) + 1;
                    return (
                      <div className="lrow" key={service.slug}>
                        <span className="lno">{String(number).padStart(2, "0")}</span>
                        <span className="lbody">
                          <a className="lname" href={`/layanan/${service.slug}/v1/`}>{service.name}</a>
                          <span className="ltag">{service.tagline}</span>
                        </span>
                        <span className="lvars">
                          {variantMeta.map((v, i) => (
                            <span key={v.id}>
                              {i > 0 && <span className="ldot" aria-hidden="true">·</span>}
                              <a href={`/layanan/${service.slug}/${v.id}/`}>{v.label}</a>
                            </span>
                          ))}
                        </span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </section>

        <section className="lcta">
          <div className="wrap">
            <h2>Bingung mulai dari layanan yang mana?</h2>
            <p>Ceritakan masalahnya, bukan solusinya. Saya bantu pilih lingkup yang paling kecil dan berguna.</p>
            <a className="btn primary" href={`mailto:${profile.email}`}>Mulai diskusi</a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
