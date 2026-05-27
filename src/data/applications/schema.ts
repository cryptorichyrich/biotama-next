export interface Application {
  slug: string;
  company: {
    name: string;
    website?: string;
    logo?: string;
    location: string;
    industry: string;
  };
  position: {
    title: string;
    department?: string;
    type: "full-time" | "part-time" | "contract" | "freelance";
    remote: boolean;
    salaryRange?: string;
  };
  source: {
    url?: string;
    platform?: string;
    dateFound: string;
  };
  application: {
    status: "draft" | "applied" | "interview" | "offer" | "rejected";
    dateApplied?: string;
    notes?: string;
  };
  jobDescription: {
    summary: string;
    responsibilities: string[];
    requirements: {
      skill: string;
      importance: "required" | "preferred" | "bonus";
    }[];
    niceToHave: string[];
  };
  tailoring: {
    emphasizeSkills: string[];
    highlightProjects: string[];
    customSummary: string;
    keyAchievements: string[];
    coverLetterHook: string;
  };
  contact?: {
    name?: string;
    title?: string;
    email?: string;
    linkedIn?: string;
  };
}
