import { readFileSync } from "fs";
import { join } from "path";
import Link from "next/link";
import { profile } from "@/data/profile";

const DB = JSON.parse(readFileSync(join(process.cwd(), "src/data/applications-db.json"), "utf-8"));

const parseArr = (v: any, def: any = []) => {
  if (!v || v === "[]" || v === "") return def;
  try { const p = JSON.parse(typeof v === "string" ? v : JSON.stringify(v)); return Array.isArray(p) ? p : def; } catch { return def; }
};

function getApp(slug: string) {
  return DB.find((r: any) => r.slug === slug) || null;
}

export function generateStaticParams() {
  return DB.map((r: any) => ({ slug: r.slug }));
}

export default async function CoverLetterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = getApp(slug);
  const today = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  const tailoring = app ? {
    coverLetterHook: app.tailoring_cover_letter_hook || "",
    customSummary: app.tailoring_custom_summary || "",
    keyAchievements: parseArr(app.tailoring_key_achievements),
    highlightProjects: parseArr(app.tailoring_highlight_projects),
  } : null;

  const contact = app ? {
    name: app.contact_name || "",
    title: app.contact_title || "",
  } : null;

  return (
    <>
      <style>{`@page { size: A4; margin: 20mm; } @media print { html,body { margin:0; padding:0; background:#fff!important; -webkit-print-color-adjust:exact; print-color-adjust:exact; } .no-print { display:none!important; } .letter-content { box-shadow:none!important; padding:0!important; } } body { font-family:'Inter',Arial,Helvetica,sans-serif; } .letter-content { background:#fff; color:#1e293b; max-width:210mm; margin:0 auto; } @media screen { .letter-content { box-shadow:0 1px 3px rgba(0,0,0,0.1); } } @media print { .letter-content { box-shadow:none; } } .print-button:hover { background-color:#1e293b!important; color:#fff!important; }`}</style>

      <div className="no-print max-w-[210mm] mx-auto px-4 pt-6 pb-4 flex items-center justify-between">
        <Link href={`/applications/${slug}`} className="inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900 transition-colors">← Back to Application</Link>
        <button id="printBtn" className="print-button inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-slate-800 rounded-md hover:bg-slate-900 transition-colors cursor-pointer shadow-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download PDF
        </button>
        <script dangerouslySetInnerHTML={{__html: "document.getElementById('printBtn').onclick=function(){window.print()}"}} />
      </div>

      <div className="letter-content bg-white p-8 md:p-12 lg:p-16">
        <p className="text-sm text-slate-600 mb-8">{today}</p>
        {app && <><p className="text-sm text-slate-700 mb-1">{contact?.name || "Hiring Manager"}</p><p className="text-sm text-slate-700 mb-1">{contact?.title || "Hiring Team"}</p><p className="text-sm text-slate-700 mb-8">{app.company_name}</p></>}
        <p className="text-sm text-slate-700 mb-6">Dear {app && contact?.name ? contact.name.split(" ")[0] : "Hiring Team"},</p>
        <div className="text-sm text-slate-700 leading-relaxed space-y-4">
          {tailoring && <><p>{tailoring.coverLetterHook}</p><p>{tailoring.customSummary} Throughout my career, I've been responsible for architecting payment gateways serving 14,000+ clients across 69 countries, building real-time forex trade synchronization systems, and leading full-stack development for platforms handling millions in daily throughput.</p><p>Key achievements I'd bring to this role:</p><ul className="space-y-1.5 ml-4">{tailoring.keyAchievements.map((a: string, i: number) => <li key={i} className="pl-2 relative"><span className="absolute left-0 top-[0.45em] w-1 h-1 rounded-full bg-slate-400"/>{a}</li>)}</ul><p>I'm particularly excited about the opportunity to work on {(tailoring.highlightProjects[0] || "").toLowerCase() || "projects that push the boundaries of what's possible with modern web technologies"}. My architecture philosophy centers on the fact that there are no right answers in architecture — only tradeoffs — and I make those tradeoffs deliberately, documented, and reversible.</p></>}
          {!tailoring && <p>I am writing to express my interest in joining your team. With 10+ years of experience architecting fintech, e-commerce, and SaaS platforms, I bring deep expertise in React, Next.js, TypeScript, Node.js, and modern cloud infrastructure.</p>}
          <p>I would welcome the opportunity to discuss how my background aligns with your team's needs. Thank you for your time and consideration.</p>
        </div>
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
