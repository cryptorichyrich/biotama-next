export interface ArchitectureDecision {
  id: string;
  domain: string;
  title: string;
  context: string;
  decision: string;
  tradeoff: string;
  tags: string[];
}

/**
 * Selected architecture decisions, written as lightweight ADRs.
 * Each entry records what was at stake, the call that was made, and the
 * cost accepted. Content is grounded in shipped work, no hypotheticals.
 */
export const decisions: ArchitectureDecision[] = [
  {
    id: "ADR-001",
    domain: "Srabutan / Payments",
    title: "Shift payment risk to the provider",
    context:
      "A marketplace for Indonesian freelancers needed card, virtual account, and QRIS acceptance without holding a payment licence or building reconciliation from scratch.",
    decision:
      "Integrate Xendit's Payment Request API as a pure middleman, render VA numbers and QR codes inside our own checkout, and keep the buyer inside the product. Never redirect to a hosted checkout page.",
    tradeoff:
      "More integration work and a hard dependency on one provider, in exchange for no compliance overhead and a white-label experience the buyer never sees behind.",
    tags: ["Payments", "Xendit", "White-label checkout"],
  },
  {
    id: "ADR-002",
    domain: "biotama.cv / Platform",
    title: "Bake structural data, fetch only what is personal",
    context:
      "A personal site with hundreds of generated application pages, a blog, and a job tracker that changes daily, all running on a zero-budget static host.",
    decision:
      "Static export with structural data baked at build time. Keep personal or frequently changing data in a runtime JSON that the listing fetches, and regenerate through a sync pipeline.",
    tradeoff:
      "New records need a rebuild before generated pages change, in exchange for near-zero hosting cost, fast pages, and a minimal attack surface.",
    tags: ["Next.js", "Static export", "Cost control"],
  },
  {
    id: "ADR-003",
    domain: "UMKM St. Servatius / Data",
    title: "Put trust rules in the database, not only the UI",
    context:
      "A community commerce platform handling contributions, tenders, and permits for a parish ecosystem, where a UI-only check would be one bug away from a data incident.",
    decision:
      "Enforce access with Row-Level Security across 25 SQL migrations and a three-layer contribution guard: interface, explicit consent, database policy. Digitize paper permits into signed, auto-numbered PDFs.",
    tradeoff:
      "More migration work and policy maintenance, in exchange for defense in depth and an audit-friendly trail the community can trust.",
    tags: ["Supabase", "RLS", "Compliance"],
  },
  {
    id: "ADR-004",
    domain: "MallOps / ERP",
    title: "Keep the ERP boring where it protects the money",
    context:
      "A mall operations suite needed leasing contracts, monthly billing, IoT meter readings, and tax-compliant invoicing under a fixed delivery window.",
    decision:
      "Build on Odoo 19 instead of a bespoke stack, and write custom logic only where it differentiates: state-machine leases, billing rules, DOKU payments, and an 18-endpoint API hub. 60+ automated tests run on fresh databases.",
    tradeoff:
      "Constraint to Odoo's data model and upgrade path, in exchange for a battle-tested accounting and invoicing core and months of delivery time saved.",
    tags: ["Odoo", "PostgreSQL", "Automation"],
  },
];
