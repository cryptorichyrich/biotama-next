"use client";

import { profile } from "@/data/profile";

export default function RateCardPage() {
  return (
    <>
      <style>{`
        @page { size: A4; margin: 12mm; }
        @media print {
          html, body { margin: 0; padding: 0; background: #ffffff !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
        }
        body { font-family: 'Inter', Arial, Helvetica, sans-serif; background: #ffffff; }
        .rc { max-width: 210mm; margin: 0 auto; color: #333333; padding: 0 16px; }
        .rc h1 { font-size: 22px; font-weight: 800; color: #111827; margin: 0; }
        .rc .subtitle { font-size: 13px; color: #6b7280; margin: 2px 0 20px; }
        .rc .section-title {
          font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;
          color: #555555; padding-bottom: 4px; margin: 18px 0 10px; border-bottom: 1px solid #e5e5e5;
        }
        .rc table { width: 100%; border-collapse: collapse; font-size: 13px; }
        .rc td { padding: 8px 0; border-bottom: 1px solid #f3f4f6; }
        .rc td:last-child { text-align: right; font-weight: 700; color: #111827; }
        .rc ul { margin: 0; padding-left: 18px; font-size: 13px; line-height: 1.7; }
        .rc .note { font-size: 12px; color: #6b7280; margin-top: 16px; }
      `}</style>

      <div className="no-print max-w-[210mm] mx-auto px-4 pt-6">
        <a href="/" className="text-blue-600 text-sm hover:underline">← Back</a>
      </div>

      <div className="rc">
        <h1>Rate Card</h1>
        <div className="subtitle">
          {profile.name} — Fullstack Web Developer · Project-Based · biotama.cv
        </div>

        <div className="section-title">Engagement Models</div>
        <table>
          <tbody>
            <tr><td>Hourly</td><td>USD 30/hr</td></tr>
            <tr><td>Monthly retainer (part-time, ~20 hrs/week)</td><td>USD 2,000/month</td></tr>
            <tr><td>Fixed-price project</td><td>Quoted per scope after discovery</td></tr>
          </tbody>
        </table>

        <div className="section-title">Included in Every Rate</div>
        <ul>
          <li><strong>Backend:</strong> Node.js, TypeScript, Python (FastAPI), REST APIs, auth, business logic</li>
          <li><strong>Frontend:</strong> React, TypeScript, Tailwind CSS, admin dashboards, data-driven UI</li>
          <li><strong>Databases:</strong> PostgreSQL, MySQL, SQLite — schema design, migrations, reporting</li>
          <li><strong>Infra:</strong> Docker, Git, CI/CD, deployment (Cloudflare, Vercel, GCP, Render, UNIX)</li>
          <li><strong>Included as standard:</strong> AI/LLM &amp; RAG integrations, workflow automation, API integrations, event-driven pipelines — no premium line item</li>
          <li><strong>Working style:</strong> fast response times, full ownership from system design through deployment, agreed deadlines kept</li>
        </ul>

        <div className="section-title">Billing Terms</div>
        <ul>
          <li>Hourly: invoiced weekly, Net 7</li>
          <li>Fixed-price: 50% upfront, 50% on delivery; milestone-based for projects 4+ weeks</li>
          <li>New projects: 2-hour paid discovery call for scope definition</li>
          <li>Post-delivery: 2 weeks bug support included</li>
        </ul>

        <p className="note">
          Contact: {profile.email ?? "biotama.cv"} · biotama.cv
        </p>
      </div>
    </>
  );
}
