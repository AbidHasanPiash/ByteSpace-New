import { cn } from "@/lib/cn";

/** Heading + content block used by the About / Lessons / Reviews tabs (24px rhythm). */
export function CourseSection({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("flex flex-col gap-6", className)}>
      <h2 className="font-poppins text-xl leading-6 font-semibold tracking-[-0.2px] text-gray-950">{title}</h2>
      {children}
    </section>
  );
}

export const courseBody = "text-body-m leading-[26px] text-gray-700";
