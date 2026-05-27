export interface Project {
  id: string;
  name: string;
  description: string;
  tech: string[];
  url?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "toko-vavelle",
    name: "Toko Vavelle",
    description: "Vietnam Coffee E-Commerce platform built with AstroJS, Tailwind, and SEO-optimized architecture for global reach.",
    tech: ["AstroJS", "Tailwind", "SEO"],
    featured: true,
  },
  {
    id: "vavelle-crispy-pork",
    name: "Vavelle Crispy Pork Belly",
    description: "E-commerce storefront for premium crispy pork belly products, built with AstroJS and Tailwind CSS.",
    tech: ["AstroJS", "Tailwind"],
    featured: true,
  },
  {
    id: "travel-bali",
    name: "Travel to Bali Paradise",
    description: "Travel and booking platform for Bali tourism experiences with responsive design and booking integration.",
    tech: ["AstroJS", "Tailwind"],
    featured: true,
  },
  {
    id: "crossyncorder",
    name: "CrosSyncOrder",
    description: "Forex trade synchronization SaaS platform with real-time WebSocket communication, ZeroMQ messaging, and Kubernetes orchestration.",
    tech: ["Node.js", "Express", "WebSocket", "ZeroMQ", "Docker", "K8s"],
    featured: true,
  },
  {
    id: "baxiamarkets",
    name: "BaxiaMarkets",
    description: "Financial services platform delivering trading infrastructure with WordPress, Laravel, React, and Vue for a seamless client experience.",
    tech: ["WordPress", "Laravel", "React", "Vue"],
    featured: true,
  },
  {
    id: "srabutan",
    name: "Srabutan.com",
    description: "Indonesia's next freelance marketplace — full-stack platform with AI-powered matching, real-time collaboration, and secure payments.",
    tech: ["React", "Vue", "Python", "Docker"],
    featured: true,
  },
  {
    id: "damai-kasih",
    name: "Damai Kasih Channel",
    description: "Religious digital platform for community engagement and content distribution, built with Jekyll and vanilla JavaScript.",
    tech: ["Jekyll", "JavaScript"],
    featured: false,
  },
  {
    id: "vavelle-ai-chat",
    name: "Vavelle AI Chat Interface",
    description: "AI-powered chat application with real-time streaming responses using React, Tailwind, and Groq API integration.",
    tech: ["React", "Tailwind", "Groq"],
    featured: false,
  },
  {
    id: "sales-dashboard",
    name: "Sales Dashboard",
    description: "AI-powered analytics dashboard with FastAPI backend, Next.js frontend, and Gemini AI for intelligent sales insights.",
    tech: ["FastAPI", "Next.js", "Gemini AI"],
    featured: false,
  },
];
