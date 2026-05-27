"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code2 } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(skillGroups[0].category);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 md:py-32 bg-white scroll-mt-20"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          label="Skills"
          title="Technologies I work with"
          description="The tools and frameworks that power the systems I build."
        />

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {skillGroups.map((group) => (
            <button
              key={group.category}
              onClick={() => setActiveCategory(group.category)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg border transition-colors duration-200 cursor-pointer",
                activeCategory === group.category
                  ? "bg-accent text-white border-accent"
                  : "bg-card text-secondary border-border hover:border-accent hover:text-accent"
              )}
            >
              {group.category}
            </button>
          ))}
        </div>

        {/* Active category skills */}
        {skillGroups
          .filter((g) => g.category === activeCategory)
          .map((group) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {group.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="bg-card border border-border rounded-xl p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Code2 size={16} className="text-accent" />
                      <span className="font-semibold text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                  {skill.level && (
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <div
                          key={j}
                          className={cn(
                            "h-1.5 flex-1 rounded-full",
                            j < skill.level! ? "bg-accent" : "bg-muted"
                          )}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          ))}
      </div>
    </section>
  );
}
