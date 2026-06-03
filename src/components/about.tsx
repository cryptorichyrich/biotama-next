"use client";

import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      {/* Section label */}
      <p className="section-label mb-4">
        <span className="text-[var(--color-green-term)]">$</span> cat /var/log/sysadmin/wisdom.log
      </p>

      {/* Photo + Bio row */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start mb-12">
        {/* Profile photo — circle 200px */}
        <div className="shrink-0">
          <div
            className="w-[200px] h-[200px] rounded-full overflow-hidden border-2 border-[var(--color-gold)] shadow-[0_0_20px_var(--color-gold-glow)]"
          >
            <img
              src={profile.photoUrl}
              alt={profile.name}
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Bio text + metrics */}
        <div className="flex-1">
          <p className="text-base md:text-lg leading-relaxed text-[var(--color-text-body)] mb-6">
            Over the past decade, I&apos;ve built everything from PCI-DSS compliant payment gateways to full-stack fintech platforms for brands like Pepperstone and TitanFX. Currently architecting Srabutan, Indonesia&apos;s next freelance marketplace, from the ground up.
          </p>

          {/* Metrics row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {profile.metrics.map((m) => (
              <div
                key={m.label}
                className="glass-card p-4 text-center"
              >
                <div className="text-xl md:text-2xl font-bold text-[var(--color-gold)] font-[family-name:var(--font-mono)]">
                  {m.value}
                </div>
                <div className="text-xs text-[var(--color-text-muted)] mt-1 font-[family-name:var(--font-mono)]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Single glass-card quote: Saint-Exupéry */}
      <div className="glass-card p-8 md:p-10 max-w-3xl relative about-quote">
        <div className="absolute -top-2 -left-2 text-7xl text-[var(--color-gold)] opacity-20 select-none pointer-events-none font-serif leading-none quote-mark">
          &ldquo;
        </div>
        <blockquote className="text-lg md:text-xl font-[family-name:var(--font-mono)] leading-relaxed relative z-10 text-[var(--color-text-body)]">
          Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.
        </blockquote>
        <div className="mt-4 text-sm font-[family-name:var(--font-mono)] relative z-10 text-[var(--color-amber-dim)] quote-author">
          — Antoine de Saint-Exupéry
        </div>
        <div className="absolute -bottom-4 -right-1 text-7xl text-[var(--color-gold)] opacity-20 select-none pointer-events-none font-serif leading-none quote-mark">
          &rdquo;
        </div>
      </div>
    </section>
  );
}
