"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Calendar,
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
          body { background: white !important; color: black !important; }
          .resume-container { max-width: 100% !important; padding: 0 !important; box-shadow: none !important; }
          a { color: #2563eb !important; text-decoration: underline !important; }
        }
      `}</style>

      {/* Print/PDF controls */}
      <div className="no-print max-w-[1200px] mx-auto px-6 pt-8 pb-4 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200 cursor-pointer group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Home
        </Link>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer font-[family-name:var(--font-mono)] gradient-border-animated"
          style={{ color: "var(--color-indigo-light)", background: "var(--color-bg-glass)" }}
        >
          <Download size={16} />
          Print / PDF
        </button>
      </div>

      <main className="pb-16">
        <div className="resume-container max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main card */}
          <div className="card p-8 md:p-12">
            {/* Header */}
            <div className="pb-8 mb-8" style={{ borderBottom: "1px solid var(--color-border)" }}>
              <p className="section-label mb-3">/resume</p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-[family-name:var(--font-display)] mb-3">
                <span className="gradient-text">{profile.name}</span>
              </h1>
              <p className="text-xl font-semibold mt-2" style={{ color: "var(--color-accent)" }}>
                {profile.role}
              </p>
              <p className="text-[var(--color-text-secondary)] mt-3 max-w-2xl leading-relaxed">
                {profile.tagline}
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-[var(--color-text-tertiary)]">
                <span className="flex items-center gap-1.5">
                  <Mail size={14} /> {profile.email}
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone size={14} /> {profile.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} /> {profile.location}
                </span>
              </div>
              <div className="flex items-center gap-3 mt-4">
                {profile.socials.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm cursor-pointer flex items-center gap-1 transition-colors duration-200 hover:text-[var(--color-accent-hover)]"
                    style={{ color: "var(--color-accent)" }}
                  >
                    <ExternalLink size={12} />
                    {s.platform}
                  </a>
                ))}
              </div>
            </div>

            {/* Professional Summary */}
            <section className="mb-12">
              <p className="section-label mb-4">/summary</p>
              <div className="section-divider mb-5" />
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-base md:text-lg">
                {profile.bio}
              </p>
            </section>

            {/* Metrics */}
            <section className="mb-12">
              <p className="section-label mb-4">/by-the-numbers</p>
              <div className="section-divider mb-5" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {profile.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="card p-5 text-center hover:-translate-y-1 transition-all duration-300"
                  >
                    <p className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] gradient-text">
                      {m.value}
                    </p>
                    <p className="text-xs text-[var(--color-text-tertiary)] mt-1.5 font-[family-name:var(--font-mono)] uppercase tracking-wider">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className="mb-12">
              <p className="section-label mb-4">/experience</p>
              <div className="section-divider mb-6" />
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div key={exp.id} className="card p-6 hover:-translate-y-1 transition-all duration-300">
                    {/* Role & company header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-display)]">
                          {exp.role}
                        </h3>
                        <p className="font-semibold" style={{ color: "var(--color-accent)" }}>
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-[var(--color-text-tertiary)] shrink-0 font-[family-name:var(--font-mono)]">
                        <Calendar size={13} />
                        <span>
                          {exp.startDate} – {exp.endDate}
                        </span>
                        <span className="mx-1">·</span>
                        <Briefcase size={13} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mt-3">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="text-sm text-[var(--color-text-secondary)] flex items-start gap-3 leading-relaxed"
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: "var(--color-accent)" }}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 text-xs font-medium rounded-md font-[family-name:var(--font-mono)]"
                          style={{
                            background: "var(--color-accent-subtle)",
                            color: "var(--color-indigo-light)",
                          }}
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
              <p className="section-label mb-4">/projects</p>
              <div className="section-divider mb-6" />
              <div className="grid sm:grid-cols-2 gap-4">
                {projects.filter((p) => p.featured).map((proj) => (
                  <div key={proj.id} className="card p-5 hover:-translate-y-1 transition-all duration-300 group">
                    <h3 className="font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-display)] mb-2 group-hover:text-[var(--color-accent-hover)] transition-colors duration-200">
                      {proj.name}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-xs rounded-md font-[family-name:var(--font-mono)]"
                          style={{
                            background: "var(--color-accent-subtle)",
                            color: "var(--color-indigo-light)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <p className="section-label mb-4">/technical-skills</p>
              <div className="section-divider mb-6" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillGroups.map((group) => (
                  <div key={group.category} className="card p-5 hover:-translate-y-1 transition-all duration-300">
                    <h3 className="font-semibold text-[var(--color-text-primary)] mb-3 font-[family-name:var(--font-display)] text-sm uppercase tracking-wider">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((s) => (
                        <span
                          key={s.name}
                          className="px-2.5 py-1 text-xs font-medium rounded-md font-[family-name:var(--font-mono)]"
                          style={{
                            background: s.level && s.level >= 4
                              ? "var(--color-accent-subtle)"
                              : "var(--color-bg-tertiary)",
                            color: s.level && s.level >= 4
                              ? "var(--color-indigo-light)"
                              : "var(--color-text-tertiary)",
                            border: "1px solid var(--color-border)",
                          }}
                        >
                          {s.name}
                          {s.level && (
                            <span className="ml-1.5 opacity-50">
                              {"· " + s.level}
                            </span>
                          )}
                        </span>
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
