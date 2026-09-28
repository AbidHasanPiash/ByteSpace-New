"use client";

import Image from "next/image";
import { useState } from "react";
import { CourseSection, courseBody } from "@/components/course/CourseSection";
import { Icon } from "@/components/icons/Icon";
import { courseDetail, type CourseReview } from "@/data/course";
import { cn } from "@/lib/cn";

/** Five 24px stars on a 28px rhythm (gray-700), as in the design. */
function Stars({ className }: { className?: string }) {
  return (
    <span className={cn("flex gap-1 text-gray-700", className)} aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <Icon key={i} name="star" />
      ))}
    </span>
  );
}

function RatingSummary() {
  const { averageRating, ratingBreakdown } = courseDetail;
  return (
    <div className="-mx-px flex flex-col items-center gap-6 rounded-2xl border border-gray-200 p-6 sm:flex-row sm:px-10 sm:py-[39px]">
      <div className="flex h-[140px] w-[129px] shrink-0 flex-col items-center justify-center rounded-lg bg-lime-400 text-gray-950">
        <p className="text-label-s leading-[17px]">Ratings</p>
        <p className="font-poppins text-4xl leading-[43px] font-semibold tracking-[-0.36px]">{averageRating}</p>
      </div>
      <ul className="flex w-full flex-col gap-1" aria-label="Rating breakdown">
        {ratingBreakdown.map((row) => (
          <li key={row.stars} className="flex h-[26px] items-center">
            <span className="h-2 w-full max-w-[282px] overflow-hidden rounded-3xl bg-gray-100">
              <span className="block h-full rounded-3xl bg-lime-400" style={{ width: `${row.fill * 100}%` }} />
            </span>
            <Stars className="ml-4 hidden sm:flex" />
            <span className="sr-only">{row.stars} stars:</span>
            <span className={`ml-4 flex-1 text-right ${courseBody}`}>{row.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ReviewCard({ review }: { review: CourseReview }) {
  return (
    <article className="-mx-px flex flex-col gap-6 rounded-3xl border border-gray-200 p-6 sm:p-10">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Image
              src={review.avatar}
              alt={review.name}
              width={52}
              height={52}
              className="size-[52px] rounded-full object-cover"
            />
            <div>
              <p className="font-satoshi text-lg leading-6 text-gray-950">{review.name}</p>
              <p className="text-body-m text-gray-700">{review.role}</p>
            </div>
          </div>
          <Stars />
          <span className="sr-only">Rated {review.rating} out of 5</span>
        </div>
        <p className="shrink-0 text-body-m text-gray-700">{review.when}</p>
      </div>
      <p className={courseBody}>{review.text}</p>
    </article>
  );
}

const filters = ["All rating", 5, 4, 3, 2, 1] as const;

export function ReviewsTab() {
  const { reviewsIntro, reviews } = courseDetail;
  const [filter, setFilter] = useState<(typeof filters)[number]>("All rating");
  const visible = filter === "All rating" ? reviews : reviews.filter((r) => r.rating === filter);

  return (
    <div className="flex flex-col gap-6 xl:w-[723px]">
      <CourseSection title="What Learners Are Saying">
        <p className={courseBody}>{reviewsIntro}</p>
        <RatingSummary />
      </CourseSection>

      <CourseSection title="Individual Reviews:">
        <div role="group" aria-label="Filter reviews by rating" className="flex flex-wrap items-start gap-4">
          {filters.map((f) => {
            const active = f === filter;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={active}
                aria-label={f === "All rating" ? undefined : `${f} star reviews`}
                onClick={() => setFilter(f)}
                className={cn(
                  "flex items-center gap-1 rounded-3xl px-4 text-label-m transition-colors",
                  f === "All rating" ? "h-[43px]" : "h-12",
                  active ? "bg-lime-400 text-gray-950" : "bg-gray-50 text-gray-700 hover:bg-gray-100",
                )}
              >
                {f !== "All rating" && <Icon name="star" />}
                {f}
              </button>
            );
          })}
        </div>
        {visible.length > 0 ? (
          visible.map((review) => <ReviewCard key={review.name} review={review} />)
        ) : (
          <p className="rounded-3xl border border-dashed border-gray-200 px-6 py-12 text-center text-body-m text-gray-400">
            No {filter}-star reviews yet.
          </p>
        )}
      </CourseSection>
    </div>
  );
}
