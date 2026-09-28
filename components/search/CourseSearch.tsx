"use client";

import { useMemo, useState } from "react";
import { SearchHeader } from "@/components/search/SearchHeader";
import { CourseCard } from "@/components/ui/CourseCard";
import { Dropdown } from "@/components/ui/Dropdown";
import { Pagination } from "@/components/ui/Pagination";
import { Pill } from "@/components/ui/Pill";
import { categories } from "@/data/home";
import { TOTAL_PAGES, levels, searchResults, searchTopics, sortOptions } from "@/data/search";

const categoryOptions = ["All categories", ...categories.map((c) => c.label)];
const filterOptions = ["All courses", "Free", "Paid", "Certificate included"];

export function CourseSearch({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);
  const [topic, setTopic] = useState(searchTopics[0]);
  const [filter, setFilter] = useState(filterOptions[0]);
  const [level, setLevel] = useState(levels[0]);
  const [category, setCategory] = useState(categoryOptions[0]);
  const [sort, setSort] = useState(sortOptions[0]);
  const [page, setPage] = useState(1);

  const results = useMemo(() => {
    const q = query.toLowerCase();
    return searchResults.filter(
      (course) =>
        (!q || course.title.toLowerCase().includes(q) || course.author.toLowerCase().includes(q)) &&
        (level === levels[0] || course.level === level) &&
        (category === categoryOptions[0] || course.category === category),
    );
  }, [query, level, category]);

  const resetPage = <T,>(set: (v: T) => void) => (v: T) => {
    set(v);
    setPage(1);
  };

  return (
    <>
      <SearchHeader query={initialQuery} onSearch={resetPage(setQuery)} />

      <div className="mx-auto max-w-[1232px] px-4 pt-10 pb-16 sm:px-6 lg:pt-[71px] lg:pb-[71px] xl:px-4">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4">
            <Dropdown icon="filter" label="Filter" options={filterOptions} value={filter} onChange={setFilter} />
            <Dropdown icon="signal" label="Level" options={levels} value={level} onChange={resetPage(setLevel)} />
            <Dropdown
              icon="category"
              label="Category"
              options={categoryOptions}
              value={category}
              onChange={resetPage(setCategory)}
            />
          </div>
          <Dropdown icon="sort" label={sort} options={sortOptions} value={sort} onChange={setSort} align="right" />
        </div>

        {/* Topics */}
        <div
          role="group"
          aria-label="Course topics"
          className="-mx-4 mt-8 flex gap-4 lg:mt-[31px] overflow-x-auto px-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 xl:mx-0 xl:justify-between xl:gap-0 xl:overflow-visible xl:px-0"
        >
          {searchTopics.map((t) => (
            <Pill key={t} active={t === topic} onClick={() => setTopic(t)}>
              {t}
            </Pill>
          ))}
        </div>

        {/* Results */}
        {results.length > 0 ? (
          <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-[76px] lg:gap-10 xl:grid-cols-[repeat(3,375px)] xl:gap-[38px]">
            {results.map((course, i) => (
              <li key={`${course.slug}-${i}`}>
                <CourseCard course={course} className="h-full" />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-[76px] rounded-3xl border border-dashed border-gray-200 px-6 py-20 text-center">
            <p className="text-heading-xs text-gray-950">No courses found</p>
            <p className="mt-2 text-body-m text-gray-400">Try a different keyword or clear the filters.</p>
          </div>
        )}

        {results.length > 0 && (
          <div className="mt-12 lg:mt-[70px] xl:pl-[52px]">
            <Pagination
              page={page}
              total={TOTAL_PAGES}
              onChange={(p) => {
                setPage(p);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}
