"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, profile } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.2em] text-foreground transition-colors hover:text-accent"
          onClick={() => setOpen(false)}
        >
          {profile.logo}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative py-1 text-sm tracking-wide transition-colors hover:text-accent",
                  active ? "text-accent" : "text-muted",
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-[1px] left-0 h-px w-full bg-accent" />
                )}
              </Link>
            );
          })}
          <Link
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-accent px-4 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Resume
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-sm tracking-wide",
                    active ? "text-accent" : "text-muted hover:text-accent",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-accent"
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
