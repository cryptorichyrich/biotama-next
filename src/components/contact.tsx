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
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      <p className="section-label mb-4">
        /<span className="text-[var(--color-mist)]">contact</span>
      </p>

      <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight mb-4">
        Let&apos;s <span className="gradient-text">work together</span>
      </h2>

      <p className="text-[var(--color-mist)] text-lg max-w-2xl mb-16">
        Have a project in mind? Let&apos;s talk about how we can build it.
      </p>

      {/* Card */}
      <div className="max-w-lg mx-auto glass rounded-xl p-8 md:p-10 card text-center">
        {/* Email button */}
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--color-indigo-bright)] to-[var(--color-indigo)] text-white font-display font-semibold text-base hover:from-[var(--color-indigo-glow)] hover:to-[var(--color-indigo-bright)] transition-all duration-300 shadow-[0_4px_20px_rgba(92,92,240,0.25)] hover:shadow-[0_6px_30px_rgba(92,92,240,0.4)] cursor-pointer"
        >
          <Mail size={20} />
          {profile.email}
        </a>

        {/* Divider */}
        <div className="section-divider my-8" />

        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          {profile.socials.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 glass card rounded-lg text-[var(--color-mist)] hover:text-[var(--color-ice)] hover:border-[var(--color-indigo-bright)] transition-all duration-200 text-sm cursor-pointer"
              aria-label={s.label}
            >
              <span className="w-5 h-5 rounded-full bg-[var(--color-dark-water)] border border-[var(--color-border)] flex items-center justify-center text-[10px] font-mono font-bold text-[var(--color-mist)]">
                {SOCIAL_ICONS[s.platform] || s.platform.slice(0, 2).toLowerCase()}
              </span>
              <span className="hidden sm:inline">{s.platform}</span>
              <ExternalLink size={12} className="text-[var(--color-cool-gray)]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
