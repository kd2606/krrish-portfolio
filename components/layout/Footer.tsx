import { footerData } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-off-black border-t border-white/[0.06] py-8 px-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
      <div className="font-mono text-[0.68rem] text-gray-1">
        © 2026{" "}
        <strong className="text-white/60 font-medium">
          Krrish Dewangan
        </strong>
        . All rights reserved.
      </div>
      <div className="font-mono text-[0.68rem] text-gray-1">
        {footerData.location}
      </div>
    </footer>
  );
}
