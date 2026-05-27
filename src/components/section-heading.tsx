"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  light,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-16", className)}>
      <span
        className={cn(
          "inline-block text-sm font-semibold tracking-widest uppercase mb-4",
          light ? "text-blue-300" : "text-accent"
        )}
      >
        {label}
      </span>
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg max-w-2xl",
            light ? "text-zinc-300" : "text-secondary"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
