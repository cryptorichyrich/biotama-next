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
        }
        body { font-family: 'Inter', Arial, Helvetica, sans-serif; background: #ffffff; }
        .resume-content { background: #ffffff; color: #333333; max-width: 210mm; margin: 0 auto; }
        @media screen { .resume-content { } }
        .section-title {
          font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;
          color: #555555; padding-bottom: 4px; margin-bottom: 8px;
          border-bottom: 1px solid #e5e5e5;
        }
        .qr-link { color: #2563eb; display: inline-flex; align-items: center; gap: 6px; }
        .qr-link:hover { text-decoration: underline; }
      `}</style>

      {/* Screen-only controls */}
      <div className="no-print max-w-[210mm] mx-auto px-4 pt-6 pb-4 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors"
        >
          ← Back to Home
        </Link>
        <button
          onClick={() => window.print()}
          className="no-print inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-slate-700 rounded-md hover:bg-slate-800 transition-colors cursor-pointer shadow-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download PDF
        </button>
      </div>

      {/* Resume Content */}
      <div className="resume-content p-[15mm] print:p-0">
        {/* ── HEADER ── */}
        <header className="pb-4 mb-5" style={{ borderBottom: "1px solid #e5e5e5" }}>
          <h1 className="text-2xl font-extrabold tracking-tight" style={{ color: "#222222" }}>
            {profile.name}
          </h1>
          <p className="mt-1 text-sm font-semibold uppercase tracking-widest" style={{ color: "#666666" }}>
            System Architect
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1" style={{ fontSize: "12px", color: "#666666" }}>
            <span>{profile.phone}</span>
            <span>{profile.email}</span>
            <span>{profile.location}</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5" style={{ fontSize: "12px" }}>
            {socialLinks.map((s) => s.url && (
              <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer" className="qr-link">
                <QRCode url={s.url} size={24} />
                {linkLabels[s.platform]}
              </a>
            ))}
          </div>
        </header>

        {/* ── PROFESSIONAL SUMMARY ── */}
        <section className="mb-5">
          <h2 className="section-title">Professional Summary</h2>
          <p style={{ fontSize: "11px", lineHeight: "1.6", color: "#444444" }}>
            {profile.summary}
          </p>
        </section>

        {/* ── EXPERIENCE ── */}
        <section className="mb-5">
          <h2 className="section-title">Experience</h2>
          {experiences.map((exp) => (
            <div key={exp.id} className="mt-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 style={{ fontSize: "13px", fontWeight: 700, color: "#222222" }}>{exp.role}</h3>
                  <p style={{ fontSize: "11px", fontWeight: 600, color: "#555555" }}>{exp.company}</p>
                </div>
                <span style={{ fontSize: "10px", color: "#888888", whiteSpace: "nowrap" }}>
                  {formatDate(exp.startDate)} — {formatDate(exp.endDate)}
                </span>
              </div>
              <ul className="mt-1.5 space-y-1">
                {exp.highlights.map((h, i) => (
                  <li key={i} style={{ fontSize: "10.5px", lineHeight: "1.5", color: "#444444" }}>
                    <span style={{ marginRight: "4px", color: "#999999" }}>•</span>
                    {h}
                  </li>
                ))}
              </ul>
              {exp.tech.length > 0 && (
                <p className="mt-1.5" style={{ fontSize: "9px", color: "#999999" }}>
                  <span style={{ fontWeight: 600, color: "#777777" }}>Tech:</span> {exp.tech.join(" • ")}
                </p>
              )}
            </div>
          ))}
        </section>

        {/* ── KEY PROJECTS ── */}
        <section className="mb-5">
          <h2 className="section-title">Key Projects</h2>
          <div className="mt-3 grid grid-cols-2 gap-x-5 gap-y-3">
            <div>
              <h3 style={{ fontSize: "11px", fontWeight: 700, color: "#222222" }}>Srabutan.com — Freelance Marketplace</h3>
              <p style={{ fontSize: "10px", lineHeight: "1.5", color: "#555555", marginTop: "2px" }}>
                Architected Indonesia&apos;s freelance marketplace with AI-powered matching, microservices architecture, and real-time collaboration. Full-stack development with CI/CD pipelines.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "11px", fontWeight: 700, color: "#222222" }}>BaxiaMarkets — Financial Platform</h3>
              <p style={{ fontSize: "10px", lineHeight: "1.5", color: "#555555", marginTop: "2px" }}>
                Built a 5-year fintech platform serving global traders with WordPress/Laravel/React stack, SumSub KYC compliance, multi-PSP payment processing, and responsive client portal.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "11px", fontWeight: 700, color: "#222222" }}>CrosSyncOrder — Forex Trade Copier SaaS</h3>
              <p style={{ fontSize: "10px", lineHeight: "1.5", color: "#555555", marginTop: "2px" }}>
                Designed a real-time trade synchronization system across MetaTrader 4/5 and cTrader using WebSocket + ZeroMQ, containerized with Docker/Kubernetes on Railway.
              </p>
            </div>
            <div>
              <h3 style={{ fontSize: "11px", fontWeight: 700, color: "#222222" }}>AI-Powered Sales Dashboard</h3>
              <p style={{ fontSize: "10px", lineHeight: "1.5", color: "#555555", marginTop: "2px" }}>
                Full-stack dashboard with Next.js + FastAPI backend, integrating Google Gemini AI for natural language sales insights with markdown rendering and data visualization.
              </p>
            </div>
          </div>
        </section>

        {/* ── TECHNICAL SKILLS ── */}
        <section className="mb-5">
          <h2 className="section-title">Technical Skills</h2>
          <div className="mt-3 space-y-2" style={{ fontSize: "10.5px" }}>
            {skillGroups.map((group) => (
              <div key={group.category}>
                <span style={{ fontWeight: 700, color: "#333333" }}>{group.category}: </span>
                <span style={{ color: "#555555" }}>
                  {group.skills.map((s) => s.name).join(" • ")}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── EDUCATION & CERTIFICATIONS ── */}
        <section className="mb-5">
          <h2 className="section-title">Education &amp; Certifications</h2>
          <div className="mt-3">
            {profile.education.map((edu, i) => (
              <div key={i} className="flex items-baseline justify-between">
                <div>
                  <h3 style={{ fontSize: "11px", fontWeight: 700, color: "#222222" }}>{edu.degree} — {edu.institution}</h3>
                  <p style={{ fontSize: "10px", color: "#555555" }}>Specialization in Software Development • GPA {edu.gpa}</p>
                </div>
                <span style={{ fontSize: "10px", color: "#888888" }}>{edu.startYear} — {edu.endYear}</span>
              </div>
            ))}
            <div className="mt-3" style={{ fontSize: "10px", color: "#555555" }}>
              <p style={{ fontWeight: 600, color: "#444444", fontSize: "11px" }}>Certifications:</p>
              <div className="mt-1 space-y-0.5">
                {profile.certifications.map((cert, i) => (
                  <div key={i} className="flex items-baseline gap-1">
                    <span style={{ color: "#aaaaaa" }}>▸</span>
                    <span><strong style={{ color: "#444444" }}>{cert.title}</strong> — {cert.institution} ({cert.date})</span>
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
