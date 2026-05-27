import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      <p className="section-label mb-4">
        <span className="text-[var(--color-green-term)]">$</span> which $(compgen -c)
      </p>

      <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-display)] font-semibold tracking-tight mb-4 gradient-text">
        Technologies I work with
      </h2>

      <p className="text-[var(--color-text-body)] text-lg max-w-2xl mb-16 font-[family-name:var(--font-mono)]">
        A few things I&rsquo;ve worked with&hellip;
      </p>

      {/* Grid of glass-card skill category cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="glass-card p-6 tilt-3d gold-reveal"
          >
            {/* Category name in gold Spectral */}
            <h3 className="font-[family-name:var(--font-display)] font-semibold text-lg text-[var(--color-gold)] mb-4">
              {group.category}
            </h3>

            {/* Skills as amber mono tags with green level dots */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative inline-flex items-center gap-2 px-3 py-1.5 font-[family-name:var(--font-mono)] text-xs text-[var(--color-amber-text)] bg-[var(--color-glass-bg)] border border-[var(--color-glass-border)] rounded-lg hover:border-[var(--color-gold-subtle)] transition-colors duration-200"
                >
                  <span>{skill.name}</span>
                  {/* Green level dots */}
                  {skill.level && (
                    <div className="flex gap-[2px]">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span
                          key={i}
                          className={`w-[3px] h-[3px] rounded-full ${
                            i < skill.level!
                              ? "bg-[var(--color-green-term)] shadow-[0_0_4px_var(--color-green-term-glow)]"
                              : "bg-[var(--color-text-muted)]"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
