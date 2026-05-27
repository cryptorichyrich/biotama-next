import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20 bg-[#000000]">
      {/* Header — terminal style */}
      <p className="section-label mb-4">
        <span className="text-[var(--color-green-term)]">$</span> cat /var/log/impact.log
      </p>

      <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-display)] font-semibold tracking-tight mb-16 gradient-text">
        Where I&apos;ve made an impact
      </h2>

      {/* Timeline container */}
      <div className="relative">
        {/* Perfectly centered vertical gold timeline line */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-gradient-to-b from-[var(--color-gold)] via-[var(--color-gold-dim)] to-transparent hidden md:block"
          style={{ boxShadow: "0 0 8px var(--color-gold-glow), 0 0 16px var(--color-gold-subtle)" }}
        />

        <div className="flex flex-col gap-12">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div key={exp.id} className="relative md:grid md:grid-cols-2 md:gap-8">
                {/* Gold dot on the center line */}
                <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-[var(--color-gold)] shadow-[0_0_12px_var(--color-gold-glow),0_0_24px_var(--color-gold-subtle)] ring-4 ring-[#000000]" />
                </div>

                {/* Card — alternates left/right */}
                <div className={`${isLeft ? "md:col-start-1 md:pr-8" : "md:col-start-2 md:pl-8"} gold-reveal`}>
                  <div className="glass-card p-6 md:p-8 tilt-3d">
                    {/* Role in gold Spectral */}
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-semibold text-[var(--color-gold)]">
                      {exp.role}
                    </h3>

                    {/* Company / Date in amber mono */}
                    <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-amber-text)] mt-1">
                      {exp.company}
                    </p>
                    <p className="font-[family-name:var(--font-mono)] text-xs text-[var(--color-amber-dim)] mt-0.5">
                      {exp.startDate} — {exp.endDate} | {exp.location}
                    </p>

                    {/* Highlights with green • dots */}
                    <ul className="space-y-2 mt-5 mb-5">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="text-[var(--color-text-white)] text-sm flex items-start gap-3 leading-relaxed font-[family-name:var(--font-mono)]"
                        >
                          <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--color-green-term)] shrink-0 shadow-[0_0_6px_var(--color-green-term-glow)]" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags as .glass-legend badges */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="glass-legend text-xs font-[family-name:var(--font-mono)] text-[var(--color-green-term)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
