import type { Metadata } from "next";
import { Github, Linkedin, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { profile, socials } from "@/lib/data";

const icons = { github: Github, linkedin: Linkedin, mail: Mail };

export const metadata: Metadata = {
  title: `Contact — ${profile.name}`,
  description: "Get in touch.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-content px-6 py-20">
      <header className="mb-14">
        <p className="mb-3 text-sm font-medium tracking-[0.3em] text-muted">
          GET IN TOUCH
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Contact
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Have a project in mind or just want to say hello? Send a message or
          reach out directly.
        </p>
      </header>

      <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
        <ContactForm />

        <div>
          <h2 className="mb-4 text-sm font-medium tracking-[0.3em] text-accent">
            ELSEWHERE
          </h2>
          <ul className="space-y-4">
            {socials.map((social) => {
              const Icon = icons[social.icon];
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
        </div>
      </div>
    </div>
  );
}
