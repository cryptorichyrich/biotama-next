"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/section-heading";

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 md:py-32 bg-background scroll-mt-20"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeading
          label="Projects"
          title="What I've built"
          description="A selection of projects spanning fintech, e-commerce, and AI."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl p-6 flex flex-col hover:border-accent hover:-translate-y-1 hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Folder size={20} className="text-accent" />
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-accent transition-colors duration-200"
                    aria-label={`Visit ${project.name}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
                {project.name}
              </h3>
              <p className="text-sm text-secondary leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-muted text-secondary text-xs font-medium rounded-md cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
