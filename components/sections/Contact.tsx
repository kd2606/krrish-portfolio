import ScrollReveal from "@/components/ui/ScrollReveal";
import { contactData, socialLinks } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 bg-black py-[140px] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-apple-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[800px] mx-auto px-8 relative z-[1] text-center">
        <ScrollReveal>
          <h2
            className="font-display font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-6 whitespace-pre-line"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            {contactData.heading}
          </h2>
          <p className="text-[1.1rem] text-gray-1 font-light leading-relaxed mb-12 whitespace-pre-line max-w-[600px] mx-auto">
            {contactData.subtext}
          </p>

          <a
            href={`mailto:${contactData.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-[1.05rem] tracking-tight transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] mb-16"
          >
            <span className="text-[1.2rem] mt-[-2px]">✉</span>
            Say Hello
          </a>

          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[0.85rem] text-white/70 font-medium transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.15] hover:text-white"
              >
                <span className="font-mono text-apple-blue/80">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
