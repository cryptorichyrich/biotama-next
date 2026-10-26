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

      <div className="fold-wrap">
        <div className="fold-cover" aria-hidden="false">
          <div className="fold-cover-frame">
            <div className="fold-cover-screen">
              <img src={shot.mobile} alt={`${shot.name} di cover screen iPhone Fold`} loading="lazy" />
              <span className="fold-cover-island" aria-hidden="true">
                <span className="fold-cover-lens" />
              </span>
            </div>
          </div>
          <span className="fold-cover-btn fold-cover-power" aria-hidden="true" />
          <span className="fold-cover-btn fold-cover-vol" aria-hidden="true" />
        </div>

        <div
          className="fold-open"
          role="img"
          aria-label={`${shot.name} di layar lipat iPhone Fold`}
        >
          <div className="fold-half fold-left">
            <div className="fold-half-frame">
              <div
                className="fold-half-screen"
                style={{ backgroundImage: `url(${shot.desktop})` }}
              />
            </div>
          </div>
          <div className="fold-half fold-right">
            <div className="fold-half-frame">
              <div
                className="fold-half-screen"
                style={{ backgroundImage: `url(${shot.desktop})` }}
              />
            </div>
          </div>
          <span className="fold-crease" aria-hidden="true" />
          <span className="fold-hinge-line" aria-hidden="true" />
          <span className="fold-cam" aria-hidden="true" />
          <span className="fold-glare" aria-hidden="true" />
        </div>
      </div>

      <div className="apple-caption">
        <span>{shot.name} · MacBook Pro &amp; iPhone Fold</span>
        {shot.href ? <a href={shot.href}>Lihat studi kasus <span aria-hidden="true">→</span></a> : null}
      </div>
    </div>
  );
}
