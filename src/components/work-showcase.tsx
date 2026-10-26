import AppleShowcase from "@/components/service-pages/AppleShowcase";

export function WorkShowcase() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <p className="section-label mb-4">
        <span className="text-[var(--color-green-term)]">$</span> open ~/work/live
      </p>
      <div className="grid gap-4 md:grid-cols-[1fr_.8fr] md:items-end">
        <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-display)] font-semibold tracking-tight gradient-text">
          Real products. Real screens.
        </h2>
        <div className="md:justify-self-end md:max-w-sm">
          <p className="text-sm font-[family-name:var(--font-mono)] text-[var(--color-text-body)] leading-relaxed">
            Screenshots from systems running in production and pilot. Desktop and mobile share the same design system.
          </p>
          <a href="/works" className="mt-3 inline-flex text-xs font-[family-name:var(--font-mono)] text-[var(--color-gold)] underline underline-offset-4 hover:text-[var(--color-gold-bright)]">
            See all works →
          </a>
        </div>
      </div>
      <div className="mt-10">
        <AppleShowcase
          accent="#3AE2B4"
          shot={{
            desktop: "/assets/shots/vavelle-desktop.webp",
            mobile: "/assets/shots/vavelle-mobile.webp",
            name: "Toko Vavelle",
            href: "/portfolio",
          }}
        />
      </div>
    </section>
  );
}
