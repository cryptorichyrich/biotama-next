"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeProvider";

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
          "flex flex-col items-center justify-center",
          "transition-all duration-500 ease-out",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[var(--color-bg)] backdrop-blur-2xl" />

        {/* Menu items */}
        <ul className="relative flex flex-col items-center gap-6">
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
