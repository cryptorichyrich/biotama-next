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

export default function VariantTerminal({ service, variant }: Props) {
  const p = service.palette;
  const accent =
    lum(p.accent) > 0.25 ? p.accent : lum(p.accent2) > 0.25 ? p.accent2 : "#35E0B4";
  const style = {
    "--bg": "#070B0E",
    "--panel": "#0D1418",
    "--ink": "#E6F0EB",
    "--muted": "#8CA19A",
    "--accent": accent,
    "--accent2": p.accent,
  } as CSSProperties;
  const others = variantMeta.filter((v) => v.id !== variant);

  return (
    <div className="svc-page min-h-screen bg-[var(--bg)] font-mono text-[var(--ink)]" style={style}>
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4 text-xs">
          <a href="/layanan" className="flex items-center gap-2">
            <span className="text-[var(--accent)]">biotama@edge</span>
            <span className="text-[var(--muted)]">:~$</span>
            <span className="text-[var(--muted)]">cd /layanan/{service.slug}</span>
          </a>
          <div className="flex items-center gap-3 text-[11px]">
            {others.map((v) => (
              <a
                key={v.id}
                href={`/layanan/${service.slug}/${v.id}`}
                className="border border-white/15 px-2 py-1 text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                {v.id}
              </a>
            ))}
            <a href="/layanan" className="text-[var(--muted)] hover:text-[var(--ink)]">
              /index
            </a>
          </div>
        </div>
      </header>

      <main>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
              [{service.category}] · status: available
            </p>
            <div className="mt-5 border border-white/10 bg-[var(--panel)]">
              <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-[10px] text-[var(--muted)]">
                <span className="h-2 w-2 rounded-full bg-[#FF6B6B]/60" />
                <span className="h-2 w-2 rounded-full bg-[#FFC46B]/60" />
                <span className="h-2 w-2 rounded-full bg-[var(--accent)]/60" />
                <span className="ml-2">session.log</span>
              </div>
              <div className="p-4 text-xs leading-relaxed">
                <p className="text-[var(--muted)]">
                  <span className="text-[var(--accent)]">$</span> biotama deploy --service &quot;{service.name}&quot;
                </p>
                <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  {service.tagline}
                </h1>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
                  {service.intro}
                </p>
                <p className="mt-5 text-[var(--accent)]">
                  [ok] scope defined · [ok] team assigned · [ok] sla ready
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 text-xs">
              <a
                href={waLink(`Halo Biotama, saya ingin bahas ${service.name}.`)}
                target="_blank"
                rel="noopener"
                className="border border-[var(--accent)] bg-[var(--accent)] px-4 py-2.5 font-bold text-[#04110D]"
              >
                $ konsultasi --gratis
              </a>
              <a
                href="#plans"
                className="border border-white/20 px-4 py-2.5 text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--ink)]"
              >
                $ lihat-paket
              </a>
            </div>
          </div>

          <aside className="self-start border border-white/10 bg-[var(--panel)] p-4 text-xs">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
              telemetry
            </p>
            <div className="mt-3 divide-y divide-white/10">
              {service.stats.map((stat) => (
                <div key={stat.l} className="flex items-baseline justify-between gap-3 py-3">
                  <span className="text-2xl font-bold text-[var(--accent)]">{stat.v}</span>
                  <span className="max-w-[150px] text-right text-[11px] leading-snug text-[var(--muted)]">
                    {stat.l}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 border-t border-white/10 pt-3 text-[10px] leading-relaxed text-[var(--muted)]">
              <p>uptime_target = &quot;99.9%&quot;</p>
              <p>response_sla = &quot;&lt; 2 jam kerja&quot;</p>
              <p>nda = true</p>
            </div>
          </aside>
        </div>

        <div className="border-y border-white/10 bg-[var(--panel)]">
          <div className="mx-auto max-w-6xl px-5 py-12">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
              diagnose --current
            </p>
            <div className="mt-5 space-y-3 text-sm">
              {service.pains.map((pain, i) => (
                <p key={pain} className="flex gap-3 border-l-2 border-[#F5A623] pl-3">
                  <span className="text-[#F5A623]">[warn]</span>
                  <span>
                    <span className="text-[var(--muted)]">0{i + 1}</span> {pain}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-5 py-12">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
            expected_output
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {service.outcomes.map((outcome) => (
              <div key={outcome} className="border border-white/10 bg-[var(--panel)] p-4 text-sm leading-relaxed">
                <span className="mb-2 block text-[var(--accent)]">✓ pass</span>
                {outcome}
              </div>
            ))}
          </div>
        </div>

        <div className="border-y border-white/10 bg-[var(--panel)]">
          <div className="mx-auto max-w-6xl px-5 py-12">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
              capabilities --list
            </p>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left text-xs">
                <thead>
                  <tr className="border-b border-white/15 text-[10px] uppercase tracking-wider text-[var(--muted)]">
                    <th className="py-2 pr-4 font-normal">id</th>
                    <th className="py-2 font-normal">capability</th>
                    <th className="py-2 text-right font-normal">status</th>
                  </tr>
                </thead>
                <tbody>
                  {service.features.map((feature, i) => (
                    <tr key={feature} className="border-b border-white/5">
                      <td className="py-2.5 pr-4 text-[var(--muted)]">
                        {String(i + 1).padStart(2, "0")}
                      </td>
                      <td className="py-2.5">{feature}</td>
                      <td className="py-2.5 text-right text-[var(--accent)]">ready</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-5 py-12">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
            pipeline --run
          </p>
          <div className="mt-5 space-y-4">
            {service.process.map((step, i) => (
              <div key={step.title} className="grid gap-2 border-l border-white/15 pl-4 sm:grid-cols-[90px_180px_1fr] sm:gap-4">
                <span className="text-[11px] text-[var(--accent)]">step_{i + 1}</span>
                <span className="text-sm font-bold">{step.title}</span>
                <span className="text-sm leading-relaxed text-[var(--muted)]">{step.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div id="plans" className="border-y border-white/10 bg-[var(--panel)]">
          <div className="mx-auto max-w-6xl px-5 py-12">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
              plans --compare
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {service.tiers.map((tier) => (
                <div key={tier.name} className="border border-white/12 p-4">
                  <div className="flex items-baseline justify-between text-[10px] uppercase tracking-wide text-[var(--muted)]">
                    <span>{tier.name}</span>
                    <span>{tier.note}</span>
                  </div>
                  <p className="mt-3 text-2xl font-bold text-[var(--accent)]">{tier.price}</p>
                  <ul className="mt-4 space-y-2 text-xs text-[var(--muted)]">
                    {tier.items.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                  <a
                    href={waLink(`Halo Biotama, saya mau paket ${tier.name} untuk ${service.name}.`)}
                    target="_blank"
                    rel="noopener"
                    className="mt-5 block border border-[var(--accent)] px-3 py-2 text-center text-[11px] font-bold text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#04110D]"
                  >
                    $ pilih {tier.name.toLowerCase()}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-5 py-12">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
            faq --read
          </p>
          <div className="mt-5 border border-white/10">
            {service.faqs.map(([q, a]) => (
              <details key={q} className="border-b border-white/10 p-4 last:border-b-0">
                <summary className="cursor-pointer list-none text-sm font-bold">
                  <span className="text-[var(--accent)]">? </span>
                  {q}
                </summary>
                <p className="mt-2 pl-4 text-xs leading-relaxed text-[var(--muted)]">
                  <span className="text-[var(--accent)]">&gt; </span>
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 bg-[var(--panel)]">
          <div className="mx-auto max-w-6xl px-5 py-14">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
              next --action
            </p>
            <h2 className="mt-3 max-w-2xl text-2xl font-bold leading-tight sm:text-3xl">
              Siap mendefinisikan scope? Mulai dari sesi 30 menit.
            </h2>
            <div className="mt-6 flex flex-wrap gap-3 text-xs">
              <a
                href={waLink(`Halo Biotama, saya ingin mulai proyek ${service.name}.`)}
                target="_blank"
                rel="noopener"
                className="border border-[var(--accent)] bg-[var(--accent)] px-4 py-2.5 font-bold text-[#04110D]"
              >
                $ wa.me/{brand.phoneRaw}
              </a>
              <a href={`mailto:${brand.email}`} className="border border-white/20 px-4 py-2.5 text-[var(--muted)]">
                {brand.email}
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-[10px] text-[var(--muted)]">
          <span>© {new Date().getFullYear()} {brand.name} // {service.slug}</span>
          <div className="flex gap-4">
            <a href="/layanan">/layanan</a>
            <a href="/">/home</a>
            <a href="/llms.txt">/llms.txt</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
