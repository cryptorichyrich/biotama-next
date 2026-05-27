import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20 bg-[#070707]">
      {/* Section label */}
      <p className="section-label mb-4 gold-reveal">
        $ cat /home/{profile.name.toLowerCase().split(" ")[0]}/bio.md
      </p>

      <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-display)] font-semibold tracking-tight mb-6 gradient-text">
        A decade of payment infrastructure
      </h2>

      {/* Pull-quote bio style — .glass-card with big decorative open-quote */}
      <div className="glass-card p-8 md:p-10 mb-16 max-w-3xl relative gold-reveal">
        {/* Decorative open-quote */}
        <div className="absolute -top-2 -left-2 text-7xl text-[var(--color-gold)] opacity-20 select-none pointer-events-none font-serif leading-none">
          &ldquo;
        </div>

        <blockquote className="text-lg md:text-xl font-[family-name:var(--font-mono)] text-[var(--color-amber-text)] leading-relaxed relative z-10">
          {profile.bio}
        </blockquote>

        {/* Decorative close-quote */}
        <div className="absolute -bottom-4 -right-1 text-7xl text-[var(--color-gold)] opacity-20 select-none pointer-events-none font-serif leading-none">
          &rdquo;
        </div>
      </div>

      {/* Metric counters in glass-card grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {profile.metrics.map((metric) => (
          <div
            key={metric.label}
            className="glass-card p-6 text-center tilt-3d gold-reveal"
          >
            <p className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--color-gold)]">
              {metric.value}
            </p>
            <p className="text-sm text-[var(--color-amber-dim)] mt-1 font-[family-name:var(--font-mono)] tracking-wide">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
