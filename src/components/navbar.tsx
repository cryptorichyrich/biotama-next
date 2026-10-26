"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeProvider";
import { megaServiceCount, serviceGroups, variantLinks } from "@/data/mega-menu";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (
        !target?.closest("#mega-layanan") &&
        !target?.closest('[aria-controls="mega-layanan"]')
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMobileServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMenuOpen(false);
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  const handleLogoClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    []
  );

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "glass-apple shadow-[0_1px_20px_rgba(0,0,0,0.6)]" : "bg-transparent"
        )}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo — links to root */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="group flex items-center gap-1 cursor-pointer"
          >
            <span className="text-xl font-bold tracking-tight text-[var(--color-gold)] font-[family-name:var(--font-display)]">
              BL.
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "relative px-3 py-2 text-sm font-[family-name:var(--font-mono)]",
                    "text-[var(--color-amber-dim)] hover:text-[var(--color-amber-text)]",
                    "transition-colors duration-200 cursor-pointer",
                    /* Amber hover underline */
                    "after:absolute after:bottom-0.5 after:left-3 after:right-3",
                    "after:h-[2px] after:rounded-full",
                    "after:bg-[var(--color-amber-bright)]",
                    "after:scale-x-0 after:origin-left",
                    "after:transition-transform after:duration-300 after:ease-out",
                    "hover:after:scale-x-100"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((v) => !v)}
                aria-expanded={servicesOpen}
                aria-controls="mega-layanan"
                className={cn(
                  "relative px-3 py-2 text-sm font-[family-name:var(--font-mono)] cursor-pointer",
                  "text-[var(--color-amber-dim)] hover:text-[var(--color-amber-text)]",
                  "transition-colors duration-200",
                  "after:absolute after:bottom-0.5 after:left-3 after:right-3",
                  "after:h-[2px] after:rounded-full",
                  "after:bg-[var(--color-amber-bright)]",
                  "after:scale-x-0 after:origin-left",
                  "after:transition-transform after:duration-300 after:ease-out",
                  "hover:after:scale-x-100"
                )}
              >
                Layanan
                <span
                  aria-hidden="true"
                  className={cn(
                    "ml-1 inline-block text-[10px] transition-transform duration-200",
                    servicesOpen && "rotate-180"
                  )}
                >
                  ▾
                </span>
              </button>

              <div
                id="mega-layanan"
                className={cn(
                  "fixed left-1/2 top-16 z-50 w-[min(1120px,95vw)] -translate-x-1/2",
                  "rounded-xl border border-[var(--color-gold)]/25 bg-[#080706]/98 p-5",
                  "shadow-[0_24px_80px_rgba(0,0,0,0.75)] backdrop-blur-xl",
                  "transition-all duration-200",
                  servicesOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0 pointer-events-none"
                )}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-gold)]">
                    Layanan · {megaServiceCount} · {megaServiceCount * 3} halaman
                  </p>
                  <a
                    href="/layanan"
                    className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-amber-text)] hover:text-white"
                  >
                    Katalog lengkap →
                  </a>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-5 lg:grid-cols-5">
                  {serviceGroups.map((group) => (
                    <div key={group.label}>
                      <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--color-amber-dim)]">
                        {group.label}
                      </p>
                      <ul className="mt-2 space-y-2">
                        {group.items.map((item) => (
                          <li key={item.slug}>
                            <a
                              href={`/layanan/${item.slug}/v1/`}
                              onClick={() => setServicesOpen(false)}
                              className="block text-[12.5px] leading-snug text-[var(--color-amber-text)] hover:text-white"
                            >
                              {item.name}
                            </a>
                            <div className="mt-1 flex gap-1">
                              {variantLinks.map((variant) => (
                                <a
                                  key={variant.id}
                                  href={`/layanan/${item.slug}/${variant.id}/`}
                                  onClick={() => setServicesOpen(false)}
                                  aria-label={`${item.name} versi ${variant.label}`}
                                  className="rounded border border-white/10 px-1.5 py-0.5 font-mono text-[9px] uppercase text-[var(--color-amber-dim)] hover:border-[var(--color-gold)]/50 hover:text-[var(--color-gold)]"
                                >
                                  {variant.id}
                                </a>
                              ))}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <a
                href="/portfolio"
                className={cn(
                  "inline-flex items-center gap-2 px-5 py-2 text-sm font-[family-name:var(--font-mono)] cursor-pointer",
                  "rounded-lg border border-[var(--color-gold)]/50",
                  "text-[var(--color-gold)]",
                  "transition-all duration-300",
                  "hover:bg-[var(--color-gold-subtle)]",
                  "hover:shadow-[0_0_16px_var(--color-gold-glow)]"
                )}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="/resume"
                className={cn(
                  "inline-flex items-center gap-2 px-5 py-2 text-sm font-[family-name:var(--font-mono)] cursor-pointer",
                  "rounded-lg border border-[var(--color-green-term-dim)]",
                  "text-[var(--color-green-term)]",
                  "transition-all duration-300",
                  "hover:bg-[var(--color-green-term-bg)]",
                  "hover:shadow-[0_0_16px_var(--color-green-term-glow)]"
                )}
              >
                <span className="text-[var(--color-green-term)]">$</span>
                Resume
              </a>
            </li>
            <li className="ml-2">
              <ThemeToggle />
            </li>
          </ul>

          {/* Mobile toggle & theme toggle */}
          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <ThemeToggle />
            </div>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden relative z-50 text-[var(--color-amber-text)] p-2 cursor-pointer hover:text-[var(--color-amber-bright)] transition-colors duration-200"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden",
          "flex flex-col items-center justify-start overflow-y-auto pb-24 pt-20",
          "transition-all duration-500 ease-out",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[var(--color-bg)] backdrop-blur-2xl" />

        {/* Menu items */}
        <ul className="relative flex w-full max-w-md flex-col items-center gap-5 px-4">
          {NAV_ITEMS.map((item, index) => (
            <li key={item.href} className="overflow-hidden">
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "block text-2xl font-[family-name:var(--font-mono)] cursor-pointer",
                  "text-[var(--color-amber-dim)] hover:text-[var(--color-amber-bright)]",
                  "transition-all duration-300",
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0",
                  "transition-[transform,opacity] duration-500 ease-out"
                )}
                style={{
                  transitionDelay: menuOpen ? `${index * 60}ms` : "0ms",
                }}
              >
                <span className="text-[var(--color-green-term)]">$ </span>
                {item.label.toLowerCase()}
              </a>
            </li>
          ))}
          <li className="mt-2 w-full overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileServicesOpen((v) => !v)}
              aria-expanded={mobileServicesOpen}
              className="flex w-full items-center justify-between rounded-lg border border-[var(--color-gold)]/40 px-5 py-3 text-sm font-[family-name:var(--font-mono)] text-[var(--color-gold)]"
            >
              <span>Layanan ({megaServiceCount})</span>
              <span
                aria-hidden="true"
                className={cn(
                  "text-[10px] transition-transform duration-200",
                  mobileServicesOpen && "rotate-180"
                )}
              >
                ▾
              </span>
            </button>

            {mobileServicesOpen && (
              <div className="mt-2 max-h-[42vh] overflow-y-auto rounded-lg border border-white/10 bg-black/50 p-3">
                {serviceGroups.map((group) => (
                  <div key={group.label} className="mb-3 last:mb-0">
                    <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--color-amber-dim)]">
                      {group.label}
                    </p>
                    <ul className="mt-1.5 space-y-2">
                      {group.items.map((item) => (
                        <li key={item.slug} className="flex items-center justify-between gap-2">
                          <a
                            href={`/layanan/${item.slug}/v1/`}
                            className="text-[12px] leading-tight text-[var(--color-amber-text)]"
                          >
                            {item.name}
                          </a>
                          <span className="flex shrink-0 gap-1">
                            {variantLinks.map((variant) => (
                              <a
                                key={variant.id}
                                href={`/layanan/${item.slug}/${variant.id}/`}
                                aria-label={`${item.name} versi ${variant.label}`}
                                className="rounded border border-white/10 px-1.5 py-0.5 font-mono text-[9px] uppercase text-[var(--color-amber-dim)]"
                              >
                                {variant.id}
                              </a>
                            ))}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <a
                  href="/layanan"
                  className="mt-2 block border-t border-white/10 pt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--color-gold)]"
                >
                  Katalog lengkap →
                </a>
              </div>
            )}
          </li>
          <li className="mt-2 overflow-hidden">
            <a
              href="/portfolio"
              className={cn(
                "inline-flex items-center gap-2 px-8 py-3 text-base font-[family-name:var(--font-mono)] cursor-pointer",
                "rounded-lg border border-[var(--color-gold)]/50",
                "text-[var(--color-gold)]",
                "transition-all duration-300",
                "hover:bg-[var(--color-gold-subtle)]",
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0",
                "transition-[transform,opacity] duration-500 ease-out"
              )}
              style={{
                transitionDelay: menuOpen ? `${(NAV_ITEMS.length + 1) * 60}ms` : "0ms",
              }}
            >
              Portfolio
            </a>
          </li>
          <li className="mt-2 overflow-hidden">
            <a
              href="/resume"
              className={cn(
                "inline-flex items-center gap-2 px-8 py-3 text-base font-[family-name:var(--font-mono)] cursor-pointer",
                "rounded-lg border border-[var(--color-green-term-dim)]",
                "text-[var(--color-green-term)]",
                "transition-all duration-300",
                "hover:bg-[var(--color-green-term-bg)]",
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0",
                "transition-[transform,opacity] duration-500 ease-out"
              )}
              style={{
                transitionDelay: menuOpen ? `${(NAV_ITEMS.length + 1) * 60}ms` : "0ms",
              }}
            >
              <span className="text-[var(--color-green-term)]">$</span>
              Resume
            </a>
          </li>
          <li className="mt-4 overflow-hidden flex justify-center">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </>
  );
}
