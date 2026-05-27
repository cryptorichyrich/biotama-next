import { profile } from "@/data/profile";
import { SocialIcons } from "@/components/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-glass-border)] bg-[#000000]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* BL. in gold Spectral */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-[family-name:var(--font-display)] font-bold tracking-tight text-[var(--color-gold)]">
              BL.
            </span>
          </div>

          {/* Social icons in footer */}
          <SocialIcons />

          {/* Nav links in amber mono */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              { label: "About", href: "#about" },
              { label: "Experience", href: "#experience" },
              { label: "Projects", href: "#projects" },
              { label: "Skills", href: "#skills" },
              { label: "Blog", href: "#blog" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)] hover:text-[var(--color-amber-text)] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* $ exit in green mono */}
          <div className="flex items-center gap-3">
            <p className="text-xs font-[family-name:var(--font-mono)] text-[var(--color-text-muted)]">
              &copy; {year} {profile.name}
            </p>
            <span className="text-xs font-[family-name:var(--font-mono)] text-[var(--color-green-term)]">
              $ exit
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
