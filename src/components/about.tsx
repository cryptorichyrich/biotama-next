"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

const techStack = [
  "React", "Vue", "Next.js", "TypeScript", "Node.js",
  "Python", "Docker", "PostgreSQL", "Laravel", "WordPress",
];

export function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-32 bg-background scroll-mt-20"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading label="About" title="A decade of building systems" />

        <div className="grid md:grid-cols-[200px_1fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex justify-center md:justify-start"
          >
            <div className="w-[200px] h-[200px] rounded-full bg-muted flex items-center justify-center overflow-hidden border-2 border-border">
              <User size={80} className="text-secondary" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-secondary leading-relaxed mb-8">
              {profile.bio}
            </p>
          </motion.div>
        </div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {profile.metrics.map((m) => (
            <div
              key={m.label}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <p className="text-3xl md:text-4xl font-extrabold text-foreground">
                {m.value}
              </p>
              <p className="text-sm text-secondary mt-1">{m.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Tech icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <p className="text-sm font-medium text-secondary mb-4 uppercase tracking-wider">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-3">
            {techStack.map((t) => (
              <span
                key={t}
                className="px-4 py-2 bg-muted border border-border rounded-lg text-sm font-medium text-secondary cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
