"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/icons/Icon";
import { Logo } from "@/components/ui/Logo";
import { navLinks } from "@/data/home";
import { cn } from "@/lib/cn";

/** Transparent header that sits on top of the blue hero (120px tall on desktop). */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // "/courses/..." highlights Courses, "/creators/..." highlights Creators
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("/").slice(0, 2).join("/"));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="relative mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:h-[120px] xl:px-[120px]">
        <Logo tone="light" className="lg:self-start lg:pt-[35px] xl:ml-0.5" />

        <nav aria-label="Main" className="absolute left-1/2 hidden -translate-x-[calc(50%+0.5px)] lg:block">
          <ul className="flex gap-6 text-gray-50">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "transition-opacity hover:opacity-80",
                    isActive(link.href) ? "text-label-m" : "font-satoshi text-base leading-[1.6]",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-start gap-6 self-start pt-12 text-body-m text-gray-50 lg:flex">
          <Link href="/login" className="transition-opacity hover:opacity-80">
            Sign In
          </Link>
          <Link href="/signup" className="transition-opacity hover:opacity-80">
            Join Us
          </Link>
          <button type="button" aria-label="Cart" className="transition-opacity hover:opacity-80">
            <Icon name="shoppingBag" />
          </button>
        </div>

        <div className="flex items-center gap-4 text-gray-50 lg:hidden">
          <button type="button" aria-label="Cart">
            <Icon name="shoppingBag" />
          </button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} size={28} />
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 top-20 bottom-0 bg-blue-800 px-4 pt-6 pb-10 transition-[opacity,visibility] duration-200 sm:px-6 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-label-xl text-gray-50 hover:bg-white/10"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex gap-3 px-4">
          <Link
            href="/login"
            className="flex-1 rounded-3xl border border-white/40 px-6 py-3 text-center text-label-l text-gray-50"
          >
            Sign In
          </Link>
          <Link href="/signup" className="flex-1 rounded-3xl bg-lime-400 px-6 py-3 text-center text-label-l text-gray-950">
            Join Us
          </Link>
        </div>
      </div>
    </header>
  );
}
