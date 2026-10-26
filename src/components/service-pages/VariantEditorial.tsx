import type { CSSProperties } from "react";
import { brand, waLink } from "@/data/services";
import type { ServicePage, VariantId } from "@/data/service-pages";
import { variantMeta } from "@/data/service-pages";

type Props = { service: ServicePage; variant: VariantId };

const fontClass = (font: ServicePage["font"]) =>
  font === "serif"
    ? "font-[family-name:var(--font-display)]"
    : font === "mono"
      ? "font-mono"
      : "font-sans";

export default function VariantEditorial({ service, variant }: Props) {
  const p = service.palette;
  const style = {
    "--bg": p.bg,
    "--ink": p.ink,
    "--muted": p.muted,
    "--accent": p.accent,
    "--accent2": p.accent2,
    "--card": p.card,
  } as CSSProperties;
  const font = fontClass(service.font);
  const others = variantMeta.filter((v) => v.id !== variant);

  return (
    <div className="svc-page min-h-screen bg-[var(--bg)] text-[var(--ink)]" style={style}>
      <header className="border-b" style={{ borderColor: `${p.ink}22` }}>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5">
          <a href="/layanan" className="flex items-center gap-2 text-sm font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--ink)] text-[var(--bg)]">
              B
            </span>
            biotama<span className="text-[var(--accent)]">.</span>
          </a>
          <div className="flex items-center gap-2 text-xs">
            {others.map((v) => (
              <a
                key={v.id}
                href={`/layanan/${service.slug}/${v.id}`}
                className="rounded-full border px-3 py-1.5 font-medium hover:bg-[var(--ink)] hover:text-[var(--bg)]"
                style={{ borderColor: `${p.ink}33` }}
              >
                {v.label}
              </a>
            ))}
            <a
              href="/layanan"
              className="rounded-full border px-3 py-1.5 font-medium"
              style={{ borderColor: `${p.ink}33` }}
            >
              Semua layanan
            </a>
          </div>
        </div>
      </header>

      <main>
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.25fr_.75fr] md:py-24">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
              {service.category} · Biotama
            </p>
            <h1 className={`${font} mt-5 text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl`}>
              {service.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)]">
              {service.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink(`Halo Biotama, saya ingin membahas ${service.name}.`)}
                target="_blank"
                rel="noopener"
                className="rounded-lg bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-[var(--bg)]"
              >
                Konsultasi gratis 30 menit
              </a>
              <a
                href="#harga"
                className="rounded-lg border px-5 py-3 text-sm font-semibold"
                style={{ borderColor: `${p.ink}44` }}
              >
                Lihat paket
              </a>
            </div>
            <p className="mt-4 text-xs text-[var(--muted)]">
              Direspons pada hari kerja · NDA tersedia · {brand.email}
            </p>
          </div>

          <aside
            className="self-start rounded-2xl border p-6"
            style={{ borderColor: `${p.ink}22`, backgroundColor: p.card }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
              Ringkasan dampak
            </p>
            <div className="mt-4 divide-y" style={{ borderColor: `${p.ink}18` }}>
              {service.stats.map((stat) => (
                <div key={stat.l} className="flex items-baseline justify-between gap-4 py-4">
                  <span className={`${font} text-3xl`}>{stat.v}</span>
                  <span className="max-w-[150px] text-right text-xs leading-snug text-[var(--muted)]">
                    {stat.l}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-[11px] leading-relaxed text-[var(--muted)]">
              Angka adalah target atau hasil proyek yang disetujui untuk
              dipublikasikan. Konteks lengkap dibahas saat discovery.
            </p>
          </aside>
        </div>

        <div className="border-y" style={{ borderColor: `${p.ink}18` }}>
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-3">
            {service.pains.map((pain, i) => (
              <div key={pain}>
                <span className="font-mono text-xs text-[var(--accent)]">0{i + 1}</span>
                <h2 className={`${font} mt-3 text-xl leading-snug`}>{pain}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  Kami mulai dari titik ini, bukan dari daftar fitur.
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
                Yang berubah
              </p>
              <h2 className={`${font} mt-3 text-3xl leading-tight sm:text-4xl`}>
                Setelah sistemnya benar, pekerjaan jadi lebih tenang.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {service.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="rounded-xl border p-4 text-sm leading-relaxed"
                  style={{ borderColor: `${p.ink}1f`, backgroundColor: p.card }}
                >
                  <span className="mb-2 block text-[var(--accent)]">✓</span>
                  {outcome}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-5 pb-16">
          <h2 className={`${font} text-2xl sm:text-3xl`}>Yang kami kerjakan</h2>
          <div className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {service.features.map((feature, i) => (
              <div
                key={feature}
                className="flex gap-4 border-b pb-4 text-sm"
                style={{ borderColor: `${p.ink}18` }}
              >
                <span className="font-mono text-[11px] text-[var(--muted)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-y" style={{ borderColor: `${p.ink}18`, backgroundColor: p.card }}>
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
              Proses
            </p>
            <h2 className={`${font} mt-3 text-3xl sm:text-4xl`}>Empat tahap, tanpa kejutan.</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-4">
              {service.process.map((step, i) => (
                <div key={step.title} className="relative">
                  <span className="font-mono text-xs text-[var(--muted)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={`${font} mt-2 text-lg`}>{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="harga" className="mx-auto max-w-6xl px-5 py-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
            Paket
          </p>
          <h2 className={`${font} mt-3 text-3xl sm:text-4xl`}>Mulai dari yang paling masuk akal.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {service.tiers.map((tier, i) => (
              <div
                key={tier.name}
                className="flex flex-col rounded-2xl border p-6"
                style={{
                  borderColor: i === 1 ? p.accent : `${p.ink}22`,
                  backgroundColor: p.card,
                }}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className={`${font} text-xl`}>{tier.name}</h3>
                  <span className="font-mono text-[10px] uppercase text-[var(--muted)]">
                    {tier.note}
                  </span>
                </div>
                <p className={`${font} mt-4 text-3xl`}>{tier.price}</p>
                <ul className="mt-5 space-y-2 text-sm text-[var(--muted)]">
                  {tier.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-[var(--accent)]">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Halo Biotama, saya tertarik paket ${tier.name} untuk ${service.name}.`)}
                  target="_blank"
                  rel="noopener"
                  className="mt-6 inline-flex justify-center rounded-lg px-4 py-2.5 text-sm font-semibold"
                  style={{
                    backgroundColor: i === 1 ? p.ink : "transparent",
                    color: i === 1 ? p.bg : p.ink,
                    border: i === 1 ? "none" : `1px solid ${p.ink}44`,
                  }}
                >
                  Tanya paket ini
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-5 pb-16">
          <h2 className={`${font} text-2xl sm:text-3xl`}>Pertanyaan yang sering muncul</h2>
          <div className="mt-6">
            {service.faqs.map(([q, a]) => (
              <details key={q} className="group border-t py-4" style={{ borderColor: `${p.ink}22` }}>
                <summary className="cursor-pointer list-none pr-8 text-sm font-semibold marker:hidden">
                  {q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-5 pb-20">
          <div className="rounded-2xl bg-[var(--ink)] p-8 text-[var(--bg)] sm:p-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-60">
              Langkah berikutnya
            </p>
            <h2 className={`${font} mt-3 max-w-2xl text-3xl leading-tight sm:text-4xl`}>
              Ceritakan masalahnya. Kami bantu petakan prioritasnya.
            </h2>
            <div className="mt-7 flex flex-wrap gap-3 text-sm">
              <a
                href={waLink(`Halo Biotama, saya ingin konsultasi tentang ${service.name}.`)}
                target="_blank"
                rel="noopener"
                className="rounded-lg bg-[var(--bg)] px-5 py-3 font-semibold text-[var(--ink)]"
              >
                WhatsApp {brand.phoneDisplay}
              </a>
              <a href={`mailto:${brand.email}`} className="rounded-lg border border-current/30 px-5 py-3 font-semibold">
                {brand.email}
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t" style={{ borderColor: `${p.ink}22` }}>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-7 text-xs text-[var(--muted)]">
          <span>© {new Date().getFullYear()} {brand.name}. {service.name}.</span>
          <div className="flex gap-4">
            <a href="/layanan">Layanan</a>
            <a href="/">Beranda</a>
            <a href="/llms.txt">llms.txt</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
