import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** 1200px content column (120px side margins on the 1440px design). */
export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto w-full max-w-[1232px] px-4 sm:px-6 xl:px-4", className)} {...props} />;
}
