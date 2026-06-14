import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Plus_Jakarta_Sans,
  Martian_Mono,
} from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const martian = Martian_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krrish Dewangan | Full-Stack Developer & UI/UX Designer",
  description: "Portfolio of Krrish Dewangan, a Full-Stack Developer, UI/UX Designer, and Generative AI Builder based in Raipur. Building scalable digital products and intelligent systems.",
  keywords: ["Krrish Dewangan", "Full-Stack Developer", "UI/UX Designer", "Generative AI", "Next.js", "React", "Portfolio", "Amity University"],
  authors: [{ name: "Krrish Dewangan" }],
  creator: "Krrish Dewangan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-future-domain.com", // We will update this after Vercel deployment
    title: "Krrish Dewangan | Interstellar Developer",
    description: "Exploring the intersection of design, engineering, and artificial intelligence. View my projects, case studies, and architecture.",
    siteName: "Krrish Dewangan Portfolio",
    images: [
      {
        url: "/opengraph-image.png", // Next.js will auto-detect this in the app/ directory
        width: 1200,
        height: 630,
        alt: "Krrish Dewangan - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krrish Dewangan | Interstellar Developer",
    description: "Full-Stack Developer, UI/UX Designer, and Generative AI Builder.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${jakarta.variable} ${martian.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
