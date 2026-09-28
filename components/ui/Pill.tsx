import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type PillProps = ButtonHTMLAttributes<HTMLButtonElement> & { active?: boolean };

/** Rounded topic filter chip ("Featured", "Music", ...). */
export function Pill({ active, className, ...props }: PillProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "flex h-[43px] shrink-0 items-center rounded-3xl px-4 text-label-m whitespace-nowrap transition-colors duration-200",
        active ? "bg-lime-400 text-gray-950" : "bg-gray-50 text-gray-700 hover:bg-gray-100",
        className,
      )}
      {...props}
    />
  );
}
