"use client";

import { useEffect, useState, useCallback } from "react";
import { ArrowDown, FileDown } from "lucide-react";
import { profile } from "@/data/profile";
import { SocialIcons } from "@/components/SocialIcons";

/* ──────────────────── Cycling Terminal Commands ──────────────────── */

const SYSTEMCTL_COMMANDS = [
  "$ systemctl status payment-gateway  ─── ● active (running)",
  "$ systemctl status auth-service      ─── ● active (running)",
  "$ systemctl status database-cluster  ─── ● active (running)",
  "$ systemctl status load-balancer     ─── ● active (running)",
  "$ systemctl status monitoring-stack  ─── ● active (running)",
  "$ systemctl status api-gateway       ─── ● active (running)",
];

function TerminalWindow() {
  const [cmdIndex, setCmdIndex] = useState(0);
  const [chars, setChars] = useState("");
  const [phase, setPhase] = useState<"typing" | "waiting">("typing");

  useEffect(() => {
    if (phase === "typing") {
      const fullCmd = SYSTEMCTL_COMMANDS[cmdIndex];
      if (chars.length < fullCmd.length) {
        const t = setTimeout(() => {
          setChars(fullCmd.slice(0, chars.length + 1));
        }, 30);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("waiting"), 1500);
        return () => clearTimeout(t);
      }
    } else {
      const t = setTimeout(() => {
        const next = (cmdIndex + 1) % SYSTEMCTL_COMMANDS.length;
        setCmdIndex(next);
        setChars("");
        setPhase("typing");
      }, 800);
      return () => clearTimeout(t);
    }
  }, [chars, phase, cmdIndex]);

  return (
    <div className="glass-card p-5 md:p-6 w-full">
      {/* Terminal header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[var(--color-glass-border)]">
        <div className="w-3 h-3 rounded-full bg-[var(--color-green-term)] shadow-[0_0_6px_var(--color-green-term-glow)]" />
        <div className="w-3 h-3 rounded-full bg-[var(--color-amber-dim)]" />
        <div className="w-3 h-3 rounded-full bg-[var(--color-text-muted)]" />
        <span className="text-xs font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)] ml-2">
          vault-terminal ~
        </span>
      </div>

      {/* Terminal body */}
      <div className="font-[family-name:var(--font-mono)] text-sm leading-relaxed min-h-[160px]">
        <div className="text-[var(--color-green-term)] mb-3 crt-glow">
          $ whoami
        </div>
        <div className="text-[var(--color-amber-text)] mb-4 pl-4 border-l-2 border-[var(--color-gold)]">
          {profile.name.toLowerCase()} — system.architect.v1.0
        </div>

        <div className="text-[var(--color-green-term)] mb-3 crt-glow">
          $ systemctl $(list-services)
        </div>

        {/* Cycling typed command */}
        <div className="pl-4">
          <span className="text-[var(--color-text-white)]">
            {chars}
          </span>
          {phase === "typing" && chars.length < SYSTEMCTL_COMMANDS[cmdIndex].length && (
            <span className="inline-block w-[6px] h-[14px] bg-[var(--color-amber-text)] ml-0.5 animate-pulse" />
          )}
          {phase === "waiting" && (
            <span className="inline-block w-[6px] h-[14px] bg-[var(--color-green-term)] ml-0.5 cursor-blink" />
          )}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const [visible, setVisible] = useState(false);

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
      className="relative min-h-screen flex items-center bg-[#000000] overflow-hidden"
    >
      {/* ── CRT Boot Animation wrapper ── */}
      <div
        className={`relative z-10 w-full max-w-[1200px] mx-auto px-6 py-20 md:py-0 ${
          visible ? "crt-boot" : "opacity-0"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16">
          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 md:max-w-[620px]">
            {/* $ whoami label */}
            <div
              className={`transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="section-label inline-flex items-center gap-2 mb-6">
                <span className="text-[var(--color-green-term)]">$</span>
                whoami
              </span>
            </div>

            {/* Name — gold Spectral 70px */}
            <h1
              className={`text-5xl sm:text-6xl md:text-[70px] leading-[0.92] tracking-tight transition-all duration-1000 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="font-[family-name:var(--font-display)] font-bold gradient-text">
                {profile.name}
              </span>
            </h1>

            {/* Role — amber mono */}
            <p
              className={`mt-4 text-lg sm:text-xl md:text-2xl font-[family-name:var(--font-mono)] text-[var(--color-amber-text)] transition-all duration-1000 delay-150 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {profile.role}
            </p>

            {/* Tagline — amber dim */}
            <p
              className={`mt-4 text-base md:text-lg font-[family-name:var(--font-mono)] text-[var(--color-amber-dim)] leading-relaxed max-w-lg transition-all duration-1000 delay-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {profile.tagline}
            </p>

            {/* Social icons — amber, visible, clickable */}
            <div
              className={`mt-6 transition-all duration-1000 delay-400 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <SocialIcons />
            </div>

            {/* CTA Buttons */}
            <div
              className={`mt-10 flex flex-col sm:flex-row items-start gap-4 transition-all duration-1000 delay-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <button
                onClick={() => handleScrollTo("#projects")}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 font-[family-name:var(--font-mono)] font-semibold rounded-lg cursor-pointer transition-all duration-300 border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold-subtle)] hover:shadow-[0_0_20px_var(--color-gold-glow)]"
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
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 font-[family-name:var(--font-mono)] font-semibold rounded-lg cursor-pointer transition-all duration-300 border border-[var(--color-green-term-dim)] text-[var(--color-green-term)] hover:bg-[var(--color-green-term-bg)] hover:shadow-[0_0_20px_var(--color-green-term-glow)]"
              >
                <span className="relative z-10 flex items-center gap-2.5">
                  Download Resume
                  <FileDown
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </span>
              </a>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Terminal Window ── */}
          <div className="flex-1 md:max-w-[480px]">
            <TerminalWindow />
          </div>
        </div>

        {/* ── Scroll indicator ── */}
        <div
          className={`mt-16 hidden md:flex items-center gap-2 text-xs font-[family-name:var(--font-mono)] text-[var(--color-text-muted)] tracking-widest uppercase transition-all duration-1000 delay-[900ms] ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="w-12 h-px bg-[var(--color-gold-subtle)]" />
          <span className="text-[var(--color-amber-dim)]">&gt;</span>
          Scroll
        </div>
      </div>
    </section>
  );
}
