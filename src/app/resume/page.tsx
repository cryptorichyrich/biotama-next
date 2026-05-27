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

      <div className="no-print max-w-[1200px] mx-auto px-6 pt-8 pb-4 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-secondary hover:text-accent transition-colors duration-200 cursor-pointer"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-accent border border-accent rounded-lg hover:bg-accent hover:text-white transition-colors duration-200 cursor-pointer"
        >
          <Download size={16} />
          Print / PDF
        </button>
      </div>

      <main className="pb-16">
        <div className="resume-container max-w-[900px] mx-auto px-6">
          <div className="bg-card border border-border rounded-xl p-8 md:p-12 shadow-sm">
            <div className="border-b border-border pb-8 mb-8">
              <h1 className="text-4xl font-extrabold text-foreground tracking-tight">
                {profile.name}
              </h1>
              <p className="text-xl text-accent font-semibold mt-2">
                {profile.role}
              </p>
              <p className="text-secondary mt-3 max-w-2xl">
                {profile.tagline}
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-secondary">
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
                    className="text-sm text-accent hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <ExternalLink size={12} />
                    {s.platform}
                  </a>
                ))}
              </div>
            </div>

            <section className="mb-10">
              <h2 className="text-lg font-extrabold text-foreground uppercase tracking-wider mb-3">
                Professional Summary
              </h2>
              <p className="text-secondary leading-relaxed">{profile.bio}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-extrabold text-foreground uppercase tracking-wider mb-6">
                Experience
              </h2>
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <p className="text-accent font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-secondary">
                        <Calendar size={13} />
                        <span>
                          {exp.startDate} – {exp.endDate}
                        </span>
                        <span className="mx-1">·</span>
                        <Briefcase size={13} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <ul className="space-y-1.5 mt-2">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="text-sm text-secondary flex items-start gap-2"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 bg-muted text-secondary text-xs rounded-md"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-extrabold text-foreground uppercase tracking-wider mb-6">
                Technical Skills
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillGroups.map((group) => (
                  <div key={group.category}>
                    <h3 className="font-semibold text-foreground mb-2">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((s) => (
                        <span
                          key={s.name}
                          className="px-2.5 py-1 bg-muted text-secondary text-xs font-medium rounded-md"
                        >
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-lg font-extrabold text-foreground uppercase tracking-wider mb-4">
                By the Numbers
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {profile.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="text-center p-4 bg-muted rounded-lg"
                  >
                    <p className="text-2xl font-extrabold text-foreground">
                      {m.value}
                    </p>
                    <p className="text-xs text-secondary mt-1">{m.label}</p>
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
