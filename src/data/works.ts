export type WorkPalette = {
  bg: string;
  ink: string;
  muted: string;
  accent: string;
  card: string;
};

export type Work = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  status: string;
  live: string;
  role: string;
  description: string;
  challenge: string;
  solution: string;
  outcomes: { v: string; l: string }[];
  highlights: { title: string; desc: string }[];
  stack: string[];
  palette: WorkPalette;
  font: "serif" | "sans";
  shots: { desktop: string; mobile: string };
  accentText: "light" | "dark";
};

export const works: Work[] = [
  {
    slug: "srabutan",
    name: "Srabutan",
    tagline: "Talenta terverifikasi. 0% komisi. Selamanya.",
    category: "Marketplace",
    status: "Live",
    live: "https://srabutan.com",
    role: "Product, design, full-stack",
    description:
      "Marketplace jasa Indonesia yang mempertemukan talenta terverifikasi dengan klien tanpa memotong komisi. Dibangun dari nol, termasuk pencarian, profil, alur proyek, dan pembayaran.",
    challenge:
      "Talenta kehilangan sebagian pendapatan ke komisi platform, sementara klien sulit menilai siapa yang benar-benar bisa mengerjakan proyek.",
    solution:
      "Profil terverifikasi, pencarian berbasis kecocokan, ruang kerja kolaboratif, dan pembayaran aman. Model bisnisnya tidak mengambil potongan dari talenta.",
    outcomes: [
      { v: "0%", l: "komisi untuk talenta" },
      { v: "24/7", l: "profil dan pencarian aktif" },
      { v: "1", l: "alur dari cari sampai bayar" },
    ],
    highlights: [
      { title: "Pencocokan talenta", desc: "Klien menemukan talenta dari keahlian, portofolio, dan verifikasi, bukan dari iklan." },
      { title: "Ruang kerja", desc: "Diskusi, brief, dan progres proyek berada di satu tempat." },
      { title: "Pembayaran aman", desc: "Alur pembayaran dirancang agar kedua pihak punya kepastian." },
    ],
    stack: ["React", "Vue", "Python", "Docker", "PostgreSQL"],
    palette: { bg: "#F5F0EB", ink: "#1A1612", muted: "#6F655A", accent: "#C9A358", card: "#FBF8F4" },
    font: "serif",
    shots: { desktop: "/assets/shots/srabutan-desktop.webp", mobile: "/assets/shots/srabutan-mobile.webp" },
    accentText: "dark",
  },
  {
    slug: "tokovavelle",
    name: "Toko Vavelle",
    tagline: "Kopi Vietnam premium, dijual dengan rasa dan sistem.",
    category: "E-commerce",
    status: "Live",
    live: "https://tokovavelle.com",
    role: "Brand site, storefront, AI photography",
    description:
      "Toko online kopi Vietnam dengan katalog, cerita produk, dan arsitektur SEO yang rapi. Fotografi produk komersial diproduksi otomatis dengan pipeline AI, lalu dikurasi manusia.",
    challenge:
      "Brand kopi premium butuh foto produk yang konsisten, halaman katalog yang cepat, dan struktur SEO yang siap tumbuh tanpa menambah biaya studio setiap bulan.",
    solution:
      "Storefront Astro yang cepat, sistem konten produk, dan pipeline fotografi AI untuk menghasilkan variasi visual komersial. Semua dipadukan dengan metadata dan struktur halaman yang bersih.",
    outcomes: [
      { v: "52", l: "halaman storefront" },
      { v: "AI", l: "fotografi produk terkurasi" },
      { v: "SEO", l: "struktur katalog & artikel" },
    ],
    highlights: [
      { title: "Katalog yang menjual", desc: "Halaman produk menonjolkan asal, rasa, dan cara seduh, bukan hanya harga." },
      { title: "Pipeline foto AI", desc: "Variasi visual produk diproduksi cepat, lalu dipilih dan disunting untuk menjaga rasa brand." },
      { title: "Siap ditemukan", desc: "Metadata, kecepatan, dan struktur konten dirancang untuk pencarian dan AI." },
    ],
    stack: ["Astro", "Tailwind", "fal.ai", "Nano Banana", "SEO"],
    palette: { bg: "#FFFFFF", ink: "#00303F", muted: "#5F6F76", accent: "#CDAC81", card: "#F8F4EC" },
    font: "serif",
    shots: { desktop: "/assets/shots/vavelle-desktop.webp", mobile: "/assets/shots/vavelle-mobile.webp" },
    accentText: "light",
  },
  {
    slug: "umkm-st-servatius",
    name: "UMKM St. Servatius",
    tagline: "Usaha umat, saling mendukung.",
    category: "Community commerce",
    status: "Live",
    live: "https://umkm.servatius.id",
    role: "Product, design, full-stack",
    description:
      "Direktori dan platform komunitas untuk UMKM Paroki St. Servatius. Menyatukan profil usaha, verifikasi multi-peran, tender dan bazar, serta perizinan digital.",
    challenge:
      "Data usaha umat tersebar di grup chat dan spreadsheet. Proses izin bazar masih berbentuk formulir kertas, sulit dilacak, dan rawan duplikasi.",
    solution:
      "Direktori dengan verifikasi berlapis, alur tender dan bazar dengan guard kontribusi di UI, consent, dan database, serta formulir SOP diubah menjadi izin PDF bernomor dan bertanda tangan.",
    outcomes: [
      { v: "68", l: "halaman statis" },
      { v: "25", l: "migrasi SQL dengan RLS" },
      { v: "3", l: "lapis guard kontribusi" },
    ],
    highlights: [
      { title: "Verifikasi multi-peran", desc: "Admin, pengurus, dan pemilik usaha punya kewenangan yang jelas." },
      { title: "Bazar & tender", desc: "Pendaftaran, seleksi, dan kuota kontribusi terkontrol tanpa saling menimpa." },
      { title: "Izin digital", desc: "Formulir kertas menjadi PDF bernomor dengan tanda tangan digital." },
    ],
    stack: ["Astro", "React", "TypeScript", "Supabase", "PostgreSQL"],
    palette: { bg: "#FDFBF6", ink: "#1A1D1B", muted: "#6B6E68", accent: "#D4942A", card: "#FFFFFF" },
    font: "sans",
    shots: { desktop: "/assets/shots/umkm-desktop.webp", mobile: "/assets/shots/umkm-mobile.webp" },
    accentText: "dark",
  },
  {
    slug: "healer-path",
    name: "Healer Path",
    tagline: "Belajar memulihkan diri sendiri dan orang lain.",
    category: "Personal brand",
    status: "Live",
    live: "https://healerpath.id",
    role: "Design, Jekyll, CMS",
    description:
      "Situs personal brand untuk pelatihan calon healer: katalog layanan, artikel, dan testimoni dengan tipografi editorial. Pemilik bisa mengubah seluruh konten lewat CMS berbasis git.",
    challenge:
      "Pemilik brand bukan orang teknis. Setiap perubahan teks atau jadwal sebelumnya berarti menunggu developer, dan biaya itu tidak sustainable.",
    solution:
      "Jekyll statis dengan Pages CMS. Semua halaman diedit lewat antarmuka ramah, tersimpan sebagai commit, dan otomatis ter-deploy ke Cloudflare Pages.",
    outcomes: [
      { v: "100%", l: "konten diedit pemilik" },
      { v: "Git", l: "riwayat perubahan rapi" },
      { v: "Edge", l: "deploy Cloudflare Pages" },
    ],
    highlights: [
      { title: "CMS ramah non-teknis", desc: "Layanan, artikel, dan testimoni diubah tanpa menyentuh kode." },
      { title: "Tipografi editorial", desc: "Ruang, skala, dan warna dibuat tenang, sesuai brand penyembuhan." },
      { title: "Cepat dan aman", desc: "Output statis tanpa database publik, dengan deploy di edge." },
    ],
    stack: ["Jekyll", "Pages CMS", "Cloudflare Pages"],
    palette: { bg: "#081C46", ink: "#F3F7FF", muted: "#A9B6CC", accent: "#D6B36A", card: "#0C2454" },
    font: "serif",
    shots: { desktop: "/assets/shots/healer-desktop.webp", mobile: "/assets/shots/healer-mobile.webp" },
    accentText: "dark",
  },
  {
    slug: "travel-bali",
    name: "Travel To Bali",
    tagline: "Explore Bali's hidden gems.",
    category: "Travel",
    status: "Live",
    live: "https://traveltobaliparadise.com",
    role: "Design, Astro, SEO",
    description:
      "Situs travel dengan paket tur, sewa kendaraan, halaman destinasi, dan blog. Harga tampil dalam USD dan IDR, dan setiap alur booking berakhir di WhatsApp yang terlacak.",
    challenge:
      "Form booking yang panjang sering ditinggalkan. Calon tamu lebih nyaman bertanya langsung, tetapi bisnis tetap butuh data dan halaman destinasi yang ditemukan mesin pencari.",
    solution:
      "Halaman destinasi dan paket yang kaya cerita, harga dua mata uang, dan tombol WhatsApp dengan pesan terisi otomatis. Tanpa form panjang yang membuang calon tamu.",
    outcomes: [
      { v: "2", l: "mata uang: USD & IDR" },
      { v: "1", l: "jalur booking ke WhatsApp" },
      { v: "SEO", l: "destinasi, paket, blog" },
    ],
    highlights: [
      { title: "Halaman destinasi", desc: "Konten yang menjawab niat pencarian, bukan hanya galeri foto." },
      { title: "Harga transparan", desc: "USD dan IDR ditampilkan berdampingan untuk tamu lokal dan asing." },
      { title: "WhatsApp terlacak", desc: "Pesan otomatis berisi paket dan tanggal, jadi tim tidak menebak konteks." },
    ],
    stack: ["Astro 5", "Tailwind", "GA4", "WhatsApp API"],
    palette: { bg: "#FFFFFF", ink: "#0C1B2E", muted: "#5B6773", accent: "#FF6F61", card: "#F6F8FA" },
    font: "serif",
    shots: { desktop: "/assets/shots/travel-bali-desktop.webp", mobile: "/assets/shots/travel-bali-mobile.webp" },
    accentText: "light",
  },
  {
    slug: "beligih",
    name: "Beligih",
    tagline: "Bangun toko online tanpa coding.",
    category: "SaaS platform",
    status: "Live",
    live: "https://beligih.id",
    role: "Product, architecture, full-stack",
    description:
      "Platform e-commerce untuk UMKM Indonesia: toko online gratis, builder tanpa coding, pembayaran, pengiriman, dan email transaksional dalam satu langganan.",
    challenge:
      "UMKM butuh toko online cepat, tetapi solusi yang ada memaksa mereka belajar tools teknis atau membayar biaya yang tidak masuk akal untuk usaha kecil.",
    solution:
      "Storefront dan admin yang bisa dikonfigurasi tanpa coding, dengan paket gratis dan Pro. Integrasi pembayaran, pengiriman, dan email disiapkan agar pemilik usaha tidak merakit sendiri.",
    outcomes: [
      { v: "Gratis", l: "paket untuk mulai" },
      { v: "Pro", l: "paket untuk tumbuh" },
      { v: "1", l: "dashboard untuk toko" },
    ],
    highlights: [
      { title: "Tanpa coding", desc: "Pemilik usaha menyusun toko dari antarmuka, bukan dari file kode." },
      { title: "Integrasi siap", desc: "Pembayaran, pengiriman, dan email transaksional tersambung." },
      { title: "Dua lapis model", desc: "Gratis untuk mulai, Pro untuk fitur dan volume yang lebih besar." },
    ],
    stack: ["Next.js", "Supabase", "Cloudflare Workers", "Xendit", "Everpro"],
    palette: { bg: "#0A0A0A", ink: "#F5F5F5", muted: "#9A9A9A", accent: "#D4AF37", card: "#141414" },
    font: "sans",
    shots: { desktop: "/assets/shots/beligih-desktop.webp", mobile: "/assets/shots/beligih-mobile.webp" },
    accentText: "dark",
  },
];

export const archive = [
  { name: "CrosSyncOrder", desc: "Sinkronisasi trade MetaTrader & cTrader lewat WebSocket dan ZeroMQ.", tech: ["Node.js", "WebSocket", "ZeroMQ", "Docker"] },
  { name: "BaxiaMarkets", desc: "Platform layanan finansial dengan WordPress, Laravel, React, dan Vue.", tech: ["WordPress", "Laravel", "React", "Vue"] },
  { name: "MallOps Suite", desc: "ERP operasional gedung: parkir, utilitas, leasing, pembayaran, portal tenant.", tech: ["Odoo 19", "Python", "PostgreSQL"] },
  { name: "Dharmakarsa", desc: "Commerce OS multi-tenant dengan agent gateway dan modul rental.", tech: ["Cloudflare Workers", "Hono", "D1", "Astro"] },
  { name: "Vavelle Crispy Pork", desc: "Storefront produk premium dengan pipeline foto AI.", tech: ["Astro", "fal.ai", "Tailwind"] },
  { name: "Vavelle AI Chat", desc: "Chat AI dengan streaming respons real-time.", tech: ["React", "Tailwind", "Groq"] },
  { name: "Sales Dashboard", desc: "Dashboard analitik dengan backend FastAPI dan Gemini.", tech: ["FastAPI", "Next.js", "Gemini"] },
  { name: "Damai Kasih Channel", desc: "Platform konten komunitas dengan Jekyll dan JavaScript.", tech: ["Jekyll", "JavaScript"] },
];
