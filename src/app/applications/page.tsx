"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  MapPin,
  Briefcase,
  Calendar,
  ExternalLink,
  ArrowRight,
  Search,
} from "lucide-react";
import { profile } from "@/data/profile";

const STATUS_COLORS: Record<string, string> = {
  draft: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  applied: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  interview: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  offer: "bg-green-500/20 text-green-300 border-green-500/30",
  rejected: "bg-red-500/20 text-red-300 border-red-500/30",
};

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/jobs.json")
      .then((r) => r.json())
      .then((data) => setApplications(data))
      .catch(() => setApplications([]));
  }, []);

  const sortedApps = [...applications].sort(
    (a, b) =>
      new Date(b.source_date_found).getTime() -
      new Date(a.source_date_found).getTime()
  );

  const stats = {
    total: applications.length,
    draft: applications.filter((a) => a.app_status === "draft").length,
    applied: applications.filter((a) => a.app_status === "applied").length,
    interview: applications.filter((a) => a.app_status === "interview").length,
    offer: applications.filter((a) => a.app_status === "offer").length,
    rejected: applications.filter((a) => a.app_status === "rejected").length,
  };

  const filtered = search
    ? sortedApps.filter(
        (a) =>
          a.position_title?.toLowerCase().includes(search.toLowerCase()) ||
          a.company_name?.toLowerCase().includes(search.toLowerCase()) ||
          a.company_industry?.toLowerCase().includes(search.toLowerCase())
      )
    : sortedApps;

  return (
    <>
      <main className="pt-24 pb-16">
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)] hover:text-[var(--color-green-term)] transition-colors duration-200 mb-8 cursor-pointer group"
          >
            <span className="text-[var(--color-green-term)] group-hover:-translate-x-1 transition-transform duration-200">
              &lt;-
            </span>
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-16">
            <p className="section-label mb-4">
              <span className="text-[var(--color-green-term)]">$</span>{" "}
              /applications
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-[family-name:var(--font-display)] mb-6">
              <span className="gradient-text">Job Applications</span>
            </h1>
            <p className="text-lg text-[var(--color-amber-dim)] max-w-2xl leading-relaxed font-[family-name:var(--font-mono)]">
              Tailored applications tracking — each with a custom resume and
              cover letter crafted for the specific role.
            </p>
          </div>

          {/* Stats Bar */}
          {applications.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider px-2.5 py-1 rounded-full border bg-amber-500/20 text-amber-300 border-amber-500/30">
                {stats.draft} draft
              </span>
              <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider px-2.5 py-1 rounded-full border bg-blue-500/20 text-blue-300 border-blue-500/30">
                {stats.applied} applied
              </span>
              <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider px-2.5 py-1 rounded-full border bg-purple-500/20 text-purple-300 border-purple-500/30">
                {stats.interview} interview
              </span>
              <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider px-2.5 py-1 rounded-full border bg-green-500/20 text-green-300 border-green-500/30">
                {stats.offer} offer
              </span>
              <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider px-2.5 py-1 rounded-full border bg-red-500/20 text-red-300 border-red-500/30">
                {stats.rejected} rejected
              </span>
              <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider text-[var(--color-text-muted)] ml-auto">
                {stats.total} total
              </span>
            </div>
          )}

          {/* Search */}
          {applications.length > 0 && (
            <div className="relative mb-8">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by title, company, or industry…"
                className="w-full glass-card border border-white/5 focus:border-[var(--color-gold)]/30 outline-none px-9 py-3 text-sm font-[family-name:var(--font-mono)] text-[var(--color-amber-text)] placeholder:text-[var(--color-text-muted)] transition-colors duration-200"
              />
            </div>
          )}

          {/* Applications grid */}
          {applications.length === 0 ? (
            <div className="glass-card p-12 text-center">
              <p className="text-[var(--color-amber-dim)] font-[family-name:var(--font-mono)]">
                <span className="text-[var(--color-green-term)]">$</span> Loading
                applications…
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="glass-card p-12 text-center">
              <p className="text-[var(--color-amber-dim)] font-[family-name:var(--font-mono)]">
                <span className="text-[var(--color-green-term)]">$</span> No
                matches for "{search}".
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((app) => {
                const statusColor =
                  STATUS_COLORS[app.app_status] ||
                  STATUS_COLORS.draft;
                return (
                  <Link
                    key={app.slug}
                    href={`/applications/${app.slug}`}
                    className="group block"
                  >
                    <article className="glass-card p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-1">
                      {/* Status badge */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span
                          className={`text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider px-2 py-0.5 rounded-full border ${statusColor}`}
                        >
                          {app.app_status}
                        </span>
                        <span className="text-xs font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)]">
                          {app.source_date_found}
                        </span>
                      </div>

                      {/* Company name */}
                      <h3 className="text-xs font-[family-name:var(--font-mono)] text-[var(--color-green-term)] mb-1">
                        {app.company_name}
                      </h3>

                      {/* Position title */}
                      <h2 className="text-base font-[family-name:var(--font-display)] font-semibold text-[var(--color-amber-text)] mb-2 line-clamp-2 group-hover:text-[var(--color-gold)] transition-colors duration-200">
                        {app.position_title}
                      </h2>

                      {/* Meta info */}
                      <div className="space-y-1.5 mb-3 flex-1">
                        <div className="flex items-center gap-1.5 text-xs font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)]">
                          <MapPin size={12} className="text-[var(--color-green-term)] shrink-0" />
                          {app.company_location}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)]">
                          <Briefcase size={12} className="text-[var(--color-green-term)] shrink-0" />
                          {app.position_type}
                          {app.position_remote ? " · Remote" : " · On-site"}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)]">
                          <Calendar size={12} className="text-[var(--color-green-term)] shrink-0" />
                          Found: {app.source_date_found}
                        </div>
                      </div>

                      {/* Industry tag */}
                      <div className="flex items-center gap-1.5 flex-wrap mb-2">
                        <span className="glass-legend text-[10px] font-[family-name:var(--font-mono)] text-[var(--color-green-term)]">
                          {app.company_industry}
                        </span>
                      </div>

                      {/* Arrow indicator */}
                      <div className="flex items-center gap-1 text-xs font-[family-name:var(--font-mono)] text-[var(--color-green-term)] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <span className="text-[var(--color-green-term)]">
                          &gt;
                        </span>{" "}
                        View details <ArrowRight size={14} />
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
