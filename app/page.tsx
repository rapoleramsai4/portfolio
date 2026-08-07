import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { RotatingRole } from "@/components/rotating-role";
import { profile } from "@/lib/data";

export default function HomePage() {
  return (
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
        {profile.bio[profile.bio.length - 1]}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <ButtonLink href="/projects" variant="primary">
          View Projects
          <ArrowRight size={16} />
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          Get in Touch
        </ButtonLink>
      </div>

      <blockquote className="mt-20 max-w-xl border-l-2 border-accent pl-6 font-mono text-sm italic text-muted">
        &ldquo;{profile.quote}&rdquo;
      </blockquote>
    </section>
  );
}
