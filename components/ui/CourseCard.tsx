import Image from "next/image";
import Link from "next/link";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { Icon } from "@/components/icons/Icon";
import { learnerAvatars, type Course } from "@/data/home";
import { cn } from "@/lib/cn";

type CourseCardProps = {
  course: Course;
  /**
   * "default" — course grids (Home, Search).
   * "feature" — decorative cards (Growth section, auth pages): taller line heights,
   * lime rating star and a dark learner-count badge.
   */
  variant?: "default" | "feature";
  className?: string;
  /** Image loading priority for above-the-fold usages. */
  priority?: boolean;
};

const styles = {
  default: {
    card: "pb-[20.8px]",
    chip: "py-1.5 leading-[1.2]",
    body: "mt-5",
    title: "leading-[1.2]",
    count: "",
  },
  feature: {
    card: "pb-4",
    chip: "py-1.5 leading-5",
    body: "mt-[21px]",
    title: "leading-7",
    count: "bg-black text-white",
  },
};

function MetaChip({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "rounded-3xl bg-[rgb(246_246_246/0.6)] px-3 font-satoshi text-xs font-medium whitespace-nowrap text-black-700 backdrop-blur-[4px]",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function CourseCard({ course, variant = "default", className, priority }: CourseCardProps) {
  const s = styles[variant];
  // Keep a positioning context for the stretched link unless the caller positions the card.
  const positioned = /\b(absolute|fixed)\b/.test(className ?? "");
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-4 transition-shadow duration-300 hover:shadow-[0_12px_32px_rgb(0_0_0/0.08)]",
        !positioned && "relative",
        s.card,
        className,
      )}
    >
      <div className="relative aspect-[341/195.145] w-full overflow-hidden rounded-xl bg-[#443131]">
        <Image
          src={course.image}
          alt={course.title}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 341px, (min-width: 768px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-[76.87%] right-3 left-3 flex gap-2 overflow-hidden sm:right-auto sm:gap-3">
          <MetaChip className={s.chip}>{course.lessons} Lessons</MetaChip>
          <MetaChip className={s.chip}>{course.duration}</MetaChip>
          <MetaChip className={s.chip}>{course.comments} Comments</MetaChip>
        </div>
      </div>

      <div className={cn("flex items-start justify-between gap-2", s.body)}>
        <div className="min-w-0">
          <h3 className={cn("truncate text-heading-xs text-black", s.title)} title={course.title}>
            {/* Stretched link: the whole card is clickable */}
            <Link href={`/courses/${course.slug}`} className="after:absolute after:inset-0 after:rounded-3xl">
              {course.title}
            </Link>
          </h3>
          <p className="font-satoshi text-xs leading-5 text-black-700">
            by{" "}
            <Link href="/creators/purepearl-studio" className="relative z-10 text-blue-800 hover:underline">
              {course.author}
            </Link>
          </p>
        </div>
        <p className="mr-px flex shrink-0 items-center text-body-l text-black-700">
          {course.rating}&nbsp;
          {variant === "feature" ? (
            <Icon name="star" className="text-lime-400" />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/icons/fig-star-rate.svg" alt="" width={24} height={24} className="size-6" />
          )}
          <span className="sr-only"> out of 5</span>
        </p>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <span className="flex items-center gap-1 rounded-3xl bg-gray-50 px-3 py-1.5 text-label-xs leading-5 text-gray-700">
          <Icon name="signal" size={20} />
          {course.level}
        </span>
        <AvatarStack
          avatars={learnerAvatars}
          count={`${course.learners}+`}
          size="sm"
          countClassName={s.count}
        />
      </div>

      <p className="mt-4 flex items-end leading-6">
        <span className="font-poppins text-xl leading-6 font-semibold tracking-[-0.2px] text-blue-800">
          ${course.price}
        </span>
        <span className="text-body-xs leading-5 text-black-700">/lifetime</span>
      </p>
    </article>
  );
}
