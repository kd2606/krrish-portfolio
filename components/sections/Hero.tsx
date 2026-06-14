import { heroData, heroStats } from "@/lib/data";

export default function Hero() {
  const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

  return (
    <section
      id="hero"
      className="relative min-h-svh flex flex-col justify-center items-center overflow-hidden bg-black"
      style={{ padding: "120px 24px 80px" }}
    >
      {/* ── Animated Orbs ── */}
      <div
        className="absolute rounded-full pointer-events-none will-change-transform w-[700px] h-[700px] -top-[15%] -left-[10%]"
        style={{
          background:
            "radial-gradient(circle, rgba(10,132,255,0.18) 0%, transparent 70%)",
          filter: "blur(120px)",
          animation: "orbDrift 18s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none will-change-transform w-[500px] h-[500px] bottom-0 -right-[5%]"
        style={{
          background:
            "radial-gradient(circle, rgba(191,90,242,0.12) 0%, transparent 70%)",
          filter: "blur(120px)",
          animation: "orbDrift 14s ease-in-out infinite alternate-reverse",
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none will-change-transform w-[300px] h-[300px] top-1/2 left-1/2"
        style={{
          background:
            "radial-gradient(circle, rgba(50,215,75,0.08) 0%, transparent 70%)",
          filter: "blur(120px)",
          animation: "orbDrift 22s ease-in-out infinite alternate",
        }}
      />

      {/* ── Noise overlay ── */}
      <div
        className="absolute inset-0 z-[1] opacity-50 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />

      {/* ── Hero Content ── */}
      <div className="relative z-[2] text-center max-w-[900px]">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 pl-[6px] pr-4 py-[6px] rounded-full bg-white/[0.06] border border-white/[0.14] font-mono text-[0.68rem] text-white/60 tracking-[0.06em] mb-10"
          style={{
            opacity: 0,
            animation: `fadeUp 0.6s 0.1s ${ease} forwards`,
          }}
        >
          <span
            className="w-[7px] h-[7px] rounded-full bg-apple-green"
            style={{
              boxShadow: "0 0 6px #32d74b",
              animation: "pulse 2s infinite",
            }}
          />
          {heroData.badge}
        </div>

        {/* Name */}
        <h1
          className="font-display font-extrabold leading-[0.92] tracking-[-0.04em] mb-8"
          style={{
            fontSize: "clamp(4rem, 12vw, 9rem)",
            opacity: 0,
            animation: `fadeUp 0.8s 0.25s ${ease} forwards`,
          }}
        >
          <span className="block text-white">{heroData.firstName}</span>
          <span
            className="block bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #fff 0%, rgba(10,132,255,1) 50%, rgba(191,90,242,0.9) 100%)",
            }}
          >
            {heroData.lastName}
          </span>
        </h1>

        {/* Currently Building Badge */}
        {heroData.currentlyBuilding && (
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.1] font-mono text-[0.75rem] text-white/70 mb-8 overflow-hidden relative"
            style={{
              opacity: 0,
              animation: `fadeUp 0.75s 0.35s ${ease} forwards`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
            {heroData.currentlyBuilding}
          </div>
        )}

        {/* Subtitle */}
        <p
          className="font-light text-gray-1 mb-12 leading-relaxed"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            opacity: 0,
            animation: `fadeUp 0.7s 0.4s ${ease} forwards`,
          }}
        >
          <em className="text-white/80 not-italic font-medium">
            {heroData.subtitle.highlights[0]}
          </em>
          {" · "}
          {heroData.subtitle.text}{" "}
          <em className="text-white/80 not-italic font-medium">
            {heroData.subtitle.emphasis}
          </em>
        </p>

        {/* CTAs */}
        <div
          className="flex justify-center gap-3 flex-wrap"
          style={{
            opacity: 0,
            animation: `fadeUp 0.7s 0.55s ${ease} forwards`,
          }}
        >
          <a
            href="/Krrish_Dewangan_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-[30px] py-[15px] rounded-full bg-white/5 border border-white/20 text-white font-medium text-[0.9rem] transition-all duration-200 hover:bg-white/10 hover:scale-[1.02]"
          >
            Download Resume ↓
          </a>
          {heroData.ctas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              {...(cta.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={
                cta.variant === "primary"
                  ? "px-[30px] py-[15px] rounded-full bg-apple-blue text-white font-semibold text-[0.9rem] tracking-[0.01em] transition-all duration-200 hover:brightness-110 hover:scale-[1.02]"
                  : "px-[30px] py-[15px] rounded-full bg-white/[0.08] border border-white/20 text-white font-medium text-[0.9rem] transition-all duration-200 hover:bg-white/[0.13] hover:scale-[1.02]"
              }
              style={
                cta.variant === "primary"
                  ? { boxShadow: "0 0 40px rgba(10,132,255,0.3)" }
                  : undefined
              }
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>

      {/* ── Stats Strip ── */}
      <div
        className="lg:absolute lg:bottom-12 lg:left-1/2 lg:-translate-x-1/2 relative mt-16 lg:mt-0 flex flex-wrap justify-center z-[2]"
        style={{
          opacity: 0,
          animation: `fadeUp 0.7s 0.75s ${ease} forwards`,
        }}
      >
        {heroStats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-9 text-center ${
              i < heroStats.length - 1 ? "border-r border-white/10" : ""
            }`}
          >
            <div
              className="font-display text-[2rem] font-bold bg-clip-text text-transparent leading-none"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #fff, rgba(255,255,255,0.6))",
              }}
            >
              {stat.value}
            </div>
            <div className="text-[0.72rem] text-gray-1 mt-[5px]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-[6px] opacity-40">
        <div
          className="w-px h-8"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)",
            animation: "scrollLine 1.8s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
