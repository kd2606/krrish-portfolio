import ScrollReveal from "@/components/ui/ScrollReveal";
import { certifications } from "@/lib/data";

const badgeColors: Record<string, string> = {
  blue: "from-apple-blue/10 to-transparent border-apple-blue/20 text-apple-blue",
  green: "from-apple-green/10 to-transparent border-apple-green/20 text-apple-green",
  gold: "from-apple-gold/10 to-transparent border-apple-gold/20 text-apple-gold",
  purple: "from-apple-purple/10 to-transparent border-apple-purple/20 text-apple-purple",
  red: "from-apple-pink/10 to-transparent border-apple-pink/20 text-apple-pink",
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative z-10 bg-off-black py-[120px]">
      <div className="max-w-[1200px] mx-auto px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-apple-blue mb-4">
            Validation
          </p>
          <h2
            className="font-display font-extrabold text-white leading-[1.05] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)" }}
          >
            Certifications & Awards.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {certifications.map((cert, i) => {
            const colorClass = badgeColors[cert.badgeColor] || "from-white/10 to-transparent border-white/20 text-white";
            return (
              <ScrollReveal key={cert.id} delay={i * 40} className="h-full">
                {cert.postUrl ? (
                  <a
                    href={cert.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative block h-full flex flex-col bg-white/[0.03] border rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-lg hover:border-white/30 ${
                      cert.accentBorder ? "border-apple-gold/30" : "border-white/5"
                    }`}
                  >
                    <span className="absolute top-5 right-5 text-white/40 font-mono text-[0.8rem] transition-colors hover:text-white/80">
                      ↗
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-[1.2rem] mb-5 bg-gradient-to-br border ${colorClass}`}
                    >
                      {cert.emoji}
                    </div>
                    <h4 className="font-display text-[1.05rem] font-bold text-white mb-2 leading-tight pr-6">
                      {cert.name}
                    </h4>
                    <p className="text-[0.75rem] text-gray-1 mt-auto">
                      {cert.organization}
                    </p>
                  </a>
                ) : (
                  <div
                    className={`h-full flex flex-col bg-white/[0.03] border rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-1 ${
                      cert.accentBorder ? "border-apple-gold/30" : "border-white/5"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-[1.2rem] mb-5 bg-gradient-to-br border ${colorClass}`}
                    >
                      {cert.emoji}
                    </div>
                    <h4 className="font-display text-[1.05rem] font-bold text-white mb-2 leading-tight">
                      {cert.name}
                    </h4>
                    <p className="text-[0.75rem] text-gray-1 mt-auto">
                      {cert.organization}
                    </p>
                  </div>
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
