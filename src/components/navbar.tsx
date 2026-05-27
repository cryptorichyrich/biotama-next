"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

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

  // Lock body scroll when mobile menu is open
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
          scrolled
            ? "glass shadow-elevated"
            : "bg-transparent"
        )}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={handleLogoClick}
            className="group flex items-center gap-1 cursor-pointer"
          >
            <span className="text-xl font-bold tracking-tight text-[var(--color-ice)] font-[family-name:var(--font-display)]">
              Bio
            </span>
            <span
              aria-hidden="true"
              className="text-2xl font-bold text-[var(--color-indigo-bright)] transition-all duration-300 group-hover:text-[var(--color-indigo-glow)] group-hover:drop-shadow-[0_0_8px_var(--color-indigo-glow)]"
            >
              .
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium",
                    "text-[var(--color-mist)] hover:text-[var(--color-ice)]",
                    "transition-colors duration-200 cursor-pointer",
                    /* Hover underline effect */
                    "after:absolute after:bottom-0.5 after:left-3 after:right-3",
                    "after:h-[2px] after:rounded-full",
                    "after:bg-[var(--color-indigo-bright)]",
                    "after:scale-x-0 after:origin-left",
                    "after:transition-transform after:duration-300 after:ease-out",
                    "hover:after:scale-x-100"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="ml-3">
              <a
                href="/resume"
                className={cn(
                  "gradient-border-animated inline-block px-5 py-2 text-sm font-semibold cursor-pointer",
                  "rounded-[var(--radius-md)]",
                  "bg-[var(--color-accent-subtle)]",
                  "text-[var(--color-ice)] hover:text-white",
                  "transition-all duration-300",
                  "hover:bg-[var(--color-accent-subtle)]/80",
                  "hover:shadow-[0_0_20px_rgba(92,92,240,0.25)]"
                )}
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden relative z-50 text-[var(--color-ice)] p-2 cursor-pointer hover:text-[var(--color-indigo-bright)] transition-colors duration-200"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
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
        {/* Backdrop with blur */}
        <div className="absolute inset-0 bg-[var(--color-bg-primary)]/90 backdrop-blur-xl" />

        {/* Menu items */}
        <ul className="relative flex flex-col items-center gap-6">
          {NAV_ITEMS.map((item, index) => (
            <li key={item.href} className="overflow-hidden">
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "block text-2xl font-medium cursor-pointer",
                  "text-[var(--color-mist)] hover:text-[var(--color-ice)]",
                  "transition-all duration-300",
                  "hover:drop-shadow-[0_0_12px_var(--color-indigo-glow)]",
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0",
                  "transition-[transform,opacity] duration-500 ease-out"
                )}
                style={{
                  transitionDelay: menuOpen ? `${index * 60}ms` : "0ms",
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-4 overflow-hidden">
            <a
              href="/resume"
              className={cn(
                "gradient-border-animated inline-block px-8 py-3 text-base font-semibold cursor-pointer",
                "rounded-[var(--radius-md)]",
                "bg-[var(--color-accent-subtle)]",
                "text-[var(--color-ice)] hover:text-white",
                "transition-all duration-300",
                "hover:bg-[var(--color-accent-subtle)]/80",
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0",
                "transition-[transform,opacity] duration-500 ease-out"
              )}
              style={{
                transitionDelay: menuOpen ? `${NAV_ITEMS.length * 60}ms` : "0ms",
              }}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
