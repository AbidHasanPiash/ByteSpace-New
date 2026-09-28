"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

/** About / Lessons / Reviews navigation — each tab is its own route. */
export function CourseTabs({ slug }: { slug: string }) {
  const pathname = usePathname();
  const base = `/courses/${slug}`;
  const tabs = [
    { label: "About", href: base },
    { label: "Lessons", href: `${base}/lessons` },
    { label: "Reviews", href: `${base}/reviews` },
  ];

  return (
    <nav aria-label="Course sections" className="flex gap-4">
      {tabs.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            scroll={false}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex h-[43px] items-center rounded-3xl px-4 text-label-m transition-colors",
              active ? "bg-lime-400 text-gray-950" : "bg-gray-50 text-gray-700 hover:bg-gray-100",
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
