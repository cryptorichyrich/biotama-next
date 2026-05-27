"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 md:py-32 bg-white scroll-mt-20"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          label="Experience"
          title="Where I've made an impact"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative md:pl-16"
              >
                {/* Dot */}
                <div className="hidden md:flex absolute left-0 top-2 w-4 h-4 rounded-full bg-accent border-4 border-background -translate-x-1/2" />

                <div className="bg-card border border-border rounded-xl p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-secondary">
                      <Briefcase size={14} />
                      <span>
                        {exp.startDate} – {exp.endDate}
                      </span>
                      <span className="text-border">·</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-secondary flex items-start gap-2"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-muted text-secondary text-xs font-medium rounded-md cursor-default"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
