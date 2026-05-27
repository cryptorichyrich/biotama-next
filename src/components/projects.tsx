import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20 bg-[#070707]">
      {/* Terminal-style header */}
      <p className="section-label mb-4">
        <span className="text-[var(--color-green-term)]">$</span> ls -la ~/projects/
      </p>

      <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-display)] font-semibold tracking-tight mb-4 gradient-text">
        What I&apos;ve built
      </h2>

      <p className="text-[var(--color-amber-dim)] text-lg max-w-2xl mb-16 font-[family-name:var(--font-mono)]">
        A selection of projects spanning fintech, e-commerce, and AI.
      </p>

      {/* Responsive grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="glass-card p-6 tilt-3d group flex flex-col transition-all duration-500 hover:-translate-y-1"
          >
            {/* Gold border brightens on hover with shadow */}
            <div className="relative z-10 flex flex-col h-full">
              {/* Project name in gold Spectral */}
              <h3 className="text-lg font-[family-name:var(--font-display)] font-semibold text-[var(--color-gold)] mb-3 transition-colors duration-300 group-hover:text-[var(--color-gold-bright)]">
                {project.name}
              </h3>

              {/* Description in amber mono */}
              <p className="text-sm font-[family-name:var(--font-mono)] text-[var(--color-amber-text)] leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              {/* Tech stack as .glass-legend badges */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="glass-legend text-[11px] font-[family-name:var(--font-mono)] text-[var(--color-green-term)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
