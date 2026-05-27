"use client";

import Link from "next/link";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import { skillGroups } from "@/data/skills";
import QRCode from "@/components/QRCode";

const socialLinks = [
  { platform: "LinkedIn", url: profile.socials.find((s) => s.platform === "LinkedIn")?.url ?? "" },
  { platform: "GitHub", url: profile.socials.find((s) => s.platform === "GitHub")?.url ?? "" },
  { platform: "Website", url: "https://biotama.cv" },
];

const linkLabels: Record<string, string> = {
  LinkedIn: "linkedin.com/in/agustinus-biotamalo",
  GitHub: "github.com/cryptorichyrich",
  Website: "biotama.cv",
};

function formatDate(dateStr: string): string {
  return dateStr;
}

export default function ResumePage() {
  return (
    <>
      <style>{`
        @page { size: A4; margin: 12mm; }
        @media print {
          html, body {
            margin: 0; padding: 0;
            background: #ffffff !important;
            -webkit-print-color-adjust: exact; print-color-adjust: exact;
          }
          .no-print { display: none !important; }
          a { color: #1e293b !important; }
        }
        body { font-family: 'Inter', Arial, Helvetica, sans-serif; }
        .resume-content { background: #ffffff; color: #1e293b; max-width: 210mm; margin: 0 auto; }
        @media screen { .resume-content { box-shadow: 0 1px 3px rgba(0,0,0,0.1); } }
        .print-button:hover { background-color: #1e293b !important; color: #ffffff !important; }
      `}</style>

      {/* Screen-only controls */}
      <div className="no-print max-w-[210mm] mx-auto px-4 pt-6 pb-4 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 transition-colors"
        >
          ← Back to Home
        </Link>
        <button
          onClick={() => window.print()}
          className="print-button inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-slate-800 rounded-md hover:bg-slate-900 transition-colors cursor-pointer shadow-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download PDF
        </button>
      </div>

      {/* Resume Content */}
      <div className="resume-content bg-white text-slate-800 p-[15mm] print:p-0">
        {/* ── HEADER ── */}
        <header className="border-b-2 border-slate-800 pb-4 mb-5">
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
            {profile.name}
          </h1>
          <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-slate-600">
            Senior Fullstack Architect &bull; Fintech Specialist
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-600">
            <span>{profile.phone}</span>
            <span>{profile.email}</span>
            <span>{profile.location}</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5 text-xs">
            {socialLinks.map((s) => s.url && (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline flex items-center gap-2"
              >
                <QRCode url={s.url} size={24} />
                {linkLabels[s.platform]}
              </a>
            ))}
          </div>
        </header>

        {/* ── PROFESSIONAL SUMMARY ── */}
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-800">
            Professional Summary
          </h2>
          <p className="mt-2 text-[11px] leading-relaxed text-slate-700">
            {profile.summary}
          </p>
        </section>

        {/* ── EXPERIENCE ── */}
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-800">
            Experience
          </h2>
          {experiences.map((exp) => (
            <div key={exp.id} className="mt-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-[13px] font-bold text-slate-900">{exp.role}</h3>
                  <p className="text-[11px] font-semibold text-slate-600">{exp.company}</p>
                </div>
                <span className="text-[10px] text-slate-500 whitespace-nowrap">
                  {formatDate(exp.startDate)} — {formatDate(exp.endDate)}
                </span>
              </div>
              <ul className="mt-1.5 space-y-1">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="text-[10.5px] leading-relaxed text-slate-700">
                    <span className="mr-1 text-slate-400">•</span>
                    {h}
                  </li>
                ))}
              </ul>
              {exp.tech.length > 0 && (
                <p className="mt-1.5 text-[9px] text-slate-400">
                  <span className="font-semibold text-slate-500">Tech:</span> {exp.tech.join(" • ")}
                </p>
              )}
            </div>
          ))}
        </section>

        {/* ── KEY PROJECTS ── */}
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-800">
            Key Projects
          </h2>
          <div className="mt-3 grid grid-cols-2 gap-x-5 gap-y-3">
            <div>
              <h3 className="text-[11px] font-bold text-slate-900">Srabutan.com — Freelance Marketplace</h3>
              <p className="text-[10px] leading-relaxed text-slate-600 mt-0.5">
                Architected Indonesia&apos;s freelance marketplace with AI-powered matching, microservices architecture, and real-time collaboration. Full-stack development with CI/CD pipelines.
              </p>
            </div>
            <div>
              <h3 className="text-[11px] font-bold text-slate-900">BaxiaMarkets — Financial Platform</h3>
              <p className="text-[10px] leading-relaxed text-slate-600 mt-0.5">
                Built a 5-year fintech platform serving global traders with WordPress/Laravel/React stack, SumSub KYC compliance, multi-PSP payment processing, and responsive client portal.
              </p>
            </div>
            <div>
              <h3 className="text-[11px] font-bold text-slate-900">CrosSyncOrder — Forex Trade Copier SaaS</h3>
              <p className="text-[10px] leading-relaxed text-slate-600 mt-0.5">
                Designed a real-time trade synchronization system across MetaTrader 4/5 and cTrader using WebSocket + ZeroMQ, containerized with Docker/Kubernetes on Railway.
              </p>
            </div>
            <div>
              <h3 className="text-[11px] font-bold text-slate-900">AI-Powered Sales Dashboard</h3>
              <p className="text-[10px] leading-relaxed text-slate-600 mt-0.5">
                Full-stack dashboard with Next.js + FastAPI backend, integrating Google Gemini AI for natural language sales insights with markdown rendering and data visualization.
              </p>
            </div>
          </div>
        </section>

        {/* ── TECHNICAL SKILLS ── */}
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-800">
            Technical Skills
          </h2>
          <div className="mt-3 space-y-2 text-[10.5px]">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <span className="font-bold text-slate-800">{group.category}: </span>
                <span className="text-slate-600">
                  {group.skills.map((s) => s.name).join(" • ")}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── EDUCATION & CERTIFICATIONS ── */}
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-800">
            Education &amp; Certifications
          </h2>
          <div className="mt-3">
            {profile.education.map((edu, i) => (
              <div key={i} className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-[11px] font-bold text-slate-900">{edu.degree} — {edu.institution}</h3>
                  <p className="text-[10px] text-slate-600">Specialization in Software Development • GPA {edu.gpa}</p>
                </div>
                <span className="text-[10px] text-slate-500">{edu.startYear} — {edu.endYear}</span>
              </div>
            ))}
            <div className="mt-3 text-[10px] text-slate-600">
              <p className="font-semibold text-slate-800 text-[11px]">Certifications:</p>
              <div className="mt-1 space-y-0.5">
                {profile.certifications.map((cert, i) => (
                  <div key={i} className="flex items-baseline gap-1">
                    <span className="text-slate-400">▸</span>
                    <span><strong className="text-slate-700">{cert.title}</strong> — {cert.institution} ({cert.date})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
