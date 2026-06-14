import { caseStudies } from "@/lib/case-studies";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);
  if (!caseStudy) return { title: "Not Found" };
  return {
    title: `${caseStudy.hero.title} — Case Study | Krrish Dewangan`,
    description: caseStudy.hero.oneLiner,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((cs) => cs.slug === slug);

  if (!caseStudy) {
    notFound();
  }

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "my-role", label: "My Role" },
    { id: "research", label: "Research" },
    { id: "architecture", label: "Architecture" },
    { id: "key-features", label: "Key Features" },
    { id: "challenges", label: "Challenges" },
    { id: "results", label: "Results & Impact" },
    { id: "learnings", label: "Learnings" },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-apple-blue/30 pb-32">
      <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-20">
        {/* Top Navigation */}
        <div className="mb-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] border border-white/10 hover:bg-white/10 transition-all duration-300 text-[0.9rem] text-white/80"
          >
            ← Back to Projects
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-20">
          <h1 className="font-display text-[2.5rem] md:text-[4rem] font-extrabold leading-[1.05] tracking-[-0.03em] mb-6">
            {caseStudy.hero.title}
          </h1>
          <p className="text-[1.1rem] md:text-[1.25rem] text-white/70 leading-[1.6] max-w-3xl mb-8 font-light">
            {caseStudy.hero.oneLiner}
          </p>
          <div className="flex flex-wrap gap-2">
            {caseStudy.hero.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full bg-apple-blue/10 border border-apple-blue/20 text-apple-blue text-[0.8rem] font-mono tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative items-start">
          
          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-3 sticky top-32">
            <nav className="flex flex-col gap-2 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl">
              <h3 className="text-[0.75rem] font-mono text-white/40 uppercase tracking-widest mb-3">
                Contents
              </h3>
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-[0.9rem] text-white/60 hover:text-white hover:translate-x-1 transition-all py-1.5"
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="col-span-1 lg:col-span-9 space-y-24">
            {/* Overview */}
            <section id="overview" className="scroll-mt-32">
              <h2 className="text-[1.8rem] font-display font-bold mb-6 border-b border-white/10 pb-4">
                Overview
              </h2>
              <p className="text-[1.05rem] text-white/75 leading-[1.85] font-light">
                {caseStudy.overview}
              </p>
            </section>

            {/* My Role */}
            <section id="my-role" className="scroll-mt-32">
              <h2 className="text-[1.8rem] font-display font-bold mb-6 border-b border-white/10 pb-4">
                My Role
              </h2>
              <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8">
                <h3 className="text-apple-blue font-mono text-[0.85rem] uppercase tracking-widest mb-3">{caseStudy.myRole.role}</h3>
                <p className="text-[1.05rem] text-white/75 leading-[1.85] font-light">
                  {caseStudy.myRole.scope}
                </p>
              </div>
            </section>

            {/* Research */}
            <section id="research" className="scroll-mt-32">
              <h2 className="text-[1.8rem] font-display font-bold mb-6 border-b border-white/10 pb-4">
                Research & Context
              </h2>
              <div className="space-y-10">
                <div>
                  <h3 className="text-[1.2rem] font-semibold mb-3 text-white/90">User Pain Points</h3>
                  <p className="text-[1.05rem] text-white/75 leading-[1.85] font-light">{caseStudy.research.painPoints}</p>
                </div>
                <div>
                  <h3 className="text-[1.2rem] font-semibold mb-3 text-white/90">Market Gap</h3>
                  <p className="text-[1.05rem] text-white/75 leading-[1.85] font-light">{caseStudy.research.marketGap}</p>
                </div>
              </div>
            </section>

            {/* Architecture */}
            <section id="architecture" className="scroll-mt-32">
              <h2 className="text-[1.8rem] font-display font-bold mb-6 border-b border-white/10 pb-4">
                Architecture
              </h2>
              <div className="space-y-10">
                <div>
                  <h3 className="text-[1.2rem] font-semibold mb-3 text-white/90">Tech Stack Reasoning</h3>
                  <p className="text-[1.05rem] text-white/75 leading-[1.85] font-light">{caseStudy.architecture.tech}</p>
                </div>
                <div>
                  <h3 className="text-[1.2rem] font-semibold mb-3 text-white/90">Design Decisions</h3>
                  <p className="text-[1.05rem] text-white/75 leading-[1.85] font-light">{caseStudy.architecture.reasoning}</p>
                </div>
              </div>
            </section>

            {/* Key Features */}
            <section id="key-features" className="scroll-mt-32">
              <h2 className="text-[1.8rem] font-display font-bold mb-6 border-b border-white/10 pb-4">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudy.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.05] transition-colors">
                    <h3 className="text-[1.1rem] font-semibold mb-3 text-white/90">{feature.title}</h3>
                    <p className="text-[0.95rem] text-white/70 leading-[1.7] font-light">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges */}
            <section id="challenges" className="scroll-mt-32">
              <h2 className="text-[1.8rem] font-display font-bold mb-6 border-b border-white/10 pb-4">
                Challenges & Solutions
              </h2>
              <div className="space-y-6">
                <div className="border-l-[3px] border-red-500/40 pl-6 py-2">
                  <h3 className="text-[0.85rem] font-mono text-red-400 mb-2 uppercase tracking-wider">The Bottleneck</h3>
                  <p className="text-[1.05rem] text-white/75 leading-[1.85] font-light">{caseStudy.challenges.bottleneck}</p>
                </div>
                <div className="border-l-[3px] border-emerald-500/40 pl-6 py-2 mt-8">
                  <h3 className="text-[0.85rem] font-mono text-emerald-400 mb-2 uppercase tracking-wider">The Fix</h3>
                  <p className="text-[1.05rem] text-white/75 leading-[1.85] font-light">{caseStudy.challenges.fix}</p>
                </div>
              </div>
            </section>

            {/* Results */}
            <section id="results" className="scroll-mt-32">
              <h2 className="text-[1.8rem] font-display font-bold mb-6 border-b border-white/10 pb-4">
                Results & Impact
              </h2>
              <p className="text-[1.05rem] text-white/75 leading-[1.85] font-light mb-8">
                {caseStudy.results.description}
              </p>
              {caseStudy.results.liveUrl && (
                <a
                  href={caseStudy.results.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-apple-blue text-white font-medium hover:brightness-110 transition-all shadow-[0_0_20px_rgba(10,132,255,0.3)] text-[0.9rem]"
                >
                  View Live Project ↗
                </a>
              )}
            </section>

            {/* Learnings */}
            <section id="learnings" className="scroll-mt-32">
              <h2 className="text-[1.8rem] font-display font-bold mb-6 border-b border-white/10 pb-4">
                Key Learnings
              </h2>
              <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-apple-blue/50"></div>
                <p className="text-[1.05rem] text-white/75 leading-[1.85] font-light italic">
                  "{caseStudy.learnings}"
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
