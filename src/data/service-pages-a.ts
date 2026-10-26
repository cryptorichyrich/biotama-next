export type ServicePage = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  intro: string;
  pains: string[];
  outcomes: string[];
  features: string[];
  process: { title: string; desc: string }[];
  faqs: [string, string][];
  stats: { v: string; l: string }[];
  tiers: { name: string; price: string; note: string; items: string[] }[];
  palette: {
    bg: string;
    ink: string;
    muted: string;
    accent: string;
    accent2: string;
    card: string;
  };
  mood: "light" | "dark";
  font: "serif" | "sans" | "mono";
};

export const servicePagesA: ServicePage[] = [
  {
    slug: "chatbot-ai",
    name: "Chatbot & Otomasi AI",
    category: "AI & Automation",
    tagline: "Balasan cepat, tanpa menambah kepala.",
    intro:
      "Pelanggan tidak suka menunggu, dan tim Anda tidak perlu menjawab pertanyaan yang sama seratus kali. Kami membangun chatbot yang mengerti alur bisnis Anda, bukan template yang menghafal tiga jawaban.",
    pains: [
      "Chat menumpuk di luar jam kerja",
      "Lead hilang karena balasan terlambat",
      "Admin habis waktu menjawab pertanyaan berulang",
    ],
    outcomes: [
      "Respons pertama di bawah 10 detik",
      "Sebagian besar pertanyaan selesai tanpa admin",
      "Riwayat percakapan rapi di CRM",
    ],
    features: [
      "WhatsApp, Instagram DM, dan web chat",
      "Integrasi CRM, spreadsheet, dan sistem internal",
      "Human handover dengan konteks lengkap",
      "Guardrail agar bot tidak mengarang jawaban",
      "Dashboard percakapan dan evaluasi mingguan",
    ],
    process: [
      { title: "Audit percakapan", desc: "Kami baca 100-300 chat nyata untuk menemukan pertanyaan yang paling sering muncul." },
      { title: "Desain alur", desc: "Alur, nada bicara, dan batas bot disusun bersama tim Anda." },
      { title: "Integrasi & uji", desc: "Sambung ke kanal dan sistem, lalu uji dengan skenario nyata." },
      { title: "Rilis & evaluasi", desc: "Pantau percakapan dua minggu pertama dan perbaiki yang macet." },
    ],
    faqs: [
      ["Apakah bisa terhubung ke WhatsApp bisnis kami?", "Bisa. Kami menggunakan WhatsApp Business Platform resmi dan menyiapkan nomor serta template pesan sesuai kebijakan Meta."],
      ["Bagaimana kalau bot tidak tahu jawabannya?", "Percakapan dialihkan ke admin dengan ringkasan konteks. Bot tidak dipaksa menjawab di luar cakupan."],
      ["Berapa lama pengerjaannya?", "Untuk satu kanal dengan alur standar, 3-5 minggu setelah data dan akses tersedia."],
    ],
    stats: [
      { v: "82%", l: "chat selesai tanpa admin" },
      { v: "8 dtk", l: "rata-rata respons pertama" },
      { v: "24/7", l: "jam layanan" },
    ],
    tiers: [
      { name: "Starter", price: "Rp 15 jt", note: "1 kanal", items: ["FAQ + lead capture", "Integrasi spreadsheet", "Evaluasi 2 minggu"] },
      { name: "Tumbuh", price: "Rp 35 jt", note: "3 kanal", items: ["Integrasi CRM", "Human handover", "Dashboard percakapan"] },
      { name: "Enterprise", price: "Custom", note: "retainer", items: ["Multi-brand", "Audit percakapan bulanan", "SLA respons"] },
    ],
    palette: { bg: "#F6F8F4", ink: "#10241E", muted: "#4C6358", accent: "#0E6B5C", accent2: "#C8A24A", card: "#FFFFFF" },
    mood: "light",
    font: "sans",
  },
  {
    slug: "sistem-pos",
    name: "Sistem Kasir POS",
    category: "Retail & F&B",
    tagline: "Tutup buku dua jam, bukan dua hari.",
    intro:
      "Kasir bukan cuma tempat menghitung uang. Ia menentukan apakah stok akurat, apakah shift bisa diaudit, dan apakah pemilik bisa tidur tenang. Kami membangun POS yang tetap jalan saat internet putus.",
    pains: [
      "Stok fisik tidak cocok dengan catatan",
      "Tutup buku manual dan rawan selisih",
      "Kasir bergantung pada koneksi internet",
    ],
    outcomes: [
      "Laporan harian selesai dalam hitungan menit",
      "Stok per outlet dan gudang akurat",
      "Transaksi tetap jalan saat offline",
    ],
    features: [
      "Mode offline dengan sinkronisasi otomatis",
      "Multi-outlet, multi-gudang, dan hak akses",
      "Shift kasir dan rekonsiliasi selisih",
      "Migrasi data dari sistem lama",
      "Pelatihan kasir dan SOP operasional",
    ],
    process: [
      { title: "Pemetaan operasional", desc: "Kami pelajari alur transaksi, stok, dan laporan yang Anda pakai sekarang." },
      { title: "Konfigurasi", desc: "Outlet, pajak, diskon, dan metode bayar disiapkan sesuai bisnis." },
      { title: "Migrasi & uji", desc: "Data produk dan stok dipindahkan, lalu diuji di samping sistem lama." },
      { title: "Go-live", desc: "Pelatihan kasir, pendampingan hari pertama, dan evaluasi mingguan." },
    ],
    faqs: [
      ["Apakah data kami bisa dimigrasi?", "Bisa selama data lama bisa diekspor. Kami memetakan SKU, harga, dan stok sebelum migrasi."],
      ["Bagaimana jika internet mati?", "Transaksi tetap tersimpan lokal dan tersinkron otomatis saat koneksi kembali."],
      ["Apakah bisa dipakai di beberapa cabang?", "Bisa. Setiap outlet punya stok, kasir, dan laporan sendiri dalam satu dashboard."],
    ],
    stats: [
      { v: "2 jam", l: "waktu tutup buku harian" },
      { v: "+18%", l: "akurasi stok" },
      { v: "14", l: "outlet dalam satu dashboard" },
    ],
    tiers: [
      { name: "Single", price: "Rp 8 jt", note: "1 outlet", items: ["2 perangkat kasir", "Setup produk", "Training 2 sesi"] },
      { name: "Multi", price: "Rp 18 jt", note: "hingga 5 outlet", items: ["Stok antaroutlet", "Dashboard pusat", "Migrasi data"] },
      { name: "Enterprise", price: "Custom", note: "retainer", items: ["Unlimited outlet", "Integrasi ERP", "SLA support"] },
    ],
    palette: { bg: "#0E1420", ink: "#EDF1F7", muted: "#9AA7B8", accent: "#35C28F", accent2: "#FFB84D", card: "#151E2E" },
    mood: "dark",
    font: "sans",
  },
  {
    slug: "aplikasi-mobile",
    name: "Aplikasi Mobile",
    category: "Software Product",
    tagline: "Aplikasi yang dipakai tiap hari, bukan cuma diunduh.",
    intro:
      "Banyak aplikasi selesai tepat waktu tapi ditinggalkan pengguna. Kami mulai dari alur yang paling sering dipakai, membangun versi yang ringan, lalu mengulanginya berdasarkan data pemakaian.",
    pains: [
      "Aplikasi lama lambat dan sering crash",
      "Fitur terlalu banyak tapi tidak ada yang dipakai",
      "Rilis iOS dan Android tidak sinkron",
    ],
    outcomes: [
      "Waktu buka aplikasi di bawah 2 detik",
      "Satu basis kode untuk iOS dan Android",
      "Rilis terjadwal dengan crash monitoring",
    ],
    features: [
      "Flutter atau React Native",
      "Prototype dan uji pengguna sebelum coding",
      "Integrasi API, pembayaran, dan notifikasi",
      "Rilis ke App Store dan Google Play",
      "Garansi bug dan pemantauan crash",
    ],
    process: [
      { title: "Discovery", desc: "Kami petakan pengguna, alur utama, dan metrik keberhasilan." },
      { title: "Prototype", desc: "Klik-able prototype diuji ke calon pengguna sebelum development." },
      { title: "Sprint", desc: "Build dua mingguan dengan demo dan TestFlight/APK internal." },
      { title: "Rilis", desc: "Submit ke store, pantau crash, dan siapkan update pertama." },
    ],
    faqs: [
      ["Native atau cross-platform?", "Kami pilih berdasarkan kebutuhan. Untuk sebagian besar aplikasi bisnis, Flutter cukup dan lebih hemat."],
      ["Apakah termasuk desain UI?", "Ya, desain antarmuka dan design system termasuk dalam lingkup."],
      ["Berapa lama sampai rilis?", "Aplikasi dengan 8-12 layar utama biasanya 8-12 minggu."],
    ],
    stats: [
      { v: "<2 dtk", l: "waktu buka aplikasi" },
      { v: "4.8", l: "rating rata-rata di store" },
      { v: "99.5%", l: "crash-free sessions" },
    ],
    tiers: [
      { name: "MVP", price: "Rp 45 jt", note: "6-8 layar", items: ["1 platform", "Prototype", "Rilis store"] },
      { name: "Produk", price: "Rp 85 jt", note: "iOS + Android", items: ["Design system", "Integrasi API", "Analytics"] },
      { name: "Enterprise", price: "Custom", note: "retainer", items: ["Tim dedikasi", "SLA", "Roadmap 12 bulan"] },
    ],
    palette: { bg: "#F9F4EE", ink: "#201A16", muted: "#6C5C50", accent: "#D95A2B", accent2: "#1E4D3B", card: "#FFFFFF" },
    mood: "light",
    font: "serif",
  },
  {
    slug: "data-analytics",
    name: "Data Analytics & BI",
    category: "Data",
    tagline: "Satu angka, satu kebenaran.",
    intro:
      "Rapat seharusnya membahas keputusan, bukan memperdebatkan angka. Kami menyatukan definisi metrik, merapikan sumber data, dan membangun dashboard yang menjawab pertanyaan bisnis nyata.",
    pains: [
      "Tiap divisi punya angka berbeda",
      "Laporan bulanan disusun manual",
      "Data ada, tapi tidak jadi keputusan",
    ],
    outcomes: [
      "Definisi metrik tunggal lintas divisi",
      "Laporan otomatis setiap pagi",
      "Dashboard yang dipakai rapat direksi",
    ],
    features: [
      "Audit dan pemetaan sumber data",
      "Warehouse ringan dan model data",
      "Dashboard operasional, finance, dan marketing",
      "Katalog metrik dan dokumentasi",
      "Pelatihan tim internal",
    ],
    process: [
      { title: "Audit data", desc: "Kami telusuri sumber, kualitas, dan pertanyaan yang ingin dijawab." },
      { title: "Model metrik", desc: "Definisi disepakati bersama pemilik proses, bukan sepihak." },
      { title: "Bangun dashboard", desc: "Prototype diuji ke pengguna sebelum dipoles." },
      { title: "Transfer", desc: "Dokumentasi dan pelatihan agar tim bisa merawat sendiri." },
    ],
    faqs: [
      ["Apakah harus punya data warehouse dulu?", "Tidak. Kami bisa mulai dari spreadsheet dan database operasional yang sudah ada."],
      ["Bisa pakai tools yang kami sudah punya?", "Bisa. Kami menyesuaikan dengan Metabase, Power BI, Looker Studio, atau stack internal Anda."],
      ["Berapa lama?", "Audit 1-2 minggu, dashboard pertama 3-5 minggu."],
    ],
    stats: [
      { v: "12", l: "sumber data terintegrasi" },
      { v: "1 hari", l: "laporan bulanan, dari 5 hari" },
      { v: "100%", l: "metrik terdokumentasi" },
    ],
    tiers: [
      { name: "Audit", price: "Rp 25 jt", note: "2 minggu", items: ["Peta sumber data", "Katalog metrik", "Rekomendasi"] },
      { name: "Dashboard", price: "Rp 55 jt", note: "4-6 minggu", items: ["Model data", "3 dashboard", "Training"] },
      { name: "Enterprise", price: "Custom", note: "retainer", items: ["Data platform", "Tim analyst", "SLA data"] },
    ],
    palette: { bg: "#F2F5F8", ink: "#0F2438", muted: "#5A6C7D", accent: "#0E6B8C", accent2: "#7FB3C8", card: "#FFFFFF" },
    mood: "light",
    font: "serif",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity & Pentest",
    category: "Security",
    tagline: "Temukan celah sebelum yang lain menemukannya.",
    intro:
      "Keamanan bukan dokumen tebal yang disimpan di lemari. Kami menguji sistem Anda seperti penyerang nyata, lalu membantu menutup temuan sampai benar-benar selesai.",
    pains: [
      "Belum pernah diuji sejak sistem diluncurkan",
      "Temuan audit menumpuk tanpa prioritas",
      "Tim tidak yakin mana yang harus diperbaiki dulu",
    ],
    outcomes: [
      "Daftar temuan dengan severity dan bukti",
      "Prioritas perbaikan yang bisa dieksekusi",
      "Bukti remediasi untuk audit dan klien",
    ],
    features: [
      "Web app, API, mobile, dan infrastruktur",
      "Metodologi OWASP ASVS dan PTES",
      "Laporan teknis dan eksekutif",
      "Sesi debrief dan pendampingan remediasi",
      "NDA dan kontrol akses ketat",
    ],
    process: [
      { title: "Scoping", desc: "Batas pengujian, jadwal, dan aturan keterlibatan disepakati tertulis." },
      { title: "Testing", desc: "Pengujian manual dan otomatis, termasuk eskalasi akses." },
      { title: "Pelaporan", desc: "Laporan dua lapis dengan bukti dan langkah perbaikan." },
      { title: "Retest", desc: "Kami uji ulang temuan kritis setelah diperbaiki." },
    ],
    faqs: [
      ["Apakah pengujian mengganggu produksi?", "Kami menjadwalkan di jendela yang disepakati dan menghindari aksi destruktif."],
      ["Apakah laporan bisa dipakai untuk audit?", "Ya, laporan dirancang agar bisa dilampirkan ke proses audit dan due diligence."],
      ["Berapa lama?", "Web app standar 2-4 minggu, termasuk pelaporan dan retest."],
    ],
    stats: [
      { v: "17", l: "temuan kritis ditutup" },
      { v: "0", l: "insiden pasca-rilis" },
      { v: "100%", l: "temuan dengan bukti" },
    ],
    tiers: [
      { name: "Essential", price: "Rp 20 jt", note: "web app", items: ["OWASP Top 10", "Laporan teknis", "Debrief"] },
      { name: "Professional", price: "Rp 45 jt", note: "web + API", items: ["Manual + automated", "Laporan eksekutif", "Retest"] },
      { name: "Enterprise", price: "Custom", note: "multi-sistem", items: ["Mobile + infra", "Compliance mapping", "Tim dedikasi"] },
    ],
    palette: { bg: "#080C0F", ink: "#E6F2EC", muted: "#8FA69B", accent: "#00C48C", accent2: "#F5A623", card: "#111A17" },
    mood: "dark",
    font: "mono",
  },
  {
    slug: "cctv-smart-home",
    name: "CCTV & Smart Home",
    category: "Infrastruktur",
    tagline: "Pasang sekali, pantau tanpa drama.",
    intro:
      "Kamera banyak belum tentu aman kalau ada blindspot dan aplikasinya sulit dipakai. Kami memetakan lokasi lebih dulu, menghitung bandwidth dan penyimpanan, baru memasang.",
    pains: [
      "Kamera ada tapi banyak blindspot",
      "Aplikasi sulit dan sering offline",
      "Kabel berantakan dan sulit dirawat",
    ],
    outcomes: [
      "Titik kamera sesuai kebutuhan nyata",
      "Akses dari satu aplikasi yang stabil",
      "Instalasi rapi dan bergaransi",
    ],
    features: [
      "Survei titik dan desain jaringan",
      "Kamera IP, NVR, dan penyimpanan",
      "Integrasi smart home dan access control",
      "Konfigurasi akses jarak jauh",
      "Garansi pemasangan dan pendampingan",
    ],
    process: [
      { title: "Survei", desc: "Kami ukur area, titik buta, dan jalur kabel." },
      { title: "Desain", desc: "Jumlah kamera, lensa, dan storage dihitung sesuai kebutuhan." },
      { title: "Instalasi", desc: "Pemasangan rapi, labeling, dan uji rekaman." },
      { title: "Serah terima", desc: "Pelatihan aplikasi dan dokumentasi titik kamera." },
    ],
    faqs: [
      ["Berapa kamera yang saya butuhkan?", "Tergantung layout dan tujuan. Survei menentukan titik minimum yang benar-benar menutup area penting."],
      ["Rekaman disimpan di mana?", "Bisa lokal di NVR, cloud, atau kombinasi, sesuai kebijakan retensi Anda."],
      ["Apakah bisa dipantau dari HP?", "Bisa, dengan aplikasi dan hak akses per pengguna."],
    ],
    stats: [
      { v: "0", l: "blindspot pada area utama" },
      { v: "30 hari", l: "retensi rekaman" },
      { v: "1 tahun", l: "garansi pemasangan" },
    ],
    tiers: [
      { name: "Rumah", price: "Rp 3,5 jt/titik", note: "4-6 titik", items: ["Kamera 2MP", "NVR", "Instalasi"] },
      { name: "Ruko", price: "Rp 12 jt", note: "8 titik", items: ["Kamera 4MP", "Storage 1 TB", "Akses mobile"] },
      { name: "Enterprise", price: "Custom", note: "multi-lokasi", items: ["Access control", "Integrasi alarm", "SLA"] },
    ],
    palette: { bg: "#101820", ink: "#EDF3F8", muted: "#93A5B5", accent: "#2F6FED", accent2: "#35D0C6", card: "#182432" },
    mood: "dark",
    font: "sans",
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing & SEO",
    category: "Growth",
    tagline: "Traffic bukan tujuan. Omzet iya.",
    intro:
      "Kami tidak berhenti di peringkat dan impresi. Setiap bulan Anda melihat biaya per lead, kualitas lead, dan keputusan apa yang diambil dari angka itu.",
    pains: [
      "Laporan agency cuma traffic naik",
      "Iklan jalan tapi leads tidak berkualitas",
      "Konten banyak, konversi sedikit",
    ],
    outcomes: [
      "Biaya per lead yang terukur",
      "Halaman yang benar-benar mengonversi",
      "Laporan yang bisa dibaca pemilik bisnis",
    ],
    features: [
      "SEO teknis, on-page, dan konten",
      "Google Ads dan Meta Ads",
      "Landing page dan A/B test",
      "Pelacakan konversi dan atribusi",
      "Laporan bulanan dengan rekomendasi",
    ],
    process: [
      { title: "Audit", desc: "Kami periksa kanal, kata kunci, dan titik kebocoran konversi." },
      { title: "Strategi", desc: "Prioritas kanal dan target biaya per lead disepakati." },
      { title: "Eksekusi", desc: "Konten, iklan, dan landing page dijalankan per sprint." },
      { title: "Optimasi", desc: "Setiap bulan: hentikan yang tidak bekerja, perbesar yang bekerja." },
    ],
    faqs: [
      ["Berapa lama SEO terlihat?", "Biasanya 3-6 bulan untuk kata kunci kompetitif. Iklan bisa memberi hasil lebih cepat."],
      ["Apakah konten termasuk?", "Bisa. Kami menyediakan paket konten atau bekerja dengan tim internal Anda."],
      ["Bagaimana laporannya?", "Dashboard live plus laporan bulanan yang menjelaskan keputusan, bukan hanya angka."],
    ],
    stats: [
      { v: "240%", l: "kenaikan traffic organik" },
      { v: "-37%", l: "biaya per lead" },
      { v: "6 bln", l: "waktu menuju hasil stabil" },
    ],
    tiers: [
      { name: "SEO", price: "Rp 7,5 jt/bln", note: "organik", items: ["Audit teknis", "4 konten/bulan", "Laporan"] },
      { name: "Performance", price: "Rp 12 jt/bln", note: "ads", items: ["Google + Meta", "Landing page", "A/B test"] },
      { name: "Growth", price: "Rp 20 jt/bln", note: "full funnel", items: ["SEO + ads", "Konten", "Atribusi"] },
    ],
    palette: { bg: "#FFF7EC", ink: "#231A14", muted: "#6E5A4A", accent: "#E8450C", accent2: "#0E5C4A", card: "#FFFFFF" },
    mood: "light",
    font: "sans",
  },
  {
    slug: "it-consulting",
    name: "IT Consulting & Managed Services",
    category: "Enterprise IT",
    tagline: "IT yang tenang, bukan yang selalu darurat.",
    intro:
      "Sebagian besar masalah IT bukan teknologi baru, tapi fondasi yang belum rapi. Kami mulai dari audit, menyusun prioritas, lalu mengelola operasional dengan SLA yang jelas.",
    pains: [
      "Downtime tidak terprediksi",
      "Tidak ada dokumentasi dan prosedur",
      "Tim internal kewalahan tugas rutin",
    ],
    outcomes: [
      "Uptime dan respons yang terukur",
      "Aset dan akses terdokumentasi",
      "Roadmap IT 12 bulan",
    ],
    features: [
      "IT health check dan audit",
      "Monitoring 24/7",
      "Helpdesk dengan SLA",
      "Manajemen aset dan akses",
      "Laporan bulanan untuk manajemen",
    ],
    process: [
      { title: "Assessment", desc: "Infrastruktur, keamanan, dan proses diperiksa." },
      { title: "Roadmap", desc: "Prioritas 12 bulan disusun berdasarkan risiko dan biaya." },
      { title: "Implementasi", desc: "Perbaikan dilakukan bertahap tanpa menghentikan operasi." },
      { title: "Operasi", desc: "Monitoring, helpdesk, dan review berkala." },
    ],
    faqs: [
      ["Apakah bisa menggantikan tim IT internal?", "Bisa, atau melengkapi. Banyak klien memakai kami untuk lapisan monitoring dan eskalasi."],
      ["SLA-nya seperti apa?", "Respons dan resolusi ditulis per severity, dengan jam operasional yang disepakati."],
      ["Apakah dokumentasi menjadi milik kami?", "Ya, seluruh dokumentasi dan akses diserahkan."],
    ],
    stats: [
      { v: "99.9%", l: "target uptime" },
      { v: "<15 mnt", l: "respons P1" },
      { v: "24/7", l: "monitoring" },
    ],
    tiers: [
      { name: "Health Check", price: "Rp 12 jt", note: "one-off", items: ["Audit infrastruktur", "Laporan risiko", "Roadmap"] },
      { name: "Managed", price: "Rp 18 jt/bln", note: "retainer", items: ["Monitoring 24/7", "Helpdesk", "Laporan bulanan"] },
      { name: "Enterprise", price: "Custom", note: "dedicated", items: ["Tim on-site", "SLA ketat", "QBR"] },
    ],
    palette: { bg: "#F7F8FA", ink: "#0B1F3A", muted: "#5B6B7C", accent: "#0EA5A4", accent2: "#A8814B", card: "#FFFFFF" },
    mood: "light",
    font: "serif",
  },
  {
    slug: "website-aplikasi",
    name: "Website & Aplikasi Web",
    category: "Software Product",
    tagline: "Selesai sesuai janji, bukan cuma cantik.",
    intro:
      "Website yang lambat dan sulit diubah adalah biaya, bukan aset. Kami membangun dengan struktur yang rapi, SEO teknis sejak awal, dan source code yang sepenuhnya milik Anda.",
    pains: [
      "Website lama lambat dan sulit diupdate",
      "Vendor menahan akses dan source code",
      "Desain bagus tapi tidak menghasilkan lead",
    ],
    outcomes: [
      "Waktu muat di bawah 2 detik",
      "Tim bisa update konten sendiri",
      "Source code dan akses diserahkan",
    ],
    features: [
      "Desain custom dan design system",
      "Next.js, Astro, atau stack yang sesuai",
      "SEO teknis dan structured data",
      "CMS untuk konten mandiri",
      "Garansi bug dan pelatihan admin",
    ],
    process: [
      { title: "Brief", desc: "Tujuan bisnis, audiens, dan konten dipetakan." },
      { title: "Desain", desc: "Wireframe dan desain diuji sebelum coding." },
      { title: "Build", desc: "Sprint dua mingguan dengan preview yang bisa diakses." },
      { title: "Launch", desc: "QA, migrasi, pelatihan, dan monitoring pasca-rilis." },
    ],
    faqs: [
      ["Apakah source code jadi milik kami?", "Ya, setelah pelunasan seluruh repositori dan akses diserahkan."],
      ["Bisa integrasi dengan sistem yang ada?", "Bisa selama tersedia API atau akses database."],
      ["Berapa lama?", "Landing page 2-3 minggu, company profile 4-6 minggu, web app 8-16 minggu."],
    ],
    stats: [
      { v: "<2 dtk", l: "waktu muat" },
      { v: "100", l: "skor SEO teknis" },
      { v: "100%", l: "source code milik klien" },
    ],
    tiers: [
      { name: "Landing", price: "Rp 9 jt", note: "1 halaman", items: ["Desain custom", "Copywriting", "SEO dasar"] },
      { name: "Company", price: "Rp 25 jt", note: "5-7 halaman", items: ["CMS", "SEO teknis", "Analytics"] },
      { name: "Web App", price: "Rp 60 jt", note: "custom", items: ["Autentikasi", "Integrasi", "SLA"] },
    ],
    palette: { bg: "#FBF9F4", ink: "#1B2430", muted: "#65717E", accent: "#2F5BEA", accent2: "#F0B429", card: "#FFFFFF" },
    mood: "light",
    font: "sans",
  },
  {
    slug: "marketplace-management",
    name: "Kelola Toko Online & Marketplace",
    category: "Commerce",
    tagline: "Toko jalan terus, Anda tidak perlu pegang chat satu-satu.",
    intro:
      "Operasional marketplace membosankan dan menyita waktu: upload, balas chat, jaga rating, kelola iklan. Kami mengambil alih rutinitas itu dengan SOP dan laporan yang jelas.",
    pains: [
      "Chat dan pesanan menumpuk",
      "Listing tidak konsisten antarplatform",
      "Iklan jalan tanpa tahu untungnya",
    ],
    outcomes: [
      "Operasional harian tertangani",
      "Listing dan stok konsisten",
      "Laporan penjualan per platform",
    ],
    features: [
      "Shopee, Tokopedia, TikTok Shop, Lazada",
      "Upload dan optimasi listing",
      "CS dan manajemen pesanan",
      "Iklan marketplace",
      "Rekap stok dan rating",
    ],
    process: [
      { title: "Audit toko", desc: "Kami periksa listing, harga, rating, dan pola chat." },
      { title: "SOP", desc: "Alur kerja dan SLA CS disusun bersama tim Anda." },
      { title: "Operasional", desc: "Tim kami menjalankan rutinitas harian dan mingguan." },
      { title: "Review", desc: "Laporan performa dan perbaikan prioritas tiap bulan." },
    ],
    faqs: [
      ["Apakah termasuk balas chat?", "Ya, CS harian termasuk dalam paket operasional."],
      ["Bisa mulai dari satu marketplace?", "Bisa. Banyak klien mulai dari Shopee lalu menambah kanal."],
      ["Apakah bisa akses toko kami?", "Kami memakai akses terbatas dan tercatat, dengan NDA."],
    ],
    stats: [
      { v: "4", l: "marketplace terkelola" },
      { v: "<5 mnt", l: "respons chat" },
      { v: "98%", l: "order rate tepat waktu" },
    ],
    tiers: [
      { name: "Starter", price: "Rp 6 jt/bln", note: "1 toko", items: ["Listing", "CS", "Laporan"] },
      { name: "Growth", price: "Rp 12 jt/bln", note: "3 toko", items: ["Iklan", "Optimasi", "Rekap stok"] },
      { name: "Enterprise", price: "Custom", note: "multi-brand", items: ["Tim dedikasi", "Integrasi ERP", "SLA"] },
    ],
    palette: { bg: "#FDF4F0", ink: "#2A1C18", muted: "#7A6258", accent: "#D9480F", accent2: "#1B6B5A", card: "#FFFFFF" },
    mood: "light",
    font: "sans",
  },
];
