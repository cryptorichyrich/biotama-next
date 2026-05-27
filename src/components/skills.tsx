import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      <p className="section-label mb-4">
        /<span className="text-[var(--color-mist)]">skills</span>
      </p>

      <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight mb-4">
        Technologies I <span className="gradient-text">work with</span>
      </h2>

      <p className="text-[var(--color-mist)] text-lg max-w-2xl mb-16">
        The tools and frameworks that power the systems I build.
      </p>

      {/* Grid of skill category cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="glass rounded-xl p-6 card"
          >
            <h3 className="text-sm font-mono font-semibold tracking-widest uppercase text-[var(--color-indigo-bright)] mb-4">
              {group.category}
            </h3>

            {/* Skill tag pills */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative"
                >
                  <span className="inline-block px-3 py-1 text-xs font-mono font-medium rounded-full border border-[var(--color-border)] text-[var(--color-mist)] bg-[var(--color-dark-water)] hover:border-[var(--color-indigo-bright)] hover:text-[var(--color-indigo-light)] transition-colors duration-200">
                    {skill.name}
                  </span>
                  {/* Level indicator dot */}
                  {skill.level && (
                    <span
                      className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full border border-[var(--color-black-pearl)]"
                      style={{
                        backgroundColor:
                          skill.level >= 4
                            ? "var(--color-indigo-bright)"
                            : skill.level >= 3
                            ? "var(--color-teal)"
                            : "var(--color-mist)",
                      }}
                    />
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
