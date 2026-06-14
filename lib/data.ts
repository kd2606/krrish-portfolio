// ═══════════════════════════════════════════════════════════
// Portfolio Data Layer
// All hardcoded content from Krrish_Portfolio_Space_Final.html
// extracted into typed, stateless arrays.
// ═══════════════════════════════════════════════════════════

import type {
  NavLink,
  HeroStat,
  Project,
  Experience,
  SkillCategory,
  Club,
  Certification,
  SocialLink,
  Recognition,
} from "./types";

// ── Navigation ──────────────────────────────────────────────
export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Clubs", href: "#clubs" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// ── Hero ────────────────────────────────────────────────────
export const heroData = {
  badge: "Available for internships & collaborations",
  firstName: "Krrish",
  lastName: "Dewangan",
  currentlyBuilding: "🚀 Currently Building: DiagnoVerse AI + TradeTrack",
  subtitle: {
    highlights: ["UI/UX & Full-Stack Developer"],
    text: "Generative AI Builder · Google Student Ambassador '26 · Student Leader at",
    emphasis: "Amity University Raipur",
  },
  ctas: [
    { label: "View Work", href: "#projects", variant: "primary" as const },
    { label: "Get In Touch", href: "#contact", variant: "ghost" as const },
    {
      label: "GitHub ↗",
      href: "https://github.com/kd2606",
      variant: "ghost" as const,
      external: true,
    },
  ],
  email: "dewangankrrish50@gmail.com",
};

export const heroStats: HeroStat[] = [
  { value: "5+", label: "Projects" },
  { value: "2", label: "Club Roles" },
  { value: "6+", label: "Hackathons" },
  { value: "13+", label: "Certifications" },
];

// ── About ───────────────────────────────────────────────────
export const aboutData = {
  paragraphs: [
    'First-year <strong>B.Tech Computer Science</strong> student at Amity University Chhattisgarh — passionate about crafting products that solve real problems at scale.',
    'From <strong>rural health-tech platforms</strong> to <strong>heritage preservation in VR</strong>, I work at the intersection of design, full-stack engineering, and emerging AI. I lead technical communities, mentor peers, and compete in national hackathons.',
    'Currently exploring <strong>Generative AI, cloud architecture, and production-grade UI/UX design</strong> while actively contributing to two university tech clubs.',
  ],
  contactPills: [
    { icon: "✉", text: "dewangankrrish50@gmail.com" },
    { icon: "📍", text: "Raipur, CG" },
  ],
  education: {
    degree: "B.Tech — Computer Science & Engineering",
    university: "Amity University Raipur, Chhattisgarh",
    year: "Aug 2025 — Aug 2029",
  },
};

// ── Clubs ───────────────────────────────────────────────────
export const clubs: Club[] = [
  {
    id: "codician",
    name: "CODICIAN Club AUC",
    role: "Core Team Member",
    organization: "Amity University Raipur",
    eyebrow: "Student Coordinator · Sep 2025 – Present",
    since: "8 months active",
    bullets: [
      'Organized "Beyond the Prompt – Designing & Deploying Production-Ready AI Agents" (Apr 2026) — Certificate of Appreciation awarded.',
      'Organized "Cracking Interviews in the AI Era" (Jan 2026) — 577+ LinkedIn impressions, Certificate of Appreciation awarded.',
      "Managing communications between club members, faculty, and industry professionals.",
      "Leading technical initiatives, coordinating events, and driving club growth.",
    ],
  },
  {
    id: "gfg",
    name: "GeeksforGeeks Student Chapter",
    role: "On-Campus Chapter",
    organization: "Amity University Raipur",
    eyebrow: "Technical Team Member · Mar 2026 – Present",
    since: "Active since March 2026",
    bullets: [
      "Contributing to technical workshops, coding sessions, and chapter events to grow the developer community on campus.",
    ],
  },
];

// ── Skills ──────────────────────────────────────────────────
export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    title: "Core Languages",
    skills: [
      { name: "JavaScript", isHighlighted: true },
      { name: "Python", isHighlighted: true },
      { name: "C", isHighlighted: false },
      { name: "C++", isHighlighted: false },
    ],
  },
  {
    category: "Frameworks",
    title: "Web & Mobile",
    skills: [
      { name: "Next.js", isHighlighted: true },
      { name: "React", isHighlighted: true },
      { name: "React Native", isHighlighted: false },
      { name: "Expo", isHighlighted: false },
      { name: "HTML/CSS", isHighlighted: false },
    ],
  },
  {
    category: "Cloud & Backend",
    title: "Infrastructure",
    skills: [
      { name: "Firebase", isHighlighted: true },
      { name: "Supabase", isHighlighted: true },
      { name: "GCP", isHighlighted: false },
      { name: "AWS", isHighlighted: false },
      { name: "Vercel", isHighlighted: false },
      { name: "Docker", isHighlighted: false },
    ],
  },
  {
    category: "Design",
    title: "UI/UX & Tools",
    skills: [
      { name: "Figma", isHighlighted: true },
      { name: "UI/UX Design", isHighlighted: true },
      { name: "Prototyping", isHighlighted: false },
      { name: "Tableau", isHighlighted: false },
      { name: "GitHub", isHighlighted: false },
    ],
  },
  {
    category: "AI & Data",
    title: "Emerging Tech",
    skills: [
      { name: "Generative AI", isHighlighted: true },
      { name: "Prompt Engineering", isHighlighted: true },
      { name: "Gemini API", isHighlighted: false },
      { name: "Data Analytics", isHighlighted: false },
    ],
  },
  {
    category: "Specialised",
    title: "Unique Skills",
    skills: [
      { name: "LiDAR Scanning", isHighlighted: true },
      { name: "3D Modeling", isHighlighted: false },
      { name: "Cyber Forensics", isHighlighted: false },
      { name: "DSA", isHighlighted: false },
      { name: "Networking", isHighlighted: false },
    ],
  },
];

// ── Experience ──────────────────────────────────────────────
export const experiences: Experience[] = [
  {
    id: "google-student-ambassador",
    role: "Google Student Ambassador '26",
    organization: "Google Developer Program",
    date: "2026 — Present",
    tag: "google",
    bullets: [
      "Selected for the exclusive Google Developer Program, earning the Premium Tier Badge.",
      "Developing a Solution Challenge prototype leveraging Google Cloud and Gemini AI for social impact.",
    ],
  },
  {
    id: "gfg-tech-member",
    role: "Technical Team Member",
    organization: "GeeksforGeeks Student Chapter · Amity University Raipur",
    date: "Mar 2026 — Present",
    tag: "gfg",
    bullets: [
      "Contributing to technical workshops, coding contests, and knowledge-sharing sessions for the campus developer community.",
      "Supporting chapter operations and driving peer learning initiatives within the on-campus GFG community.",
    ],
  },
  {
    id: "beyond-the-prompt",
    role: 'Event Organizer — "Beyond the Prompt"',
    organization: "CODICIAN Club AUC · Amity University",
    date: "Apr 2026",
    tag: "codician",
    bullets: [
      'Organized the flagship session "Beyond the Prompt – Designing & Deploying Production-Ready AI Agents".',
      "Received a formal Certificate of Appreciation for execution and impact.",
    ],
  },
  {
    id: "codician-coordinator",
    role: "Student Coordinator",
    organization: "CODICIAN Club AUC · Amity University",
    date: "Sep 2025 — Present",
    tag: "codician",
    bullets: [
      "Leading club operations, managing communications between members, faculty, and industry professionals.",
      '"Cracking Interviews in the AI Era" (Jan 2026) — 577+ LinkedIn impressions, Certificate of Appreciation.',
    ],
  },
  {
    id: "hackathon-lead",
    role: "Team Lead — Multiple Hackathons",
    organization: "Hackboard · Aspire X · NHIDE-2026",
    date: "2025 — Present",
    tag: "hack",
    bullets: [
      "Led cross-functional teams in national competitions, driving rapid MVP development from idea to pitch in under 24 hours.",
      "Coordinated technical architecture, UI/UX strategy, and final presentations under tight time constraints.",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "diagnoverse-ai",
    slug: "diagnoverse-ai",
    title: "DiagnoVerse AI",
    category: "Health Tech · NHIDE-2026",
    description: "Problem: Rural areas lack quick, accessible preliminary medical diagnosis.\nSolution: A full-stack health platform featuring a generative AI agent that provides conversational diagnosis support in multiple regional languages.\nImpact: Empowers remote patients to generate auto-saved health records and doctor verdict cards with severity ratings.",
    techStack: ["Next.js 14", "Firebase", "Gemini API", "Vercel"],
    liveUrl: "https://diagnoverseai-peach.vercel.app/",
    githubUrl: "",
    inDevelopment: false
  },
  {
    id: "trade-track",
    slug: "trade-track",
    title: "Trade Track",
    category: "Business · FinTech",
    description: "Problem: Small businesses struggle with fragmented, manual spreadsheet workflows.\nSolution: A comprehensive dashboard streamlining operations by allowing owners to manage revenue, track expenses, and monitor inventory.\nImpact: Eliminates manual data entry while providing real-time financial visibility through an intuitive UI/UX.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Data Viz"],
    liveUrl: "https://trade-track-gilt.vercel.app/",
    githubUrl: "",
    inDevelopment: false
  },
  {
    id: "codician-attendance",
    slug: "codician-attendance",
    title: "Codician AUC Attendance Marker",
    category: "Web · Vercel",
    description: "A highly concurrent, geofencing-based smart attendance system built to eliminate proxy attendance. Designed to manage 500+ users simultaneously, it utilizes precise coordinate validation and auto-retry logic to effectively handle high user traffic spikes during class check-ins.",
    techStack: ["Next.js", "Geofencing", "Vercel", "GCP"],
    liveUrl: "https://codician-auc-am.vercel.app/",
    githubUrl: "",
    inDevelopment: false
  },
  {
    id: "echoes-of-the-past",
    slug: "echoes-of-the-past",
    title: "Echoes of the Past",
    category: "VR · Heritage Preservation",
    description: "An immersive digital preservation platform utilizing LiDAR scanning and 3D modeling to recreate historical heritage sites in Virtual Reality. This project is backed by a drafted technical patent application covering cross-platform VR optimization and rendering techniques.",
    techStack: ["LiDAR", "3D Modeling", "Figma", "VR/AR"],
    liveUrl: "https://echoesofthepast.figma.site/",
    githubUrl: "",
    inDevelopment: false
  },
  {
    id: "safepath",
    slug: "safepath",
    title: "SafePath",
    category: "Safety Tech · Cloud",
    description: "A community safety application engineered to provide real-time emergency responses. It utilizes an AI-based safety scoring algorithm and silent SOS notifications to protect users, powered by a scalable backend architecture.",
    techStack: ["React Native", "GCP", "Supabase", "Gemini AI"],
    liveUrl: "",
    githubUrl: "",
    inDevelopment: true
  },
  {
    id: "edusetu",
    slug: "edusetu",
    title: "EduSetu",
    category: "EdTech",
    description: "Problem: Secondary students face educational friction from scattered and unstructured learning materials.\nSolution: A digital learning navigator platform that provides highly structured academic resources and tailored learning roadmaps.\nImpact: Eliminates confusion and accelerates learning through personalized progression tracking.",
    techStack: ["React", "Firebase", "Figma"],
    liveUrl: "",
    githubUrl: "",
    inDevelopment: true
  }
];

// ── Certifications ──────────────────────────────────────────
export const certifications: Certification[] = [
  {
    id: "innovation-day-2025",
    name: "3rd Position — Paper Presentation · Innovation Day 2025",
    organization:
      "Certificate of Excellence · Team HackBoard · Amity University CG · Oct 8, 2025",
    emoji: "🥉",
    badgeColor: "gold",
    accentBorder: true,
  },
  {
    id: "google-dev-premium",
    name: "Google Developer Program — Premium Tier Badge",
    organization: "Google",
    emoji: "🏅",
    badgeColor: "gold",
  },
  {
    id: "google-solution-challenge",
    name: "Google Solution Challenge 2026",
    organization: "Google · 2026",
    emoji: "🌍",
    badgeColor: "blue",
  },
  {
    id: "claude-101",
    name: "Certificate of Completion: Claude 101",
    organization: "Anthropic · Mar 2026",
    emoji: "A\\",
    badgeColor: "purple",
  },
  {
    id: "nhide-2026",
    name: "Team Lead / Participant — NHIDE-2026",
    organization:
      "National Hackathon for Innovation, Design & Entrepreneurship · Mar 2026",
    emoji: "🏆",
    badgeColor: "blue",
  },
  {
    id: "algostorm",
    name: "Algostorm 1.0 — 24-Hour Hackathon",
    organization:
      "Certificate of Participation · Amity University CG · Aug 21–22, 2025",
    emoji: "⚡",
    badgeColor: "red",
  },
  {
    id: "ideathon-5",
    name: "Ideathon 5.0 — Business Plan Competition",
    organization:
      "Certificate of Participation · Team Hackboard · Kalinga University, Raipur · Nov 4–5, 2025",
    emoji: "💡",
    badgeColor: "blue",
  },
  {
    id: "sih-2025",
    name: "Smart India Hackathon 2025",
    organization: "Ministry of Education, Govt of India · Nov 2025",
    emoji: "🚀",
    badgeColor: "red",
  },
  {
    id: "beyond-prompt-cert",
    name: 'Certificate of Appreciation — "Beyond the Prompt"',
    organization: "CODICIAN Club AUC · Apr 2026",
    emoji: "✦",
    badgeColor: "gold",
  },
  {
    id: "cracking-interviews-cert",
    name: 'Certificate of Appreciation — "Cracking Interviews in the AI Era"',
    organization: "CODICIAN Club AUC · Jan 2026",
    emoji: "✦",
    badgeColor: "gold",
  },
  {
    id: "aws-forage",
    name: "AWS Solutions Architecture Job Simulation",
    organization: "Forage · Jan 2026",
    emoji: "☁",
    badgeColor: "green",
  },
  {
    id: "deloitte-forage",
    name: "Deloitte Australia Data Analytics Simulation",
    organization: "Forage · Jan 2026",
    emoji: "📊",
    badgeColor: "blue",
  },
  {
    id: "tata-genai-forage",
    name: "Tata GenAI Powered Data Analytics Simulation",
    organization: "Forage · Jan 2026",
    emoji: "✦",
    badgeColor: "purple",
  },
  {
    id: "pynet-networking",
    name: "Workshop on Networking Fundamentals",
    organization: "PyNet Labs & Amity University · Feb 2026",
    emoji: "🌐",
    badgeColor: "green",
  },
];

// ── Contact / Social ────────────────────────────────────────
export const contactData = {
  heading: "Let's build\nsomething great.",
  subtext:
    "Open to internships, collaborations, and ambitious projects.\nWhether it's a product, a hackathon, or just a conversation — reach out.",
  email: "dewangankrrish50@gmail.com",
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/kd2606", icon: "⌥" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/krrish-dewangan-ba87282a7",
    icon: "in",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/krrish.builds",
    icon: "ig",
  },
];

// ── Footer ──────────────────────────────────────────────────
export const footerData = {
  copyright: "Built by Krrish Dewangan · 2025–2026",
  location: "Amity University · Raipur, Chhattisgarh · India",
};

// ── Recognitions ──────────────────────────────────────────────
export const recognitions: Recognition[] = [
  {
    id: "google-ambassador",
    name: "Google Student Ambassador 2026",
    organization: "Google",
  },
  {
    id: "algostorm-participant",
    name: "Team Lead / Participant — Algostorm 1.0",
    organization: "Codician Club",
  },
  {
    id: "ideathon-participant",
    name: "Ideathon 5.0 Participant",
    organization: "Kalinga University",
  },
];
