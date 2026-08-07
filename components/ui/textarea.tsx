import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted transition-colors duration-200 focus:border-accent focus:outline-none",
        className,
      )}
      {...props}
    />
  );
}
