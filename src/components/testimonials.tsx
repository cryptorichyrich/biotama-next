"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/section-heading";

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 md:py-32 bg-background scroll-mt-20"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          label="Testimonials"
          title="What people say"
          description="Feedback from colleagues and leaders I've worked with."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="bg-card border border-border rounded-xl p-8 md:p-12">
            <Quote size={32} className="text-accent mb-6" />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={current}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-lg md:text-xl text-foreground leading-relaxed mb-8"
              >
                &ldquo;{testimonials[current].quote}&rdquo;
              </motion.blockquote>
            </AnimatePresence>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">
                {testimonials[current].name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-semibold text-foreground">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-secondary">
                  {testimonials[current].role}, {testimonials[current].company}
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-border hover:border-accent hover:text-accent transition-colors duration-200 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 cursor-pointer ${
                    i === current ? "bg-accent" : "bg-muted"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border border-border hover:border-accent hover:text-accent transition-colors duration-200 cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
