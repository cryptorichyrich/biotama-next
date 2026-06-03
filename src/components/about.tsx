"use client";

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
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
