# Rencana Induk Portofolio v2
### Membangun biotama.cv yang mengalahkan byfazila.my.id — analisis, keputusan, dan rencana eksekusi

Disusun: 8 November 2026
Basis data: pengukuran langsung kedua situs (DOM, tinggi halaman, aset) + pembacaan source code `biotama-next`

---

## 1. Ringkasan eksekutif

byfazila.my.id bukan situs portofolio. Itu **funnel penjualan** yang dibungkus rapi sebagai halaman personal. Kekuatannya bukan di desain, tapi di **urutan informasi** dan **bukti yang bisa dicoba**.

biotama.cv saat ini adalah **CV yang dirender sebagai terminal**. Isinya jauh lebih dalam, tapi disusun untuk dibaca perekrut teknis, bukan untuk membuat orang mengambil keputusan.

Kesimpulan keras:

- byfazila menang di **konversi**, Bio menang di **kedalaman**. Yang harus dilakukan bukan meniru desainnya, tapi memindahkan kedalaman Bio ke dalam struktur konversi byfazila.
- Tidak perlu membuat 7 aplikasi demo. Bio sudah punya **6 produk hidup**. Itu lebih kuat dari 7 mockup, kalau diekspos dengan benar.
- Masalah terbesar biotama.cv bukan visual. Masalahnya: **tidak ada satu pun jalan dari "tertarik" ke "menghubungi" yang mudah**, dan tidak ada satu pun bukti yang bisa disentuh pengunjung.
- Target v2: pengunjung bisa menjawab 8 pertanyaan (ini apa, bisa lihat, siapa kamu, cocok untuk saya, berapa, pernah berhasil, prosesnya, mulai dari mana) **tanpa scroll lebih dari 8 layar di HP**.

Angka pembanding (diukur langsung):

| Dimensi | byfazila.my.id | biotama.cv |
|---|---|---|
| Tujuan halaman | jualan jasa | CV / kredibilitas |
| Tinggi desktop | 6.848 px | 13.470 px |
| Tinggi mobile 390px | 11.635 px | 22.948 px |
| DOM node | 383 | 1.586 |
| Ukuran HTML | 57,8 KB (1 file, CSS inline) | ~379 KB |
| Section di beranda | 7 | 10 |
| Demo bisa diklik | 7, file HTML lokal | 0 (link ke landing page) |
| Harga terlihat | 3 tier "mulai dari" | tidak ada |
| CTA utama | WhatsApp + form brief | 1 alamat email |
| Case study before/after | 1, dengan angka | ada outcome, tanpa before/after |
| JSON-LD | 0 | ada, tapi `sameAs` salah |
| Halaman layanan | 0 | 60 halaman (20 layanan × 3 varian) |
| Blog | 0 | banyak, kuat |

---

# BAGIAN 1 — BEDAH byfazila.my.id

## 1.1 Tesis situsnya

Satu kalimat di hero: **"Ceritakan masalahmu. Aku ubah jadi sistem."**

Perhatikan apa yang tidak ada di kalimat itu: tidak ada nama teknologi, tidak ada jabatan, tidak ada "fullstack developer", tidak ada "passionate". Yang ada hanya **perpindahan keadaan** — dari masalah ke sistem. Pengunjung langsung tahu apa yang akan dia dapat, dan tahu apa yang harus dia lakukan (menceritakan masalah).

Subline-nya baru menyebut benda konkret: kasir, stok gudang, booking klinik, RAB proyek, website bisnis. Urutannya penting. **Manfaat dulu, kategori belakangan.**

Ini kebalikan dari hero biotama.cv sekarang:

> "Solutions Architect — I design systems where failure is expensive: payment rails, product platforms, and the teams that keep them running."

Kalimat itu bagus untuk perekrut yang sudah paham konteks. Untuk pemilik bisnis, itu abstrak. Tidak ada benda, tidak ada masalah, tidak ada langkah berikutnya.

## 1.2 Arsitektur informasi: 7 babak percakapan

byfazila tidak menyusun section berdasarkan "tentang saya, pengalaman, skill". Dia menyusunnya berdasarkan **urutan pertanyaan di kepala calon pembeli**.

| # | Section | Pertanyaan yang dijawab | Isi |
|---|---|---|---|
| 1 | Hero | "Kamu bikin apa?" | Janji transformasi + 2 CTA + galeri 3D 7 karya |
| 2 | Marquee | "Bisa apa saja?" | 7 kategori bergulir, pengulangan tanpa biaya kognitif |
| 3 | Tentang | "Kamu siapa?" | 4 paragraf, cerita asal, satu prinsip di-highlight |
| 4 | Karya | "Bisa saya lihat?" | 7 baris, nomor, kategori, nama, satu kalimat hasil, thumbnail saat hover, klik = demo hidup |
| 5 | Layanan | "Berapa?" | 3 tier + harga pembuka + catatan kejujuran harga |
| 6 | Kisah nyata | "Pernah berhasil?" | Before/after klien nyata dengan angka |
| 7 | Proses | "Kalau saya sewa, bagaimana?" | 4 langkah, masing-masing menjelaskan apa yang terjadi |
| 8 | Brief | "Saya mulai dari mana?" | 3 pertanyaan + 2 field + tombol WhatsApp |

Perhatikan: **tidak ada section "pengalaman kerja" dan tidak ada section "skill"**. Skill muncul sebagai deretan chip di bagian bawah, setelah semua hal penting. Pengalaman kerja diganti oleh "kisah nyata" — satu proyek nyata yang diceritakan sebagai masalah dan hasil.

Itu keputusan yang sadar. Untuk pembeli jasa, satu studi kasus yang jelas mengalahkan sepuluh baris pengalaman.

## 1.3 Lima mesin konversi yang dipakai

**Mesin 1 — Demo yang benar-benar bisa diklik.**
Bukan screenshot. Bukan video. Tujuh file HTML mandiri (`demo/laci.html`, `demo/janji.html`, dst), masing-masing sekitar 39 KB, dibuka dalam modal iframe. Isinya aplikasi mini yang berfungsi: papan menu, tombol bayar, struk yang tumbuh seperti kertas thermal. Pengunjung bisa mencoba tanpa daftar, tanpa login, tanpa instal.

Ini yang paling mahal untuk ditiru, dan paling berdampak. Alasannya: klaim "saya bisa bikin kasir" tidak bisa dibantah, tapi juga tidak dipercaya. Demo yang berjalan mengakhiri perdebatan itu dalam 10 detik.

**Mesin 2 — Panel objeksi per proyek.**
Setiap demo punya panel samping berisi 3 fitur unggulan dan 4 tanya-jawab. Contoh untuk aplikasi kasir:

- "Bisa bayar pakai QRIS?" → dijawab dengan pemisahan rekap per metode pembayaran.
- "Kalau internet mati?" → dijawab dengan mode offline dan sinkronisasi.
- "Punya lebih dari satu cabang?" → dijawab dengan arsitektur multi-cabang.

Ini BUKAN FAQ. Ini **senjata penjualan yang diletakkan tepat di titik keraguan**, saat pengunjung sedang melihat demo. Teknik ini yang membuat situsnya terasa "dewasa" padahal pemiliknya masih 19 tahun.

**Mesin 3 — Harga pembuka yang jujur.**
Tiga tier: Rp800 ribu, Rp2 juta, Rp200 ribu/bulan. Semuanya pakai kata "mulai dari". Ditutup satu kalimat: "Harga kisaran awal. Harga final menyesuaikan fitur dan selalu disepakati sebelum pekerjaan dimulai."

Efeknya dua: menyaring orang yang tidak mampu (menghemat waktu), dan menghilangkan rasa takut "mau tanya harga tapi takut ditembak angka". Harga pembuka bukan komitmen, tapi **pintu masuk percakapan**.

**Mesin 4 — Before/after dengan angka.**
"Satu RAB dulu makan waktu dua hari." Lalu dua kolom: SEBELUM (2 hari, manual Excel) dan SESUDAH (hitungan menit, master harga, margin otomatis, PDF siap kirim). Ada nama klien: Drumah Dekor.

Yang membuat ini bekerja: **angka kecil yang spesifik**. "2 hari → hitungan menit" lebih dipercaya daripada "meningkatkan efisiensi 90%".

**Mesin 5 — Form brief yang mengirim WhatsApp.**
Tiga grup pertanyaan (jenis kebutuhan, jenis usaha, cerita masalah) + nama + kontak. Tombol "Kirim lewat WhatsApp" menyusun pesan lengkap dari jawaban, lalu membuka WhatsApp. Tanpa backend, tanpa email yang nyasar ke spam, tanpa form yang hilang.

Dan yang paling penting: pertanyaan pertama **memfilter sendiri**. Orang yang memilih "Perawatan" tidak akan dikirimi penawaran aplikasi baru.

## 1.4 Kerajinan visual yang membuatnya terasa premium

Ini bagian yang sering disalahartikan sebagai "desain bagus". Sebenarnya ada aturan teknis yang bisa diukur.

**Tipografi.** Satu keluarga font saja: Plus Jakarta Sans. Body 17px. H1 di desktop ~94px dengan line-height 0.98 dan letter-spacing -0.05em. H2 ~63–71px. Semua heading `text-wrap: balance`. Efeknya: judul terasa seperti poster, bukan teks web.

**Warna.** Putih bersih (`#FFFFFF`) sebagai latar, tinta hampir hitam (`#121212`), abu (`#6E6E6E`) untuk teks sekunder, satu garis tipis (`#E4E4E0`). Lima warna aksen dipakai **hanya untuk identitas tiap proyek**, bukan untuk dekorasi. Setiap karya punya warna sendiri (`--c:#C0573A`, `#0E8A8C`, `#2346C8`, dst) yang muncul konsisten di baris karya, thumbnail, dan panel demo.

**Ruang.** Satu kontainer 1240px. Section padding vertikal `clamp(70px, 10vw, 130px)`. Tidak ada card bertumpuk, tidak ada shadow berlebihan. Pemisah antar karya hanya garis 1px.

**Gerak.** Hanya tiga jenis: marquee horizontal, reveal saat scroll (`rv pre`), dan galeri 3D. Tidak ada animasi yang menghalangi baca.

**Detail kecil yang menandakan perhatian.** `:focus-visible` dengan outline biru, `env(safe-area-inset-*)` untuk iPhone notch, `prefers-reduced-motion` (perlu dicek), iframe demo dengan `title`, tombol dengan `aria-pressed`, baris karya dengan `role="button"` dan `tabindex="0"`.

## 1.5 Bukti yang dipakai, dan bukti yang tidak dipakai

Yang dipakai: 7 demo berjalan, 1 studi kasus bernama, 3 tier harga, 1 foto asli, 21 chip teknologi, 2 tautan sosial.

Yang **tidak** dipakai: daftar pengalaman kerja, sertifikasi, IPK, jumlah klien, testimoni palsu, logo perusahaan. Untuk target pasar UMKM, semua itu tidak relevan.

Ini pelajaran penting: **byfazila menang karena berani membuang**. 57 KB vs 379 KB. 383 node vs 1.586 node.

## 1.6 Kelemahan byfazila yang harus kita serang

Jangan meniru buta. Ada 9 celah yang bisa Bio ambil:

1. **Nol JSON-LD.** Tidak ada structured data sama sekali. Untuk SEO, ini gratis untuk dikalahkan.
2. **Satu halaman saja.** Tidak ada URL untuk tiap karya, tidak ada halaman layanan, tidak ada blog. Permukaan pencariannya cuma satu.
3. **Hanya bahasa Indonesia.** Tidak bisa melayani klien regional atau posisi internasional.
4. **Kedalaman teknis tipis.** 19 tahun, mahasiswa, belum ada bukti sistem berskala, kepatuhan, atau uang nyata. Bio punya 11+ tahun di fintech, brokerage, AML/KYC, ERP.
5. **Demo adalah mockup.** Bagus sebagai bukti kemampuan UI, tapi tidak membuktikan sistem bisa jalan di produksi. Bio punya produk yang benar-benar live.
6. **Tidak ada tulisan.** Tidak ada artikel, tidak ada bukti cara berpikir. Untuk klien bernilai tinggi, ini penting.
7. **Tidak ada bukti skala atau risiko.** Tidak ada cerita soal kegagalan sistem, audit, kepatuhan, atau keputusan arsitektur. Itu justru keunggulan Bio.
8. **Galeri 3D berbasis canvas.** Tanpa WebGL atau dengan `prefers-reduced-motion`, pengalaman bisa rusak. Ada fallback, tapi tetap titik lemah aksesibilitas dan performa di HP murah.
9. **Tone "aku" dan harga Rp800 ribu.** Cocok untuk UMKM, tidak cocok untuk klien korporat. Bio tidak boleh ikut turun ke harga itu.

---

# BAGIAN 2 — AUDIT biotama.cv HARI INI

## 2.1 Yang sudah kuat (jangan dirusak)

- **Kedalaman nyata.** Srabutan, Toko Vavelle, UMKM St. Servatius, Healer Path, Travel Bali, Beligih, Dharmakarsa, MallOps. Enam karya terstruktur + dua produk besar.
- **Data karya sudah rapi.** `works.ts` punya `challenge`, `solution`, `outcomes`, `highlights`, `stack`, `palette`, `shots`. Fondasinya sudah benar. Yang kurang adalah cara menyajikannya.
- **Blog yang hidup.** Puluhan artikel teknis. Ini aset SEO dan bukti pemikiran yang tidak dimiliki byfazila.
- **JSON-LD sudah ada.** Person, WebSite, WebPage. Fondasi teknis lebih baik.
- **Identitas visual yang khas.** Dark + gold + mono. Tidak generik.
- **Struktur proyek Next.js 16 yang bersih.** App Router, data terpisah, komponen terpisah.

## 2.2 Sembilan masalah struktural

**1. Tidak jelas untuk siapa halaman ini.**
Hero menyapa "Solutions Architect" dalam bahasa Inggris. Contact hanya email. Tidak ada harga, tidak ada paket, tidak ada form. Ini situs untuk perekrut, tapi perekrut juga tidak punya jalan pintas selain menggulir 13.000 px.

**2. Kostum mengalahkan isi.**
Terminal yang mengetik `systemctl status payment-gateway`, prompt `$ whoami`, judul section `$ CAT ABOUT.MD`. Ini sinyal "saya developer", bukan "saya orang yang bisa dipercaya memegang sistem pembayaran". Untuk audiens eksekutif, kostum ini menambah jarak, bukan kredibilitas.

**3. Panjang tanpa kurva.**
13.470 px desktop, 22.948 px mobile. Itu sekitar 27 layar HP. Section `projects` saja setinggi 3.989 px. Pengunjung tidak punya alasan untuk bertahan karena tidak ada janji yang terus diperbarui.

**4. Bukti tidak bisa disentuh.**
"Live" mengarah ke landing page internal (`/works/srabutan`), bukan ke produknya. Tidak ada satu pun tempat di mana pengunjung bisa mencoba sesuatu. Klaim tetap klaim.

**5. Outcome tidak berangka.**
`outcomes` berisi "0% komisi", "24/7", "1 alur" — itu fitur, bukan hasil. Tidak ada "sebelum 2 hari, sesudah 5 menit". Tidak ada biaya yang dihemat, waktu yang dipangkas, kesalahan yang hilang.

**6. Tidak ada model engagement.**
Tidak ada "saya bisa diajak dengan cara ini": audit, build, retainer. Tidak ada rentang harga. Klien yang tertarik harus mengirim email dan menebak apakah mampu.

**7. CTA-nya satu dan pasif.**
`fxwisdom1@gmail.com`. Tidak ada form, tidak ada WhatsApp, tidak ada kalender. Setiap langkah tambahan memotong konversi.

**8. 60 halaman layanan yang menipiskan otoritas.**
20 layanan × 3 varian. Termasuk "game studio", "animasi VFX", "rakit PC", "CCTV", "jaringan WiFi". Untuk posisi Solutions Architect fintech, daftar ini justru **menurunkan** persepsi senioritas. Seorang arsitek tidak mengerjakan semuanya; dia memilih.

**9. Inkonsistensi data yang merusak kredibilitas.**
- `profile.metrics` menulis **"15 Years Live"**, sementara pengalaman CITT tercatat 2014–2025 (11 tahun). Pilih satu definisi dan pakai di semua tempat.
- JSON-LD `sameAs` menunjuk `linkedin.com/in/biolumbantoruan` dan `x.com/biolumbantoruan`, sedangkan `profile.ts` memakai `linkedin.com/in/agustinus-biotamalo-lumbantoruan-99126149/` dan `x.com/fxwisdom1`. Artinya structured data menunjuk profil yang kemungkinan tidak ada. Ini bug nyata, bukan preferensi.
- Halaman berbahasa Inggris tapi `inLanguage` di root schema menyebut `en-US` sementara ada toggle ID. Perlu `hreflang` yang benar.

---

# BAGIAN 3 — KEPUTUSAN STRATEGI

## 3.1 Jangan menyalin posisi byfazila. Ambil mesinnya, ganti bahan bakarnya.

byfazila menjual **aplikasi murah untuk UMKM**: Rp800 ribu sampai Rp2 juta. Bio tidak boleh masuk ke kolam itu. Yang Bio jual adalah **risiko yang mahal kalau salah**: payment rail, platform produk, migrasi sistem, kepatuhan.

Jadi rumusnya:

> Struktur dan mekanika konversi byfazila + kedalaman, angka nyata, dan produk hidup milik Bio + harga dan bahasa untuk klien yang lebih serius.

## 3.2 Dua pintu, satu rumah

Bio punya dua pasar yang tidak boleh dicampur dalam satu halaman:

- **Pintu A — Klien / perusahaan.** Butuh: masalah, bukti, harga, proses, kontak cepat. Bahasa Indonesia dan Inggris.
- **Pintu B — Perekrut / hiring manager.** Butuh: ringkasan, pengalaman, keputusan arsitektur, CV PDF.

Keputusan: **satu beranda yang melayani keduanya, dengan pemisahan di CTA, bukan di halaman.**

- Beranda `/` — naratif, berorientasi hasil, bilingual (EN default, ID toggle di `/id`).
- `/resume` — tetap ada, khusus perekrut, tanpa narasi penjualan.
- `/works/[slug]` — studi kasus mendalam per produk.
- `/layanan` — 4 pilar, bukan 60 halaman.
- `/blog` — tetap.
- `/brief` — form brief seperti byfazila, output WhatsApp + email + PDF ringkas.

Alasannya: memecah menjadi dua situs akan menggandakan pekerjaan dan memecah otoritas SEO. Satu beranda dengan dua jalur lebih murah dan lebih kuat.

## 3.3 Posisi yang diambil

> **"Sistem yang gagal itu mahal. Saya membuatnya tidak gagal."**

Ini sudah ada di situs sekarang ("systems where failure is expensive") tapi masih dalam bahasa arsitek. Versi yang lebih tajam untuk hero:

**Opsi A (risiko — rekomendasi):**
> Sistem yang gagal itu mahal.
> Saya membuatnya membosankan.

Subline: "Payment rail, platform produk, dan operasi yang tidak boleh berhenti. 11 tahun di fintech, brokerage, dan ERP. Enam produk di halaman ini berjalan di produksi, bukan di mockup."

**Opsi B (bukti):**
> Enam produk hidup.
> Satu cara berpikir yang sama.

**Opsi C (transformasi, paling dekat dengan byfazila):**
> Ceritakan sistem yang bikin Anda terjaga.
> Saya bikin Anda bisa tidur.

Rekomendasi: **A** untuk bahasa Inggris, **C** untuk versi Indonesia. A menonjolkan risiko (cocok untuk CTO/Founder), C menonjolkan kelegaan (cocok untuk owner bisnis).

---

# BAGIAN 4 — BLUEPRINT BERANDA v2

Target: maksimal 8 layar HP. Setiap section punya satu pekerjaan.

## Section 1 — Hero (1 layar)
- Eyebrow: `Bio Lumbantoruan · Solutions Architect · Jakarta`
- H1 dua baris, 72–96px, letter-spacing -0.04em.
- Subline 1 kalimat, menyebut 3 hal konkret.
- Dua CTA: **"Coba produknya"** (primary, ke section demo) dan **"Ceritakan masalah Anda"** (secondary, ke `/brief`).
- Strip bukti di bawah CTA: `11 tahun` · `6 produk live` · `3 industri teregulasi` · `2 ERP end-to-end`. Semua angka milik Bio sendiri, terverifikasi.
- **Hapus terminal.** Ganti dengan satu screenshot produk asli yang bergerak halus (Srabutan dashboard) atau komposisi tiga layar produk. Gerak boleh, kostum jangan.

## Section 2 — Demo rail (1 layar)
Enam kartu produk, bisa digeser horizontal, masing-masing:
- nama produk
- satu kalimat masalah yang diselesaikan
- satu angka hasil
- tombol **"Buka demo"**

Klik membuka modal iframe seperti byfazila, dengan panel samping: 3 fitur, 3 keputusan arsitektur, 3 tanya-jawab. Untuk produk yang tidak bisa dibuka publik (misal data klien), sediakan **demo tenant read-only** dengan data seed.

Kalau keenam produk belum bisa di-demo-kan, minimal 2 dulu: Srabutan dan MallOps. Dua demo hidup lebih kuat dari enam screenshot.

## Section 3 — Pemilih masalah (0,5 layar)
Empat tombol besar: **Pembayaran**, **Operasional**, **Sistem lama**, **Data & AI**.
Klik salah satu → menampilkan 2 studi kasus yang relevan + satu kalimat penawaran. Ini meniru tab filter byfazila, tapi berbasis masalah, bukan jenis produk.

## Section 4 — Studi kasus unggulan (2 layar)
Tiga kartu, format seragam:

```
MASALAH     → satu kalimat, bahasa klien
KEPUTUSAN   → satu keputusan arsitektur yang mahal kalau salah
HASIL       → satu angka sebelum → sesudah
ARTEFAK     → tautan demo / PDF / arsitektur
```

Bukan "challenge/solution" yang abstrak. Harus ada angka dan harus ada keputusan yang bisa dibantah.

## Section 5 — Cara kerja (1 layar)
4 langkah, setiap langkah menyebut **deliverable yang diterima klien**:
1. **Dengar** → dokumen masalah + batasan (1–2 hari)
2. **Rancang** → decision memo: pilihan, trade-off, biaya (3–5 hari)
3. **Bangun** → irisan vertikal yang bisa dipakai tiap minggu
4. **Jaga** → runbook, monitoring, serah terima

Bedanya dengan byfazila: byfazila menjelaskan proses. Bio harus menjelaskan **apa yang klien pegang di akhir tiap langkah**.

## Section 6 — Model kerja & harga (1 layar)
Tiga pintu, dengan anchor:
- **Architecture review** — mulai Rp7,5 juta / 1 minggu. Output: decision memo + peta risiko.
- **Build** — mulai Rp25 juta. Output: produk jalan, serah terima, dokumentasi.
- **Retainer** — mulai Rp4 juta/bulan. Output: monitoring, perbaikan, iterasi.

Catatan sama seperti byfazila: "Angka ini pembuka. Lingkup dan harga final disepakati sebelum kerja dimulai." Jangan sembunyikan harga; senioritas justru terlihat dari berani menyebut angka.

## Section 7 — Kredibilitas (0,5 layar)
Logo/nama klien yang mengizinkan, 2 testimoni dengan nama dan jabatan, tautan ke blog. Kalau belum ada izin, pakai kutipan yang sudah ada di `testimonials.ts` — tapi verifikasi dulu.

## Section 8 — Brief (1 layar)
Form 4 langkah, output WhatsApp + email:
1. Yang dibutuhkan: audit / build / retainer / belum tahu
2. Sistemnya sekarang: manual / legacy / sudah ada tapi bermasalah / belum ada
3. Skala: jumlah pengguna, transaksi per hari, jumlah cabang (pilihan, bukan angka bebas)
4. Cerita + nama + kontak

Tombol: **"Kirim brief"** → membuka WhatsApp dengan pesan terformat, dan mengirim salinan ke email. Setelah submit, tampilkan ringkasan brief di halaman (seperti `#brief` di byfazila) supaya pengunjung bisa copy.

## Section 9 — Footer
Nama, lokasi, email, LinkedIn, GitHub, WhatsApp. Kalimat penutup satu baris.

---

# BAGIAN 5 — SISTEM DEMO (INI MOAT-NYA)

## 5.1 Prinsip

Jangan bikin mockup kalau produknya sudah ada. Bio punya keunggulan yang tidak dimiliki byfazila: **produk yang benar-benar berjalan**. Itu harus diekspos, bukan disembunyikan di balik landing page.

## 5.2 Tiga tingkat demo

**Tingkat 1 — Live sandbox (terbaik).**
Subdomain atau route terpisah, tenant demo, data seed, akses read-only, banner "Mode demo — data contoh", tombol reset.
Kandidat: Srabutan (cari talenta, lihat profil, alur proyek), MallOps (POS, stok, laporan), Dharmakarsa (pencarian arsip).

**Tingkat 2 — Guided walkthrough (kalau produk tidak bisa dibuka publik).**
Rekaman layar 60–90 detik, autoplay muted, dengan caption. Bukan video marketing. Rekaman layar asli, kursor bergerak, angka nyata. Kandidat: sistem klien yang datanya sensitif.

**Tingkat 3 — Mockup interaktif (kalau belum ada produknya).**
File HTML mandiri seperti byfazila. Hanya untuk kasus di mana tidak ada produk nyata, dan hanya kalau memang perlu menunjukkan kemampuan UI.

## 5.3 Arsitektur teknis demo

- Route: `/demo/[slug]` → halaman shell dengan iframe.
- Iframe: `sandbox="allow-scripts allow-same-origin allow-forms"`, `loading="lazy"`, `title` deskriptif.
- Demo token: cookie `demo_session` berisi JWT pendek (15 menit), role `demo`, `readOnly: true`.
- Guard di API: tolak semua `POST/PATCH/DELETE` kalau role `demo`, kecuali endpoint yang memang "simulasi" dan menulis ke tenant demo.
- Tenant demo terpisah secara fisik (database/schema sendiri). Jangan pernah pakai tenant produksi.
- Reset otomatis tiap 24 jam lewat cron.
- Rate limit per IP untuk mencegah penyalahgunaan.
- Panel samping: `features`, `decisions`, `qa` di `works.ts` sebagai field baru.

## 5.4 Yang harus ada di panel samping setiap demo

```
3 hal yang bisa Anda coba     ← instruksi, bukan fitur
3 keputusan yang saya ambil   ← alasan teknis, ini pembeda dari byfazila
3 pertanyaan yang biasanya muncul ← objeksi, dijawab di tempat
```

Contoh untuk Srabutan:
- Keputusan: "Pembayaran tidak menyentuh dana talenta. Escrow di Xendit, platform hanya memegang status."
- Pertanyaan: "Kalau sengketa?" → "Status proyek dan bukti kerja tersimpan, pencairan ditahan sampai kedua pihak setuju atau batas waktu habis."

Ini yang membuat Bio terlihat seperti arsitek, bukan pembuat halaman.

---

# BAGIAN 6 — DESIGN SYSTEM v2

## 6.1 Arah

Pertahankan identitas gelap dan emas, tapi buang kostum terminal. Arahnya: **"engineering dossier"** — seperti dokumen teknis yang dibuat orang yang peduli tipografi.

- Latar: `#0A0A0B` (bukan hitam pekat), permukaan `#121214`, garis `#1F1F23`.
- Teks: `#F2F0EA` utama, `#9A968C` sekunder.
- Aksen: emas `#C9A358` untuk penekanan, hijau `#34D399` hanya untuk status "live".
- Tipografi: satu sans untuk UI (Inter atau Geist), satu mono untuk label dan angka (JetBrains Mono). Maksimal 2 keluarga.
- Skala: H1 `clamp(44px, 7vw, 88px)`, H2 `clamp(32px, 4.5vw, 56px)`, body 17px, line-height 1.55.
- Grid: 12 kolom, kontainer 1200px, gutter 24px.
- Sudut: 2px untuk kartu, 999px hanya untuk pill. Hindari sudut 16px ke atas yang membuat semuanya terasa seperti template SaaS.

## 6.2 Gerak

Empat izin saja:
1. Reveal saat scroll: opacity + translateY 12px, 400ms, `ease-out`.
2. Marquee untuk logo/teknologi.
3. Hover state pada kartu karya: thumbnail muncul, 200ms.
4. Transisi halaman: fade 150ms.

Semua dibungkus `@media (prefers-reduced-motion: reduce)` → matikan total. Ini titik di mana Bio bisa lebih baik dari byfazila.

## 6.3 Yang wajib ada (checklist aksesibilitas)

- Fokus terlihat di semua elemen interaktif.
- `aria-expanded` pada accordion, `role="tablist"` pada filter.
- Demo iframe punya `title` dan tombol tutup yang bisa dijangkau keyboard.
- Kontras minimal 4.5:1 untuk teks body.
- Tidak ada teks di dalam gambar.
- Semua gambar punya `alt` yang menjelaskan isi, bukan nama file.
- `lang` yang benar per route (`en` / `id`).

---

# BAGIAN 7 — IMPLEMENTASI TEKNIS

## 7.1 Struktur data

Perluas `Work` di `src/data/works.ts`:

```ts
type Work = {
  slug: string;
  name: string;
  problem: string;          // baru: satu kalimat bahasa klien
  decision: string;         // baru: keputusan arsitektur kunci
  result: { before: string; after: string; label: string }; // baru
  demo?: {
    type: "sandbox" | "video" | "mock";
    url?: string;
    video?: string;
    steps: string[];        // 3 hal yang bisa dicoba
    decisions: string[];    // 3 keputusan
    qa: [string, string][]; // 3 objeksi
  };
  artifact?: { label: string; href: string };
  // field lama tetap
};
```

Tambah `src/data/offers.ts` untuk 3 model kerja, dan `src/data/brief.ts` untuk pertanyaan form.

## 7.2 Komponen baru

```
src/components/v2/
  hero.tsx              (RSC, tanpa terminal)
  proof-strip.tsx
  demo-rail.tsx         ("use client", horizontal scroll)
  demo-modal.tsx        ("use client", iframe + panel)
  problem-picker.tsx    ("use client", filter studi kasus)
  case-card.tsx         (RSC)
  process-steps.tsx     (RSC)
  offer-cards.tsx       (RSC)
  brief-form.tsx        ("use client", validasi + WhatsApp)
  lang-toggle.tsx       ("use client")
```

## 7.3 Keputusan teknis

- **RSC default.** Client component hanya untuk: demo rail, modal, filter, form, toggle bahasa.
- **Hapus `three` dari beranda.** `three` (0.184) berat dan tidak memberi nilai konversi. Simpan hanya jika ada halaman khusus yang memang butuh. Ganti galeri dengan CSS scroll-snap + `transform: translateZ` ringan, atau grid editorial.
- **Hapus `AlienRunner`, `GameConsole`, `DataRunner`, `ShineInitializer` dari beranda.** Ini bagian dari kostum yang harus dipensiunkan. Kalau mau, pindahkan ke `/playground` yang tidak diindeks.
- **i18n sederhana.** Dua kamus (`en.ts`, `id.ts`) + route `/id`. Jangan pasang library i18n untuk dua bahasa; cukup context + kamus. Ini pilihan "lazy" yang benar.
- **Halaman layanan.** Konsolidasi 60 → 4 pilar + 8 studi kasus. 301 redirect dari URL lama. 4 pilar: *Payments & Fintech*, *Product Platforms*, *Systems Modernization*, *AI in Production*.
- **SEO.** JSON-LD `Person` + `WebSite` + `BreadcrumbList` + `CreativeWork` per karya + `Service` per pilar + `FAQPage` di halaman yang punya FAQ. Perbaiki `sameAs`. Tambah `hreflang` untuk `/` dan `/id`. Sitemap per tipe.
- **Performa.** Target di HP mid-range 4G: LCP < 2,0 s, CLS < 0,05, INP < 200 ms, JS awal < 150 KB gzip. `next/image` untuk semua screenshot, AVIF/WebP, `priority` hanya untuk gambar hero. Font via `next/font` dengan `display: swap` dan subset latin.
- **Analitik.** Plausible atau Umami. Event: `demo_open`, `demo_step`, `brief_start`, `brief_submit`, `offer_view`, `resume_download`, `lang_switch`. Tanpa cookie banner kalau memakai Plausible.

## 7.4 File yang disentuh

```
src/app/page.tsx                     → susun ulang section
src/app/id/page.tsx                  → baru
src/app/brief/page.tsx               → baru
src/app/demo/[slug]/page.tsx         → baru
src/app/layanan/page.tsx             → 4 pilar
src/app/layanan/[service]/[variant]  → hapus/redirect
src/app/works/[slug]/page.tsx        → tambah demo, before/after, artefak
src/data/works.ts                    → field baru
src/data/offers.ts                   → baru
src/data/i18n/{en,id}.ts             → baru
src/components/v2/*                  → baru
src/components/{hero,about,...}      → pensiunkan bertahap
```

---

# BAGIAN 8 — PRODUKSI KONTEN (INI YANG MENENTUKAN)

Kode tidak akan menyelamatkan halaman yang isinya lemah. Yang harus dikumpulkan sebelum build:

## 8.1 Untuk setiap dari 6 karya

- [ ] Satu kalimat masalah dalam bahasa klien (bukan bahasa teknologi)
- [ ] Satu keputusan arsitektur yang bisa dibantah, beserta alasannya
- [ ] Satu angka sebelum → sesudah yang bisa dipertanggungjawabkan
- [ ] Satu artefak: demo, PDF, diagram, atau rekaman layar
- [ ] Izin tertulis untuk menyebut nama klien (kalau ada)

**Aturan angka:** hanya angka milik Bio sendiri. Jangan pakai jumlah klien, volume transaksi, atau skala platform milik perusahaan/klien. Kalau tidak ada sumbernya, tulis aktivitasnya tanpa angka. (Lihat skill `personal-metrics-integrity`.)

## 8.2 Aset yang harus dibuat

- 6 screenshot desktop + 6 mobile, WebP, lebar 1600/800.
- 2 rekaman layar 60–90 detik.
- 1 foto profesional (bukan selfie), latar netral.
- 3 kutipan klien dengan nama + jabatan + izin.
- 1 diagram arsitektur yang benar-benar bagus (ini pembeda besar; byfazila tidak punya).
- 1 halaman PDF "decision memo" contoh, bisa diunduh.

## 8.3 Copy yang harus ditulis ulang

Semua heading bahasa Inggris yang berbentuk perintah shell (`$ CAT ABOUT.MD`, `$ ECHO $CONTACT`) diganti dengan bahasa manusia. Contoh:

| Sekarang | Menjadi |
|---|---|
| `$ CAT ABOUT.MD` | `Cara saya mengambil keputusan` |
| `$ ECHO $CONTACT` | `Mulai dari satu percakapan` |
| `Where I've made an impact` | `Yang saya bangun dan hasilnya` |
| `What I've built` | `Produk yang berjalan sekarang` |
| `Technologies I work with` | `Alat yang saya pakai` |

---

# BAGIAN 9 — ROADMAP

## Fase 0 — Verifikasi dan keputusan (2 hari)
- Tetapkan definisi "tahun pengalaman" dan samakan di semua tempat.
- Perbaiki `sameAs` JSON-LD.
- Kumpulkan izin klien.
- Kunci headline (EN + ID).
- Kunci daftar 6 karya yang masuk beranda dan 2 yang dapat demo.

## Fase 1 — Fondasi (1 minggu)
- Design token + komponen dasar.
- Hero baru, proof strip, case card.
- Hapus kostum terminal dan komponen game dari beranda.
- Perbaiki JSON-LD dan metadata.
- Hasil: beranda baru tanpa demo, sudah lebih pendek dan jelas.

## Fase 2 — Demo dan studi kasus (2 minggu)
- Demo modal + panel samping.
- 2 sandbox demo (Srabutan, MallOps) atau 2 rekaman layar.
- 6 halaman karya dengan format masalah/keputusan/hasil.
- Hasil: bukti bisa disentuh.

## Fase 3 — Konversi (1 minggu)
- Halaman `/brief` + WhatsApp.
- Model kerja dan harga.
- Section proses.
- Analitik + event.
- Hasil: jalur dari tertarik ke kontak selesai.

## Fase 4 — Otoritas (1 minggu)
- Konsolidasi 60 halaman layanan → 4 pilar + 301.
- Versi `/id`.
- 2 studi kasus tambahan.
- Hasil: permukaan SEO lebih kuat dan lebih jujur.

Total: **5–6 minggu** kerja fokus, bukan 6 bulan.

## Yang tidak dikerjakan (sengaja)
- Tidak bikin 7 mockup baru.
- Tidak bikin halaman interaktif 3D baru.
- Tidak migrasi framework.
- Tidak redesign total identitas visual.
- Tidak menambah 20 halaman layanan baru.

---

# BAGIAN 10 — SCORECARD

Ukur sebelum dan sesudah. Target v2:

| Metrik | Sekarang | Target |
|---|---|---|
| Tinggi beranda desktop | 13.470 px | < 9.000 px |
| Tinggi beranda mobile | 22.948 px | < 12.000 px |
| Section beranda | 10 | ≤ 8 |
| Demo bisa diklik | 0 | ≥ 2 |
| CTA ke kontak | 1 (email) | 3 (demo, brief, WhatsApp) |
| Harga terlihat | tidak | ya, 3 anchor |
| Studi kasus berangka | 0 | ≥ 3 |
| JSON-LD valid & `sameAs` benar | tidak | ya |
| LCP mobile 4G | belum diukur | < 2,0 s |
| JS awal | > 300 KB (estimasi) | < 150 KB gzip |
| Halaman layanan | 60 | 4 + 8 karya |
| Bahasa | EN | EN + ID |
| Waktu ke kontak dari hero | 1 email, tanpa form | ≤ 2 klik |

**Definisi selesai:** seorang pemilik bisnis yang tidak paham teknologi bisa membuka beranda, mencoba satu demo, membaca satu hasil berangka, melihat harga pembuka, dan mengirim brief — **tanpa bertanya apa pun ke Bio**.

---

# BAGIAN 11 — OPSI KEPUTUSAN

**Opsi A — Repackage ringan (1 minggu).**
Ganti hero, pendekkan halaman, tambah harga dan form. Tanpa demo.
Hasil: 40% lebih baik. Murah. Tidak mengubah posisi.
Cocok kalau prioritasnya job hunt, bukan jualan jasa.

**Opsi B — Funnel penuh tanpa demo (3 minggu).**
Semua section v2, 6 studi kasus, brief form, harga. Tanpa sandbox.
Hasil: 70% lebih baik. Ini yang paling banyak memberi hasil per jam kerja.

**Opsi C — Funnel + 2 demo hidup (5 minggu).** ← **rekomendasi**
Semua B, plus Srabutan dan MallOps bisa dicoba, plus panel keputusan/objeksi.
Hasil: 90% lebih baik. Ini yang membuat biotama.cv tidak bisa dibandingkan lagi dengan portofolio lain, termasuk byfazila.

**Opsi D — Flagship (10 minggu).**
C + 6 demo + diagram arsitektur interaktif + PDF decision memo + portal klien.
Hasil: kategorinya beda. Tapi risiko: 10 minggu sebelum ada yang berubah.
Jangan mulai dari sini.

**Keputusan: jalankan C.** B dikerjakan lebih dulu di dalam C, jadi kalau waktu habis di tengah jalan, situs sudah dalam keadaan lebih baik. Demo ditambahkan setelah funnel-nya hidup.

---

# LAMPIRAN — BANK COPY

## Headline EN
1. Expensive systems fail quietly. I make them boring.
2. Six products in production. One way of thinking.
3. You don't need more features. You need a system that holds.

## Headline ID
1. Sistem yang gagal itu mahal. Saya membuatnya membosankan.
2. Ceritakan sistem yang bikin Anda terjaga. Saya bikin Anda bisa tidur.
3. Enam produk berjalan. Satu cara berpikir.

## Subline
EN: "Payment rails, product platforms, and operations that cannot stop. 11 years across fintech, brokerage, and ERP. Everything on this page runs in production."

ID: "Payment rail, platform produk, dan operasi yang tidak boleh berhenti. 11 tahun di fintech, brokerage, dan ERP. Semua yang ada di halaman ini berjalan di produksi, bukan di mockup."

## Template kartu studi kasus
```
MASALAH
[ satu kalimat, bahasa klien, tanpa istilah teknis ]

KEPUTUSAN
[ satu keputusan, dan apa yang terjadi kalau salah ]

HASIL
[ sebelum ] → [ sesudah ], diukur dengan [ satuan ]

ARTEFAK
[ demo ] [ diagram ] [ PDF ]
```

## Template panel demo
```
Yang bisa Anda coba
1. ...
2. ...
3. ...

Keputusan yang saya ambil
1. ... karena ...
2. ... karena ...
3. ... karena ...

Yang biasanya ditanyakan
1. Q: ... A: ...
2. Q: ... A: ...
3. Q: ... A: ...
```

---

## Catatan penutup

byfazila menang karena dia berani membuang. 57 KB, 383 node, 7 section, satu tujuan.

Bio punya bahan yang jauh lebih berat: 11 tahun, enam produk hidup, sistem yang memindahkan uang, dan tulisan teknis yang benar-benar dipikirkan. Yang salah selama ini bukan bahannya. Yang salah adalah **cara menyajikannya**: seperti CV, bukan seperti percakapan.

Rencana ini bukan tentang membuat situs yang lebih banyak. Ini tentang membuat situs yang lebih sedikit, lebih tajam, dan lebih berani menunjukkan bukti.


---

# ADDENDUM v4 — Posisi baru: sistem, agen, batas

Ditambahkan setelah revisi arah. Menggantikan arah visual gelap di Bagian 6 dan menambah dua pilar isi.

## Posisi

> **Sistem yang tahan gagal. Agen yang tahu batas.**

Tiga pilar, satu tesis: yang membuat sistem bernilai bukan fiturnya, tapi batas yang membuatnya tidak merusak apa pun saat gagal.

1. **Payment dan platform.** Sebelas tahun di fintech, brokerage, ERP.
2. **Agentic AI.** RAG dengan sitasi, workflow verifikasi, pipeline dengan gerbang manusia.
3. **Cybersecurity.** Prompt injection, isolasi secret, hak minimum, jejak audit. Ini yang membuat pilar kedua bisa dipakai di produksi.

Urutan section: Agentic AI dan Cybersecurity harus muncul **sebelum** daftar karya. Bukan sebagai kemampuan tambahan, tapi sebagai alasan percaya.

## Design read

Portfolio untuk pembeli teknis dan hiring manager di fintech dan AI, dengan bahasa editorial yang tegas, condong ke native CSS, Bricolage Grotesque, dan screenshot produk asli.

Dials: `VARIANCE 8 / MOTION 4 / DENSITY 4`.

## Sistem visual

- Latar kertas hangat `#F2EFE6`, tinta `#121212`, satu aksen kobalt `#1F3BFF`. Tidak ada aksen kedua.
- Satu color block: section Cybersecurity penuh kobalt. Selain itu halaman tetap terang. Ini satu-satunya perpindahan tema, disengaja.
- Tipografi: Bricolage Grotesque untuk display, Instrument Sans untuk body, JetBrains Mono untuk label. Tidak ada serif. Tidak ada Inter.
- Bentuk: semua kotak tajam. Hanya tombol yang pill. Satu aturan, dipakai konsisten.
- Gambar: portrait asli dan enam screenshot produk asli. Tidak ada UI palsu dari div.
- Gerak: reveal saat scroll dan perubahan border saat hover. Tidak ada animasi gambar, tidak ada marquee, tidak ada scroll cue.

## Aturan anti-slop yang dijalankan

- Nol em dash dan en dash.
- Maksimal tiga eyebrow untuk enam section.
- Tidak ada penomoran section.
- Tidak ada tiga kartu fitur sejajar. Bento 2+1, mosaic 8/4 dan 4/8, harga berbentuk baris.
- Tidak ada header terbelah (headline kiri, paragraf kanan).
- Hero dua baris, subteks 15 kata, CTA terlihat tanpa scroll.
- Satu label untuk satu niat CTA.
- Angka hanya yang bisa dipertanggungjawabkan: 11 tahun, 6 produk, 3 sistem agentic, 3 industri teregulasi.
- Kontras: tinta 16,3:1 di atas kertas, putih 6,7:1 di atas kobalt, muted 5,7:1.

## Yang berubah di rencana implementasi

- Section 2 lama (demo rail) tetap, tapi judulnya menjadi "Enam produk. Semua berjalan." dan memakai screenshot asli.
- Tambah section Agentic AI dengan tiga kartu asimetris dan satu loop empat langkah.
- Tambah section Cybersecurity dengan empat prinsip dan satu diagram blast radius.
- Section harga berubah dari tiga kartu menjadi tiga baris. Satu CTA di bawah.
- Hapus hero terminal, marquee, komponen game, dan semua penomoran section.
