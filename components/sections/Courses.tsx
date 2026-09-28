"use client";

import { useState } from "react";
import { CourseCard } from "@/components/ui/CourseCard";
import { Pill } from "@/components/ui/Pill";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { courseTopicRows, courseTopics, courses } from "@/data/home";

/** Splits topics into the three centred rows used in the design. */
function toRows<T>(items: T[], sizes: number[]) {
  let start = 0;
  return sizes.map((size) => items.slice(start, (start += size)));
}

export function Courses() {
  const [active, setActive] = useState(courseTopics[0]);
  const rows = toRows(courseTopics, courseTopicRows);

  return (
    <section id="courses" className="scroll-mt-10 pt-14 lg:pt-[72px]">
      <div className="mx-auto max-w-[1232px] px-4 sm:px-6 xl:px-4">
        <SectionHeading
          title="Discover Your Passion, Build Your Skills"
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        <div
          role="group"
          aria-label="Course topics"
          className="mt-8 -mx-4 flex gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:justify-center sm:gap-x-4 sm:gap-y-[21px] sm:overflow-visible sm:px-0 sm:pb-0 lg:mt-[42px]"
        >
          {rows.map((row, r) => (
            <div key={r} className="contents xl:flex xl:w-full xl:items-center xl:justify-center xl:gap-4">
              {row.map((topic) => (
                <Pill key={topic} active={active === topic} onClick={() => setActive(topic)}>
                  {topic}
                </Pill>
              ))}
              {r === rows.length - 1 && (
                <a
                  href="#categories"
                  className="shrink-0 self-center text-center text-label-m whitespace-nowrap text-blue-800 hover:underline"
                >
                  + More
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-[77px] lg:gap-10 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
