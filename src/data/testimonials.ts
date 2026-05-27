export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "nash-wadud",
    name: "Nash Wadud",
    role: "CEO",
    company: "CITT Services",
    quote:
      "Bio consistently delivers exceptional technical solutions that drive real business value. His ability to architect complex systems while maintaining clean, maintainable code is rare. Over the years, he has been instrumental in delivering projects for our most demanding fintech clients.",
  },
  {
    id: "hannah-rivera",
    name: "Hannah Rivera",
    role: "COO",
    company: "CITT Services",
    quote:
      "I've worked closely with Bio and have been consistently impressed by his technical depth and work ethic. He navigates complex requirements with ease and always finds elegant solutions. A true professional who elevates every project he touches.",
  },
  {
    id: "nadiya-alistika",
    name: "Nadiya Alistika",
    role: "Colleague",
    company: "CITT Services",
    quote:
      "Working alongside Bio has been an incredible professional experience. His deep understanding of both frontend and backend technologies, combined with his calm approach to high-pressure situations, makes him an invaluable team member and mentor.",
  },
  {
    id: "dhruv-sangvikar",
    name: "Dhruv Sangvikar",
    role: "Colleague",
    company: "CITT Services",
    quote:
      "Bio's commitment to technological excellence sets the standard for our entire team. He doesn't just write code — he thinks in systems. Every architecture decision he makes considers scalability, maintainability, and long-term business impact.",
  },
];
