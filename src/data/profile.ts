export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface Education {
  degree: string;
  institution: string;
  gpa: string;
  startYear: string;
  endYear: string;
}

export interface Certification {
  title: string;
  institution: string;
  date: string;
}

export interface Principle {
  title: string;
  body: string;
}

export interface Profile {
  name: string;
  role: string;
  positioning: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  photoUrl: string;
  summary: string;
  principles: Principle[];
  metrics: {
    label: string;
    value: string;
  }[];
  socials: SocialLink[];
  education: Education[];
  certifications: Certification[];
}

export const profile: Profile = {
  name: "Bio Lumbantoruan",
  role: "Solutions Architect",
  positioning:
    "I design systems where failure is expensive: payment rails, product platforms, and the teams that keep them running.",
  tagline:
    "\u201cThere are no right answers in architecture \u2014 only tradeoffs.\u201d \u2014 Mark Richards",
  email: "fxwisdom1@gmail.com",
  phone: "+62 813 9825 3186",
  location: "Jakarta, Indonesia",
  bio: "",
  photoUrl: "/photo.jpg",
  summary: "Solutions architect with 15 years in fintech delivery and platform engineering, working where failure is expensive: payment integrations under PCI-DSS discipline, ERP implementations end to end, and AI systems in production. I work from discovery to delivery: translating business requirements into solution designs, integration contracts, and explicit trade-offs, choosing boring technology where it protects the business, and keeping the rationale in writing. Still hands-on: React, Next.js, Astro, Node, Python, SQL, Docker, CI/CD. A good solution is measured by one thing: how cheaply the team can change it.",
  principles: [
    {
      title: "Systems over features",
      body: "Model boundaries, data flows, and failure modes before code. Features are easy to add; bad seams are expensive to remove.",
    },
    {
      title: "Trade-offs over hype",
      body: "Every choice has a cost. I make the cost explicit and pick what fits the business, not what is trending.",
    },
    {
      title: "Strategy first",
      body: "Invest where the business differentiates, buy or borrow the rest. Architecture follows the win condition.",
    },
    {
      title: "Built to change",
      body: "Reversible decisions, recorded rationale, boring technology where it counts. The system should get cheaper to evolve, not more expensive.",
    },
  ],
  metrics: [
    { label: "Years Live", value: "15" },
    { label: "Brokers Supported", value: "6" },
    { label: "ERP Rollouts", value: "2" },
    { label: "Projects Shipped", value: "20+" },
  ],
  socials: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/agustinus-biotamalo-lumbantoruan-99126149/",
      label: "LinkedIn Profile",
    },
    {
      platform: "GitHub",
      url: "https://github.com/cryptorichyrich",
      label: "GitHub Profile",
    },
    {
      platform: "Twitter",
      url: "https://x.com/fxwisdom1",
      label: "X Profile",
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/Agustinus.Biotamalo.Lumbantoruan/",
      label: "Facebook Profile",
    },
  ],
  education: [
    {
      degree: "Bachelor of Information System",
      institution: "Swiss German University",
      gpa: "3.34",
      startYear: "2007",
      endYear: "2011",
    },
  ],
  certifications: [
    { title: "AWS Certified Solutions Architect", institution: "Amazon Web Services", date: "2023" },
    { title: "Google Professional Cloud Architect", institution: "Google Cloud", date: "2022" },
  ],
};
