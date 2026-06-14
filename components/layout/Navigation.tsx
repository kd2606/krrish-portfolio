"use client";

import { useEffect, useState } from "react";
import { navLinks, heroData } from "@/lib/data";

export default function Navigation() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const lightIds = ["clubs", "experience", "certifications"];
    const check = () => {
      const els = lightIds
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];
      let light = false;
      els.forEach((s) => {
        const r = s.getBoundingClientRect();
        if (r.top <= 52 && r.bottom > 52) light = true;
      });
      setIsLight(light);
    };
    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, []);

  const base =
    "fixed top-0 left-0 right-0 z-50 h-[52px] flex items-center justify-between px-6 border-b backdrop-blur-[20px] backdrop-saturate-[180%] transition-colors duration-300";
  const theme = isLight
    ? "bg-white/70 border-black/10"
    : "bg-black/70 border-white/10";

  return (
    <nav className={`${base} ${theme}`}>
      {/* Logo */}
      <div
        className={`font-display font-bold text-[1.05rem] tracking-[-0.02em] ${
          isLight ? "text-black" : "text-white"
        }`}
      >
        Krrish Dewangan
      </div>

      {/* Center links */}
      <div className="hidden lg:flex gap-8 absolute left-1/2 -translate-x-1/2">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`text-[0.78rem] font-medium tracking-[0.01em] transition-colors duration-200 ${
              isLight
                ? "text-black/70 hover:text-black"
                : "text-white/80 hover:text-white"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href={`mailto:${heroData.email}`}
        className={`text-[0.78rem] font-semibold px-[18px] py-[7px] rounded-full border transition-all duration-200 ${
          isLight
            ? "border-apple-blue text-apple-blue hover:bg-apple-blue hover:text-white"
            : "border-white/30 text-white hover:bg-white/15"
        }`}
      >
        Hire Me
      </a>
    </nav>
  );
}
