import sqlite3, json, shutil

conn = sqlite3.connect('job-tracker.db')

slug = "pharos-indonesia-it-manager-91944027"

conn.execute("""
INSERT OR REPLACE INTO applications (
  slug, company_name, company_website, company_location, company_industry,
  position_title, position_type, position_remote,
  source_url, source_platform, source_date_found,
  app_status,
  jd_summary, jd_responsibilities, jd_requirements, jd_nice_to_have,
  tailoring_emphasize_skills, tailoring_highlight_projects,
  tailoring_custom_title, tailoring_custom_summary, tailoring_key_achievements, tailoring_cover_letter_hook,
  created_at, updated_at
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
""", (
  slug,
  'PT Pharos Indonesia',
  'https://www.pharos.co.id',
  'Jakarta Selatan, Jakarta Raya',
  'Pharmaceuticals, Biotechnology & Medical Devices',
  'IT Manager',
  'full-time',
  0,
  'https://id.jobstreet.com/id/job/91944027',
  'Jobstreet',
  '2026-06-04',
  'draft',

  json.dumps("IT Manager at PT Pharos Indonesia — lead and manage IT Software Developer and QA team for pharmaceutical company (1,001-5,000 employees). Oversee end-to-end SDLC (design, development, implementation) for internal and external web-based applications. Coordinate with DevOps infrastructure team and stakeholders. WFO at Kebayoran Lama, Jakarta Selatan. Rp20-24M/month."),

  json.dumps([
    "Lead and manage IT Software Developer and QA team in web application development",
    "Oversee end-to-end system development process (design, development, implementation)",
    "Develop and manage internal and external systems according to business needs",
    "Coordinate with internal and external stakeholders, including DevOps infrastructure team",
    "Monitor, evaluate, and ensure application quality through testing, debugging, and improvement"
  ]),

  json.dumps([
    "S1 Information Technology, Computer Science, or related field",
    "IT Supervisor experience minimum 3-5 years or equivalent position",
    "Web application development experience with Python, Flutter, React, SQL, and Git exposure",
    "Leadership, communication, problem solving skills",
    "Adaptive in dynamic work environment",
    "Willing to work full-time WFO at Head Office Kebayoran Lama, Jakarta Selatan"
  ]),

  json.dumps([]),

  json.dumps(["Team Leadership", "SDLC Management", "Web Application Development", "React", "Python", "SQL", "Git", "QA & Testing", "Stakeholder Management", "DevOps Coordination", "Flutter", "System Design", "Agile", "Project Management"]),

  json.dumps([
    "CITT Services multi-client web platforms (team leadership + delivery)",
    "Srabutan.com full-stack marketplace architecture (design → implementation)",
    "Wirecard enterprise payment system (quality & compliance)"
  ]),

  # Custom title — paraphrased from JD
  "IT Development Manager — Web Applications",

  # Custom summary — tailored for IT Manager at pharmaceutical company
  "IT manager with 10+ years of experience leading web application development teams across fintech, e-commerce, and SaaS domains. Proven ability to manage end-to-end software delivery — from requirements gathering and system design through development, QA testing, and production deployment. Has supervised and mentored developer teams of mixed skill levels, coordinating cross-functionally with DevOps, infrastructure, and business stakeholders to deliver systems that meet regulatory and operational requirements. Strong hands-on foundation in Python, React, SQL, and Git, combined with the leadership and communication skills needed to bridge technical teams with non-technical stakeholders in a corporate environment. Experienced in establishing development standards, code review processes, and QA workflows that improve team output quality and velocity.",

  # Key achievements
  json.dumps([
    "Led web development delivery for 6 enterprise clients simultaneously at CITT Services — managing end-to-end project lifecycles from requirements gathering through design, development, QA, and deployment for Pepperstone, TitanFX, BaxiaMarkets, and other financial services firms",
    "Established development standards, code review processes, and automated testing workflows that reduced post-deployment defects and improved team delivery velocity across all client projects",
    "Architected and oversaw the complete SDLC for Srabutan.com — from system design and database schema through React frontend development, Python/FastAPI backend, Docker containerization, and CI/CD pipeline setup with GitHub Actions",
    "Coordinated cross-functional development between frontend engineers, backend developers, and DevOps/infrastructure teams to ensure seamless system integration and zero-downtime deployments on DigitalOcean and Google Cloud",
    "Implemented QA processes including automated testing, debugging workflows, and continuous improvement cycles for Wirecard's PCI-DSS compliant payment gateway serving 14,000+ corporate clients across 69 countries",
    "Managed stakeholder communication with C-level executives and product owners — translating business requirements into technical specifications, presenting architecture proposals, and delivering progress reports throughout the development lifecycle"
  ]),

  # Cover letter hook
  "Pharmaceutical companies don't just need software — they need systems that never fail when patient safety is on the line. I learned this principle building payment systems at Wirecard where every transaction carried regulatory weight, and I've carried it into every team I've led since. When I saw Pharos Indonesia — a company that has served the Indonesian people for over 50 years — looking for an IT Manager to lead their software development team, I recognized a company that takes reliability as seriously as I do.",
))

conn.commit()

# AUTO-SYNC: export DB → both JSON files
cols = [d[1] for d in conn.execute('PRAGMA table_info(applications)').fetchall()]
rows = conn.execute('SELECT * FROM applications ORDER BY created_at DESC').fetchall()
data = [dict(zip(cols, row)) for row in rows]
with open('src/data/applications-db.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
shutil.copy2('src/data/applications-db.json', 'public/jobs.json')
print(f'Synced {len(data)} applications to both JSON files')

# Verify
row = conn.execute("SELECT slug, company_name, position_title, tailoring_custom_title, app_status FROM applications WHERE slug = ?", (slug,)).fetchone()
print(f"Inserted: {row}")

conn.close()
