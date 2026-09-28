"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

type CreatorHeaderProps = {
  name: string;
  title: string;
  avatar: string;
  bio: string[];
  products: number;
  followers: number;
};

function Stat({ value, label }: { value: number; label: string }) {
  return (
    <li className="flex h-[46px] items-center rounded-3xl bg-white px-6 text-label-l whitespace-nowrap text-gray-950">
      <span className="text-blue-800">{value}</span>&nbsp;{label}
    </li>
  );
}

/** Blue profile header: avatar, name + "Creator" badge, bio, stats and follow button. */
export function CreatorHeader({ name, title, avatar, bio, products, followers }: CreatorHeaderProps) {
  const [following, setFollowing] = useState(false);

  return (
    <section className="bg-blue-800 bg-grid px-4 pt-28 pb-14 sm:px-6 lg:pt-[172px] xl:h-[592px] xl:pb-0">
      <div className="mx-auto max-w-[1198px] xl:ml-[calc(50%-598px)]">
        <div className="flex flex-col gap-6 sm:flex-row">
          <Image
            src={avatar}
            alt={name}
            width={96}
            height={96}
            priority
            className="size-24 shrink-0 rounded-3xl object-cover"
          />
          <div>
            <div className="flex flex-wrap items-end gap-2.5">
              <h1 className="font-poppins text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] text-gray-50 sm:text-heading-s">
                {name}
              </h1>
              <span className="rounded-3xl bg-lime-400 px-6 py-2 text-label-m leading-[19px] text-gray-950">
                Creator
              </span>
            </div>
            <p className="mt-4 text-body-l text-gray-50">{title}</p>
          </div>
        </div>

        <div className="mt-10 text-body-m text-gray-50 sm:text-body-l xl:mt-12">
          {bio.map((line) => (
            <p key={line.slice(0, 20)}>{line}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 xl:mt-[41px]">
          <ul className="flex flex-wrap gap-4">
            <Stat value={products} label="Products" />
            <Stat value={followers + (following ? 1 : 0)} label="Followers" />
          </ul>
          <Button aria-pressed={following} onClick={() => setFollowing((v) => !v)} >
            {following ? "Following" : "Follow"}
          </Button>
        </div>
      </div>
    </section>
  );
}
