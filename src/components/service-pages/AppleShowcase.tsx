"use client";

import { useEffect, useRef } from "react";

export type AppleShot = {
  desktop: string;
  mobile: string;
  name: string;
  href?: string;
};

export default function AppleShowcase({ shot, accent }: { shot: AppleShot; accent: string }) {
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
      { threshold: 0.15 },
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
    el.style.setProperty("--ry", `${px * 6}deg`);
    el.style.setProperty("--rx", `${-py * 4.5}deg`);
    el.style.setProperty("--mx", `${px * 18}px`);
    el.style.setProperty("--my", `${py * 12}px`);
  };

  const leave = () => {
    const el = ref.current;
    if (!el) return;
    ["--ry", "--rx", "--mx", "--my"].forEach((k) => el.style.setProperty(k, k === "--ry" || k === "--rx" ? "0deg" : "0px"));
  };

  return (
    <div ref={ref} className="apple-stage" onMouseMove={move} onMouseLeave={leave}>
      <div className="apple-glow" style={{ background: accent }} aria-hidden="true" />

      <div className="mb-wrap">
        <div className="mb-pro">
          <div className="mb-lid">
            <div className="mb-bezel">
              <img src={shot.desktop} alt={`${shot.name} di MacBook Pro`} loading="lazy" />
              <span className="mb-notch" aria-hidden="true">
                <span className="mb-cam" />
              </span>
              <span className="mb-glare" aria-hidden="true" />
            </div>
            <span className="mb-brand" aria-hidden="true">MacBook Pro</span>
          </div>
          <div className="mb-base" aria-hidden="true">
            <span className="mb-cutout" />
            <span className="mb-foot mb-foot-l" />
            <span className="mb-foot mb-foot-r" />
          </div>
        </div>
      </div>

      <div className="duo-wrap">
        <div className="iphone-back" aria-hidden="true">
          <div className="ip-camera">
            <span className="ip-lens ip-lens-1" />
            <span className="ip-lens ip-lens-2" />
            <span className="ip-lens ip-lens-3" />
            <span className="ip-flash" />
          </div>
          <span className="ip-back-line" />
        </div>

        <div className="iphone-front">
          <div className="ip-frame">
            <div className="ip-screen">
              <img src={shot.mobile} alt={`${shot.name} di iPhone 17 Pro Duo`} loading="lazy" />
              <span className="ip-island" aria-hidden="true"><span className="ip-lens-sm" /></span>
              <span className="ip-glare" aria-hidden="true" />
              <span className="ip-home" aria-hidden="true" />
            </div>
          </div>
          <span className="ip-btn ip-btn-action" aria-hidden="true" />
          <span className="ip-btn ip-btn-vol" aria-hidden="true" />
          <span className="ip-btn ip-btn-power" aria-hidden="true" />
        </div>
      </div>

      <div className="apple-caption">
        <span>{shot.name} · MacBook Pro &amp; iPhone 17 Pro Duo</span>
        {shot.href ? <a href={shot.href}>Lihat studi kasus <span aria-hidden="true">→</span></a> : null}
      </div>
    </div>
  );
}
