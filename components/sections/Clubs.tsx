import ScrollReveal from "@/components/ui/ScrollReveal";
import { clubs } from "@/lib/data";

const tileStyles = [
  {
    bg: "bg-black",
    accentGradient:
      "radial-gradient(circle, rgba(10,132,255,0.25), transparent 70%)",
    accentPos: "-top-[60px] -right-[60px]",
    eyebrowColor: "text-apple-blue/90",
    logoStyle:
      "bg-gradient-to-br from-apple-blue/[0.12] to-apple-blue/[0.25] border border-apple-blue/40",
    emoji: "⌬",
  },
  {
    bg: "bg-gradient-to-br from-[#0a0a2e] to-[#0d1a3a]",
    accentGradient:
      "radial-gradient(circle, rgba(50,215,75,0.2), transparent 70%)",
    accentPos: "-bottom-[40px] -left-[40px]",
    eyebrowColor: "text-apple-green/90",
    logoStyle:
      "bg-gradient-to-br from-apple-green/[0.12] to-apple-green/[0.25] border border-apple-green/40",
    emoji: "⬡",
  },
];

export default function Clubs() {
  return (
    <section
      id="clubs"
      className="relative z-10 bg-off-white text-black py-[120px]"
    >
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-16">
          <p className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-apple-blue mb-4">
            Campus Leadership
          </p>
          <h2
            className="font-display font-extrabold text-black leading-[1.05] tracking-[-0.03em] mb-2"
            style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)" }}
          >
            Two Clubs. One Mission.
            <span className="block text-gray-1 font-normal text-[0.55em] mt-2 tracking-normal">
              Building the technical community at Amity University
            </span>
          </h2>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {clubs.map((club, i) => {
            const style = tileStyles[i];
            return (
              <ScrollReveal key={club.id} delay={i * 70}>
                <div
                  className={`${style.bg} text-white rounded-3xl p-[52px_48px] relative overflow-hidden transition-transform duration-500 hover:scale-[1.015] cursor-default`}
                  style={{
                    transitionTimingFunction:
                      "cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  {/* Accent glow */}
                  <div
                    className={`absolute w-[300px] h-[300px] rounded-full pointer-events-none ${style.accentPos}`}
                    style={{
                      background: style.accentGradient,
                      filter: "blur(80px)",
                    }}
                  />

                  {/* Logo */}
                  <div
                    className={`w-14 h-14 rounded-[14px] flex items-center justify-center text-[1.6rem] mb-8 relative z-[1] ${style.logoStyle}`}
                  >
                    {style.emoji}
                  </div>

                  {/* Content */}
                  <p
                    className={`font-mono text-[0.65rem] tracking-[0.15em] uppercase mb-[10px] relative z-[1] ${style.eyebrowColor}`}
                  >
                    {club.eyebrow}
                  </p>
                  <h3 className="font-display text-[1.8rem] font-extrabold leading-[1.1] tracking-[-0.025em] mb-2 relative z-[1]">
                    {club.name}
                  </h3>
                  <p className="text-[0.88rem] text-white/50 mb-6 relative z-[1]">
                    {club.organization} · {club.role}
                  </p>
                  <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] bg-white/[0.07] border border-white/[0.12] px-3 py-[5px] rounded-full mb-7 text-white/50 relative z-[1]">
                    ⬤&nbsp; {club.since}
                  </span>

                  {/* Bullets */}
                  <ul className="relative z-[1]">
                    {club.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="text-[0.88rem] text-white/65 leading-relaxed py-[10px] border-t border-white/[0.07] flex items-start gap-3"
                      >
                        <span className="text-white/20 shrink-0 mt-px">→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
