import type { CSSProperties } from "react";
import { brand, waLink } from "@/data/services";
import type { ServicePage, VariantId } from "@/data/service-pages";
import ServiceVisual from "./ServiceVisual";
import ServiceDetail from "./ServiceDetail";
import AppleShowcase, { type AppleShot } from "./AppleShowcase";
import RevealObserver from "./RevealObserver";

type Props = { service: ServicePage; variant: VariantId; index: number };

const fontClass = (font: ServicePage["font"]) =>
  font === "serif"
    ? "font-[family-name:var(--font-display)]"
    : font === "mono"
      ? "font-mono"
      : "font-sans";

export default function ServiceLanding({ service, variant, index }: Props) {
  const p = service.palette;
  const mod = index % 4;
  const vi = Number(variant.slice(1)) - 1;
  const heroSig = (index * 3 + vi) % 6;
  const font = fontClass(service.font);
  const radius = ["rounded-none", "rounded-2xl", "rounded-xl", "rounded-none"][mod];
  const borderWidth = mod === 3 ? "border-2" : "border";
  const line = `${p.ink}${mod === 3 ? "33" : "1a"}`;
  const softLine = `${p.ink}12`;
  const headingCase = mod === 3 ? "uppercase tracking-[-0.02em]" : "";
  const buttonShape = mod === 1 ? "rounded-full" : "rounded-md";
  const patternType = index % 5;
  const showcases: AppleShot[] = [
    { desktop: "/assets/shots/vavelle-desktop.webp", mobile: "/assets/shots/vavelle-mobile.webp", name: "Toko Vavelle", href: "/portfolio" },
    { desktop: "/assets/shots/srabutan-desktop.webp", mobile: "/assets/shots/srabutan-mobile.webp", name: "Srabutan", href: "/portfolio" },
    { desktop: "/assets/shots/dharmakarsa-desktop.webp", mobile: "/assets/shots/dharmakarsa-mobile.webp", name: "Dharmakarsa", href: "/dharmakarsa" },
    { desktop: "/assets/shots/mallops-desktop.webp", mobile: "/assets/shots/mallops-mobile.webp", name: "MallOps Suite", href: "/mallops" },
  ];
  const shot = showcases[index % showcases.length];

  const style = {
    "--bg": p.bg, "--ink": p.ink, "--muted": p.muted,
    "--accent": p.accent, "--accent2": p.accent2, "--card": p.card,
  } as CSSProperties;

  const headline = variant === "v1" ? service.tagline : variant === "v2" ? service.outcomes[0] : service.pains[0];
  const subhead = variant === "v1"
    ? service.intro
    : variant === "v2"
      ? `${service.intro} Dirancang untuk tim yang butuh hasil terukur, bukan proyek yang berlarut.`
      : `${service.intro} Kami mulai dari masalah yang paling mahal, lalu menutupnya satu per satu.`;

  const pattern =
    patternType === 0
      ? "linear-gradient(rgba(0,0,0,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.05) 1px, transparent 1px)"
      : patternType === 1
        ? "radial-gradient(circle, rgba(0,0,0,.12) 1px, transparent 1px)"
        : patternType === 2
          ? "repeating-linear-gradient(135deg, rgba(0,0,0,.05) 0 1px, transparent 1px 9px)"
          : patternType === 3
            ? "linear-gradient(rgba(0,0,0,.06) 1px, transparent 1px)"
            : "none";
  const patternSize = patternType === 1 ? "18px 18px" : patternType === 3 ? "100% 26px" : "48px 48px";

  const cta = (
    <div className="flex flex-wrap gap-3">
      <a href={waLink(`Halo Biotama, saya ingin konsultasi tentang ${service.name}.`)} target="_blank" rel="noopener"
        className={`${buttonShape} px-6 py-3.5 text-sm font-semibold`} style={{ backgroundColor: p.ink, color: p.bg }}>
        Konsultasi gratis 30 menit
      </a>
      <a href="#paket" className={`${buttonShape} ${borderWidth} px-6 py-3.5 text-sm font-semibold`} style={{ borderColor: line, color: p.ink }}>
        Lihat paket
      </a>
    </div>
  );

  const eyebrow = (
    <p className="font-mono text-[10px] uppercase tracking-[0.24em]" style={{ color: p.muted }}>
      {service.category} · {service.name}
    </p>
  );

  const visualCard = (extra = "") => (
    <div className={`${radius} ${borderWidth} overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.14)] ${extra}`} style={{ borderColor: line, backgroundColor: p.card }}>
      <ServiceVisual service={service} />
    </div>
  );

  const heroText = (
    <>
      {eyebrow}
      <h1 className={`${font} mt-5 text-[clamp(2.5rem,5.8vw,4.9rem)] leading-[0.98] tracking-[-0.045em] ${headingCase}`}>{headline}</h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-[17px]" style={{ color: p.muted }}>{subhead}</p>
      <div className="mt-8">{cta}</div>
      <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.08em]" style={{ color: p.muted }}>
        <li>kontrak &amp; SLA</li><li>source code milik Anda</li><li>NDA tersedia</li>
      </ul>
    </>
  );

  const sectionLabel = (text: string) => (
    <div className="flex items-center gap-3">
      <span className="h-px w-6" style={{ backgroundColor: p.ink }} />
      <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: p.muted }}>{text}</span>
    </div>
  );

  const proofStrip = (
    <div className={`grid gap-px overflow-hidden sm:grid-cols-3 ${radius} ${borderWidth}`} style={{ borderColor: line, backgroundColor: line }}>
      {service.stats.map((s) => (
        <div key={s.l} className="p-6" style={{ backgroundColor: p.card }}>
          <p className={`${font} text-3xl font-semibold tracking-tight`}>{s.v}</p>
          <p className="mt-1 text-[11px] uppercase tracking-wide" style={{ color: p.muted }}>{s.l}</p>
        </div>
      ))}
    </div>
  );

  const problem = (
    <div>
      {sectionLabel("Masalah")}
      <h2 className={`${font} mt-4 max-w-3xl text-3xl leading-tight tracking-tight sm:text-4xl ${headingCase}`}>
        Kalau dibiarkan, biayanya muncul di tempat lain.
      </h2>
      <div className="mt-9 grid gap-4 md:grid-cols-3">
        {service.pains.map((pain, i) => (
          <div key={pain} className={`${radius} ${borderWidth} p-6`} style={{ borderColor: line, backgroundColor: mod === 1 ? "transparent" : p.card }}>
            <span className="font-mono text-[10px]" style={{ color: p.muted }}>0{i + 1}</span>
            <h3 className={`${font} mt-3 text-xl leading-snug`}>{pain}</h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: p.muted }}>Dibiarkan terus, yang hilang bukan cuma waktu, tapi kepercayaan dan margin.</p>
          </div>
        ))}
      </div>
    </div>
  );

  const compare = (
    <div>
      {sectionLabel("Sebelum / sesudah")}
      <h2 className={`${font} mt-4 max-w-2xl text-3xl leading-tight tracking-tight sm:text-4xl ${headingCase}`}>
        Perbedaannya bukan kosmetik.
      </h2>
      <div className={`mt-8 overflow-hidden ${radius} ${borderWidth}`} style={{ borderColor: line }}>
        <div className="grid grid-cols-2 border-b px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em]" style={{ borderColor: line, color: p.muted }}>
          <span>Sebelum</span><span>Sesudah</span>
        </div>
        {service.pains.map((pain, i) => (
          <div key={pain} className={`grid grid-cols-2 gap-4 px-4 py-4 text-sm ${i > 0 ? "border-t" : ""}`} style={{ borderColor: softLine }}>
            <span style={{ color: p.muted }}>{pain}</span>
            <span className="font-medium">{service.outcomes[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const features = (
    <div>
      {sectionLabel("Solusi")}
      <div className="mt-4 grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
        <h2 className={`${font} text-3xl leading-tight tracking-tight sm:text-4xl ${headingCase}`}>Yang kami bangun, bukan yang kami janjikan.</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {service.features.map((feature, i) => (
            <div key={feature} className={`${i === 0 ? "sm:col-span-2" : ""} ${radius} ${borderWidth} p-5 text-sm leading-relaxed`} style={{ borderColor: line, backgroundColor: i === 0 ? p.card : "transparent" }}>
              <span className="mb-2 block font-mono text-[10px]" style={{ color: p.muted }}>{String(i + 1).padStart(2, "0")}</span>
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const detail = (
    <div>
      {sectionLabel("Di dalam sistem")}
      <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <h2 className={`${font} text-3xl leading-tight tracking-tight sm:text-4xl ${headingCase}`}>Bukan kotak hitam.</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed" style={{ color: p.muted }}>
            Anda melihat bagaimana pekerjaan berjalan, siapa yang memegang kendali, dan di mana batasnya.
            Tidak ada proses yang sengaja disembunyikan.
          </p>
        </div>
        <div className={`${radius} ${borderWidth} overflow-hidden`} style={{ borderColor: line }}>
          <ServiceDetail service={service} view={index} />
        </div>
      </div>
    </div>
  );

  const outcomes = (
    <div>
      {sectionLabel("Hasil")}
      <div className="mt-4 grid gap-8 lg:grid-cols-2">
        <h2 className={`${font} text-3xl leading-tight tracking-tight sm:text-4xl ${headingCase}`}>Setelah sistemnya benar, pekerjaan jadi lebih tenang.</h2>
        <div className="space-y-3">
          {service.outcomes.map((outcome, i) => (
            <div key={outcome} className="flex gap-4 border-b pb-3" style={{ borderColor: softLine }}>
              <span className="font-mono text-[11px]" style={{ color: p.muted }}>0{i + 1}</span>
              <p className="text-base leading-relaxed">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const process = (
    <div>
      {sectionLabel("Proses")}
      <h2 className={`${font} mt-4 text-3xl leading-tight tracking-tight sm:text-4xl ${headingCase}`}>Empat tahap. Tanpa kejutan di tengah jalan.</h2>
      <div className="mt-9 grid gap-5 md:grid-cols-4">
        {service.process.map((step, i) => (
          <div key={step.title} className="border-t pt-4" style={{ borderColor: line }}>
            <span className="font-mono text-[10px]" style={{ color: p.muted }}>0{i + 1}</span>
            <h3 className={`${font} mt-2 text-lg`}>{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed" style={{ color: p.muted }}>{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const pricing = (
    <div id="paket" className="scroll-mt-24">
      {sectionLabel("Paket")}
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <h2 className={`${font} max-w-xl text-3xl leading-tight tracking-tight sm:text-4xl ${headingCase}`}>Harga jelas. Lingkup tertulis.</h2>
        <p className="max-w-xs text-xs leading-relaxed" style={{ color: p.muted }}>Angka di bawah adalah titik awal. Proposal final menyebut lingkup, revisi, dan waktu serah terima.</p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {service.tiers.map((tier, i) => {
          const featured = i === 1;
          return (
            <div key={tier.name} className={`${radius} ${borderWidth} flex flex-col p-6`} style={{ borderColor: featured ? p.ink : line, backgroundColor: featured ? (service.mood === "dark" ? `${p.accent}18` : `${p.accent}12`) : p.card }}>
              <div className="flex items-baseline justify-between gap-2">
                <h3 className={`${font} text-xl`}>{tier.name}</h3>
                <span className="font-mono text-[9px] uppercase" style={{ color: p.muted }}>{tier.note}</span>
              </div>
              <p className={`${font} mt-4 text-3xl font-semibold`}>{tier.price}</p>
              <ul className="mt-5 space-y-2 text-sm" style={{ color: p.muted }}>
                {tier.items.map((item) => <li key={item} className="flex gap-2"><span style={{ color: p.ink }}>—</span>{item}</li>)}
              </ul>
              <a href={waLink(`Halo Biotama, saya tertarik paket ${tier.name} untuk ${service.name}.`)} target="_blank" rel="noopener"
                className={`${buttonShape} mt-6 inline-flex justify-center px-4 py-2.5 text-sm font-semibold`}
                style={featured ? { backgroundColor: p.ink, color: p.bg } : { border: `1px solid ${line}`, color: p.ink }}>
                Tanya paket ini
              </a>
            </div>
          );
        })}
      </div>
      <p className="mt-5 text-[11px] leading-relaxed" style={{ color: p.muted }}>Termasuk kontrak, NDA bila diperlukan, dan serah terima kode untuk proyek development.</p>
    </div>
  );

  const guarantee = (
    <div className={`${radius} ${borderWidth} grid gap-px overflow-hidden md:grid-cols-3`} style={{ borderColor: line, backgroundColor: line }}>
      {[
        ["Lingkup tertulis", "Apa yang dikerjakan, apa yang tidak, dan kapan selesai. Disepakati sebelum mulai."],
        ["Serah terima nyata", "Akses, dokumentasi, dan kode diserahkan. Anda tidak terkunci pada kami."],
        ["NDA bila perlu", "Untuk data dan proses sensitif, kami menandatangani NDA sebelum discovery."],
      ].map(([t, d]) => (
        <div key={t} className="p-5" style={{ backgroundColor: p.card }}>
          <p className={`${font} text-base font-semibold`}>{t}</p>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: p.muted }}>{d}</p>
        </div>
      ))}
    </div>
  );

  const faq = (
    <div id="faq" className="scroll-mt-24">
      {sectionLabel("FAQ")}
      <div className="mt-4 grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
        <h2 className={`${font} text-3xl leading-tight tracking-tight sm:text-4xl ${headingCase}`}>Yang biasanya ditanyakan.</h2>
        <div>
          {service.faqs.map(([q, a]) => (
            <details key={q} className="border-t py-4" style={{ borderColor: softLine }}>
              <summary className="cursor-pointer list-none pr-6 text-sm font-semibold">{q}</summary>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: p.muted }}>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );


  const authority = (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          {sectionLabel("Sistem yang berjalan")}
          <h2 className={`${font} mt-4 max-w-2xl text-3xl leading-tight tracking-tight sm:text-4xl ${headingCase}`}>
            Bukan konsep di slide.
          </h2>
        </div>
        <p className="max-w-xs text-xs leading-relaxed" style={{ color: p.muted }}>
          Empat produk yang kami bangun dan rawat sendiri. Sebagian bisa Anda buka sekarang.
        </p>
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Toko Vavelle", "E-commerce", "52 halaman storefront, 39 halaman admin, tema runtime.", ""],
          ["Dharmakarsa", "Commerce OS", "Multi-tenant, agent gateway, rental & bukti.", "/dharmakarsa"],
          ["MallOps Suite", "Building operations", "Parkir, utilitas, billing, portal tenant.", "/mallops"],
          ["Srabutan", "Marketplace jasa", "Profil, order, dan pembayaran dalam satu alur.", ""],
        ].map(([name, kind, note, href]) => (
          <div key={name} className={`${radius} ${borderWidth} flex flex-col p-5`} style={{ borderColor: line, backgroundColor: p.card }}>
            <p className="font-mono text-[9px] uppercase tracking-[0.14em]" style={{ color: p.muted }}>{kind}</p>
            <h3 className={`${font} mt-2 text-lg`}>{name}</h3>
            <p className="mt-2 flex-1 text-xs leading-relaxed" style={{ color: p.muted }}>{note}</p>
            {href ? (
              <a href={href} className="mt-4 text-[11px] font-semibold underline underline-offset-4" style={{ color: p.ink }}>
                Lihat studi kasus →
              </a>
            ) : (
              <span className="mt-4 font-mono text-[10px]" style={{ color: p.muted }}>production</span>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.08em]" style={{ color: p.muted }}>
        <span>8 tahun membangun sistem</span>
        <span>60+ test otomatis di MallOps</span>
        <span>data &amp; kode milik klien</span>
      </div>
    </div>
  );

  const standards = (
    <div>
      {sectionLabel("Standar kerja")}
      <h2 className={`${font} mt-4 max-w-2xl text-3xl leading-tight tracking-tight sm:text-4xl ${headingCase}`}>
        Kualitas bukan perasaan. Ada prosedurnya.
      </h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {[
          ["Arsitektur sebelum kode", "Keputusan teknis, trade-off, dan batas sistem ditulis sebelum build. Bukan ditemukan di tengah jalan."],
          ["QA di staging", "Fitur diuji di lingkungan terpisah dengan data uji. Produksi bukan tempat eksperimen."],
          ["Keamanan & akses", "Hak akses per peran, audit trail, dan validasi di sisi server untuk setiap alur sensitif."],
          ["Serah terima nyata", "Dokumentasi, akses, dan kode diserahkan. Anda bisa lanjut tanpa kami, dan itu memang tujuannya."],
        ].map(([t, d], i) => (
          <div key={t} className="flex gap-4 border-t pt-4" style={{ borderColor: line }}>
            <span className="font-mono text-[10px]" style={{ color: p.muted }}>0{i + 1}</span>
            <div>
              <h3 className={`${font} text-lg`}>{t}</h3>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: p.muted }}>{d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const fit = (
    <div>
      {sectionLabel("Cocok atau tidak")}
      <div className="mt-4 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className={`${font} text-2xl leading-tight tracking-tight sm:text-3xl ${headingCase}`}>Biasanya cocok kalau...</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              `Anda butuh ${service.outcomes[0].toLowerCase()}, bukan sekadar deliverables.`,
              "Sudah ada proses yang berjalan, tapi belum rapi atau belum terukur.",
              "Ingin harga, lingkup, dan batas kerja yang jelas sebelum mulai.",
            ].map((t) => (
              <li key={t} className="flex gap-3 border-b pb-3" style={{ borderColor: softLine }}>
                <span style={{ color: p.ink }}>✓</span>{t}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className={`${font} text-2xl leading-tight tracking-tight sm:text-3xl ${headingCase}`}>Sebaiknya jangan pilih kami kalau...</h2>
          <ul className="mt-5 space-y-3 text-sm" style={{ color: p.muted }}>
            {[
              "Yang dicari hanya harga termurah, tanpa lingkup dan tanggung jawab.",
              "Tidak ada waktu untuk review, feedback, atau pengambilan keputusan.",
            ].map((t) => (
              <li key={t} className="flex gap-3 border-b pb-3" style={{ borderColor: softLine }}>
                <span>—</span>{t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const owner = (
    <div className={`${radius} ${borderWidth} grid gap-6 p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:p-8`} style={{ borderColor: line, backgroundColor: p.card }}>
      <img
        src="/photo.jpg"
        alt="Agustinus Biotamalo Lumbantoruan"
        width={96}
        height={96}
        className="h-24 w-24 rounded-full object-cover"
        style={{ border: `1px solid ${line}` }}
      />
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: p.muted }}>Yang mengerjakan</p>
        <h2 className={`${font} mt-2 text-2xl leading-tight`}>Agustinus Biotamalo Lumbantoruan</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed" style={{ color: p.muted }}>
          Solutions architect, 8 tahun membangun sistem fintech, commerce, dan operasional.
          Anda berbicara langsung dengan orang yang merancang dan membangun, bukan handoff ke sales.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold">
          <a href="/portfolio" className="underline underline-offset-4">Portofolio</a>
          <a href="/resume" className="underline underline-offset-4">Resume</a>
        </div>
      </div>
    </div>
  );

  const block = { proof: proofStrip, problem, compare, features, detail, outcomes, process, pricing, guarantee, standards, fit, owner, faq } as const;
  type BlockKey = keyof typeof block;

  const headMap: Record<VariantId, BlockKey[]> = {
    v1: ["proof", "problem", "features", "detail", "compare", "outcomes", "process"],
    v2: ["problem", "proof", "compare", "features", "detail", "process", "outcomes"],
    v3: ["outcomes", "problem", "compare", "features", "detail", "process", "proof"],
  };
  const head = headMap[variant];
  const rot = (index + vi) % head.length;
  const order: BlockKey[] = [...head.slice(rot), ...head.slice(0, rot), "pricing", "guarantee", "standards", "fit", "owner", "faq"];

  return (
    <div className="svc2 min-h-screen pb-24 md:pb-0" style={{ ...style, backgroundColor: p.bg, color: p.ink }}>
      <RevealObserver />
      <header className={`sticky top-0 z-50 ${borderWidth} border-x-0 border-t-0 backdrop-blur-xl`} style={{ borderColor: line, backgroundColor: `${p.bg}e6` }}>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
          <a href="/layanan" className="flex items-center gap-2 text-sm font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md" style={{ backgroundColor: p.ink, color: p.bg }}>B</span>
            biotama<span style={{ color: p.accent }}>.</span>
          </a>
          <div className="hidden items-center gap-6 text-xs md:flex" style={{ color: p.muted }}>
            <a href="#paket" className="hover:opacity-70">Paket</a>
            <a href="#faq" className="hover:opacity-70">FAQ</a>
            <span className="font-mono text-[10px] uppercase tracking-wide">{service.category}</span>
          </div>
          <a href={waLink(`Halo Biotama, saya ingin konsultasi tentang ${service.name}.`)} target="_blank" rel="noopener"
            className={`${buttonShape} px-4 py-2 text-xs font-semibold`} style={{ backgroundColor: p.ink, color: p.bg }}>Konsultasi</a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden" style={{ backgroundImage: pattern, backgroundSize: patternSize }}>
          {heroSig === 0 && (
            <div className="mx-auto max-w-6xl px-5 pb-12 pt-16 text-center lg:pt-24">
              {eyebrow}
              <h1 className={`${font} mx-auto mt-5 max-w-4xl text-[clamp(2.6rem,6.4vw,5.2rem)] leading-[0.98] tracking-[-0.045em] ${headingCase}`}>{headline}</h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: p.muted }}>{subhead}</p>
              <div className="mt-8 flex justify-center">{cta}</div>
              <div className="mx-auto mt-12 max-w-4xl">{visualCard()}</div>
            </div>
          )}

          {heroSig === 1 && (
            <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
              <div>{heroText}</div>
              <div>{visualCard()}</div>
            </div>
          )}

          {heroSig === 2 && (
            <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-flow-dense lg:grid-cols-2 lg:items-center lg:py-24">
              <div className="lg:col-start-2">{heroText}</div>
              <div className="lg:col-start-1 lg:row-start-1">{visualCard()}</div>
            </div>
          )}

          {heroSig === 3 && (
            <div className="relative mx-auto max-w-6xl px-5 py-16 lg:py-24">
              <span aria-hidden className={`${font} pointer-events-none absolute -top-6 right-2 select-none text-[11rem] font-semibold leading-none opacity-[0.05] sm:text-[16rem]`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="relative grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
                <div>{heroText}</div>
                <div>{visualCard()}</div>
              </div>
            </div>
          )}

          {heroSig === 4 && (
            <div className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
              <div className={`${radius} ${borderWidth} p-8 text-center sm:p-12`} style={{ borderColor: line, backgroundColor: `${p.accent}14` }}>
                {eyebrow}
                <h1 className={`${font} mx-auto mt-5 max-w-4xl text-[clamp(2.5rem,5.8vw,4.8rem)] leading-[0.98] tracking-[-0.045em] ${headingCase}`}>{headline}</h1>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed" style={{ color: p.muted }}>{subhead}</p>
                <div className="mt-8 flex justify-center">{cta}</div>
              </div>
              <div className="mx-auto mt-6 max-w-4xl">{visualCard()}</div>
            </div>
          )}

          {heroSig === 5 && (
            <div className="mx-auto max-w-6xl px-5 pb-14 pt-16 lg:pt-24">
              {eyebrow}
              <div className="mt-5 grid gap-8 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
                <h1 className={`${font} text-[clamp(2.6rem,6vw,5rem)] leading-[0.98] tracking-[-0.045em] ${headingCase}`}>{headline}</h1>
                <div>
                  <p className="text-base leading-relaxed" style={{ color: p.muted }}>{subhead}</p>
                  <div className="mt-6">{cta}</div>
                </div>
              </div>
              <div className="mt-10">{visualCard()}</div>
            </div>
          )}
        </section>

        <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <div className="svc-reveal">{authority}</div>
        </section>

        <section className="border-y" style={{ borderColor: softLine }}>
          <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
            <div className="grid gap-4 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
              <div>
                {sectionLabel("Antarmuka")}
                <h2 className={`${font} mt-4 max-w-xl text-3xl leading-tight tracking-tight sm:text-4xl ${headingCase}`}>
                  Dibangun sampai layar terkecil.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed lg:justify-self-end" style={{ color: p.muted }}>
                Screenshot dari produk yang berjalan, bukan mockup template. Desktop dan mobile
                memakai sistem desain yang sama.
              </p>
            </div>
            <div className="mt-10">
              <AppleShowcase shot={shot} accent={p.accent} />
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5">
          {order.map((key, i) => (
            <section key={`${key}-${i}`} className="svc-reveal border-t py-14 sm:py-20" style={{ borderColor: softLine, animationDelay: `${Math.min(i * 35, 210)}ms` }}>
              {block[key]}
            </section>
          ))}
        </div>

        <section className={`${radius} mx-auto mb-16 mt-6 max-w-6xl overflow-hidden`} style={{ backgroundColor: p.ink, color: p.bg }}>
          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-60">Langkah berikutnya</p>
              <h2 className={`${font} mt-3 max-w-2xl text-3xl leading-tight tracking-tight sm:text-4xl`}>Ceritakan masalahnya. Kami bantu petakan prioritasnya.</h2>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={waLink(`Halo Biotama, saya ingin mulai proyek ${service.name}.`)} target="_blank" rel="noopener"
                  className={`${buttonShape} px-5 py-3 text-sm font-semibold`} style={{ backgroundColor: p.bg, color: p.ink }}>
                  WhatsApp {brand.phoneDisplay}
                </a>
                <a href={`mailto:${brand.email}?subject=${encodeURIComponent(service.name)}`} className={`${buttonShape} border px-5 py-3 text-sm font-semibold`} style={{ borderColor: `${p.bg}44`, color: p.bg }}>{brand.email}</a>
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

      <div className="fixed inset-x-0 bottom-0 z-40 border-t p-3 backdrop-blur-xl md:hidden" style={{ borderColor: line, backgroundColor: `${p.bg}f2` }}>
        <div className="flex gap-2">
          <a
            href={waLink(`Halo Biotama, saya ingin konsultasi tentang ${service.name}.`)}
            target="_blank"
            rel="noopener"
            className="flex-1 rounded-md px-4 py-3 text-center text-xs font-semibold"
            style={{ backgroundColor: p.ink, color: p.bg }}
          >
            Konsultasi gratis
          </a>
          <a href="#paket" className="rounded-md border px-4 py-3 text-xs font-semibold" style={{ borderColor: line, color: p.ink }}>
            Paket
          </a>
        </div>
      </div>
    </div>
  );
}
