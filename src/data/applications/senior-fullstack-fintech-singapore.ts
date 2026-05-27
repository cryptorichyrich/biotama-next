import type { Application } from "./schema";

export const applicationsenior_fullstack_fintech_singapore: Application = {
  slug: 'senior-fullstack-fintech-singapore',
  company: {
    name: 'NexPay Financial',
    website: 'https://nexpayfinancial.example.com',
    logo: "",
    location: 'Singapore (Hybrid)',
    industry: 'Fintech — Cross-Border Payments',
  },
  position: {
    title: 'Senior Fullstack Engineer — Platform Team',
    department: 'Engineering',
    type: 'full-time',
    remote: true,
    salaryRange: 'SGD 180K – 240K + equity',
  },
  source: {
    url: 'https://linkedin.com/jobs/view/example',
    platform: 'LinkedIn',
    dateFound: '2026-05-26',
  },
  application: {
    status: 'draft',
    dateApplied: "",
    notes: 'Strong fit — 10+ years fintech, payment gateway experience at Pepperstone/TitanFX, PCI-DSS compliance, React/Next.js/Node.js stack aligns perfectly.',
  },
  jobDescription: {
    summary: 'NexPay Financial is building the next-generation cross-border payment infrastructure for Southeast Asia. We need a Senior Fullstack Engineer who can own the platform team frontend and backend architecture.',
    responsibilities: [
  "Design and implement scalable payment processing pipelines handling 10K+ TPS",
  "Build and maintain merchant-facing dashboards with React/Next.js",
  "Architect RESTful and WebSocket APIs with Node.js/NestJS",
  "Optimize PostgreSQL queries for financial reporting and reconciliation",
  "Ensure PCI-DSS compliance across all payment flows",
  "Mentor 3\u20135 mid-level engineers through code reviews and architecture discussions"
],
    requirements: [
    {
        "skill": "React / Next.js",
        "importance": "required"
    },
    {
        "skill": "TypeScript",
        "importance": "required"
    },
    {
        "skill": "Node.js (NestJS or Express)",
        "importance": "required"
    },
    {
        "skill": "PostgreSQL",
        "importance": "required"
    },
    {
        "skill": "Docker / containerization",
        "importance": "required"
    },
    {
        "skill": "Payment gateway integration",
        "importance": "required"
    },
    {
        "skill": "Microservices architecture",
        "importance": "preferred"
    },
    {
        "skill": "Kubernetes",
        "importance": "preferred"
    },
    {
        "skill": "PCI-DSS compliance",
        "importance": "preferred"
    },
    {
        "skill": "Real-time systems (WebSocket, ZeroMQ)",
        "importance": "bonus"
    },
    {
        "skill": "Event-driven architecture (Kafka, RabbitMQ)",
        "importance": "bonus"
    }
],
    niceToHave: [
  "Multi-region financial systems",
  "Forex / trading platforms",
  "Open source fintech projects"
],
  },
  tailoring: {
    emphasizeSkills: [
  "React / Next.js \u2014 10+ years shipping production apps",
  "TypeScript \u2014 branded types, exhaustive matching patterns",
  "Node.js / NestJS \u2014 payment gateway backend architecture",
  "PostgreSQL \u2014 partial indexes, JSONB vs relational, 50M-row tables",
  "Payment gateways \u2014 Pepperstone, TitanFX, BaxiaMarkets integrations",
  "PCI-DSS \u2014 full compliance from Wirecard days through current projects",
  "Docker \u2014 multi-stage builds, 80% image size reduction"
],
    highlightProjects: [
  "CrosSyncOrder \u2014 Forex trade sync SaaS with WebSocket + ZeroMQ + K8s",
  "BaxiaMarkets \u2014 Financial services trading infrastructure platform",
  "Srabutan.com \u2014 Marketplace with AI matching, real-time, secure payments"
],
    customSummary: 'Senior fullstack architect with 10+ years building high-performance fintech platforms across Southeast Asia. Deep expertise in React, Next.js, TypeScript, Node.js, NestJS, and PostgreSQL powering payment gateways that process transactions across 69 countries. Proven track record architecting PCI-DSS compliant systems at Wirecard, Pepperstone, and TitanFX.',
    keyAchievements: [
  "Architected payment gateway integrations for 14,000+ corporate clients across 69 countries at Wirecard",
  "Built CrosSyncOrder \u2014 forex trade synchronization platform handling real-time WebSocket streams at scale",
  "Reduced Docker images by 81% using multi-stage builds for fintech microservices",
  "Drove PCI-DSS compliance across all payment implementations from Wirecard through current projects"
],
    coverLetterHook: 'I have spent the last decade building exactly the kind of payment infrastructure NexPay is scaling — from integrating Wirecard Prisma Gateway for 14K+ corporate clients across 69 countries, to architecting real-time trade synchronization systems at CrosSyncOrder.',
  },
  contact: {
    name: 'Alicia Tan',
    title: 'Engineering Recruiter — Platform Team',
    email: 'alicia.tan@nexpayfinancial.example.com',
    linkedIn: 'https://linkedin.com/in/alicia-tan-example',
  },
};