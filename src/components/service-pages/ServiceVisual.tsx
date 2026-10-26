import type { ServicePage } from "@/data/service-pages";

type Props = { service: ServicePage };

/** Mockup visual per layanan. Dibuat dari CSS, bukan screenshot, supaya tajam di semua layar. */
export default function ServiceVisual({ service }: Props) {
  const p = service.palette;
  const frame = {
    borderColor: `${p.ink}1f`,
    backgroundColor: p.card,
    color: p.ink,
  };

  switch (service.slug) {
    case "chatbot-ai":
      return (
        <div className="space-y-2.5 p-4 text-[11px]" style={frame}>
          <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: `${p.ink}14` }}>
            <span className="font-mono text-[9px] uppercase tracking-[0.14em]" style={{ color: p.muted }}>whatsapp · live</span>
            <span style={{ color: p.accent }}>● online</span>
          </div>
          <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm px-3 py-2" style={{ backgroundColor: p.ink, color: p.bg }}>
            Stok kopi Vietnam masih ada?
          </div>
          <div className="max-w-[90%] rounded-2xl rounded-bl-sm px-3 py-2" style={{ backgroundColor: p.bg, color: p.ink }}>
            Ada. G7 500g sisa 24, Robusta 18. Mau saya siapkan keranjang?
          </div>
          <div className="ml-auto max-w-[70%] rounded-2xl rounded-br-sm px-3 py-2" style={{ backgroundColor: p.ink, color: p.bg }}>
            Ya, 2 G7.
          </div>
          <div className="flex items-center gap-2 border-t pt-2 font-mono text-[9px]" style={{ borderColor: `${p.ink}14`, color: p.muted }}>
            <span style={{ color: p.accent }}>✓</span> keranjang dibuat · handover ke admin
          </div>
        </div>
      );

    case "sistem-pos":
      return (
        <div className="p-4 text-[11px]" style={frame}>
          <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: `${p.ink}14` }}>
            <span className="font-mono text-[9px] uppercase tracking-[0.14em]" style={{ color: p.muted }}>outlet · kemang</span>
            <span className="rounded-full px-2 py-0.5 text-[9px]" style={{ backgroundColor: `${p.accent}22`, color: p.accent }}>open</span>
          </div>
          <div className="mt-3 space-y-1.5">
            {[["Kopi susu 1L", "2", "96.000"], ["Croissant", "3", "75.000"], ["Beans 250g", "1", "85.000"]].map(([n, q, t]) => (
              <div key={n} className="flex justify-between gap-2">
                <span className="truncate">{n}</span>
                <span style={{ color: p.muted }}>x{q}</span>
                <span className="font-mono">{t}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-between border-t pt-2 font-semibold" style={{ borderColor: `${p.ink}14` }}>
            <span>Total</span>
            <span>Rp 256.000</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-1.5 text-center text-[9px]">
            {["Tunai", "QRIS", "Kartu"].map((m, i) => (
              <span key={m} className="rounded px-2 py-1.5" style={i === 0 ? { backgroundColor: p.accent, color: p.bg } : { border: `1px solid ${p.ink}20`, color: p.muted }}>
                {m}
              </span>
            ))}
          </div>
        </div>
      );

    case "aplikasi-mobile":
      return (
        <div className="mx-auto w-[190px] rounded-[28px] p-2" style={{ backgroundColor: p.ink }}>
          <div className="rounded-[22px] p-3" style={{ backgroundColor: p.bg, color: p.ink }}>
            <div className="mx-auto mb-2 h-1 w-10 rounded-full" style={{ backgroundColor: `${p.ink}30` }} />
            <p className="font-mono text-[8px] uppercase tracking-[0.12em]" style={{ color: p.muted }}>hari ini</p>
            <p className="mt-1 text-lg font-semibold">Rp 1,84 jt</p>
            <div className="mt-3 flex h-16 items-end gap-1">
              {[35, 52, 44, 70, 58, 82, 66].map((h, i) => (
                <span key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, backgroundColor: i === 5 ? p.accent : `${p.accent}55` }} />
              ))}
            </div>
            <div className="mt-3 space-y-1.5">
              {["Pesanan baru", "Stok menipis", "Pelanggan baru"].map((t) => (
                <div key={t} className="flex items-center justify-between rounded-lg px-2 py-1.5 text-[9px]" style={{ backgroundColor: p.card }}>
                  <span>{t}</span><span style={{ color: p.accent }}>→</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case "data-analytics":
      return (
        <div className="p-4 text-[11px]" style={frame}>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.14em]" style={{ color: p.muted }}>revenue · q3</span>
            <span className="text-[9px]" style={{ color: p.accent }}>+18.4%</span>
          </div>
          <p className="mt-2 text-2xl font-semibold">Rp 4,28 M</p>
          <div className="mt-3 flex h-24 items-end gap-2">
            {[42, 58, 50, 74, 66, 88, 79, 96].map((h, i) => (
              <span key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: i > 5 ? p.accent : `${p.ink}25` }} />
            ))}
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 border-t pt-2 text-[9px]" style={{ borderColor: `${p.ink}14` }}>
            {[["Metrik", "1 sumber"], ["Laporan", "otomatis"], ["Refresh", "harian"]].map(([a, b]) => (
              <div key={a}><p style={{ color: p.muted }}>{a}</p><p className="font-semibold">{b}</p></div>
            ))}
          </div>
        </div>
      );

    case "cybersecurity":
      return (
        <div className="p-4 font-mono text-[10px]" style={{ ...frame, backgroundColor: "#0B1210", color: "#D8F5E8" }}>
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[9px] uppercase tracking-[0.14em] text-white/45">scan · api</span>
            <span className="text-[#4ADE80]">secure</span>
          </div>
          <div className="mt-3 space-y-1.5">
            <p className="text-[#4ADE80]">[ok] auth token scoped</p>
            <p className="text-[#4ADE80]">[ok] rate limit active</p>
            <p className="text-[#F5A623]">[warn] 2 dependency outdated</p>
            <p className="text-[#F5A623]">[warn] verbose error in staging</p>
            <p className="text-[#4ADE80]">[ok] webhook signature valid</p>
          </div>
          <div className="mt-3 border-t border-white/10 pt-2 text-[9px] text-white/40">17 findings · 17 closed · retest pass</div>
        </div>
      );

    case "cctv-smart-home":
      return (
        <div className="p-3" style={frame}>
          <div className="grid grid-cols-2 gap-2">
            {["gate", "lobby", "parkir", "service"].map((t, i) => (
              <div key={t} className="relative aspect-video overflow-hidden rounded" style={{ backgroundColor: `${p.ink}12` }}>
                <div className="absolute inset-0" style={{ background: `radial-gradient(circle at ${30 + i * 12}% 40%, ${p.accent}40, transparent 55%)` }} />
                <span className="absolute left-1.5 top-1.5 font-mono text-[8px] uppercase" style={{ color: p.ink }}>{t}</span>
                <span className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-red-500" />
              </div>
            ))}
          </div>
          <div className="mt-2 flex justify-between font-mono text-[9px]" style={{ color: p.muted }}>
            <span>4 kamera · 30 hari</span><span style={{ color: p.ink }}>recording</span>
          </div>
        </div>
      );

    case "digital-marketing":
      return (
        <div className="p-4 text-[11px]" style={frame}>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.14em]" style={{ color: p.muted }}>funnel · 30 hari</span>
            <span className="text-[9px]" style={{ color: p.ink }}>ROAS 4.2x</span>
          </div>
          <div className="mt-3 space-y-2">
            {[["Impresi", "184.200", 100], ["Klik", "9.840", 62], ["Lead", "1.260", 34], ["Closing", "184", 18]].map(([l, v, w]) => (
              <div key={l as string}>
                <div className="flex justify-between text-[9px]"><span>{l}</span><span style={{ color: p.muted }}>{v}</span></div>
                <div className="mt-1 h-1.5 rounded-full" style={{ backgroundColor: `${p.ink}12` }}>
                  <div className="h-1.5 rounded-full" style={{ width: `${w}%`, backgroundColor: p.accent }} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 border-t pt-2 text-[9px]" style={{ borderColor: `${p.ink}14`, color: p.muted }}>biaya per lead Rp 42.000</p>
        </div>
      );

    case "it-consulting":
      return (
        <div className="p-4 font-mono text-[10px]" style={frame}>
          <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: `${p.ink}14` }}>
            <span className="text-[9px] uppercase tracking-[0.14em]" style={{ color: p.muted }}>infra · status</span>
            <span style={{ color: p.ink }}>99.98%</span>
          </div>
          <div className="mt-3 space-y-2">
            {[["api", "ok", "42 ms"], ["db", "ok", "8 ms"], ["queue", "ok", "0 lag"], ["backup", "ok", "03:00"]].map(([n, s, t]) => (
              <div key={n} className="flex items-center justify-between rounded px-2 py-1.5" style={{ backgroundColor: p.bg }}>
                <span>{n}</span><span style={{ color: p.accent }}>{s}</span><span style={{ color: p.muted }}>{t}</span>
              </div>
            ))}
          </div>
          <p className="mt-3 border-t pt-2 text-[9px]" style={{ borderColor: `${p.ink}14`, color: p.muted }}>monitoring 24/7 · SLA 15 menit</p>
        </div>
      );

    case "website-aplikasi":
      return (
        <div className="overflow-hidden" style={frame}>
          <div className="flex items-center gap-1.5 border-b px-3 py-2" style={{ borderColor: `${p.ink}14` }}>
            {[0, 1, 2].map((i) => <span key={i} className="h-2 w-2 rounded-full" style={{ backgroundColor: `${p.ink}20` }} />)}
            <span className="ml-2 rounded px-2 py-0.5 font-mono text-[8px]" style={{ backgroundColor: p.bg, color: p.muted }}>brand.co</span>
          </div>
          <div className="p-4">
            <div className="h-2 w-16 rounded" style={{ backgroundColor: p.accent }} />
            <div className="mt-3 h-5 w-4/5 rounded" style={{ backgroundColor: p.ink }} />
            <div className="mt-2 h-5 w-3/5 rounded" style={{ backgroundColor: `${p.ink}25` }} />
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => <div key={i} className="h-14 rounded-lg" style={{ backgroundColor: i === 0 ? `${p.accent}33` : `${p.ink}0d` }} />)}
            </div>
            <div className="mt-3 flex gap-2">
              <span className="rounded px-3 py-1 text-[8px]" style={{ backgroundColor: p.ink, color: p.bg }}>Mulai</span>
              <span className="rounded border px-3 py-1 text-[8px]" style={{ borderColor: `${p.ink}25` }}>Lihat</span>
            </div>
          </div>
        </div>
      );

    case "marketplace-management":
      return (
        <div className="p-4" style={frame}>
          <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: `${p.ink}14` }}>
            <span className="font-mono text-[9px] uppercase tracking-[0.12em]" style={{ color: p.muted }}>shopee · tokopedia</span>
            <span className="text-[9px]" style={{ color: p.accent }}>98%</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="rounded-lg p-1.5" style={{ backgroundColor: p.bg }}>
                <div className="aspect-square rounded" style={{ backgroundColor: `${p.ink}12` }} />
                <div className="mt-1 h-1.5 w-4/5 rounded" style={{ backgroundColor: `${p.ink}22` }} />
                <div className="mt-1 h-1.5 w-1/2 rounded" style={{ backgroundColor: p.accent }} />
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-between text-[9px]" style={{ color: p.muted }}>
            <span>128 pesanan hari ini</span><span>rating 4.9</span>
          </div>
        </div>
      );

    case "bootcamp-coding":
      return (
        <div className="p-4 font-mono text-[10px]" style={{ ...frame, backgroundColor: "#0B1210", color: "#D8F5E8" }}>
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[9px] uppercase tracking-[0.14em] text-white/45">week 06 · review</span>
            <span className="text-[#4ADE80]">pass</span>
          </div>
          <pre className="mt-3 leading-relaxed text-[9px] text-white/75">{`function total(items) {
  return items.reduce(
    (sum, item) => sum + item.price,
    0
  );
}`}</pre>
          <div className="mt-3 border-t border-white/10 pt-2 text-[9px] text-white/45">
            mentor: 2 komentar · 1 perbaikan
          </div>
        </div>
      );

    case "cloud-hosting":
      return (
        <div className="p-4 font-mono text-[10px]" style={frame}>
          <div className="flex items-center justify-between">
            <span className="text-[9px] uppercase tracking-[0.14em]" style={{ color: p.muted }}>uptime · 30 hari</span>
            <span style={{ color: p.ink }}>99.98%</span>
          </div>
          <div className="mt-3 flex h-20 items-end gap-1">
            {[92, 96, 88, 99, 97, 94, 99, 100, 98, 96, 99, 97].map((h, i) => (
              <span key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, backgroundColor: h === 100 ? p.accent : `${p.accent}55` }} />
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 border-t pt-2 text-[9px]" style={{ borderColor: `${p.ink}14` }}>
            {[["region", "jakarta"], ["backup", "harian"], ["latency", "18 ms"], ["alert", "aktif"]].map(([a, b]) => (
              <div key={a} className="flex justify-between"><span style={{ color: p.muted }}>{a}</span><span>{b}</span></div>
            ))}
          </div>
        </div>
      );

    case "jaringan-wifi":
      return (
        <div className="relative h-[210px] overflow-hidden p-4" style={frame}>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="absolute left-1/2 top-1/2 rounded-full border" style={{
              width: `${80 + i * 55}px`, height: `${80 + i * 55}px`, transform: "translate(-50%,-50%)",
              borderColor: `${p.accent}${["66", "4d", "33", "1a"][i]}`,
            }} />
          ))}
          <span className="absolute left-1/2 top-1/2 grid h-7 w-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-[9px] font-bold" style={{ backgroundColor: p.accent, color: p.bg }}>AP</span>
          {[["Lantai 1", "left-4 top-6"], ["Lantai 2", "right-4 top-10"], ["Gudang", "left-6 bottom-8"], ["Meeting", "right-6 bottom-6"]].map(([t, cls]) => (
            <span key={t} className={`absolute ${cls} rounded px-2 py-1 font-mono text-[8px]`} style={{ backgroundColor: p.bg, border: `1px solid ${p.ink}18` }}>{t}</span>
          ))}
        </div>
      );

    case "rakit-pc":
      return (
        <div className="p-4 font-mono text-[10px]" style={frame}>
          <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: `${p.ink}14` }}>
            <span className="text-[9px] uppercase tracking-[0.14em]" style={{ color: p.muted }}>workstation · build</span>
            <span style={{ color: p.accent }}>ready</span>
          </div>
          <div className="mt-3 space-y-1.5">
            {[["CPU", "Ryzen 9"], ["GPU", "RTX 4070"], ["RAM", "64 GB"], ["SSD", "2 TB"], ["PSU", "850 W"]].map(([a, b]) => (
              <div key={a} className="flex justify-between"><span style={{ color: p.muted }}>{a}</span><span>{b}</span></div>
            ))}
          </div>
          <div className="mt-3 border-t pt-2" style={{ borderColor: `${p.ink}14` }}>
            <div className="flex justify-between text-[9px]"><span>burn-in 24 jam</span><span style={{ color: p.accent }}>pass</span></div>
            <div className="mt-1 h-1.5 rounded-full" style={{ backgroundColor: `${p.ink}12` }}><div className="h-1.5 w-full rounded-full" style={{ backgroundColor: p.accent }} /></div>
          </div>
        </div>
      );

    case "game-studio":
      return (
        <div className="relative h-[210px] overflow-hidden" style={{ ...frame, backgroundColor: "#0C0A14", color: "#F0EAFB" }}>
          <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 70% 30%, ${p.accent}55, transparent 55%), linear-gradient(180deg, transparent 45%, #0C0A14)` }} />
          <div className="absolute left-3 top-3 font-mono text-[9px] uppercase tracking-wider text-white/50">level 04 · build 0.9</div>
          <div className="absolute right-3 top-3 flex gap-1">{[0, 1, 2].map((i) => <span key={i} className="h-1.5 w-4 rounded bg-white/30" />)}</div>
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex justify-between text-[8px] text-white/50"><span>HP</span><span>STAMINA</span></div>
            <div className="mt-1 flex gap-2">
              <div className="h-1.5 flex-1 rounded-full bg-white/15"><div className="h-1.5 w-3/4 rounded-full" style={{ backgroundColor: p.accent }} /></div>
              <div className="h-1.5 flex-1 rounded-full bg-white/15"><div className="h-1.5 w-1/2 rounded-full" style={{ backgroundColor: p.accent2 }} /></div>
            </div>
          </div>
        </div>
      );

    case "digitalisasi-arsip":
      return (
        <div className="p-4" style={frame}>
          <div className="relative rounded-lg p-3" style={{ backgroundColor: p.bg }}>
            <div className="space-y-1.5">
              {[100, 88, 94, 70, 96, 60].map((w, i) => <div key={i} className="h-1.5 rounded" style={{ width: `${w}%`, backgroundColor: `${p.ink}22` }} />)}
            </div>
            <div className="mt-3 h-8 w-32 rounded border-2 border-dashed" style={{ borderColor: p.accent }}>
              <div className="m-1 h-1.5 w-20 rounded" style={{ backgroundColor: p.accent }} />
              <div className="mx-1 h-1.5 w-14 rounded" style={{ backgroundColor: `${p.accent}66` }} />
            </div>
            <span className="absolute right-2 top-2 rounded px-2 py-0.5 font-mono text-[8px]" style={{ backgroundColor: p.ink, color: p.bg }}>OCR 99%</span>
          </div>
          <div className="mt-2 flex justify-between font-mono text-[9px]" style={{ color: p.muted }}><span>12.480 dokumen</span><span>terindeks</span></div>
        </div>
      );

    case "animasi-vfx":
      return (
        <div className="p-4" style={{ ...frame, backgroundColor: "#0A0C12", color: "#EEF2F7" }}>
          <div className="flex items-center justify-between font-mono text-[9px] text-white/45"><span>timeline · 00:24</span><span>4K</span></div>
          <div className="mt-3 h-14 rounded" style={{ background: `linear-gradient(90deg, ${p.accent}55, ${p.accent2}44, ${p.accent}22)` }} />
          <div className="mt-2 space-y-1">
            {["storyboard", "animatic", "render", "composite"].map((t, i) => (
              <div key={t} className="flex items-center gap-2">
                <span className="w-16 text-[8px] text-white/40">{t}</span>
                <div className="h-1.5 flex-1 rounded bg-white/8"><div className="h-1.5 rounded" style={{ width: `${88 - i * 18}%`, backgroundColor: i < 2 ? p.accent : p.accent2 }} /></div>
              </div>
            ))}
          </div>
        </div>
      );

    case "smart-home-iot":
      return (
        <div className="p-4" style={frame}>
          <div className="flex items-center justify-between"><span className="font-mono text-[9px] uppercase tracking-wider" style={{ color: p.muted }}>rumah · aktif</span><span className="text-[9px]" style={{ color: p.accent }}>12 device</span></div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {[["Lampu", "8 on"], ["AC", "24°C"], ["Tirai", "60%"], ["Alarm", "armed"]].map(([a, b], i) => (
              <div key={a} className="rounded-lg p-2.5" style={{ backgroundColor: p.bg }}>
                <p className="text-[9px]" style={{ color: p.muted }}>{a}</p>
                <p className="mt-1 text-sm font-semibold" style={{ color: p.ink }}>{b}</p>
              </div>
            ))}
          </div>
          <div className="mt-2 flex items-center justify-between rounded-lg px-3 py-2" style={{ backgroundColor: p.accent, color: p.bg }}>
            <span className="text-[9px] font-semibold">Skenario malam</span><span className="text-[9px]">aktif →</span>
          </div>
        </div>
      );

    case "it-support":
      return (
        <div className="p-4 text-[10px]" style={frame}>
          <div className="flex items-center justify-between border-b pb-2" style={{ borderColor: `${p.ink}14` }}>
            <span className="font-mono text-[9px] uppercase tracking-wider" style={{ color: p.muted }}>tiket · hari ini</span>
            <span style={{ color: p.accent }}>3 open</span>
          </div>
          <div className="mt-3 space-y-2">
            {[["#184", "Printer lantai 2", "high"], ["#185", "Laptop tidak boot", "med"], ["#186", "Akses email", "low"]].map(([id, t, pr]) => (
              <div key={id} className="flex items-center gap-2 rounded px-2 py-1.5" style={{ backgroundColor: p.bg }}>
                <span className="font-mono text-[8px]" style={{ color: p.muted }}>{id}</span>
                <span className="flex-1 truncate">{t}</span>
                <span className="rounded px-1.5 py-0.5 text-[8px]" style={{ backgroundColor: `${p.accent}22`, color: p.ink }}>{pr}</span>
              </div>
            ))}
          </div>
          <p className="mt-2 border-t pt-2 text-[9px]" style={{ borderColor: `${p.ink}14`, color: p.muted }}>rata-rata respons 12 menit</p>
        </div>
      );

    case "drone-documentation":
      return (
        <div className="relative h-[210px] overflow-hidden" style={frame}>
          <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.06) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 62% 42%, ${p.accent}33, transparent 45%)` }} />
          <svg viewBox="0 0 200 210" className="absolute inset-0 h-full w-full" aria-hidden>
            <path d="M20 170 C60 120, 90 150, 120 90 S170 60, 185 30" fill="none" stroke={p.accent} strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="120" cy="90" r="4" fill={p.accent} />
          </svg>
          <div className="absolute left-3 top-3 rounded px-2 py-1 font-mono text-[8px]" style={{ backgroundColor: p.ink, color: p.bg }}>ALT 120m · 4K</div>
          <div className="absolute bottom-3 left-3 right-3 flex justify-between font-mono text-[8px]" style={{ color: p.muted }}>
            <span>orthomosaic 2 cm/px</span><span>48 jam delivery</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="p-5" style={frame}>
          <p className="font-mono text-[9px] uppercase tracking-wider" style={{ color: p.muted }}>{service.category}</p>
          <p className="mt-2 text-lg font-semibold">{service.name}</p>
        </div>
      );
  }
}
