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
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage: "url('/hero-studio.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Base gradient — warm dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 15% 85%, rgba(61,46,28,0.77) 0%, rgba(26,23,20,0.87) 50%)",
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
          background: "radial-gradient(circle, rgba(201,168,124,0.28) 0%, transparent 65%)",
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
      ].map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full will-change-transform"
          style={{
            width: p.size, height: p.size, left: p.x, top: p.y,
            background: "rgba(201,168,124,0.6)",
            boxShadow: "0 0 8px rgba(201,168,124,0.25)",
            animation: reducedMotion ? "none" : `pollenFloat ${p.dur} ${p.delay} ease-in-out infinite`,
          }}
        />
      ))}

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 40% 50%, transparent 25%, rgba(26,23,20,0.55) 100%)",
        }}
      />

      {/* Single gold line — left side only */}
      <div
        className="absolute bottom-[15%] left-[6%] h-px"
        style={{
          width: "20vw", maxWidth: "250px",
          background: "linear-gradient(90deg, transparent, rgba(201,168,124,0.45), transparent)",
          animation: anim("linePulse", "8s"),
        }}
      />

      <style>{`
        @keyframes orbDrift1 { 0%,100% { transform: translate(0,0) scale(1); } 33% { transform: translate(-4vw,5vh) scale(1.05); } 66% { transform: translate(3vw,-3vh) scale(0.97); } }
        @keyframes orbDrift2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(6vw,-4vh) scale(1.08); } }

        @keyframes pollenFloat { 0%,100% { transform: translate(0,0); opacity:.4; } 33% { transform: translate(10px,-20px); opacity:.7; } 66% { transform: translate(-8px,-12px); opacity:.5; } }
        @keyframes linePulse { 0%,100% { opacity:.2; transform: scaleX(.8); } 50% { opacity:.45; transform: scaleX(1); } }
      `}</style>
    </div>
  );
}
