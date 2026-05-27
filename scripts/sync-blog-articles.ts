import { readFileSync } from "fs";
import { join } from "path";
import { execSync } from "child_process";

// Read the devcard blog articles and convert them to a JSON payload
const devcardBlogDir = "C:\\Users\\fxwis\\biotama.tech-astro-devcard\\src\\content\\blog";
const nextBlogDataPath = "C:\\Users\\fxwis\\biotama-next\\src\\data\\blog-posts.ts";

// Articles to add (these slugs DON'T exist in biotama-next)
const articlesToAdd = [
  { slug: "bun-vs-nodejs-backend-engineer", file: "bun-vs-nodejs-backend-engineer.md" },
  { slug: "cqrs-in-practice-real-constraints", file: "cqrs-in-practice-real-constraints.md" },
  { slug: "css-grid-dashboard-layout-fix", file: "css-grid-dashboard-layout-fix.md" },
  { slug: "delegated-boilerplate-ai-agent", file: "delegated-boilerplate-ai-agent.md" },
  { slug: "event-driven-without-event-sourcing", file: "event-driven-without-event-sourcing.md" },
  { slug: "hello-world", file: "hello-world.md" },
  { slug: "idempotent-payment-endpoints-production", file: "idempotent-payment-endpoints-production.md" },
  { slug: "react-server-components-client-side", file: "react-server-components-client-side.md" },
  { slug: "reconciliation-engine-currency-mismatch", file: "reconciliation-engine-currency-mismatch.md" },
  { slug: "server-components-data-fetching", file: "server-components-data-fetching.md" },
  { slug: "transactional-outbox-pattern-fintech", file: "transactional-outbox-pattern-fintech.md" },
  { slug: "use-effect-chains-zustand-store-cleanup", file: "use-effect-chains-zustand-store-cleanup.md" },
  { slug: "autonomous-coding-agents-job-description", file: "autonomous-coding-agents-job-description.md" },
];

function parseFrontmatter(md: string) {
  const match = md.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) throw new Error("No frontmatter found");
  const fm: Record<string, any> = {};
  const fmText = match[1];
  const body = match[2].trim();
  
  // Parse YAML-like frontmatter
  const lines = fmText.split("\n");
  for (const line of lines) {
    const kv = line.match(/^(\w+):\s*(.+)$/);
    if (kv) {
      let val: string = kv[2].trim();
      // Handle arrays [a, b, c]
      if (val.startsWith("[")) {
        val = val.slice(1, -1).split(",").map((s: string) => s.trim().replace(/^"/, "").replace(/"$/, ""));
      }
      // Handle quoted strings
      val = val.replace(/^"(.*)"$/, "$1");
      fm[kv[1]] = val;
    }
  }
  
  return { title: fm.title, description: fm.description, pubDate: fm.pubDate, tags: Array.isArray(fm.tags) ? fm.tags : [fm.tags], body };
}

// Escape content for JS template literal
function escapeForJS(text: string): string {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\${/g, "\\${");
}

// Read existing blog-posts.ts to know the structure
const existing = readFileSync(nextBlogDataPath, "utf-8");

// Find the closing of the export array
const lastBracket = existing.lastIndexOf("];");
const before = existing.slice(0, lastBracket).trimEnd();
const after = existing.slice(lastBracket);

// Generate new entries
const newEntries: string[] = [];
for (const article of articlesToAdd) {
  const filePath = join(devcardBlogDir, article.file);
  const content = readFileSync(filePath, "utf-8");
  const parsed = parseFrontmatter(content);
  const escapedBody = escapeForJS(parsed.body);
  
  // Convert tags to match existing format
  const tags = (parsed.tags as string[]).map((t: string) => `"${t}"`).join(", ");
  
  newEntries.push(`  {
    slug: "${article.slug}",
    title: "${escapeForJS(parsed.title)}",
    description: "${escapeForJS(parsed.description)}",
    date: "${parsed.pubDate}",
    tags: [${tags}],
    content: \`${escapedBody}\`,
  }`);
}

const newContent = before + ",\n" + newEntries.join(",\n") + "\n" + after;

readFileSync(nextBlogDataPath, "utf-8"); // just checking

import { writeFileSync } from "fs";
writeFileSync(nextBlogDataPath, newContent, "utf-8");

console.log(`✅ Added ${newEntries.length} new blog articles to ${nextBlogDataPath}`);
