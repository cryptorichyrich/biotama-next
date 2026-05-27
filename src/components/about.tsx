import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      <p className="section-label mb-4">
        /<span className="text-[var(--color-mist)]">about</span>
      </p>

      <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight mb-6">
        A decade of <span className="gradient-text">building systems</span>
      </h2>

      {/* Pull-quote style bio */}
      <div className="relative max-w-3xl mb-16">
        <blockquote className="text-xl md:text-2xl font-display font-medium leading-relaxed text-[var(--color-ice)] border-l-4 border-[var(--color-indigo-bright)] pl-6 py-2">
          &ldquo;{profile.bio}&rdquo;
        </blockquote>
        <div className="absolute -top-4 -left-2 text-6xl text-[var(--color-indigo-bright)] opacity-20 select-none pointer-events-none font-serif leading-none">
          &ldquo;
        </div>
      </div>

      {/* Metric counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {profile.metrics.map((metric) => (
          <div
            key={metric.label}
            className="glass rounded-xl p-6 text-center card"
          >
            <p className="text-3xl md:text-4xl font-display font-bold gradient-text">
              {metric.value}
            </p>
            <p className="text-sm text-[var(--color-mist)] mt-1 font-mono tracking-wide">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
