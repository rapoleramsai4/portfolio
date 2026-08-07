import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { profile, projects } from "@/lib/data";

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
  description: "A selection of projects.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-content px-6 py-20">
      <header className="mb-14">
        <p className="mb-3 text-sm font-medium tracking-[0.3em] text-muted">WORK</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Projects
        </h1>
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
    </div>
  );
}
