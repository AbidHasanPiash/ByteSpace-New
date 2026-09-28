"use client";

import { useMemo, useState } from "react";
import { CourseCard } from "@/components/ui/CourseCard";
import { Dropdown } from "@/components/ui/Dropdown";
import { categories, type Course } from "@/data/home";
import { levels, sortOptions } from "@/data/search";

const categoryOptions = ["All categories", ...categories.map((c) => c.label)];
const filterOptions = ["All courses", "Free", "Paid", "Certificate included"];

/** The creator's course list with the same toolbar as the search page. */
export function CreatorCourses({ courses }: { courses: Course[] }) {
  const [filter, setFilter] = useState(filterOptions[0]);
  const [level, setLevel] = useState(levels[0]);
  const [category, setCategory] = useState(categoryOptions[0]);
  const [sort, setSort] = useState(sortOptions[0]);

  const visible = useMemo(
    () =>
      courses.filter(
        (course) =>
          (level === levels[0] || course.level === level) &&
          (category === categoryOptions[0] || course.category === category),
      ),
    [courses, level, category],
  );

  return (
    <section
      aria-label="Courses by this creator"
      className="mx-auto max-w-[1232px] px-4 pt-10 pb-16 sm:px-6 lg:pt-[61px] lg:pb-[60px] xl:px-4"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 xl:-ml-0.5">
        <div className="flex flex-wrap gap-4">
          <Dropdown icon="filter" label="Filter" options={filterOptions} value={filter} onChange={setFilter} />
          <Dropdown icon="signal" label="Level" options={levels} value={level} onChange={setLevel} />
          <Dropdown icon="category" label="Category" options={categoryOptions} value={category} onChange={setCategory} />
        </div>
        <Dropdown icon="sort" label={sort} options={sortOptions} value={sort} onChange={setSort} align="right" />
      </div>

      {visible.length > 0 ? (
        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[38px] lg:gap-10 xl:-ml-0.5 xl:grid-cols-[repeat(3,375px)] xl:gap-[38px]">
          {visible.map((course) => (
            <li key={course.slug}>
              <CourseCard course={course} className="h-full" />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-[38px] rounded-3xl border border-dashed border-gray-200 px-6 py-20 text-center">
          <p className="text-heading-xs text-gray-950">No courses match these filters</p>
          <p className="mt-2 text-body-m text-gray-400">Try another level or category.</p>
        </div>
      )}
    </section>
  );
}
