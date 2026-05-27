"use client";

import Link from "next/link";
import { getApplicationBySlug } from "@/data/applications";
import { profile } from "@/data/profile";

export function CoverLetter({ slug }: { slug: string }) {
  const app = getApplicationBySlug(slug);
  const today = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  return (
    <>
      <style>{`
        @page { size: A4; margin: 20mm; }
        @media print {
          html, body { margin: 0; padding: 0; background: #ffffff !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
          .letter-content { box-shadow: none !important; padding: 0 !important; }
        }
        body { font-family: 'Inter', Arial, Helvetica, sans-serif; }
        .letter-content { background: #ffffff; color: #1e293b; max-width: 210mm; margin: 0 auto; }
        @media screen { .letter-content { box-shadow: 0 1px 3px rgba(0,0,0,0.1); } }
        @media print { .letter-content { box-shadow: none; } }
        .print-button:hover { background-color: #1e293b !important; color: #ffffff !important; }
      `}</style>

      {/* Screen-only controls */}
      <div className="no-print max-w-[210mm] mx-auto px-4 pt-6 pb-4 flex items-center justify-between">
        <Link href={`/applications/${slug}`} className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 transition-colors">
          ← Back to Application
        </Link>
        <button onClick={() => window.print()} className="print-button inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-slate-800 rounded-md hover:bg-slate-900 transition-colors cursor-pointer shadow-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download PDF
        </button>
      </div>

      <div className="letter-content bg-white p-8 md:p-12 lg:p-16">
        {/* Date */}
        <p className="text-sm text-slate-600 mb-8">{today}</p>

        {/* Recipient */}
        {app && (
          <>
            <p className="text-sm text-slate-700 mb-1">
              {app.contact?.name || "Hiring Manager"}
            </p>
            <p className="text-sm text-slate-700 mb-1">{app.contact?.title || "Hiring Team"}</p>
            <p className="text-sm text-slate-700 mb-8">{app.company.name}</p>
          </>
        )}

        {/* Salutation */}
        <p className="text-sm text-slate-700 mb-6">
          Dear {app?.contact?.name?.split(" ")[0] || "Hiring Team"},
        </p>

        {/* Body */}
        <div className="text-sm text-slate-700 leading-relaxed space-y-4">
          {app && (
            <>
              <p>
                {app.tailoring.coverLetterHook}
              </p>

              <p>
                {app.tailoring.customSummary} Throughout my career, I've been responsible for architecting payment gateways serving 14,000+ clients across 69 countries, building real-time forex trade synchronization systems, and leading full-stack development for platforms handling millions in daily throughput.
              </p>

              <p>Key achievements I'd bring to this role:</p>
              <ul className="space-y-1.5 ml-4">
                {app.tailoring.keyAchievements.map((a: string, i: number) => (
                  <li key={i} className="pl-2 relative">
                    <span className="absolute left-0 top-[0.45em] w-1 h-1 rounded-full bg-slate-400" />
                    {a}
                  </li>
                ))}
              </ul>

              <p>
                I'm particularly excited about the opportunity to work on {app.tailoring.highlightProjects[0]?.toLowerCase() || "projects that push the boundaries of what's possible with modern web technologies"}. My architecture philosophy centers on the fact that there are no right answers in architecture — only tradeoffs — and I make those tradeoffs deliberately, documented, and reversible.
              </p>
            </>
          )}
          {!app && (
            <p>
              I am writing to express my interest in joining your team. With 10+ years of experience architecting fintech, e-commerce, and SaaS platforms, I bring deep expertise in React, Next.js, TypeScript, Node.js, and modern cloud infrastructure.
            </p>
          )}

          <p>
            I would welcome the opportunity to discuss how my background aligns with your team's needs. Thank you for your time and consideration.
          </p>
        </div>

        {/* Closing */}
        <div className="mt-10">
          <p className="text-sm text-slate-700">Best regards,</p>
          <p className="text-base font-semibold text-slate-900 mt-3">{profile.name}</p>
          <p className="text-sm text-slate-600">{profile.role}</p>
          <p className="text-sm text-slate-600">{profile.email}</p>
          <p className="text-sm text-slate-600">{profile.phone}</p>
          <p className="text-sm text-slate-600">{profile.location}</p>
        </div>
      </div>
    </>
  );
}
