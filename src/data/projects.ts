export interface Project {
  id: string;
  name: string;
  description: string;
  /** Short blurb for the resume page (falls back to description when absent). */
  short?: string;
  /** One-line architecture decision shown on the resume (optional). */
  decision?: string;
  tech: string[];
  url?: string;
  /** Internal landing page for this project. */
  landing?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "dharmakarsa",
    name: "Dharmakarsa",
    description:
      "Agentic commerce & operations OS: multi-tenant storefront and admin, one API gateway, agent access through MCP/UCP/ACP/REST, deterministic tool policy with approval inbox and change sets, tenant config and runtime themes, plus rental booking and evidence modules. First deployment: Toko Vavelle.",
    short:
      "Agentic commerce OS: multi-tenant storefront, admin, API gateway, agent tool policy and approvals, rental and evidence modules.",
    decision:
      "Keep agents off the critical path: manual checkout and admin must keep working when the model or agent is down.",
    tech: ["Cloudflare Workers", "Hono", "D1", "R2", "KV", "Astro", "MCP", "TypeScript"],
    url: "/dharmakarsa",
    landing: "/dharmakarsa",
    featured: true,
  },
  {
    id: "mallops-suite",
    name: "MallOps Suite",
    description: "Mall operations ERP on Odoo 19 Community built end-to-end: leasing contracts with state machine, automated monthly billing (rent + service charge + IoT meter readings), staged payment reminders, DOKU VA/QRIS payments with signed idempotent webhooks, 18-endpoint REST API hub with scoped API keys and rate limiting, Astro tenant portal with per-tenant login tokens, Telegram ops bot, procurement-to-PO flow, and DJP-format e-Faktur XML export. 60+ tests green on fresh databases; documented engineering log of 27 real debugging lessons.",
    short: "Mall operations ERP on Odoo 19: leasing contracts, automated billing with IoT meter readings, DOKU VA/QRIS payments with signed webhooks, 18-endpoint API hub, Telegram ops bot. 60+ tests green on fresh databases.",
    decision: "Build on Odoo 19 for the accounting and invoicing core; custom code only where it differentiates.",
    tech: ["Odoo 19", "Python", "PostgreSQL", "Astro", "React", "REST API", "Telegram Bot API"],
    url: "https://github.com/cryptorichyrich/mallops-showcase",
    landing: "/mallops",
    featured: true,
  },
  {
    id: "mallops-leasing",
    name: "MallOps Leasing & Billing",
    description: "Odoo 19 leasing engine for malls and office towers: unit and tenant registry, contract state machine with overlap guards, automated monthly invoicing (rent, service charge, metered utilities) with prorata, yearly rent escalation and rent-free windows, staged reminders with auto penalties, and contract, aging and occupancy PDF reports.",
    tech: ["Odoo 19", "Python", "PostgreSQL", "QWeb"],
    url: "https://github.com/cryptorichyrich/mallops-showcase",
    featured: true,
  },
  {
    id: "mallops-api-hub",
    name: "MallOps API Hub",
    description: "REST API hub exposing 18 endpoints over the ERP: scoped API keys, per-key rate limiting, full request logging, maintenance ticket workflows, IoT meter push, and a tenant-scoped portal API where cross-tenant access returns 404 by design.",
    tech: ["Odoo 19", "Python", "REST API", "HMAC"],
    url: "https://github.com/cryptorichyrich/mallops-showcase",
    featured: true,
  },
  {
    id: "mallops-payments",
    name: "MallOps Payments (DOKU)",
    description: "DOKU payment integration for Indonesian VA and QRIS: transaction state machine, signed idempotent webhooks, automatic invoice reconciliation, mock mode for offline demos and a sandbox mode verified against the real DOKU API.",
    tech: ["Odoo 19", "Python", "DOKU API", "Webhooks"],
    url: "https://github.com/cryptorichyrich/mallops-showcase",
    featured: true,
  },
  {
    id: "mallops-portal",
    name: "MallOps Tenant Portal",
    description: "Tenant self-service portal on Astro 5 SSR with React islands and skeleton loading: per-tenant login tokens, invoice list with payment initiation, maintenance ticket creation, and a server-side proxy that keeps API keys and tokens out of the browser. Cookie sessions are httpOnly with SameSite protection.",
    tech: ["Astro", "React", "TypeScript", "SSR"],
    url: "https://github.com/cryptorichyrich/mallops-showcase/tree/main/satellites/tenant-portal",
    featured: true,
  },
  {
    id: "mallops-iot-meters",
    name: "MallOps IoT Meter Gateway",
    description: "IoT meter gateway for tenant utilities: push API for sub-meter readings, an ESP32 firmware sketch (Modbus RS485 and pulse input) and a Python simulator. Readings flow into monthly billing automatically, with a guard that rejects backward meter pushes.",
    tech: ["ESP32", "Python", "Modbus", "Odoo 19"],
    url: "https://github.com/cryptorichyrich/mallops-showcase/tree/main/satellites/iot-gateway",
    featured: true,
  },
  {
    id: "mallops-ops-bot",
    name: "MallOps Telegram Ops Bot",
    description: "Telegram operations bot for mall staff: occupancy, revenue, overdue invoices and expiring contracts on demand, with chat allowlisting and a dry-run mode for offline demonstration.",
    tech: ["Python", "Telegram Bot API"],
    url: "https://github.com/cryptorichyrich/mallops-showcase/tree/main/satellites/telegram-bot",
    featured: true,
  },
  {
    id: "mallops-procurement-efaktur",
    name: "MallOps Procurement & e-Faktur",
    description: "Procurement and Indonesian tax compliance for the ERP: purchase requests with tiered approval that generate per-vendor PO drafts automatically, plus a DJP-shape e-Faktur export with 16-digit NSFP uniqueness, selling and buying NPWP validation, and per-line details.",
    tech: ["Odoo 19", "Python", "e-Faktur", "XML"],
    url: "https://github.com/cryptorichyrich/mallops-showcase",
    featured: true,
  },
  {
    id: "mallops-parking",
    name: "MallOps Parking",
    description: "Indonesian parking operations system (Secure-Parking-style) on Odoo 19: progressive tariff engine with grace windows and daily caps, gate flow with idempotent exit confirmation, five entry modes (paper ticket, QR, member smartcard, bank e-money tap like Flazz, ticketless LPR), QRIS and auto-debit payments with minimum-balance guards, tenant validation vouchers with monthly quota and chargeback reporting, monthly members with automated invoicing, cashier shifts with variance detection, and a real-time SISA availability board fed by per-slot bay sensors or loop counters. ESP32 firmware sketches and an API simulator reproduce the production device path.",
    tech: ["Odoo 19", "Python", "IoT Sensors", "ESP32", "REST API", "PostgreSQL"],
    url: "https://github.com/cryptorichyrich/mallops-showcase",
    featured: true,
  },
  {
    id: "toko-vavelle",
    name: "Toko Vavelle",
    description: "Vietnam Coffee E-Commerce platform built with AstroJS, Tailwind, and SEO-optimized architecture. Features automated AI image generation pipeline for commercial product photography.",
    tech: ["AstroJS", "Tailwind", "SEO", "fal.ai", "Nano Banana"],
    landing: "/works/tokovavelle",
    featured: true,
  },
  {
    id: "vavelle-crispy-pork",
    name: "Vavelle Crispy Pork Belly",
    description: "E-commerce storefront for premium crispy pork belly products, featuring an automated AI image generation pipeline (fal.ai, Nano Banana) for commercial-quality product photography at scale.",
    tech: ["AstroJS", "Tailwind", "fal.ai", "Nano Banana", "Python"],
    landing: "/works/tokovavelle",
    featured: true,
  },
  {
    id: "travel-bali",
    name: "Travel To Bali Paradise",
    description:
      "Bali tourism site (traveltobaliparadise.com) with curated tour packages, vehicle rentals, destination pages and a blog. Package pricing is published in USD and IDR, and every booking path funnels into a tracked WhatsApp handoff instead of an abandoned form. Astro 5 static output with Tailwind.",
    tech: ["Astro 5", "Tailwind", "GA4", "WhatsApp API"],
    url: "https://traveltobaliparadise.com",
    landing: "/works/travel-bali",
    featured: true,
  },
  {
    id: "crossyncorder",
    name: "CrosSyncOrder",
    description: "Forex trade synchronization SaaS platform with real-time WebSocket communication, ZeroMQ messaging, and Kubernetes orchestration.",
    short: "Real-time forex trade synchronization across MetaTrader 4/5 and cTrader with WebSocket and ZeroMQ messaging, containerized with Docker.",
    tech: ["Node.js", "Express", "WebSocket", "ZeroMQ", "Docker", "K8s"],
    featured: true,
  },
  {
    id: "baxiamarkets",
    name: "BaxiaMarkets",
    description: "Financial services platform delivering trading infrastructure with WordPress, Laravel, React, and Vue for a seamless client experience.",
    tech: ["WordPress", "Laravel", "React", "Vue"],
    featured: true,
  },
  {
    id: "beligih",
    name: "Beligih",
    description:
      "E-commerce platform for Indonesian micro-businesses: free storefront, no-code builder, payments, shipping, and transactional email. Built for owners who need to sell online without hiring a developer.",
    short:
      "E-commerce SaaS for UMKM: free storefront, no-code setup, payments, shipping, and transactional email.",
    tech: ["Next.js", "Supabase", "Cloudflare Workers", "Xendit", "Everpro"],
    url: "https://beligih.id",
    landing: "/works/beligih",
    featured: true,
  },
  {
    id: "srabutan",
    name: "Srabutan.com",
    description: "Indonesia's next freelance marketplace: full-stack platform with AI-powered matching, real-time collaboration, and secure payments.",
    short: "Indonesia's freelance marketplace, built from zero: AI-powered matching, real-time collaboration, secure payments, and full CI/CD with Docker.",
    decision: "Keep payments white-label through Xendit's Payment Request API; shift provider risk, never redirect buyers.",
    tech: ["React", "Vue", "Python", "Docker"],
    landing: "/works/srabutan",
    featured: true,
  },
  {
    id: "umkm-st-servatius",
    name: "UMKM St. Servatius",
    description: "Community commerce platform for a parish micro-business ecosystem (umkm.servatius.id): business directory with multi-role verification workflow, tender and bazar management with a 3-layer contribution guard (UI, consent checkbox, database RLS), and paper SOP forms digitized into auto-numbered PDF permits with digital signatures. 68 static pages hardened with Row-Level Security across 25 SQL migrations.",
    short: "Community commerce platform: multi-role verification, tender and bazar management, digitized permits with digital signatures, Row-Level Security across 68 pages.",
    tech: ["Astro", "React", "TypeScript", "Supabase", "PostgreSQL"],
    url: "https://umkm.servatius.id",
    landing: "/works/umkm-st-servatius",
    featured: true,
  },
  {
    id: "healer-path",
    name: "Healer Path",
    description: "Personal coaching brand site (healerpath.id) for a counselor and healer: service catalogue, blog, and testimonials with editorial typography. Built on Jekyll static output with a git-based CMS so the non-technical owner edits all content through a friendly admin UI, deployed to the edge on Cloudflare Pages.",
    tech: ["Jekyll", "Pages CMS", "Cloudflare Pages"],
    url: "https://healerpath.id",
    landing: "/works/healer-path",
    featured: false,
  },
  {
    id: "damai-kasih",
    name: "Damai Kasih Channel",
    description: "Religious digital platform for community engagement and content distribution, built with Jekyll and vanilla JavaScript.",
    tech: ["Jekyll", "JavaScript"],
    featured: false,
  },
  {
    id: "vavelle-ai-chat",
    name: "Vavelle AI Chat Interface",
    description: "AI-powered chat application with real-time streaming responses using React, Tailwind, and Groq API integration.",
    tech: ["React", "Tailwind", "Groq"],
    featured: false,
  },
  {
    id: "sales-dashboard",
    name: "Sales Dashboard",
    description: "AI-powered analytics dashboard with FastAPI backend, Next.js frontend, and Gemini AI for intelligent sales insights.",
    tech: ["FastAPI", "Next.js", "Gemini AI"],
    featured: false,
  },
];
