"use client";

import { useState, type FormEvent } from "react";
import { Dropdown } from "@/components/ui/Dropdown";
import { Icon } from "@/components/icons/Icon";

type SearchHeaderProps = {
  query: string;
  onSearch: (query: string) => void;
};

const scopes = ["Courses", "Creators"];

/** Blue 360px band with the page title, search input and scope dropdown. */
export function SearchHeader({ query, onSearch }: SearchHeaderProps) {
  const [value, setValue] = useState(query);
  const [scope, setScope] = useState(scopes[0]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(value.trim());
  };

  return (
    <section className="bg-blue-800 bg-grid px-4 pt-28 pb-14 sm:px-6 lg:h-[360px] lg:pt-[162px] lg:pb-0">
      <h1 className="text-center font-poppins text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] text-gray-50 sm:text-heading-s">
        Find Your Next Course
      </h1>
      <form
        role="search"
        onSubmit={onSubmit}
        className="mx-auto mt-8 flex max-w-[461px] flex-col gap-3 sm:max-w-none sm:flex-row sm:items-start sm:justify-center sm:gap-4 lg:mt-[34px]"
      >
        <label className="flex h-[52px] w-full items-center gap-2 rounded-3xl bg-white px-6 focus-within:ring-2 focus-within:ring-lime-400 sm:w-[461px]">
          <Icon name="search" className="shrink-0 text-gray-400" />
          <span className="sr-only">Search {scope.toLowerCase()}</span>
          <input
            type="search"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (e.target.value === "") onSearch("");
            }}
            placeholder="Search"
            className="w-full min-w-0 bg-transparent text-body-l text-gray-950 outline-none placeholder:text-gray-400"
          />
        </label>
        <Dropdown variant="lime" label={scope} options={scopes} value={scope} onChange={setScope} align="right" />
      </form>
    </section>
  );
}
