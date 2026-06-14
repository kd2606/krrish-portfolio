import ScrollReveal from "@/components/ui/ScrollReveal";
import { projects } from "@/lib/data";

// Pre-calculated bento grid spans to match the original design variations
const gridSpans = [
  "md:col-span-12", // Featured project takes full width
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 bg-black py-[120px]">
      <div className="max-w-[1200px] mx-auto px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="font-mono text-[0.65rem] tracking-[0.18em] uppercase text-apple-blue mb-4">
            Selected Work
          </p>
          <h2
            className="font-display font-extrabold text-white leading-[1.05] tracking-[-0.03em]"
            style={{ fontSize: "clamp(2.6rem, 5vw, 4.2rem)" }}
          >
            Built for impact.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {projects.map((project, i) => {
            const spanClass = gridSpans[i % gridSpans.length];
            return (
              <ScrollReveal
                key={project.id}
                delay={i * 50}
                className={`group ${spanClass} h-full`}
              >
                <div
                  className="relative h-full flex flex-col justify-between bg-white/[0.04] border border-white/[0.08] rounded-3xl p-8 lg:p-10 overflow-hidden transition-all duration-500 ease-out hover:scale-[1.01] hover:bg-white/[0.06] hover:border-white/[0.15]"
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 60%)"
                    }}
                  />

                  <div className="relative z-[1]">
                    <p className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-white/50 mb-3">
                      {project.category}
                    </p>
                    <h3 className="font-display text-[2rem] font-bold tracking-[-0.02em] mb-4 text-white">
                      {project.title}
                    </h3>
                    <p className="text-[0.95rem] text-gray-1 leading-[1.6] mb-8 font-light max-w-[90%]">
                      {project.description}
                    </p>
                  </div>

                  <div className="relative z-[1] flex flex-wrap items-center justify-between gap-4 mt-auto pt-6 border-t border-white/[0.08]">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-black/40 border border-white/10 text-[0.7rem] font-mono text-white/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.inDevelopment || (!project.liveUrl && !project.githubUrl) ? (
                      <div className="flex gap-3">
                        <span className="px-4 h-10 rounded-full bg-white/5 border border-white/10 text-white/60 flex items-center justify-center text-[0.8rem] font-medium">
                          ⚙ In Development
                        </span>
                      </div>
                    ) : (
                      <div className="flex gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/15 hover:text-white transition-colors"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <span className="font-mono text-sm">⌥</span>
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 h-10 rounded-full bg-white text-black flex items-center justify-center text-[0.8rem] font-bold hover:bg-white/90 transition-colors"
                          >
                            Live ↗
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
