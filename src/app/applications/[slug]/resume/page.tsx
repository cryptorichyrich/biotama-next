import { readFileSync } from "fs";
import { join } from "path";
import Link from "next/link";
import { profile } from "@/data/profile";
import { experiences } from "@/data/experience";
import { skillGroups } from "@/data/skills";

const DB = JSON.parse(readFileSync(join(process.cwd(), "src/data/applications-db.json"), "utf-8"));

function getApp(slug: string) {
  const row = DB.find((r: any) => r.slug === slug);
  if (!row) return null;
  return {
    slug: row.slug,
    tailoring: {
      customSummary: row.tailoring_custom_summary || "",
      keyAchievements: row.tailoring_key_achievements || [],
    },
  };
}

export function generateStaticParams() {
  return DB.map((r: any) => ({ slug: r.slug }));
}

export default function TailoredResumePage({ params }: { params: { slug: string } }) {
  const app = getApp(params.slug);
  const socialLinks = profile.socials.filter((s) => ["LinkedIn", "GitHub"].includes(s.platform));

  return (
    <>
      <style>{`@page { size: A4; margin: 15mm; } @media print { html,body { margin:0; padding:0; background:#fff!important; -webkit-print-color-adjust:exact; print-color-adjust:exact; } .no-print { display:none!important; } .resume-content { box-shadow:none!important; max-width:100%!important; padding:0!important; } a { color:#1e293b!important; text-decoration:underline; } } body { font-family:'Inter',Arial,Helvetica,sans-serif; } .resume-content { background:#fff; color:#1e293b; max-width:210mm; margin:0 auto; } @media screen { .resume-content { box-shadow:0 1px 3px rgba(0,0,0,0.1); } } @media print { .resume-content { box-shadow:none; } } .print-button:hover { background-color:#1e293b!important; color:#fff!important; }`}</style>

      <div className="no-print max-w-[210mm] mx-auto px-4 pt-6 pb-4 flex items-center justify-between">
        <Link href={`/applications/${params.slug}`} className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 transition-colors">← Back to Application</Link>
        <button id="printBtn" className="print-button inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-slate-800 rounded-md hover:bg-slate-900 transition-colors cursor-pointer shadow-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download PDF
        </button>
        <script dangerouslySetInnerHTML={{__html: "document.getElementById('printBtn').onclick=function(){window.print()}"}} />
      </div>

      <div className="resume-content bg-white text-slate-800 p-8 md:p-10 lg:p-12">
        <header className="border-b border-slate-200 pb-5 mb-5">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">{profile.name}</h1>
          <p className="text-lg font-medium text-slate-700 mt-1">{profile.role}</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-sm text-slate-600">
            <span>{profile.email}</span><span className="hidden sm:inline text-slate-300">|</span>
            <span>{profile.phone}</span><span className="hidden sm:inline text-slate-300">|</span>
            <span>{profile.location}</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-sm text-slate-600">
            {socialLinks.map(s => <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 underline underline-offset-2 decoration-slate-300">{s.platform}</a>)}
          </div>
        </header>

        <section className="mb-6">
          <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">Professional Summary</h2>
          <p className="text-sm text-slate-700 leading-relaxed">{app ? app.tailoring.customSummary : profile.summary}</p>
        </section>

        <section className="mb-6">
          <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">Experience</h2>
          <div className="space-y-5">{experiences.map(exp => (
            <div key={exp.id}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
                <div><h3 className="text-sm font-bold text-slate-900">{exp.role}</h3><p className="text-sm font-medium text-slate-700">{exp.company}</p></div>
                <div className="text-xs text-slate-500 whitespace-nowrap sm:text-right">{exp.startDate}–{exp.endDate} | {exp.location}</div>
              </div>
              <ul className="mt-2 space-y-1">{exp.highlights.map((h,i) => <li key={i} className="text-xs text-slate-700 leading-relaxed pl-3 relative"><span className="absolute left-0 top-[0.45em] w-1 h-1 rounded-full bg-slate-400"/>{h}</li>)}</ul>
              {exp.tech.length > 0 && <p className="text-xs text-slate-500 mt-1.5"><span className="font-medium">Technologies:</span> {exp.tech.join(", ")}</p>}
            </div>
          ))}</div>
        </section>

        {app && app.tailoring.keyAchievements.length > 0 && (
          <section className="mb-6">
            <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">Key Achievements</h2>
            <ul className="space-y-1">{app.tailoring.keyAchievements.map((a: string, i: number) => <li key={i} className="text-xs text-slate-700 leading-relaxed pl-3 relative"><span className="absolute left-0 top-[0.45em] w-1 h-1 rounded-full bg-slate-700"/>{a}</li>)}</ul>
          </section>
        )}

        <section className="mb-6">
          <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">Education</h2>
          {profile.education.map((edu,i) => <div key={i} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between text-sm"><div><p className="font-semibold text-slate-900">{edu.degree}</p><p className="text-slate-600">{edu.institution}</p></div><div className="text-xs text-slate-500 whitespace-nowrap sm:text-right">{edu.startYear}–{edu.endYear} | GPA: {edu.gpa}</div></div>)}
        </section>

        {profile.certifications.length > 0 && <section className="mb-6"><h2 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">Certifications</h2><ul className="space-y-1">{profile.certifications.map((cert,i) => <li key={i} className="text-sm text-slate-700">{cert.title} – {cert.institution} ({cert.date})</li>)}</ul></section>}

        <section><h2 className="text-base font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-3">Technical Skills</h2>
          <div className="space-y-2">{skillGroups.map(g => <div key={g.category} className="text-sm"><span className="font-semibold text-slate-900">{g.category}: </span><span className="text-slate-700">{g.skills.map(s => s.name).join(", ")}</span></div>)}</div>
        </section>
      </div>
    </>
  );
}
