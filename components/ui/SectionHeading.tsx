import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  size?: "m" | "s";
  className?: string;
};

/** Centered section title + lead paragraph. */
export function SectionHeading({ title, description, size = "m", className }: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center", className)}>
      <h2
        className={cn(
          "text-ink",
          size === "m"
            ? "max-w-[588px] text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] font-poppins md:text-heading-m"
            : "text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] font-poppins md:text-heading-s",
        )}
      >
        {title}
      </h2>
      <p className="text-body-m text-gray-400 md:text-body-l">{description}</p>
    </div>
  );
}
