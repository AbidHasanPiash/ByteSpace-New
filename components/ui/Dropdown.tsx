"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Icon, type IconName } from "@/components/icons/Icon";
import { cn } from "@/lib/cn";

type DropdownProps = {
  label: string;
  options: string[];
  value?: string;
  onChange: (value: string) => void;
  /** Leading icon (outlined toolbar buttons). */
  icon?: IconName;
  /** "outline" = white toolbar button, "lime" = filled button with a chevron. */
  variant?: "outline" | "lime";
  align?: "left" | "right";
  className?: string;
};

export function Dropdown({
  label,
  options,
  value,
  onChange,
  icon,
  variant = "outline",
  align = "left",
  className,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center rounded-3xl whitespace-nowrap transition-colors",
          variant === "outline"
            ? "h-[50px] gap-1 border border-gray-200 bg-white px-4 text-label-m text-gray-700 hover:border-gray-300"
            : "h-12 gap-2 bg-lime-400 px-6 text-label-l text-gray-950 hover:bg-lime-500",
        )}
      >
        {icon && <Icon name={icon} className="text-gray-950" />}
        {label}
        {variant === "lime" && <Icon name="expandMore" className={cn("transition-transform", open && "rotate-180")} />}
      </button>

      {open && (
        <ul
          id={menuId}
          role="listbox"
          aria-label={label}
          className={cn(
            "absolute top-full z-20 mt-2 min-w-full rounded-2xl border border-gray-100 bg-white p-2 shadow-[0_12px_32px_rgb(0_0_0/0.12)]",
            align === "right" ? "right-0" : "left-0",
          )}
        >
          {options.map((option) => (
            <li key={option} role="option" aria-selected={option === value}>
              <button
                type="button"
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={cn(
                  "w-full rounded-xl px-3 py-2 text-left text-body-m whitespace-nowrap hover:bg-gray-50",
                  option === value ? "text-blue-800" : "text-gray-950",
                )}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
