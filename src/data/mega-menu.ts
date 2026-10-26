export type MegaService = { slug: string; name: string };

export const serviceGroups: { label: string; items: MegaService[] }[] = [
  {
    label: "AI & Data",
    items: [
      { slug: "chatbot-ai", name: "Chatbot & Otomasi AI" },
      { slug: "data-analytics", name: "Data Analytics & BI" },
      { slug: "digitalisasi-arsip", name: "Digitalisasi Arsip & OCR" },
      { slug: "drone-documentation", name: "Drone Documentation" },
    ],
  },
  {
    label: "Software & Produk",
    items: [
      { slug: "website-aplikasi", name: "Website & Aplikasi Web" },
      { slug: "aplikasi-mobile", name: "Aplikasi Mobile" },
      { slug: "sistem-pos", name: "Sistem Kasir POS" },
      { slug: "game-studio", name: "Game Development Studio" },
      { slug: "animasi-vfx", name: "Animasi & VFX" },
    ],
  },
  {
    label: "Infrastruktur",
    items: [
      { slug: "cloud-hosting", name: "Cloud Hosting & VPS" },
      { slug: "jaringan-wifi", name: "Jaringan & WiFi" },
      { slug: "rakit-pc", name: "Rakit PC & Workstation" },
      { slug: "it-support", name: "IT Support & Reparasi" },
    ],
  },
  {
    label: "Keamanan & Enterprise",
    items: [
      { slug: "cybersecurity", name: "Cybersecurity & Pentest" },
      { slug: "cctv-smart-home", name: "CCTV & Smart Home" },
      { slug: "smart-home-iot", name: "Smart Home & IoT" },
      { slug: "it-consulting", name: "IT Consulting & Managed" },
    ],
  },
  {
    label: "Pertumbuhan & Talenta",
    items: [
      { slug: "digital-marketing", name: "Digital Marketing & SEO" },
      { slug: "marketplace-management", name: "Kelola Marketplace" },
      { slug: "bootcamp-coding", name: "Bootcamp & Kursus Coding" },
    ],
  },
];

export const megaServiceCount = serviceGroups.reduce(
  (total, group) => total + group.items.length,
  0,
);

export const variantLinks = [
  { id: "v1", label: "Editorial" },
  { id: "v2", label: "Poster" },
  { id: "v3", label: "Terminal" },
] as const;
