"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "done">("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setStatus(valid ? "done" : "error");
    if (valid) setEmail("");
  };

  return (
    <form onSubmit={onSubmit} noValidate className="relative">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
        <label className="w-full sm:w-[376px]">
          <span className="sr-only">Email address</span>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setStatus("idle");
            }}
            placeholder="Enter your email"
            aria-invalid={status === "error"}
            className="h-[52px] w-full rounded-full border border-gray-200 bg-white px-6 text-body-m text-gray-950 outline-none placeholder:text-gray-950 focus:border-blue-800 aria-invalid:border-red-500"
          />
        </label>
        <Button type="submit">Search</Button>
      </div>
      <p aria-live="polite" className="absolute top-full left-0 mt-1 text-body-xs">
        {status === "error" && <span className="text-red-600">Please enter a valid email address.</span>}
        {status === "done" && <span className="text-blue-800">Thanks for subscribing!</span>}
      </p>
    </form>
  );
}
