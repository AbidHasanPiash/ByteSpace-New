import Image from "next/image";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { Icon } from "@/components/icons/Icon";
import { learnerAvatars, type Course } from "@/data/home";
import { cn } from "@/lib/cn";

type CourseCardProps = {
  course: Course;
  className?: string;
  /** Image loading priority for above-the-fold usages. */
  priority?: boolean;
};

function MetaChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-3xl bg-[rgb(246_246_246/0.6)] px-3 py-1.5 text-label-xs whitespace-nowrap text-black-700 backdrop-blur-[4px]">
      {children}
    </span>
  );
}

export function CourseCard({ course, className, priority }: CourseCardProps) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-[15px] pb-[21px] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgb(0_0_0/0.08)]",
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
        <div className="absolute bottom-[15px] left-3 flex gap-3">
          <MetaChip>{course.lessons} Lessons</MetaChip>
          <MetaChip>{course.duration}</MetaChip>
          <MetaChip>{course.comments} Comments</MetaChip>
        </div>
      </div>

      <div className="mt-[21px] flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h3 className="truncate text-heading-xs text-black" title={course.title}>
            {course.title}
          </h3>
          <p className="text-body-xs text-black-700">
            by <span className="text-blue-800">{course.author}</span>
          </p>
        </div>
        <p className="mr-[3px] flex shrink-0 items-center text-body-l text-black-700">
          {course.rating}&nbsp;
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/fig-star-rate.svg" alt="" width={24} height={24} className="size-6" />
          <span className="sr-only"> out of 5</span>
        </p>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <span className="flex items-center gap-1 rounded-3xl bg-gray-50 px-3 py-1.5 text-label-xs text-gray-700">
          <Icon name="signal" size={20} />
          {course.level}
        </span>
        <AvatarStack avatars={learnerAvatars} count={`${course.learners}+`} size="sm" />
      </div>

      <p className="mt-4 flex items-end">
        <span className="font-poppins text-xl leading-[1.2] font-semibold tracking-[-0.2px] text-blue-800">
          ${course.price}
        </span>
        <span className="text-body-xs text-black-700">/lifetime</span>
      </p>
    </article>
  );
}
