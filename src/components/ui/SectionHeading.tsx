import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        align === "left" && "text-left",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-brand-500">
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl font-light tracking-tight text-ink md:text-5xl">{title}</h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed text-muted",
            align === "center" && "mx-auto max-w-2xl",
            align === "left" && "max-w-xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
