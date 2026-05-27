import { profile } from "@/data/profile";
import { SocialIcons } from "@/components/SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Pre-footer quote: Uncle Bob */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="glass-card p-8 md:p-10 max-w-3xl mx-auto relative gold-reveal">
          <div className="absolute -top-2 -left-2 text-7xl text-[var(--color-gold)] opacity-20 select-none pointer-events-none font-serif leading-none">
            &ldquo;
          </div>
          <blockquote className="text-lg md:text-xl font-[family-name:var(--font-mono)] text-[var(--color-amber-text)] leading-relaxed relative z-10">
            The best way to get a project done faster is to start sooner.
          </blockquote>
          <div className="mt-4 text-sm font-[family-name:var(--font-mono)] text-[var(--color-gold)] relative z-10">
            — Robert C. Martin (Uncle Bob)
          </div>
          <div className="absolute -bottom-4 -right-1 text-7xl text-[var(--color-gold)] opacity-20 select-none pointer-events-none font-serif leading-none">
            &rdquo;
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--color-border)]">
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
    </>
  );
}
