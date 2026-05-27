"use client";

import dynamic from "next/dynamic";

const DataRunner = dynamic(() => import("@/components/DataRunner"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[280px] rounded-lg flex items-center justify-center bg-black border border-[var(--color-green-term)]">
      <span className="font-mono text-xs text-[var(--color-green-term)] opacity-50">$ loading game module...</span>
    </div>
  ),
});

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20 bg-[#070707]">
      {/* 3D Terminal Game */}
      <div className="mb-8">
        <DataRunner />
      </div>

      {/* Section label */}
      <p className="section-label mb-4 gold-reveal">
        <span className="text-[var(--color-green-term)]">$</span> cat /var/log/sysadmin/wisdom.log
      </p>

      {/* Single glass-card quote: Saint-Exupéry */}
      <div className="glass-card p-8 md:p-10 max-w-3xl relative gold-reveal">
        <div className="absolute -top-2 -left-2 text-7xl text-[var(--color-gold)] opacity-20 select-none pointer-events-none font-serif leading-none">
          &ldquo;
        </div>
        <blockquote className="text-lg md:text-xl font-[family-name:var(--font-mono)] text-[var(--color-amber-text)] leading-relaxed relative z-10">
          Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.
        </blockquote>
        <div className="mt-4 text-sm font-[family-name:var(--font-mono)] text-[var(--color-gold)] relative z-10">
          — Antoine de Saint-Exupéry
        </div>
        <div className="absolute -bottom-4 -right-1 text-7xl text-[var(--color-gold)] opacity-20 select-none pointer-events-none font-serif leading-none">
          &rdquo;
        </div>
      </div>
    </section>
  );
}
