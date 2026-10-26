"use client";

import { useEffect } from "react";
import { brand } from "@/data/services";

type Props = {
  /** Aktifkan kalkulator otomasi (hanya halaman AI). */
  calculator?: boolean;
};

const LABELS: Record<string, string> = {
  nama: "Nama",
  perusahaan: "Perusahaan",
  email: "Email",
  wa: "WhatsApp",
  layanan: "Layanan",
  budget: "Estimasi budget",
  pesan: "Kebutuhan",
};

export default function LandingFX({ calculator = false }: Props) {
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Bahasa halaman ini Indonesia; layout induk memakai lang="en".
    const previousLang = document.documentElement.lang;
    document.documentElement.lang = "id";
    cleanups.push(() => {
      document.documentElement.lang = previousLang || "en";
    });

    // Header shadow saat scroll.
    const header = document.getElementById("siteHeader");
    const onScroll = () => {
      header?.classList.toggle("scrolled", window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    // Menu mobile.
    const toggle = document.querySelector<HTMLButtonElement>(".nav-toggle");
    const navLinks = document.getElementById("navLinks");
    if (toggle && navLinks) {
      const onToggle = () => {
        const open = navLinks.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      };
      toggle.addEventListener("click", onToggle);
      cleanups.push(() => toggle.removeEventListener("click", onToggle));

      const linkHandler = () => {
        navLinks.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      };
      navLinks.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", linkHandler);
        cleanups.push(() => a.removeEventListener("click", linkHandler));
      });
    }

    // Reveal on scroll.
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (reduce || !("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
      );
      revealEls.forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    // Angka statistik.
    const counted = new WeakSet<Element>();
    const animate = (el: HTMLElement) => {
      if (counted.has(el)) return;
      counted.add(el);
      const target = parseFloat(el.dataset.count || "0");
      const decimals = parseInt(el.dataset.decimals || "0", 10);
      if (reduce) {
        el.textContent = target.toLocaleString("id-ID", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
        return;
      }
      let start: number | null = null;
      const duration = 1100;
      const step = (ts: number) => {
        if (start === null) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = (target * eased).toLocaleString("id-ID", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    if ("IntersectionObserver" in window) {
      const cio = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animate(entry.target as HTMLElement);
              cio.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.4 },
      );
      counters.forEach((el) => cio.observe(el));
      cleanups.push(() => cio.disconnect());
    } else {
      counters.forEach(animate);
    }

    // Tahun berjalan.
    document.querySelectorAll<HTMLElement>("[data-year]").forEach((el) => {
      el.textContent = String(new Date().getFullYear());
    });

    // Form -> WhatsApp.
    document.querySelectorAll<HTMLFormElement>("form[data-wa-form]").forEach((form) => {
      const onSubmit = (event: Event) => {
        event.preventDefault();
        if (!form.checkValidity()) {
          form.reportValidity();
          return;
        }
        const data = new FormData(form);
        const lines = ["Halo Biotama, saya ingin konsultasi."];
        Object.entries(LABELS).forEach(([key, label]) => {
          const value = String(data.get(key) ?? "").trim();
          if (value) lines.push(`${label}: ${value}`);
        });
        const status = document.getElementById(form.dataset.status || "");
        if (status) {
          status.textContent =
            "Membuka WhatsApp... jika tidak terbuka, klik tombol WhatsApp di kanan bawah.";
        }
        window.open(
          `https://wa.me/${brand.phoneRaw}?text=${encodeURIComponent(lines.join("\n"))}`,
          "_blank",
          "noopener",
        );
      };
      form.addEventListener("submit", onSubmit);
      cleanups.push(() => form.removeEventListener("submit", onSubmit));
    });

    // Kalkulator otomasi (halaman AI).
    if (calculator) {
      const chats = document.getElementById("chats") as HTMLInputElement | null;
      const mins = document.getElementById("mins") as HTMLInputElement | null;
      const cost = document.getElementById("cost") as HTMLInputElement | null;
      const minsVal = document.getElementById("minsVal");
      const hoursOut = document.getElementById("saveHours");
      const rupiahOut = document.getElementById("saveRp");
      if (chats && mins && cost && minsVal && hoursOut && rupiahOut) {
        const calc = () => {
          const c = parseFloat(chats.value) || 0;
          const m = parseFloat(mins.value) || 0;
          const r = parseFloat(cost.value) || 0;
          minsVal.textContent = `${m} menit`;
          const hours = (c * 30 * 0.7 * m) / 60;
          hoursOut.textContent = Math.round(hours).toLocaleString("id-ID");
          rupiahOut.textContent = `Rp ${Math.round(hours * r).toLocaleString("id-ID")}`;
        };
        ["input", "change"].forEach((evt) => {
          chats.addEventListener(evt, calc);
          mins.addEventListener(evt, calc);
          cost.addEventListener(evt, calc);
        });
        calc();
      }
    }

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [calculator]);

  return null;
}
