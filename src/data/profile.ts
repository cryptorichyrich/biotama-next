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

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  photoUrl: string;
  summary: string;
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
  role: "System Architect",
  tagline:
    "\u201cThere are no right answers in architecture \u2014 only tradeoffs.\u201d \u2014 Mark Richards",
  email: "fxwisdom1@gmail.com",
  phone: "+62 813 9825 3186",
  location: "Jakarta, Indonesia",
  bio: "",
  photoUrl: "/photo.jpg",
  summary: "Senior fullstack architect with 10+ years of experience building high-performance web applications across fintech, e-commerce, and SaaS domains. Proven track record of architecting scalable systems — from payment gateways processing transactions across 69 countries to AI-powered freelance marketplaces. Deep expertise in React, Next.js, Astro, Node.js, NestJS, FastAPI and modern cloud infrastructure. Combines engineering excellence with business acumen to deliver solutions that satisfy both C-level stakeholders and end-users while maintaining strict regulatory compliance.",
  metrics: [
    { label: "Years Live", value: "10" },
    { label: "Pepperstone Clients", value: "14K+" },
    { label: "Markets Served", value: "69" },
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
