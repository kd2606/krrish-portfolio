import { footerData } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-off-black border-t border-white/[0.06] py-8 px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
      <div className="font-mono text-[0.68rem] text-gray-1">
        Built by Krrish Dewangan · 2025–2026
      </div>
      <div className="flex gap-4 font-mono text-[0.68rem] text-gray-1">
        <a href="https://github.com/kd2606" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
        <span className="text-white/20">|</span>
        <a href="https://linkedin.com/in/krrish-dewangan-ba87282a7" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        <span className="text-white/20">|</span>
        <a href="https://instagram.com/krrish.builds" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram (@krrish.builds)</a>
      </div>
    </footer>
  );
}
