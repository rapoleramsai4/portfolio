export const profile = {
  name: "Ramsai Rapole",
  logo: "RAMSAI",
  title: "AI & Software Developer",
  description:
    "Software Developer with 3+ years of experience architecting enterprise grade Agentic AI systems, NL2SQL platforms, and high performance Retrieval Augmented Generation (RAG) pipelines.",
  roles: [
    "AI Developer",
    "Software Developer",
    "Agentic AI Engineer",
    "Full-Stack Developer",
  ],
  bio: [
    "Welcome!",
    "I am a Software Developer with 3+ years of experience architecting enterprise grade Agentic AI systems, NL2SQL platforms, and high performance Retrieval Augmented Generation (RAG) pipelines.",
    "I specialize in building production ready autonomous workflows using LangGraph, ReAct loops, and Model Context Protocol (MCP), backed by scalable OLAP engines (DuckDB, ClickHouse) and vector databases (Qdrant, Redis HNSW). Skilled in full stack orchestration with Python (FastAPI) and modern frontends, integrating end to end LLM observability via LangSmith, and deploying secure, multi-tenant GenAI solutions via GitOps and Kubernetes.",
  ],
  quote:
    "Building autonomous agentic workflows and production AI platforms has shown me that reliability, deterministic guardrails, and low-latency data pipelines are what turn AI into real business value.",
  links: {
    linkedin: "https://www.linkedin.com/in/rapoleramsai",
    github: "https://github.com/rapoler",
    email: "rapoleramsai4@gmail.com",
    phone: "+91 9652110222",
    website: "https://rapoleramsai.online",
    resume: "/Resume.pdf",
  },
};

export type ExperienceItem = {
  role: string;
  timeline: string;
  location: string;
  isInternship: boolean;
  company: { name: string; url?: string };
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "AI Developer",
    timeline: "June 2026 — Present",
    location: "Hyderabad, India",
    isInternship: false,
    company: { name: "GaurData" },
    bullets: [
      "Designed and built high performance MCP endpoints and OpenAI compatible Chat APIs, exposing governed semantic data contracts as callable tools with sub second execution latency over analytical data stores.",
      "Developed tool orchestration pipelines for ReAct agents, integrating hybrid semantic search and JSON Schema validation to eliminate fan out joins and chasm traps in LLM generated queries.",
    ],
  },
  {
    role: "Software Developer",
    timeline: "May 2024 — June 2026",
    location: "Hyderabad, India",
    isInternship: false,
    company: { name: "Factly Media and Research", url: "https://factly.in" },
    bullets: [
      "Built GoPie, a full stack multi dataset SQL agent platform using React.js, FastAPI featuring a natural language to SQL (NL2SQL) engine with semantic schema search via Qdrant, and support for DuckDB and ClickHouse OLAP backends.",
      "Built a LangGraph / LangChain based workflow engine that orchestrates multi step chat reasoning, tool execution, semantic search, and SQL generation.",
      "Established CI/CD pipelines for GenAI models using ArgoCD and GitOps.",
      "Integrated semantic search with Qdrant vector embeddings for dataset schema retrieval, enabling contextual AI responses and accurate schema aware query generation.",
      "Deployed LangSmith for end to end LLM observability, tracking multi turn reasoning traces, agent latency bottlenecks, token consumption, and tool call accuracy across the system.",
      "Implemented multi tenancy support with organization/user context propagation throughout agent workflows, enabling secure isolation and audit trails for enterprise deployments.",
      "Integrated FastEmbed and Model2Vec alongside cloud models to provide ultra fast, low latency schema embeddings, significantly cutting token costs and indexing latency.",
      "Implemented autonomous error recovery and self healing loops that feed database execution errors back into the LLM context to iteratively refine and self correct invalid SQL queries.",
      "Integrated Zitadel and Better Auth across enterprise applications, developing complete authentication/authorization flows with custom UI screens for login, registration, MFA, password recovery, and role based access, reducing user onboarding friction by 50% through intuitive UI flows, supporting seamless migration of 5,000+ users with zero downtime or security incidents.",
    ],
  },
  {
    role: "Software Developer",
    timeline: "March 2023 — May 2024",
    location: "Hyderabad, India",
    isInternship: false,
    company: {
      name: "Tata Consultancy Services (Client: London Stock Exchange Group)",
      url: "https://www.tcs.com",
    },
    bullets: [
      "Led development of metered AI usage billing for an enterprise SaaS platform by tracking PostgreSQL query execution metrics, syncing usage events, enabling accurate per organization LLM and OLAP consumption billing.",
      "Architected an enterprise grade Retrieval Augmented Generation (RAG) platform, orchestrating LangChain, Azure OpenAI, and Redis Enterprise vector search (HNSW) to deliver sub second semantic retrieval across organizational knowledge bases.",
      "Implemented 600+ end to end test cases in Playwright, standardizing testing and significantly reducing production defects.",
    ],
  },
];

export const experienceQuote =
  "Production AI isn't just about prompts—it's about deterministic guardrails, low-latency data access, and continuous observability.";

export type SkillGroup = { category: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    category: "AI Tools & Agentic Systems",
    items: [
      "LangGraph",
      "LangChain",
      "Model Context Protocol (MCP)",
      "ReAct loops",
      "RAG",
      "LLM Integrations",
      "LangSmith",
      "FastEmbed",
      "Model2Vec",
      "OpenAI Embeddings",
      "Prompt Engineering",
      "Qdrant",
    ],
  },
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "SQL", "Java"],
  },
  {
    category: "Frameworks & Backend",
    items: [
      "FAST API",
      "Django",
      "Spring Boot",
      "REST API",
      "Server-Sent Events (SSE)",
    ],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "Zustand",
    ],
  },
  {
    category: "Databases & OLAP",
    items: [
      "DuckDB",
      "ClickHouse",
      "PostgreSQL",
      "Redis (HNSW)",
      "MySQL",
    ],
  },
  {
    category: "DevOps, Cloud & Testing",
    items: [
      "Docker",
      "Kubernetes",
      "GitOps",
      "Argo CD",
      "AWS",
      "GCP",
      "Git",
      "Playwright",
      "Sentry",
      "Postman",
    ],
  },
];

export const skillsQuote =
  "Tools change, but the ability to architect resilient end-to-end systems from agentic workflows down to the database remains constant.";

export type EducationItem = {
  institution: string;
  degree: string;
  affiliation?: string;
  location: string;
  timeline: string;
  grade?: string;
};

export const education: EducationItem[] = [
  {
    institution: "VNR VJIET",
    degree: "B.Tech in Computer Science and Engineering",
    affiliation: "Affiliated to JNTU(H)",
    location: "Hyderabad, Telangana",
    timeline: "Aug 2019 — March 2023",
    grade: "GPA 8.6 / 10",
  },
];

export type CredentialItem = {
  title: string;
  type: "Certification" | "Publication";
  organization: string;
  year?: string;
  details?: string;
};

export const certificationsAndPublications: CredentialItem[] = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    type: "Certification",
    organization: "Oracle",
    year: "2025",
  },
  {
    title: "Certified in Agile Software Development: Clean Code Practices",
    type: "Certification",
    organization: "Agile Software Development",
  },
  {
    title: "Nationality Identification using Handwriting",
    type: "Publication",
    organization: "IOSR Journal of Computer Engineering",
    year: "2023",
    details: "ML research publication on handwriting-based nationality classification.",
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

// Leave the projects section as it is as requested
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
  { label: "Website", href: profile.links.website, icon: "globe" as const },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
