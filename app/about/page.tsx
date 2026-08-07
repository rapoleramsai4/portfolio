import type { Metadata } from "next";
import { profile, experience, experienceQuote, skills, skillsQuote } from "@/lib/data";

export const metadata: Metadata = {
  title: `About — ${profile.name}`,
  description: "Background, experience, and skills.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-content px-6 py-20">
      <header className="mb-16">
        <p className="mb-3 text-sm font-medium tracking-[0.3em] text-muted">ABOUT</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Background
        </h1>
        <div className="mt-6 max-w-2xl space-y-4 text-muted">
          {profile.bio.map((paragraph, i) => (
            <p key={i} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </header>

      <section className="mb-20">
        <h2 className="mb-8 text-sm font-medium tracking-[0.3em] text-accent">
          EXPERIENCE
        </h2>
        <ol className="space-y-10 border-l border-border pl-8">
          {experience.map((item) => (
            <li key={`${item.company.name}-${item.timeline}`} className="relative">
              <span className="absolute -left-[2.28rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-medium text-foreground">
                  {item.role}
                  <span className="text-muted"> · </span>
                  <a
                    href={item.company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent transition-colors hover:underline"
                  >
                    {item.company.name}
                  </a>
                  {item.isInternship && (
                    <span className="ml-2 rounded-full border border-border px-2 py-0.5 text-xs text-muted">
                      Internship
                    </span>
                  )}
                </h3>
                <span className="whitespace-nowrap text-xs tracking-wide text-muted">
                  {item.timeline}
                </span>
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

      <section>
        <h2 className="mb-8 text-sm font-medium tracking-[0.3em] text-accent">
          SKILLS
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="mb-3 text-sm font-medium text-foreground">
                {group.category}
              </h3>
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
    </div>
  );
}
