"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, FileDown } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  const [visible, setVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  // Dot grid animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spacing = 30;
    let offset = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255,255,255,0.04)";

      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = offset % spacing; y < canvas.height; y += spacing) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      offset += 0.2;
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden
      />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <h1
          className={`text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {profile.name}
        </h1>
        <p
          className={`mt-4 text-lg md:text-xl text-zinc-400 font-medium transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {profile.role}
        </p>
        <p
          className={`mt-6 text-base md:text-lg text-zinc-500 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {profile.tagline}
        </p>
        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-600 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 cursor-pointer"
          >
            See My Work
            <ArrowDown size={18} />
          </a>
          <a
            href="/resume"
            className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-600 hover:border-zinc-400 text-zinc-300 hover:text-white font-semibold rounded-lg transition-colors duration-200 cursor-pointer"
          >
            Download Resume
            <FileDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
