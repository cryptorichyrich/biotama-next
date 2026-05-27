import Link from "next/link";
import { MapPin, Briefcase, DollarSign, Calendar, Globe, ExternalLink, FileText, Mail } from "lucide-react";

const STATUS_COLORS: Record<string, string> = {
  draft: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  applied: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  interview: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  offer: "bg-green-500/20 text-green-300 border-green-500/30",
  rejected: "bg-red-500/20 text-red-300 border-red-500/30",
};

const DEMO = {
  slug: "preview",
  company: {
    name: "Acme Corp",
    website: "https://acme.example.com",
    logo: "",
    location: "Remote · Worldwide",
    industry: "SaaS / Fintech",
  },
  position: {
    title: "Senior Fullstack Engineer",
    department: "Engineering",
    type: "full-time · Remote-first",
    remote: true,
    salaryRange: "$150k - $220k",
  },
  source: {
    url: "https://example.com/jobs/senior-fullstack",
    platform: "LinkedIn",
    dateFound: "2026-05-28",
  },
  application: {
    status: "applied",
    dateApplied: "2026-05-28",
    notes: "Applied via company career portal with tailored resume.",
  },
  jobDescription: {
    summary:
      "We're looking for a senior fullstack engineer to join our platform team. You'll build and scale the core product infrastructure that powers millions of daily transactions. The role spans frontend (React/Next.js), backend (Python/FastAPI), and infrastructure (Docker/K8s). You'll own features end-to-end, mentor junior engineers, and contribute to architectural decisions.",
    responsibilities: [
      "Design, build, and maintain scalable fullstack features across the platform",
      "Lead technical architecture discussions and contribute to system design",
      "Mentor junior and mid-level engineers through code reviews and pair programming",
      "Own deployment pipelines and infrastructure automation",
      "Collaborate with product and design to deliver user-facing features",
    ],
    requirements: [
      { skill: "React / Next.js", importance: "required" },
      { skill: "Python / FastAPI", importance: "required" },
      { skill: "TypeScript", importance: "required" },
      { skill: "PostgreSQL & query optimization", importance: "required" },
      { skill: "Docker & CI/CD", importance: "preferred" },
      { skill: "GraphQL experience", importance: "preferred" },
      { skill: "Fintech or payments domain", importance: "preferred" },
    ],
    niceToHave: [
      "Experience with event-driven architecture (Kafka / RabbitMQ)",
      "Kubernetes production experience",
      "Open source contributions",
    ],
  },
  tailoring: {
    emphasizeSkills: ["React", "Next.js", "FastAPI", "TypeScript", "PostgreSQL", "Docker", "System Architecture"],
    highlightProjects: ["Vault Terminal Portfolio", "Srabutan Marketplace", "FabAgent Kanban System"],
    customSummary:
      "Senior fullstack architect with 7+ years building scalable web applications. Deep expertise in React/Next.js ecosystems and Python/FastAPI backends. Architected a multi-tenant marketplace platform serving 10K+ users, built a hierarchical Kanban orchestration system for AI agent workflows, and designed a vault-terminal portfolio with Three.js 3D experiences. Passionate about clean system design, developer experience, and mentoring engineering teams.",
    keyAchievements: [
      "Architected and built Srabutan — a professional services marketplace serving 10K+ users, handling $500K+ in monthly transactions",
      "Designed FabAgent, a hierarchical Kanban orchestration system that coordinates parallel AI agent workstreams with 40% faster task completion",
      "Built biotama.cv vault-terminal portfolio featuring Three.js 3D tunnel fly and Canvas 2D side-scroller game experiences",
    ],
    coverLetterHook:
      "Your platform team's mission to build scalable infrastructure that powers millions of daily transactions aligns directly with my experience architecting Srabutan's marketplace backend. I'm particularly excited about the opportunity to own features end-to-end — from frontend UX in React/Next.js through backend services in FastAPI to deployment pipelines.",
  },
  contact: {
    name: "Jane HiringManager",
    title: "Engineering Manager",
    email: "jane@acme.example.com",
    linkedIn: "linkedin.com/in/jane-hm",
  },
};

export default function PreviewPage() {
  const app = DEMO;

  return (
    <main className="pt-24 pb-16">
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <Link
          href="/applications"
          className="inline-flex items-center gap-2 text-sm font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)] hover:text-[var(--color-green-term)] transition-colors duration-200 mb-8 cursor-pointer group"
        >
          <span className="text-[var(--color-green-term)] group-hover:-translate-x-1 transition-transform duration-200">
            &lt;-
          </span>{" "}
          Back to Applications
        </Link>

        {/* Status / Title / Meta */}
        <div className="glass-card p-8 md:p-10 mb-8 gold-reveal">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <p className="section-label mb-2">
                <span className="text-[var(--color-green-term)]">$</span>{" "}
                {app.application.status}/application
              </p>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight font-[family-name:var(--font-display)] mb-2">
                <span className="gradient-text">{app.position.title}</span>
              </h1>
              <p className="text-lg font-[family-name:var(--font-mono)] text-[var(--color-gold)]">
                {app.company.name}
              </p>
              <p className="text-xs font-[family-name:var(--font-mono)] text-[var(--color-text-muted)] mt-0.5">
                {app.company.industry}
              </p>
            </div>
            <div className="shrink-0">
              <span
                className={`text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                  STATUS_COLORS[app.application.status] || STATUS_COLORS.draft
                }`}
              >
                {app.application.status}
              </span>
            </div>
          </div>

          {/* Meta Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-[family-name:var(--font-mono)]">
            <div className="flex items-center gap-2 text-[var(--color-amber-dim)]">
              <MapPin size={14} className="text-[var(--color-green-term)]" />{" "}
              {app.company.location}
            </div>
            <div className="flex items-center gap-2 text-[var(--color-amber-dim)]">
              <Briefcase size={14} className="text-[var(--color-green-term)]" />{" "}
              {app.position.type}
            </div>
            <div className="flex items-center gap-2 text-[var(--color-amber-dim)]">
              <DollarSign size={14} className="text-[var(--color-green-term)]" />{" "}
              {app.position.salaryRange}
            </div>
            <div className="flex items-center gap-2 text-[var(--color-amber-dim)]">
              <Calendar size={14} className="text-[var(--color-green-term)]" />{" "}
              Found: {app.source.dateFound}
            </div>
          </div>

          {/* Source / Applied */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-xs font-[family-name:var(--font-mono)]">
            <a
              href={app.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[var(--color-amber-dim)] hover:text-[var(--color-green-term)] transition-colors duration-200 cursor-pointer"
            >
              <Globe size={12} /> {app.source.platform} <ExternalLink size={10} />
            </a>
            {app.application.dateApplied && (
              <span className="text-[var(--color-text-muted)]">
                Applied: {app.application.dateApplied}
              </span>
            )}
          </div>
        </div>

        {/* Job Description */}
        <div className="glass-card p-8 md:p-10 mb-8 gold-reveal">
          <p className="section-label mb-4">
            <span className="text-[var(--color-green-term)]">$</span> job-description
          </p>

          <p className="text-[var(--color-amber-text)] text-sm md:text-base font-[family-name:var(--font-mono)] leading-relaxed mb-6">
            {app.jobDescription.summary}
          </p>

          <h3 className="text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider text-[var(--color-green-term)] mb-3">
            Responsibilities
          </h3>
          <ul className="space-y-2 mb-6">
            {app.jobDescription.responsibilities.map((r: string, i: number) => (
              <li
                key={i}
                className="text-sm font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)] flex items-start gap-3 leading-relaxed"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-[var(--color-gold)]" />
                {r}
              </li>
            ))}
          </ul>

          <h3 className="text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider text-[var(--color-green-term)] mb-3">
            Requirements
          </h3>
          <div className="space-y-1.5 mb-6">
            {app.jobDescription.requirements.map((req: any, i: number) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm font-[family-name:var(--font-mono)]"
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    req.importance === "required"
                      ? "bg-[var(--color-green-term)]"
                      : req.importance === "preferred"
                        ? "bg-[var(--color-amber-text)]"
                        : "bg-[var(--color-text-muted)]"
                  }`}
                />
                <span className="text-[var(--color-amber-text)]">{req.skill}</span>
                <span className="text-[10px] uppercase tracking-wider">
                  ({req.importance})
                </span>
              </div>
            ))}
          </div>

          {app.jobDescription.niceToHave.length > 0 && (
            <>
              <h3 className="text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider text-[var(--color-green-term)] mb-3">
                Nice to Have
              </h3>
              <ul className="space-y-1">
                {app.jobDescription.niceToHave.map((n: string, i: number) => (
                  <li
                    key={i}
                    className="text-sm font-[family-name:var(--font-mono)] text-[var(--color-text-muted)] flex items-start gap-3 leading-relaxed"
                  >
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

          <h3 className="text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider text-[var(--color-green-term)] mb-3">
            Key Achievements
          </h3>
          <ul className="space-y-2 mb-6">
            {app.tailoring.keyAchievements.map((a: string, i: number) => (
              <li
                key={i}
                className="text-sm font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)] flex items-start gap-3 leading-relaxed"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-[var(--color-green-term)]" />
                {a}
              </li>
            ))}
          </ul>

          <h3 className="text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider text-[var(--color-green-term)] mb-3">
            Target Skills
          </h3>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {app.tailoring.emphasizeSkills.map((s: string, i: number) => (
              <span
                key={i}
                className="glass-legend text-xs font-[family-name:var(--font-mono)] text-[var(--color-green-term)]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={`/applications/${app.slug}/resume`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 font-[family-name:var(--font-mono)] font-semibold rounded-lg cursor-pointer transition-all duration-300 border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold-subtle)] hover:shadow-[0_0_20px_var(--color-gold-glow)]"
          >
            <FileText size={16} /> View Tailored Resume
          </Link>
          <Link
            href={`/applications/${app.slug}/cover-letter`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-4 font-[family-name:var(--font-mono)] font-semibold rounded-lg cursor-pointer transition-all duration-300 border border-[var(--color-green-term-dim)] text-[var(--color-green-term)] hover:bg-[var(--color-green-term-bg)] hover:shadow-[0_0_20px_var(--color-green-term-glow)]"
          >
            <Mail size={16} /> View Cover Letter
          </Link>
        </div>

        {/* Contact Info */}
        <div className="glass-card p-8 md:p-10 mt-8 gold-reveal">
          <p className="section-label mb-4">
            <span className="text-[var(--color-green-term)]">$</span> contact
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-[family-name:var(--font-mono)]">
            <div>
              <span className="text-[var(--color-text-muted)] text-[10px] uppercase tracking-wider block mb-1">
                Name
              </span>
              <span className="text-[var(--color-amber-text)]">
                {app.contact.name}
              </span>
            </div>
            <div>
              <span className="text-[var(--color-text-muted)] text-[10px] uppercase tracking-wider block mb-1">
                Title
              </span>
              <span className="text-[var(--color-amber-text)]">
                {app.contact.title}
              </span>
            </div>
            <div>
              <span className="text-[var(--color-text-muted)] text-[10px] uppercase tracking-wider block mb-1">
                Email
              </span>
              <a
                href={`mailto:${app.contact.email}`}
                className="text-[var(--color-green-term)] hover:underline cursor-pointer"
              >
                {app.contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
