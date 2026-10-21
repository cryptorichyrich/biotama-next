"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Mail } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { profile } from "@/data/profile";
import { testimonials } from "@/data/testimonials";
import { decisions } from "@/data/decisions";

/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO — Editorial case-study page
   Design language: Vault Terminal (Spectral display, JetBrains
   Mono, gold accent on black, hairline structure, glass tiles).
   Personal metrics only. No company stats borrowed.
   ═══════════════════════════════════════════════════════════════ */

const METRICS = [
  { value: "14+", label: "Years in technology" },
  { value: "6", label: "Brokerage platforms supported" },
  { value: "2", label: "End-to-end ERP rollouts" },
  { value: "3", label: "AI agents in production" },
  { value: "20+", label: "Projects shipped" },
];

/* Curated case studies, resolved from the master project data. */
const FEATURED_IDS = ["mallops-suite", "srabutan", "umkm-st-servatius"];
const MORE_IDS = ["crossyncorder", "baxiamarkets", "toko-vavelle", "healer-path", "damai-kasih", "sales-dashboard"];

const featured = FEATURED_IDS.map((id) => projects.find((p) => p.id === id)).filter(
  (p): p is NonNullable<typeof p> => Boolean(p)
);
const more = MORE_IDS.map((id) => projects.find((p) => p.id === id)).filter(
  (p): p is NonNullable<typeof p> => Boolean(p)
);

const CAPABILITIES: { title: string; items: string[] }[] = [
  {
    title: "Engineering",
    items: ["React", "Next.js", "Astro", "TypeScript", "Node.js", "Python", "PHP", "Laravel", "NestJS", "FastAPI"],
  },
  {
    title: "Data & Platforms",
    items: ["PostgreSQL", "MySQL", "SQL Server", "Supabase", "Docker", "GitHub Actions", "Cloudflare", "Railway"],
  },
  {
    title: "Payments & Compliance",
    items: [
      "PCI-DSS compliant integrations",
      "VA, QRIS, and e-wallet rails",
      "Reconciliation and settlement flows",
      "KYC and AML operations (Sumsub)",
    ],
  },
  {
    title: "AI & Automation",
    items: ["LLM workflows", "RAG pipelines", "Multi-agent orchestration", "n8n and Python automation"],
  },
];

const MONO = "font-[family-name:var(--font-mono)]";
const DISPLAY = "font-[family-name:var(--font-display)]";

function fadeProps(reduce: boolean | null, delay = 0) {
  if (reduce) return {};
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
  };
}

export default function PortfolioPage() {
  const reduce = useReducedMotion();
  const nash = testimonials.find((t) => t.id === "nash-wadud");

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* ══ HERO ══ */}
        <section className="relative overflow-hidden pt-36 pb-24 px-4 sm:px-6 lg:px-8">
          {/* backdrop: gold glow + fading grid */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div
              className="absolute -top-40 -left-40 h-[560px] w-[560px] rounded-full opacity-[0.14]"
              style={{ background: "radial-gradient(circle, var(--color-gold) 0%, transparent 65%)" }}
            />
            <div
              className="absolute top-1/3 right-[-200px] h-[480px] w-[480px] rounded-full opacity-[0.07]"
              style={{ background: "radial-gradient(circle, var(--color-green-term) 0%, transparent 65%)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--color-border-subtle) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border-subtle) 1px, transparent 1px)",
                backgroundSize: "72px 72px",
                maskImage: "radial-gradient(ellipse 90% 70% at 30% 20%, black 0%, transparent 75%)",
                WebkitMaskImage: "radial-gradient(ellipse 90% 70% at 30% 20%, black 0%, transparent 75%)",
              }}
            />
          </div>

          <div className="relative max-w-[1200px] mx-auto">
            <motion.p
              className={`${MONO} text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-6`}
              {...fadeProps(reduce, 0)}
            >
              Portfolio / 2011 - 2026
            </motion.p>

            <motion.h1
              className={`${DISPLAY} text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.12] pb-2 max-w-4xl text-[var(--color-text-heading)]`}
              {...fadeProps(reduce, 0.08)}
            >
              I build systems that carry{" "}
              <em className="italic text-[var(--color-gold)]">real weight</em>.
            </motion.h1>

            <motion.p
              className={`${MONO} mt-8 max-w-[62ch] text-base leading-relaxed text-[var(--color-text-body)]`}
              {...fadeProps(reduce, 0.16)}
            >
              Fourteen years of fintech engineering: payment infrastructure held to PCI-DSS discipline, ERP
              implementations end to end, and AI products running in production. I like problems where the cost of
              failure is real, because that is where careful work shows. I choose systems by the trade-offs they
              make, not by the frameworks they use.
            </motion.p>

            <motion.div className="mt-10 flex flex-wrap items-center gap-4" {...fadeProps(reduce, 0.24)}>
              <a
                href="#work"
                className={`${MONO} group inline-flex items-center gap-2.5 px-7 py-3.5 font-semibold rounded-lg border border-[var(--color-gold)] text-[var(--color-gold)] transition-all duration-300 hover:bg-[var(--color-gold-subtle)] hover:shadow-[0_0_20px_var(--color-gold-glow)]`}
              >
                View selected work
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <Link
                href="/resume"
                className={`${MONO} group inline-flex items-center gap-2.5 px-7 py-3.5 font-semibold rounded-lg border border-[var(--color-green-term-dim)] text-[var(--color-green-term)] transition-all duration-300 hover:bg-[var(--color-green-term-bg)] hover:shadow-[0_0_20px_var(--color-green-term-glow)]`}
              >
                <span className="text-[var(--color-green-term)]">$</span>
                Resume
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className={`${MONO} inline-flex items-center gap-2 px-4 py-3.5 text-sm text-[var(--color-amber-dim)] transition-colors duration-300 hover:text-[var(--color-amber-text)]`}
              >
                <Mail size={15} />
                {profile.email}
              </a>
            </motion.div>

            <motion.div className="mt-14 flex items-center gap-3" {...fadeProps(reduce, 0.32)}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-green-term)] opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-green-term)]" />
              </span>
              <span className={`${MONO} text-xs tracking-widest uppercase text-[var(--color-amber-dim)]`}>
                Open to new projects and roles
              </span>
            </motion.div>
          </div>
        </section>

        {/* ══ METRICS BAND ══ */}
        <section className="px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-[1200px] mx-auto border-y border-[var(--color-border)] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-[var(--color-border-subtle)]"
            {...fadeProps(reduce, 0)}
          >
            {METRICS.map((m) => (
              <div key={m.label} className="px-5 py-8 first:pl-0">
                <div className={`${DISPLAY} text-3xl sm:text-4xl font-semibold text-[var(--color-gold)]`}>{m.value}</div>
                <div className={`${MONO} mt-2 text-[11px] tracking-wider uppercase text-[var(--color-text-muted)]`}>
                  {m.label}
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ══ SELECTED WORK ══ */}
        <section id="work" className="scroll-mt-24 px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-[1200px] mx-auto">
            <motion.p className={`${MONO} section-label mb-4`} {...fadeProps(reduce, 0)}>
              <span className="text-[var(--color-green-term)]">$</span> ls ~/selected-work/
            </motion.p>
            <motion.h2
              className={`${DISPLAY} text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight gradient-text mb-4`}
              {...fadeProps(reduce, 0.06)}
            >
              Selected Work
            </motion.h2>
            <motion.p
              className={`${MONO} text-[var(--color-text-body)] max-w-2xl mb-4 leading-relaxed`}
              {...fadeProps(reduce, 0.12)}
            >
              Case studies from fintech infrastructure, commerce platforms, and AI systems. Every one of these ran (or
              runs) in production, for real users and real money.
            </motion.p>

            {/* Featured case studies */}
            <div>
              {featured.map((p, i) => (
                <motion.article
                  key={p.id}
                  className="group grid md:grid-cols-[96px_1fr_240px] gap-6 md:gap-10 py-12 border-t border-[var(--color-border)] cursor-default"
                  {...fadeProps(reduce, 0.05 * i)}
                >
                  <div className={`${MONO} text-sm text-[var(--color-gold)] pt-1`}>{String(i + 1).padStart(2, "0")}</div>

                  <div className="max-w-[62ch]">
                    <h3
                      className={`${DISPLAY} text-2xl sm:text-3xl font-semibold text-[var(--color-text-heading)] transition-colors duration-300 group-hover:text-[var(--color-gold-bright)]`}
                    >
                      {p.name}
                    </h3>
                    <p className={`${MONO} mt-4 text-sm leading-relaxed text-[var(--color-text-body)]`}>
                      {p.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span key={t} className={`${MONO} glass-legend text-[11px] text-[var(--color-green-term)]`}>
                          {t}
                        </span>
                      ))}
                    </div>
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${MONO} mt-5 inline-flex items-center gap-1.5 text-sm text-[var(--color-gold)] hover:text-[var(--color-gold-bright)] transition-colors duration-300`}
                      >
                        Open project
                        <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    )}
                  </div>

                  {/* Catalog tile: oversized serif monogram on glass */}
                  <div className="hidden md:block">
                    <div className="glass-card relative flex h-[220px] w-full items-center justify-center overflow-hidden transition-transform duration-500 group-hover:-translate-y-1.5">
                      <span
                        className={`${DISPLAY} relative z-10 text-[112px] font-semibold leading-none text-transparent`}
                        style={{
                          backgroundImage:
                            "linear-gradient(160deg, var(--color-gold-bright) 0%, var(--color-gold) 45%, transparent 130%)",
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                        }}
                      >
                        {p.name.charAt(0)}
                      </span>
                      <span className={`${MONO} absolute bottom-4 right-5 text-[10px] tracking-[0.25em] uppercase text-[var(--color-text-muted)]`}>
                        case study
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
              <div className="border-t border-[var(--color-border)]" />
            </div>

            {/* More work */}
            <motion.h3 className={`${MONO} mt-20 mb-2 text-xs tracking-[0.3em] uppercase text-[var(--color-gold)]`} {...fadeProps(reduce, 0)}>
              More work
            </motion.h3>
            <ul>
              {more.map((p, i) => (
                <motion.li key={p.id} {...fadeProps(reduce, 0.04 * i)}>
                  <a
                    href={p.url ?? "#work"}
                    target={p.url ? "_blank" : undefined}
                    rel={p.url ? "noopener noreferrer" : undefined}
                    className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-5 border-t border-[var(--color-border-subtle)] transition-colors duration-300 last:border-b last:border-[var(--color-border-subtle)]"
                  >
                    <span className={`${DISPLAY} w-56 shrink-0 text-lg font-semibold text-[var(--color-text-heading)] transition-colors duration-300 group-hover:text-[var(--color-gold-bright)]`}>
                      {p.name}
                    </span>
                    <span className={`${MONO} flex-1 text-[13px] leading-relaxed text-[var(--color-text-body)]`}>
                      {p.description}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-[var(--color-text-muted)] transition-all duration-300 group-hover:text-[var(--color-gold)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        {/* ══ CAPABILITIES ══ */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 border-t border-[var(--color-border)]">
          <div className="max-w-[1200px] mx-auto">
            <motion.p className={`${MONO} section-label mb-4`} {...fadeProps(reduce, 0)}>
              <span className="text-[var(--color-green-term)]">$</span> cat capabilities.txt
            </motion.p>
            <motion.h2
              className={`${DISPLAY} text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight gradient-text mb-16`}
              {...fadeProps(reduce, 0.06)}
            >
              What I work with
            </motion.h2>

            <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
              {CAPABILITIES.map((group, i) => (
                <motion.div key={group.title} {...fadeProps(reduce, 0.05 * i)}>
                  <h3 className={`${MONO} text-xs tracking-[0.3em] uppercase text-[var(--color-gold)] mb-4`}>
                    {group.title}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className={`${MONO} text-sm text-[var(--color-text-body)] flex items-baseline gap-3`}>
                        <span className="h-px w-4 shrink-0 translate-y-[-3px] bg-[var(--color-border-hover)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ OPERATING PRINCIPLES ══ */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 border-t border-[var(--color-border)]">
          <div className="max-w-[1200px] mx-auto">
            <motion.p className={`${MONO} section-label mb-4`} {...fadeProps(reduce, 0)}>
              <span className="text-[var(--color-green-term)]">$</span> cat principles.md
            </motion.p>
            <motion.h2
              className={`${DISPLAY} text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight gradient-text mb-16`}
              {...fadeProps(reduce, 0.06)}
            >
              Operating principles
            </motion.h2>

            <div className="grid sm:grid-cols-2 gap-x-16 gap-y-12">
              {profile.principles.map((principle, i) => (
                <motion.div key={principle.title} {...fadeProps(reduce, 0.05 * i)}>
                  <div className={`${MONO} text-xs text-[var(--color-gold)] mb-3`}>{String(i + 1).padStart(2, "0")}</div>
                  <h3 className={`${DISPLAY} text-xl font-semibold text-[var(--color-text-heading)] mb-3`}>
                    {principle.title}
                  </h3>
                  <p className={`${MONO} text-sm leading-relaxed text-[var(--color-text-body)]`}>{principle.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ SELECTED DECISIONS (ADR) ══ */}
        <section id="decisions" className="scroll-mt-24 px-4 sm:px-6 lg:px-8 py-24 border-t border-[var(--color-border)]">
          <div className="max-w-[1200px] mx-auto">
            <motion.p className={`${MONO} section-label mb-4`} {...fadeProps(reduce, 0)}>
              <span className="text-[var(--color-green-term)]">$</span> cat decisions/*.md
            </motion.p>
            <motion.h2
              className={`${DISPLAY} text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight gradient-text mb-4`}
              {...fadeProps(reduce, 0.06)}
            >
              Selected decisions
            </motion.h2>
            <motion.p
              className={`${MONO} text-[var(--color-text-body)] max-w-2xl mb-4 leading-relaxed`}
              {...fadeProps(reduce, 0.12)}
            >
              Architecture is judged by the calls that are expensive to reverse. Four of mine, with the cost left
              visible.
            </motion.p>

            <div>
              {decisions.map((d, i) => (
                <motion.article
                  key={d.id}
                  className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-10 py-10 border-t border-[var(--color-border)]"
                  {...fadeProps(reduce, 0.05 * i)}
                >
                  <div>
                    <div className={`${MONO} text-xs text-[var(--color-gold)]`}>{d.id}</div>
                    <div className={`${MONO} mt-1 text-[11px] text-[var(--color-text-muted)]`}>{d.domain}</div>
                  </div>
                  <div>
                    <h3 className={`${DISPLAY} text-xl sm:text-2xl font-semibold text-[var(--color-text-heading)]`}>
                      {d.title}
                    </h3>
                    <div className="mt-5 grid sm:grid-cols-2 gap-x-10 gap-y-5">
                      <div>
                        <div className={`${MONO} text-[10px] tracking-[0.25em] uppercase text-[var(--color-gold)] mb-1.5`}>
                          Context
                        </div>
                        <p className={`${MONO} text-sm leading-relaxed text-[var(--color-text-body)]`}>{d.context}</p>
                      </div>
                      <div>
                        <div className={`${MONO} text-[10px] tracking-[0.25em] uppercase text-[var(--color-gold)] mb-1.5`}>
                          Decision
                        </div>
                        <p className={`${MONO} text-sm leading-relaxed text-[var(--color-text-body)]`}>{d.decision}</p>
                      </div>
                      <div className="sm:col-span-2">
                        <div className={`${MONO} text-[10px] tracking-[0.25em] uppercase text-[var(--color-amber-dim)] mb-1.5`}>
                          Trade-off
                        </div>
                        <p className={`${MONO} text-sm leading-relaxed text-[var(--color-amber-dim)]`}>{d.tradeoff}</p>
                      </div>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {d.tags.map((t) => (
                        <span key={t} className={`${MONO} glass-legend text-[11px] text-[var(--color-green-term)]`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
              <div className="border-t border-[var(--color-border)]" />
            </div>
          </div>
        </section>

        {/* ══ TIMELINE ══ */}
        <section className="px-4 sm:px-6 lg:px-8 py-24 border-t border-[var(--color-border)]">
          <div className="max-w-[1200px] mx-auto">
            <motion.p className={`${MONO} section-label mb-4`} {...fadeProps(reduce, 0)}>
              <span className="text-[var(--color-green-term)]">$</span> git log --oneline career
            </motion.p>
            <motion.h2
              className={`${DISPLAY} text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight gradient-text mb-16`}
              {...fadeProps(reduce, 0.06)}
            >
              The road here
            </motion.h2>

            <div>
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  className="grid md:grid-cols-[220px_1fr] gap-2 md:gap-10 py-7 border-t border-[var(--color-border-subtle)] last:border-b last:border-[var(--color-border-subtle)]"
                  {...fadeProps(reduce, 0.05 * i)}
                >
                  <div className={`${MONO} text-sm text-[var(--color-amber-dim)]`}>
                    {exp.startDate} - {exp.endDate}
                  </div>
                  <div>
                    <h3 className={`${DISPLAY} text-xl font-semibold text-[var(--color-text-heading)]`}>{exp.role}</h3>
                    <p className={`${MONO} mt-1 text-sm text-[var(--color-gold)]`}>
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ TESTIMONIAL ══ */}
        {nash && (
          <section className="px-4 sm:px-6 lg:px-8 py-24 border-t border-[var(--color-border)]">
            <motion.blockquote className="max-w-4xl mx-auto relative" {...fadeProps(reduce, 0.05)}>
              <span
                aria-hidden
                className={`${DISPLAY} absolute -top-10 -left-2 sm:-left-6 text-8xl leading-none text-[var(--color-gold)] opacity-20 select-none`}
              >
                &ldquo;
              </span>
              <p className={`${DISPLAY} italic text-xl sm:text-2xl lg:text-3xl leading-snug text-[var(--color-amber-text)]`}>
                {nash.quote}
              </p>
              <footer className={`${MONO} mt-6 text-sm text-[var(--color-gold)]`}>
                {nash.name}, {nash.role} at {nash.company}
              </footer>
            </motion.blockquote>
          </section>
        )}

        {/* ══ CTA ══ */}
        <section className="px-4 sm:px-6 lg:px-8 py-28 border-t border-[var(--color-border)]">
          <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <motion.h2
              className={`${DISPLAY} text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15] pb-1 max-w-2xl text-[var(--color-text-heading)]`}
              {...fadeProps(reduce, 0.05)}
            >
              Let&apos;s build something that <em className="italic text-[var(--color-gold)]">holds up</em> in production.
            </motion.h2>
            <motion.div className="flex flex-col gap-4" {...fadeProps(reduce, 0.12)}>
              <a
                href={`mailto:${profile.email}`}
                className={`${MONO} inline-flex items-center justify-center gap-2.5 px-8 py-4 font-semibold rounded-lg border border-[var(--color-gold)] text-[var(--color-gold)] transition-all duration-300 hover:bg-[var(--color-gold-subtle)] hover:shadow-[0_0_24px_var(--color-gold-glow)]`}
              >
                <Mail size={16} />
                {profile.email}
              </a>
              <Link
                href="/resume"
                className={`${MONO} inline-flex items-center justify-center gap-2 text-sm text-[var(--color-green-term)] transition-colors duration-300 hover:text-[var(--color-green-term-dim)]`}
              >
                <span>$</span> open resume
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      {/* scroll target anchor for reduced-motion users */}
      <span id="work-anchor" className="sr-only" />
    </>
  );
}
