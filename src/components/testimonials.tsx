"use client";

import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1)),
    []
  );
  const next = useCallback(
    () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1)),
    []
  );

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20"
    >
      <p className="section-label mb-4">
        <span className="text-[var(--color-green-term)]">$</span> cat ~/colleagues/feedback.log
      </p>

      <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-display)] font-semibold tracking-tight mb-4 gradient-text">
        What people say
      </h2>

      <p className="text-[var(--color-amber-dim)] text-lg max-w-2xl mb-16 font-[family-name:var(--font-mono)]">
        Feedback from colleagues and leaders I&apos;ve worked with.
      </p>

      <div className="max-w-3xl mx-auto">
        {/* Glass card with left gold border accent */}
        <div className="glass-card p-8 md:p-10 relative overflow-hidden gold-reveal">
          {/* Left gold border accent */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[var(--color-gold)] via-[var(--color-gold-dim)] to-transparent shadow-[0_0_12px_var(--color-gold-glow)]" />

          {/* Decorative quote */}
          <div className="absolute top-4 right-6 text-6xl text-[var(--color-gold)] opacity-[0.06] select-none font-serif leading-none pointer-events-none">
            &rdquo;
          </div>

          {/* Quote content */}
          <div key={t.id} className="transition-opacity duration-300">
            <blockquote className="text-base md:text-lg font-[family-name:var(--font-mono)] italic text-[var(--color-amber-text)] leading-relaxed mb-8 min-h-[120px]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Attribution in green mono */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-green-term-bg)] border border-[var(--color-green-term-dim)] flex items-center justify-center text-[var(--color-green-term)] font-bold text-xs font-[family-name:var(--font-mono)] shrink-0 shadow-[0_0_8px_var(--color-green-term-glow)]">
                {t.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-[family-name:var(--font-mono)] font-semibold text-[var(--color-green-term)] text-sm">
                  {t.name}
                </p>
                <p className="text-xs font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)]">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dot navigation with gold dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={prev}
            className="p-2 rounded-full border border-[var(--color-glass-border)] text-[var(--color-amber-dim)] hover:text-[var(--color-amber-text)] hover:border-[var(--color-gold-subtle)] transition-all duration-200 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current
                    ? "bg-[var(--color-gold)] shadow-[0_0_8px_var(--color-gold-glow)] scale-110"
                    : "bg-[var(--color-text-muted)] hover:bg-[var(--color-gold-dim)]"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-2 rounded-full border border-[var(--color-glass-border)] text-[var(--color-amber-dim)] hover:text-[var(--color-amber-text)] hover:border-[var(--color-gold-subtle)] transition-all duration-200 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
