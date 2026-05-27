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
    "Fintech systems architect. 10 years, zero outages.",
  email: "fxwisdom1@gmail.com",
  phone: "+62 813 9825 3186",
  location: "Jakarta, Indonesia",
  bio: "I've spent a decade building payment infrastructure for Pepperstone, TitanFX, and now Srabutan. PCI-DSS compliant gateways, real-time FX trading systems, and marketplace platforms that handle millions in daily throughput. Currently architecting Indonesia's next freelance marketplace from scratch — frontend to backend to cloud deployment.",
  photoUrl: "/photo.jpg",
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
};
