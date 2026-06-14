import ScrollReveal from "@/components/ui/ScrollReveal";
import { skillCategories } from "@/lib/data";

const eyebrowColors = [
  "rgba(10,132,255,0.8)",
  "rgba(50,215,75,0.8)",
  "rgba(191,90,242,0.8)",
  "rgba(255,214,10,0.8)",
  "rgba(255,55,95,0.8)",
  "rgba(0,200,220,0.8)",
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 bg-black py-[120px]">
      <div className="max-w-[1080px] mx-auto px-8">
        <ScrollReveal className="mb-16">
          <p className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-apple-blue mb-4">
            Technical Stack
          </p>
          <h2
            className="font-display font-extrabold text-white leading-[1.05] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)" }}
          >
            What I build with.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={50}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.07] rounded-[20px] overflow-hidden border border-white/[0.07]">
            {skillCategories.map((cat, i) => (
              <div
                key={cat.category}
                className="bg-off-black p-[36px_32px] transition-colors duration-300 hover:bg-mid"
              >
                <p
                  className="font-mono text-[0.6rem] tracking-[0.14em] uppercase mb-5"
                  style={{ color: eyebrowColors[i] }}
                >
                  {cat.category}
                </p>
                <h4 className="font-display text-[1.05rem] font-bold mb-5 tracking-[-0.02em]">
                  {cat.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`text-[0.78rem] px-3 py-[5px] rounded-md border transition-all duration-200 hover:bg-apple-blue/15 hover:border-apple-blue/40 hover:text-white/95 ${
                        skill.isHighlighted
                          ? "bg-apple-blue/[0.12] border-apple-blue/30 text-white/90"
                          : "bg-white/[0.05] border-white/10 text-white/70"
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
