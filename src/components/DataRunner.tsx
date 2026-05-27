"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import * as THREE from "three";

/**
 * Wireframe Data Runner — 3D tunnel flyer with Alien Nostromo terminal aesthetic.
 * Arrow keys / WASD to steer. Collect green nodes. Avoid amber walls.
 * Rendered inside a glass-card terminal frame with CRT scan-line overlay.
 */
export default function DataRunner() {
  const mountRef = useRef<HTMLDivElement>(null);
  const gameRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    keys: Set<string>;
    score: number;
    tunnelSegments: THREE.Mesh[];
    collectibles: THREE.Mesh[];
    obstacles: THREE.Mesh[];
    speed: number;
    animId: number;
    gameOver: boolean;
    started: boolean;
    groundOffset: number;
    clock: THREE.Clock;
  } | null>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);

  const startGame = useCallback(() => {
    if (gameRef.current) {
      gameRef.current.started = true;
      gameRef.current.gameOver = false;
      gameRef.current.score = 0;
      setStarted(true);
      setGameOver(false);
      setScore(0);
    }
  }, []);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = Math.min(450, width * 0.6);

    // ── Scene ──
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x070707);
    scene.fog = new THREE.Fog(0x070707, 40, 100);

    // ── Camera ──
    const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 200);
    camera.position.set(0, 3, 8);
    camera.lookAt(0, 0, -30);

    // ── Renderer ──
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // ── Lights ──
    const ambient = new THREE.AmbientLight(0x111111);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0x00ff41, 0.5);
    dirLight.position.set(5, 10, 5);
    scene.add(dirLight);

    // ── Game State ──
    const keys = new Set<string>();
    const tunnelSegments: THREE.Mesh[] = [];
    const collectibles: THREE.Mesh[] = [];
    const obstacles: THREE.Mesh[] = [];
    const clock = new THREE.Clock();

    const state = {
      scene,
      camera,
      renderer,
      keys,
      score: 0,
      tunnelSegments,
      collectibles,
      obstacles,
      speed: 12,
      animId: 0,
      gameOver: false,
      started: false,
      groundOffset: 0,
      clock,
    };

    gameRef.current = state;

    // ── Tunnel Generation ──
    const TUNNEL_LENGTH = 120;
    const TUNNEL_RADIUS = 6;
    const SEGMENT_SPACING = 6;
    const LOOKAHEAD = 40;

    function createTunnelRing(z: number, radius: number): THREE.Mesh {
      const geo = new THREE.RingGeometry(radius - 0.05, radius, 24, 1);
      const mat = new THREE.MeshBasicMaterial({
        color: 0x00ff41,
        wireframe: true,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = -Math.PI / 2;
      mesh.position.z = -z;
      scene.add(mesh);
      return mesh;
    }

    function createCollectible(z: number): THREE.Mesh {
      const geo = new THREE.OctahedronGeometry(0.3, 0);
      const mat = new THREE.MeshStandardMaterial({
        color: 0x00ff41,
        emissive: 0x00ff41,
        emissiveIntensity: 0.5,
      });
      const mesh = new THREE.Mesh(geo, mat);

      // Random position within tunnel cross-section
      const angle = Math.random() * Math.PI * 2;
      const radius = 1 + Math.random() * 2.5;
      mesh.position.set(
        Math.cos(angle) * radius,
        0.5 + Math.sin(angle) * radius * 0.6,
        -z
      );
      scene.add(mesh);
      return mesh;
    }

    function createObstacle(z: number): THREE.Mesh {
      const geo = new THREE.BoxGeometry(3, 0.3, 0.3);
      const mat = new THREE.MeshStandardMaterial({
        color: 0xc9a84c,
        emissive: 0xc9a84c,
        emissiveIntensity: 0.2,
      });
      const mesh = new THREE.Mesh(geo, mat);
      const angle = Math.random() * Math.PI * 2;
      const radius = 2;
      mesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.6,
        -z
      );
      mesh.lookAt(0, 0, -z);
      scene.add(mesh);
      return mesh;
    }

    // Generate initial tunnel
    for (let z = 0; z < LOOKAHEAD; z += SEGMENT_SPACING) {
      const ring = createTunnelRing(z, TUNNEL_RADIUS);
      tunnelSegments.push(ring);
    }
    for (let z = 5; z < LOOKAHEAD; z += 8) {
      if (Math.random() > 0.4) {
        collectibles.push(createCollectible(z));
      }
      if (Math.random() > 0.7) {
        obstacles.push(createObstacle(z));
      }
    }

    // ── Player Indicator ──
    const playerGeo = new THREE.ConeGeometry(0.2, 0.5, 4);
    const playerMat = new THREE.MeshStandardMaterial({
      color: 0x00ff41,
      emissive: 0x00ff41,
      emissiveIntensity: 0.8,
    });
    const player = new THREE.Mesh(playerGeo, playerMat);
    player.position.set(0, 0, 4);
    player.rotation.x = Math.PI / 2;
    scene.add(player);

    // Grid floor lines (retro aesthetic)
    const gridHelper = new THREE.GridHelper(20, 20, 0x00ff41, 0x003300);
    gridHelper.position.y = -2;
    scene.add(gridHelper);

    // ── Particle Stars ──
    const starCount = 400;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starPos[i] = (Math.random() - 0.5) * 200;
    }
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0x00ff41,
      size: 0.08,
      transparent: true,
      opacity: 0.5,
    });
    const stars = new THREE.Points(starGeo, starMat);
    stars.position.z = -60;
    scene.add(stars);

    // ── Input ──
    const onKeyDown = (e: KeyboardEvent) => {
      keys.add(e.key.toLowerCase());
      if (e.key === " " && !state.started) {
        startGame();
      }
      if (e.key === " " && state.gameOver) {
        state.gameOver = false;
        state.score = 0;
        setGameOver(false);
        state.started = true;
        setStarted(true);
        // Reset position
        player.position.set(0, 0, 4);
        // Clear and regenerate
        for (const m of tunnelSegments) scene.remove(m);
        for (const m of collectibles) scene.remove(m);
        for (const m of obstacles) scene.remove(m);
        tunnelSegments.length = 0;
        collectibles.length = 0;
        obstacles.length = 0;
        state.speed = 12;
        for (let z = 0; z < LOOKAHEAD; z += SEGMENT_SPACING) {
          tunnelSegments.push(createTunnelRing(z, TUNNEL_RADIUS));
        }
        for (let z = 5; z < LOOKAHEAD; z += 8) {
          if (Math.random() > 0.4) collectibles.push(createCollectible(z));
          if (Math.random() > 0.7) obstacles.push(createObstacle(z));
        }
      }
    };
    const onKeyUp = (e: KeyboardEvent) => {
      keys.delete(e.key.toLowerCase());
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    // ── Resize ──
    const onResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = Math.min(450, w * 0.6);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // ── Animation Loop ──
    function animate() {
      state.animId = requestAnimationFrame(animate);

      if (state.started && !state.gameOver) {
        const delta = clock.getDelta();

        // Movement
        const moveSpeed = 4 * delta;
        const lateralLimit = 2.5;
        const verticalLimit = 1.5;

        if (keys.has("arrowleft") || keys.has("a")) {
          player.position.x -= moveSpeed;
        }
        if (keys.has("arrowright") || keys.has("d")) {
          player.position.x += moveSpeed;
        }
        if (keys.has("arrowup") || keys.has("w")) {
          player.position.y += moveSpeed;
        }
        if (keys.has("arrowdown") || keys.has("s")) {
          player.position.y -= moveSpeed;
        }

        // Clamp player position within tunnel
        player.position.x = Math.max(
          -lateralLimit,
          Math.min(lateralLimit, player.position.x)
        );
        player.position.y = Math.max(
          -0.5,
          Math.min(verticalLimit, player.position.y)
        );
        player.position.y = Math.max(-0.5, player.position.y);

        // Gradually increase speed
        state.speed += delta * 0.3;
        const scrollSpeed = state.speed * delta;

        // Move tunnel closer
        state.groundOffset += scrollSpeed;

        // Scroll tunnel rings
        for (const ring of tunnelSegments) {
          ring.position.z += scrollSpeed;
          if (ring.position.z > 10) {
            // Move to back
            ring.position.z -= TUNNEL_LENGTH;
          }
        }

        // Scroll collectibles
        for (let i = collectibles.length - 1; i >= 0; i--) {
          const c = collectibles[i];
          c.position.z += scrollSpeed;
          c.rotation.x += delta * 2;
          c.rotation.y += delta * 3;

          // Check collection
          const dist = c.position.distanceTo(player.position);
          if (dist < 0.8) {
            scene.remove(c);
            collectibles.splice(i, 1);
            state.score += 10;
            setScore(state.score);
            // Spawn new one far ahead
            const newZ = 10 + Math.random() * 30;
            collectibles.push(createCollectible(newZ));
          } else if (c.position.z > 10) {
            scene.remove(c);
            collectibles.splice(i, 1);
            // Spawn replacement
            const newZ = 10 + Math.random() * 30;
            collectibles.push(createCollectible(newZ));
          }
        }

        // Scroll obstacles
        for (let i = obstacles.length - 1; i >= 0; i--) {
          const o = obstacles[i];
          o.position.z += scrollSpeed;

          // Check collision
          const dist = o.position.distanceTo(player.position);
          if (dist < 1.2) {
            // Game Over!
            state.gameOver = true;
            setGameOver(true);
            setStarted(false);
            // Flash effect
            const flash = new THREE.Mesh(
              new THREE.PlaneGeometry(20, 10),
              new THREE.MeshBasicMaterial({
                color: 0xc9a84c,
                transparent: true,
                opacity: 0.4,
              })
            );
            flash.position.z = -5;
            scene.add(flash);
            setTimeout(() => scene.remove(flash), 300);
          }

          if (o.position.z > 10) {
            scene.remove(o);
            obstacles.splice(i, 1);
            const newZ = 10 + Math.random() * 30;
            obstacles.push(createObstacle(newZ));
          }
        }

        // Spawn new collectibles/obstacles as needed
        if (collectibles.length < 8 && Math.random() > 0.95) {
          const newZ = 10 + Math.random() * 20;
          collectibles.push(createCollectible(newZ));
        }
        if (obstacles.length < 5 && Math.random() > 0.97) {
          const newZ = 10 + Math.random() * 20;
          obstacles.push(createObstacle(newZ));
        }
      }

      // Rotate stars slowly
      stars.rotation.y += 0.0005;

      // Radar-like sweep effect on grid
      gridHelper.rotation.z += 0.002;

      renderer.render(scene, camera);
    }

    animate();

    // ── Cleanup ──
    return () => {
      cancelAnimationFrame(state.animId);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("resize", onResize);
      for (const m of tunnelSegments) scene.remove(m);
      for (const m of collectibles) scene.remove(m);
      for (const m of obstacles) scene.remove(m);
      scene.remove(player);
      scene.remove(gridHelper);
      scene.remove(stars);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [startGame]);

  return (
    <div className="relative">
      {/* Game Container */}
      <div
        ref={mountRef}
        className="relative w-full overflow-hidden rounded-lg"
        style={{
          minHeight: "280px",
          border: "1px solid #00ff41",
          boxShadow: "0 0 20px rgba(0,255,65,0.1), inset 0 0 20px rgba(0,255,65,0.05)",
        }}
      >
        {/* CRT scan-line overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px)",
          }}
        />

        {/* Terminal overlay */}
        <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
          <div className="flex items-center gap-2 px-3 py-1.5 text-[10px] font-mono text-[var(--color-green-term)] opacity-60">
            <span className="w-2 h-2 rounded-full bg-[var(--color-green-term)] animate-pulse" />
            <span>DATA_RUNNER v1.0</span>
          </div>
        </div>

        {/* HUD overlay */}
        <div className="absolute top-2 right-3 z-20 pointer-events-none">
          <span className="text-sm font-mono text-[var(--color-green-term)]">
            <span className="opacity-50">$ </span>SCORE: {score}
          </span>
        </div>

        {/* Start / Game Over overlay */}
        {(!started || gameOver) && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-black/60">
            <div className="text-center font-mono">
              {gameOver ? (
                <>
                  <p className="text-xl text-[var(--color-gold)] mb-1">// SYSTEM OFFLINE</p>
                  <p className="text-sm text-[var(--color-green-term)] mb-3">
                    SCORE: {score}
                  </p>
                  <button
                    onClick={() => {
                      // Trigger restart via space press simulation
                      window.dispatchEvent(new KeyboardEvent("keydown", { key: " " }));
                    }}
                    className="px-4 py-2 text-sm text-[var(--color-green-term)] border border-[var(--color-green-term)] rounded hover:bg-[var(--color-green-term)] hover:text-black transition-colors cursor-pointer"
                  >
                    $ ./restart.sh
                  </button>
                </>
              ) : (
                <>
                  <p className="text-sm text-[var(--color-amber-text)] mb-1 opacity-70">
                    // TERMINAL GAME MODULE
                  </p>
                  <p className="text-lg text-[var(--color-green-term)] mb-2">
                    DATA RUNNER
                  </p>
                  <div className="text-xs text-[var(--color-amber-text)] opacity-60 space-y-0.5 mb-4">
                    <p>▲ ▼ arrow keys or W A S D to steer</p>
                    <p>Collect ● green nodes — avoid █ amber walls</p>
                  </div>
                  <button
                    onClick={startGame}
                    className="px-4 py-2 text-sm text-[var(--color-green-term)] border border-[var(--color-green-term)] rounded hover:bg-[var(--color-green-term)] hover:text-black transition-colors cursor-pointer"
                  >
                    $ ./run.sh
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
