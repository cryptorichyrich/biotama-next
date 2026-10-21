"use client";

import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      <p className="section-label mb-4">
        <span className="text-[var(--color-green-term)]">$</span> cat about.md
      </p>

      <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-display)] font-semibold tracking-tight mb-6 gradient-text">
        How I think about systems
      </h2>

      <div className="space-y-5 max-w-3xl mb-12">
        <p className="text-[var(--color-text-body)] leading-relaxed font-[family-name:var(--font-mono)] text-sm md:text-base">
          I am a system architect. For more than a decade I have worked where money moves and downtime is not
          abstract: payment integrations under PCI-DSS discipline, brokerage platforms and trading operations, ERP
          rollouts, and AI systems that run in production.
        </p>
        <p className="text-[var(--color-text-body)] leading-relaxed font-[family-name:var(--font-mono)] text-sm md:text-base">
          Architecture is not a diagram or a stack. It is the set of decisions that are expensive to reverse: where
          the boundaries sit, which contracts the parts speak, how data flows, and what happens when something
          fails. My job is to make those decisions explicit, choose the set that fits the business, and write down
          why.
        </p>
        <p className="text-[var(--color-text-body)] leading-relaxed font-[family-name:var(--font-mono)] text-sm md:text-base">
          I stay hands-on, because a design the team cannot build is not a design. React, Next.js, Astro, Node,
          Python, SQL, Docker, CI/CD. And I measure architecture the only way that matters: by how cheaply the team
          can change it.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        {profile.principles.map((principle, index) => (
          <div key={principle.title} className="glass-card p-6">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-xs font-[family-name:var(--font-mono)] text-[var(--color-gold)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-[family-name:var(--font-display)] font-semibold text-[var(--color-gold)]">
                {principle.title}
              </h3>
            </div>
            <p className="text-sm font-[family-name:var(--font-mono)] text-[var(--color-text-body)] leading-relaxed">
              {principle.body}
            </p>
          </div>
        ))}
      </div>

      {/* Closing quote: Saint-Exupéry */}
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
