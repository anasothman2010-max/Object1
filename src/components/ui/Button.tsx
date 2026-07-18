import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-700 text-white hover:bg-brand-900 border border-brand-700 hover:border-brand-900",
  outline:
    "bg-transparent text-white border border-white/60 hover:bg-white/10 hover:border-white",
  ghost: "bg-transparent text-brand-700 hover:text-brand-900",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  onClick,
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center px-8 py-3 text-sm font-medium uppercase tracking-widest transition-colors duration-300",
    variantStyles[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
