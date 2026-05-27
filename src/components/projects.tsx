import { projects } from "@/data/projects";

const GRADIENT_BG = "bg-gradient-to-br from-[var(--color-indigo-deep)]/30 via-transparent to-[var(--color-teal)]/10";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      <p className="section-label mb-4">
        /<span className="text-[var(--color-mist)]">projects</span>
      </p>

      <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight mb-4">
        What I&apos;ve <span className="gradient-text">built</span>
      </h2>

      <p className="text-[var(--color-mist)] text-lg max-w-2xl mb-16">
        A selection of projects spanning fintech, e-commerce, and AI.
      </p>

      {/* Responsive grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative glass rounded-xl p-6 card overflow-hidden transition-all duration-500 hover:-translate-y-1"
          >
            {/* Gradient hover effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(92,92,240,0.08) 0%, rgba(0,184,169,0.04) 100%)",
              }}
            />

            {/* Gradient border on hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                padding: "1px",
                background: "linear-gradient(135deg, rgba(92,92,240,0.4), rgba(0,184,169,0.15))",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />

            <div className="relative z-10 flex flex-col h-full">
              {/* Icon area */}
              <div className="w-10 h-10 rounded-lg glass flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-[var(--color-indigo-bright)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-display font-semibold text-[var(--color-ice)] mb-2 group-hover:text-[var(--color-indigo-light)] transition-colors duration-300">
                {project.name}
              </h3>

              <p className="text-sm text-[var(--color-mist)] leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 text-[11px] font-mono font-medium rounded-full border border-[var(--color-border)] text-[var(--color-cool-gray)] bg-[var(--color-dark-water)]/50"
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
