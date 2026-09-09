// Placeholder content ported from the previous single-page site.
// TODO(user): replace with your real name, bio, experience, skills, and links.

export const profile = {
  name: "Ramsai Rapole",
  logo: "RAMSAI",
  title: "Full-Stack Developer",
  description: "Full-Stack Developer",
  roles: [
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer",
    "AI Engineer",
  ],
  bio: [
    "Welcome!",
    "I am a Full-stack Developer with 3+ years of hands-on experience, specializing in frontend engineering and building AI-powered voice and communication platforms for modern SaaS products. As a Founding Engineer, I've led product development from scratch to deployment, owning the entire frontend stack while also contributing to backend, DevOps, and AI voice agent systems.",
  ],
  quote: "If it runs in production, I've probably touched it.",
  links: {
    linkedin: "https://www.linkedin.com/in/rapoleramsai/",
    github: "https://github.com/rapoleramsai4",
    email: "rapoleramsai4@gmail.com",
    resume: "/Resume.pdf",
  },
};

export type ExperienceItem = {
  role: string;
  timeline: string;
  isInternship: boolean;
  company: { name: string; url: string };
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Founding Engineer",
    timeline: "Sep 2023 — Sep 2025",
    isInternship: false,
    company: { name: "Overhyped AI", url: "https://overhyped.ai" },
    bullets: [
      "AI Voice Agent Platform: architected and implemented an AI-powered voice assistant in Python using STT, TTS, RAG, and LLMs; handled multilingual conversations, human-AI handoff, visual context integration, and outbound call flows.",
      "Led frontend & widget development: built and owned the complete frontend architecture using React, TypeScript, Zustand, and Webpack for the customer-facing dashboard and embeddable in-app widget used by end-users.",
      "Prompt engineering: engineered, optimized, and iteratively refined prompts for high-accuracy, contextual, and dynamic AI interactions tailored to business use cases.",
      "Built a FastAPI-based backend for automated order verification with Celery-based task scheduling, concurrency control, and a Python worker to manage real-time AI voice calls and status updates.",
      "Marketing website: delivered the full customer-facing marketing site using Next.js in just 3 days to accelerate brand visibility and lead generation.",
    ],
  },
  {
    role: "Full Stack Developer",
    timeline: "Feb 2023 — Jul 2023",
    isInternship: true,
    company: { name: "Ai Palette", url: "https://aipalette.com" },
    bullets: [
      "Developed and implemented a personalized dashboard for customers, driving 85% of website traffic. Enhanced data analysis capabilities and improved time efficiency for users.",
      "Developed a POC feature showcasing platform capabilities and insightful data, driving customer acquisition and seamless subscription transition.",
      "Implemented a user-friendly interface allowing users to select specific ingredients and apply multiple filters for efficient data filtering and analysis.",
      "Collaborated on UI/UX and bug fixes for a clean user experience; developed reusable components and contributed to Regional Analytics, Demography Analysis, and Related Trends features.",
    ],
  },
  {
    role: "Full Stack Developer",
    timeline: "Apr 2022 — Jan 2023",
    isInternship: true,
    company: { name: "Spoonshot", url: "https://spoonshot.com" },
    bullets: [
      "Leveraged historical time series data to analyze long-term trend evolution, aiding user decision-making across multiple years.",
      "Implemented scalable data transformations using PySpark on ~1B records to extend the 'Concept Generator' feature from ingredient pairings to triplets.",
      "Contributed to DevOps by setting up a resource-optimized staging environment; fine-tuned deployment sizing to run efficiently without increasing node pool usage.",
      "Contributed to backend models, API endpoints, and frontend UI/UX fixes; helped develop reusable components and improve user experience.",
    ],
  },
];

export const experienceQuote =
  "Startups taught me speed, ownership, and resilience. I ship, learn, and improve without waiting for perfect conditions.";

export type SkillGroup = { category: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "JavaScript",
      "Redux",
      "Webpack",
      "Vite",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "Backend",
    items: ["Python", "Django", "FastAPI", "REST APIs", "Celery"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "Helm", "Azure"],
  },
  {
    category: "AI",
    items: ["Prompt Engineering", "Voice Agents (STT / LLM / TTS)", "RAG"],
  },
  {
    category: "Other",
    items: ["Node.js", "PySpark", "Solr", "Elasticsearch", "GCP", "AWS"],
  },
];

export const skillsQuote =
  "Tools change, but the ability to learn and adapt is the real skill I bring to the table.";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

// TODO(user): swap these out for your real projects.
export const projects: Project[] = [
  {
    title: "AI Voice Agent Dashboard",
    description:
      "A customer-facing dashboard for configuring and monitoring AI voice agents, with real-time call transcripts and analytics.",
    tags: ["React", "TypeScript", "Zustand", "FastAPI"],
    githubUrl: "https://github.com/rapoleramsai4",
    liveUrl: "#",
    featured: true,
  },
  {
    title: "Realtime Order Tracking API",
    description:
      "An event-driven backend service that verifies and tracks orders in real time using task queues and websockets.",
    tags: ["FastAPI", "Celery", "Redis", "PostgreSQL"],
    githubUrl: "https://github.com/rapoleramsai4",
  },
  {
    title: "Embeddable Support Widget",
    description:
      "A lightweight, framework-agnostic chat widget embeddable in any site, built for performance and easy theming.",
    tags: ["React", "Webpack", "TypeScript"],
    githubUrl: "https://github.com/rapoleramsai4",
    liveUrl: "#",
  },
  {
    title: "Trend Analysis Pipeline",
    description:
      "A large-scale data pipeline processing ~1B records to surface ingredient and market trend insights.",
    tags: ["PySpark", "Python", "Elasticsearch"],
    githubUrl: "https://github.com/rapoleramsai4",
  },
  {
    title: "Marketing Site Starter",
    description:
      "A fast, SEO-friendly marketing site template shipped in days, optimized for lead generation.",
    tags: ["Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/rapoleramsai4",
    liveUrl: "#",
  },
  {
    title: "Personal Portfolio",
    description:
      "This site — a minimalist, dark-mode portfolio built with Next.js and deployed on Cloudflare Workers.",
    tags: ["Next.js", "Tailwind CSS", "Cloudflare Workers"],
    githubUrl: "https://github.com/rapoleramsai4",
  },
];

export const socials = [
  { label: "GitHub", href: profile.links.github, icon: "github" as const },
  { label: "LinkedIn", href: profile.links.linkedin, icon: "linkedin" as const },
  { label: "Email", href: `mailto:${profile.links.email}`, icon: "mail" as const },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
