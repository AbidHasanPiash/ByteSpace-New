"use client";

import { useState } from "react";
import { Icon } from "@/components/icons/Icon";

export function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) {
        await navigator.share({ title, url });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Share sheet dismissed — nothing to do.
    }
  };

  return (
    <button
      type="button"
      onClick={share}
      className="flex h-10 shrink-0 items-center gap-2 self-start rounded-3xl bg-lime-400 px-6 text-label-m leading-6 text-gray-950 transition-colors hover:bg-lime-500"
    >
      <Icon name="share" />
      {copied ? "Link copied" : "Share"}
    </button>
  );
}
