import type { Application } from "./schema";

export const exampleFinancialPlatform: Application = {
  slug: "senior-fullstack-fintech-singapore",
  company: {
    name: "NexPay Financial",
    website: "https://nexpayfinancial.example.com",
    location: "Singapore (Hybrid)",
    industry: "Fintech — Cross-Border Payments",
  },
  position: {
    title: "Senior Fullstack Engineer — Platform Team",
    department: "Engineering",
    type: "full-time",
    remote: true,
    salaryRange: "SGD 180K – 240K + equity",
  },
  source: {
    url: "https://linkedin.com/jobs/view/example",
    platform: "LinkedIn",
    dateFound: "2026-05-26",
  },
  application: {
    status: "draft",
    dateApplied: undefined,
    notes:
      "Strong fit — 10+ years fintech, payment gateway experience at Pepperstone/TitanFX, PCI-DSS compliance, React/Next.js/Node.js stack aligns perfectly.",
  },
  jobDescription: {
    summary:
      "NexPay Financial is building the next-generation cross-border payment infrastructure for Southeast Asia. We need a Senior Fullstack Engineer who can own the platform team's frontend and backend architecture, design payment flows that scale across 30+ markets, and mentor mid-level engineers. You will work on transaction processing pipelines, merchant dashboards, and real-time reconciliation systems.",
    responsibilities: [
      "Design and implement scalable payment processing pipelines handling 10K+ TPS",
      "Build and maintain merchant-facing dashboards with React/Next.js",
      "Architect RESTful and WebSocket APIs with Node.js/NestJS",
      "Optimize PostgreSQL queries for financial reporting and reconciliation",
      "Ensure PCI-DSS compliance across all payment flows",
      "Mentor 3–5 mid-level engineers through code reviews and architecture discussions",
      "Collaborate with product and compliance teams on regulatory requirements",
      "Contribute to containerized deployments using Docker and Kubernetes",
    ],
    requirements: [
      { skill: "React / Next.js", importance: "required" },
      { skill: "TypeScript", importance: "required" },
      { skill: "Node.js (NestJS or Express)", importance: "required" },
      { skill: "PostgreSQL (schema design, query optimization)", importance: "required" },
      { skill: "Docker / containerization", importance: "required" },
      { skill: "Payment gateway integration experience", importance: "required" },
      { skill: "Microservices architecture", importance: "preferred" },
      { skill: "Kubernetes / orchestration", importance: "preferred" },
      { skill: "PCI-DSS compliance knowledge", importance: "preferred" },
      { skill: "Real-time systems (WebSocket, ZeroMQ)", importance: "bonus" },
      { skill: "Event-driven architecture (Kafka, RabbitMQ)", importance: "bonus" },
    ],
    niceToHave: [
      "Experience with multi-region financial systems",
      "Knowledge of forex / trading platforms",
      "Open source contributions to fintech projects",
    ],
  },
  tailoring: {
    emphasizeSkills: [
      "React / Next.js — 10+ years shipping production apps",
      "TypeScript — branded types, exhaustive matching patterns",
      "Node.js / NestJS — payment gateway backend architecture",
      "PostgreSQL — partial indexes, JSONB vs relational, 50M-row tables",
      "Payment gateways — Pepperstone, TitanFX, BaxiaMarkets integrations",
      "PCI-DSS — full compliance from Wirecard days through current projects",
      "Docker — multi-stage builds, 80% image size reduction",
    ],
    highlightProjects: [
      "CrosSyncOrder — Forex trade sync SaaS with WebSocket + ZeroMQ + K8s",
      "BaxiaMarkets — Financial services trading infrastructure platform",
      "Srabutan.com — Marketplace with AI matching, real-time, secure payments",
    ],
    customSummary:
      "Senior fullstack architect with 10+ years building high-performance fintech platforms across Southeast Asia. Deep expertise in React, Next.js, TypeScript, Node.js, NestJS, and PostgreSQL powering payment gateways that process transactions across 69 countries. Proven track record architecting PCI-DSS compliant systems at Wirecard, Pepperstone, and TitanFX — from real-time trading infrastructure at CrosSyncOrder to merchant payment flows at BaxiaMarkets.",
    keyAchievements: [
      "Architected payment gateway integrations for 14,000+ corporate clients across 69 countries at Wirecard",
      "Built CrosSyncOrder — forex trade synchronization platform handling real-time WebSocket streams at scale",
      "Reduced Docker images by 81% using multi-stage builds for fintech microservices",
      "Drove PCI-DSS compliance across all payment implementations from Wirecard through current projects",
    ],
    coverLetterHook:
      "I've spent the last decade building exactly the kind of payment infrastructure NexPay is scaling — from integrating Wirecard's Prisma Gateway for 14K+ corporate clients across 69 countries, to architecting real-time trade synchronization systems at CrosSyncOrder. When I saw the Senior Fullstack role on the Platform Team, it felt like reading my own career trajectory.",
  },
  contact: {
    name: "Alicia Tan",
    title: "Engineering Recruiter — Platform Team",
    email: "alicia.tan@nexpayfinancial.example.com",
    linkedIn: "https://linkedin.com/in/alicia-tan-example",
  },
};
