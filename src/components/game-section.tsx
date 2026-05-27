"use client";

import dynamic from "next/dynamic";

const GameConsole = dynamic(() => import("@/components/GameConsole"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] rounded-lg flex items-center justify-center bg-[var(--color-surface)] border border-[var(--color-border)]">
      <span className="font-mono text-xs opacity-50">$ loading game console...</span>
    </div>
  ),
});

export function GameSection() {
  return (
    <section id="games" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20">
      <p className="section-label mb-6">
        <span className="text-[var(--color-green-term)]">$</span> cat /usr/share/games/terminal
      </p>
      <GameConsole />
    </section>
  );
}
