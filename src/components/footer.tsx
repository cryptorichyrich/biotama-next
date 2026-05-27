import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-display font-bold tracking-tight text-[var(--color-ice)]">
              BL
            </span>
            <span className="text-[var(--color-indigo-bright)] font-display text-lg">.</span>
          </div>

          {/* Links */}
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
                className="text-xs font-mono text-[var(--color-cool-gray)] hover:text-[var(--color-ice)] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs font-mono text-[var(--color-cool-gray)]">
            &copy; {year} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
