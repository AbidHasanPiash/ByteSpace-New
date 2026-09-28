import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "lime" | "blue" | "outline";

const base =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-3xl px-6 py-3 text-label-l whitespace-nowrap transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  lime: "bg-lime-400 text-gray-950 hover:bg-lime-500 focus-visible:outline-lime-400",
  blue: "bg-blue-800 text-white hover:bg-[#0032c2] focus-visible:outline-blue-800",
  outline:
    "border border-gray-200 bg-white text-gray-950 hover:border-gray-300 hover:bg-gray-50 focus-visible:outline-blue-800",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant };

export function Button({ variant = "lime", className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={cn(base, variants[variant], className)} {...props} />;
}

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: Variant };

export function ButtonLink({ variant = "lime", className, ...props }: ButtonLinkProps) {
  return <Link className={cn(base, variants[variant], className)} {...props} />;
}
