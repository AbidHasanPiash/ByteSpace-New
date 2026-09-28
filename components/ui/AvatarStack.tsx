import Image from "next/image";
import { cn } from "@/lib/cn";

type AvatarStackProps = {
  avatars: string[];
  /** Label shown in the trailing circle, e.g. "2K+". */
  count: string;
  size: "sm" | "md";
  countClassName?: string;
};

const sizes = {
  sm: { px: 32, overlap: "-mr-2", text: "text-label-xs leading-5" },
  md: { px: 43, overlap: "-mr-4", text: "font-satoshi text-xs leading-[1.5] font-bold" },
};

export function AvatarStack({ avatars, count, size, countClassName }: AvatarStackProps) {
  const s = sizes[size];
  return (
    <div className="flex items-start">
      {avatars.map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={s.px}
          height={s.px}
          className={cn("relative shrink-0 rounded-full", s.overlap)}
          style={{ width: s.px, height: s.px }}
        />
      ))}
      <span
        className={cn(
          "relative flex shrink-0 items-center justify-center rounded-full",
          s.text,
          countClassName || "bg-lime-400 text-gray-950",
        )}
        style={{ width: s.px, height: s.px }}
      >
        {count}
      </span>
    </div>
  );
}
