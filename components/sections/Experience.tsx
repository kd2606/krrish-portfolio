import ScrollReveal from "@/components/ui/ScrollReveal";
import { experiences } from "@/lib/data";

const tagStyles: Record<string, string> = {
  gfg: "bg-apple-green/10 text-apple-green border border-apple-green/20",
  codician: "bg-apple-blue/10 text-apple-blue border border-apple-blue/20",
  hack: "bg-apple-purple/10 text-apple-purple border border-apple-purple/20",
  google: "bg-black text-white border border-black/20", // using black for contrast
};

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 bg-off-white text-black py-[120px]">
      <div className="max-w-[800px] mx-auto px-8">
        <ScrollReveal className="mb-16">
          <h2
            className="font-display font-extrabold text-black leading-[1.05] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)" }}
          >
            Experience.
          </h2>
        </ScrollReveal>

        <div className="relative border-l border-black/10 ml-3">
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.id} delay={i * 100} className="mb-12 relative pl-8">
              {/* Timeline Dot */}
              <div className="absolute left-[-5.5px] top-1.5 w-[10px] h-[10px] rounded-full bg-off-white border-2 border-apple-blue" />

              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                <h3 className="font-display text-[1.2rem] font-bold tracking-[-0.01em]">
                  {exp.role}
                </h3>
                <span
                  className={`text-[0.65rem] font-mono tracking-widest uppercase px-2 py-0.5 rounded-sm ${
                    tagStyles[exp.tag] || "bg-black/5 text-black/60 border border-black/10"
                  }`}
                >
                  {exp.tag}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[0.85rem] text-gray-1 mb-4">
                <span className="font-medium">{exp.organization}</span>
                <span className="font-mono text-[0.75rem]">{exp.date}</span>
              </div>

              <ul className="space-y-2">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="text-[0.9rem] text-black/70 leading-relaxed flex items-start gap-3">
                    <span className="text-black/20 shrink-0 mt-[3px]">→</span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
