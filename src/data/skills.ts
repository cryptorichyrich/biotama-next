export interface SkillGroup {
  category: string;
  skills: {
    name: string;
    level?: number; // 1-5, 5 being expert
  }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "Vue", level: 4 },
      { name: "Astro", level: 4 },
      { name: "Tailwind", level: 5 },
      { name: "Next.js", level: 4 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 5 },
      { name: "FastAPI", level: 4 },
      { name: "Express", level: 5 },
      { name: "NestJS", level: 3 },
      { name: "GraphQL", level: 3 },
      { name: "Python", level: 4 },
    ],
  },
  {
    category: "Full-Stack",
    skills: [
      { name: "Next.js", level: 4 },
      { name: "Laravel", level: 4 },
      { name: "Java/Spring", level: 4 },
      { name: "PHP", level: 4 },
    ],
  },
  {
    category: "Infrastructure",
    skills: [
      { name: "Docker", level: 3 },
      { name: "K8s", level: 2 },
      { name: "GitHub Actions", level: 4 },
      { name: "DigitalOcean", level: 4 },
      { name: "n8n", level: 4 },
    ],
  },
  {
    category: "CMS",
    skills: [
      { name: "WordPress", level: 5 },
      { name: "HubSpot", level: 4 },
      { name: "Jekyll", level: 3 },
    ],
  },
  {
    category: "Agentic AI",
    skills: [
      { name: "Hermes", level: 3 },
      { name: "OpenClaw", level: 3 },
      { name: "OpenWork", level: 3 },
    ],
  },
];
