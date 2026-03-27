"use client";

import { useEffect, useState } from "react";

export function HeroBackground() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const anim = (name: string, duration: string) =>
    reducedMotion ? "none" : `${name} ${duration} ease-in-out infinite`;


  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Studio photo — subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.60]"
        style={{
          backgroundImage: "url('/hero-cover.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Base gradient — warm dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 15% 85%, rgba(59,58,74,0.83) 0%, rgba(30,29,40,0.93) 50%)",
        }}
      />

      {/* Film grain — bolder */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='a'%3E%3CfeTurbulence baseFrequency='.65 .75' stitchTiles='stitch' type='fractalNoise'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23a)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Single warm orb — backlights the product area (right side) */}
      <div
        className="absolute rounded-full will-change-transform"
        style={{
          width: "50vw", height: "50vw", maxWidth: "700px", maxHeight: "700px",
          top: "10%", right: "-5%",
          background: "radial-gradient(circle, rgba(154,139,181,0.28) 0%, transparent 65%)",
          filter: "blur(80px)",
          animation: anim("orbDrift1", "25s"),
        }}
      />

      {/* Subtle left ambient warmth */}
      <div
        className="absolute rounded-full will-change-transform"
        style={{
          width: "40vw", height: "40vw", maxWidth: "500px", maxHeight: "500px",
          bottom: "5%", left: "-5%",
          background: "radial-gradient(circle, rgba(74,63,53,0.3) 0%, transparent 65%)",
          filter: "blur(90px)",
          animation: anim("orbDrift2", "30s"),
        }}
      />

      {/* 3 pollen particles — minimal */}
      {[
        { x: "18%", y: "30%", size: 2.5, dur: "20s", delay: "1s" },
        { x: "70%", y: "60%", size: 2, dur: "24s", delay: "3s" },
        { x: "45%", y: "20%", size: 1.5, dur: "18s", delay: "5s" },
        { x: "82%", y: "35%", size: 2, dur: "22s", delay: "2s" },
        { x: "30%", y: "75%", size: 1.8, dur: "26s", delay: "4s" },
        { x: "58%", y: "45%", size: 2.2, dur: "19s", delay: "6s" },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full will-change-transform"
          style={{
            width: p.size, height: p.size, left: p.x, top: p.y,
            background: "rgba(154,139,181,0.6)",
            boxShadow: "0 0 8px rgba(154,139,181,0.25)",
            animation: reducedMotion ? "none" : `pollenFloat ${p.dur} ${p.delay} ease-in-out infinite`,
          }}
        />
      ))}

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 40% 50%, transparent 25%, rgba(30,29,40,0.55) 100%)",
        }}
      />

      {/* Single gold line — left side only */}
      <div
        className="absolute bottom-[15%] left-[6%] h-px"
        style={{
          width: "20vw", maxWidth: "250px",
          background: "linear-gradient(90deg, transparent, rgba(154,139,181,0.45), transparent)",
          animation: anim("linePulse", "8s"),
        }}
      />

    </div>
  );
}
