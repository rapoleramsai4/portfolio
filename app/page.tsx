import {
  ArrowRight,
  Award,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { RotatingRole } from "@/components/rotating-role";
import { ProjectCard } from "@/components/project-card";
import { ContactForm } from "@/components/contact-form";
import {
  profile,
  experience,
  experienceQuote,
  skills,
  skillsQuote,
  education,
  certificationsAndPublications,
  projects,
  socials,
} from "@/lib/data";

const icons = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  globe: Globe,
  phone: Phone,
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24">
      {/* Hero Section */}
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-content flex-col justify-center px-6 py-24">
        <p className="mb-4 text-sm font-medium tracking-[0.3em] text-muted">
          WELCOME
        </p>

        <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          I&rsquo;m {profile.name.split(" ")[0]},{" "}
          <br className="hidden sm:block" />
          <RotatingRole roles={profile.roles} />
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg">
          {profile.bio[1]}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <ButtonLink href="#projects" variant="primary">
            View Projects
            <ArrowRight size={16} />
          </ButtonLink>
          <ButtonLink href="#contact" variant="outline">
            Get in Touch
          </ButtonLink>
        </div>

        <blockquote className="mt-20 max-w-xl border-l-2 border-accent pl-6 font-mono text-sm italic text-muted">
          &ldquo;{profile.quote}&rdquo;
        </blockquote>
      </section>

      {/* About Section */}
      <section id="about" className="mx-auto w-full max-w-content px-6 py-20">
        <header className="mb-16">
          <p className="mb-3 text-sm font-medium tracking-[0.3em] text-muted">ABOUT</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Background
          </h2>
          <div className="mt-6 max-w-2xl space-y-4 text-muted">
            {profile.bio.map((paragraph, i) => (
              <p key={i} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </header>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mx-auto w-full max-w-content px-6 py-20">
        <header className="mb-14">
          <p className="mb-3 text-sm font-medium tracking-[0.3em] text-muted">
            EXPERIENCE
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Work History
          </h2>
        </header>
        <ol className="space-y-10 border-l border-border pl-8">
          {experience.map((item) => (
            <li key={`${item.company.name}-${item.timeline}`} className="relative">
              <span className="absolute -left-[2.28rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="text-lg font-medium text-foreground">
                  {item.role}
                  <span className="text-muted"> · </span>
                  {item.company.url ? (
                    <a
                      href={item.company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent transition-colors hover:underline"
                    >
                      {item.company.name}
                    </a>
                  ) : (
                    <span className="text-accent">{item.company.name}</span>
                  )}
                  {item.isInternship && (
                    <span className="ml-2 rounded-full border border-border px-2 py-0.5 text-xs text-muted">
                      Internship
                    </span>
                  )}
                </h4>
                <div className="flex flex-col items-start text-xs text-muted sm:items-end">
                  <span className="whitespace-nowrap tracking-wide">
                    {item.timeline}
                  </span>
                  {item.location && (
                    <span className="text-muted/70">{item.location}</span>
                  )}
                </div>
              </div>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <p className="mt-10 border-l-2 border-accent pl-6 font-mono text-sm italic text-muted">
          &ldquo;{experienceQuote}&rdquo;
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mx-auto w-full max-w-content px-6 py-20">
        <header className="mb-14">
          <p className="mb-3 text-sm font-medium tracking-[0.3em] text-muted">
            SKILLS
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Tech Stack
          </h2>
        </header>
        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category}>
              <h4 className="mb-3 text-sm font-medium text-foreground">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 border-l-2 border-accent pl-6 font-mono text-sm italic text-muted">
          &ldquo;{skillsQuote}&rdquo;
        </p>
      </section>

      {/* Education & Credentials Section */}
      <section id="education" className="mx-auto w-full max-w-content px-6 py-20">
        <header className="mb-14">
          <p className="mb-3 text-sm font-medium tracking-[0.3em] text-muted">
            CREDENTIALS
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Education & Certifications
          </h2>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Education */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-base font-medium tracking-wide text-foreground">
              <GraduationCap size={18} className="text-accent" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="rounded-lg border border-border bg-surface/30 p-5 transition-colors hover:border-accent/40"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-base font-medium text-foreground">
                      {edu.degree}
                    </h4>
                    <span className="whitespace-nowrap text-xs text-muted">
                      {edu.timeline}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-accent">{edu.institution}</p>
                  {edu.affiliation && (
                    <p className="mt-0.5 text-xs text-muted">{edu.affiliation}</p>
                  )}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
                    <span>{edu.location}</span>
                    {edu.grade && (
                      <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-accent">
                        {edu.grade}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Publications */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-base font-medium tracking-wide text-foreground">
              <Award size={18} className="text-accent" />
              Certifications & Publications
            </h3>
            <div className="space-y-4">
              {certificationsAndPublications.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-border bg-surface/30 p-5 transition-colors hover:border-accent/40"
                >
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-border px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted">
                      {item.type}
                    </span>
                    {item.year && (
                      <span className="text-xs text-muted">{item.year}</span>
                    )}
                  </div>
                  <h4 className="mt-2 text-sm font-medium text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs text-accent">{item.organization}</p>
                  {item.details && (
                    <p className="mt-2 text-xs text-muted">{item.details}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Preserved as requested */}
      <section id="projects" className="mx-auto w-full max-w-content px-6 py-20">
        <header className="mb-14">
          <p className="mb-3 text-sm font-medium tracking-[0.3em] text-muted">WORK</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            A selection of things I&rsquo;ve built — spanning frontend
            architecture, AI systems, and backend infrastructure.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto w-full max-w-content px-6 py-20">
        <header className="mb-14">
          <p className="mb-3 text-sm font-medium tracking-[0.3em] text-muted">
            GET IN TOUCH
          </p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Contact
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            Have an exciting opportunity, project in mind, or just want to say
            hello? Send a message or reach out directly.
          </p>
        </header>

        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <ContactForm />

          <div>
            <h3 className="mb-4 text-sm font-medium tracking-[0.3em] text-accent">
              ELSEWHERE
            </h3>
            <ul className="space-y-4">
              {socials.map((social) => {
                const Icon = icons[social.icon as keyof typeof icons];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted transition-colors hover:text-accent"
                    >
                      <Icon size={18} />
                      <span className="text-sm">{social.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {profile.links.phone && (
              <div className="mt-8 border-t border-border pt-6">
                <p className="text-xs font-mono uppercase tracking-wider text-muted">
                  Phone
                </p>
                <a
                  href={`tel:${profile.links.phone.replace(/[^+\d]/g, "")}`}
                  className="mt-1.5 inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent"
                >
                  <Phone size={16} className="text-accent" />
                  {profile.links.phone}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
