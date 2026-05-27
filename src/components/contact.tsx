import { Mail, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";

const SOCIAL_ICONS: Record<string, string> = {
  LinkedIn: "in",
  GitHub: "gh",
  Twitter: "x",
  Facebook: "fb",
};

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20 bg-[#070707]">
      <p className="section-label mb-4">
        <span className="text-[var(--color-green-term)]">$</span> echo $CONTACT
      </p>

      <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-display)] font-semibold tracking-tight mb-4 gradient-text">
        Let&apos;s work together
      </h2>

      <p className="text-[var(--color-amber-dim)] text-lg max-w-2xl mb-16 font-[family-name:var(--font-mono)]">
        Have a project in mind? Let&apos;s talk about how we can build it.
      </p>

      {/* Centered glass-card */}
      <div className="max-w-lg mx-auto glass-card p-8 md:p-10 text-center gold-reveal">
        {/* Gold email button */}
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-[family-name:var(--font-mono)] font-semibold text-base transition-all duration-300 border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold-subtle)] hover:shadow-[0_0_24px_var(--color-gold-glow)] cursor-pointer"
        >
          <Mail size={20} />
          {profile.email}
        </a>

        {/* Divider */}
        <div className="section-divider my-8" />

        {/* Social links with green arrow */}
        <div className="flex items-center justify-center gap-4">
          {profile.socials.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 font-[family-name:var(--font-mono)] text-sm text-[var(--color-text-white)] hover:text-[var(--color-amber-text)] transition-all duration-200 cursor-pointer"
              aria-label={s.label}
            >
              <span className="flex items-center gap-1.5">
                <span className="text-[var(--color-green-term)]">&gt;</span>
                <span className="hidden sm:inline">{s.platform}</span>
                <ExternalLink size={12} className="text-[var(--color-amber-dim)]" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
