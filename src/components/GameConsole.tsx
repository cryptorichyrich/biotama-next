"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const DataRunner = dynamic(() => import("@/components/DataRunner"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[280px] rounded-lg flex items-center justify-center bg-black border border-[var(--color-green-term)]">
      <span className="font-mono text-xs text-[var(--color-green-term)] opacity-50">$ loading game module...</span>
    </div>
  ),
});

const AlienRunner = dynamic(() => import("@/components/AlienRunner"), {
  ssr: false,
  loading: () => (
    <div className="w-full rounded-lg flex items-center justify-center bg-black border border-[var(--color-green-term)]" style={{ minHeight: "300px" }}>
      <span className="font-mono text-xs text-[var(--color-green-term)] opacity-50">$ loading game module...</span>
    </div>
  ),
});

type GameId = "data-runner" | "alien-runner";

const GAMES: { id: GameId; label: string; desc: string }[] = [
  { id: "data-runner", label: "DATA_RUNNER", desc: "3D wireframe tunnel flyer" },
  { id: "alien-runner", label: "ALIEN_RUNNER", desc: "2D Sega-style side-scroller" },
];

export default function GameConsole() {
  const [activeGame, setActiveGame] = useState<GameId>("data-runner");

  return (
    <div className="w-full mb-8">
      {/* Terminal-style game selector */}
      <div
        className="flex items-center gap-1 mb-2 px-3 py-1.5 rounded-t"
        style={{
          border: "1px solid #00ff41",
          borderBottom: "none",
          background: "#0a0a0a",
        }}
      >
        <span
          className="w-2 h-2 rounded-full animate-pulse"
          style={{ backgroundColor: "#00ff41" }}
        />
        <span
          className="font-mono text-[10px] ml-1"
          style={{ color: "#00ff41", opacity: 0.6 }}
        >
          GAME_CONSOLE v2.0
        </span>

        <div className="flex items-center gap-1 ml-auto">
          {GAMES.map((g) => (
            <button
              key={g.id}
              onClick={() => setActiveGame(g.id)}
              className="font-mono text-[10px] px-2 py-0.5 rounded transition-all cursor-pointer"
              style={{
                color: activeGame === g.id ? "#00ff41" : "#00ff41",
                background:
                  activeGame === g.id
                    ? "rgba(0, 255, 65, 0.1)"
                    : "transparent",
                border:
                  activeGame === g.id
                    ? "1px solid rgba(0, 255, 65, 0.3)"
                    : "1px solid transparent",
                opacity: activeGame === g.id ? 1 : 0.4,
              }}
            >
              $ {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* Active game */}
      {activeGame === "data-runner" && <DataRunner />}
      {activeGame === "alien-runner" && <AlienRunner />}
    </div>
  );
}
