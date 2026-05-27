"use client";

import { getApplicationBySlug } from "@/data/applications";
import Link from "next/link";
import { MapPin, Briefcase, DollarSign, Calendar, Globe, ExternalLink, FileText, Mail } from "lucide-react";

const STATUS_COLORS: Record<string, string> = {
  draft: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  applied: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  interview: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  offer: "bg-green-500/20 text-green-300 border-green-500/30",
  rejected: "bg-red-500/20 text-red-300 border-red-500/30",
};

function statusBadge(status: string) {
  const color = STATUS_COLORS[status] || STATUS_COLORS.draft;
  return (
    <span className={`text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider px-2.5 py-1 rounded-full border ${color}`}>
      {status}
    </span>
  );
}

export function ApplicationsDetail({ slug }: { slug: string }) {
  const app = getApplicationBySlug(slug);

  if (!app) {
    return (
      <main className="pt-24 pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/applications" className="inline-flex items-center gap-2 text-sm font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)] hover:text-[var(--color-green-term)] transition-colors duration-200 mb-8 cursor-pointer group">
          <span className="text-[var(--color-green-term)] group-hover:-translate-x-1 transition-transform duration-200">&lt;-</span>
          Back to Applications
        </Link>
        <div className="glass-card p-12 text-center">
          <p className="text-[var(--color-amber-dim)] font-[family-name:var(--font-mono)]">
            <span className="text-[var(--color-green-term)]">$</span> Application not found.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-16">
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <Link href="/applications" className="inline-flex items-center gap-2 text-sm font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)] hover:text-[var(--color-green-term)] transition-colors duration-200 mb-8 cursor-pointer group">
          <span className="text-[var(--color-green-term)] group-hover:-translate-x-1 transition-transform duration-200">&lt;-</span>
          Back to Applications
        </Link>

        {/* Company + Position Header */}
        <div className="glass-card p-8 md:p-10 mb-8 gold-reveal">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <p className="section-label mb-2">
                <span className="text-[var(--color-green-term)]">$</span> {app.application.status === "draft" ? "draft" : app.application.status}/application
              </p>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight font-[family-name:var(--font-display)] mb-2">
                <span className="gradient-text">{app.position.title}</span>
              </h1>
              <p className="text-lg font-[family-name:var(--font-mono)] text-[var(--color-gold)]">
                {app.company.name}
              </p>
            </div>
            <div className="shrink-0">{statusBadge(app.application.status)}</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-[family-name:var(--font-mono)]">
            <div className="flex items-center gap-2 text-[var(--color-amber-dim)]">
              <MapPin size={14} className="text-[var(--color-green-term)]" /> {app.company.location}
            </div>
            <div className="flex items-center gap-2 text-[var(--color-amber-dim)]">
              <Briefcase size={14} className="text-[var(--color-green-term)]" /> {app.position.type}{app.position.remote ? " · Remote" : ""}
            </div>
            {app.position.salaryRange && (
              <div className="flex items-center gap-2 text-[var(--color-amber-dim)]">
                <DollarSign size={14} className="text-[var(--color-green-term)]" /> {app.position.salaryRange}
              </div>
            )}
            <div className="flex items-center gap-2 text-[var(--color-amber-dim)]">
              <Calendar size={14} className="text-[var(--color-green-term)]" /> Found: {app.source.dateFound}
            </div>
          </div>

          {app.source.url && (
            <a href={app.source.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)] hover:text-[var(--color-green-term)] transition-colors duration-200 mt-3 cursor-pointer">
              <Globe size={12} /> {app.source.platform || "Source"} <ExternalLink size={10} />
            </a>
          )}
        </div>

        {/* Job Description */}
        <div className="glass-card p-8 md:p-10 mb-8 gold-reveal">
          <p className="section-label mb-4">
            <span className="text-[var(--color-green-term)]">$</span> job-description
          </p>
          <p className="text-[var(--color-amber-text)] text-sm md:text-base font-[family-name:var(--font-mono)] leading-relaxed mb-6">
            {app.jobDescription.summary}
          </p>

          <h3 className="text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider text-[var(--color-green-term)] mb-3">Responsibilities</h3>
          <ul className="space-y-2 mb-6">
            {app.jobDescription.responsibilities.map((r: string, i: number) => (
              <li key={i} className="text-sm font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)] flex items-start gap-3 leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-[var(--color-gold)]" />
                {r}
              </li>
            ))}
          </ul>

          <h3 className="text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider text-[var(--color-green-term)] mb-3">Requirements</h3>
          <div className="space-y-1.5 mb-6">
            {app.jobDescription.requirements.map((req: { skill: string; importance: string }, i: number) => (
              <div key={i} className="flex items-center gap-2 text-sm font-[family-name:var(--font-mono)]">
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                  req.importance === "required" ? "bg-[var(--color-green-term)]" :
                  req.importance === "preferred" ? "bg-[var(--color-amber-text)]" :
                  "bg-[var(--color-text-muted)]"
                }`} />
                <span className="text-[var(--color-amber-text)]">{req.skill}</span>
                <span className={`text-[10px] uppercase tracking-wider ${
                  req.importance === "required" ? "text-[var(--color-green-term)]" :
                  req.importance === "preferred" ? "text-[var(--color-amber-dim)]" :
                  "text-[var(--color-text-muted)]"
                }`}>({req.importance})</span>
              </div>
            ))}
          </div>

          {app.jobDescription.niceToHave.length > 0 && (
            <>
              <h3 className="text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider text-[var(--color-green-term)] mb-3">Nice to Have</h3>
              <ul className="space-y-1">
                {app.jobDescription.niceToHave.map((n: string, i: number) => (
                  <li key={i} className="text-sm font-[family-name:var(--font-mono)] text-[var(--color-text-muted)] flex items-start gap-3 leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full shrink-0 bg-[var(--color-text-muted)]" />
                    {n}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Tailoring Strategy */}
        <div className="glass-card p-8 md:p-10 mb-8 gold-reveal">
          <p className="section-label mb-4">
            <span className="text-[var(--color-green-term)]">$</span> tailoring-strategy
          </p>

          <p className="text-[var(--color-amber-text)] text-sm md:text-base font-[family-name:var(--font-mono)] leading-relaxed mb-6">
            {app.tailoring.customSummary}
          </p>

          <h3 className="text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider text-[var(--color-green-term)] mb-3">Key Achievements to Highlight</h3>
          <ul className="space-y-2 mb-6">
            {app.tailoring.keyAchievements.map((a: string, i: number) => (
              <li key={i} className="text-sm font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)] flex items-start gap-3 leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-[var(--color-green-term)]" />
                {a}
              </li>
            ))}
          </ul>

          <h3 className="text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider text-[var(--color-green-term)] mb-3">Target Skills</h3>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {app.tailoring.emphasizeSkills.map((s: string, i: number) => (
              <span key={i} className="glass-legend text-xs font-[family-name:var(--font-mono)] text-[var(--color-green-term)]">{s}</span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={`/applications/${app.slug}/resume`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 font-[family-name:var(--font-mono)] font-semibold rounded-lg cursor-pointer transition-all duration-300 border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold-subtle)] hover:shadow-[0_0_20px_var(--color-gold-glow)]"
          >
            <FileText size={16} />
            View Tailored Resume
          </Link>
          <Link
            href={`/applications/${app.slug}/cover-letter`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 font-[family-name:var(--font-mono)] font-semibold rounded-lg cursor-pointer transition-all duration-300 border border-[var(--color-green-term-dim)] text-[var(--color-green-term)] hover:bg-[var(--color-green-term-bg)] hover:shadow-[0_0_20px_var(--color-green-term-glow)]"
          >
            <Mail size={16} />
            View Cover Letter
          </Link>
        </div>

        {/* Contact */}
        {app.contact && (
          <div className="glass-card p-6 md:p-8 mt-8 gold-reveal">
            <p className="section-label mb-3">
              <span className="text-[var(--color-green-term)]">$</span> contact
            </p>
            <div className="text-sm font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)] space-y-1">
              {app.contact.name && <p>{app.contact.name}</p>}
              {app.contact.title && <p className="text-xs text-[var(--color-text-muted)]">{app.contact.title}</p>}
              {app.contact.email && (
                <a href={`mailto:${app.contact.email}`} className="text-[var(--color-green-term)] hover:underline cursor-pointer">
                  {app.contact.email}
                </a>
              )}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
