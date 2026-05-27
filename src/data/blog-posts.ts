export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "financial-audit-logs",
    title: "Financial Audit Logs: What to Record and What Regulators Want",
    description:
      "A practical guide to building audit logging systems that satisfy PCI-DSS, SOC 2, and regional banking regulations without over-engineering.",
    date: "2026-05-27",
    tags: ["Fintech", "Security", "Compliance"],
    content: `# Financial Audit Logs: What to Record and What Regulators Want

Building financial software means living under a microscope. Every transaction, every access attempt, every configuration change — regulators expect a complete, tamper-proof record. After years of PCI-DSS compliance work, here's what I've learned about audit logging that actually satisfies auditors.

## The Immutable Foundation

At the core of any financial audit system is immutability. Once a log entry is written, it must never change. No updates, no deletes, no soft-deletes. Append-only is the only acceptable pattern. This sounds simple, but implementing it correctly across distributed systems requires careful thought about partition tolerance and consistency guarantees.

## What Regulators Actually Look For

Regulators care about three things: who did what, when they did it, and whether the system detected anything unusual. They don't care about your fancy log aggregation pipeline — they want to see that you capture authentication events, authorization decisions, data modifications, and access to sensitive fields. Every write to a financial record needs a before-and-after snapshot. Every failed login needs a timestamp and source IP.

## Designing for Scale

The challenge isn't capturing logs — it's capturing them without degrading transaction throughput. Financial systems often need to process thousands of transactions per second while recording every state change. The solution is async logging with bounded buffers and backpressure. If the logging pipeline falls behind, the system must degrade gracefully — slowing transactions rather than losing audit records.

In practice, I've found that a well-tuned PostgreSQL with append-only tables and strategic partitioning handles audit workloads far better than specialized solutions for most teams. Add a materialized view for query performance and you've got a system that satisfies both auditors and engineers.`,
  },
  {
    slug: "postgresql-partial-indexes",
    title: "PostgreSQL Partial Indexes Cut My Query Time by 60%",
    description:
      "How a single partial index reduced query latency on a 50M-row payments table and what I learned about PostgreSQL query planning along the way.",
    date: "2026-05-27",
    tags: ["Database", "PostgreSQL", "Performance"],
    content: `# PostgreSQL Partial Indexes Cut My Query Time by 60%

The payments table had crossed 50 million rows. Our dashboard queries for pending transactions were taking 2.3 seconds on average during peak hours. The obvious fix — adding an index on the status column — helped, but only brought it down to 1.1 seconds. The real breakthrough came from a partial index.

## The Problem

We were indexing rows we never queried. Completed transactions make up 94% of the table, but our dashboard only ever queries pending, processing, and failed transactions. A full index on \`status\` was maintaining entries for 47 million rows we never touched in these queries.

## The Partial Index

\`\`\`sql
CREATE INDEX idx_payments_pending_status
ON payments (status, created_at)
WHERE status IN ('pending', 'processing', 'failed');
\`\`\`

This index only covers about 3 million rows — 6% of the table. It's smaller, faster to scan, and stays hot in memory. Query time dropped to 380ms average.

## What I Learned About Query Planning

PostgreSQL's query planner is smart enough to use partial indexes when your WHERE clause matches the index condition exactly or is a subset of it. But it won't use a partial index for queries that could potentially need rows outside the index — even if you know they don't. You need to match the predicate precisely.

The lesson: before adding another full-table index, ask whether you're indexing data you'll never query. Partial indexes are one of PostgreSQL's most underutilized features, and they consistently deliver outsized returns for the minimal effort they require.`,
  },
  {
    slug: "coding-agents-wont-replace-you",
    title: "Coding Agents Won't Replace You. They'll Change Your Job.",
    description:
      "A nuanced take on AI coding agents — what they're genuinely good at, where they fail, and how senior engineers should adapt their workflow.",
    date: "2026-05-27",
    tags: ["AI", "Engineering", "Career"],
    content: `# Coding Agents Won't Replace You. They'll Change Your Job.

The panic cycle around AI coding tools has been something to watch. Every week, another blog post declares the end of software engineering. But after spending significant time with tools like Hermes, Claude Code, and Cursor, I've reached a more nuanced conclusion: these tools are genuinely transformative, but they don't replace engineering judgment — they amplify it.

## What They're Genuinely Good At

Coding agents excel at tasks with clear specifications and bounded scope. Writing CRUD endpoints, generating test cases, converting between frameworks, scaffolding projects — these are the tasks where agents can save hours of tedious work. They're also surprisingly good at explaining unfamiliar codebases and suggesting architectural patterns you might not have considered.

## Where They Fail

The failures are instructive. Agents struggle with context that spans more than a few files. They make plausible-looking but incorrect assumptions about business logic. They generate code that passes tests but fails in production because they don't understand deployment environments, rate limits, or real-world edge cases. They can't ask the clarifying questions that prevent you from building the wrong thing.

## How to Adapt

The senior engineer of 2026 doesn't spend less time thinking — they spend less time typing. The skill shifts from writing code to specifying behavior, from debugging syntax to debugging logic, from implementing patterns to choosing which patterns to implement. Code review becomes more important, not less. System design becomes the differentiator, not implementation speed.

What won't change: understanding trade-offs, anticipating failure modes, and knowing when something is good enough to ship. Agents accelerate the path from idea to implementation, but they don't shorten the path from implementation to correct implementation. That still requires the kind of judgment that only comes from building systems that break in production and fixing them at 3 AM.`,
  },
  {
    slug: "ai-agents-code-knowledge-graphs",
    title: "Why AI Agents Need Code Knowledge Graphs",
    description:
      "Exploring how code knowledge graphs give AI agents structured understanding of large codebases, enabling better navigation, refactoring, and context-aware reasoning.",
    date: "2026-05-26",
    tags: ["AI", "Architecture", "Developer Tools"],
    content: `# Why AI Agents Need Code Knowledge Graphs

Modern codebases are too large for any single context window. Even with 1M+ token contexts becoming available, dumping your entire codebase into an LLM is both expensive and ineffective. The solution emerging across the industry is code knowledge graphs — structured representations of code that AI agents can navigate like a map.

## The Context Problem

An LLM with a 1M token context window can technically hold a mid-size codebase. But the quality of reasoning degrades with context length. The model loses track of relationships between distant files, confuses similarly named functions, and misses subtle coupling that a human would spot immediately. Raw code is a poor representation for reasoning about systems.

## What Knowledge Graphs Provide

A code knowledge graph captures what matters: which functions call which, which types depend on which, which modules import from which. It's a compressed representation that preserves the structural relationships while discarding implementation details. When an AI agent needs to understand the impact of a change, it traverses the graph instead of scanning every file.

## Building One in Practice

The simplest approach starts with static analysis. Parse the AST, extract imports, function calls, type references, and class hierarchies. Store them in a graph database or even a simple adjacency list. Query with graph traversal algorithms. The result is a tool that can answer questions like "what depends on this module?" or "what's the call path from the API handler to the database?" in milliseconds.

For Hermes, we built a graph that updates incrementally as code changes. It tracks not just static dependencies but also runtime patterns inferred from test execution traces. The combination gives AI agents both the architectural view and the behavioral view — much closer to how senior engineers actually reason about systems.`,
  },
  {
    slug: "mcp-explained-hermes-codebase",
    title: "MCP Explained: How Hermes Reads Your Entire Codebase",
    description:
      "A deep dive into the Model Context Protocol and how it enables Hermes to build real-time understanding of large codebases through structured tool interfaces.",
    date: "2026-05-26",
    tags: ["AI", "MCP", "Developer Tools"],
    content: `# MCP Explained: How Hermes Reads Your Entire Codebase

The Model Context Protocol (MCP) has been gaining traction as the standard for connecting AI models to external tools and data sources. But what makes it particularly interesting for code understanding is how it enables structured, real-time access to codebase knowledge.

## What MCP Actually Is

MCP is a protocol that standardizes how AI models discover and interact with external tools. Think of it as USB-C for AI integrations — a single protocol that lets any MCP-compatible model connect to any MCP-compatible server. Servers expose tools with typed parameters, and models call them through a standardized interface.

## Reading Code Through MCP

Hermes uses MCP to expose structured code operations: find definitions, trace call hierarchies, search for patterns, and analyze dependencies. Instead of reading files raw, the model asks structured questions and gets structured answers. "Show me all callers of this function" returns a graph, not a grep output. "What are the database migrations in this project?" returns a list with metadata, not a file listing.

## Why It Matters

The power is in the composition. An MCP server can combine static analysis, git history, test coverage data, and documentation into a single coherent interface. The model doesn't need to know how each data source works — it just needs to know what questions it can ask. This separation of concerns means the code intelligence gets better over time without changing the model interface.

For large codebases, this is transformative. Rather than trying to fit everything into context, the model navigates the codebase like a developer with an IDE — jumping to definitions, following references, and building up understanding incrementally. The result is more accurate reasoning about less code.`,
  },
  {
    slug: "rate-limiting-payment-gateway",
    title: "Rate Limiting a Payment Gateway in Production",
    description:
      "Lessons learned implementing rate limiting on a high-throughput payment gateway — the algorithms, the edge cases, and the production incidents.",
    date: "2026-05-26",
    tags: ["Fintech", "Backend", "Production"],
    content: `# Rate Limiting a Payment Gateway in Production

Rate limiting a payment gateway isn't like rate limiting an API. When you throttle an API call, the user gets a 429 and retries. When you throttle a payment, money is involved. Getting this wrong means either leaving the system vulnerable to abuse or accidentally rejecting legitimate transactions.

## The Dual Nature of Payment Rate Limits

Payment gateways need two distinct rate limiting strategies. The first is per-merchant — preventing any single merchant from overwhelming the system. The second is per-endpoint — protecting specific payment operations that have higher cost or risk profiles. A refund endpoint needs tighter limits than a balance check.

## Algorithm Selection

We tested token bucket, sliding window, and fixed window algorithms. Token bucket won for payment processing because it handles bursts gracefully — a merchant can process a surge of transactions as long as their average rate stays within bounds. Sliding window was better for administrative endpoints where consistent spacing matters more than burst tolerance.

## The Production Incident

The moment that taught me the most: we deployed rate limiting with a Redis-backed counter, and Redis had a brief network partition. The rate limiter defaulted to open (allowing all traffic) — the safe default for payments. But our monitoring wasn't configured to alert on the fallback path. We ran without rate limits for 12 minutes before anyone noticed. No damage was done, but it exposed a gap between our fail-safe design and our observability.

Lesson learned: rate limiters need three monitoring dimensions — the rate limit decisions themselves, the health of the rate limit infrastructure, and the proportion of traffic going through each decision path. All three must be alertable independently.`,
  },
  {
    slug: "docker-multi-stage-builds-fintech",
    title: "Docker Multi-Stage Builds for Fintech Microservices",
    description:
      "How multi-stage Docker builds reduce image sizes by 80% for fintech microservices while maintaining security compliance requirements.",
    date: "2026-05-25",
    tags: ["Docker", "DevOps", "Fintech"],
    content: `# Docker Multi-Stage Builds for Fintech Microservices

Financial services have unique container requirements: minimal attack surface, reproducible builds, and audit-friendly image layers. Multi-stage Docker builds address all three while producing images a fraction of the size of traditional builds.

## The Approach

A typical fintech microservice Dockerfile uses three stages: a build stage with all development dependencies, a test stage that runs the test suite, and a production stage that contains only the compiled artifacts and runtime dependencies. The production image has no compilers, no development headers, and no test files.

## Results

For a typical Node.js payment service, this approach reduced the production image from 980MB to 187MB — an 81% reduction. The attack surface shrunk proportionally: fewer installed packages means fewer CVEs in your vulnerability scans. The smaller image also means faster pulls during deployment and faster cold starts on container restart.

## Compliance Angle

Auditors care about reproducibility. Multi-stage builds, combined with pinned base image digests and layer caching, produce byte-identical images from the same source code. This means your staging image and production image are verifiably the same — no drift between environments, no "it worked on my machine" during an audit.`,
  },
  {
    slug: "event-driven-architecture-payments",
    title: "Event-Driven Architecture for Payment Systems",
    description:
      "Why event-driven patterns are ideal for payment processing — from idempotency to reconciliation to audit trails.",
    date: "2026-05-25",
    tags: ["Architecture", "Fintech", "Backend"],
    content: `# Event-Driven Architecture for Payment Systems

Payment processing is inherently event-driven. A payment is initiated, authorized, captured, settled, and reconciled — each step is an event that triggers the next. Yet many payment systems are built with synchronous request-response patterns that fight against this natural flow.

## The Event Model

In an event-driven payment system, every state transition produces an event. PaymentInitiated, PaymentAuthorized, PaymentCaptured, PaymentSettled. Each event is immutable and append-only. Services subscribe to the events they care about and produce new events as they process. The payment's current state is derived from the event stream.

## Idempotency for Free

One of the hardest problems in payment systems is idempotency — ensuring that retrying a payment doesn't charge the customer twice. Event-driven systems handle this naturally: each event has a unique ID, and event consumers deduplicate by ID. If a retry produces the same event with the same ID, it's ignored. No special idempotency logic needed.

## The Audit Trail

Perhaps the biggest win is the audit trail. Since every state change is an event, the audit log is the event stream itself. There's no separate logging infrastructure to maintain, no risk of the logs and the state diverging. Regulators can trace any transaction from initiation to settlement by replaying its events. This is the gold standard for financial audit trails.`,
  },
  {
    slug: "api-design-fintech-platforms",
    title: "API Design Patterns for Fintech Platforms",
    description:
      "Design patterns that make fintech APIs predictable, versionable, and secure — lessons from building APIs for payment gateways and trading platforms.",
    date: "2026-05-24",
    tags: ["API Design", "Fintech", "Backend"],
    content: `# API Design Patterns for Fintech Platforms

Financial APIs carry more weight than most. A poorly designed API in a social media app means a frustrating developer experience. A poorly designed API in a payment gateway means lost money, regulatory issues, or both. Here are the patterns I've settled on after years of building financial APIs.

## Predictable Resource Modeling

Financial resources — accounts, transactions, settlements — should follow a consistent URL pattern. \`/v1/accounts/{id}/transactions\` is predictable. \`/getTransactions?accountId={id}\` is not. The first tells you the relationship immediately; the second requires reading documentation to understand the parameter name.

## Versioning Strategy

URL-based versioning (\`/v1/\`, \`/v2/\`) is the only approach that works reliably for financial APIs. Header-based versioning breaks when intermediaries strip headers. Query parameter versioning creates caching issues. URL versioning is explicit, cacheable, and impossible for an API gateway to accidentally strip.

## Idempotency Keys

Every mutating endpoint should accept an idempotency key. This isn't optional for financial APIs — it's a requirement. Without it, network retries can create duplicate charges. The key should be generated by the client and checked by the server before processing. If the server has seen the key before, return the original response without processing again.`,
  },
  {
    slug: "migrating-monolith-microservices",
    title: "Migrating a Monolith to Microservices Without Losing Your Mind",
    description:
      "A practical playbook for incrementally decomposing a monolith — strangler fig pattern, feature flags, and avoiding the distributed monolith trap.",
    date: "2026-05-24",
    tags: ["Architecture", "Microservices", "Migration"],
    content: `# Migrating a Monolith to Microservices Without Losing Your Mind

Every architecture migration talk makes it sound clean: extract services one by one, and suddenly you have a beautiful microservices landscape. Reality is messier. Here's what actually works.

## Start With the Strangler Fig

The strangler fig pattern is the only safe approach to monolith decomposition. Instead of rewriting the monolith, you gradually replace its functionality with new services. Route traffic to the new service for specific endpoints while the monolith handles everything else. Over time, the monolith shrinks and the new services grow.

## Avoid the Distributed Monolith

The most common failure mode: you extract services but they're so tightly coupled that deploying one requires deploying all of them. You've traded a single monolith for a distributed one — and distributed monoliths are worse than regular monoliths because now you have network latency and partial failures on top of the original coupling problems.

The fix is to define service boundaries around business capabilities, not technical layers. A "user service" that just does CRUD on users isn't a microservice — it's a distributed data access layer. A "payment service" that owns the entire payment lifecycle from initiation to settlement is a real microservice.

## Feature Flags Are Your Safety Net

Every extracted service should be behind a feature flag that can route traffic back to the monolith. If the new payment service has a bug, flip the flag and payments flow back through the monolith. Without this, every extraction is a high-stakes deployment with no rollback option short of a full revert.`,
  },
  {
    slug: "typescript-patterns-financial-software",
    title: "TypeScript Patterns That Prevent Financial Bugs",
    description:
      "How branded types, opaque types, and exhaustive checking in TypeScript catch entire categories of financial bugs at compile time.",
    date: "2026-05-23",
    tags: ["TypeScript", "Fintech", "Best Practices"],
    content: `# TypeScript Patterns That Prevent Financial Bugs

Financial software has a unique property: small type errors become large monetary errors. Swapping a debit for a credit, confusing cents for dollars, passing the wrong currency code — these aren't cosmetic issues. TypeScript can catch many of these at compile time if you use the right patterns.

## Branded Types for Domain Primitives

A \`number\` representing cents and a \`number\` representing dollars are the same type to TypeScript but wildly different to your accounting department. Branded types create compile-time distinctions:

\`\`\`typescript
type Cents = number & { readonly __brand: 'Cents' };
type Dollars = number & { readonly __brand: 'Dollars' };
\`\`\`

Now you can't accidentally pass cents to a function expecting dollars. The compiler catches it. No runtime overhead, no additional memory — just type safety.

## Exhaustive Matching for Transaction States

Every transaction goes through a state machine: pending → authorized → captured → settled. Each state has different available operations. Exhaustive switch statements ensure you handle every state and that adding a new state breaks the build until every handler is updated.

## Opaque Types for External IDs

Payment IDs, user IDs, and transaction IDs should never be interchangeable, even if they're all strings. Opaque types prevent passing a user ID where a payment ID is expected. Combine this with branded types and you've eliminated an entire category of "wrong ID" bugs that are notoriously hard to debug in production.`,
  },
  {
    slug: "ci-cd-pipeline-fintech",
    title: "Building a CI/CD Pipeline for Regulated Financial Software",
    description:
      "How to build CI/CD pipelines that satisfy both engineering velocity goals and regulatory compliance requirements — not an either/or choice.",
    date: "2026-05-23",
    tags: ["DevOps", "Fintech", "Compliance"],
    content: `# Building a CI/CD Pipeline for Regulated Financial Software

The conventional wisdom says regulated software moves slowly. Compliance reviews, change management boards, manual testing — velocity is the trade-off for safety. But after building CI/CD pipelines for PCI-DSS compliant systems, I'm convinced this is a false dichotomy.

## The Pipeline Architecture

A regulated CI/CD pipeline has additional stages beyond the standard build-test-deploy. There's a compliance scan stage that runs SAST, dependency scanning, and container vulnerability checks. There's an evidence collection stage that archives test results, scan outputs, and deployment logs for audit purposes. And there's an approval gate — but it's automated where possible and manual only where necessary.

## Automated Compliance Gates

Most compliance checks can be automated. PCI-DSS requires that you scan for known vulnerabilities before deployment — that's a pipeline stage, not a manual review. It requires that you test security controls — those are automated tests, not a sign-off form. The key is making the evidence collection automatic so auditors can verify what happened without slowing down deployments.

## The Human Gate

The only manual gate should be for changes that modify security boundaries, payment logic, or authentication systems. Everything else should deploy automatically if all automated gates pass. This gives you both velocity and safety — the pipeline catches the predictable risks, and humans focus on the genuinely risky changes.`,
  },
  {
    slug: "postgresql-jsonb-vs-relational",
    title: "PostgreSQL JSONB vs Relational: When to Use Each in Fintech",
    description:
      "A practical comparison of JSONB and relational models for financial data — not a religious debate, but a guide to choosing the right tool.",
    date: "2026-05-22",
    tags: ["PostgreSQL", "Database", "Fintech"],
    content: `# PostgreSQL JSONB vs Relational: When to Use Each in Fintech

PostgreSQL's JSONB support creates a genuine design question: should financial data live in relational tables or JSONB columns? The answer isn't one or the other — it's both, used appropriately.

## What JSONB Excels At

JSONB shines for data that has variable structure. Payment method details are the canonical example — a credit card has different fields than a bank transfer, which has different fields than a digital wallet. Modeling this relationally requires either sparse columns or an EAV pattern, both of which are painful. JSONB stores exactly the fields that exist for each payment method, no more, no less.

## What Relational Excels At

Relational tables excel for data that you query by value. Transaction amounts, dates, statuses — these are queried, sorted, filtered, and aggregated constantly. JSONB can do all of these things with GIN indexes, but the query patterns are more verbose and the query planner has less information to optimize with.

## The Hybrid Approach

The pattern I've settled on: core transaction data lives in relational columns for query performance. Metadata and variable-structure data live in a JSONB column. The relational columns handle the hot path (list recent transactions, filter by status, sum by date range). The JSONB column handles the long tail (payment method details, gateway responses, custom fields per merchant). This gives you the best of both worlds — fast queries on the data you query most, flexibility for the data you don't.`,
  },
  {
    slug: "securing-nodejs-payment-service",
    title: "Securing a Node.js Payment Service: A Checklist",
    description:
      "A pragmatic security checklist for Node.js payment services — from dependency scanning to runtime protection to incident response.",
    date: "2026-05-22",
    tags: ["Security", "Node.js", "Fintech"],
    content: `# Securing a Node.js Payment Service: A Checklist

Payment services are high-value targets. The difference between a secure service and a compromised one often comes down to a handful of practices that are easy to describe but require discipline to maintain. Here's the checklist I use.

## Dependency Hygiene

Run \`npm audit\` on every CI build and fail on critical vulnerabilities. Pin dependencies to exact versions. Use a lockfile that's committed to the repository. Review new dependencies before adding them — every dependency is a potential attack vector, and the Node.js ecosystem has a long history of supply chain attacks.

## Runtime Protection

Never log payment details, card numbers, or authentication tokens. Use Helmet for security headers. Set restrictive CORS policies — your payment API shouldn't accept requests from arbitrary origins. Rate limit authentication endpoints aggressively. Use \`express-rate-limit\` or equivalent, and make sure the rate limiter can't be bypassed by spoofing X-Forwarded-For headers.

## Secrets Management

Never store secrets in code, config files, or environment variables committed to the repository. Use a secrets manager (AWS Secrets Manager, HashiCorp Vault, or even encrypted files with restricted access). Rotate secrets on a schedule. Have a plan for rotating secrets quickly if they're compromised.

## Incident Response

Have a runbook. Know who to call, what to shut down, and how to preserve evidence. Test the runbook. The worst time to discover that your incident response process has gaps is during an actual incident. Run a tabletop exercise at least quarterly.`,
  },
  {
    slug: "github-actions-workflows-ci",
    title: "GitHub Actions Workflows I Use on Every Project",
    description:
      "The reusable GitHub Actions workflows that form the CI foundation across all my projects — linting, testing, building, and deploying.",
    date: "2026-05-21",
    tags: ["DevOps", "GitHub Actions", "CI/CD"],
    content: `# GitHub Actions Workflows I Use on Every Project

After setting up CI for dozens of projects, I've converged on a set of GitHub Actions workflows that I copy into every new repository. They're not fancy, but they catch the problems that matter before they reach production.

## The Lint Workflow

Runs on every push. ESLint for JavaScript/TypeScript, Prettier for formatting, and type checking with \`tsc --noEmit\`. Fails fast — if the code doesn't type-check, don't bother running tests. This saves minutes on every CI run and enforces that type errors are never "we'll fix it later."

## The Test Workflow

Runs on every push to main and every pull request. Matrix strategy across Node.js versions. Runs unit tests, integration tests, and coverage reports. Posts coverage to PRs as a comment so reviewers can see at a glance whether the change increases or decreases coverage.

## The Build Workflow

Runs on pushes to main. Builds the production artifact, runs any build-time checks, and caches the build output. For Docker-based projects, this is where multi-stage builds happen. For static sites, this is where the export runs. The build artifact is what gets deployed — never rebuild during deployment.

## The Deploy Workflow

Triggers on successful build workflow completion on main. Deploys the built artifact to the target environment. Uses environment protection rules for production — required reviewers, wait timers, and deployment locks. No one deploys to production by accident.`,
  },
  {
    slug: "testing-strategies-financial-software",
    title: "Testing Strategies for Financial Software",
    description:
      "Beyond unit tests — property-based testing, contract testing, and simulation testing for financial systems where correctness is non-negotiable.",
    date: "2026-05-21",
    tags: ["Testing", "Fintech", "Quality"],
    content: `# Testing Strategies for Financial Software

Financial software has a higher bar for correctness than most applications. A bug in a social media feed is an annoyance. A bug in a payment calculation is a regulatory issue. Standard testing approaches aren't sufficient — you need strategies designed for the failure modes of financial systems.

## Property-Based Testing

Instead of writing test cases one by one, property-based testing defines invariants that must hold for all inputs. "Depositing X and then withdrawing X leaves the balance unchanged" — this must be true for any positive X, any currency, any account type. The testing framework generates thousands of random inputs and verifies the invariant holds.

## Contract Testing

In a microservices payment system, the gateway, ledger, and notification services all communicate through APIs. Contract testing verifies that each service's expectations of its dependencies are actually met. If the ledger changes its API, the gateway's contract tests catch the incompatibility before deployment — not after.

## Simulation Testing

The most powerful approach I've used: spin up a complete copy of the system, inject realistic transaction patterns at production volume, and verify that balances reconcile at the end. Run it for hours, inject failures (network partitions, slow disks, killed processes), and verify the system recovers correctly. This catches bugs that no unit test could find — race conditions, resource leaks, and subtle ordering dependencies.`,
  },
  {
    slug: "from-developer-to-architect",
    title: "From Developer to System Architect: What Changed",
    description:
      "Reflections on the transition from writing code to designing systems — the mindset shifts, the new skills, and what I wish I'd known earlier.",
    date: "2026-05-20",
    tags: ["Career", "Architecture", "Leadership"],
    content: `# From Developer to System Architect: What Changed

The transition from senior developer to system architect isn't a promotion — it's a career change. The skills that made you a great developer are still useful, but they're no longer sufficient. Here's what actually changed when I made the shift.

## From Solutions to Trade-offs

As a developer, you're rewarded for finding the right solution. As an architect, you learn that there's rarely a single right solution — there are trade-offs, and your job is to choose the least bad one. Every architectural decision optimizes for something at the expense of something else. Naming the trade-off explicitly is more valuable than declaring a winner.

## From Depth to Breadth

Developers go deep. Architects go broad. You need to understand databases well enough to question a schema design, networking well enough to spot a latency trap, and security well enough to flag an authentication flaw. You won't be the expert in any of these — that's what specialists are for — but you need to know enough to ask the right questions.

## From Code to Communication

The hardest shift: your primary output is no longer code. It's documents, diagrams, and conversations. Architecture Decision Records, system diagrams, and technical specifications become your deliverables. If you can't explain your design to both the junior developer implementing it and the CTO funding it, the design isn't done.

## What I Wish I'd Known

Nobody tells you that architecture is mostly about constraints. Budget, timeline, team skills, existing systems, regulatory requirements — these constrain your design space far more than technology choices do. A great architecture isn't the one that uses the coolest tech — it's the one that delivers the most value within the constraints you actually have.`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getLatestPosts(count: number = 6): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  blogPosts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}
