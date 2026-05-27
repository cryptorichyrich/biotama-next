import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      <p className="section-label mb-4">
        /<span className="text-[var(--color-mist)]">experience</span>
      </p>

      <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight mb-4">
        Where I&apos;ve <span className="gradient-text">made an impact</span>
      </h2>

      <p className="text-[var(--color-mist)] text-lg max-w-2xl mb-16">
        A decade of architecting fintech systems, payment gateways, and marketplace platforms.
      </p>

      {/* Vertical timeline */}
      <div className="relative">
        {/* Indigo glow line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-indigo-bright)] via-[var(--color-indigo-glow)] to-transparent shadow-[0_0_12px_rgba(92,92,240,0.4)] hidden md:block" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <div key={exp.id} className="relative md:pl-16">
              {/* Timeline dot with glow */}
              <div className="hidden md:flex absolute left-0 top-2 w-4 h-4 rounded-full bg-[var(--color-indigo-bright)] -translate-x-[9px] shadow-[0_0_10px_rgba(92,92,240,0.6)] ring-4 ring-[var(--color-black-pearl)]" />

              {/* Glass card */}
              <div className="glass rounded-xl p-6 md:p-8 card gradient-border">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-display font-semibold text-[var(--color-ice)]">
                      {exp.role}
                    </h3>
                    <p className="text-[var(--color-indigo-bright)] font-medium text-sm mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-[var(--color-mist)]">
                    <span className="inline-flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-indigo-bright)]" />
                      {exp.startDate} &ndash; {exp.endDate}
                    </span>
                    <span className="text-[var(--color-slate)]">|</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-5">
                  {exp.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="text-[var(--color-mist)] text-sm flex items-start gap-3 leading-relaxed"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-indigo-bright)] shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono font-medium rounded-full border border-[var(--color-border)] text-[var(--color-mist)] bg-[var(--color-dark-water)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
