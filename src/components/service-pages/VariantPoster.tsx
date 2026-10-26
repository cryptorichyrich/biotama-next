import type { CSSProperties } from "react";
import { brand, waLink } from "@/data/services";
import type { ServicePage, VariantId } from "@/data/service-pages";
import { variantMeta } from "@/data/service-pages";

type Props = { service: ServicePage; variant: VariantId };

function lum(hex: string) {
  const c = hex.replace("#", "");
  const v = [0, 2, 4].map((i) => parseInt(c.slice(i, i + 2), 16) / 255);
  const f = (x: number) => (x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4));
  return 0.2126 * f(v[0]) + 0.7152 * f(v[1]) + 0.0722 * f(v[2]);
}

const onColor = (hex: string) => (lum(hex) > 0.18 ? "#171310" : "#FFFFFF");

export default function VariantPoster({ service, variant }: Props) {
  const p = service.palette;
  const style = {
    "--bg": p.bg,
    "--ink": p.ink,
    "--muted": p.muted,
    "--accent": p.accent,
    "--accent2": p.accent2,
    "--card": p.card,
  } as CSSProperties;
  const others = variantMeta.filter((v) => v.id !== variant);
  const accentText = onColor(p.accent);
  const accent2Text = onColor(p.accent2);

  return (
    <div className="svc-page min-h-screen bg-[var(--bg)] text-[var(--ink)]" style={style}>
      <header className="border-b-2 border-[var(--ink)]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
          <a href="/layanan" className="flex items-center gap-2 text-base font-black tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-[var(--accent)] text-[var(--ink)]">
              B
            </span>
            BIOTAMA
          </a>
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-wider">
            {others.map((v) => (
              <a
                key={v.id}
                href={`/layanan/${service.slug}/${v.id}`}
                className="border-2 border-[var(--ink)] px-2.5 py-1 hover:bg-[var(--ink)] hover:text-[var(--bg)]"
              >
                {v.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-6xl px-5 pb-10 pt-12 sm:pt-16">
          <span
            className="inline-block border-2 border-[var(--ink)] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em]"
            style={{ backgroundColor: p.accent2, color: accent2Text }}
          >
            {service.category} · {service.name}
          </span>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.4rem,7vw,5.2rem)] font-black uppercase leading-[0.92] tracking-[-0.04em]">
            {service.pains[0]}
          </h1>
          <p className="mt-6 max-w-2xl text-base font-medium leading-relaxed sm:text-lg">
            {service.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink(`Halo Biotama, saya mau beresin ${service.name}.`)}
              target="_blank"
              rel="noopener"
              className="border-2 border-[var(--ink)] bg-[var(--ink)] px-6 py-3 text-sm font-black uppercase tracking-wide text-[var(--bg)] shadow-[4px_4px_0_var(--accent)]"
            >
              Mulai konsultasi
            </a>
            <a
              href="#paket"
              className="border-2 border-[var(--ink)] px-6 py-3 text-sm font-black uppercase tracking-wide"
            >
              Lihat paket
            </a>
          </div>
        </div>

        <div
          className="overflow-hidden border-y-2 border-[var(--ink)] py-3"
          style={{ backgroundColor: p.accent, color: accentText }}
        >
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-1 px-5 text-[11px] font-black uppercase tracking-[0.16em]">
            <span>{service.name}</span>
            <span aria-hidden>★</span>
            <span>{service.outcomes[0]}</span>
            <span aria-hidden>★</span>
            <span>{service.outcomes[1]}</span>
            <span aria-hidden>★</span>
            <span>{service.outcomes[2]}</span>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="grid gap-4 md:grid-cols-3">
            {service.stats.map((stat) => (
              <div key={stat.l} className="border-2 border-[var(--ink)] bg-[var(--card)] p-5">
                <p className="text-4xl font-black tracking-tight">{stat.v}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[var(--muted)]">
                  {stat.l}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-y-2 border-[var(--ink)] bg-[var(--card)]">
          <div className="mx-auto max-w-6xl px-5 py-14">
            <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
              Ini yang bikin rugi
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {service.pains.map((pain, i) => (
                <article key={pain} className="border-2 border-[var(--ink)] p-5">
                  <span className="font-mono text-xs font-bold">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-black leading-tight">{pain}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    Dibiarkan terus, biayanya muncul di tempat lain: waktu, klien, atau reputasi.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Setelah dirapikan
          </h2>
          <div className="mt-8 space-y-4">
            {service.outcomes.map((outcome, i) => (
              <div
                key={outcome}
                className="flex items-center gap-5 border-b-2 border-[var(--ink)] pb-4"
              >
                <span className="font-mono text-2xl font-black text-[var(--accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg font-bold leading-snug sm:text-xl">{outcome}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="border-y-2 border-[var(--ink)]"
          style={{ backgroundColor: p.accent2, color: accent2Text }}
        >
          <div className="mx-auto max-w-6xl px-5 py-14">
            <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
              Yang Anda dapat
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="border-2 border-[var(--ink)] px-4 py-3 text-sm font-semibold"
                  style={{ backgroundColor: p.bg, color: p.ink }}
                >
                  + {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Alurnya
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <div key={step.title} className="border-2 border-[var(--ink)] p-4">
                <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[var(--ink)] bg-[var(--accent)] font-mono text-xs font-black">
                  {i + 1}
                </span>
                <h3 className="mt-3 text-base font-black uppercase leading-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="paket" className="border-t-2 border-[var(--ink)] bg-[var(--card)]">
          <div className="mx-auto max-w-6xl px-5 py-14">
            <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
              Pilih tiket
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {service.tiers.map((tier, i) => (
                <div
                  key={tier.name}
                  className={`border-2 border-[var(--ink)] p-5 ${
                    i === 1 ? "shadow-[6px_6px_0_var(--ink)] md:-translate-y-2" : "bg-[var(--bg)]"
                  }`}
                  style={i === 1 ? { backgroundColor: p.accent, color: accentText } : undefined}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-black uppercase">{tier.name}</h3>
                    <span className="font-mono text-[10px] font-bold uppercase">{tier.note}</span>
                  </div>
                  <p className="mt-3 text-3xl font-black">{tier.price}</p>
                  <ul className="mt-4 space-y-2 text-sm font-medium">
                    {tier.items.map((item) => (
                      <li key={item}>— {item}</li>
                    ))}
                  </ul>
                  <a
                    href={waLink(`Halo Biotama, saya mau paket ${tier.name} untuk ${service.name}.`)}
                    target="_blank"
                    rel="noopener"
                    className="mt-5 block border-2 border-[var(--ink)] bg-[var(--ink)] px-4 py-2.5 text-center text-xs font-black uppercase tracking-wide text-[var(--bg)]"
                  >
                    Ambil paket
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-5 py-14">
          <h2 className="text-3xl font-black uppercase tracking-tight">Tanya dulu</h2>
          <div className="mt-6">
            {service.faqs.map(([q, a]) => (
              <details key={q} className="border-2 border-[var(--ink)] p-4 [&+details]:mt-3">
                <summary className="cursor-pointer list-none text-sm font-black uppercase tracking-wide">
                  {q}
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="border-t-2 border-[var(--ink)] bg-[var(--accent)]">
          <div className="mx-auto max-w-6xl px-5 py-14">
            <h2 className="max-w-3xl text-[clamp(2rem,5vw,3.6rem)] font-black uppercase leading-[0.95] tracking-tight">
              Berhenti numbuhin masalah. Mulai beresin.
            </h2>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={waLink(`Halo Biotama, saya mau mulai ${service.name}.`)}
                target="_blank"
                rel="noopener"
                className="border-2 border-[var(--ink)] bg-[var(--ink)] px-6 py-3 text-sm font-black uppercase text-[var(--bg)]"
              >
                WhatsApp sekarang
              </a>
              <a
                href={`mailto:${brand.email}`}
                className="border-2 border-[var(--ink)] px-6 py-3 text-sm font-black uppercase"
              >
                Kirim brief
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t-2 border-[var(--ink)]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-[11px] font-bold uppercase tracking-wide">
          <span>© {new Date().getFullYear()} {brand.name}</span>
          <div className="flex gap-4">
            <a href="/layanan">Semua layanan</a>
            <a href="/">Beranda</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
