import sqlite3, json

conn = sqlite3.connect("job-tracker.db")

slug = "ey-software-engineer-consultant-manager-4385048323"
source_url = "https://www.linkedin.com/jobs/view/4385048323/"

custom_title = "Senior Software Engineer \u2014 Consulting & Delivery"

custom_summary = """Software engineer with 10+ years of experience delivering digital applications across fintech, e-commerce, and consulting engagements \u2014 combining hands-on engineering depth with the communication and stakeholder management skills of a seasoned consultant. Proven track record leading end-to-end delivery for enterprise clients including Pepperstone, TitanFX, and BaxiaMarkets through multi-stakeholder integration projects spanning payment gateways, trading platforms, and content management systems. Deep expertise in Flutter/Dart for cross-platform mobile development alongside Go, React, Python, and Node.js backends. Experienced in translating complex business requirements into technical architecture, presenting solutions to C-suite stakeholders, and driving accountability across distributed teams. At Wirecard, engineered PCI-DSS compliant payment integrations connecting Prisma Gateway with banking systems serving 14,000+ corporate clients across 69 countries. At CITT Services, acted as a consulting engineer for 6 fintech clients simultaneously \u2014 owning requirements gathering, system design, and production delivery with full ownership and accountability."""

key_achievements = json.dumps([
    "Led integration projects connecting payment gateways with banking systems at Wirecard \u2014 engineering PCI-DSS compliant solutions for 14,000+ corporate clients across 69 countries through multi-stakeholder coordination with banking partners, QA teams, and compliance officers",
    "Served as consulting engineer for 6 fintech clients at CITT Services \u2014 translating business requirements from Pepperstone, TitanFX, and BaxiaMarkets CTOs into production systems while managing stakeholder expectations and delivering on aggressive timelines",
    "Architected and delivered Srabutan.com freelance marketplace as lead engineer \u2014 full-stack ownership from requirements gathering through architecture design, mobile-responsive development, and production deployment on Railway with Docker",
    "Built cross-platform mobile-first e-commerce application with Flutter for KrispiBabi \u2014 integrating payment systems (QRIS, bank transfers), real-time order management, and responsive UI across Android and web",
    "Designed and implemented automated data pipelines reducing manual reporting work by 80% \u2014 connecting multiple data sources through Python, n8n, and PostgreSQL into unified dashboards for business stakeholders",
    "Presented technical architecture solutions to C-level executives at fintech companies \u2014 demonstrating ability to articulate complex systems in business terms and bridge the gap between engineering teams and decision-makers",
    "Maintained testable, well-documented codebases across all client projects \u2014 establishing API design standards, unit testing practices, and code review processes that improved delivery quality and team velocity",
])

cover_letter_hook = """The first time I stood in front of a client's CTO and explained why their payment gateway architecture needed to change, I learned something that no code review ever teaches: the best technical solution is worthless if you cannot articulate why it matters to the person signing the check.

That moment was at Wirecard, where I was integrating Prisma Gateway with banking systems across 69 countries. The technical challenge was real \u2014 PCI-DSS compliance, multi-currency settlement, real-time transaction routing \u2014 but the harder challenge was sitting across from stakeholders who spoke a different language than I did. They did not care about database normalization or API design patterns. They cared about risk, timelines, and whether their merchants would get paid on time.

I learned to translate. And over the next decade at CITT Services, I kept translating \u2014 for Pepperstone's trading platform migration, for TitanFX's compliance dashboard, for BaxiaMarkets' integration with liquidity providers. Each engagement required the same dual skillset: deep hands-on engineering ownership combined with the consulting discipline to manage expectations, navigate ambiguity, and deliver on commitments.

When EY says it wants a Software Engineer at Managerial level who is a 'humble and hungry consultant, always curious, always looking for a better way' \u2014 that is not aspirational language for me. That is the job I have been doing for ten years."""

highlight_projects = json.dumps([
    "EY's digital consulting engagements \u2014 bringing hands-on Flutter/Dart and Go engineering combined with consulting-grade stakeholder management and integration delivery",
])
emphasize_skills = json.dumps(["Flutter", "Dart", "Go", "React", "Python", "Node.js", "API Design", "Unit Testing", "UI Testing", "Agile/Scrum", "Stakeholder Management", "Consulting", "Integration Projects", "System Architecture", "PostgreSQL", "MongoDB", "Docker", "CI/CD", "Technical Communication"])

row = conn.execute("SELECT COUNT(*) FROM applications WHERE slug = ?", (slug,)).fetchone()[0]
if row > 0:
    conn.execute("DELETE FROM applications WHERE slug = ?", (slug,))

conn.execute("""
INSERT INTO applications (
    slug, company_name, company_location, company_industry,
    position_title, position_type, position_remote,
    source_url, source_date_found,
    app_status, app_date_applied,
    jd_summary, jd_responsibilities, jd_requirements, jd_nice_to_have,
    tailoring_emphasize_skills, tailoring_highlight_projects,
    tailoring_custom_summary, tailoring_key_achievements,
    tailoring_cover_letter_hook, tailoring_custom_title,
    created_at, updated_at
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
""", (
    slug, "EY", "Jakarta, Indonesia", "Consulting / Professional Services",
    "Software Engineer - Consultant Manager", "full-time", False,
    source_url, "2026-06-04",
    "draft", None,
    "EY Consulting role for Software Engineer at Manager level - 7+ years experience required, Flutter/Dart or Golang focus, consulting mindset, stakeholder management, integration projects. Jakarta-based.",
    "[]", "[]", "[]",
    emphasize_skills, highlight_projects,
    custom_summary, key_achievements,
    cover_letter_hook, custom_title,
))

conn.commit()
print(f"Inserted: {slug}")
print(f"Total rows: {conn.execute('SELECT COUNT(*) FROM applications').fetchone()[0]}")
conn.close()
