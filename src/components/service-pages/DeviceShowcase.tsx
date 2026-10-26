"use client";

import { useEffect, useRef } from "react";

export type DeviceShot = {
  desktop: string;
  mobile: string;
  name: string;
  href?: string;
};

export default function DeviceShowcase({ shot, accent }: { shot: DeviceShot; accent: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.18 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const move = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (event.clientX - r.left) / r.width - 0.5;
    const py = (event.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--ry", `${px * 7}deg`);
    el.style.setProperty("--rx", `${-py * 5}deg`);
    el.style.setProperty("--mx", `${px * 22}px`);
    el.style.setProperty("--my", `${py * 16}px`);
  };

  const leave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--mx", "0px");
    el.style.setProperty("--my", "0px");
  };

  return (
    <div ref={ref} className="device-stage" onMouseMove={move} onMouseLeave={leave}>
      <div className="device-glow" style={{ background: accent }} aria-hidden="true" />

      <div className="macbook-wrap">
        <div className="macbook">
          <div className="macbook-lid">
            <span className="macbook-cam" aria-hidden="true" />
            <div className="macbook-screen">
              <img src={shot.desktop} alt={`${shot.name} tampilan desktop`} loading="lazy" />
            </div>
          </div>
          <div className="macbook-base" aria-hidden="true">
            <span />
          </div>
        </div>
      </div>

      <div className="iphone-wrap">
        <div className="iphone">
          <div className="iphone-screen">
            <img src={shot.mobile} alt={`${shot.name} tampilan mobile`} loading="lazy" />
          </div>
          <span className="iphone-island" aria-hidden="true" />
        </div>
      </div>

      <div className="device-caption">
        <span>{shot.name}</span>
        {shot.href ? (
          <a href={shot.href}>
            Lihat studi kasus <span aria-hidden="true">→</span>
          </a>
        ) : null}
      </div>
    </div>
  );
}
