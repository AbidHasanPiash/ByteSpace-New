"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/icons/Icon";

/** Course trailer thumbnail with the glass play button. */
export function CoursePreview({ src, title }: { src: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-[720/479] w-full overflow-hidden rounded-3xl bg-[#443131]">
      <Image
        src={src}
        alt={`${title} preview`}
        fill
        priority
        sizes="(min-width: 1280px) 720px, 100vw"
        className="object-cover"
      />
      {playing ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 p-6 text-center text-body-l text-white">
          The course preview will be available after enrollment.
        </div>
      ) : (
        <button
          type="button"
          aria-label="Play course preview"
          onClick={() => setPlaying(true)}
          className="absolute top-[calc(50%+16.5px)] left-[calc(50%+16px)] flex size-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-[#4f4f4f] bg-[rgb(61_61_61/0.24)] backdrop-blur-[20px] transition-transform hover:scale-105 sm:size-[106px] sm:rounded-3xl"
        >
          <Icon name="playCircle" className="size-12 text-[#f5f2ff] sm:size-[72px]" />
        </button>
      )}
    </div>
  );
}
