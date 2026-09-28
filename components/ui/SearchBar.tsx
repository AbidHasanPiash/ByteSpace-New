"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/icons/Icon";

export function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    router.push(q ? `/courses?q=${encodeURIComponent(q)}` : "/courses");
  };

  return (
    <form
      role="search"
      onSubmit={onSubmit}
      className="flex w-full max-w-[461px] flex-col items-stretch gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:items-start sm:gap-4"
    >
      <label className="flex h-[52px] w-full items-center gap-2 rounded-3xl bg-white px-6 py-3 focus-within:ring-2 focus-within:ring-lime-400 sm:w-[461px]">
        <Icon name="search" className="shrink-0 text-gray-400" />
        <span className="sr-only">Search courses</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Course, topic, creator"
          className="w-full min-w-0 bg-transparent text-body-l text-gray-950 outline-none placeholder:text-gray-400"
        />
      </label>
      <Button type="submit">Search</Button>
    </form>
  );
}
