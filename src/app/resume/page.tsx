"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
} from "lucide-react";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

export default function ResumePage() {
  return (
    <>
      <style>{`
        @media print {
          nav, .no-print { display: none !important; }
          body { background: #000 !important; color: #e8c840 !important; }
          .resume-container { max-width: 100% !important; padding: 0 !important; box-shadow: none !important; }
          a { color: #c9a84c !important; text-decoration: underline !important; }
          .glass-card { background: transparent !important; backdrop-filter: none !important; border: 1px solid rgba(201, 168, 76, 0.3) !important; }
          .glass-card::before { display: none !important; }
        }
      `}</style>

      {/* Print/PDF controls */}
      <div className="no-print max-w-[900px] mx-auto px-6 pt-8 pb-4 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)] hover:text-[var(--color-green-term)] transition-colors duration-200 cursor-pointer group"
        >
          <span className="text-[var(--color-green-term)] group-hover:-translate-x-1 transition-transform duration-200">&lt;-</span>
          Back to Home
        </Link>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-[family-name:var(--font-mono)] text-[var(--color-amber-text)] hover:text-[var(--color-amber-bright)] transition-colors duration-200 glass-card rounded-lg cursor-pointer"
        >
          <Download size={16} />
          Print / PDF
        </button>
      </div>

      <main className="pb-16">
        <div className="resume-container max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main glass-card container */}
          <div className="glass-card p-8 md:p-12">
            {/* Header — name in gold Spectral */}
            <div className="pb-8 mb-8 section-divider">
              <p className="section-label mb-3">
                <span className="text-[var(--color-green-term)]">$</span> cat /home/bio/.resume
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-[family-name:var(--font-display)] mb-3">
                <span className="gradient-text">{profile.name}</span>
              </h1>
              <p className="text-xl font-semibold mt-2 font-[family-name:var(--font-mono)] text-[var(--color-amber-text)]">
                {profile.role}
              </p>
              <p className="text-[var(--color-amber-dim)] mt-3 max-w-2xl leading-relaxed font-[family-name:var(--font-mono)]">
                {profile.tagline}
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-4 text-sm font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)]">
                <span className="flex items-center gap-1.5">
                  <Mail size={14} className="text-[var(--color-green-term)]" /> {profile.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone size={14} className="text-[var(--color-green-term)]" /> {profile.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-[var(--color-green-term)]" /> {profile.location}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-4">
                {profile.socials.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-legend text-xs font-[family-name:var(--font-mono)] text-[var(--color-green-term)] hover:text-[var(--color-amber-bright)] transition-colors duration-200 inline-flex items-center gap-1 cursor-pointer"
                  >
                    <ExternalLink size={10} />
                    {s.platform}
                  </a>
                ))}
              </div>
            </div>

            {/* Professional Summary */}
            <section className="mb-12">
              <p className="section-label mb-4">
                <span className="text-[var(--color-green-term)]">$</span> /summary
              </p>
              <div className="section-divider mb-5" />
              <p className="text-[var(--color-amber-text)] leading-relaxed text-base md:text-lg font-[family-name:var(--font-mono)]">
                {profile.bio}
              </p>
            </section>

            {/* Metrics */}
            <section className="mb-12">
              <p className="section-label mb-4">
                <span className="text-[var(--color-green-term)]">$</span> /by-the-numbers
              </p>
              <div className="section-divider mb-5" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {profile.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="glass-card p-5 text-center transition-all duration-300 hover:-translate-y-1"
                  >
                    <p className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] gradient-text">
                      {m.value}
                    </p>
                    <p className="text-xs font-[family-name:var(--font-mono)] text-[var(--color-green-term)] mt-1.5 uppercase tracking-wider">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience — gold timeline dots */}
            <section className="mb-12">
              <p className="section-label mb-4">
                <span className="text-[var(--color-green-term)]">$</span> /experience
              </p>
              <div className="section-divider mb-6" />
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div key={exp.id} className="glass-card p-6 transition-all duration-300 hover:-translate-y-1">
                    {/* Role & company header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-[var(--color-amber-text)]">
                          {exp.role}
                        </h3>
                        <p className="font-semibold font-[family-name:var(--font-mono)] text-[var(--color-gold)]">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)] shrink-0">
                        <span>{exp.startDate} – {exp.endDate}</span>
                        <span className="mx-1">·</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Highlights — gold timeline dots */}
                    <ul className="space-y-2 mt-3">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="text-sm font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)] flex items-start gap-3 leading-relaxed"
                        >
                          <span
                            className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                            style={{ background: "var(--color-gold)" }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack as .glass-legend badges */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="glass-legend text-xs font-[family-name:var(--font-mono)] text-[var(--color-green-term)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section className="mb-12">
              <p className="section-label mb-4">
                <span className="text-[var(--color-green-term)]">$</span> /projects
              </p>
              <div className="section-divider mb-6" />
              <div className="grid sm:grid-cols-2 gap-4">
                {projects.filter((p) => p.featured).map((proj) => (
                  <div key={proj.id} className="glass-card p-5 transition-all duration-300 hover:-translate-y-1 group">
                    <h3 className="font-bold font-[family-name:var(--font-display)] text-[var(--color-amber-text)] mb-2 group-hover:text-[var(--color-gold)] transition-colors duration-200">
                      {proj.name}
                    </h3>
                    <p className="text-sm font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)] leading-relaxed mb-3">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          className="glass-legend text-xs font-[family-name:var(--font-mono)] text-[var(--color-green-term)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Skills — category cards with green level dots */}
            <section>
              <p className="section-label mb-4">
                <span className="text-[var(--color-green-term)]">$</span> /technical-skills
              </p>
              <div className="section-divider mb-6" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillGroups.map((group) => (
                  <div key={group.category} className="glass-card p-5 transition-all duration-300 hover:-translate-y-1">
                    <h3 className="font-semibold text-[var(--color-green-term)] mb-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-wider">
                      {group.category}
                    </h3>
                    <div className="space-y-2">
                      {group.skills.map((s) => (
                        <div key={s.name} className="flex items-center justify-between">
                          <span className="text-sm font-[family-name:var(--font-mono)] text-[var(--color-amber-text)]">
                            {s.name}
                          </span>
                          {s.level != null && (
                            <div className="flex gap-0.5">
                              {Array.from({ length: 5 }, (_, i) => (
                                <span
                                  key={i}
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    i < (s.level ?? 0)
                                      ? "bg-[var(--color-green-term)]"
                                      : "bg-[var(--color-text-muted)]"
                                  }`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
