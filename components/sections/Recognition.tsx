import ScrollReveal from "@/components/ui/ScrollReveal";
import { recognitions } from "@/lib/data";

export default function Recognition() {
  if (!recognitions || recognitions.length === 0) return null;

  return (
    <section id="recognition" className="relative z-10 bg-black py-[120px]">
      <div className="max-w-[1080px] mx-auto px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-apple-blue mb-4">
            Testimonials & Awards
          </p>
          <h2
            className="font-display font-extrabold text-white leading-[1.05] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)" }}
          >
            Recognition.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recognitions.map((rec, i) => (
            <ScrollReveal
              key={rec.id}
              delay={i * 100}
              className="group h-full"
            >
              <div className="h-full flex flex-col justify-center items-center text-center bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:scale-[1.02] hover:bg-white/[0.06] hover:border-white/[0.15]">
                <div className="w-12 h-12 rounded-full bg-apple-blue/10 border border-apple-blue/20 flex items-center justify-center text-[1.2rem] text-apple-blue mb-6">
                  🏆
                </div>
                <h3 className="font-display text-[1.2rem] font-bold tracking-[-0.01em] text-white mb-2">
                  {rec.name}
                </h3>
                <p className="font-mono text-[0.75rem] text-white/50 tracking-wide uppercase">
                  {rec.organization}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
