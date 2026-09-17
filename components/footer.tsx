import Link from "next/link";
import { Github, Globe, Linkedin, Mail } from "lucide-react";
import { profile, socials } from "@/lib/data";

const icons = { github: Github, linkedin: Linkedin, mail: Mail, globe: Globe };

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-content flex-col items-center gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          {socials.map((social) => {
            const Icon = icons[social.icon];
            return (
              <Link
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted transition-colors hover:text-accent"
              >
                <Icon size={18} />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
