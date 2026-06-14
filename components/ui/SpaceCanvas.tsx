"use client";

import { useEffect, useRef } from "react";

// ═══════════════════════════════════════════════════════════
// SpaceCanvas — Interstellar background animation layer
// Migrated from vanilla IIFEs → React hooks with full cleanup.
// Three systems: Starfield, Shooting Stars, Wormhole.
// ═══════════════════════════════════════════════════════════

/* ── Type definitions ─────────────────────────────────────── */
interface Star {
  x: number;
  y: number;
  r: number;
  alpha: number;
  speed: number;
  twinkle: number;
  twinkleSpeed: number;
  depth: number;
  color: string;
}

interface ShootingStar {
  x0: number;
  y0: number;
  rad: number;
  len: number;
  speed: number;
  prog: number;
}

export default function SpaceCanvas() {
  const starfieldRef = useRef<HTMLCanvasElement>(null);
  const shooterRef = useRef<HTMLCanvasElement>(null);
  const wormholeRef = useRef<HTMLCanvasElement>(null);

  // ─── 1. PARALLAX STARFIELD ──────────────────────────────
  useEffect(() => {
    const canvas = starfieldRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const NUM_STARS = 320;
    let W = 0;
    let H = 0;
    let stars: Star[] = [];
    const mouse = { x: 0, y: 0 };
    let animId = 0;

    function mkStar(): Star {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.4 + 0.2,
        alpha: Math.random() * 0.7 + 0.15,
        speed: Math.random() * 0.18 + 0.04,
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.025 + 0.008,
        depth: Math.random() * 3 + 1,
        color: (() => {
          const v = Math.random();
          if (v < 0.12) return "#7ec8ff"; // blue-white
          if (v < 0.22) return "#ffd6a5"; // amber
          if (v < 0.28) return "#c8a0ff"; // purple
          return "#ffffff";
        })(),
      };
    }

    function resize() {
      W = canvas!.width = window.innerWidth;
      H = canvas!.height = window.innerHeight;
    }

    function init() {
      resize();
      stars = Array.from({ length: NUM_STARS }, mkStar);
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);
      const scroll = window.scrollY;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.twinkle += s.twinkleSpeed;
        const a = s.alpha * (0.6 + 0.4 * Math.sin(s.twinkle));

        // Parallax from mouse position + scroll depth
        const parallaxX = ((mouse.x - W / 2) / (W / 2)) * s.depth * 8;
        const parallaxY =
          ((mouse.y - H / 2) / (H / 2)) * s.depth * 4 +
          scroll * s.depth * 0.02;

        const sx = (s.x + parallaxX + W) % W;
        const sy = ((s.y - (parallaxY % H) + H) % H);

        ctx!.save();
        ctx!.beginPath();
        ctx!.arc(sx, sy, s.r, 0, Math.PI * 2);
        ctx!.shadowBlur = s.r > 1 ? 6 : 0;
        ctx!.shadowColor = s.color;
        ctx!.fillStyle = s.color;
        ctx!.globalAlpha = a;
        ctx!.fill();
        ctx!.restore();
      }

      animId = requestAnimationFrame(draw);
    }

    const handleResize = () => {
      resize();
      stars = Array.from({ length: NUM_STARS }, mkStar);
    };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    init();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // ─── 2. SHOOTING STARS ──────────────────────────────────
  useEffect(() => {
    const canvas = shooterRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let animId = 0;
    let timerId: ReturnType<typeof setTimeout>;
    let active: ShootingStar[] = [];

    function resize() {
      W = canvas!.width = window.innerWidth;
      H = canvas!.height = window.innerHeight;
    }

    function spawnShooter() {
      const angle = Math.random() * 30 + 15; // 15-45 degrees
      active.push({
        x0: Math.random() * W * 0.6,
        y0: Math.random() * H * 0.3,
        rad: (angle * Math.PI) / 180,
        len: Math.random() * 180 + 80,
        speed: Math.random() * 5 + 4,
        prog: 0,
      });
    }

    function scheduleShooter() {
      spawnShooter();
      timerId = setTimeout(scheduleShooter, Math.random() * 4000 + 3000);
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);

      // Update & render all active shooting stars
      for (let i = active.length - 1; i >= 0; i--) {
        const s = active[i];
        s.prog += s.speed;

        const headX = s.x0 + Math.cos(s.rad) * s.prog;
        const headY = s.y0 + Math.sin(s.rad) * s.prog;
        const tailX = s.x0 + Math.cos(s.rad) * Math.max(0, s.prog - s.len);
        const tailY = s.y0 + Math.sin(s.rad) * Math.max(0, s.prog - s.len);

        const grad = ctx!.createLinearGradient(tailX, tailY, headX, headY);
        grad.addColorStop(0, "rgba(255,255,255,0)");
        grad.addColorStop(0.7, "rgba(180,220,255,0.6)");
        grad.addColorStop(1, "rgba(255,255,255,0.95)");

        ctx!.beginPath();
        ctx!.moveTo(tailX, tailY);
        ctx!.lineTo(headX, headY);
        ctx!.strokeStyle = grad;
        ctx!.lineWidth = 1.5;
        ctx!.shadowBlur = 8;
        ctx!.shadowColor = "#9ecfff";
        ctx!.stroke();

        // Remove when fully traversed
        if (s.prog >= s.len * 2) {
          active.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(draw);
    }

    const handleResize = () => resize();

    window.addEventListener("resize", handleResize);
    resize();
    timerId = setTimeout(scheduleShooter, 1500);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(timerId);
      window.removeEventListener("resize", handleResize);
      active = [];
    };
  }, []);

  // ─── 3. WORMHOLE (Accretion disk + gravitational lensing) ─
  useEffect(() => {
    const canvas = wormholeRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const S = 340;
    canvas.width = S;
    canvas.height = S;
    const cx = S / 2;
    const cy = S / 2;
    const R = 110;
    let t = 0;
    let animId = 0;

    function drawWormhole() {
      ctx!.clearRect(0, 0, S, S);
      t += 0.008;

      // ── Accretion disk (outer glow rings) ──
      for (let i = 6; i >= 0; i--) {
        const rOuter = R + 18 + i * 14;
        const rInner = R + 14 + i * 14;
        const alpha = ((7 - i) / 7) * 0.22;

        // Color shift: inner = orange/gold → outer = blue/purple
        const ratio = i / 6;
        const red = Math.round(255 * (1 - ratio * 0.5));
        const green = Math.round(140 * (1 - ratio * 0.7));
        const blue = Math.round(60 + ratio * 195);

        ctx!.beginPath();
        // Ellipse fakes 3D disk tilt
        ctx!.ellipse(cx, cy + 10, rOuter, rOuter * 0.28, 0, 0, Math.PI * 2);
        ctx!.strokeStyle = `rgba(${red},${green},${blue},${alpha})`;
        ctx!.lineWidth = rOuter - rInner;
        ctx!.shadowBlur = 18;
        ctx!.shadowColor = `rgba(${red},${green},${blue},0.5)`;
        ctx!.stroke();
      }

      // ── Bright accretion hot spot ──
      const hx = cx + R * 0.85 * Math.cos(t * 0.7);
      const hy = cy + 10 + R * 0.25 * Math.sin(t * 0.7);
      const hotGrad = ctx!.createRadialGradient(hx, hy, 0, hx, hy, 28);
      hotGrad.addColorStop(0, "rgba(255,220,120,0.85)");
      hotGrad.addColorStop(0.5, "rgba(255,140,60,0.3)");
      hotGrad.addColorStop(1, "rgba(255,80,20,0)");
      ctx!.beginPath();
      ctx!.arc(hx, hy, 28, 0, Math.PI * 2);
      ctx!.fillStyle = hotGrad;
      ctx!.shadowBlur = 30;
      ctx!.shadowColor = "#ffaa44";
      ctx!.fill();

      // ── Black hole center ──
      const centerGrad = ctx!.createRadialGradient(cx, cy, 0, cx, cy, R);
      centerGrad.addColorStop(0, "#000000");
      centerGrad.addColorStop(0.6, "#000000");
      centerGrad.addColorStop(0.82, "rgba(10,5,30,0.9)");
      centerGrad.addColorStop(1, "rgba(0,0,0,0)");
      ctx!.beginPath();
      ctx!.arc(cx, cy, R, 0, Math.PI * 2);
      ctx!.fillStyle = centerGrad;
      ctx!.shadowBlur = 0;
      ctx!.fill();

      // ── Photon ring (bright thin ring at event horizon) ──
      ctx!.beginPath();
      ctx!.arc(cx, cy, R + 1, 0, Math.PI * 2);
      ctx!.strokeStyle = "rgba(255,200,80,0.55)";
      ctx!.lineWidth = 2.5;
      ctx!.shadowBlur = 18;
      ctx!.shadowColor = "rgba(255,180,60,0.9)";
      ctx!.stroke();

      // ── Gravitational lensing arc (top) ──
      ctx!.beginPath();
      ctx!.ellipse(
        cx,
        cy - 8,
        R + 6,
        R * 0.18,
        0,
        Math.PI * 1.1,
        Math.PI * 1.9
      );
      ctx!.strokeStyle = "rgba(255,210,100,0.45)";
      ctx!.lineWidth = 3;
      ctx!.shadowBlur = 22;
      ctx!.shadowColor = "rgba(255,200,80,0.7)";
      ctx!.stroke();

      // ── Rotating energy particles on ring ──
      for (let i = 0; i < 5; i++) {
        const angle = t * (1.2 + i * 0.15) + (i * Math.PI * 2) / 5;
        const px = cx + (R + 2) * Math.cos(angle);
        const py = cy + (R + 2) * 0.3 * Math.sin(angle);
        ctx!.beginPath();
        ctx!.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx!.fillStyle =
          i % 2 === 0
            ? "rgba(255,220,100,0.9)"
            : "rgba(180,220,255,0.8)";
        ctx!.shadowBlur = 12;
        ctx!.shadowColor = ctx!.fillStyle as string;
        ctx!.fill();
      }

      // ── Stars inside the wormhole ──
      for (let i = 0; i < 6; i++) {
        const a2 = t * 0.3 + i * 1.05;
        const dist = 30 + i * 10;
        const dir = i % 2 === 0 ? 1 : -0.7;
        const wx = cx + dist * Math.cos(a2 * dir);
        const wy = cy + dist * Math.sin(a2 * dir);
        if ((wx - cx) ** 2 + (wy - cy) ** 2 < (R - 8) ** 2) {
          ctx!.beginPath();
          ctx!.arc(wx, wy, 1.2, 0, Math.PI * 2);
          ctx!.fillStyle = "rgba(200,230,255,0.7)";
          ctx!.shadowBlur = 5;
          ctx!.fill();
        }
      }

      // ── Subtle gravitational field lines ──
      ctx!.shadowBlur = 0;
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2 + t * 0.12;
        ctx!.beginPath();
        ctx!.moveTo(
          cx + R * Math.cos(angle),
          cy + R * Math.sin(angle) * 0.3
        );
        ctx!.bezierCurveTo(
          cx + (R + 40) * Math.cos(angle + 0.3),
          cy + (R + 40) * Math.sin(angle + 0.3) * 0.3,
          cx + (R + 55) * Math.cos(angle + 0.5),
          cy + (R + 55) * Math.sin(angle + 0.5) * 0.22,
          cx + (R + 70) * Math.cos(angle + 0.6),
          cy + (R + 70) * Math.sin(angle + 0.6) * 0.2
        );
        ctx!.strokeStyle = "rgba(255,180,60,0.08)";
        ctx!.lineWidth = 1;
        ctx!.stroke();
      }

      animId = requestAnimationFrame(drawWormhole);
    }

    drawWormhole();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  // ─── RENDER ─────────────────────────────────────────────
  return (
    <div
      className="fixed inset-0 pointer-events-none bg-black"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      {/* Layer 0: Parallax starfield */}
      <canvas
        ref={starfieldRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Layer 1: Shooting stars */}
      <canvas
        ref={shooterRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      {/* Layer 2: Wormhole — positioned to match hero viewport center-right */}
      <canvas
        ref={wormholeRef}
        className="absolute pointer-events-none"
        style={{
          width: 340,
          height: 340,
          top: "50vh",
          right: "5%",
          transform: "translateY(-50%)",
          zIndex: 1,
          opacity: 0.45,
        }}
      />
    </div>
  );
}
