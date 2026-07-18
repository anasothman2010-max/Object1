import type { PropertyStatus } from "@/types";
import { cn } from "@/lib/utils";

const statusConfig: Record<PropertyStatus, { label: string; className: string }> = {
  "for-sale": {
    label: "For Sale",
    className: "bg-brand-700 text-white",
  },
  "for-rent": {
    label: "For Rent",
    className: "bg-ink/80 text-white",
  },
  sold: {
    label: "Sold",
    className: "bg-muted/80 text-white",
  },
};

interface BadgeProps {
  status: PropertyStatus;
  className?: string;
}

export function Badge({ status, className }: BadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "absolute left-4 top-4 px-3 py-1 text-xs font-medium uppercase tracking-wider",
        config.className,
        className,
      )}
    >
      {config.label}
    </span>
  );
}
