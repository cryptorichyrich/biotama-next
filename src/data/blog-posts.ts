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
  {
    slug: "bun-vs-nodejs-backend-engineer",
    title: "Bun vs Node.js: What I Care About as a Backend Engineer",
    description: "Benchmarks do not decide my runtime. Production reliability, ecosystem maturity, and debugging tooling do. Here is where Bun and Node.js stand for backend services.",
    date: "2026-05-23",
    tags: ["nodejs", "bun", "backend"],
    content: `Every few months, a new Bun release triggers a fresh wave of benchmark posts. HTTP throughput, startup time, install speed. Numbers go up, people get excited, someone declares Node.js dead.

I have been running Node.js in production for years across payment services, API gateways, and real-time transaction processing. I also run Bun in specific contexts. The benchmark charts miss the things that determine whether a runtime survives past the prototype phase.

## What Benchmarks Do Not Tell You

Request-per-second numbers from a hello-world handler tell you how fast a runtime can echo a string. They do not tell you what happens when your PostgreSQL connection pool hits its limit, when a downstream provider takes 30 seconds to respond, or when a memory leak shows up at 2 AM and you need to diagnose it from a heap dump.

In production, your bottleneck is almost never the runtime. It is the database query, the external API call, the serialization of a 2MB JSON payload. A 20% throughput difference between runtimes vanishes when your service spends 90% of its time waiting on I/O.

## Where Node.js Wins for Production Services

Maturity is not a marketing bullet point. It is the reason I can open npm, find a battle-tested library for any integration I need, and trust that it handles edge cases I have not thought of yet. The Node.js ecosystem has a decade of production failure baked into its libraries.

Three things keep me on Node.js for critical services:

**Observability tooling.** When a payment service starts leaking memory, I reach for \`--inspect\`, Chrome DevTools, and \`heapdump\`. These tools work. They have worked for years. Bun's debugging story is improving but not at parity.

**Native addon compatibility.** Payment integrations, cryptography modules, database drivers. Several of these depend on N-API or node-gyp. Bun handles most of them now, but "most" is not good enough when a production dependency fails to build and you are on a deadline.

**Docker ecosystem.** Every base image, every CI template, every orchestration guide assumes Node.js. That matters less than it used to, but when you are debugging a container issue at midnight, you do not want to be the edge case.

## Where Bun Makes Sense

I do use Bun. It has a clear place in my workflow:

**Local development.** \`bun install\` is fast. \`bun test\` starts in milliseconds. For a monorepo with hundreds of test files, the speed difference is not a benchmark flex, it is a quality-of-life improvement that compounds over a workday.

**Utility scripts.** File system operations, build tooling, one-off data migrations. Bun executes TypeScript natively, which eliminates the \`ts-node\` or \`tsx\` dependency. For scripts that run on developer machines, this is a real win.

**New greenfield services.** If I am starting a new microservice that does not depend on native addons, Bun is worth evaluating. The built-in test runner, bundler, and WebSocket support reduce boilerplate.

## The Decision Framework

When I pick a runtime for a production service, I ask three questions:

1. Does every dependency in my lockfile resolve and build without workarounds?
2. Can I debug a memory leak, a hung event loop, and a CPU spike with the tooling available?
3. Has this runtime been battle-tested in conditions similar to what I am building?

If the answer to all three is yes, Bun is on the table. If any answer is no, I use Node.js.

The trade-off is straightforward. Bun trades ecosystem maturity for speed and developer experience. For scripts, local tooling, and new services with simple dependency graphs, that trade makes sense. For payment pipelines that process transactions at 3 AM and need to work without surprises, Node.js earns its place.

Architecture is about trade-offs, not silver bullets. Pick the runtime that lets you sleep at night, not the one with the highest benchmark score.`,
  },
  {
    slug: "cqrs-in-practice-real-constraints",
    title: "CQRS in Practice: When Textbook Patterns Meet Real Constraints",
    description: "CQRS looks elegant in architecture diagrams. In production, it introduces complexity you didn't plan for. Here's what I learned applying it under real constraints.",
    date: "2026-05-25",
    tags: ["architecture", "cqrs", "design-patterns"],
    content: `I first sketched a CQRS architecture on a whiteboard in 2022. Two separate models, clean event streams, a read store that never worried about write contention. It looked beautiful. Six months later, I was debugging sync issues between command and query databases at 2 AM, wondering where the elegance went.

CQRS, Command Query Responsibility Segregation, is one of those patterns that sells itself on a diagram and challenges you in production. The concept is sound: separate your write model from your read model so each can scale and evolve independently. The textbook version involves event sourcing, message buses, eventual consistency, and eventually a system that handles complex domain logic with grace.

The real version involves dealing with stale reads, debugging out-of-order events, and explaining to your team why the data they just wrote isn't visible yet.

## Where CQRS Earns Its Keep

I applied CQRS in a transaction monitoring system for a fintech platform. The write side handled payment commands: create transaction, update status, flag suspicious activity. Each command went through validation, persisted to the primary database, and published an event.

The read side served a different purpose. The dashboard needed to aggregate transaction volumes by merchant, time window, and risk category. The reporting pipeline needed historical trends. The compliance team needed filtered views of flagged transactions.

Running these queries against the write model would have required complex joins across normalized tables, with locks competing against incoming writes. The read model flattened everything into denormalized views optimized for specific query patterns. A single transaction event could update five different read projections, each tuned for a different access pattern.

## Where It Gets Messy

The problems started with consistency.

A merchant submits a payment. The frontend redirects them to a confirmation page. The confirmation page queries the read model. The event hasn't been processed yet. The merchant sees "no transactions found." Support gets a ticket.

This is the eventual consistency tax. The textbook says "design for it." The production reality is that users expect read-after-write consistency, and no amount of architectural purity changes that expectation.

I solved this with a hybrid approach: for the specific flow where the user initiates an action and needs immediate feedback, the frontend queries the write model directly. The read model serves everything else: dashboards, reports, analytics.

## When I Skip CQRS

After that project, I developed a heuristic: I skip CQRS when the read and write patterns are similar enough that a single model serves both without performance issues. Most CRUD applications fall into this category. I also skip it when the team is small.

## What I Do Instead of Full CQRS

For projects that need read optimization but can't justify the full CQRS investment, I use materialized views or database-level computed columns for common read patterns. Application-level caching for hot queries. No event bus, no separate projections, no eventual consistency.

Architecture is about trade-offs, not silver bullets. CQRS solved a real problem for me in transaction monitoring. It also created problems I didn't anticipate. The pattern is a tool, not a goal. Use it when the domain complexity warrants it, and reach for simpler alternatives first.`,
  },
  {
    slug: "css-grid-dashboard-layout-fix",
    title: "One CSS Grid Line Fixed Our Entire Dashboard Layout",
    description: "Six media query breakpoints, five layout bugs, and one CSS Grid line later, our dashboard just worked. Why auto-fit beats fixed breakpoints.",
    date: "2026-05-25",
    tags: ["css", "frontend", "react"],
    content: `Our fintech dashboard had six widget cards. A balance overview, transaction history, pending settlements, currency breakdown, recent activity feed, and a notification panel. Six widgets, six media query breakpoints, and five recurring layout bugs.

Every time we added a widget or changed card dimensions, the grid broke somewhere. Cards overlapped on tablets. Orphaned widgets sat alone on ultrawide monitors. We maintained a separate flex layout for mobile that drifted out of sync with the desktop version. The CSS for this one dashboard section spanned 80 lines, most of it media queries patching edge cases.

Then I replaced all of it with one declaration.

\`\`\`css
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}
\`\`\`

No media queries. No breakpoints. No separate mobile layout. The grid handles every screen width from a phone to an ultrawide monitor.

## How auto-fit + minmax works

\`repeat(auto-fit, minmax(320px, 1fr))\` does two things at once. \`minmax(320px, 1fr)\` says each column must be at least 320 pixels wide and can grow to fill available space. \`auto-fit\` tells the browser to fit as many columns as the container width allows.

## What we deleted

The old CSS had breakpoints at 480px, 768px, 1024px, 1280px, 1440px, and 1920px. Each redefined the grid column count. Adding a seventh widget meant touching every breakpoint, retesting on every device, and finding the new edge case.

The new approach eliminates the concept of breakpoints for layout. Column count becomes a function of available space, not a hardcoded integer per viewport range.

## The broader lesson

Frontend layout bugs trace back to hardcoded viewport assumptions. A breakpoint at 768px assumes you know the device. A breakpoint at 1024px assumes you know the browser chrome width. \`auto-fit\` trades those assumptions for a constraint-based system: the column is at least this wide, the grid uses as many columns as fit, and the browser handles the math.

Architecture is about trade-offs, not silver bullets. For card grids, I traded 80 lines of media queries for one line of CSS Grid. Five layout bugs disappeared and never came back.`,
  },
  {
    slug: "delegated-boilerplate-ai-agent",
    title: "Why I Delegated My Boilerplate to an AI Agent",
    description: "How shifting repetitive code generation to an autonomous agent compressed my feature delivery from days to hours and freed me to focus on architecture.",
    date: "2026-05-25",
    tags: ["ai", "automation", "developer-tools"],
    content: `Two years ago I spent forty percent of my day writing code I could recite from memory. CRUD endpoints. Form validation. Migration files. Test scaffolding. Configuration objects. The same patterns, different domain, eight hours of typing what a machine could produce in seconds.

I built Hermes because I got tired of being a typist.

The first version did one thing: generate boilerplate from templates I defined. I'd describe a new API endpoint, and Hermes produced the route handler, the input validation schema, the database query, the error responses, and the test file. All of it. In under ten seconds.

That saved me two hours per feature. Good start. But the interesting shift happened when I started trusting the agent with judgment calls, not just pattern filling.

## From Templates to Autonomous Execution

Now Hermes runs on a cron schedule. Three times a day, it checks my backlog, picks a task, writes the code, generates the tests, opens a pull request, and sends me a summary. I review. I approve or request changes. The entire loop from idea to running in production compresses from a day to an hour.

The trade-off here is control. I give up line-by-line involvement in return for throughput.

## Quality Went Up, Not Down

What I've found after running this system for months is that my code quality improved. Hermes does not skip validation because it's tired. It does not copy a pattern from Stack Overflow and forget to change the error message. It follows the conventions I defined. No shortcuts, no drift.

Three patterns account for most of what Hermes generates in my projects: API scaffolding, blog content, and DevOps configuration.

## When Delegation Makes Sense

The people who benefit most from this setup are not junior developers looking for a shortcut. They are senior engineers whose time costs more than the compute that runs the agent.

Architecture is about trade-offs, not silver bullets. I traded fine-grained control over boilerplate for time spent on problems that require human judgment. That trade works for me.`,
  },
  {
    slug: "event-driven-without-event-sourcing",
    title: "Event-Driven Architecture Without Event Sourcing Complexity",
    description: "Event-driven doesn't require event sourcing. You can decouple services with lightweight event patterns — no Kafka cluster or distributed systems PhD needed.",
    date: "2026-05-26",
    tags: ["architecture", "event-driven", "design-patterns"],
    content: `Most teams hear "event-driven" and picture Kafka clusters, event sourcing, CQRS, and a three-month ramp-up. That picture costs more than it delivers for most projects.

I built Srabutan's order pipeline on pure event-driven patterns without a single event store. No event sourcing. No Kafka. Just RabbitMQ, a few strategic exchanges, and the outbox pattern. Two years later, I have not regretted that choice once.

## Two Families, One Confusion

Event-driven architecture splits into two families that people keep confusing: event notification (something happened, go check it out) and event-carried state transfer (something happened, here is all the data).

Event sourcing belongs to neither family. It is a persistence pattern where the event log serves as the source of truth. You can build event-driven systems without it.

## The Patterns I Use Instead

**Outbox Pattern + Message Broker.** You write to your database and publish an event in the same transaction. A separate worker reads the outbox table and publishes to the broker. One atomic transaction. No distributed coordination.

**Change Data Capture.** Sometimes you cannot modify the source system to emit events. CDC captures database changes at the WAL level and turns them into event streams.

**Plain Pub/Sub With Competing Consumers.** Not every event needs a stream. Work distribution often needs nothing more than a fanout exchange for broadcasting or a direct exchange for load balancing.

## The Real Cost of Over-Engineering

A team I consulted for spent two months setting up Kafka, a schema registry, Avro serialization, and event sourcing — all to power a notification service that sent three emails per day.

Start with the outbox pattern and a message broker. Add event sourcing when the business demands it, not when a conference talk convinces you it is mandatory.`,
  },
  {
    slug: "hello-world",
    title: "Hello World",
    description: "Welcome to my blog. I write about IT, engineering, business, marketing, and daily life as a system architect.",
    date: "2025-07-11",
    tags: ["intro", "personal"],
    content: `Welcome to my corner of the internet. This is where I share what I have learned building systems for the fintech industry, thoughts on technology and business, and occasional slices of daily life.

As a system architect and fintech engineer, I've spent years designing scalable, secure, and efficient systems that handle millions of transactions. My work sits at the intersection of technology, business logic, and user experience, requiring a deep understanding of all three domains.

In this blog, I'll explore topics ranging from system design patterns and architectural decisions to the practical challenges of building fintech solutions. I'll share lessons learned from successful projects, mistakes made along the way, and insights about the ever-evolving technology landscape.

Beyond the technical aspects, I believe engineering is fundamentally about solving real problems for real people. So expect discussions about the business side of technology, the importance of understanding your users, and how to balance technical excellence with practical delivery. Welcome to the journey.`,
  },
  {
    slug: "idempotent-payment-endpoints-production",
    title: "Idempotent Payment Endpoints: Lessons from Production",
    description: "Duplicate payments from retry logic cost real money and trust. Idempotency keys prevent them, and most payment APIs get the implementation wrong.",
    date: "2026-05-24",
    tags: ["fintech", "payments", "api-design"],
    content: `A customer clicks "Pay." The request times out. Their browser retries. Your server processes the same charge twice. The customer sees two deductions. Your support team gets a ticket. Your reconciliation report shows a discrepancy. All because the endpoint lacked idempotency.

I have debugged this scenario in production payment systems. The fix is not disabling retries. Retries are a fact of distributed systems: network timeouts, load balancer failovers, client-side connection drops all trigger them. The fix is designing endpoints that handle duplicate requests without creating duplicate side effects. That mechanism is the idempotency key.

## What Idempotency Means in Payments

An operation is idempotent if executing it once produces the same result as executing it multiple times. In payment APIs, idempotency works by attaching a unique key to each request. The server remembers: "I processed a request with this key, here is the original response."

## The Implementation Pattern

Three parts of this implementation matter: the cache check (look up the idempotency key before processing), the lock (prevent concurrent requests with the same key), and the TTL (keys expire after 24-48 hours).

## Storage Options

Redis is ideal for high-throughput services: \`SET idempotency:{key} {response} EX 172800\`. A database table with a \`request_hash\` column works for lower traffic. The request hash catches the bug of a client reusing an idempotency key with a different request body.

## When to Require Idempotency Keys

Any endpoint that creates a side effect involving money gets idempotency keys: charge, refund, transfer, and subscription creation endpoints.

Architecture is about trade-offs, not silver bullets. The idempotency key pattern trades a small amount of infrastructure complexity for a strong guarantee that retries do not become duplicate transactions.`,
  },
  {
    slug: "autonomous-coding-agents-job-description",
    title: "Coding Agents Won't Replace You. They'll Change Your Job.",
    description: "AI coding agents shift the bottleneck from typing to thinking. The job moves up the stack into architecture, orchestration, and review.",
    date: "2026-05-27",
    tags: ["ai", "agent-engineering", "career"],
    content: `Every few months someone asks me if I'm worried AI will take my job. I give the same answer: I stopped writing boilerplate months ago. My agent does it.

The fear misses what's happening. Autonomous coding agents aren't eliminating developer work. They're changing what "developer work" means.

## The Scope Explosion Nobody Talks About

The dynamic I see daily: I used to write a feature end-to-end. Scaffold the files, wire the database, handle errors, write tests. A solid day of typing.

Now I describe the architecture to Hermes and it generates the scaffolding, the CRUD endpoints, the test skeletons. What took four hours takes twenty minutes. You'd think that means I do less work.

It means I build more.

Features I would have deferred for months, I now ship in a week. A blog pipeline that runs itself on cron. A multi-agent delegation system that farms sub-tasks. I ship things I wouldn't have attempted alone, because the cost of experimentation dropped to near zero.

The bottleneck shifted from typing to thinking. But the thinking load didn't shrink. It multiplied.

## What the Job Becomes

First, I review more code than I write. Hermes generates the implementation. I verify correctness, check edge cases, tighten error handling. The skill that matters is taste: knowing what good architecture looks like at a glance.

Second, I orchestrate instead of executing. A single prompt can spawn a chain of autonomous work. I coordinate outcomes across agents the way a tech lead coordinates across junior engineers.

Third, I think at the system level. Templates, database queries, route handlers. The agent handles those. I spend my attention on data flow across services, failure modes, deployment topology. Architecture is the product now. Syntax is the commodity.

## The New Skills That Matter

The developer who thrives in this world is not the fastest typist. It's the one who can write precise prompts, read and evaluate generated code at a glance, design interfaces between agents, and know when to delegate.

I chose delegation. My job didn't shrink. It got more interesting.`,
  },
  {
    slug: "react-server-components-client-side",
    title: "React Server Components Made Me Rethink Client-Side",
    description: "RSC doesn't just move rendering to the server. It destroys the 'client vs. server' mental model and replaces it with something sharper.",
    date: "2026-05-26",
    tags: ["react", "frontend", "architecture"],
    content: `I built React apps for seven years with a clean mental model: server renders HTML, client hydrates it into something interactive. "Client-side" meant an empty shell that fetched data via API calls. Two buckets. Two worlds. React Server Components did not blur that line. They erased it.

The shift started with Next.js 13 and the App Router. I opened a project, saw \`'use client'\` directives peppered through the component tree, and felt genuine confusion. Every React component I had written up to that point ran in the browser. The server existed to deliver the initial bundle and some JSON. Now I had to mark components that belonged on the client. The default pushed execution to the server. You opted in to interactivity.

A React Server Component runs on the server. It produces a serialized React tree — a format the client runtime can stream and reconcile without destroying existing state. When it ships its output to the browser, the client never receives the component's code. Zero JavaScript for that part of the tree.

What changed after building with this pattern: I stopped thinking about pages as monolithic rendering decisions. A product detail page can render the header and footer on the server with zero client cost, while keeping the add-to-cart button interactive.

The trade-off is how much added complexity your team absorbs. Server Components cannot use hooks, state, or event handlers. They cannot call browser APIs. You now maintain two component categories with different rules.

Is the trade-off worth it? For data-heavy applications where bundle size matters, the answer is yes. I watched a dashboard project drop its initial JavaScript payload by 40% after migrating data-fetching components to RSC.`,
  },
  {
    slug: "reconciliation-engine-currency-mismatch",
    title: "Building a Reconciliation Engine for Currency Mismatch",
    description: "Multi-currency transactions break naive reconciliation. I built an engine with threshold-based matching that handles FX rate gaps and rounding without drowning in false positives.",
    date: "2026-05-25",
    tags: ["fintech", "reconciliation", "architecture"],
    content: `A payment gateway settles in USD. Your ledger records the transaction in IDR at the mid-market rate. The provider's settlement arrives 48 hours later at a different rate. The amounts do not match. Your reconciliation report flags a discrepancy. Someone on the finance team spends two hours tracing a $0.47 gap that no one caused and no one can fix.

I have watched this scenario repeat across payment systems. The root cause is the assumption that reconciliation means matching exact amounts. When multiple currencies and FX rates enter the picture, exact matching breaks. You need a reconciliation engine designed for imprecision.

## Why Currency Mismatch Happens

Three forces create mismatches: rate timing (authorization vs settlement rate), provider markups (FX spreads), and rounding differences (different precision levels).

## Designing the Reconciliation Engine

The engine has four layers:

**Normalization.** Convert both sides to a common currency using a reference rate from a neutral provider.

**Threshold-based matching.** Define acceptable variance thresholds per currency pair and transaction size. Use both percentage (for large amounts) and absolute (for rounding artifacts).

**Rate attribution.** Record the implied rate for every matched transaction with variance.

**Exception classification.** Not all exceptions carry the same weight. FX_VARIANCE routes to a dashboard for bulk approval. SUSPICIOUS triggers an alert.

## Lessons from Production

Thresholds need calibration (FX markets shift). Audit every decision (regulators will ask). Separate FX variance from genuine errors (finance teams should not investigate 30-cent gaps with the same urgency as missing $5,000 settlements).`,
  },
  {
    slug: "server-components-data-fetching",
    title: "Server Components Rewired My Data Fetching",
    description: "Switching from useEffect to async server components rewired my React data fetching. What changed and where client-side patterns still win.",
    date: "2026-05-24",
    tags: ["react", "nextjs", "frontend"],
    content: `For three years, my React data fetching looked the same. Component mounts, useEffect fires, loading spinner renders, fetch resolves, state updates, component re-renders. Every page, every dashboard card, every list view followed this pattern. I wrapped it in custom hooks, abstracted it with SWR and React Query, but the mental model stayed fixed: the client asks, the server answers, the component reacts.

Server Components broke that model.

## The New Model: Components Fetch Where They Live

Server Components let a component run on the server with direct access to your data layer, then send only the rendered HTML to the client. No useEffect. No loading state for initial data. No client-side JavaScript for data the server can fetch and render.

The mental model shifts from "fetch then render" to "render fetches."

## Where This Wins

SEO-critical pages (product pages, blog posts). Data-heavy dashboards (each section is its own async component fetching in parallel). Reduced client bundle size (components that only display data ship zero JS).

## Where Client-Side Fetching Still Wins

Interactive components (search with instant results, drag-and-drop). Real-time data (live transaction feed). User-driven fetch chains (fetch B depends on fetch A triggered by a click).

## The Mental Model That Clicked

My transaction dashboard uses server components for the data-heavy sections and client components for the interactive parts. The server renders the full page with data. The client hydrates the interactive bits.

This is the same principle as progressive enhancement, applied at the component level. Render the content on the server. Add interactivity on the client.`,
  },
  {
    slug: "transactional-outbox-pattern-fintech",
    title: "Why I Use Transactional Outbox in Fintech APIs",
    description: "Payment events that vanish between your database and message broker cost real money. The outbox pattern closes that gap without distributed transactions.",
    date: "2026-05-23",
    tags: ["fintech", "architecture", "event-driven"],
    content: `A payment completes. The database commits. The service tries to publish an event to your message broker. The broker is down. The event is gone. The customer sees a successful transaction, but the downstream service that sends confirmation emails, updates ledgers, and triggers reconciliation has no idea it happened.

I have seen this exact scenario in production. The fix is the transactional outbox pattern, and if you build systems that move money, you should understand it.

## The Outbox Pattern: Write Once, Relay Later

The solution: within the same database transaction that updates your business entities, also write the event to an \`outbox\` table. A separate relay process reads the outbox table and publishes events to the message broker.

Both writes, the business entity and the outbox entry, live in the same database. One transaction. One commit. If the transaction rolls back, the outbox entry rolls back too. No phantom events.

## The Relay: Polling vs Tail

Polling works fine for most payment systems (a few seconds of delay is acceptable for downstream consumers). CDC (change data capture via Debezium) is needed for sub-second event delivery.

## What About Ordering?

Events must be published in the order they were created. The outbox table handles this: order by \`created_at\` and publish sequentially per aggregate.

## When the Outbox Pattern Is Overkill

If you are building a CRUD app where an occasional missed event means a delayed notification, a simple retry queue suffices. But if event loss means financial records go out of sync or reconciliation requires manual intervention, the outbox pattern is infrastructure.

Architecture is about trade-offs, not silver bullets. The outbox pattern trades a small amount of operational overhead for a strong guarantee that your events never go missing.`,
  },
  {
    slug: "use-effect-chains-zustand-store-cleanup",
    title: "I Replaced Three useEffect Chains With One Zustand Store and Lost 200 Lines",
    description: "Three dependent useEffect chains tangled across a dashboard component. One Zustand store with derived state fixed it. Here is how the refactor went.",
    date: "2026-05-27",
    tags: ["react", "zustand", "state-management", "frontend"],
    content: `I inherited a dashboard component with three \`useEffect\` hooks wired together like a house of cards. The first fetched user data. The second watched the first result and computed permissions. The third watched permissions and kicked off a secondary API call. Remove one effect and the whole thing collapsed.

The component was 340 lines. Two hundred of them were effect boilerplate, loading spinners, and state-sync plumbing.

## The Problem with Chained Effects

Effects that depend on other effects create implicit ordering. React guarantees effects fire in definition order, but that contract breaks under concurrent features. Add a suspense boundary or a deferred value and your cascade becomes a race.

## The Fix: One Store, Derived State

I pulled the data, permissions, and derived API call into a single Zustand store. Zustand's \`subscribeWithSelector\` middleware let me react to specific slices without triggering full re-renders.

No effects. No \`useEffect\` watching \`useEffect\` watching \`useEffect\`. The store owns the entire data flow in one synchronous-looking async function. The component calls \`fetchUser\` on mount and reads whatever slice it needs.

## What I Lost

Two hundred lines. Three loading states folded into one. Five state variables collapsed into three. The component dropped to 140 lines and became a pure render layer.

## The Pattern I Reach For Now

For any data flow where one fetch depends on another fetch, I skip \`useEffect\` entirely. I put the orchestration in a Zustand store action and let the component subscribe to the result. The store action is a function. I can test it, reuse it across components, and sequence async steps without worrying about React's lifecycle ordering.`,
  },
  {
    slug: "rest-api-error-taxonomy",
    title: "Why Your REST API Needs a Proper Error Taxonomy",
    description:
      "Standard HTTP status codes are not enough. A structured error taxonomy with error codes, severity levels, and machine-readable payloads transforms debugging from guesswork into systematic root cause analysis.",
    date: "2026-05-28",
    tags: ["api-design", "backend", "architecture", "rest"],
    content: `# Why Your REST API Needs a Proper Error Taxonomy

A colleague once asked me why our payment API returned a 400 Bad Request for a transaction with insufficient balance. "That is a validation error, right?" he said. Technically, yes. Practically, that response sent his team hunting through three different services for thirty minutes before finding the actual problem.

Status codes alone cannot carry that nuance. 400 means bad request. 422 means unprocessable entity. 409 means conflict. But those distinctions only help if you know exactly what caused each scenario. For a developer integrating against an API, a status code is a category, not a diagnosis.

## The Taxonomy Problem

Most APIs use status codes as their only error signal. When something goes wrong, the client gets a 400 or 500 plus a human-readable message. For a simple CRUD app, that might be enough. For any system where multiple teams consume the API, it creates a debugging tax that compounds with every integration.

The pattern I see most often in production: a generic error object with a message field and nothing else. The message might say "Validation failed: field X is required." But the client code needs to parse that string to differentiate between a missing field and an invalid value. String parsing as an error handling strategy is fragile and version-dependent.

What I have found works better across multiple projects is a structured error taxonomy with three layers.

## Layer One: Error Codes, Not Status Codes

Every error gets a unique, stable, machine-readable code. These codes never change, not their names, not their meanings. A new version of the API adds new codes but never reuses or modifies existing ones.

\`\`\`json
{
  "error": {
    "code": "INSUFFICIENT_BALANCE",
    "http_status": 400,
    "message": "Account balance 50.00 is below the transaction minimum of 100.00.",
    "field": "amount",
    "severity": "error"
  }
}
\`\`\`

The client code switches on the code, not the HTTP status. The status code is metadata for HTTP middleware and proxies. The error code is the contract.

A few rules I enforce:
- Error codes use SCREAMING_SNAKE_CASE and describe the problem, not the location.
- Each code maps to exactly one error scenario. A code like VALIDATION_ERROR is too broad. You need MISSING_REQUIRED_FIELD and INVALID_FIELD_FORMAT as separate codes.
- I document every error code alongside its endpoints. A well-designed API reference lists every possible error code for each endpoint.

## Layer Two: Machine-Readable Context

The error code tells you what happened. The context tells you why. Every error response includes enough information for the client to act on it without human interpretation.

The key fields:
- **field**: the specific input field or parameter that caused the error, if applicable.
- **value**: the value that triggered the error.
- **constraint**: what the value violated (min, max, pattern, required, unique).
- **trace_id**: a correlation ID that links the error to server-side logs.

A missing required field returns \`{ code: "MISSING_REQUIRED_FIELD", field: "email", constraint: "required" }\`. The frontend can highlight the email field, show a message, and move on — no string parsing needed.

For the payment API scenario I started with, insufficient balance returns:

\`\`\`json
{
  "error": {
    "code": "INSUFFICIENT_BALANCE",
    "http_status": 400,
    "message": "Insufficient balance.",
    "details": {
      "field": "amount",
      "value": "150.00",
      "max_allowed": "100.00",
      "account_id": "acc_abc123"
    },
    "trace_id": "txn_9f3a2b1c"
  }
}
\`\`\`

The frontend shows the max allowed amount directly. The client library catches INSUFFICIENT_BALANCE and offers a balance top-up screen. The support team searches by trace_id and sees the full server-side log.

## Layer Three: Severity and Actionability

Not all errors are equal. A 503 Service Unavailable during a database migration is less urgent than a 401 Unauthorized on an authenticated endpoint. Every error response includes a severity field with three values:

- **error**: the request failed and should not be retried without modification.
- **warn**: the request succeeded but needs attention (deprecated field used, rate limit approaching).
- **retry**: the request failed but might succeed if retried after a delay.

This distinction matters for monitoring and alerting. A spike in \`retry\` severity errors from the database pool tells your team to check connection availability. A spike in \`error\` severity errors from a specific endpoint tells them to check business logic. Different severities route to different playbooks.

## What This Solves in Practice

After switching to this taxonomy on a payment API serving multiple client applications, three things improved.

First, integration time dropped. New client teams spent less time asking "what does this error mean?" because the error response already contained the answer structured for their code. The error reference documentation became a lookup table rather than a troubleshooting guide.

Second, debugging cycles shortened. With trace_id in every response, the support team could jump directly from a customer report to the relevant log entry. No more "when did this happen and on which server?" conversations.

Third, automated recovery became possible. The client library could handle retry-eligible errors transparently, display actionable messages for validation errors, and alert for authorization errors. Error handling went from a switch-on-status-code mess to a clean code-first dispatch.

## The Implementation Cost

Adding a proper error taxonomy to an existing API takes about one sprint of disciplined refactoring. The changes are contained to middleware and error handling layers. Route handlers stay the same. The payoff starts the day after deployment, when the first integration engineer says "oh, the error response tells me exactly what to fix."`,
  },  {
    slug: "prompt-engineering-code-generation",
    title: "Prompt Engineering for Code Generation: What Works vs. What Sounds Smart",
    description:
      "After generating thousands of lines of production code with AI, here are the prompting techniques that consistently deliver and the popular advice I stopped following.",
    date: "2026-05-28",
    tags: ["ai", "prompting", "code-generation"],
    content: `I have written hundreds of prompts that generated thousands of lines of production code. Some produced clean, correct implementations on the first attempt. Others generated plausible-looking nonsense that took longer to fix than writing from scratch. The difference was not the model. It was how I structured the prompt.

Here is what I learned about prompt engineering for code generation, stripped of the internet wisdom that sounds good and fails in practice.

---

## What Does Not Work

The most popular prompt engineering advice is also the least useful for code generation. "Role prompts" fall first. Telling an LLM "you are an expert Python developer with 20 years of experience" does not change the output in measurable ways. It adds tokens, consumes context, and may nudge tone. It does not improve correctness.

Chain-of-thought prompting has a similar gap. For reasoning tasks like math problems, asking the model to "think step by step" improves accuracy. For code generation, the model already processes the problem through its internal reasoning path. Explicit chains-of-thought add tokens without improving the result, and frequently generate convincing but incorrect intermediate steps.

"One-shot everything" advice tells you to provide an example in the prompt. This works when the example matches the problem domain exactly. It backfires when the example constrains the model to a pattern that does not generalize. A generic CRUD example given before a request for a pagination endpoint biases the model toward replicating the example structure, even when a different approach produces better results.

## What Does Work

### 1. Specify the contract, not the implementation

The single most effective technique: describe what the code should accept, what it should return, and what edge cases matter. Leave the implementation details to the model.

\`\`\`
Write a TypeScript function that:
- Accepts an array of transactions and a currency code
- Returns the sum of amounts for matching transactions
- Handles empty arrays (returns 0)
- Handles missing or null amount fields (skips them)
- Returns a number, never NaN or undefined
\`\`\`

This produces better results than "write a function to sum transaction amounts" because it constrains the output space without dictating how to iterate, what variable names to use, or which language features to apply. The model fills in the implementation details from its training. I supply the boundaries.

### 2. Negative constraints

Models handle "do not use X" more reliably than "use Y." Explicit negative constraints reduce hallucination and style drift.

"I want a payment retry function. Do not use recursive calls. Do not mutate the input array. Do not use setTimeout or setInterval."

The model generates imperative loops, avoids functional mutations, and reaches for a proper async retry pattern. Each constraint eliminated a failure mode the model would otherwise choose about 20% of the time.

### 3. Type-first specifications for TypeScript

For TypeScript code, I write the types first and the description second. The type definition is a formal specification that the model cannot misinterpret the way it can misinterpret natural language.

\`\`\`
type RetryConfig = {
  maxAttempts: number;
  backoffMs: number;
  retryableErrors: Array<"timeout" | "rate_limit" | "server_error">;
};

// Implement a retry wrapper for an async function
// Use the config above
// Return the first successful result or throw after exhausting retries
\`\`\`

The types constrain the output more effectively than three paragraphs of prose. The model produces code that matches the type signature by construction.

### 4. Show the failure modes you have seen

This is the technique that separates useful prompts from novice prompts. After the specification, add a line about common mistakes:

"Previous implementations sometimes returned NaN when all transactions had null amounts. Make sure the function handles that edge case."

The model adjusts its output to include the guard rail you specified. This works because the model has seen those failure patterns in its training data and can avoid them when prompted. Without the hint, the model defaults to the most common path, which is also the path that failed in your specific context.

### 5. Verify, do not trust

The most important technique is not a prompt technique at all. It is a verification habit. Each generated block goes through the same pipeline: type check, unit test, edge case review. I do not skip this step for short functions. I have been burned by a two-line utility that looked correct and failed on a null input.

The model generates the first draft. The verification step turns it into production code.

---

## The Real Bottleneck

Prompt engineering for code generation has diminishing returns. The difference between a mediocre prompt and a good prompt is about 30% improvement in first-pass correctness. The difference between a good prompt and verification discipline is an order of magnitude.

I stopped chasing prompt optimization and started treating each generated block as a draft that needs review. The prompt saves typing time. The review saves debugging time. Both matter, but the verification habit delivers outsized returns, and it is not the one that gets blog post clicks.
`,
  },

  {
    slug: "saga-pattern-microservices",
    title: "Saga Pattern in Practice: Distributing Transactions Across Three Microservices",
    description:
      "A hands-on breakdown of the Saga pattern with choreography and orchestration approaches, based on building a three-service payment flow that must not lose money.",
    date: "2026-05-28",
    tags: ["Fintech", "Architecture", "Backend"],
    content: `# Saga Pattern in Practice: Distributing Transactions Across Three Microservices

![Saga Pattern](/images/blog/saga-pattern-microservices.jpg)

Three microservices. One payment flow. Zero room for data loss. This was the problem I faced building a transaction pipeline that moved money through a gateway service, a ledger service, and a notification service. If any step failed, the system needed to undo partial work without leaving the books in an inconsistent state.

The Saga pattern solved it. Here is how I implemented both choreography and orchestration approaches in production, and why you will want the latter for financial workflows.

## The Three-Service Problem

The flow worked like this:

1. **Gateway Service** charges the customer's card.
2. **Ledger Service** records the debit and credit entries.
3. **Notification Service** sends a receipt and updates the merchant dashboard.

If step 1 succeeds and step 2 fails, the customer is charged but the books show nothing. If steps 1 and 2 succeed but step 3 fails, the money is accounted for but the merchant never knows the payment arrived. Each failure scenario leaves a different kind of mess, and each requires a different cleanup strategy.

## Choreography: When Events Drive the Rollback

My first attempt used choreographed sagas. Each service published events on success and listened for failure events from downstream services. The Gateway Service emitted \`charge.completed\`. The Ledger Service subscribed to that, recorded the entry, and emitted \`ledger.updated\`. The Notification Service subscribed to \`ledger.updated\` and sent the receipt.

If the Notification Service failed, it published \`notification.failed\`. The Ledger Service listened for that event and issued a compensating transaction to reverse the entry. The Gateway Service listened for \`ledger.compensation.completed\` and issued a refund.

This worked until it did not. The problems emerged under load:

**Event ordering became unreliable.** A compensation event arrived before the original transaction was fully processed in a different partition. The Ledger Service tried to reverse an entry it had not yet recorded.

**Failure cascades were hard to trace.** When the message broker slowed down, events piled up, and the system entered a state where compensations were racing against confirmations. Debugging required correlating events across four message queues and three databases.

**Adding a new service meant auditing every event handler.** The choreography approach couples services through shared event contracts. Every team needs to understand every event type, and a schema change ripples through the entire chain.

## Orchestration: One Coordinator, Clear Boundaries

The second iteration used a central orchestrator, a dedicated Saga Coordinator service that managed the workflow as a state machine.

\`\`\`typescript
interface SagaStep {
  name: string;
  execute: (ctx: SagaContext) => Promise<SagaResult>;
  compensate: (ctx: SagaContext) => Promise<void>;
  retryPolicy: RetryPolicy;
}

interface SagaContext {
  sagaId: string;
  state: Record<string, unknown>;
  completedSteps: string[];
}
\`\`\`

The coordinator defined the saga as an ordered list of steps. Each step had an \`execute\` function and a \`compensate\` function. If step 3 failed, the coordinator walked backwards through \`completedSteps\`, calling \`compensate\` on each one. The compensation for the Gateway Service issued a refund. The compensation for the Ledger Service reversed the journal entry.

This approach fixed the three problems from choreography:

**Event ordering became deterministic.** The coordinator knew which step came next and never started a compensation until the original step was confirmed complete or had exhausted its retries. No more race conditions between events.

**Failure mode was visible in a single place.** The coordinator wrote its state to a database after each step transition. When something broke, I queried one table to see exactly which step failed, which compensations ran, and whether any compensations themselves failed.

**Adding services was additive.** A new step meant adding one entry to the saga definition. Existing steps did not need to know about it, and existing event handlers did not need updating.

## When to Use Saga Instead of Distributed Transactions

Two-phase commit (2PC) is the alternative, and it has a bad reputation for good reason. It locks resources, reduces throughput, and requires all participants to be available simultaneously. In practice, 2PC works well within a single database or a tightly coupled cluster. Across microservices with independent data stores, it creates availability problems that sagas avoid.

Sagas make a different trade-off. They accept eventual consistency in exchange for higher availability and better throughput. The system is consistent at rest after compensations complete, but briefly inconsistent during a failure scenario. For financial systems, this means you need idempotency on every compensation handler. If the coordinator crashes mid-compensation and retries, you cannot double-refund the customer.

## Production Lessons

Three things made the biggest difference in reliability:

**Idempotency keys on every step.** The Gateway Service's refund endpoint required an idempotency key derived from the \`sagaId + stepName\`. If the coordinator retried a compensation, the gateway returned the existing refund result instead of charging again.

**Retry with backoff before compensation.** Not every failure needs a saga rollback. A database deadlock or a transient network timeout resolves on retry. I configured three retries with exponential backoff before the coordinator declared a step failed and started compensations. This cut unnecessary rollbacks by roughly 60%.

**Compensation handlers must be idempotent and reliable.** If a compensation fails, say the refund API is down, the coordinator needs to retry. I stored failed compensations in a dead-letter queue with a separate recovery process. A manual override on the coordinator's admin endpoint let operations staff mark a compensation as resolved after fixing the downstream issue.

## The Bottom Line

Choreographed sagas work for simple, linear workflows where you accept the coupling cost. For anything involving money, I use orchestrated sagas with a dedicated coordinator, explicit state management, and idempotent compensation handlers. The extra infrastructure, one more service and a state database, pays for itself the first time a production incident requires you to trace exactly what happened across three services.

The Saga pattern is not theoretical. It is the difference between a system that loses money on failures and one that recovers cleanly. Choose orchestration for financial flows. Make every compensation handler idempotent. And never assume a distributed transaction will stay consistent on its own.`,
  },
  {
    slug: "astro-content-collections-blog-pipeline",
    title: "Astro Content Collections Made My Blog Pipeline 10x Easier",
    description:
      "Why Astro's content collections were the best content architecture decision I made, even after migrating to Next.js.",
    date: "2026-05-28",
    tags: ["Astro", "Architecture", "Content"],
    content: `![Blog pipeline architecture](/images/blog/astro-content-collections.jpg)

# Astro Content Collections Made My Blog Pipeline 10x Easier

I migrated this blog from Astro to Next.js. But I missed Astro's content collections more than I expected. Enough that I rebuilt the same pattern inside a TypeScript data file.

## The Content Collection Contract

Astro's content collections enforce a schema on every blog post. Define the shape once — slug, title, date, tags, description — and every post must comply. No missing fields, no inconsistent formatting, no "I forgot the date" commits. The framework validates the contract at build time.

This sounds minor. It is not. Before content collections, I managed blog posts as loose markdown files with YAML frontmatter. Every file was a gamble. One post had \`tags: ["React", "TypeScript"]\`. Another had \`tags: [react, typescript]\`. A third omitted tags entirely. Frontmatter parsing failed silently, and I only noticed when the blog page rendered a null tag array as "undefined".

## The Pattern I Kept

When I moved to Next.js, I could have used markdown files again with gray-matter parsing. Instead, I stored posts as a TypeScript array of typed objects. The same contract Astro enforced, now enforced by the TypeScript compiler.

\`\`\`typescript
export const blogPosts: BlogPost[] = [
  {
    slug: "my-post",
    title: "My Post",
    description: "120 characters that show in Google results",
    date: "2026-05-28",
    tags: ["Tag1", "Tag2"],
    content: \`# My Post\n\nBody here.\`,
  },
];
\`\`\`

No parsing step. No missing fields. The compiler catches everything before the build starts.

## What I Gained

The content collection pattern forced me to think about content as data with a shape, not as freeform documents. That shift changed how I structured the entire pipeline:

- **Featured images** became another field tied to the slug, not a separate file naming convention I had to remember
- **Tags** stayed consistent because the array type enforced quotation marks
- **Content** used template literals, so I never juggled file imports or path resolution

The pipeline went from "write file, validate manually, check rendering, fix frontmatter, repeat" to "write object, push commit, done."

## The Lesson

Astro's content collections taught me that the best content management system is the one that rejects invalid data at compile time, not runtime. I replicated that pattern in Next.js without any content management framework. Just TypeScript, an interface, and a single file.`,
  },
  {
    slug: "dependency-injection-python",
    title: "Dependency Injection in Python Without Frameworks",
    description:
      "Why I stopped using DI frameworks in Python and started writing simpler, more testable code with plain constructors and manual wiring.",
    date: "2026-05-29",
    tags: ["python", "architecture", "design-patterns"],
    content: `![Dependency injection concept](/images/blog/dependency-injection-python.jpg)

# Dependency Injection in Python Without Frameworks

I spent two years using a Python DI framework in production. I removed it last quarter. The code got simpler, the tests got faster, and my team stopped needing to trace through five layers of decorators to understand where objects came from.

## The Problem With DI Frameworks

DI frameworks solve a problem most Python applications do not have. They solve object graph construction for systems with hundreds of classes, deep inheritance trees, and multiple interchangeable implementations. Spring Boot applications need this because Java's type system and lack of first-class functions make manual wiring painful. Python has none of those constraints.

What DI frameworks introduce in Python is invisible coupling. You define your wiring in configuration files, decorators, or module-level registries. When something breaks, the traceback points to the framework's internals, not your code. I watched junior engineers spend hours debugging why a dependency resolved to the wrong implementation, only to find a decorator ordering issue in a config file three imports away.

Python's import system already does most of what DI frameworks offer. Modules are singletons. You can swap implementations at the module level. You can patch in tests with unittest.mock. The framework adds ceremony without adding capability.

## The Plain Constructor Pattern

My rule now: if a class needs dependencies, pass them to \`__init__\`. No decorators. No annotations that trigger auto-wiring. No container lookups.

\`\`\`python
class PaymentProcessor:
    def __init__(
        self,
        gateway: PaymentGateway,
        ledger: LedgerService,
        notifier: NotificationService,
    ):
        self._gateway = gateway
        self._ledger = ledger
        self._notifier = notifier

    def process(self, payment: Payment) -> Result:
        charge = self._gateway.charge(payment)
        self._ledger.record(payment, charge)
        self._notifier.send(payment.user_id, "Payment processed")
        return charge
\`\`\`

This class does not know or care where its dependencies come from. It accepts concrete interfaces as parameters. That is the entire contract. Tests pass mocks. Production code passes real implementations. Wiring happens at a single composition root, typically a function or a factory module.

\`\`\`python
# composition_root.py
def create_payment_processor(config: AppConfig) -> PaymentProcessor:
    gateway = StripeGateway(config.stripe_key)
    ledger = PostgresLedger(config.database_url)
    notifier = EmailNotifier(config.smtp_host, config.from_address)
    return PaymentProcessor(gateway=gateway, ledger=ledger, notifier=notifier)
\`\`\`

This function is the entire dependency graph. It is explicit. It is debuggable. When the database URL changes, I update one string in one place, not a YAML file, a decorator argument, and a provider class.

## What About Interfaces and Abstractions?

Python does not need explicit interfaces. Protocols and duck typing handle this. If your class expects an object with a \`charge()\` method, any object with a \`charge()\` method works. You do not need a \`PaymentGatewayInterface\` base class and a \`@implements\` decorator.

\`\`\`python
from typing import Protocol

class PaymentGateway(Protocol):
    def charge(self, payment: Payment) -> ChargeResult: ...

class StripeGateway:
    def charge(self, payment: Payment) -> ChargeResult:
        # implementation
        pass

class TestGateway:
    def charge(self, payment: Payment) -> ChargeResult:
        return ChargeResult(success=True, id="test-123")
\`\`\`

Protocols give you static type checking without runtime inheritance. Your IDE autocompletes against the protocol. Mypy catches mismatches. And you never import the protocol at runtime in production because it is a typing-only construct.

## When Manual Wiring Becomes Painful

There is a threshold where manual wiring stops scaling. I hit it around 40+ services with interdependencies and multiple environments (local, staging, production) that each need different implementations. At that point, a simple dict-based registry works better than a DI framework.

\`\`\`python
# registry.py
_registry: dict[str, Callable[[], Any]] = {}

def register(name: str, factory: Callable[[], Any]) -> None:
    _registry[name] = factory

def resolve(name: str) -> Any:
    return _registry[name]()

def reset() -> None:
    _registry.clear()
\`\`\`

This is a DI container in 10 lines. No decorators, no annotations, no runtime reflection. Register factories explicitly in your composition root. Tests call \`reset()\` and register mock factories. It is transparent enough that any engineer can read it in under a minute.

## The Testability Argument

DI frameworks claim to improve testability. In practice, they improve testability only for code that was already testable. A class that accepts dependencies through its constructor is testable regardless of whether those dependencies are injected by a framework or by a test file that constructs the class directly.

The difference: framework-injected dependencies hide their wiring. When a test fails because a mock was set up incorrectly, the framework's error messages often point to the container configuration, not the test. Manual wiring produces a stack trace that points to the exact constructor call that failed. That difference saves debugging time daily.

## What I Actually Use

For projects under 20 services, plain constructors and a composition root function. For larger systems, the 10-line registry pattern above. For systems that need runtime configuration reloading or plugin architectures, I reach for a simple factory registry, never a full DI framework.

The hard part of dependency management is not wiring. It is deciding what should be a dependency. That decision cannot be automated by a framework, and replacing it with decorators only delays the thinking you need to do anyway.`,
  },
  {
    slug: "stop-use-effect-data-fetching",
    title: "Stop Using useEffect for Data Fetching",
    description:
      "After seven years of React applications, I stopped using useEffect for data fetching. Here is what I use instead and why the ecosystem moved on.",
    date: "2026-05-29",
    tags: ["react", "frontend", "best-practices"],
    content: `![Stop using useEffect for data fetching](/images/blog/stop-use-effect-data-fetching.jpg)

# Stop Using useEffect for Data Fetching

I wrote my last useEffect-based data fetch in 2023. I did not know it at the time. Six months later, I went back to the component and replaced it with React Query. The pattern I had used for six years looked like a workaround in hindsight.

## The Pattern I Used for Years

A component mounts. useEffect runs with an empty dependency array. The fetch call fires. The loading state toggles. The data lands in a useState. The component re-renders.

\`\`\`tsx
useEffect(() => {
  setIsLoading(true);
  fetch("/api/transactions")
    .then((res) => res.json())
    .then(setData)
    .finally(() => setIsLoading(false));
}, []);
\`\`\`

This code is in production right now in thousands of applications. It works. But it has problems that compound as your app grows.

## The Problems You Discover Later

First, the cleanup gap. The component unmounts while the fetch is in progress. The state update fires on an unmounted component. React warns you. You add an abort controller or a mounted flag. That is more boilerplate for something the framework should handle.

Second, the cache hole. Fetch the same data on two different pages. Both mount, both fire the same request. The browser handles one. The server doubles its load. No cache sharing without adding external infrastructure.

Third, the race condition. The user navigates from page A to page B. Page A fetches transactions. Page B fetches transactions with a different filter. The page B response arrives first. Then page A's response overwrites it. The user sees wrong data.

Each of these has a manual fix. Abort controllers for cleanup. Context providers for caching. Request IDs for race conditions. The fixes work. They also add complexity you should not have to manage.

## What Replaced It

Suspense-based data fetching solved all three problems at the framework level.

With React Query, TanStack Query, or SWR, the same data fetch becomes a declarative hook:

\`\`\`tsx
function useTransactions() {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: () => fetch("/api/transactions").then((r) => r.json()),
  });
}
\`\`\`

The hook handles cleanup automatically. It cancels stale requests on unmount. It caches results by query key, so two components fetching the same data share one network call. It deduplicates in-flight requests, so rapid re-mounts do not fire duplicate fetches.

Server Components go further. The async component runs on the server, fetches data directly from the database, and sends the rendered result to the client. Zero JavaScript for the data-fetching layer. No loading spinners for initial data. No useEffect at all.

## What I Ship Today

For server-rendered pages in Next.js, I use Server Components with async data fetching. The component awaits the database call directly. The client receives rendered HTML.

For interactive client components that need fresh data, I use TanStack Query with a short stale time. The hook manages caching, background refetching, and optimistic updates.

For form mutations and side effects, I use server actions or TanStack Query mutations. useEffect handles exactly one thing in my current codebase: synchronizing with a browser API (resize observer, websocket connection).

The ecosystem moved on from useEffect for data fetching. I moved with it. The code got simpler, the bugs got rarer, and I stopped writing abort controllers by hand.`,

  },
  {
    slug: "hermes-cron-blog-pipeline-autopilot",
    title: "How I Use Hermes Cron Jobs to Run My Blog Pipeline on Autopilot",
    description:
      "Three scheduled runs per day. Zero manual effort. Here is how I automated my entire blog pipeline using Hermes cron jobs and the actual architecture behind it.",
    date: "2026-05-29",
    tags: ["ai", "hermes", "automation", "devops"],
    content: `![Blog pipeline architecture](/images/blog/hermes-cron-blog-pipeline.jpg)

# How I Use Hermes Cron Jobs to Run My Blog Pipeline on Autopilot

This blog post you are reading right now was written by an autonomous agent running on a cron schedule. I did not type a single word of it. I did not research it. I did not open a text editor. I scheduled the job and it happened.

Let me show you how this works, because the architecture decisions that make it reliable are more interesting than the usual "AI writes stuff" demo.

## The Pipeline Architecture

The blog pipeline runs three times per day: morning (technical deep dive), midday (AI/Hermes), and evening (fintech/backend). Each slot has a category and a target word count. The system picks the first unchecked topic from a backlog file, writes the article, generates a featured image, appends it to the Next.js data file, commits, and pushes. All without human intervention.

The architecture has four layers:

**Topic source.** A markdown file acts as the backlog. Each topic has a category, a format, and a checkbox. The cron job reads the file, finds the first unchecked topic matching the current time slot, and marks it in progress.

**Execution layer.** Hermes runs as a scheduled cron job. It loads the blog-writer skill, reads the topic backlog, researches the topic using web search, and writes the article according to a strict style guide. The style guide enforces Bio's voice, bans AI writing patterns, and scores the output before accepting it.

**Asset generation.** The pipeline generates a featured image through the image generation tool. Dark themed, tech oriented, matching the article subject. The image gets saved to the blog's public directory.

**Publishing.** The article goes into a TypeScript array at \`src/data/blog-posts.ts\` as a \`BlogPost\` object. The pipeline commits and pushes. The static site rebuilds on deploy. No manual steps between "topic is unchecked" and "article is live."

## Why Cron Instead of On-Demand

A common suggestion I get: why not have the agent triggered by a button or a webhook? The answer is reliability and autonomy.

A cron schedule eliminates decision fatigue. I do not wake up wondering what to write. The schedule decides. Morning gets technical, midday gets AI topics, evening gets backend content. Each slot has a defined format and depth. The variety is designed, not improvised.

More important, cron means the pipeline runs even when I am traveling, sick, or focused on client work. The blog stays active. The publishing cadence stays consistent. Readers get predictable content without relying on my availability.

## The State Management Problem

A cron pipeline that writes and publishes autonomously needs a state machine. The topic backlog tracks which articles are done, which are in progress, and which are still pending. A separate state file tracks the last topic published per category to avoid overlaps.

The critical design choice: the state file is plain JSON, not a database. JSON that git tracks. This means I can inspect the pipeline state by reading a commit log. If something goes wrong during publishing, the backlog file shows exactly where the process stopped.

## What Can Go Wrong

Three failure modes I designed for:

**Image generation fails.** The image tool might time out or return a low-quality result. The pipeline handles this by trying a fallback prompt with simpler parameters. If both attempts fail, the article publishes without a featured image and flags the issue in the commit message.

**Git push conflicts.** If two cron jobs try to push simultaneously, one will fail. The pipeline checks for a clean working directory before making changes, pulls before pushing, and retries on push failure with exponential backoff.

**Content quality check fails.** The stop-slop scoring system can reject an article as low quality. When this happens, the pipeline does not publish. It marks the topic as held, logs the quality score, and moves to the next topic. No bad content makes it to production.

## The Result

Since setting this up, the blog has published 17 articles across multiple categories with zero manual publishing interventions. The bot does the writing, the image generation, the code insertion, and the git operations. I review the output when I check email and occasionally adjust topics in the backlog.

The effort to set this up was about two hours of skill configuration and cron scheduling. The ongoing effort is zero.

This is the kind of automation that generative AI enables when you stop thinking of it as a chatbot and start thinking of it as a programmable worker. Give it a schedule, a backlog, a set of skills, and the right guardrails, and it runs without you.`,
  },
  {
    slug: "flutter-hot-reload-spoiled-me",
    title: "Flutter's Hot Reload Spoiled Me — Now I Expect It Everywhere",
    description:
      "Flutter's sub-second hot reload ruined other development environments for me. Here is why that expectation is reasonable and what it taught me about developer experience.",
    date: "2026-05-29",
    tags: ["flutter", "mobile", "developer-experience", "frontend"],
    content: `![Flutter hot reload](/images/blog/flutter-hot-reload-spoiled-me.jpg)

# Flutter's Hot Reload Spoiled Me — Now I Expect It Everywhere

I changed a widget property. I hit save. Less than a second later, the emulator showed the updated UI. I did not rebuild the app. I did not navigate back to the screen. The state stayed intact, the scroll position stayed where I left it, and the new design appeared. That was my first week with Flutter. Eighteen months later, I still get irritated when any other framework makes me wait.

## The Moment It Clicked

The first time I used hot reload, I assumed it would not work for real. All demos look fast. But Flutter's hot reload is genuinely different from the live reload offered by most web frameworks. Live reload refreshes the entire page. Hot reload injects updated source code into the running Dart VM, rebuilds the widget tree, and composites the new frame. The app stays running the whole time.

The technical difference matters because it changes how you work. Instead of edit, compile, deploy, navigate to the right screen, wait, squint at the result, I edit, save, and see the change. The iteration loop compresses from 15 seconds to under one. Loop that twenty times per hour and the productivity gap becomes a chasm.

## The Framework I Compare Everything To

I moved back to web development after those eighteen months. React with Vite. Not slow by any measure. But the comparison was unfair and persistent. I would tweak a CSS value, wait for the HMR to propagate, and feel the drag. The app did not crash. It worked. But the loop took three seconds instead of sub-second, state reset on some changes, and the browser occasionally needed a full refresh.

I started paying attention to what made Flutter's hot reload feel different. Three things stood out:

**State preservation.** Flutter keeps the widget state across hot reloads. The scroll position, the text input cursor, the animation frame, all of it stays. Most web HMR tools lose state on every update because the module replacement tears down the component tree.

**Compilation speed.** Dart's ahead-of-time and just-in-time compilation split lets Flutter compile changes incrementally. The compiler only recompiles the modified files and their dependents. Web bundlers re-process the entire dependency graph on every change, even with caching.

**No layout thrash.** Flutter's widget tree rebuilds in a single frame without triggering browser reflow. The new frame composites instantly. No cumulative layout shift, no flash of unstyled content, no white screen while the bundler finishes.

## What This Taught Me About DX

The experience taught me something about developer tooling that I now apply to every project I build. Sub-second feedback loops are not a luxury. They are a productivity amplifier that changes what you attempt.

When iteration takes 15 seconds, you batch changes. You guess three things, check them all at once, and hope one works. When iteration takes under a second, you experiment. You try a value, see the result, try a different value, see the result. The cost of exploration drops to zero, and the quality of the output improves because you explored the design space instead of guessing and moving on.

I now aim for sub-second iteration in every project I set up. It is not always possible. Docker rebuilds, database migrations, and API response times resist compression. But for the code path I spend most of my time in, the feedback loop should be short enough that I never think about it. That standard came from Flutter, and I have not lowered it.`,
  },
  {
    slug: "websocket-reconnection-scale",
    title: "WebSocket Reconnection at Scale: The Strategy Tutorials Skip",
    description:
      "How naive reconnection logic took down my production system, and the backoff, jitter, and state machine patterns that fixed it for 12,000 concurrent connections.",
    date: "2026-05-30",
    tags: ["WebSocket", "Architecture", "Backend", "Scaling"],
    content: `I deployed a real-time trading dashboard and watched 12,000 WebSocket clients reconnect at the same moment when the load balancer cycled. CPU spiked from 30% to max in four seconds and stayed pinned for two minutes. The reconnection logic I had copied from a tutorial caused the outage.

Most WebSocket guides cover the happy path. Open a connection, send messages, receive messages. The reconnection section is a footnote: add exponential backoff. That advice holds for a chat app with 50 users. It breaks at production scale.

## Why Naive Reconnection Kills Your Server

The standard approach looks like this:

\`\`\`typescript
socket.onclose = () => {
  setTimeout(() => connect(), 1000);
};
\`\`\`

This works for one client. With 12,000 clients connected to the same server, a server restart triggers 12,000 reconnection attempts within the same second. Each attempt requires a TLS handshake, an HTTP upgrade, and connection state initialization. The server cannot process them fast enough. Connections time out. Clients retry again. The cycle compounds.

This is the thundering herd problem. I have watched it take down a production system twice.

## Exponential Backoff Is Necessary but Not Sufficient

The fix most teams reach for is exponential backoff. Wait 1 second, then 2, then 4, then 8, capping at 30 seconds. This spreads the load over time, but exponential backoff has a subtle failure mode at scale.

When a server goes down, all clients detect the failure at the same time. They start their backoff at the same base interval. The first wave of reconnections still arrives in a burst. You have reduced the peak from 12,000 to maybe 3,000, but 3,000 simultaneous handshakes will still overwhelm most application servers.

## Jitter: The Missing Piece

The solution is bounded jitter. Add a random component to each backoff interval so clients do not synchronize:

\`\`\`typescript
function getBackoff(attempt: number): number {
  const base = Math.min(1000 * Math.pow(2, attempt), 30000);
  const jitter = base * Math.random();
  return base + jitter;
}
\`\`\`

With jitter, 12,000 clients spread their reconnection attempts across the entire backoff window instead of clustering at power-of-two boundaries. The peak drops from thousands to dozens per second. The server handles that load without breaking a sweat.

In production, I use full jitter as described in the AWS architecture blog's analysis of this problem. Instead of adding a random offset to the base, pick a random value between zero and the backoff ceiling:

\`\`\`typescript
function getBackoff(attempt: number): number {
  const ceiling = Math.min(1000 * Math.pow(2, attempt), 30000);
  return Math.random() * ceiling;
}
\`\`\`

Full jitter produces the most even distribution of reconnection attempts across time. It looks counterintuitive because some clients reconnect near zero delay, but the distribution is smoother than additive or decorrelated jitter at scale.

## The Connection State Machine

Reconnection logic needs a proper state machine. Most implementations I see in code reviews use a boolean: connected or not. That creates race conditions. A client tries to reconnect while a connection is already in progress. Two sockets open. Messages arrive on both. State diverges.

The minimum viable states:

- \`DISCONNECTED\` — no connection, safe to start one
- \`CONNECTING\` — handshake in progress, do not start another
- \`CONNECTED\` — active and receiving messages
- \`RECONNECTING\` — connection lost, backoff timer running

\`\`\`typescript
enum ConnectionState {
  DISCONNECTED,
  CONNECTING,
  CONNECTED,
  RECONNECTING,
}
\`\`\`

Transitions must be atomic. If the state is CONNECTING or RECONNECTING, a new connection attempt is a no-op, not a second socket. If the state is CONNECTED and the socket closes, transition to RECONNECTING and start backoff. Only from DISCONNECTED should a clean connection attempt proceed.

This prevents duplicate connections and the message duplication bugs that follow.

## Heartbeats and Dead Connection Detection

TCP keepalive is not enough. A WebSocket connection can appear open while an intermediary proxy, load balancer, or NAT mapping has dropped it. The operating system may not detect a dead connection for minutes.

Application-level heartbeats solve this. The client sends a ping every 30 seconds. The server responds with a pong. If the client does not receive a pong within 10 seconds, it considers the connection dead and triggers reconnection.

\`\`\`typescript
const HEARTBEAT_INTERVAL = 30000;
const HEARTBEAT_TIMEOUT = 10000;

function startHeartbeat(socket: WebSocket): void {
  const interval = setInterval(() => {
    if (socket.readyState !== WebSocket.OPEN) {
      clearInterval(interval);
      return;
    }

    const timeout = setTimeout(() => {
      socket.close();
      // triggers reconnection via onclose handler
    }, HEARTBEAT_TIMEOUT);

    socket.send("ping");
    socket.once("pong", () => clearTimeout(timeout));
  }, HEARTBEAT_INTERVAL);
}
\`\`\`

The timeout matters as much as the heartbeat. Without it, a dead connection sits in the CONNECTED state while the client assumes everything is fine. Messages queue in the local buffer and vanish.

I set the heartbeat interval to 30 seconds and the timeout to 10 seconds. Shorter intervals catch failures faster but generate more traffic. For a financial dashboard where stale data costs money, 30 seconds is the upper bound I am comfortable with. For a notification system, 60 seconds works.

## Server-Side: Graceful Shutdown

Reconnection is a shared responsibility. The client handles backoff and jitter. The server handles shutdown.

When a server needs to restart, it should send a Close frame with a specific code before terminating connections. I use 4001 for "server shutting down." This tells the client to begin reconnection with zero or minimal delay instead of waiting for a TCP timeout. The client can interpret the close code: a 4001 means the server intended to close this, so reconnect soon. An abnormal close means something broke, so use full backoff.

Better approach: drain connections before shutting down. Stop accepting new connections on the draining instance. Send existing clients a reconnect frame pointing to another instance. Close after a grace period. This rotates servers without triggering a thundering herd.

In one of my backend services, the load balancer health check endpoint returns 503 during the shutdown sequence. The load balancer removes the instance from the pool. New connections route to healthy instances. Existing connections drain over 15 seconds. The server shuts down. Zero thundering herd.

## Testing Reconnection

I have never seen a team that tests reconnection logic well. Most test the happy path once and move on.

Test these scenarios:

- Server sends a close frame with a reconnect code. Client reconnects with zero or minimal delay.
- Network drops without a close frame (kill the process, do not close the socket). Client detects the dead connection via heartbeat timeout and reconnects with backoff.
- Two connection attempts fire at the same time. The state machine rejects the second one.
- Server comes back but drops the connection again within 5 seconds. Backoff increases instead of resetting.
- Backoff reaches the ceiling. Client stays at max interval and does not give up.

A simple integration test: start a WebSocket server, connect 100 clients, kill the server, restart it, verify all 100 clients reconnect within the backoff window without duplicate connections.

## The Full Picture

Reconnection is a distributed systems problem, not a frontend convenience. Your client and server co-design a connection protocol. The client handles timing through backoff, jitter, and a state machine. The server handles signaling through close codes, connection draining, and health checks. Heartbeats bridge the gap, catching dead connections that TCP cannot detect fast enough.

When I stopped treating WebSocket reconnection as a one-liner and started treating it as a protocol, my production incidents from connection management dropped to zero. The code is more complex. The state machine adds a few dozen lines. The heartbeat adds a timer and a timeout. The alternative is explaining to a stakeholder why their dashboard went blank when you restarted a single server.`,
  },
  {
    slug: "multi-agent-orchestration",
    title: "Multi-Agent Orchestration: Why Coordination Is the Hard Problem",
    description:
      "Multi-agent LLM systems fail at coordination, not prompting. Three orchestration patterns and state management strategies I use in production agent workflows.",
    date: "2026-05-30",
    tags: ["ai", "agent-engineering", "architecture"],
    content: `![Multi-agent orchestration network](/images/blog/multi-agent-orchestration.png)

# Multi-Agent Orchestration: Why Coordination Is the Hard Problem

The first time I needed two agents to collaborate on a task, I passed context between them through a shared JSON file. It worked for a demo. It fell apart in production. The agents overwrote each other's state and produced contradictory outputs.

Single-agent architectures dominate the AI engineering conversation. Send a prompt, receive a response. Add tool use and the agent fetches data, writes files, runs commands. This covers most tasks. But some problems demand multiple specialized agents working together: a research agent gathers information, a writing agent produces prose, a review agent validates the output. Each agent has a narrow scope and clear responsibilities. Building any single agent is straightforward. Making them coordinate without stepping on each other is where projects break.

## Three Orchestration Patterns

After building multi-agent systems for my own workflows, I use three coordination patterns. Each trades complexity for capability.

**Sequential Pipeline.** Agent A finishes and passes output to Agent B, who passes to Agent C. No concurrency, no shared state. Each agent receives a clean input and produces a clean output.

I use this for content workflows. A research agent pulls sources, a writing agent drafts, an editing agent polishes. The contract between agents is a typed interface: the research agent returns a structured object with sources and key points, the writing agent expects that exact shape.

Latency is the constraint. Three sequential LLM calls at 5 seconds each means 15 seconds minimum. For batch jobs like my blog pipeline, that works. For interactive use, it does not.

**Supervisor-Worker.** A coordinator agent receives the task, breaks it into subtasks, and delegates each to a specialized worker. Workers return results. The supervisor synthesizes them.

This pattern handles unpredictable task complexity. The supervisor decides how many workers to spawn, what each one does, and whether results need another pass. I use a variation for code generation: one agent plans the architecture, another writes implementation, a third reviews for security issues.

The key design decision is worker autonomy. Workers can have their own tool access and memory, or they can be pure text-in-text-out functions. Giving workers tools increases capability but creates side effects the supervisor cannot predict. In one incident, two workers both tried to write to the same file. I now restrict tool access: workers produce text, the supervisor handles side effects.

**Event-Driven Mesh.** Agents communicate through an event bus. Each agent subscribes to event types and publishes results as events. No central coordinator. Agents react to what they observe.

This handles the most complex scenarios: agents that negotiate, iterate, or respond to external triggers. It also introduces the most surface area for bugs. Event ordering, idempotency, and deadlock prevention become your problem.

I reserve this for systems that need real-time multi-agent interaction. For most workflows, the complexity exceeds the benefit.

## State Management

Multi-agent systems share a problem with distributed systems: concurrent state access. When two agents read and write the same data, you need a strategy.

The cleanest approach: avoid shared state. Pass immutable messages between agents. Each agent owns its state and communicates through structured outputs. This is the sequential pipeline model. It works because nothing accesses the same resource at the same time.

When agents need shared context, use a single-source-of-truth store. One agent writes, others read. In my setup, a context manager holds the shared state and agents request access through function calls. The manager serializes writes and resolves conflicts by timestamp or priority.

Two agents writing to the same resource without a coordination layer will corrupt data. I learned this when two agents edited the same file and one agent's changes vanished. The fix was a write lock: agents request exclusive access, do their work, then release.

## Error Propagation

Agent B fails in a three-agent pipeline. Agent A already completed its work. The system needs a recovery strategy.

I use checkpoints. After each agent completes, the orchestrator saves the intermediate state. A downstream agent failure triggers a retry from the last checkpoint without re-running the entire pipeline. This costs storage but saves token spend and latency on retries.

For supervisor-worker patterns, the supervisor handles retries. A failed worker can be retried with the same input, given a different prompt, or reassigned to another worker. The supervisor has the context to make this decision. Individual workers do not.

## A Minimal Orchestrator

Here is a two-agent pipeline orchestrator I use:

\`\`\`typescript
interface AgentResult {
  success: boolean;
  data: unknown;
  error?: string;
}

async function runPipeline<TInput, TIntermediate, TOutput>(
  input: TInput,
  agentA: (input: TInput) => Promise<AgentResult>,
  agentB: (intermediate: unknown) => Promise<AgentResult>,
  validateIntermediate: (data: unknown) => data is TIntermediate
): Promise<AgentResult> {
  const resultA = await agentA(input);
  if (!resultA.success) {
    return { success: false, data: null, error: \`Agent A: \${resultA.error}\` };
  }

  if (!validateIntermediate(resultA.data)) {
    return { success: false, data: null, error: "Agent A output failed validation" };
  }

  return agentB(resultA.data);
}
\`\`\`

The \`validateIntermediate\` function is the contract between agents. It catches type mismatches before the second agent receives garbage input and produces garbage output. I add a validation step between every agent handoff. These validation schemas serve as living documentation: they describe what each agent expects and produces.

## When to Go Multi-Agent

Most tasks do not need multiple agents. A single well-prompted agent with good tools covers 90% of use cases. Multi-agent orchestration adds value when the task has distinct phases that need different system prompts or tool sets, when output quality depends on specialized expertise a single prompt cannot capture, when independent subtasks benefit from parallel processing, or when error recovery requires retrying specific phases without re-running everything.

My blog pipeline uses three agents because research, writing, and editing need different context windows and different temperature settings. A single agent can do all three, but quality drops when it tries to research at temperature 0.2 and write at temperature 0.7 in the same conversation.

Architecture is about trade-offs, not silver bullets. Multi-agent orchestration solves real problems at the cost of coordination complexity. Use it when the problem demands specialization.`,
  },
  {
    slug: "progressive-kyc-verify-instantly",
    title: "Progressive KYC: Verify Good Users Without the 48-Hour Wait",
    description:
      "A three-tier progressive KYC pipeline that gives legitimate users instant access while escalating only risky accounts. Built after watching fintech onboarding lose 30% of signups to manual review delays.",
    date: "2026-05-30",
    tags: ["fintech", "backend", "architecture"],
    content: `# Progressive KYC: Verify Good Users Without the 48-Hour Wait

![Progressive KYC verification pipeline diagram](/images/blog/progressive-kyc-verify-instantly.jpg)

Most fintech KYC flows assume every user is hiding something. That assumption costs you 30% of signups before a single transaction clears.

The standard pipeline works like a binary switch: submit documents, enter the queue, wait for a human reviewer. A returning customer with a verified bank account and clean history gets the same treatment as someone uploading a photoshopped ID from a flagged IP address. Legitimate users bounce. Fraudsters find other vectors anyway.

## The problem with binary verification

I built KYC pipelines for payment platforms processing thousands of daily signups. One pattern kept surfacing: about 85% of users pass automated checks without issues. Their documents match their provided details. Their device fingerprints look normal. Their email domains have history. Yet these users still sat in a queue behind accounts flagged for manual review, sometimes for two days.

Our systems could handle instant verification. The verification policy, not the pipeline, created the delay. The team treated all users as threats until proven otherwise.

## Three tiers, not two states

The fix is a progressive verification pipeline with three tiers instead of the binary approve or deny model.

**Tier 1: Instant automated clearance.** Document OCR extracts name, DOB, and ID number. Cross-reference against the registration form data. Run the selfie against the ID photo with facial matching. Check the device fingerprint and IP reputation. If all clear, and the transaction volume stays below a threshold, the user gets instant access with a provisional status. No human touches this step. The entire chain runs in under three seconds.

**Tier 2: Risk-based escalation.** Something flagged but minor. Maybe the OCR confidence score hit 89% instead of the required 95%. Maybe the user's IP geolocation differs from their stated address by a neighboring country. The system routes these cases into a prioritized review queue with context attached. The reviewer sees what triggered the escalation, not a vague "documents need review" flag. A good reviewer clears these in under 5 minutes because the system already did the hard part.

**Tier 3: Full manual review.** Document mismatch, high-risk jurisdiction, unusual device configuration, or transactions exceeding provisional limits. These accounts get the full treatment: dedicated reviewer, document re-verification, possible video call. Tier 3 should represent under 5% of your signup volume. If it sits higher, your automated checks need tuning, not more reviewers.

## The architecture that makes this work

The pipeline runs as an async event-driven system. A user submits KYC documents through your API. The system drops a message into a priority queue. A worker picks it up, runs Tier 1 checks, and either emits an \`approved_provisional\` event or escalates to Tier 2.

Provisional approval unlocks core features: send money, receive payments, view transaction history. A daily volume cap keeps fraud exposure contained. Set the cap high enough that legitimate users never hit it and low enough that bad actors cannot drain the system.

Webhook callbacks notify the user's device when tier status changes. The frontend shows a real-time status component: "Verifying your identity" becomes "Identity confirmed, full access pending" becomes "Full access granted." Users see progress instead of a black hole.

## What I learned from building this

The hardest part is not the OCR integration or the document matching. Those are solved problems with solid APIs. The hard part is designing the provisional access model. You must decide what features to unlock at each tier, what limits to set, and what triggers force an immediate downgrade.

I made the mistake of being too conservative on the first iteration. Provisional users could view their balance but nothing else. The feedback was brutal. Users felt more frustrated than if they had just waited for full verification. The second iteration gave provisional users most features with volume caps. Completion rates jumped 40%. Users started transacting within minutes of signup instead of days.

Architecture is about trade-offs, not silver bullets. The trade-off here is fraud exposure versus conversion. A progressive KYC pipeline lets you balance both. Catch bad actors fast while giving legitimate users what they came for: access to your product, now.`,
  },
  {
    slug: "timescaledb-over-influxdb",
    title: "I Chose TimescaleDB Over InfluxDB and Never Looked Back",
    description:
      "When I needed time-series data at scale, I skipped InfluxDB and installed a PostgreSQL extension. Query times dropped 10x and the ops burden vanished.",
    date: "2026-05-30",
    tags: ["database", "postgresql", "performance"],
    content: `# I Chose TimescaleDB Over InfluxDB and Never Looked Back

![PostgreSQL TimescaleDB time-series hypertable visualization](/images/blog/timescaledb-over-influxdb.jpg)

Adding InfluxDB to our stack felt like the obvious move when the payments table crossed 100 million rows. Every architecture diagram for time-series data pointed to a dedicated TSDB. I spent two weeks provisioning it. I regretted it ten minutes after things hit production.

## Two databases, one headache

The first problem surfaced during deployment. Our application, a payment reconciliation system that ingests transaction events from multiple gateways, ran on PostgreSQL alone. Adding InfluxDB meant a second connection pool, a second authentication layer, a second monitoring dashboard, and a second set of backup scripts. Our two-person infrastructure team had to internalize InfluxDB's query language to debug production issues. Every engineer touching the data pipeline needed context about which database held which slice of data.

This is not a theoretical complaint. I watched a midnight incident drag on for forty minutes because the engineer on call knew PostgreSQL cold but needed fifteen minutes to recall InfluxDB's continuous query syntax. The data sat there. The access path defeated him.

## Hypertables: PostgreSQL doing what the team already knows

TimescaleDB installs as a PostgreSQL extension. You run \`CREATE EXTENSION timescaledb;\` and you are done. No separate service, no new query language, no new authentication. The same \`psql\` client, the same connection string, the same role-based access the team uses daily.

The real value is \`create_hypertable()\`. Point it at a timestamp column and a chunk interval. TimescaleDB handles the partitioning. Each chunk lives as a separate physical table, but your queries stay identical. A \`WHERE created_at BETWEEN\` clause gets the query planner to scan only relevant chunks. The optimizer uses partition pruning; the developer writes standard SQL.

Our dashboard queries for transaction volume by hour dropped from 3.8 seconds to 0.4 seconds on a 140-million-row table. No query rewrite. No new syntax to learn. We added a \`time_bucket()\` function for aggregation windows. That is the extent of the TimescaleDB-specific syntax we use.

## The operational cost nobody mentions

A separate InfluxDB instance costs money. Even a modest deployment demands its own compute, its own monitoring, its own backup strategy. TimescaleDB runs inside your existing PostgreSQL instance. The community edition covers hypertables, compression, and continuous aggregates. Those three features handle 90% of time-series workloads.

Compression cut our storage from 180 GB to 35 GB. Continuous aggregates precompute hourly and daily rollups so dashboard queries skip raw data. Both features use SQL. Both ship with sensible defaults. Neither required reading documentation past the first example.

## When InfluxDB still wins

TimescaleDB is not a universal answer. If your team does not use PostgreSQL, or if your time-series workload is pure metrics with zero relational context, InfluxDB's write throughput beats TimescaleDB's append patterns. But if PostgreSQL runs your application, adding a separate TSDB solves one problem by creating three others.

I stayed with PostgreSQL because operational simplicity beats architectural purity in practice. My infrastructure team runs one database technology, debugs one query planner, and backs up one data store. The performance gains are measurable: queries ten times faster. Running one database instead of two simplifies on-call rotations, backup scripts, and schema migrations. That trade-off required no benchmark to validate.`,
  },
  {
    slug: "cqrs-in-practice",
    title: "CQRS in Practice: When the Textbook Meets Production",
    description:
      "What I learned applying CQRS to a payment processing service. Where it helped, where it got messy, and why you shouldn't start with it.",
    date: "2026-05-31",
    tags: ["Architecture", "Design Patterns", "Backend"],
    content: `# CQRS in Practice: When the Textbook Meets Production

I spent two weeks designing a CQRS architecture for a payment processing service. The diagrams were beautiful: separate command and query models, event-driven synchronization, clean bounded contexts. Then production happened, and I had to rethink half of it.

## What CQRS Promises

CQRS (Command Query Responsibility Segregation) splits your data model into two: one for writes (commands) and one for reads (queries). Write models stay focused on business rules and validation. Read models stay optimized for whatever query patterns your UI and reporting need. Each side evolves independently.

For high-throughput systems with asymmetric read/write loads, this separation makes sense. Payment processing fits this profile. We process hundreds of transactions per minute but serve thousands of dashboard queries per second during peak hours.

In a traditional shared model, one schema tries to serve both the OLTP workload (fast writes with strict consistency) and the OLAP workload (complex aggregations for dashboards and reports). The indexes that speed up dashboard queries slow down your inserts. The normalization that keeps your writes consistent makes your reads expensive. This tension exists because one schema serves two masters.

## Where It Helped

The read model separation delivered immediate value. Our transaction dashboard had been running complex joins across six tables to assemble a single view. A merchant dashboard query joined \`transactions\`, \`merchants\`, \`payment_methods\`, \`settlement_batches\`, \`fees\`, and \`statuses\` just to show the last 50 transactions with computed totals. After splitting, the read model became a denormalized projection tuned for those queries. Response times dropped from 800ms to under 50ms.

Command validation improved too. With a dedicated write model, each mutation went through a single pipeline: validate business rules, persist to the write store, publish domain events. No more scattered validation logic across service layers. When a new compliance rule came in requiring additional KYC checks for transactions above a threshold, I knew the single place to add it.

The event-driven sync between write and read models gave us something unexpected: a built-in audit trail. Each state change produced an event: \`TransactionInitiated\`, \`PaymentAuthorized\`, \`SettlementCompleted\`, \`ChargebackReceived\`. If the read model fell behind or got corrupted, replaying events from the write store rebuilt it. Regulators asking for transaction histories got clean, sequential event logs without extra work on our part.

## Where It Got Messy

Eventual consistency catches you first. The textbook says "accept it" and shows a diagram with a few milliseconds of lag. In practice, users submit a payment, then load the dashboard. If the read model hasn't caught up, the transaction isn't there. They submit it again. Duplicate charge.

I solved this with a hybrid approach: after a command succeeds, the API returns the write model's state for the immediate response, while the read model catches up in the background. This works, but it means your API layer knows about both models, which undermines the separation CQRS promises.

Synchronization complexity was the second problem. The event pipeline between write and read models needs to handle failures, retries, ordering, and idempotency. I built a small outbox pattern to ensure events were tracked, but maintaining that infrastructure has a real cost. The pipeline means dead letter queues, replay mechanisms, monitoring for lag, alerting when projections fall behind.

The projection logic itself became a source of bugs. A denormalized read model needs to handle each event type and update its state. When you add a new field to the dashboard, you need to update the projection, rebuild the read model, and handle the migration of existing data. Miss one event handler and your read model drifts from reality.

Debugging compound the problem. When a bug shows up in the read model, you trace it back through events, through the projection logic, through the write model that produced the event. Three places to investigate instead of one. The cognitive overhead is real at 2 AM when the on-call pager goes off.

I spent four hours tracking down why a merchant's total settlement amount was off by one transaction. The write model was correct. The event was published. The projection handler had an ordering bug where a \`SettlementCompleted\` event processed before the corresponding \`PaymentAuthorized\` event because they arrived on different partitions. After that, I added sequence validation to each projection handler.

## Where CQRS Is Overkill

I would not use CQRS for a CRUD application. If your read and write patterns are similar, if your queries are simple enough for a single well-indexed table, if your team is small and shipping speed matters more than architectural purity, a shared model works fine.

CQRS adds operational complexity: two data stores to monitor, two schemas to migrate, an event pipeline to maintain, and eventual consistency to explain to product managers. This cost needs to justify itself with a concrete benefit. If your read queries are fast enough on a shared model, the separation is waste.

I wouldn't start with CQRS on a new project. Begin with a shared model. Add the separation when you have evidence that reads and writes need different optimization paths. Starting with CQRS before you need it burns the same kind of effort as starting with microservices before you need them.

A good heuristic: if your read queries involve fewer than three table joins and return in under 100ms on a shared model, you don't need CQRS. If your write throughput is under 100 TPS and you don't have complex validation rules that benefit from a dedicated aggregate, you don't need CQRS.

## What I'd Do Differently

Start simpler. Use a single model until read performance becomes a measured problem. Then split the queries that need it, not everything. You don't need to go all-in on CQRS to get the benefits. A read replica or a materialized view might solve 80% of your problems with 20% of the effort.

Use a proven event streaming solution instead of building your own. I built the outbox pattern from scratch because I wanted control over the event lifecycle. In hindsight, Debezium or a managed change data capture service would have saved weeks. Rolling your own event infrastructure means you're maintaining two problems instead of solving one.

Invest in observability early. If you can't measure the lag between your write and read models, you can't debug production issues. Build dashboards for event processing latency before you build the next feature. Track the age of the last processed event. Alert when projections fall more than a few seconds behind.

## The Takeaway

CQRS solves a real problem: optimizing read and write paths independently in systems with asymmetric loads. The payment service is better for having it. The dashboard performance improvement alone justified the architecture decision, and the event-driven audit trail became an asset during compliance audits.

But the gap between the clean architecture diagram and the running production system is wide. Eventual consistency, synchronization failures, and debugging complexity are the price of admission. Architecture is about trade-offs, not silver bullets. CQRS trades simplicity for scalability in specific dimensions. Make sure those dimensions matter for your system before you commit.`,
  },
  {
    slug: "ai-pair-programming-hermes-kilocode",
    title: "AI Pair Programming With Hermes and KiloCode: My Actual Daily Workflow",
    description:
      "The real, unvarnished workflow of coding with two AI agents in 2026. No hype, no empty productivity claims — just what works day to day.",
    date: "2026-05-31",
    tags: ["AI", "Hermes", "KiloCode", "developer-tools"],
    content: `# AI Pair Programming With Hermes and KiloCode: My Actual Daily Workflow

The AI pair programming narrative splits into two camps. Camp one insists AI agents write flawless code on the first try and render human developers obsolete by next quarter. Camp two dismisses everything as fancy autocomplete that occasionally guesses the right variable name. Neither version matches what happens on my machine.

I've been coding alongside two AI agents for months. Hermes handles architecture, research, scaffolding, and complex multi-file tasks. KiloCode handles inline edits, tab completions, and context-aware refactors inside my editor. Together they form something more useful than either narrative allows.

![AI Pair Programming With Hermes and KiloCode](/images/blog/ai-pair-programming-hermes-kilocode.jpg)

## The Division of Labor

Hermes and KiloCode occupy different layers of the development stack. This isn't an accident. It's a deliberate separation that emerged after weeks of trial and error.

**Hermes** operates at the project level. It has filesystem access, runs terminal commands, and understands the full codebase. I hand it tasks like "add a transaction reconciliation endpoint with idempotency keys" or "audit the auth flow for security gaps." It reads the relevant files, designs the solution, writes the code, and runs the tests. Hermes works autonomously across multiple files.

**KiloCode** operates at the editor level. It reads the current file and nearby context, then suggests changes inline. I use it for quick refactors, fixing type errors, generating unit tests for a single function, or completing repetitive patterns. KiloCode works within the editor, one file at a time.

The boundary between them matters. Hermes handles decisions that span modules. KiloCode handles decisions that span functions.

## A Real Day in the Workflow

Here's what a typical development session looks like, stripped of hype.

**Morning: Plan with Hermes.** I describe the feature or bug fix in a sentence or two. Hermes reads the relevant parts of the codebase and proposes an approach. If the approach looks solid, I let it execute. If something feels off, I redirect. The key exchange happens in about two minutes.

**Midday: Code with KiloCode.** Once the architecture is set and the scaffolding exists, I open the editor. KiloCode runs in the background, suggesting completions and offering inline edits. The workflow feels like pair programming with a fast junior developer who knows the codebase. I type the intent. KiloCode fills the boilerplate. I review and approve or reject.

**Afternoon: Review and refine with Hermes.** After the bulk of the implementation exists, I ask Hermes to review the diff, run the test suite, and flag anything suspicious. It catches things I miss. The types of errors it finds are mundane but real: a missing edge case, a race condition in a rarely-triggered path, a test that passes by accident.

## What Actually Works

The workflow I settled on isn't what I expected when I started. Several patterns emerged that surprised me.

**Long-running autonomous tasks beat constant back-and-forth.** I used to prompt Hermes one step at a time. That was slow and frustrating. Now I give it a full task description and let it work for 2 to 5 minutes without interruption. The output quality is higher because it maintains context across the full implementation.

**Context windows reward specificity.** Both tools work better when I describe the outcome, not the method. "Add a reconciliation endpoint that matches payments to invoices using transaction references" produces better code than "create a POST route in the payments router that calls the invoice service." The agent finds a better approach than the one I had in mind about half the time.

**KiloCode's inline edits save more time than its completions.** Tab completion is nice. But the real productivity gain comes from selecting a block of code and asking KiloCode to refactor it in place. Extracting a function, converting a callback chain to async/await, adding error handling to a 50-line block — these take seconds instead of minutes.

**Hermes catches architectural problems early.** The biggest surprise was how often Hermes flags a design issue before I write a single line. "This approach will create a circular dependency between the payment and notification services" is the kind of feedback that used to surface during code review, days later. Now it surfaces in the planning phase.

## Where It Breaks Down

Honesty requires admitting the failures.

**Novel problems with no training data.** When I'm working on genuinely new problems — domain-specific business logic, unusual API integrations, proprietary protocols — both tools produce mediocre output. They default to patterns from adjacent domains that don't quite fit.

**Complex state management.** Multi-step workflows with interdependent state, optimistic updates, and rollback logic confuse both agents. They produce code that looks correct in isolation but breaks under concurrency.

**When I disagree with the suggested approach.** Both tools are assertive. They present solutions with confidence. Sometimes the confidence is unwarranted. I've learned to trust my own judgment first and treat the agent's output as a suggestion, not a prescription.

## The Honest Productivity Math

This isn't a "10x developer" story. Those claims are marketing, not engineering.

The real number is closer to 2x, with fewer context switches. I spend less time on boilerplate, less time searching documentation, less time debugging trivial issues. The mental energy I save goes toward architecture decisions, edge case analysis, and code review — the parts of the job that compound.

The workflow didn't replace my judgment. It extended my attention. I can hold more of the system in my head because the agents handle the details I used to track manually.

## What I'd Tell Another Developer

Start with one agent. Learn its boundaries. Add the second only when you have a clear division of labor in mind.

Hermes and KiloCode solve different problems. Using both without a deliberate workflow creates noise, not leverage. The agents end up fighting for your attention instead of amplifying it.

Give autonomous tasks time to complete. Constant supervision defeats the purpose. A five-minute task without interruption produces better output than five one-minute tasks with constant redirection.

Trust your own instincts over the agent's confidence. Every tool in this space produces plausible-looking output. Plausible isn't correct. Review everything. The review is faster than writing from scratch, but skipping it is the fastest route to a production incident.

Architecture is about trade-offs, not silver bullets. AI pair programming is a trade-off too. It trades some control for speed, some depth for breadth, and some certainty for velocity. Whether that trade makes sense depends on what you're building and who you're building it for. For me, the trade has been worth it.`,
  },
  {
    slug: "dead-letter-queues-design-requirement",
    title: "Dead Letter Queues Are a Design Requirement, Not a Failure",
    description: "Why treating DLQs as incidents instead of designed buffers costs you money. Classification, retry strategy, and the reconciliation feedback loop that financial systems need.",
    date: "2026-05-31",
    tags: ["fintech", "architecture", "backend"],
    content: `A payment notification fails to deliver. The webhook returns a 503. The message broker moves it to a dead letter queue. Most teams treat this as an incident. The system is working as designed.

Dead letter queues carry a stigma. The name says "dead." Engineers see messages piling up and panic. Monitoring dashboards flag DLQ depth as a red metric. On-call gets paged. The response is to clear the queue, fix the immediate cause, and move on.

This approach misses the point. A DLQ is not a graveyard. It is a controlled buffer for messages that need human attention, different processing logic, or a retry under different conditions. Designing your DLQ strategy should happen before you write your first message consumer, not after the first incident.

## When Messages Deserve to Die (Temporarily)

Messages end up in a DLQ for specific, predictable reasons. Understanding each reason changes how you design the retry and resolution flow.

**Poison messages.** A message with corrupt data, an unknown schema version, or values that violate business rules. Retrying this message produces the same failure. It needs inspection and manual correction.

**Transient failures with exhaustion.** A downstream service went down, the consumer retried with exponential backoff, and the retry budget ran out. The message is valid. The timing was wrong. These deserve automatic reprocessing once the downstream service recovers.

**Schema evolution gaps.** The producer deployed a new message format before the consumer updated. The consumer cannot parse the payload. This is a deployment coordination problem, not a data problem.

**Resource exhaustion.** The consumer hit a connection pool limit, a rate limit, or a disk space threshold. The message is fine. The environment was not. These resolve when resources free up.

Each requires a different resolution strategy. Treating DLQ as a single bucket for "bad messages" means you cannot automate any of the resolution paths.

## Designing for Classification

The first design decision: separate your DLQs by failure type, or at minimum, tag messages with the failure reason and retry count.

In one of my payment systems, I used three separate queues. One for poison messages (no automatic retry). One for transient failures (retry with backoff). One for schema mismatches (park until consumer is updated). The operations team could see at a glance what category of issue needed attention. Two of the three queues had automated resolution that did not require human intervention.

The metadata attached to each DLQ message matters as much as the queue itself. At minimum, include: the original timestamp, the failure reason, the retry count, the last error message, and a correlation ID that traces back to the original transaction. Without this, resolving a DLQ message means digging through logs to reconstruct what happened.

## The Retry Strategy Is the DLQ Strategy

Your retry configuration determines which messages land in the DLQ and how fast they get there. Getting this wrong means either flooding the DLQ with messages that would have succeeded on retry, or burning through retries so fast that transient failures become permanent.

Three parameters matter.

**Maximum retry count.** For payment processing, I cap retries at 5. For notification delivery, I allow up to 10. The difference reflects the cost of failure. A missed payment settlement is expensive. A delayed notification is acceptable.

**Backoff strategy.** Exponential backoff with jitter. The jitter prevents thundering herd problems when a downstream service recovers and all queued consumers retry at the same time. Without jitter, recovery from an outage can trigger a second outage.

**Retry budget per time window.** Even with backoff, a sustained stream of failures can accumulate. A per-window budget caps total retry attempts in a given period. When the budget is exhausted, new failures go straight to the DLQ without consuming retry slots. This protects the system from spending resources on messages that are failing for a systemic reason.

## Monitoring the Right Metrics

Most teams monitor DLQ depth. Depth tells you something is wrong. It does not tell you what or how urgent. Three metrics give you actionable signal.

**DLQ arrival rate.** How fast messages enter the DLQ. A sudden spike indicates a new failure mode. A gradual increase suggests a degrading dependency. The trend matters more than the absolute number.

**DLQ age.** How long the oldest message has been waiting. In a financial system, a message sitting in the DLQ for more than a few minutes means a transaction is stuck. Age-based alerting catches problems that depth-based alerting misses. A single stale message has low depth but high urgency.

**Resolution rate.** How fast messages leave the DLQ compared to how fast they arrive. If arrival exceeds resolution, you have a growing backlog and an operations problem.

For payment systems, I set alert thresholds based on the financial impact of delay. A settlement message in the DLQ for more than 5 minutes triggers a high-priority alert. A notification message for 30 minutes triggers a low-priority one. The classification comes from the queue the message landed in.

## The Reconciliation Connection

In financial systems, DLQs have a special relationship with reconciliation. A message in the DLQ means a state transition did not happen. The payment was authorized but not captured. The refund was requested but not processed. The ledger entry was written but the notification was not sent.

Reconciliation catches these gaps. Your reconciliation engine compares expected state against actual state on a schedule. When it finds a discrepancy, it generates a reconciliation item that traces back to a DLQ message.

This creates a feedback loop. Reconciliation identifies the gap, the DLQ holds the message, and the resolution of the DLQ message closes the reconciliation item. Designing these systems to work together means reconciliation items include a reference to the DLQ message ID, and DLQ resolution updates the reconciliation status.

I learned this the hard way. Reconciliation flagged 200 uncaptured payments and the operations team had to match each one to a DLQ message by timestamp and amount. Two hours of manual work that a correlation ID would have eliminated.

## Building the Resolution Workflow

The resolution workflow for DLQ messages should be codified, not ad-hoc. I build three resolution paths.

**Automatic reprocessing.** Messages tagged as transient failures get retried on a schedule. The consumer checks whether the downstream service is healthy via a health check endpoint before attempting reprocessing. Success acknowledges the message. Failure increments the retry counter.

**Manual replay with modification.** Poison messages get inspected by a human, the payload gets corrected, and the message is replayed. This requires a UI or CLI that lets operators view the message, edit the relevant fields, and submit it back to the original queue. Building this tooling early saves hours of operational overhead.

**Discard with audit.** Some messages are unrecoverable. A test message from a sandbox environment. A duplicate that was processed through another path. A message for a deactivated merchant. These need a discard action that records the reason for the audit log before removing the message.

Each resolution path produces an audit event. In a regulated financial system, you need to prove that no message was silently dropped. The audit trail for DLQ resolution should include who resolved it, how, when, and what the outcome was.

## What Changed After the First Incident

The first time a DLQ filled up in production, I had none of this. A payment partner's API went down for 45 minutes. Hundreds of settlement messages piled up. The on-call engineer saw a red metric, panicked, and purged the queue to clear the alert. Those messages were gone. The reconciliation engine caught the missing settlements two days later, but by then the resolution required manual intervention with the payment partner.

After that incident, I built the classification, monitoring, and resolution workflow described above. The next time the same partner went down, messages accumulated in the transient failure DLQ. The monitoring showed the trend. When the partner recovered, automatic reprocessing cleared the backlog in minutes. No manual intervention. No reconciliation gap.

The DLQ did its job. I just had to design it to do the job.`,
  },
  {
    slug: "frontend-tooling-fatigue-minimal-stack",
    title: "The Frontend Tooling Fatigue Is Real — Here's My Minimal Stack",
    description:
      "After a decade of frontend work, I settled on five tools that ship and stay stable. No filler, no chasing trends.",
    date: "2026-05-31",
    tags: ["frontend", "tooling", "react", "typescript", "opinion"],
    content: `# The Frontend Tooling Fatigue Is Real — Here's My Minimal Stack

Every six months someone ships a new build tool, a new state manager, or a new meta-framework promising to fix what the last one broke. I stopped chasing. After building frontends for fintech dashboards, internal tools, and customer products over the past decade, I settled on a stack that ships and stays stable.

![Minimal developer workspace](/images/blog/frontend-tooling-fatigue-minimal-stack.jpg)

I learned this lesson the hard way. Early in my career, I built a dashboard using every tool Medium recommended — Redux, styled-components, a custom Webpack config, a state normalizer library I can't name anymore. Six months later, I was the only person who understood the build pipeline. Handoff to another team took three weeks. The next project shipped with half the dependencies. Handoff took two days. The product worked identically.

Here's the stack. Five tools. No filler.

**React with TypeScript, strict mode always.** React earned its place through ecosystem depth and hiring pool size, not architectural purity. For products meant to outlive a quarter, that matters more than elegance. TypeScript strict mode catches entire categories of runtime errors at compile time. In payment UIs where bugs cost money, I've watched it prevent disasters.

**Tailwind CSS.** I resisted it for years. The productivity gain from staying in one file instead of switching between markup and stylesheets compounds daily. Bundle size concerns vanish with purging. Designers can modify values without touching CSS files. That alone saved weeks on a recent project.

**Zustand for state.** Not Redux, not MobX, not seventeen Context providers. Most apps have three to five global states — auth, theme, current workspace, maybe a draft form. Zustand handles them cleanly and stays fast. When a store grows past 50 lines, the problem is usually that data should be derived, not stored.

**Next.js for apps, Astro for content.** Next.js App Router handles complex routing, server components, and API routes for applications. Astro ships zero JavaScript by default — exactly right for blogs and documentation.

That's it. No separate form library. No dedicated fetching wrapper beyond \`fetch()\`. No TanStack Query unless caching genuinely demands it. Every dependency is a liability. Treat it accordingly.

The fatigue comes from believing you need to evaluate everything. You don't. Pick tools that solve problems you have, not problems a blog post told you to anticipate. Ship something. Evaluate whether each tool earned its place. Then close the browser tab and build.`,
  },
  {
    slug: "database-connection-pooling",
    title: "Database Connection Pooling Is Not Set-It-and-Forget-It",
    description:
      "A payment service went dark for 90 seconds. The cause wasn't CPU, memory, or the database. It was pool exhaustion. Here's how to size, tune, and monitor connection pools in production.",
    date: "2026-06-01",
    tags: ["Database", "PostgreSQL", "Performance", "Backend"],
    content: `# Database Connection Pooling Is Not Set-It-and-Forget-It

A payment service I built went dark for 90 seconds during a traffic spike. CPU was idle. Memory was fine. The database was healthy. The application couldn't get a connection.

All 10 connections in the pool were serving active queries. New requests queued, timed out, and returned 503s to the upstream gateway. By the time I traced the root cause, the spike had passed. The logs told a different story: pool exhaustion, then a cascade of timeouts.

Connection pooling is one of those infrastructure decisions many developers configure once and forget. Pick a number between 10 and 20 for the pool size, set the timeout to something reasonable, and move on. That works until traffic demands more than you allocated. In production, this matters because a misconfigured pool is a silent bottleneck that only reveals itself under pressure.

![Database connection pool visualization](/images/blog/database-connection-pooling.jpg)

## How Your Pool Works

A connection pool maintains a set of open database connections that your application reuses. Without pooling, every query pays the cost of a new TCP handshake, TLS negotiation, and authentication. With PostgreSQL over a network, that setup costs 50 to 100 milliseconds per connection. Under load at 200 queries per second, creating a fresh connection for each query would consume 10 to 20 seconds of wall time. The pool eliminates that overhead.

The pool manages three states: active connections serving queries, idle connections waiting for work, and pending requests blocked because all connections are busy. The size and behavior of each state depends on three parameters that deserve more attention than they get.

## The Three Knobs That Matter

**Maximum pool size.** The upper bound on concurrent database connections. Set it too low and requests queue under load. Set it too high and the database spends more time context-switching between connections than executing queries. PostgreSQL's sweet spot sits between \`cpu_cores * 2\` and \`cpu_cores * 4\` for most OLTP workloads, but this varies with query complexity and row counts.

**Connection timeout.** How long a request waits for an available connection before failing. I use 5 to 10 seconds for user-facing services, and 2 to 3 seconds for health checks and internal RPCs. The temptation is to set this high to avoid errors, but a long timeout means requests pile up in your application, consuming memory and threads while they wait. Failing fast gives the caller a chance to retry or degrade.

**Idle timeout.** How long a connection sits unused before the pool closes it. Short idle timeouts free database resources during low traffic periods. Long idle timeouts keep connections warm for bursty traffic. I set this to 300 seconds for services with predictable traffic and 60 seconds for batch jobs that run in bursts.

## How to Size Your Pool

The formula I use: \`pool_size = (average_query_time_seconds × peak_requests_per_second) + safety_margin\`.

If your average query takes 20ms and peak traffic hits 500 requests per second, you need at least \`(0.02 × 500) + 5 = 15\` connections, where 5 is a safety margin for slow queries and unexpected spikes.

Measure your actual query times in production, not in development. A query against a local database with 100 rows behaves nothing like the same query against 50 million rows with concurrent writes. I learned this the hard way: development benchmarks showed 5ms average query times. Production was 22ms. The pool was sized for a world that didn't exist.

## A Concrete Example in Python

Using SQLAlchemy with asyncpg for a FastAPI service, here's the pool configuration I use:

\`\`\`python
from sqlalchemy.ext.asyncio import create_async_engine

engine = create_async_engine(
    "postgresql+asyncpg://user:pass@db-host:5432/payments",
    pool_size=15,          # matches our formula
    max_overflow=5,        # allows 5 extra connections under burst
    pool_timeout=8,        # seconds to wait for a connection
    pool_recycle=1800,     # recycle connections every 30 minutes
    pool_pre_ping=True,    # test connection before use
)
\`\`\`

The \`max_overflow\` parameter lets the pool exceed its normal size during bursts. These overflow connections close when they return to the pool. \`pool_pre_ping\` tests each connection with a lightweight query before handing it to your code, catching stale connections from network blips or database restarts.

For Node.js with pg-pool:

\`\`\`javascript
const pool = new Pool({
  host: 'db-host',
  port: 5432,
  database: 'payments',
  user: 'app_user',
  password: process.env.DB_PASSWORD,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 8000,
});
\`\`\`

Same principles, different syntax. The key is setting these values based on measured data from your production workload, not copying defaults from a tutorial.

## Four Metrics Worth Tracking

After that incident, I added four metrics to every service dashboard:

**Pool utilization** — percentage of connections in active use. When this crosses 80% during normal traffic, the pool needs resizing before the next spike.

**Wait time** — how long requests spend waiting for a connection. Anything above zero under normal load means the pool is undersized. Spikes during traffic bursts are acceptable. Sustained waits are not.

**Connection lifetime** — how long individual connections stay open. Connections open for days accumulate prepared statement caches, temporary table leaks, and state from aborted transactions. Recycling connections every 30 minutes prevents this buildup.

**Checkout failures** — requests that timed out waiting for a connection. This is the metric that should trigger alerts, not CPU or memory. By the time checkout failures appear, users are seeing errors.

## The Fix That Worked

The service that went dark had a pool size of 10. Average query time was 15ms. Peak traffic was 800 requests per second. By the formula, I needed at least 21 connections. I had less than half.

The fix wasn't just increasing the pool size. I split read and write connections into separate pools. Read queries made up 85% of traffic and could use a larger pool without contending with write locks. Write queries got a smaller, dedicated pool that never starved under read pressure.

After the fix, the service handled 3x the original peak without a single checkout failure. Two months later, a marketing campaign doubled normal traffic. I caught the rising pool utilization on the dashboard and resized before users noticed.

Architecture is about trade-offs, not silver bullets. Connection pooling looks simple on the surface. The configuration you choose shapes how your system behaves under pressure. Set your numbers based on measured data. Monitor the four metrics above. Size your pool for the traffic you'll have, not the traffic you have now.`,
  },
  {
    slug: "ai-pair-programming-workflow",
    title: "How I Ship 3x Faster with AI Pair Programming — Not Hype, Actual Workflow",
    description:
      "The concrete workflow I use with AI coding agents to generate, review, and ship production code — no benchmark theater, real time savings, and what the AI still can't do.",
    date: "2026-06-01",
    tags: ["AI", "Developer Tools", "Productivity"],
    content: `# How I Ship 3x Faster with AI Pair Programming — Not Hype, Actual Workflow

The AI coding assistant discourse has split into two camps: evangelists promising 10x productivity and skeptics dismissing it all as autocomplete on steroids. After a year of integrating AI agents into my daily workflow, the reality sits somewhere else. AI pair programming delivers about 3x throughput for specific tasks — and near-zero for others. This is the workflow that gets me there.

## The 3x Claim, Grounded

I measure time from ticket to merged PR, not keystrokes or lines of code. A typical CRUD endpoint with tests, validation, and error handling used to take about 90 minutes. With AI pair programming, that dropped to around 30 minutes. The savings come from three activities: scaffolding, test generation, and boilerplate elimination.

The tasks where AI does not help: debugging race conditions in distributed systems, designing API contracts that survive six months without breaking changes, and making architectural decisions about data modeling. These still require hours of thinking, whiteboarding, and sometimes sleeping on it. The AI cannot do the thinking. It accelerates the typing that follows.

## The Actual Workflow

My setup is Hermes running as a background agent alongside KiloCode in VS Code. Four phases:

**Phase 1: Specification.** I write a spec comment describing what needs to happen — inputs, outputs, edge cases, and constraints. This is where I do the thinking. The comment takes five minutes and forces me to define the problem before writing code.

\`\`\`
// Feature: Refund endpoint for partial order cancellation
// Input: orderId, refundItems[], reason, idempotencyKey
// Output: RefundResponse with amount, status, and reference
// Constraints: must check payment status, must validate refund <= captured amount,
//              must be idempotent, must log for audit
\`\`\`

**Phase 2: Generation.** Hermes generates the implementation — types, validation, the service layer, tests, error handling. About 90 seconds. The output is structured, typed, and follows project conventions because Hermes carries context of the entire codebase through knowledge graphs.

**Phase 3: Review.** I read every line. I treat AI output the same way I treat a junior developer's PR. About 80% of the time, the code is correct and needs minor adjustments. The other 20% requires significant rework: the AI misunderstood a business rule, chose a suboptimal algorithm, or missed an edge case I did not specify in enough detail.

**Phase 4: Refinement.** I iterate. Sometimes that means updating the spec comment with what I learned during review and regenerating. Sometimes it means fixing the one function that is not quite right. The iteration cycles are fast — two to three rounds at most.

## What Makes This Work

Three things separate an effective AI workflow from a frustrating one:

**Context matters more than model size.** A smaller model with full codebase context outperforms a larger model working from a single file. Hermes's knowledge graph tracks dependencies, call hierarchies, and test coverage. When I ask for a refund endpoint, it knows about the payment service, the audit logger, and the existing validation patterns.

**Specification quality determines output quality.** The difference between useful generation and garbage is the clarity of the spec. "Add refund endpoint" produces generic code. Specifying exact constraints and edge cases produces production-ready code. The AI follows instructions to the letter but has no judgment. Give it good instructions.

**Review discipline is non-negotiable.** The fastest way to introduce subtle bugs is to merge AI-generated code without reading it. The second fastest way is to skim it. I have caught the AI hallucinating API methods, mishandling null cases, and generating tests that pass but do not verify the right behavior. Trust the AI like you would trust a smart intern — verify everything.

## Where the Real Time Lives

The productivity gains compound across the development cycle. The initial implementation is faster, but the downstream effects matter more:

The AI writes comprehensive tests from the start. It does not skip edge cases out of laziness or deadline pressure. Fewer bugs reach QA, fewer regressions appear later.

Documentation stays current. I have Hermes generate doc comments alongside the code. They stay accurate because they come from the implementation, not from a separate writing session that gets forgotten.

Refactoring becomes fearless. When I change a data model or API contract, the AI updates every affected file. What used to be a two-hour grep-and-replace session becomes a five-minute verification.

## What This Does Not Replace

AI pair programming does not replace system design, code review, or architectural judgment. It does not replace understanding your users, your business domain, or your deployment environment. It replaces the mechanical part of software engineering: typing out well-understood implementations, generating test cases for known patterns, and converting specifications into code.

The senior engineer who learns to delegate the mechanical work to AI while focusing on the thinking work will ship faster and build better. The senior engineer who dismisses AI tools will fall behind. The junior engineer who relies on AI without developing judgment will write code that looks correct and fails in production.

What I have found after building with these tools for a year is that the bottleneck was never my typing speed. It was the gap between thinking and executing. AI pair programming shrinks that gap. Not by thinking for me. By executing faster once the thinking is done.

![AI Pair Programming Workflow](/images/blog/ai-pair-programming-workflow.jpg)`,
  },
  {
    slug: "optimistic-concurrency-control-order-system",
    title: "Optimistic Concurrency Control for High-Throughput Orders",
    description:
      "How version-column OCC prevents double-spending and inventory oversell in distributed order processing without the performance penalty of pessimistic locks.",
    date: "2026-06-01",
    tags: ["Database", "Architecture", "Backend"],
    content: `# Optimistic Concurrency Control for High-Throughput Orders

A customer clicks "Buy" and your system processes two identical requests within 50 milliseconds. Double-tap on mobile, retry logic gone rogue, CDN edge case. Without concurrency control, you ship two products and charge once. With pessimistic locking, you bottleneck every order through a single database row. There is a third option.

## Why Pessimistic Locks Fail Under Load

Pessimistic concurrency control locks the row before reading it. \`SELECT ... FOR UPDATE\` holds that lock until the transaction commits. In a low-throughput system with short transactions, this works. In an order system handling hundreds of requests per second during a flash sale, transactions queue behind the lock holder. Throughput collapses.

The math is simple. If each transaction takes 50ms and you serialize them with row locks, your theoretical maximum drops to 20 orders per second, per SKU. A popular product during a sale can attract thousands of concurrent attempts. Your database becomes the bottleneck. Customers see timeouts instead of confirmation pages.

## How Optimistic Concurrency Control Works

Optimistic concurrency control assumes conflicts are rare and detects them instead of preventing them. Each row carries a version number. When you read a record, you capture the current version. When you update, you include the version in the WHERE clause and increment it.

\`\`\`sql
UPDATE orders
SET status = 'confirmed', version = version + 1
WHERE id = $1 AND version = $2
\`\`\`

If another transaction updated the row between your read and your write, the version no longer matches. The UPDATE affects zero rows. You detect the conflict and retry, or fail with a clear error response.

The trade-off: the system rejects conflicting transactions instead of blocking them. This means you need application-level retry logic. Non-conflicting transactions proceed at full speed. No lock contention, no queueing, no throughput collapse.

## Implementation Pattern for Order Systems

In a real order system, the conflict window spans multiple operations: check inventory, reserve stock, create the order, deduct balance. Wrapping all of this in a single database transaction with version checks requires deliberate design.

The pattern I use:

1. **Read with version.** Load the inventory record, capturing its version number and available quantity.
2. **Validate in application.** Check that quantity meets the order quantity. This validation happens outside the database. The version check at write time catches races.
3. **Write with version predicate.** Execute the decrement with \`WHERE version = $captured_version\`. Zero rows updated means someone else changed the record.
4. **Retry or fail.** For idempotent operations like inventory deduction, retry up to 3 times with exponential backoff. For non-idempotent operations like order creation, fail and return a conflict to the client.

\`\`\`python
async def reserve_inventory(sku: str, quantity: int, max_retries: int = 3) -> bool:
    for attempt in range(max_retries):
        record = await db.fetch_one(
            "SELECT available, version FROM inventory WHERE sku = $1",
            sku
        )
        if not record or record["available"] < quantity:
            return False

        result = await db.execute(
            """
            UPDATE inventory
            SET available = available - $1, version = version + 1
            WHERE sku = $2 AND version = $3
            """,
            quantity, sku, record["version"]
        )

        if result == "UPDATE 1":
            return True

        backoff = 2 ** attempt * 0.01  # 10ms, 20ms, 40ms
        await asyncio.sleep(backoff)

    return False
\`\`\`

## When Optimistic Wins

Optimistic concurrency control works best when conflicts are rare relative to total throughput. In an order system, two users buying the last unit of inventory produces a conflict. Thousands of users buying different SKUs do not. With the optimistic approach, you pay zero overhead on the 99.9% of transactions that never conflict.

What I have found after building order systems at scale: most concurrency problems come from bad architecture, not bad locking. If two requests for the same order arrive because your API gateway lacks idempotency keys, fix the gateway. Concurrency control is the last line of defense, not the first.

## The Retry Trap

One mistake I encounter: infinite retry loops. When inventory hits zero, every retry returns zero rows updated. The version never changes because no successful update increments it. Your system burns CPU retrying a doomed operation.

Always couple version-checked updates with a retry limit and a clear failure mode. Return \`409 Conflict\` to the client. Push the request to an async fulfillment queue.

For the async path, I prefer a FIFO queue with exactly-once semantics. The queue enforces ordering for a given resource. Concurrent requests become sequential without database-level locking.

## The Bottom Line

Optimistic concurrency control demands deliberate retry design, clear failure semantics, and a realistic assessment of your conflict rate. For high-throughput order systems where most operations target different resources, it delivers throughput that pessimistic locking cannot match.

Start with version columns on every mutable table. Add retry logic with limits. Monitor your conflict rate. If it climbs above 5%, you have a design problem, not a locking problem. Concurrency control reveals architectural flaws. That alone makes it worth implementing early.

![Optimistic Concurrency Control](/images/blog/optimistic-concurrency-control-order-system.jpg)`,
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
