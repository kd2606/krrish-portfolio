// ═══════════════════════════════════════════════════════════
// Portfolio Data Types
// All UI data is driven from these interfaces → lib/data.ts
// ═══════════════════════════════════════════════════════════

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  slug?: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl?: string;
  inDevelopment?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  date: string;
  tag: string;
  bullets: string[];
}

export interface SkillCategory {
  category: string;
  title: string;
  skills: { name: string; isHighlighted: boolean }[];
}

export interface Club {
  id: string;
  name: string;
  role: string;
  organization: string;
  eyebrow: string;
  since: string;
  bullets: string[];
}

export interface Certification {
  id: string;
  name: string;
  organization: string;
  emoji: string;
  badgeColor: "blue" | "green" | "gold" | "purple" | "red";
  accentBorder?: boolean;
  postUrl?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon?: string;
  external?: boolean;
}

export interface Recognition {
  id: string;
  name: string;
  organization: string;
}
