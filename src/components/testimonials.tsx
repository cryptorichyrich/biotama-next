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
        /<span className="text-[var(--color-mist)]">testimonials</span>
      </p>

      <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight mb-4">
        What people <span className="gradient-text">say</span>
      </h2>

      <p className="text-[var(--color-mist)] text-lg max-w-2xl mb-16">
        Feedback from colleagues and leaders I&apos;ve worked with.
      </p>

      <div className="max-w-3xl mx-auto">
        {/* Glass quote card with left indigo border accent */}
        <div className="glass rounded-xl p-8 md:p-10 card relative overflow-hidden">
          {/* Left indigo border accent */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[var(--color-indigo-bright)] via-[var(--color-indigo-glow)] to-transparent" />

          {/* Decorative quote marks */}
          <div className="absolute top-4 right-6 text-6xl text-[var(--color-indigo-bright)] opacity-[0.06] select-none font-serif leading-none pointer-events-none">
            &rdquo;
          </div>

          {/* Quote content (no animation library — simple key-based remount) */}
          <div key={t.id} className="transition-opacity duration-300">
            <blockquote className="text-base md:text-lg font-display leading-relaxed text-[var(--color-ice)] mb-8 min-h-[120px]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-indigo-bright)] flex items-center justify-center text-white font-bold text-xs font-display shrink-0">
                {t.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-display font-semibold text-[var(--color-ice)] text-sm">
                  {t.name}
                </p>
                <p className="text-xs text-[var(--color-mist)]">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Active dot navigation */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={prev}
            className="p-2 rounded-full glass card text-[var(--color-mist)] hover:text-[var(--color-indigo-bright)] transition-colors duration-200 cursor-pointer"
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
                    ? "bg-[var(--color-indigo-bright)] shadow-[0_0_8px_rgba(92,92,240,0.5)] scale-110"
                    : "bg-[var(--color-deep-slate)] hover:bg-[var(--color-slate)]"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-2 rounded-full glass card text-[var(--color-mist)] hover:text-[var(--color-indigo-bright)] transition-colors duration-200 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
