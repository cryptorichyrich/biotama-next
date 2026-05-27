export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20 bg-[#070707]">
      {/* Section label */}
      <p className="section-label mb-4 gold-reveal">
        <span className="text-[var(--color-green-term)]">$</span> cat /var/log/sysadmin/wisdom.log
      </p>

      {/* Two glass-card quotes — stacked */}
      <div className="space-y-6">
        {/* Quote 1: Bill Gates */}
        <div className="glass-card p-8 md:p-10 max-w-3xl relative gold-reveal">
          <div className="absolute -top-2 -left-2 text-7xl text-[var(--color-gold)] opacity-20 select-none pointer-events-none font-serif leading-none">
            &ldquo;
          </div>
          <blockquote className="text-lg md:text-xl font-[family-name:var(--font-mono)] text-[var(--color-amber-text)] leading-relaxed relative z-10">
            Measuring programming progress by lines of code is like measuring aircraft building progress by weight.
          </blockquote>
          <div className="mt-4 text-sm font-[family-name:var(--font-mono)] text-[var(--color-gold)] relative z-10">
            — Bill Gates
          </div>
          <div className="absolute -bottom-4 -right-1 text-7xl text-[var(--color-gold)] opacity-20 select-none pointer-events-none font-serif leading-none">
            &rdquo;
          </div>
        </div>

        {/* Quote 2: Martin Fowler */}
        <div className="glass-card p-8 md:p-10 max-w-3xl relative gold-reveal">
          <div className="absolute -top-2 -left-2 text-7xl text-[var(--color-gold)] opacity-20 select-none pointer-events-none font-serif leading-none">
            &ldquo;
          </div>
          <blockquote className="text-lg md:text-xl font-[family-name:var(--font-mono)] text-[var(--color-amber-text)] leading-relaxed relative z-10">
            Any fool can write code that a computer can understand. Good programmers write code that humans can understand.
          </blockquote>
          <div className="mt-4 text-sm font-[family-name:var(--font-mono)] text-[var(--color-gold)] relative z-10">
            — Martin Fowler
          </div>
          <div className="absolute -bottom-4 -right-1 text-7xl text-[var(--color-gold)] opacity-20 select-none pointer-events-none font-serif leading-none">
            &rdquo;
          </div>
        </div>
      </div>
    </section>
  );
}
