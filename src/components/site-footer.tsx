import { profile } from "@/data/profile";

export function SiteFooter() {
  const github = profile.socials.find((s) => s.platform === "GitHub")?.url ?? "";
  const linkedin = profile.socials.find((s) => s.platform === "LinkedIn")?.url ?? "";
  const whatsapp = `https://wa.me/${profile.phone.replace(/\D/g, "")}`;
  const year = new Date().getFullYear();

  return (
    <footer className="sfoot">
      <div className="wrap">
        <div className="sfoot-main">
          <div className="sfoot-id">
            <p className="sfoot-name">{profile.name}</p>
            <p className="sfoot-role">{profile.role}</p>
            <p className="sfoot-line">
              Payment rails, agentic AI, dan sistem yang tidak boleh gagal.
            </p>
            <p className="sfoot-place">
              <span className="sfoot-dot" aria-hidden="true" />
              Jakarta, WIB · remote
            </p>
          </div>

          <nav className="sfoot-nav" aria-label="Navigasi footer">
            <div>
              <p className="sfoot-h">Situs</p>
              <a href="/">Beranda</a>
              <a href="/works/">Karya</a>
              <a href="/layanan/">Layanan</a>
              <a href="/blog/">Blog</a>
            </div>
            <div>
              <p className="sfoot-h">Kontak</p>
              <a href={`mailto:${profile.email}`}>Email</a>
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
            <div>
              <p className="sfoot-h">Dokumen</p>
              <a href="/resume/">CV / Resume</a>
              <a href="/resume.pdf" download>CV (PDF)</a>
            </div>
          </nav>
        </div>

        <div className="sfoot-bottom">
          <span>© {year} {profile.name}</span>
          <a href="#top">Kembali ke atas ↑</a>
        </div>
      </div>
    </footer>
  );
}
