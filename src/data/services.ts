export const brand = {
  name: "Biotama",
  legal: "Biotama",
  domain: "biotama.cv",
  tagline:
    "Mitra AI, software, dan infrastruktur digital untuk bisnis Indonesia.",
  founded: "2017",
  email: "fxwisdom1@gmail.com",
  phoneDisplay: "+62 813-9825-3186",
  phoneRaw: "6281398253186",
  address: {
    street: "Jakarta Selatan",
    city: "Jakarta",
    region: "DKI Jakarta",
    postal: "",
    country: "ID",
  },
  hours: "Senin-Jumat 09.00-18.00 WIB · Sabtu 09.00-13.00 WIB",
} as const;

export const waLink = (message?: string) =>
  `https://wa.me/${brand.phoneRaw}?text=${encodeURIComponent(
    message ??
      "Halo Biotama, saya ingin konsultasi tentang kebutuhan digital bisnis saya.",
  )}`;

export const nav = [
  { id: "layanan", label: "Layanan" },
  { id: "proses", label: "Cara Kerja" },
  { id: "hasil", label: "Hasil" },
  { id: "harga", label: "Paket" },
  { id: "faq", label: "FAQ" },
] as const;

export type ClusterId = "ai" | "produk" | "infra" | "growth";

export const clusters: {
  id: ClusterId;
  label: string;
  title: string;
  desc: string;
}[] = [
  {
    id: "ai",
    label: "AI & Data",
    title: "Otomasi yang menghemat jam kerja, data yang bisa dipercaya",
    desc: "Dua hal yang paling sering diminta klien: mengurangi pekerjaan berulang, dan membuat angka di laporan akhirnya konsisten.",
  },
  {
    id: "produk",
    label: "Software & Produk Digital",
    title: "Produk digital yang dipakai tiap hari, bukan cuma diluncurkan",
    desc: "Website, aplikasi, dan kasir yang dibangun dengan lingkup jelas, source code milik Anda, serta pendampingan setelah rilis.",
  },
  {
    id: "infra",
    label: "Infrastruktur & Keamanan",
    title: "Fondasi IT yang tenang, aman, dan bisa diaudit",
    desc: "Dari managed services sampai penetration testing dan instalasi CCTV, semuanya dengan SLA dan dokumentasi tertulis.",
  },
  {
    id: "growth",
    label: "Pertumbuhan & Talenta",
    title: "Mesin pertumbuhan yang bisa diukur, plus tim yang bisa dibangun",
    desc: "SEO, performance marketing, operasional marketplace, dan bootcamp internal untuk tim yang ingin naik level.",
  },
];

export type Service = {
  id: string;
  no: string;
  cluster: ClusterId;
  name: string;
  seo: string;
  icon: "chat" | "chart" | "code" | "phone" | "pos" | "server" | "shield" | "camera" | "target" | "cart" | "book";
  short: string;
  desc: string;
  bullets: string[];
  price: string;
  priceIdr: number;
  deliverable: string;
};

export const services: Service[] = [
  {
    id: "chatbot",
    no: "01",
    cluster: "ai",
    name: "Chatbot & Otomasi AI Bisnis",
    seo: "Jasa Pembuatan Chatbot & Otomasi AI Bisnis",
    icon: "chat",
    short: "Chatbot WhatsApp, Instagram, dan web yang benar-benar paham alur bisnis Anda.",
    desc: "Kami membangun asisten AI yang menjawab pertanyaan pelanggan, mengumpulkan data leads, dan menyerahkan percakapan ke tim manusia saat dibutuhkan, bukan bot template yang bikin pelanggan marah.",
    bullets: [
      "Kanal WhatsApp, Instagram DM, web chat, dan telepon",
      "Integrasi CRM, Google Sheets, dan sistem internal",
      "Human handover, guardrail, dan dashboard percakapan",
    ],
    price: "Mulai Rp 15 juta",
    priceIdr: 15000000,
    deliverable: "Alur percakapan, integrasi, dashboard, dan panduan operasional",
  },
  {
    id: "data",
    no: "02",
    cluster: "ai",
    name: "Data Analytics & Business Intelligence",
    seo: "Konsultan Data Analytics & Business Intelligence",
    icon: "chart",
    short: "Dari data yang berserakan jadi satu dashboard yang dipakai rapat direksi.",
    desc: "Kami merapikan sumber data, membangun warehouse ringan, dan membuat dashboard yang menjawab pertanyaan bisnis nyata, bukan sekadar grafik cantik yang tidak dipakai.",
    bullets: [
      "Audit data dan pemetaan sumber",
      "Dashboard operasional, finance, dan marketing",
      "Pelatihan tim internal agar mandiri",
    ],
    price: "Mulai Rp 25 juta",
    priceIdr: 25000000,
    deliverable: "Model data, dashboard, dokumentasi metrik, dan sesi training",
  },
  {
    id: "website",
    no: "03",
    cluster: "produk",
    name: "Website & Aplikasi Web",
    seo: "Jasa Pembuatan Website & Aplikasi",
    icon: "code",
    short: "Company profile, e-commerce, sampai sistem internal yang dipakai tim tiap hari.",
    desc: "Dibangun cepat, rapi secara teknis, dan siap tumbuh. Setiap proyek punya kontrak, timeline, dan milestone tertulis, plus source code yang 100% menjadi milik Anda.",
    bullets: [
      "Desain custom, bukan template seragam",
      "SEO teknis dan kecepatan halaman sejak awal",
      "Source code diserahkan, tanpa vendor lock-in",
    ],
    price: "Mulai Rp 9 juta",
    priceIdr: 9000000,
    deliverable: "Website/aplikasi, repositori kode, dan panduan admin",
  },
  {
    id: "mobile",
    no: "04",
    cluster: "produk",
    name: "Aplikasi Mobile",
    seo: "Pengembang Aplikasi Mobile iOS & Android",
    icon: "phone",
    short: "iOS, Android, dan cross-platform dengan proses yang transparan.",
    desc: "Tim in-house yang membangun aplikasi dari perencanaan, desain, development, sampai rilis di App Store dan Google Play. Anda mendapat progres mingguan, bukan kabar baik di akhir proyek.",
    bullets: [
      "Flutter / React Native / native",
      "Prototype dan pengujian sebelum development",
      "Garansi bug fix pasca-rilis",
    ],
    price: "Mulai Rp 45 juta",
    priceIdr: 45000000,
    deliverable: "Aplikasi siap rilis, akun store, dan dokumentasi teknis",
  },
  {
    id: "pos",
    no: "05",
    cluster: "produk",
    name: "Sistem Kasir POS Digital",
    seo: "Penyedia Sistem Kasir POS Digital",
    icon: "pos",
    short: "Kasir cloud + offline untuk retail dan F&B multi-outlet.",
    desc: "Transaksi tetap jalan saat internet putus, stok per outlet akurat, dan laporan penjualan bisa dibuka dari mana saja. Migrasi data dari sistem lama kami lakukan tanpa menghentikan operasional.",
    bullets: [
      "Mode offline dan sinkronisasi otomatis",
      "Multi-outlet, multi-gudang, dan hak akses",
      "Migrasi data dan pelatihan kasir",
    ],
    price: "Mulai Rp 8 juta",
    priceIdr: 8000000,
    deliverable: "Lisensi, setup outlet, migrasi data, dan training",
  },
  {
    id: "it",
    no: "06",
    cluster: "infra",
    name: "IT Consulting & Managed Services",
    seo: "IT Consulting & Managed Services",
    icon: "server",
    short: "Tim IT Anda diperkuat, atau seluruh fungsi IT kami kelola.",
    desc: "Untuk perusahaan yang butuh kepastian uptime dan dukungan yang bisa diaudit. Kami mulai dari IT health check, lalu menyusun SLA, prosedur, dan rencana pemeliharaan yang realistis.",
    bullets: [
      "IT health check dan roadmap 12 bulan",
      "Monitoring 24/7 dan helpdesk dengan SLA",
      "Laporan bulanan yang bisa dibaca manajemen",
    ],
    price: "Mulai Rp 12 juta/bulan",
    priceIdr: 12000000,
    deliverable: "SLA, dashboard monitoring, dan laporan berkala",
  },
  {
    id: "cyber",
    no: "07",
    cluster: "infra",
    name: "Cybersecurity & Penetration Testing",
    seo: "Konsultan Cybersecurity & Penetration Testing",
    icon: "shield",
    short: "Temukan celah sebelum pihak yang tidak berwenang menemukannya.",
    desc: "Pengujian keamanan dengan metodologi OWASP dan pelaporan dua lapis: teknis untuk tim engineer, eksekutif untuk manajemen. Setiap engagement memakai NDA dan disertai rencana remediasi yang bisa dieksekusi.",
    bullets: [
      "Web app, API, mobile, dan infrastruktur",
      "Laporan severity + bukti dan langkah remediasi",
      "Pendampingan penutupan temuan",
    ],
    price: "Mulai Rp 20 juta",
    priceIdr: 20000000,
    deliverable: "Laporan eksekutif & teknis, bukti temuan, dan sesi debrief",
  },
  {
    id: "cctv",
    no: "08",
    cluster: "infra",
    name: "Instalasi CCTV & Smart Home",
    seo: "Jasa Instalasi CCTV & Smart Home",
    icon: "camera",
    short: "Survei titik kamera, instalasi rapi, dan garansi pemasangan.",
    desc: "Kami memetakan blindspot lebih dulu, menghitung kebutuhan bandwidth dan penyimpanan, baru memasang. Hasilnya sistem yang benar-benar terpakai, bukan kamera banyak tapi tidak bisa diakses.",
    bullets: [
      "Survei lokasi dan desain titik kamera",
      "Integrasi smart home, access control, alarm",
      "Garansi pemasangan dan pendampingan aplikasi",
    ],
    price: "Mulai Rp 3,5 juta/titik",
    priceIdr: 3500000,
    deliverable: "Diagram titik, instalasi, konfigurasi aplikasi, dan garansi",
  },
  {
    id: "marketing",
    no: "09",
    cluster: "growth",
    name: "Digital Marketing & SEO",
    seo: "Digital Marketing & SEO Agency",
    icon: "target",
    short: "Laporan yang menghubungkan traffic ke pipeline penjualan.",
    desc: "Kami tidak berhenti di peringkat dan impresi. Setiap bulan Anda menerima laporan yang menjelaskan biaya per leads, kualitas leads, dan apa yang akan diubah bulan berikutnya.",
    bullets: [
      "SEO teknis, on-page, dan konten",
      "Google Ads, Meta Ads, dan landing page",
      "Atribusi dan laporan konversi",
    ],
    price: "Mulai Rp 7,5 juta/bulan",
    priceIdr: 7500000,
    deliverable: "Rencana kanal, eksekusi, dashboard, dan laporan bulanan",
  },
  {
    id: "marketplace",
    no: "10",
    cluster: "growth",
    name: "Kelola Toko Online & Marketplace",
    seo: "Jasa Kelola Toko Online & Marketplace",
    icon: "cart",
    short: "Operasional Shopee, Tokopedia, dan TikTok Shop ditangani end-to-end.",
    desc: "Upload produk, optimasi judul dan foto, balas chat, kelola iklan, dan jaga rating. Anda menerima dashboard penjualan harian dan rekap performa mingguan tanpa harus membuka satu per satu marketplace.",
    bullets: [
      "Shopee, Tokopedia, TikTok Shop, Lazada",
      "Optimasi listing dan iklan marketplace",
      "Rekap stok, rating, dan CS harian",
    ],
    price: "Mulai Rp 6 juta/bulan",
    priceIdr: 6000000,
    deliverable: "Setup toko, SOP operasional, dashboard, dan laporan",
  },
  {
    id: "bootcamp",
    no: "11",
    cluster: "growth",
    name: "Bootcamp & Kursus Coding",
    seo: "Bootcamp & Kursus Coding untuk Tim dan Individu",
    icon: "book",
    short: "Kelas kecil, mentor aktif, dan portofolio yang benar-benar jadi.",
    desc: "Program cohort untuk career switcher maupun upskilling tim perusahaan. Materi disusun dari proyek nyata, dengan mentor yang bisa dihubungi dan review kode setiap minggu.",
    bullets: [
      "Web development, data, dan automation",
      "Batch kecil, mentor live, review kode",
      "Proyek akhir yang layak masuk portofolio",
    ],
    price: "Mulai Rp 4,5 juta",
    priceIdr: 4500000,
    deliverable: "Silabus, kelas live, review kode, dan sertifikat",
  },
];

export const stats = [
  { value: 120, suffix: "+", label: "proyek digital dikerjakan" },
  { value: 40, suffix: "+", label: "klien aktif & berulang" },
  { value: 8, suffix: " thn", label: "pengalaman tim inti" },
  { value: 99.9, suffix: "%", label: "uptime layanan terkelola", decimals: 1 },
];

export const processSteps = [
  {
    no: "01",
    title: "Discovery & audit",
    desc: "Sesi 60-90 menit untuk memetakan masalah, proses bisnis, sistem yang sudah ada, dan batasan anggaran.",
    out: "Ringkasan temuan + ruang lingkup awal",
    time: "1-3 hari",
  },
  {
    no: "02",
    title: "Proposal & kontrak",
    desc: "Lingkup kerja, timeline, milestone, harga, dan SLA ditulis jelas. Tidak ada biaya yang muncul belakangan.",
    out: "Proposal teknis & komersial",
    time: "2-5 hari",
  },
  {
    no: "03",
    title: "Desain & sprint",
    desc: "Wireframe, desain, lalu development per sprint dua minggu dengan demo dan progres yang bisa Anda lihat.",
    out: "Prototype, sprint demo, catatan revisi",
    time: "2-12 minggu",
  },
  {
    no: "04",
    title: "Uji & peluncuran",
    desc: "QA fungsional, uji perangkat, uji keamanan dasar, lalu deployment bertahap dengan rollback plan.",
    out: "Checklist QA, akses, dan dokumentasi",
    time: "3-10 hari",
  },
  {
    no: "05",
    title: "Pendampingan & optimasi",
    desc: "Masa garansi, monitoring, pelatihan admin, dan review performa untuk memastikan sistem benar-benar dipakai.",
    out: "Laporan performa & rekomendasi",
    time: "30-90 hari",
  },
];

export const cases = [
  {
    sector: "Retail multi-outlet",
    title: "Kasir cloud untuk 14 outlet",
    problem: "Tutup buku manual, stok sering selisih antaroutlet.",
    solution:
      "POS cloud + offline, migrasi 12.000 SKU, pelatihan 60 kasir.",
    metric: "2 jam",
    metricLabel: "waktu tutup buku harian, dari sebelumnya 3 hari",
    metric2: "+18%",
    metric2Label: "akurasi stok",
  },
  {
    sector: "Klinik & layanan kesehatan",
    title: "Chatbot WhatsApp + CRM",
    problem: "Admin kewalahan 900+ chat/bulan, leads banyak yang hilang.",
    solution:
      "Chatbot alur pendaftaran, pengingat jadwal, dan handover ke admin.",
    metric: "82%",
    metricLabel: "chat terselesaikan tanpa admin",
    metric2: "8 dtk",
    metric2Label: "rata-rata respons pertama",
  },
  {
    sector: "Distribusi B2B",
    title: "Dashboard BI lintas cabang",
    problem: "Laporan bulanan disusun manual dari 12 file spreadsheet.",
    solution:
      "Warehouse ringan, definisi metrik tunggal, dashboard per cabang.",
    metric: "1 hari",
    metricLabel: "penyusunan laporan bulanan, dari 5 hari",
    metric2: "12",
    metric2Label: "sumber data terintegrasi",
  },
  {
    sector: "Fintech",
    title: "Penetration test & remediasi",
    problem: "Persyaratan audit keamanan sebelum peluncuran produk baru.",
    solution: "Pentest web & API, laporan dua lapis, pendampingan perbaikan.",
    metric: "17",
    metricLabel: "temuan kritis ditutup sebelum rilis",
    metric2: "0",
    metric2Label: "insiden keamanan pasca-rilis",
  },
];

export const testimonials = [
  {
    quote:
      "Yang paling saya apresiasi bukan hasil akhirnya, tapi prosesnya. Tiap sprint ada demo, tiap keputusan ada alasannya. Waktu ada perubahan scope, dampaknya dijelaskan di depan.",
    name: "Rani Kusuma",
    role: "Head of Operations",
    company: "Retail multi-outlet, Jakarta",
  },
  {
    quote:
      "Sebelumnya kami pakai vendor yang hilang di tengah proyek. Di Biotama, laporan mingguan selalu datang dan source code diserahkan sesuai kontrak. Itu yang bikin kami lanjut ke proyek kedua.",
    name: "Aditya Prasetyo",
    role: "IT Manager",
    company: "Perusahaan distribusi, Surabaya",
  },
  {
    quote:
      "Dashboard-nya tidak cuma bagus dilihat. Angka yang muncul akhirnya sama dengan yang dipakai tim finance, dan rapat bulanan jadi jauh lebih cepat.",
    name: "Melati Anggraini",
    role: "Finance Director",
    company: "Grup layanan kesehatan",
  },
];

export const packages = [
  {
    name: "Mulai",
    price: "Rp 9 jt",
    unit: "proyek",
    for: "UMKM & bisnis yang butuh kehadiran digital yang rapi",
    features: [
      "Landing page / company profile 5-7 halaman",
      "SEO teknis dasar & Google Analytics",
      "Copywriting dan desain custom",
      "Revisi 2 putaran",
      "Garansi bug 30 hari",
    ],
    cta: "Mulai dari sini",
    featured: false,
  },
  {
    name: "Tumbuh",
    price: "Rp 25 jt",
    unit: "proyek",
    for: "Bisnis yang butuh sistem, otomasi, atau integrasi",
    features: [
      "Web app / POS / chatbot sesuai kebutuhan",
      "Integrasi maksimal 3 sistem",
      "Dashboard operasional",
      "Pendampingan 60 hari",
      "Prioritas support < 4 jam kerja",
    ],
    cta: "Diskusikan kebutuhan",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "retainer / proyek",
    for: "Perusahaan dengan kebutuhan keamanan, data, dan SLA",
    features: [
      "Managed services & helpdesk dengan SLA",
      "Pentest dan audit keamanan berkala",
      "Tim dedikasi & NDA",
      "Roadmap IT 12 bulan",
      "Quarterly business review",
    ],
    cta: "Minta proposal",
    featured: false,
  },
];

export const faqs: [string, string][] = [
  [
    "Berapa lama pengerjaan website atau aplikasi?",
    "Landing page biasanya 2-3 minggu, company profile 3-5 minggu, aplikasi mobile 8-16 minggu, dan sistem internal 6-12 minggu. Estimasi final diberikan setelah sesi discovery, lalu dikunci di kontrak beserta milestone-nya.",
  ],
  [
    "Apakah source code menjadi milik klien?",
    "Ya. Untuk proyek development, source code dan akses repositori diserahkan penuh setelah pelunasan, tanpa lisensi tersembunyi atau vendor lock-in. Kami juga menyertakan dokumentasi teknis agar tim internal Anda bisa melanjutkan.",
  ],
  [
    "Bagaimana skema pembayaran?",
    "Umumnya 30% di awal, 40% setelah milestone desain/prototype disetujui, dan 30% saat peluncuran. Untuk retainer bulanan, pembayaran dilakukan di awal periode dengan SLA tertulis.",
  ],
  [
    "Bisakah mulai dari skala kecil dulu?",
    "Bisa. Banyak klien mulai dari satu modul atau satu kanal, misalnya chatbot WhatsApp saja atau dashboard satu divisi, lalu berkembang setelah hasilnya terukur. Kami sengaja menyusun roadmap bertahap agar anggaran tidak membengkak di depan.",
  ],
  [
    "Bagaimana Anda menjaga kerahasiaan data?",
    "Setiap engagement menandatangani NDA. Akses ke sistem klien diberikan per-orang, dicatat, dan dicabut setelah proyek selesai. Untuk pekerjaan keamanan, semua bukti temuan disimpan terenkripsi dan hanya diserahkan ke pihak yang berwenang.",
  ],
  [
    "Apakah melayani klien di luar Jakarta?",
    "Ya. Sekitar 60% klien kami berada di luar Jakarta dan dikerjakan secara remote dengan ritme meeting yang disepakati. Untuk instalasi CCTV, smart home, dan audit on-site, kami menjadwalkan kunjungan teknisi ke lokasi.",
  ],
  [
    "Apa bedanya chatbot Biotama dengan chatbot template?",
    "Chatbot template menjawab skenario umum. Kami memetakan alur bisnis Anda lebih dulu, menghubungkan ke CRM dan sistem internal, menetapkan guardrail, serta menyiapkan human handover ketika pertanyaan di luar cakupan. Setelah rilis, ada evaluasi percakapan dan perbaikan rutin.",
  ],
  [
    "Apakah ada garansi dan maintenance?",
    "Ada. Proyek development mendapat garansi bug 30-90 hari tergantung paket. Untuk maintenance berkelanjutan tersedia paket bulanan yang mencakup monitoring, update keamanan, backup, dan jam dukungan sesuai SLA.",
  ],
  [
    "Bagaimana cara kerja bootcamp & kursus coding?",
    "Kelas dijalankan per batch dengan kuota kecil (maksimal 15 peserta), mentor live setiap minggu, review kode, dan proyek akhir. Untuk perusahaan, silabus bisa disesuaikan dengan stack dan kebutuhan tim, lalu dijalankan secara internal.",
  ],
  [
    "Bisakah integrasi dengan sistem yang sudah kami pakai?",
    "Bisa, selama sistem tersebut menyediakan API, database access, atau jalur ekspor-impor. Pada tahap discovery kami memetakan integrasi yang memungkinkan, risikonya, dan estimasi biayanya sebelum kontrak ditandatangani.",
  ],
];

export const standards = [
  "OWASP ASVS & Top 10",
  "ITIL 4 aligned",
  "ISO/IEC 27001 practices",
  "Google Ads & Analytics",
  "Meta Business Partner tools",
  "Flutter & React Native",
];

export const trustChips = [
  "Kontrak & SLA tertulis",
  "Source code milik klien",
  "NDA di setiap engagement",
  "Tim in-house, bukan freelancer lepas",
];
