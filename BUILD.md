# BioTama Next.js Personal Branding Website — Build Specification

Build a stunning, static personal branding website for **Bio Lumbantoruan** — a System Architect & Fintech Engineer. The site must be production-quality, visually impressive, and fully static (SSG/ISR only, no server runtime).

## Design System

**Style:** Monochrome + Blue Accent (Swiss Modernism inspired)
**Pattern:** Portfolio Grid — Hero, Project Grid, About, Contact

### Colors (CSS Variables)
```css
:root {
  --color-primary: #18181B;
  --color-on-primary: #FFFFFF;
  --color-secondary: #3F3F46;
  --color-accent: #2563EB;
  --color-background: #FAFAFA;
  --color-foreground: #09090B;
  --color-muted: #E8ECF0;
  --color-border: #E4E4E7;
  --color-destructive: #DC2626;
  --color-ring: #18181B;
  --color-card: #FFFFFF;
  --color-card-foreground: #09090B;
}
```

### Typography
- **Headings:** Inter (700, 800, 900 weights)
- **Body:** Inter (400, 500, 600 weights)
- **Monospace:** JetBrains Mono (for code snippets in blog)
- Base: 16px, line-height 1.6

### Spacing & Layout
- Max content width: 1200px
- Section padding: 96px vertical (64px mobile)
- Card border-radius: 12px
- Gap: 24px grid gap

## Pages & Sections

### 1. Home Page (`/`) — Single-page layout with smooth scroll

**Hero Section:**
- Full viewport height, dark background (#18181B)
- Name: "Bio Lumbantoruan" in large bold type
- Role: "System Architect · Fintech Engineer"
- Tagline: "I design systems that move money, connect markets, and scale under pressure."
- Two CTAs: "See My Work" (scrolls to projects) + "Download Resume" (link to /resume)
- Subtle grid/dot pattern background animation
- Animated text reveal on load

**About Section:**
- Professional photo placeholder (circle, 200px)
- Bio text:
  "Over the past decade, I've built everything from PCI-DSS compliant payment gateways to full-stack fintech platforms for brands like Pepperstone and TitanFX. Currently architecting Srabutan, Indonesia's next freelance marketplace, from the ground up."
- Key metrics in cards: "10+ Years", "14,000+ Corporate Clients", "69 Countries Served", "20+ Projects"
- Tech stack icons row

**Experience Section:**
- Timeline layout (vertical line with dots)
- Each job card: role, company, date range, bullet points, tech tags

  1. **System Design & Architect** — Srabutan.com (Jan 2026 – Present)
     - Architected AI-powered matching system for freelance marketplace
     - Designed scalable microservices: portfolio management, real-time collaboration, secure payments
     - Led full-stack development with GitHub Actions, Docker, DigitalOcean
     - Tech: React, Vue, JavaScript, Tailwind, Docker, Python, DigitalOcean

  2. **Senior Web Developer** — CITT Services, Dallas USA (Jan 2014 – Dec 2025)
     - Delivered consulting for Pepperstone, TitanFX, BaxiaMarkets, Funded Prop BX, Traderscolo, Liquidity Connect
     - Built web apps with React, Vue, WordPress, Laravel, HubSpot CMS
     - Architected backend systems, automated data sync with n8n, Python, Flask
     - Docker deployment on DigitalOcean & Google Cloud
     - Tech: Ubuntu, React, PHP, WordPress, Laravel, Vue, Docker, n8n, Python, DigitalOcean

  3. **Host Integrator** — Wirecard, Jakarta (Aug 2011 – Dec 2013)
     - Engineered payment gateway integrations at PT. Aprisma Indonesia (Wirecard subsidiary)
     - Connected Prisma Gateway with banking systems for 14,000+ corporate clients across 69 countries
     - PCI-DSS compliance across all payment implementations
     - Tech: Java, HTML5, CSS3, Spring, Spring Boot, Hibernate

**Projects Section:**
- Grid of project cards (3 columns desktop, 2 tablet, 1 mobile)
- Each card: name, description excerpt, tech tags, link
- Hover effect: lift + accent border
- Featured projects (top 6):

  1. **Toko Vavelle** — Vietnam Coffee E-Commerce (AstroJS, Tailwind, SEO)
  2. **Vavelle Crispy Pork Belly** — E-commerce (AstroJS, Tailwind)
  3. **Travel to Bali Paradise** — Travel & Booking (AstroJS, Tailwind)
  4. **CrosSyncOrder** — Forex Trade Sync SaaS (Node.js, Express, WebSocket, ZeroMQ, Docker, K8s)
  5. **BaxiaMarkets** — Financial Services Platform (WordPress, Laravel, React, Vue)
  6. **Srabutan.com** — Freelance Marketplace (React, Vue, Python, Docker)
  7. **Damai Kasih Channel** — Religious Digital Platform (Jekyll, JS)
  8. **Vavelle AI Chat Interface** — AI Chat App (React, Tailwind, Groq)
  9. **Sales Dashboard** — AI Dashboard (FastAPI, Next.js, Gemini AI)

**Skills Section:**
- Categorized skill groups with progress indicators:
  - Frontend: React (5), TypeScript, Vue, Astro, Tailwind, Next.js
  - Backend: Node.js (5), FastAPI (4), Express, NestJS, GraphQL, Python
  - Full-Stack: Next.js, Laravel, Java/Spring, PHP
  - Infrastructure: Docker (3), K8s (2), GitHub Actions (4), DigitalOcean
  - CMS: WordPress, HubSpot, Jekyll
  - Agentic AI: Hermes, OpenClaw, OpenWork

**Testimonials Section:**
- Carousel/slider with quotes:
  1. **Nash Wadud** (CEO, CITT Services): "Bio consistently delivers exceptional technical solutions..."
  2. **Hannah Rivera** (COO, CITT Services): "I've worked closely with Bio and have been consistently impressed..."
  3. **Nadiya Alistika** (Colleague, CITT Services): "Working alongside Bio has been an incredible professional experience..."
  4. **Dhruv Sangvikar** (Colleague, CITT Services): "Bio's commitment to technological excellence..."

**Blog Section:**
- Grid of blog post cards (latest 6)
- Each card: title, description, date, tags, image placeholder
- "View All Posts" link to /blog

Blog posts (latest first):
  1. "Financial Audit Logs: What to Record and What Regulators Want" — May 27, 2026
  2. "PostgreSQL Partial Indexes Cut My Query Time by 60%" — May 27, 2026
  3. "Coding Agents Won't Replace You. They'll Change Your Job." — May 27, 2026
  4. "Why AI Agents Need Code Knowledge Graphs" — May 26, 2026
  5. "MCP Explained: How Hermes Reads Your Entire Codebase" — May 26, 2026
  6. "Rate Limiting a Payment Gateway in Production" — May 26, 2026

**Contact Section:**
- Email: fxwisdom1@gmail.com
- Phone: +62 813 9825 3186
- Location: Jakarta, Indonesia
- Links: LinkedIn, GitHub, Twitter/X, Facebook
- Simple contact form (static — just UI, no backend needed)

**Footer:**
- Copyright © 2026 Bio Lumbantoruan
- Built with Next.js
- Social links

### 2. Blog Page (`/blog`)
- Full blog listing with all 17 posts
- Filter by tags
- Each post card: title, description, date, tags, read more link

### 3. Blog Post Page (`/blog/[slug]`)
- Full article content (use placeholder content for now — just the intro paragraphs from the frontmatter)
- Author: Bio Lumbantoruan
- Related posts at bottom
- Back to blog link

### 4. Resume Page (`/resume`)
- Clean printable resume layout
- Same data as home page but in traditional resume format
- Print-friendly CSS (@media print)

## Technical Requirements

1. **Next.js 15** with App Router
2. **Static export** (`output: 'export'` in next.config.ts)
3. **Tailwind CSS v4** for styling
4. **TypeScript** strict mode
5. **Responsive:** 375px, 768px, 1024px, 1440px breakpoints
6. **Animations:** Framer Motion for scroll animations, text reveals
7. **Icons:** Lucide React (NO emojis as icons)
8. **Dark mode:** Toggle (dark = default hero, light = content sections)
9. **Performance:** Lighthouse 90+ on all metrics
10. **SEO:** Proper meta tags, Open Graph, structured data (JSON-LD Person schema)

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata
│   ├── page.tsx            # Home page (all sections)
│   ├── globals.css         # CSS variables + Tailwind
│   ├── blog/
│   │   ├── page.tsx        # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx    # Individual blog post
│   └── resume/
│       └── page.tsx        # Printable resume
├── components/
│   ├── hero.tsx
│   ├── about.tsx
│   ├── experience.tsx
│   ├── projects.tsx
│   ├── skills.tsx
│   ├── testimonials.tsx
│   ├── blog-preview.tsx
│   ├── contact.tsx
│   ├── footer.tsx
│   ├── navbar.tsx          # Sticky nav with section links
│   └── section-heading.tsx # Reusable section title component
├── data/
│   ├── profile.ts          # All personal data
│   ├── experience.ts       # Work experience
│   ├── projects.ts         # Portfolio projects
│   ├── skills.ts           # Skills grouped
│   ├── testimonials.ts     # Testimonials
│   └── blog-posts.ts       # Blog post metadata + content
└── lib/
    └── utils.ts            # Utility functions
```

## Key UX Rules

- cursor-pointer on ALL clickable elements
- Hover states with smooth transitions (200ms ease)
- Focus rings visible (2px accent ring) for keyboard navigation
- prefers-reduced-motion respected
- No horizontal scroll on mobile
- Smooth scroll for section navigation
- Sticky navbar that changes background on scroll (transparent → solid)

## DO NOT:
- Use emojis as icons
- Use placeholder/lorem ipsum content — use real data from above
- Add any server-side features (must be fully static)
- Use any paid services or APIs
- Include real phone/email in page metadata (only in visible content)

Build this COMPLETE website. Every component, every page, every data file. Make it look premium and production-ready.
