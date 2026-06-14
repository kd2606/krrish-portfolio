import { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "diagnoverse",
    hero: {
      title: "DiagnoVerse AI",
      oneLiner: "An AI-powered full-stack health platform delivering conversational diagnostic support and auto-saving medical records for rural communities.",
      techStack: ["Next.js 14", "Firebase", "Gemini API", "Vercel"],
    },
    overview: "Rural communities often face severe delays in accessing basic healthcare and reliable medical advice. There is a critical need for an accessible, low-friction system that can provide initial diagnostic triage and streamline health data without requiring high-end medical infrastructure.",
    myRole: {
      role: "Team Lead & Full-Stack Developer",
      scope: "Led the end-to-end MVP development for the NHIDE-2026 hackathon. Engineered the user interface, integrated the Generative AI agents, and architected the real-time database syncing.",
    },
    research: {
      painPoints: "Language barriers in standard medical applications, risk of losing physical medical records, inability to get immediate understandable answers to sudden health concerns.",
      marketGap: "Most existing telehealth apps are English-heavy, require complex onboarding, or lack an intelligent conversational agent tailored specifically for accessible, rural-first diagnostic support.",
    },
    architecture: {
      tech: "Next.js (Frontend), Firebase (Backend), Gemini API (Core AI Logic), built in Google Antigravity, deployed on Vercel.",
      reasoning: "Next.js and Vercel provided speed and seamless deployment pipeline for a high-stakes hackathon. Google Antigravity allowed rapid agent-based development crucial for wiring up Gemini API as a reliable specialized health assistant.",
    },
    keyFeatures: [
      {
        title: "Pulse AI Health Agent",
        description: "A multilingual conversational AI designed to process unstructured user health inputs and provide immediate, contextual diagnostic support.",
      },
      {
        title: "Auto-Saving Health Records",
        description: "A frictionless UX where session data and medical history are securely and automatically backed up to Firebase without manual saves.",
      },
    ],
    challenges: {
      bottleneck: "Orchestrating Generative AI agents to process sensitive health data safely and consistently, while ensuring the multilingual conversational flow remained accurate and didn't hallucinate dangerous medical advice.",
      fix: "Implemented strict system prompts with medical guardrails, structured prompt chaining, and severity rating constraints to keep AI advice safe and constrained.",
    },
    results: {
      description: "Successfully delivered a fully functional MVP officially selected for pitching at NHIDE-2026 hackathon. Secured a live Vercel deployment demonstrating real-time AI triage capabilities to judges.",
      liveUrl: "https://diagnoverseai-peach.vercel.app",
    },
    learnings: "Gained advanced practical experience in building and deploying LLM-powered applications, orchestrating AI workflows in Google Antigravity, and designing user-centric full-stack healthcare tools for low-resource environments.",
  },
  {
    slug: "tradetrack",
    hero: {
      title: "TradeTrack",
      oneLiner: "A comprehensive business dashboard designed to help small businesses manage revenue, track expenses, and monitor inventory, replacing clunky spreadsheet workflows.",
      techStack: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS", "Recharts"],
    },
    overview: "Small business owners often rely on manual spreadsheets to manage their operations. This scattered approach leads to guesswork, data entry errors, and a lack of immediate visibility into actual profit trends and inventory levels.",
    myRole: {
      role: "Full-Stack Developer & UI/UX Designer",
      scope: "Architected the entire platform, designed an intuitive dashboard interface, implemented complex data visualizations, and integrated the backend database.",
    },
    research: {
      painPoints: "Spreadsheets are difficult to maintain at scale, lack automatic visual insights, and make real-time inventory tracking nearly impossible for non-technical users.",
      marketGap: "Enterprise ERPs are too expensive and complex for small businesses while basic spreadsheets are too manual. Need for a middle-ground solution that is visual, streamlined, and easy to use.",
    },
    architecture: {
      tech: "Next.js (Frontend), Supabase (Backend/Database)",
      reasoning: "Next.js provides a fast, responsive framework ideal for dashboards. Supabase was chosen because its PostgreSQL architecture offers the relational data structure required for handling complex inventory and financial records while being highly scalable.",
    },
    keyFeatures: [
      {
        title: "Data Visualization",
        description: "Interactive charts and graphs breaking down profit trends and expense categories to eliminate financial guesswork.",
      },
      {
        title: "Unified Operations Hub",
        description: "Seamless modules for logging revenue, categorizing expenses, and updating inventory counts in real time.",
      },
    ],
    challenges: {
      bottleneck: "Structuring the relational database in Supabase so that updating an inventory item automatically reflects in financial expense reports without causing data inconsistencies.",
      fix: "Implemented Recharts for clean visuals and wrote efficient Supabase SQL functions to fetch aggregate data quickly without lagging the dashboard.",
    },
    results: {
      description: "Successfully engineered a platform that streamlines small business operations, migrating them away from traditional spreadsheets into a modern centralized UI that provides immediate financial clarity.",
      liveUrl: "https://trade-track-gilt.vercel.app",
    },
    learnings: "Gained strong practical experience in building B2B SaaS-style dashboards, structuring relational databases in Supabase, and transforming raw financial data into meaningful user-friendly UI/UX visualizations.",
  },
  {
    slug: "codician-attendance",
    hero: {
      title: "Codician Anti-Proxy Attendance Marker",
      oneLiner: "A high-concurrency, geofenced attendance management system engineered to eliminate proxy check-ins and streamline event logistics for university clubs.",
      techStack: ["Next.js", "Firebase", "Geolocation API", "GCP", "Vercel"],
    },
    overview: "Managing attendance manually for large-scale university events at Amity University Chhattisgarh was a logistical nightmare. Paper rosters or open Google Forms were highly inefficient, vulnerable to proxy submissions (absent students filling forms shared via WhatsApp), and caused severe data fragmentation.",
    myRole: {
      role: "Lead Full-Stack Architect & Developer",
      scope: "End-to-end development including frontend UI, geolocation verification engine, backend concurrency handling, database scaling, and live campus deployment.",
    },
    research: {
      painPoints: "Club organizers spent first 20 minutes verifying identities; manual data entry resulted in human error; traditional digital forms failed to prevent students from logging in from their hostel rooms.",
      marketGap: "Enterprise biometric solutions are cost-prohibitive for mass check-ins. Traditional web forms lack hardware-level location validation. Needed a lightweight, instantly accessible mobile web app with bulletproof location enforcement.",
    },
    architecture: {
      tech: "React/Next.js (Frontend), Firebase/Node.js (Backend), Google Sheets API, deployed on Vercel",
      reasoning: "Entirely web-based so users wouldn't need to download an app. Google Antigravity provided a robust workflow to rapidly prototype, stress-test, and deploy backend microservices capable of handling sudden bursts of traffic.",
    },
    keyFeatures: [
      {
        title: "Smart Geofencing",
        description: "Integrates browser Geolocation API with strict cryptographic radius validation, matching student coordinates against event venue GPS boundaries.",
      },
      {
        title: "Anti-Proxy Shield",
        description: "Dynamically generates expiring session tokens bound to a single device profile, preventing sharing of check-in links.",
      },
      {
        title: "Real-time Analytics Dashboard",
        description: "Live visual feedback for organizers showing attendance counts, peak check-in times, and registration trends.",
      },
    ],
    challenges: {
      bottleneck: "When 500+ students scanned the QR code simultaneously, the sudden concurrent write requests caused database locking and API timeouts, dropping check-ins.",
      fix: "Engineered a backend Smart Retry Logic and request-queueing mechanism. The system gracefully queued incoming packets, optimized the radius-checking query payload, and executed staggered retries on failed connections without ruining user experience.",
    },
    results: {
      description: "Successfully deployed across multiple major college events. Seamlessly handled 500+ concurrent users during peak registration windows with zero downtime. Reduced total event check-in time from 20 minutes to less than 2 minutes.",
      liveUrl: "https://codician-auc-am.vercel.app",
    },
    learnings: "Mastered real-time concurrency handling, race condition resolution, and high-throughput database optimization. Gained vital insights into balancing strict security constraints (precision GPS tracking) with a low-friction mobile user interface.",
  },
  {
    slug: "echoes-of-the-past",
    hero: {
      title: "Echoes of the Past",
      oneLiner: "A digital heritage platform bridging Virtual Reality architectural preservation with a contextual e-commerce marketplace for local artisans.",
      techStack: ["WebGL", "Three.js", "Next.js", "Firebase", "Figma"],
    },
    overview: "Indian historical architecture is vulnerable to time, climate, and limited physical access. Simultaneously, local artisans whose livelihoods depend on these heritage sites struggle to reach wider digital markets. There is a deep disconnect between cultural preservation and digital economic empowerment.",
    myRole: {
      role: "System Architect & Full-Stack Developer",
      scope: "Architecting the core web platform, integrating 3D/VR models into the browser, designing the relational database for the artisan marketplace, and formally drafting the system architecture for patent filing.",
    },
    research: {
      painPoints: "History enthusiasts want immersive educational experiences but face geographical and financial travel barriers. Local artisans lack technical literacy to set up and manage independent online stores.",
      marketGap: "Existing platforms are fragmented — either purely educational VR tours or standard e-commerce. None seamlessly combine an immersive cultural tour directly with context-aware hyper-local purchasing.",
    },
    architecture: {
      tech: "WebGL/Three.js for in-browser 3D rendering, Next.js frontend, Firebase backend, LiDAR scanning for asset creation",
      reasoning: "The system required a highly capable backend to serve heavy 3D assets seamlessly. Google Antigravity allowed the team to manage complex rendering workflows alongside a secure transactional e-commerce backend without environment bottlenecks.",
    },
    keyFeatures: [
      {
        title: "Immersive VR Exploration",
        description: "High-fidelity 3D modeling allowing users to navigate and interact with historical Indian architecture directly from their web browsers.",
      },
      {
        title: "Contextual Artisan Marketplace",
        description: "Integrated storefront that dynamically updates based on the user's virtual location.",
      },
      {
        title: "Unified Vendor Dashboard",
        description: "Simplified vendor portal designed specifically for non-technical artisans to upload inventory and manage orders with minimal friction.",
      },
    ],
    challenges: {
      bottleneck: "Serving and rendering high-poly 3D models of complex historical structures in a standard web browser without causing severe frame-rate drops, long load times, or crashing mobile devices.",
      fix: "Implemented aggressive asset optimization including lazy-loading 3D textures, compressing models into efficient glTF/GLB formats, and optimizing the render loop so the marketplace UI remained highly responsive even while the VR canvas was active.",
    },
    results: {
      description: "Successfully engineered a dual-purpose platform supporting both EdTech/Tourism and local economies. The unique architecture combining VR and contextual e-commerce led to successful drafting and processing of a formal project patent.",
      liveUrl: "https://echoesofthepast.figma.site",
    },
    learnings: "Gained advanced experience handling non-standard web assets (3D/VR rendering), translating complex system architectures into formal patent documentation, and leading a core development team through a highly innovative product lifecycle.",
  },
  {
    slug: "edusetu",
    hero: {
      title: "EduSetu",
      oneLiner: "An AI-driven learning navigator that dynamically generates structured, personalized educational roadmaps for students transitioning between academic phases.",
      techStack: ["React", "Next.js", "Firebase", "Gemini API", "Figma"],
    },
    overview: "Students transitioning between grades or diving into new technical domains frequently fall into \"tutorial hell.\" They are overwhelmed by fragmented YouTube videos and disjointed articles, lacking a clear step-by-step progression tailored to their specific starting point.",
    myRole: {
      role: "Lead Full-Stack Developer & AI Integrator",
      scope: "Conceptualized the platform, engineered the Generative AI integration, designed the UI/UX for the interactive timelines, and prepared the core project presentation.",
    },
    research: {
      painPoints: "Information overload, confusion regarding what topic to study next, and losing motivation due to lack of visual milestones or clear progress tracking.",
      marketGap: "Most EdTech platforms offer rigid pre-recorded one-size-fits-all courses. Strong need for a dynamic engine capable of generating adaptive learning paths based on a user's unique background and target goals.",
    },
    architecture: {
      tech: "React/Next.js (Frontend), Generative AI APIs (Core Logic Engine), Firebase (Backend)",
      reasoning: "A static database cannot account for every possible student background and career goal. Utilizing a GenAI backend allowed the system to compute and generate highly customized on-the-fly roadmaps that adapt dynamically to user inputs.",
    },
    keyFeatures: [
      {
        title: "Dynamic Roadmap Generation",
        description: "AI-powered creation of structured step-by-step learning paths connecting a student's current skill level to their desired outcome.",
      },
      {
        title: "Interactive Visual Timeline",
        description: "Clean intuitive UI that transforms the AI's data into a clickable milestone tracker, allowing users to visualize their journey and check off progress.",
      },
      {
        title: "Resource Curation",
        description: "Smart suggestions for specific topics, breaking down massive subjects into digestible actionable micro-goals.",
      },
    ],
    challenges: {
      bottleneck: "LLMs natively generate conversational text, but the React frontend requires highly structured data (JSON arrays) to render a visual timeline. The AI would sometimes output conversational filler that broke the UI rendering logic.",
      fix: "Engineered strict system prompts and built a validation layer on the backend. This forced the Generative AI to strictly output formatted JSON payloads, ensuring the frontend could reliably map the AI's response into a beautiful unbreakable visual roadmap every single time.",
    },
    results: {
      description: "Successfully engineered a fully functional AI integration that reduces a student's roadmap planning time from hours of stressful manual research to just a few seconds of computation.",
    },
    learnings: "Mastered the practical application of Generative AI in full-stack apps, advanced prompt engineering for structured data outputs (JSON parsing), and designing intuitive UI/UX for complex information architectures.",
  },
  {
    slug: "safepath",
    hero: {
      title: "SafePath",
      oneLiner: "A community-powered Progressive Web App providing real-time AI safety scoring and automated SOS responses for women's safety.",
      techStack: ["React Native", "Expo", "GCP", "Supabase", "Gemini AI"],
    },
    overview: "In emergency situations or when navigating unfamiliar areas, users — especially women — often lack access to real-time community-verified safety information and immediate frictionless ways to trigger SOS alerts to their contacts.",
    myRole: {
      role: "Full-Stack Developer & Cloud Architect",
      scope: "Engineered the entire application lifecycle for Google Solution Challenge 2026, from designing the PWA frontend to architecting the scalable cloud backend and integrating AI-based scoring.",
    },
    research: {
      painPoints: "Traditional safety apps require heavy downloads, have clunky SOS triggers that are hard to use in a panic, and lack predictive data about a route's safety before an incident happens.",
      marketGap: "Need for a lightweight instantly accessible web app (PWA) that didn't just react to emergencies but proactively used data to generate safety scores for specific routes.",
    },
    architecture: {
      tech: "Progressive Web App (PWA) deployed on Vercel, backend powered by Google Cloud Platform (GCP) and Supabase",
      reasoning: "A PWA ensures users can access the tool instantly via a browser without app store friction while still functioning like a native app. GCP and Supabase provided highly scalable low-latency infrastructure for handling real-time geolocation data and AI computations.",
    },
    keyFeatures: [
      {
        title: "AI-Based Safety Scoring",
        description: "Analyzes routing data and community inputs to generate real-time safety scores for different paths.",
      },
      {
        title: "Automated SOS Notifications",
        description: "Streamlined emergency trigger that instantly broadcasts the user's live location and status to emergency contacts.",
      },
      {
        title: "PWA Implementation",
        description: "Installable directly from the web with offline capabilities and native-like performance on mobile devices.",
      },
    ],
    challenges: {
      bottleneck: "Managing real-time emergency routing while securing sensitive location data and cloud API keys. Securing API gateways to prevent exposure while maintaining real-time latency was critical.",
      fix: "Implemented strict environment variable management to secure cloud credentials and optimized the database schema in Supabase to handle high-frequency location updates securely without lagging the SOS broadcast system.",
    },
    results: {
      description: "Successfully developed and submitted the prototype for Google Solution Challenge 2026. Created a scalable high-impact application bridging cloud architecture with community safety.",
    },
    learnings: "Deepened expertise in building Progressive Web Apps, configuring robust Google Cloud Platform architectures, managing Supabase for real-time relational data, and prioritizing strict security practices for cloud API integrations.",
  },
];
