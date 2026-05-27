export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    id: "srabutan",
    role: "System Design & Architect",
    company: "Srabutan.com",
    location: "Indonesia",
    startDate: "Jan 2026",
    endDate: "Present",
    highlights: [
      "Architected AI-powered matching system for freelance marketplace",
      "Designed scalable microservices: portfolio management, real-time collaboration, secure payments",
      "Led full-stack development with GitHub Actions, Docker, DigitalOcean",
    ],
    tech: ["React", "Vue", "JavaScript", "Tailwind", "Docker", "Python", "DigitalOcean"],
  },
  {
    id: "citt-services",
    role: "Senior Web Developer",
    company: "CITT Services",
    location: "Dallas, USA",
    startDate: "Jan 2014",
    endDate: "Dec 2025",
    highlights: [
      "Delivered consulting for Pepperstone, TitanFX, BaxiaMarkets, Funded Prop BX, Traderscolo, Liquidity Connect",
      "Built web apps with React, Vue, WordPress, Laravel, HubSpot CMS",
      "Architected backend systems, automated data sync with n8n, Python, Flask",
      "Docker deployment on DigitalOcean & Google Cloud",
    ],
    tech: [
      "Ubuntu",
      "React",
      "PHP",
      "WordPress",
      "Laravel",
      "Vue",
      "Docker",
      "n8n",
      "Python",
      "DigitalOcean",
    ],
  },
  {
    id: "wirecard",
    role: "Host Integrator",
    company: "Wirecard (PT. Aprisma Indonesia)",
    location: "Jakarta, Indonesia",
    startDate: "Aug 2011",
    endDate: "Dec 2013",
    highlights: [
      "Engineered payment gateway integrations at Wirecard subsidiary",
      "Connected Prisma Gateway with banking systems for 14,000+ corporate clients across 69 countries",
      "PCI-DSS compliance across all payment implementations",
    ],
    tech: ["Java", "HTML5", "CSS3", "Spring", "Spring Boot", "Hibernate"],
  },
];
