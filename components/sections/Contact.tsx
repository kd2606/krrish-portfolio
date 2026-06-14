"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { contactData, socialLinks } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = {
      access_key: "dac8ce08-55d3-4fbe-a373-98c456568e96",
      name: form.name,
      email: form.email,
      message: form.message,
    };
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

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

          {success ? (
            <div className="mb-16 p-6 max-w-[500px] mx-auto rounded-2xl bg-apple-green/10 border border-apple-green/20 text-apple-green font-medium">
              ✅ Message sent! I'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mb-16 max-w-[500px] mx-auto text-left p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
              <div className="mb-5">
                <label className="block text-[0.75rem] text-gray-1 font-mono uppercase tracking-widest mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apple-blue/50 transition-colors"
                />
              </div>
              <div className="mb-5">
                <label className="block text-[0.75rem] text-gray-1 font-mono uppercase tracking-widest mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apple-blue/50 transition-colors"
                />
              </div>
              <div className="mb-8">
                <label className="block text-[0.75rem] text-gray-1 font-mono uppercase tracking-widest mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-apple-blue/50 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-apple-blue to-apple-purple text-white font-bold tracking-wide transition-all hover:opacity-90 hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}

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
