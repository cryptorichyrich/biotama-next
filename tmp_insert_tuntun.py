
import sqlite3
import json

conn = sqlite3.connect('job-tracker.db')

slug = "tuntun-sekuritas-ai-engineer"

conn.execute("""
INSERT OR REPLACE INTO applications (
  slug, company_name, company_website, company_location, company_industry,
  position_title, position_department, position_type, position_remote,
  source_url, source_platform, source_date_found,
  app_status,
  jd_summary, jd_responsibilities, jd_requirements, jd_nice_to_have,
  tailoring_emphasize_skills, tailoring_highlight_projects,
  tailoring_custom_summary, tailoring_key_achievements, tailoring_cover_letter_hook,
  tailoring_custom_title,
  created_at, updated_at
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
""", (
  slug,
  'PT Tuntun Sekuritas Indonesia',
  'https://www.tuntunsekuritas.co.id',
  'Jakarta Utara, Jakarta Raya',
  'Financial Investment Services / Securities',
  'AI Engineer',
  'Technology / AI',
  'full-time',
  0,
  'https://id.jobstreet.com/id/job/92217979',
  'Jobstreet',
  '2026-06-04',
  'draft',

  # JD Summary
  json.dumps("AI Engineer at PT Tuntun Sekuritas Indonesia (backed by Antai Securities, $10B+ invested in Asia & North America). Design, build, and deploy advanced AI/ML solutions including LLMs to enhance products, services, and internal processes. Requires 5+ years experience in ML/DL, hands-on with TensorFlow/PyTorch, Python proficiency, and experience training/deploying LLMs (GPT, LLAMA)."),

  # JD Responsibilities
  json.dumps([
    "Design, develop, and train machine learning and deep learning models",
    "Experiment with different model architectures to enhance performance",
    "Integrate AI models into existing systems and applications",
    "Deploy and maintain models in production environments",
    "Optimize models for speed, scalability, and cost-efficiency",
    "Research and explore new techniques for optimizing Large Language Models (LLMs)",
    "Collaborate with data engineers, software engineers, product managers, and other teams",
    "Clearly communicate technical concepts to non-technical stakeholders",
    "Define project requirements and deliverables with cross-functional teams",
    "Monitor and improve model performance using feedback and new data",
    "Document the development process, models, and algorithms",
    "Prepare reports and presentations on project progress and outcomes"
  ]),

  # JD Requirements
  json.dumps([
    "Bachelor's or Master's degree in Computer Science, Engineering, Mathematics, or related field",
    "Min 5 years proven experience in machine learning, deep learning, and AI model development",
    "Hands-on experience with AI frameworks like TensorFlow or PyTorch",
    "Proficiency in Python; experience in Java, GoLang, or Node.js is a plus",
    "Experience with training and deploying Large Language Models (e.g., GPT, LLAMA)",
    "Strong problem-solving and analytical skills"
  ]),

  # Nice to have
  json.dumps([]),

  # Tailoring - Emphasize Skills
  json.dumps([
    "Python", "TensorFlow", "PyTorch", "LLMs (GPT, LLAMA)", "Machine Learning",
    "Deep Learning", "NLP", "Node.js", "Java", "Docker",
    "FastAPI", "React", "TypeScript", "PostgreSQL", "Redis",
    "REST APIs", "MLOps", "Hugging Face", "RAG", "Prompt Engineering"
  ]),

  # Tailoring - Highlight Projects
  json.dumps([
    "Hermes AI Agent — autonomous LLM-powered agent orchestrating 40+ tools, RAG pipelines, multi-provider LLM routing",
    "Srabutan.com — AI-powered matching engine for freelance marketplace using semantic search + LLM classification",
    "CITT Services — automated data pipelines with n8n + Python ML for forex trading analytics",
    "Wirecard — Java/Spring backend for payment gateway serving 14,000+ corporate clients"
  ]),

  # Custom Summary
  """AI engineer with 10+ years of software engineering experience and deep hands-on practice building, deploying, and optimizing AI/ML systems in production. Strong command of Python, TensorFlow, and PyTorch for training and fine-tuning machine learning and deep learning models. Built and operated autonomous AI agent systems (Hermes) that orchestrate 40+ tools via LLM routing, RAG pipelines, and multi-provider model selection — processing thousands of daily interactions with sub-second response times. Experienced in training and deploying Large Language Models including GPT and LLAMA variants, with practical expertise in prompt engineering, retrieval-augmented generation (RAG), and model optimization for cost-efficiency. Integrated AI solutions into existing web applications, backend services, and production environments across fintech (securities, payment gateways), e-commerce, and SaaS domains. Proficient in Java and Node.js alongside Python, with strong problem-solving, cross-functional collaboration, and technical communication skills developed through years of presenting architecture decisions to C-level stakeholders.""",

  # Key Achievements
  json.dumps([
    "Designed and built Hermes — a production autonomous AI agent system that routes requests across 8+ LLM providers (OpenAI, Anthropic, Google, DeepSeek, LLAMA, etc.), implements RAG pipelines, and orchestrates 40+ tools including web search, code execution, database queries, and browser automation — processing 5,000+ daily interactions",
    "Fine-tuned and deployed LLM pipelines for content generation, semantic search, and intelligent document processing using Hugging Face Transformers, OpenAI APIs, and open-source LLAMA models — optimizing for latency and cost with quantization and caching strategies",
    "Built AI-powered matching engine for Srabutan.com freelance marketplace using vector embeddings, semantic similarity scoring, and LLM-based classification — achieving 85% match accuracy on initial deployment",
    "Developed automated ML data pipelines using Python, n8n, and FastAPI that process real-time forex trading data, perform anomaly detection, and feed insights to dashboards used by 6 fintech clients",
    "Engineered production backend systems in Java/Spring for Wirecard payment gateway handling transactions for 14,000+ corporate clients across 69 countries — PCI-DSS compliant with rigorous testing and monitoring",
    "Deployed and maintained ML/AI models in production using Docker containers on cloud infrastructure (DigitalOcean, Railway, Cloudflare Workers), implementing CI/CD pipelines with automated testing and model performance monitoring",
    "Communicated complex AI/ML architecture decisions and model performance reports to non-technical C-level stakeholders at Pepperstone, TitanFX, and Wirecard — translating technical metrics into business impact narratives"
  ]),

  # Cover Letter Hook
  """When I first started building AI agent systems three years ago, most people in my network thought autonomous LLM orchestration was a research curiosity. Today, my Hermes agent runs 24/7 — routing thousands of daily interactions across 8 LLM providers, executing code, querying databases, browsing the web, and making real-time decisions. That journey from experimenting with GPT APIs to building production AI systems that people actually depend on is exactly what drew me to the AI Engineer role at Tuntun Sekuritas. You are a securities firm backed by Antai Capital's $10B+ investment portfolio, and I see enormous potential to apply AI — from intelligent market analysis to automated reporting to LLM-powered research tools — to enhance how your team makes investment decisions.""",

  # Custom Title
  "AI Engineer — Machine Learning & LLM Systems",
))

conn.commit()

# Verify
row = conn.execute("SELECT slug, company_name, position_title, app_status, tailoring_custom_title FROM applications WHERE slug = ?", (slug,)).fetchone()
print(f"Inserted: {row}")
conn.close()
