"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { ArrowDown, FileDown, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";

/* ──────────────────────────── Typewriter Hook ──────────────────────────── */

function useTypewriter(text: string, speed = 40, delay = 800) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return { displayed, done };
}

/* ──────────────────── Animated Geometric Pattern ──────────────────── */

function GeometricCanvas({ canvasRef }: { canvasRef: React.RefObject<HTMLCanvasElement | null> }) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const w = () => canvas!.offsetWidth;
    const h = () => canvas!.offsetHeight;

    const draw = () => {
      time += 0.008;
      ctx!.clearRect(0, 0, w(), h());

      const cx = w() / 2;
      const cy = h() / 2;
      const maxR = Math.max(w(), h()) * 0.75;

      // — concentric geometric rings —
      for (let ring = 0; ring < 6; ring++) {
        const r = maxR * (0.15 + ring * 0.13);
        const sides = 6 + ring;
        const rotation = time * (0.3 + ring * 0.08) + ring * 0.5;
        const alpha = 0.06 + ring * 0.015;

        ctx!.beginPath();
        for (let i = 0; i <= sides; i++) {
          const angle = (i / sides) * Math.PI * 2 + rotation;
          const x = cx + Math.cos(angle) * r;
          const y = cy + Math.sin(angle) * r;
          i === 0 ? ctx!.moveTo(x, y) : ctx!.lineTo(x, y);
        }
        ctx!.closePath();
        ctx!.strokeStyle = `rgba(92, 92, 240, ${alpha})`;
        ctx!.lineWidth = 1;
        ctx!.stroke();
      }

      // — floating accent dots —
      for (let i = 0; i < 14; i++) {
        const angle = time * (0.15 + i * 0.11) + i * 0.9;
        const radius = maxR * (0.2 + Math.sin(time * 0.2 + i) * 0.15);
        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius;
        const dotSize = 1.5 + Math.sin(time * 1.5 + i * 0.7) * 0.8;
        const dotAlpha = 0.15 + Math.sin(time * 0.8 + i) * 0.1;

        ctx!.beginPath();
        ctx!.arc(x, y, dotSize, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(0, 232, 208, ${dotAlpha})`;
        ctx!.fill();
      }

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, [canvasRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}

/* ────────────────────── Animated Stat Counter ────────────────────── */

function AnimatedCounter({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ease-out ${
        inView
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="block text-2xl md:text-3xl font-bold font-display gradient-text">
        {value}
      </span>
      <span className="block text-xs md:text-sm text-cool-gray mt-1 font-medium tracking-wide uppercase">
        {label}
      </span>
    </div>
  );
}

/* ──────────────────────── Main Hero Component ──────────────────────── */

export function Hero() {
  const [visible, setVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { displayed, done } = useTypewriter(profile.tagline, 30, 400);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleScrollTo = useCallback((selector: string) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-black-pearl overflow-hidden"
    >
      {/* ── Right: Geometric Pattern ── */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full opacity-40 md:opacity-60 pointer-events-none">
        <GeometricCanvas canvasRef={canvasRef} />
      </div>

      {/* ── Subtle gradient vignette over canvas side ── */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-black-pearl/80 via-transparent to-transparent pointer-events-none hidden md:block" />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 py-20 md:py-0">
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16">
          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 md:max-w-[620px]">
            {/* Section label */}
            <div
              className={`section-label mb-6 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <span className="w-8 h-px bg-indigo-bright" />
                System Architect
              </span>
            </div>

            {/* Name — large gradient text */}
            <h1
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold font-display leading-[0.92] tracking-tight transition-all duration-1000 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="gradient-text">{profile.name}</span>
            </h1>

            {/* Role */}
            <p
              className={`mt-4 text-lg sm:text-xl md:text-2xl font-medium text-mist transition-all duration-1000 delay-150 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {profile.role}
            </p>

            {/* Typewriter tagline */}
            <div
              className={`mt-6 transition-all duration-700 delay-300 ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-base md:text-lg text-cool-gray leading-relaxed font-mono">
                {displayed}
                {!done && (
                  <span className="inline-block w-[2px] h-[1.1em] bg-indigo-bright ml-0.5 align-middle animate-pulse" />
                )}
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`mt-10 flex flex-col sm:flex-row items-start gap-4 transition-all duration-1000 delay-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <button
                onClick={() => handleScrollTo("#projects")}
                className="gradient-border-animated group relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-abyss text-frost font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-dark-water hover:text-ice"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  See My Work
                  <ArrowDown
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </span>
              </button>

              <a
                href="/resume"
                className="gradient-border-animated group relative inline-flex items-center gap-2.5 px-7 py-3.5 bg-abyss text-frost font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-dark-water hover:text-ice"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  Download Resume
                  <FileDown
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="group relative inline-flex items-center gap-2 px-5 py-3.5 text-cool-gray hover:text-frost font-medium rounded-lg transition-all duration-300 cursor-pointer"
              >
                <span className="flex items-center gap-2.5">
                  Contact
                  <ExternalLink size={14} />
                </span>
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN (md+) — spacer for canvas ── */}
          <div className="hidden md:block md:flex-1" aria-hidden="true" />
        </div>

        {/* ── STAT COUNTERS ── */}
        <div
          className={`mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-[620px] transition-all duration-1000 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {profile.metrics.map((metric, i) => (
            <AnimatedCounter
              key={metric.label}
              value={metric.value}
              label={metric.label}
              delay={200 + i * 120}
            />
          ))}
        </div>

        {/* ── Scroll indicator ── */}
        <div
          className={`mt-16 hidden md:flex items-center gap-2 text-xs font-mono text-slate tracking-widest uppercase transition-all duration-1000 delay-[900ms] ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="w-12 h-px bg-slate" />
          Scroll
        </div>
      </div>
    </section>
  );
}
