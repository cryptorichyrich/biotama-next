import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { SocialIcons } from "@/components/SocialIcons";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      <p className="section-label mb-4">
        <span className="text-[var(--color-green-term)]">$</span> echo $CONTACT
      </p>

      <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-display)] font-semibold tracking-tight mb-4 gradient-text">
        Let&apos;s work together
      </h2>

      <p className="text-[var(--color-text-body)] text-lg max-w-2xl mb-16 font-[family-name:var(--font-mono)]">
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

        {/* Social icons — amber, visible, clickable */}
        <SocialIcons className="justify-center" />
      </div>
    </section>
  );
}
