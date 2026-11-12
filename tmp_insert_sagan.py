import sqlite3, json, shutil, datetime

conn = sqlite3.connect('job-tracker.db')
cols = [d[1] for d in conn.execute('PRAGMA table_info(applications)').fetchall()]
print("cols:", len(cols))

slug = "sagan-seo-specialist-remote"
now = datetime.datetime.now().isoformat()
t = "2026-11-12"

jd_resp = [
    "Own technical SEO audits, content plans, implementation and performance reporting",
    "Prioritize fixes and explain organic-growth decisions to clients and colleagues",
]
jd_req = [
    "Agency SEO experience and evidence of work from strategy through implementation",
    "Technical SEO skills and practical use of AI-supported SEO workflows",
    "Clear English and examples of organic-growth results",
]

emph = [
    "Technical SEO audits", "AI-supported SEO workflows", "Organic growth strategy",
    "Search Console & analytics reporting", "Schema.org / structured data",
    "Core Web Vitals & page speed", "Keyword research & content planning",
    "Client communication & prioritisation", "Astro / Next.js / Cloudflare",
]

proj = [
    "Toko Vavelle (tokovavelle.com): ran full technical SEO audit across 50 pages with an AI agent over the OpenSEO MCP server, then fixed titles, meta descriptions, heading hierarchy and schema in the Astro source and shipped it. Re-audit returned 0 issues, up from 20. Site reached page 1 of Google for a competitive product keyword with zero backlink building.",
    "biotama.cv: static-export Next.js CV site that scores on technical SEO fundamentals (structured data, sitemaps, canonical URLs) while staying fast enough to keep Core Web Vitals green.",
    "Srabutan.com: marketplace rebuilt with SSG/SSR rendering, clean URL structure and crawlable category pages, built from an empty repo to production.",
]

achievements = [
    "Cut technical SEO issues from 20 to 0 on a live 50-page ecommerce site in a single working session by running the audit, the code fixes and the post-deploy verification through one AI agent workflow",
    "Took a product keyword to page 1 of Google on a brand-new domain with no backlink campaign, by sequencing technical fixes first and expanding the keyword cluster second",
    "Built and shipped 9 live production sites (ecommerce, marketplace, community directory, content sites) carrying full technical SEO responsibility end to end: crawlability, structured data, Core Web Vitals, sitemaps, IndexNow",
    "Automated keyword research, SERP analysis, rank tracking and index submission behind API-driven tools, cutting a manual audit cycle from days to hours",
]

custom_summary = (
    "Technical SEO specialist with 10+ years shipping production web systems and full ownership of organic growth "
    "on every site I build. I run audits end to end: crawling, structured data, Core Web Vitals, heading hierarchy, "
    "indexing, then I implement the fixes in the codebase rather than handing over a PDF of recommendations. My "
    "differentiator is AI-supported SEO: I build agent workflows that drive keyword research, SERP analysis, audits "
    "and rank tracking through APIs, so an audit that used to take days runs in hours. Recent work took a 50-page "
    "ecommerce site from 20 technical SEO issues to zero and onto page 1 of Google for a competitive product keyword "
    "without a backlink campaign."
)

hook = (
    "Most SEO audits die as a PDF. I ship the fix. On a 50-page ecommerce site last week, I ran the crawl, "
    "prioritised the issues, patched the source templates and re-verified the live deployment the same day, "
    "taking 20 technical SEO issues to zero and moving the site onto page 1 for its main product keyword."
)

row = dict(
    slug=slug,
    company_name="Sagan",
    company_location="Remote",
    company_industry="SEO / Marketing Services",
    position_title="SEO Specialist",
    position_type="full-time",
    position_remote=1,
    source_url="",
    source_date_found=t,
    app_status="draft",
    app_date_applied=None,
    jd_summary="Remote SEO role owning technical audits, content plans, implementation and performance reporting; prioritising fixes and explaining organic-growth decisions to clients. USD 2000 to 2500 per month.",
    jd_responsibilities=json.dumps(jd_resp),
    jd_requirements=json.dumps(jd_req),
    jd_nice_to_have=json.dumps([]),
    tailoring_emphasize_skills=json.dumps(emph),
    tailoring_highlight_projects=json.dumps(proj),
    tailoring_custom_summary=custom_summary,
    tailoring_key_achievements=json.dumps(achievements),
    tailoring_cover_letter_hook=hook,
    tailoring_custom_title="Technical SEO Specialist - AI-Assisted Search Growth",
    created_at=now,
    updated_at=now,
)

# only pass columns that exist
row = {k: v for k, v in row.items() if k in cols}
keys = list(row.keys())
conn.execute(
    f"INSERT OR REPLACE INTO applications ({','.join(keys)}) VALUES ({','.join('?' * len(keys))})",
    [row[k] for k in keys],
)
conn.commit()

rows = conn.execute('SELECT * FROM applications ORDER BY created_at DESC').fetchall()
data = [dict(zip(cols, r)) for r in rows]
with open('src/data/applications-db.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
shutil.copy2('src/data/applications-db.json', 'public/jobs.json')
print(f"Synced {len(data)} applications")

# verify
chk = [d for d in data if d['slug'] == slug]
print("Verify:", "FOUND" if chk else "NOT FOUND")
if chk:
    blob = json.dumps(chk[0], ensure_ascii=False)
    print("em-dash count:", blob.count('\u2014') + blob.count('\u2013'))
    print("pci in achievements:", chk[0].get('tailoring_key_achievements','').lower().count('pci'))
