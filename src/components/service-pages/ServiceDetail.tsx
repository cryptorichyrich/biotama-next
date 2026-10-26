import type { ServicePage } from "@/data/service-pages";

type Props = { service: ServicePage; view: number };

/** Panel detail kedua per halaman. Enam tipe, dipilih per layanan. */
export default function ServiceDetail({ service, view }: Props) {
  const p = service.palette;
  const frame = {
    borderColor: `${p.ink}1f`,
    backgroundColor: p.card,
    color: p.ink,
  };
  const muted = { color: p.muted };

  switch (view % 6) {
    case 0:
      return (
        <div className="p-5" style={frame}>
          <p className="font-mono text-[9px] uppercase tracking-[0.16em]" style={muted}>
            alur kerja
          </p>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            {["Masuk", "Diproses", "Selesai"].map((t, i) => (
              <div key={t} className="rounded-lg p-3" style={{ backgroundColor: i === 1 ? p.accent : p.bg, color: i === 1 ? p.bg : p.ink }}>
                <span className="font-mono text-[9px]">0{i + 1}</span>
                <p className="mt-1 text-xs font-semibold">{t}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-1.5 font-mono text-[10px]" style={muted}>
            <p>→ otomatis, tanpa entry ulang</p>
            <p>→ tercatat, bisa diaudit</p>
            <p>→ notifikasi ke tim terkait</p>
          </div>
        </div>
      );

    case 1:
      return (
        <div className="p-5" style={frame}>
          <p className="font-mono text-[9px] uppercase tracking-[0.16em]" style={muted}>
            pembagian kerja
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border p-3" style={{ borderColor: `${p.ink}14` }}>
              <p className="text-[10px] font-semibold uppercase tracking-wide" style={muted}>Tim Anda</p>
              <ul className="mt-2 space-y-1 text-xs">
                <li>→ keputusan bisnis</li>
                <li>→ approval konten</li>
                <li>→ prioritas fitur</li>
              </ul>
            </div>
            <div className="rounded-lg border p-3" style={{ borderColor: `${p.ink}14`, backgroundColor: `${p.accent}12` }}>
              <p className="text-[10px] font-semibold uppercase tracking-wide" style={muted}>Kami</p>
              <ul className="mt-2 space-y-1 text-xs">
                <li>→ build &amp; integrasi</li>
                <li>→ QA dan rilis</li>
                <li>→ monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      );

    case 2:
      return (
        <div className="p-5" style={frame}>
          <p className="font-mono text-[9px] uppercase tracking-[0.16em]" style={muted}>
            timeline
          </p>
          <div className="mt-4 flex items-end gap-1.5">
            {[35, 55, 70, 88, 100].map((h, i) => (
              <div key={i} className="flex-1">
                <div className="rounded-t" style={{ height: `${h}px`, backgroundColor: i === 4 ? p.accent : `${p.accent}44` }} />
                <p className="mt-1 text-center font-mono text-[8px]" style={muted}>W{i + 1}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between border-t pt-3 text-[10px]" style={{ borderColor: `${p.ink}14`, ...muted }}>
            <span>kickoff</span><span>serah terima</span>
          </div>
        </div>
      );

    case 3:
      return (
        <div className="p-5" style={frame}>
          <p className="font-mono text-[9px] uppercase tracking-[0.16em]" style={muted}>
            terhubung dengan
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Pembayaran", "Pengiriman", "CRM", "WhatsApp", "Analytics", "Spreadsheet"].map((t) => (
              <span key={t} className="rounded-full border px-2.5 py-1 text-[10px]" style={{ borderColor: `${p.ink}20` }}>
                {t}
              </span>
            ))}
          </div>
          <p className="mt-4 text-[10px] leading-relaxed" style={muted}>
            Integrasi dipilih berdasarkan alur yang benar-benar dipakai, bukan daftar panjang yang tidak pernah aktif.
          </p>
        </div>
      );

    case 4:
      return (
        <div className="p-5 font-mono text-[10px]" style={frame}>
          <p className="text-[9px] uppercase tracking-[0.16em]" style={muted}>kontrol</p>
          <div className="mt-3 space-y-1.5">
            {["akses per peran", "audit trail", "backup harian", "validasi input", "review sebelum rilis"].map((t) => (
              <div key={t} className="flex items-center justify-between rounded px-2 py-1.5" style={{ backgroundColor: p.bg }}>
                <span>{t}</span><span style={{ color: p.accent }}>ok</span>
              </div>
            ))}
          </div>
        </div>
      );

    default:
      return (
        <div className="p-5" style={frame}>
          <p className="font-mono text-[9px] uppercase tracking-[0.16em]" style={muted}>setelah 90 hari</p>
          <div className="mt-3 flex h-24 items-end gap-2">
            {[38, 46, 52, 61, 68, 79, 86].map((h, i) => (
              <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: i > 3 ? p.accent : `${p.ink}22` }} />
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
            <div><p style={muted}>waktu respons</p><p className="font-semibold">-42%</p></div>
            <div><p style={muted}>pekerjaan manual</p><p className="font-semibold">-61%</p></div>
          </div>
          <p className="mt-3 text-[9px]" style={muted}>Ilustrasi target, bukan klaim klien.</p>
        </div>
      );
  }
}
