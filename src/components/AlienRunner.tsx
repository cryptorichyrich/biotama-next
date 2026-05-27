"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Alien Runner — Sega-style 2D side-scroller.
 * A tiny figure runs through an alien landscape, jumping over obstacles.
 * Controls: Space / Up arrow to jump. Double-jump enabled.
 * Aesthetic: Green wireframe on black, CRT terminal vibe matching Vault Terminal.
 */
export default function AlienRunner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);
  const gameRef = useRef<{
    score: number;
    gameOver: boolean;
    started: boolean;
    animId: number;
    groundOffset: number;
    obstacles: { x: number; width: number; height: number }[];
    player: { x: number; y: number; vy: number; width: number; height: number; grounded: boolean };
    particles: { x: number; y: number; vy: number; life: number }[];
    stars: { x: number; y: number; speed: number }[];
    speed: number;
    jumpCount: number;
    maxJumps: number;
  } | null>(null);

  // Colors matching the vault terminal theme
  const COLORS = {
    green: "#00ff41",
    greenDim: "#003300",
    amber: "#e8c840",
    gold: "#c9a84c",
    goldDim: "#332800",
    bg: "#070707",
  };

  const start = useCallback(() => {
    const g = gameRef.current;
    if (!g) return;
    g.started = true;
    g.gameOver = false;
    g.score = 0;
    g.speed = 4;
    g.obstacles = [];
    g.particles = [];
    g.player.y = 0;
    g.player.vy = 0;
    g.player.grounded = true;
    g.jumpCount = 0;
    setStarted(true);
    setGameOver(false);
    setScore(0);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;

    // ── Game State ──
    const state = {
      score: 0,
      gameOver: false,
      started: false,
      animId: 0,
      groundOffset: 0,
      obstacles: [] as { x: number; width: number; height: number }[],
      player: { x: 60, y: 0, vy: 0, width: 12, height: 18, grounded: true },
      particles: [] as { x: number; y: number; vy: number; life: number }[],
      stars: Array.from({ length: 40 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H * 0.6,
        speed: 0.3 + Math.random() * 0.5,
      })),
      speed: 4,
      jumpCount: 0,
      maxJumps: 2,
    };
    gameRef.current = state;

    const GROUND_Y = H - 40;
    const GRAVITY = 0.5;
    const JUMP_FORCE = -9;
    const OBSTACLE_MIN_GAP = 120;
    const OBSTACLE_SPEED = 1.0;

    // ── Input ──
    const jump = () => {
      if (state.gameOver) {
        state.started = true;
        state.gameOver = false;
        state.score = 0;
        state.speed = 4;
        state.obstacles = [];
        state.particles = [];
        state.player.y = 0;
        state.player.vy = 0;
        state.player.grounded = true;
        state.jumpCount = 0;
        setGameOver(false);
        setStarted(true);
        setScore(0);
        return;
      }
      if (!state.started) {
        start();
        return;
      }
      if (state.jumpCount < state.maxJumps) {
        state.player.vy = JUMP_FORCE;
        state.player.grounded = false;
        state.jumpCount++;
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "ArrowUp" || e.key === "w") {
        e.preventDefault();
        jump();
      }
    };
    const onTouch = (e: TouchEvent) => {
      e.preventDefault();
      jump();
    };
    window.addEventListener("keydown", onKeyDown);
    canvas.addEventListener("touchstart", onTouch, { passive: false });

    // ── Spawn Obstacles ──
    let spawnTimer = 0;
    function spawnObstacle() {
      const height = 12 + Math.random() * 18;
      state.obstacles.push({
        x: W + 20,
        width: 10 + Math.random() * 8,
        height,
      });
    }

    // ── Spawn Particles ──
    function addParticles(x: number, y: number, count: number) {
      for (let i = 0; i < count; i++) {
        state.particles.push({
          x,
          y,
          vy: -Math.random() * 3 - 1,
          vx: (Math.random() - 0.5) * 3,
          life: 1,
        } as any);
      }
    }

    // ── Draw Player — Tiny Alien Sprite ──
    function drawPlayer(x: number, y: number) {
      const c = ctx!;
      const px = state.player.x;
      const py = GROUND_Y - state.player.height - state.player.y;

      // Body (rectangle — the astronaut)
      c.fillStyle = COLORS.green;
      c.fillRect(px - 5, py + 2, 10, 12);
      c.strokeStyle = COLORS.green;
      c.lineWidth = 1;
      c.strokeRect(px - 5, py + 2, 10, 12);

      // Head (circle)
      c.beginPath();
      c.arc(px, py, 5, 0, Math.PI * 2);
      c.stroke();

      // Helmet visor
      c.fillStyle = COLORS.greenDim;
      c.beginPath();
      c.arc(px, py + 1, 3, 0, Math.PI);
      c.fill();
      c.stroke();

      // Legs
      c.strokeStyle = COLORS.green;
      c.lineWidth = 1.5;
      c.beginPath();
      c.moveTo(px - 3, py + 14);
      c.lineTo(px - 5, py + 20);
      c.moveTo(px + 3, py + 14);
      c.lineTo(px + 5, py + 20);
      if (!state.player.grounded) {
        // Running pose in air
        c.moveTo(px - 3, py + 14);
        c.lineTo(px - 6, py + 18);
        c.moveTo(px + 3, py + 14);
        c.lineTo(px + 6, py + 18);
      }
      c.stroke();

      // Jump indicator (small glow)
      if (!state.player.grounded) {
        c.fillStyle = COLORS.amber;
        c.globalAlpha = 0.3;
        c.beginPath();
        c.arc(px + 6, py - 2, 2, 0, Math.PI * 2);
        c.fill();
        c.globalAlpha = 1;
      }

      // Jetpack flame when jumping
      if (!state.player.grounded) {
        const flameLen = 4 + Math.sin(Date.now() * 0.03) * 2;
        c.strokeStyle = COLORS.amber;
        c.lineWidth = 2;
        c.beginPath();
        c.moveTo(px, py + 14);
        c.lineTo(px, py + 14 + flameLen);
        c.stroke();
      }
    }

    // ── Animation Loop ──
    let lastSpawnX = W;
    let frameCount = 0;

    function animate() {
      state.animId = requestAnimationFrame(animate);
      frameCount++;
      const c = ctx!;

      // ── Clear ──
      c.fillStyle = COLORS.bg;
      c.fillRect(0, 0, W, H);

      // ── Stars ──
      for (const star of state.stars) {
        c.fillStyle = COLORS.greenDim;
        c.globalAlpha = 0.3 + Math.random() * 0.3;
        c.fillRect(star.x, star.y, 1.5, 1.5);
        c.globalAlpha = 1;
        star.x -= star.speed * 0.5;
        if (star.x < 0) {
          star.x = W;
          star.y = Math.random() * H * 0.6;
        }
      }

      // ── Ground ──
      c.strokeStyle = COLORS.green;
      c.lineWidth = 1;
      c.globalAlpha = 0.4;
      c.beginPath();
      c.moveTo(0, GROUND_Y);
      c.lineTo(W, GROUND_Y);
      c.stroke();

      // Ground grid lines
      c.strokeStyle = COLORS.greenDim;
      c.lineWidth = 0.5;
      c.globalAlpha = 0.2;
      for (let x = state.groundOffset % 30; x < W; x += 30) {
        c.beginPath();
        c.moveTo(x, GROUND_Y);
        c.lineTo(x, H);
        c.stroke();
      }
      c.globalAlpha = 1;

      if (state.started && !state.gameOver) {
        // ── Physics ──
        state.player.vy += GRAVITY;
        state.player.y += state.player.vy;

        // Ground collision
        if (state.player.y <= 0) {
          state.player.y = 0;
          state.player.vy = 0;
          state.player.grounded = true;
          state.jumpCount = 0;
        }

        // Scroll ground
        state.groundOffset += state.speed;

        // Increase speed over time
        if (frameCount % 300 === 0) {
          state.speed = Math.min(8, state.speed + 0.2);
        }

        // ── Spawn obstacles ──
        spawnTimer++;
        if (spawnTimer > 80 + Math.random() * 60) {
          spawnTimer = 0;
          spawnObstacle();
        }

        // ── Update obstacles ──
        for (let i = state.obstacles.length - 1; i >= 0; i--) {
          const obs = state.obstacles[i];
          obs.x -= state.speed;

          // Collision detection
          const px = state.player.x;
          const py = GROUND_Y - state.player.height - state.player.y;
          if (
            px + state.player.width / 2 > obs.x &&
            px - state.player.width / 2 < obs.x + obs.width &&
            py + state.player.height > GROUND_Y - obs.height
          ) {
            // GAME OVER
            state.gameOver = true;
            setGameOver(true);
            setStarted(false);
            addParticles(px, py, 20);
          }

          // Score for passing obstacles
          if (obs.x + obs.width < px && obs.x + obs.width + state.speed >= px) {
            state.score += 10;
            setScore(state.score);
          }

          if (obs.x < -50) {
            state.obstacles.splice(i, 1);
          }
        }

        // ── Update particles ──
        for (let i = state.particles.length - 1; i >= 0; i--) {
          const p = state.particles[i] as any;
          p.x += p.vx || 0;
          p.y += p.vy || 0;
          p.life -= 0.02;
          if (p.life <= 0) state.particles.splice(i, 1);
        }
      }

      // ── Draw obstacles (alien mushrooms/crystals) ──
      for (const obs of state.obstacles) {
        // Crystal-style obstacle
        c.strokeStyle = COLORS.amber;
        c.lineWidth = 1.5;

        // Draw as alien crystal
        const topY = GROUND_Y - obs.height;
        c.beginPath();
        c.moveTo(obs.x, GROUND_Y);
        c.lineTo(obs.x + obs.width / 2, topY - 5);
        c.lineTo(obs.x + obs.width, GROUND_Y);
        c.closePath();
        c.stroke();

        // Fill with dim gold
        c.fillStyle = COLORS.goldDim;
        c.globalAlpha = 0.3;
        c.fill();
        c.globalAlpha = 1;

        // Center glow
        c.fillStyle = COLORS.gold;
        c.globalAlpha = 0.15;
        c.beginPath();
        c.arc(obs.x + obs.width / 2, GROUND_Y - obs.height / 2, 3, 0, Math.PI * 2);
        c.fill();
        c.globalAlpha = 1;
      }

      // ── Draw particles ──
      for (const p of state.particles as any[]) {
        c.fillStyle = COLORS.green;
        c.globalAlpha = p.life;
        c.fillRect(p.x, p.y, 2, 2);
      }
      c.globalAlpha = 1;

      // ── Draw player ──
      drawPlayer(state.player.x, state.player.y);

      // ── HUD ──
      c.fillStyle = COLORS.greenDim;
      c.font = '8px monospace';
      c.fillText(`$ SCORE: ${state.score}`, 8, 12);

      // Jump counter
      if (state.started && !state.gameOver) {
        c.fillStyle = COLORS.amber;
        c.globalAlpha = 0.3;
        c.fillText(`JUMPS: ${state.jumpCount}/${state.maxJumps}`, W - 80, 12);
        c.globalAlpha = 1;
      }

      // ── Title bar ──
      c.fillStyle = COLORS.green;
      c.globalAlpha = 0.2;
      c.font = '7px monospace';
      c.fillText("ALIEN_RUNNER v1.0", 8, H - 6);
      c.globalAlpha = 1;
    }

    animate();

    // ── Cleanup ──
    return () => {
      cancelAnimationFrame(state.animId);
      window.removeEventListener("keydown", onKeyDown);
      canvas.removeEventListener("touchstart", onTouch);
    };
  }, [start]);

  return (
    <div className="relative w-full">
      <canvas
        ref={canvasRef}
        width={700}
        height={300}
        className="w-full rounded-lg"
        style={{
          border: "1px solid #00ff41",
          boxShadow: "0 0 20px rgba(0,255,65,0.1), inset 0 0 20px rgba(0,255,65,0.05)",
          display: "block",
          background: "#070707",
          imageRendering: "pixelated",
        }}
      />

      {/* CRT overlay */}
      <div
        className="absolute inset-0 pointer-events-none rounded-lg"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
        }}
      />

      {/* Start / Game Over overlay */}
      {(!started || gameOver) && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 rounded-lg">
          <div className="text-center font-mono">
            {gameOver ? (
              <>
                <p className="text-sm text-[var(--color-gold)] mb-1">// MISSION FAILED</p>
                <p className="text-[10px] text-[var(--color-amber-text)] opacity-60 mb-1">
                  The alien got you
                </p>
                <p className="text-xs text-[var(--color-green-term)] mb-3">
                  SCORE: {score}
                </p>
                <button
                  onClick={() => {
                    window.dispatchEvent(new KeyboardEvent("keydown", { key: " " }));
                  }}
                  className="px-4 py-2 text-xs text-[var(--color-green-term)] border border-[var(--color-green-term)] rounded hover:bg-[var(--color-green-term)] hover:text-black transition-colors cursor-pointer"
                >
                  $ ./restart.sh
                </button>
              </>
            ) : (
              <>
                <p className="text-xs text-[var(--color-amber-text)] mb-1 opacity-70">
                  // SEGA EMULATOR MODULE
                </p>
                <p className="text-base text-[var(--color-green-term)] mb-2">
                  ALIEN RUNNER
                </p>
                <div className="text-[10px] text-[var(--color-amber-text)] opacity-60 space-y-0.5 mb-4">
                  <p>SPACE / ▲ / W to jump</p>
                  <p>Double-jump enabled — avoid the crystals</p>
                </div>
                <button
                  onClick={() => {
                    window.dispatchEvent(new KeyboardEvent("keydown", { key: " " }));
                  }}
                  className="px-4 py-2 text-xs text-[var(--color-green-term)] border border-[var(--color-green-term)] rounded hover:bg-[var(--color-green-term)] hover:text-black transition-colors cursor-pointer"
                >
                  $ ./run.sh
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
