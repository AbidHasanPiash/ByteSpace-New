import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  /** "light" = on blue backgrounds, "dark" = on white backgrounds. */
  tone?: "light" | "dark";
  className?: string;
};

export function Logo({ tone = "dark", className }: LogoProps) {
  return (
    <Link href="/" aria-label="ByteSpace home" className={cn("inline-flex items-start gap-2", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/icons/logo-mark.svg" alt="" width={29} height={32} className="h-[31.5px] w-[28.875px]" />
      <span
        className={cn(
          "mt-[7px] font-clash text-2xl leading-normal font-bold",
          tone === "light" ? "text-gray-50" : "text-gray-950",
        )}
      >
        ByteSpace
      </span>
    </Link>
  );
}
