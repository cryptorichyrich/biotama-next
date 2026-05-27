export interface SocialLink {
  platform: string;
  url: string;
  label: string;
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
  metrics: {
    label: string;
    value: string;
  }[];
  socials: SocialLink[];
}

export const profile: Profile = {
  name: "Bio Lumbantoruan",
  role: "System Architect · Fintech Engineer",
  tagline:
    "I design systems that move money, connect markets, and scale under pressure.",
  email: "fxwisdom1@gmail.com",
  phone: "+62 813 9825 3186",
  location: "Jakarta, Indonesia",
  bio: "Over the past decade, I've built everything from PCI-DSS compliant payment gateways to full-stack fintech platforms for brands like Pepperstone and TitanFX. Currently architecting Srabutan, Indonesia's next freelance marketplace, from the ground up.",
  photoUrl: "/photo.jpg",
  metrics: [
    { label: "Years Experience", value: "10+" },
    { label: "Corporate Clients", value: "14,000+" },
    { label: "Countries Served", value: "69" },
    { label: "Projects Delivered", value: "20+" },
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
};
