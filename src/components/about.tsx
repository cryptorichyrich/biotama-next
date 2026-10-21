"use client";

import { useState } from "react";
import { aboutCopy } from "@/data/about-copy";

type Lang = "en" | "id";

export function About() {
  const [lang, setLang] = useState<Lang>("en");
  const copy = aboutCopy[lang];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      <p className="section-label mb-4">
        <span className="text-[var(--color-green-term)]">$</span> cat about.md
      </p>

      <div className="flex items-start justify-between gap-6 mb-6">
        <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-display)] font-semibold tracking-tight gradient-text">
          {copy.heading}
        </h2>

        {/* Language toggle */}
        <div
          className="shrink-0 flex items-center gap-0.5 rounded-full border border-[var(--color-border)] p-1"
          role="group"
          aria-label="Language"
        >
          {(["en", "id"] as const).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
              className={`px-3 py-1 text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider rounded-full transition-all duration-200 cursor-pointer ${
                lang === code
                  ? "bg-[var(--color-gold-subtle)] text-[var(--color-gold)]"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-amber-text)]"
              }`}
            >
              {code}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-8 text-sm font-[family-name:var(--font-mono)] italic text-[var(--color-amber-dim)] leading-relaxed max-w-3xl">
        {copy.epigraph}
      </p>

      <div className="space-y-5 max-w-3xl mb-12">
        {copy.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-[var(--color-text-body)] leading-relaxed font-[family-name:var(--font-mono)] text-sm md:text-base"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        {copy.principles.map((principle, index) => (
          <div key={principle.title} className="glass-card p-6">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-xs font-[family-name:var(--font-mono)] text-[var(--color-gold)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-[family-name:var(--font-display)] font-semibold text-[var(--color-gold)]">
                {principle.title}
              </h3>
            </div>
            <p className="text-sm font-[family-name:var(--font-mono)] text-[var(--color-text-body)] leading-relaxed">
              {principle.body}
            </p>
          </div>
        ))}
      </div>

      {/* Closing quote: Saint-Exupéry */}
      <div className="glass-card p-8 md:p-10 max-w-3xl relative about-quote">
        <div className="absolute -top-2 -left-2 text-7xl text-[var(--color-gold)] opacity-20 select-none pointer-events-none font-serif leading-none quote-mark">
          &ldquo;
        </div>
        <blockquote className="text-lg md:text-xl font-[family-name:var(--font-mono)] leading-relaxed relative z-10 text-[var(--color-text-body)]">
          Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.
        </blockquote>
        <div className="mt-4 text-sm font-[family-name:var(--font-mono)] relative z-10 text-[var(--color-amber-dim)] quote-author">
          — Antoine de Saint-Exupéry
        </div>
        <div className="absolute -bottom-4 -right-1 text-7xl text-[var(--color-gold)] opacity-20 select-none pointer-events-none font-serif leading-none quote-mark">
          &rdquo;
        </div>
      </div>
    </section>
  );
}
