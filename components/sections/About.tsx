import ScrollReveal from "@/components/ui/ScrollReveal";
import { aboutData } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative z-10 bg-black text-white py-[140px]">
      <div className="max-w-[1080px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px] items-start">
          {/* Left — Title */}
          <ScrollReveal direction="left">
            <p className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-apple-blue mb-4">
              About Me
            </p>
            <h2
              className="font-display font-extrabold leading-[1.05] tracking-[-0.03em] mb-5"
              style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)" }}
            >
              Building things
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #fff 0%, rgba(10,132,255,0.9) 100%)",
                }}
              >
                that matter.
              </span>
            </h2>
          </ScrollReveal>

          {/* Right — Body */}
          <ScrollReveal direction="right" className="pt-0 lg:pt-2">
            {aboutData.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[1rem] text-gray-1 leading-[1.85] mb-5 font-light [&_strong]:text-white/90 [&_strong]:font-medium"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}

            {/* Contact pills */}
            <div className="flex flex-wrap gap-[10px] mt-8">
              {aboutData.contactPills.map((pill) => (
                <div
                  key={pill.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.12] text-[0.8rem] text-white/70 transition-all duration-200 hover:bg-white/10 hover:border-white/20"
                >
                  <span className="text-[0.85rem]">{pill.icon}</span>
                  {pill.text}
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="mt-10 p-6 bg-white/[0.04] border border-white/10 rounded-2xl">
              <p className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-apple-blue mb-3">
                Education
              </p>
              <div className="font-display text-[1.1rem] font-bold mb-1">
                {aboutData.education.degree}
              </div>
              <div className="text-[0.85rem] text-gray-1 mb-[2px]">
                {aboutData.education.university}
              </div>
              <div className="font-mono text-[0.75rem] text-apple-blue">
                {aboutData.education.year}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
