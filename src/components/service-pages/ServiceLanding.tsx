import type { CSSProperties } from "react";
import { brand, waLink } from "@/data/services";
import type { ServicePage, VariantId } from "@/data/service-pages";
import ServiceVisual from "./ServiceVisual";

type Props = {
  service: ServicePage;
  variant: VariantId;
  index: number;
};

const fontClass = (font: ServicePage["font"]) =>
  font === "serif"
    ? "font-[family-name:var(--font-display)]"
    : font === "mono"
      ? "font-mono"
      : "font-sans";

export default function ServiceLanding({ service, variant, index }: Props) {
  const p = service.palette;
  const mod = index % 4;
  const font = fontClass(service.font);
  const radius = ["rounded-none", "rounded-2xl", "rounded-xl", "rounded-none"][mod];
  const borderWidth = mod === 3 ? "border-2" : "border";
  const line = `${p.ink}${mod === 3 ? "33" : "1a"}`;
  const softLine = `${p.ink}12`;
  const headingCase = mod === 3 ? "uppercase tracking-[-0.02em]" : "";
  const buttonShape = mod === 1 ? "rounded-full" : "rounded-md";

  const style = {
    "--bg": p.bg,
    "--ink": p.ink,
    "--muted": p.muted,
    "--accent": p.accent,
    "--accent2": p.accent2,
    "--card": p.card,
  } as CSSProperties;

  const headline =
    variant === "v1"
      ? service.tagline
      : variant === "v2"
        ? service.outcomes[0]
        : service.pains[0];

  const subhead =
    variant === "v1"
      ? service.intro
      : variant === "v2"
        ? `${service.intro} Dirancang untuk tim yang butuh hasil terukur, bukan proyek yang berlarut.`
        : `${service.intro} Kami mulai dari masalah yang paling mahal, lalu menutupnya satu per satu.`;

  type BlockKey = "proof" | "problem" | "features" | "outcomes" | "process" | "pricing" | "faq";
  const sectionMap: Record<VariantId, BlockKey[]> = {
    v1: ["proof", "problem", "features", "outcomes", "process", "pricing", "faq"],
    v2: ["problem", "proof", "features", "process", "outcomes", "pricing", "faq"],
    v3: ["outcomes", "problem", "features", "pricing", "process", "proof", "faq"],
  };
  const baseSections = sectionMap[variant];
  const head = baseSections.slice(0, 5);
  const rotate = mod % head.length;
  const sections = [...head.slice(rotate), ...head.slice(0, rotate), ...baseSections.slice(5)];

  const sectionLabel = (n: string, text: string) => (
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-[10px]" style={{ color: p.muted }}>
        {n}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: p.muted }}>
        {text}
      </span>
    </div>
  );

  const cta = (
    <div className="flex flex-wrap gap-3">
      <a
        href={waLink(`Halo Biotama, saya ingin konsultasi tentang ${service.name}.`)}
        target="_blank"
        rel="noopener"
        className={`${buttonShape} px-6 py-3.5 text-sm font-semibold`}
        style={{ backgroundColor: p.ink, color: p.bg }}
      >
        Konsultasi gratis 30 menit
      </a>
      <a
        href="#paket"
        className={`${buttonShape} ${borderWidth} px-6 py-3.5 text-sm font-semibold`}
        style={{ borderColor: line, color: p.ink }}
      >
        Lihat paket
      </a>
    </div>
  );

  const proofStrip = (
    <div className={`grid gap-px sm:grid-cols-3 ${radius} overflow-hidden ${borderWidth}`} style={{ borderColor: line, backgroundColor: line }}>
      {service.stats.map((s) => (
        <div key={s.l} className="p-6" style={{ backgroundColor: p.card }}>
          <p className={`${font} text-3xl font-semibold tracking-tight`}>{s.v}</p>
          <p className="mt-1 text-[11px] uppercase tracking-wide" style={{ color: p.muted }}>
            {s.l}
          </p>
        </div>
      ))}
    </div>
  );

  const problem = (
    <div>
      {sectionLabel("01", "Masalah")}
      <h2 className={`${font} mt-4 max-w-3xl text-3xl leading-tight tracking-tight sm:text-4xl ${headingCase}`}>
        Kalau dibiarkan, biayanya muncul di tempat lain.
      </h2>
      <div className="mt-9 grid gap-4 md:grid-cols-3">
        {service.pains.map((pain, i) => (
          <div key={pain} className={`${radius} ${borderWidth} p-6`} style={{ borderColor: line, backgroundColor: mod === 1 ? "transparent" : p.card }}>
            <span className="font-mono text-[10px]" style={{ color: p.muted }}>
              0{i + 1}
            </span>
            <h3 className={`${font} mt-3 text-xl leading-snug`}>{pain}</h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: p.muted }}>
              Dibiarkan terus, yang hilang bukan cuma waktu, tapi kepercayaan dan margin.
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const features = (
    <div>
      {sectionLabel("02", "Solusi")}
      <div className="mt-4 grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
        <h2 className={`${font} text-3xl leading-tight tracking-tight sm:text-4xl ${headingCase}`}>
          Yang kami bangun, bukan yang kami janjikan.
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {service.features.map((feature, i) => (
            <div
              key={feature}
              className={`${i === 0 ? "sm:col-span-2" : ""} ${radius} ${borderWidth} p-5 text-sm leading-relaxed`}
              style={{ borderColor: line, backgroundColor: i === 0 ? p.card : "transparent" }}
            >
              <span className="mb-2 block font-mono text-[10px]" style={{ color: p.muted }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const outcomes = (
    <div>
      {sectionLabel("03", "Hasil")}
      <div className="mt-4 grid gap-8 lg:grid-cols-2">
        <h2 className={`${font} text-3xl leading-tight tracking-tight sm:text-4xl ${headingCase}`}>
          Setelah sistemnya benar, pekerjaan jadi lebih tenang.
        </h2>
        <div className="space-y-3">
          {service.outcomes.map((outcome, i) => (
            <div key={outcome} className="flex gap-4 border-b pb-3" style={{ borderColor: softLine }}>
              <span className="font-mono text-[11px]" style={{ color: p.muted }}>
                0{i + 1}
              </span>
              <p className="text-base leading-relaxed">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const process = (
    <div>
      {sectionLabel("04", "Proses")}
      <h2 className={`${font} mt-4 text-3xl leading-tight tracking-tight sm:text-4xl ${headingCase}`}>
        Empat tahap. Tanpa kejutan di tengah jalan.
      </h2>
      <div className="mt-9 grid gap-5 md:grid-cols-4">
        {service.process.map((step, i) => (
          <div key={step.title} className="border-t pt-4" style={{ borderColor: line }}>
            <span className="font-mono text-[10px]" style={{ color: p.muted }}>
              0{i + 1}
            </span>
            <h3 className={`${font} mt-2 text-lg`}>{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed" style={{ color: p.muted }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const pricing = (
    <div id="paket">
      {sectionLabel("05", "Paket")}
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <h2 className={`${font} max-w-xl text-3xl leading-tight tracking-tight sm:text-4xl ${headingCase}`}>
          Harga jelas. Lingkup tertulis.
        </h2>
        <p className="max-w-xs text-xs leading-relaxed" style={{ color: p.muted }}>
          Angka di bawah adalah titik awal. Proposal final menyebut lingkup, revisi, dan waktu serah terima.
        </p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {service.tiers.map((tier, i) => {
          const featured = i === 1;
          return (
            <div
              key={tier.name}
              className={`${radius} ${borderWidth} flex flex-col p-6`}
              style={{
                borderColor: featured ? p.ink : line,
                backgroundColor: featured ? (service.mood === "dark" ? `${p.accent}18` : `${p.accent}12`) : p.card,
              }}
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className={`${font} text-xl`}>{tier.name}</h3>
                <span className="font-mono text-[9px] uppercase" style={{ color: p.muted }}>
                  {tier.note}
                </span>
              </div>
              <p className={`${font} mt-4 text-3xl font-semibold`}>{tier.price}</p>
              <ul className="mt-5 space-y-2 text-sm" style={{ color: p.muted }}>
                {tier.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span style={{ color: p.accent }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Halo Biotama, saya tertarik paket ${tier.name} untuk ${service.name}.`)}
                target="_blank"
                rel="noopener"
                className={`${buttonShape} mt-6 inline-flex justify-center px-4 py-2.5 text-sm font-semibold`}
                style={featured ? { backgroundColor: p.ink, color: p.bg } : { border: `1px solid ${line}`, color: p.ink }}
              >
                Tanya paket ini
              </a>
            </div>
          );
        })}
      </div>
      <p className="mt-5 text-[11px] leading-relaxed" style={{ color: p.muted }}>
        Termasuk kontrak, NDA bila diperlukan, dan serah terima kode untuk proyek development.
      </p>
    </div>
  );

  const faq = (
    <div id="faq">
      {sectionLabel("06", "FAQ")}
      <div className="mt-4 grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
        <h2 className={`${font} text-3xl leading-tight tracking-tight sm:text-4xl ${headingCase}`}>
          Yang biasanya ditanyakan.
        </h2>
        <div>
          {service.faqs.map(([q, a]) => (
            <details key={q} className="border-t py-4" style={{ borderColor: softLine }}>
              <summary className="cursor-pointer list-none pr-6 text-sm font-semibold">{q}</summary>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: p.muted }}>
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );

  const heroMode: "center" | "split" | "splitReverse" =
    variant === "v1"
      ? mod % 2 === 0
        ? "center"
        : "split"
      : variant === "v2"
        ? mod % 2 === 0
          ? "split"
          : "splitReverse"
        : mod % 2 === 0
          ? "splitReverse"
          : "split";

  const block = {
    proof: proofStrip,
    problem,
    features,
    outcomes,
    process,
    pricing,
    faq,
  } as const;

  return (
    <div className="svc2 min-h-screen" style={{ ...style, backgroundColor: p.bg, color: p.ink }}>
      <header
        className={`sticky top-0 z-50 ${borderWidth} border-x-0 border-t-0 backdrop-blur-xl`}
        style={{ borderColor: line, backgroundColor: `${p.bg}e6` }}
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
          <a href="/layanan" className="flex items-center gap-2 text-sm font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md" style={{ backgroundColor: p.ink, color: p.bg }}>
              B
            </span>
            biotama<span style={{ color: p.accent }}>.</span>
          </a>
          <div className="hidden items-center gap-6 text-xs md:flex" style={{ color: p.muted }}>
            <a href="#paket" className="hover:opacity-70">Paket</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
            <span className="font-mono text-[10px] uppercase tracking-wide">{service.category}</span>
          </div>
          <a
            href={waLink(`Halo Biotama, saya ingin konsultasi tentang ${service.name}.`)}
            target="_blank"
            rel="noopener"
            className={`${buttonShape} px-4 py-2 text-xs font-semibold`}
            style={{ backgroundColor: p.ink, color: p.bg }}
          >
            Konsultasi
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          {heroMode === "center" ? (
            <div className="mx-auto max-w-6xl px-5 pb-12 pt-16 text-center lg:pt-24">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em]" style={{ color: p.muted }}>
                {service.category} · {service.name}
              </p>
              <h1 className={`${font} mx-auto mt-5 max-w-4xl text-[clamp(2.6rem,6.4vw,5.2rem)] leading-[0.98] tracking-[-0.04em] ${headingCase}`}>
                {headline}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: p.muted }}>
                {subhead}
              </p>
              <div className="mt-8 flex justify-center">{cta}</div>
              <div className="mx-auto mt-12 max-w-4xl">
                <div className={`${radius} ${borderWidth} overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)]`} style={{ borderColor: line, backgroundColor: p.card }}>
                  <ServiceVisual service={service} />
                </div>
              </div>
            </div>
          ) : (
            <div className={`mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center lg:py-24 ${heroMode === "splitReverse" ? "lg:grid-flow-dense" : ""}`}>
              <div className={heroMode === "splitReverse" ? "lg:col-start-2" : ""}>
                <p className="font-mono text-[10px] uppercase tracking-[0.24em]" style={{ color: p.muted }}>
                  {service.category} · {service.name}
                </p>
                <h1 className={`${font} mt-5 text-[clamp(2.5rem,5.4vw,4.8rem)] leading-[0.98] tracking-[-0.04em] ${headingCase}`}>
                  {headline}
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed" style={{ color: p.muted }}>
                  {subhead}
                </p>
                <div className="mt-8">{cta}</div>
                <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.08em]" style={{ color: p.muted }}>
                  <li>kontrak &amp; SLA</li>
                  <li>source code milik Anda</li>
                  <li>NDA tersedia</li>
                </ul>
              </div>
              <div className={heroMode === "splitReverse" ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className={`${radius} ${borderWidth} overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.14)]`} style={{ borderColor: line, backgroundColor: p.card }}>
                  <ServiceVisual service={service} />
                </div>
              </div>
            </div>
          )}
        </section>

        {/* SECTIONS */}
        <div className="mx-auto max-w-6xl px-5">
          {sections.map((key, i) => (
            <section
              key={key}
              className={`py-14 sm:py-20 ${i > 0 ? "border-t" : ""}`}
              style={{ borderColor: softLine }}
            >
              {block[key]}
            </section>
          ))}
        </div>

        {/* FINAL CTA */}
        <section className={`${radius} mx-auto mb-16 mt-6 max-w-6xl overflow-hidden`} style={{ backgroundColor: p.ink, color: p.bg }}>
          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-60">
                Langkah berikutnya
              </p>
              <h2 className={`${font} mt-3 max-w-2xl text-3xl leading-tight tracking-tight sm:text-4xl`}>
                Ceritakan masalahnya. Kami bantu petakan prioritasnya.
              </h2>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={waLink(`Halo Biotama, saya ingin mulai proyek ${service.name}.`)}
                  target="_blank"
                  rel="noopener"
                  className={`${buttonShape} px-5 py-3 text-sm font-semibold`}
                  style={{ backgroundColor: p.bg, color: p.ink }}
                >
                  WhatsApp {brand.phoneDisplay}
                </a>
                <a
                  href={`mailto:${brand.email}?subject=${encodeURIComponent(service.name)}`}
                  className={`${buttonShape} border px-5 py-3 text-sm font-semibold`}
                  style={{ borderColor: `${p.bg}44`, color: p.bg }}
                >
                  {brand.email}
                </a>
              </div>
            </div>
            <div className="text-left lg:text-right">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-60">mulai dari</p>
              <p className={`${font} mt-2 text-3xl font-semibold`}>{service.tiers[0].price}</p>
              <p className="mt-1 text-xs opacity-60">{service.tiers[0].note}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={`${borderWidth} border-x-0 border-b-0`} style={{ borderColor: line }}>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-7 text-[11px]" style={{ color: p.muted }}>
          <span>© {new Date().getFullYear()} {brand.name} · {service.name}</span>
          <div className="flex gap-5">
            <a href="/layanan" className="hover:opacity-70">Semua layanan</a>
            <a href="/" className="hover:opacity-70">Beranda</a>
            <a href="/llms.txt" className="hover:opacity-70">llms.txt</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
