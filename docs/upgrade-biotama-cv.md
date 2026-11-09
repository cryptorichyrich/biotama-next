# Upgrade biotama.cv

Branch: `feat/home-jurnal`
Preview: Rabu, 11 November 2026, 18.00 WIB
Produksi: Sabtu, 14 November 2026

## Yang diganti

Halaman depan saja, dari sistem v5. Halaman CV, lamaran, blog, dan 60 halaman layanan tidak disentuh di fase ini.

## Fase

**Selasa 10 Nov, malam**
- Token warna, tipografi, dan grid dari v5.
- Masthead, halaman judul, ringkasan, daftar isi.
- Data diambil dari `src/data/profile.ts`, bukan hardcode.

**Rabu 11 Nov, pagi sampai sore**
- Studi kasus Srabutan: masalah, keputusan, hasil, tabel keputusan, catatan kaki.
- Deploy preview dari branch. Kirim link dan screenshot.

**Kamis 12 Nov**
- Tiga studi kasus: Srabutan, Toko Vavelle, UMKM Servatius.
- Indeks enam karya dengan satu keputusan per produk.
- Bagian Demo yang menautkan ke bio-demos.pages.dev, dibuka di tab baru, dengan label jelas bahwa itu konsep.

**Jumat 13 Nov**
- Bagian agen: izin tulis, guardrail, eval.
- Bagian keamanan: threat model, blast radius, KYC/AML.
- Model kerja, kontak, footer.
- Mobile, aksesibilitas, metadata, JSON-LD, redirect.

**Sabtu 14 Nov**
- Build produksi, smoke test, deploy.
- Rollback ke deployment sebelumnya kalau ada yang gagal.

## Perbaikan data yang ikut

- `profile.metrics` berubah dari 15 tahun ke 11 tahun (2014 sampai 2025).
- `sameAs` disamakan dengan URL yang benar di `profile.ts`.
- Hapus klaim yang tidak bisa dibuktikan.
- Judul pekerjaan tetap "Solutions Architect".

## Kriteria selesai

- Tidak ada scroll horizontal di 360px dan 390px.
- Lighthouse mobile: Performance 90 atau lebih, Accessibility 95 atau lebih, SEO 100.
- LCP di bawah 2,0 detik, CLS di bawah 0,05.
- Semua tautan internal 200. Demo terbuka di tab baru.
- JSON-LD valid, `sameAs` benar, tidak ada klaim yatim.
- Sitemap memuat bagian baru.
- Satu deployment sebelumnya tersedia untuk rollback.

## Yang tidak dikerjakan di fase ini

- Menghapus 60 halaman layanan. Itu keputusan terpisah setelah data kunjungan dilihat.
- Mengganti domain atau DNS.
- Blog dan newsletter.
