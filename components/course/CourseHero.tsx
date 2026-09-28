import Link from "next/link";
import { ShareButton } from "@/components/course/ShareButton";
import { Icon, type IconName } from "@/components/icons/Icon";
import { courseDetail } from "@/data/course";

type CourseHeroProps = { title: string };

function Stat({ icon, children }: { icon: IconName; children: React.ReactNode }) {
  return (
    <li className="flex h-10 items-center gap-2 rounded-3xl bg-white px-6 text-label-m whitespace-nowrap text-gray-950">
      <Icon name={icon} className="shrink-0 text-blue-800" />
      {children}
    </li>
  );
}

/** Title block on the blue header: headline, subtitle, author, stats and share. */
export function CourseHero({ title }: CourseHeroProps) {
  const { subtitle, level, rating, reviewCount, students, creator } = courseDetail;
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between xl:ml-0.5 min-[1440px]:-mr-[85px]">
      <div className="flex max-w-[769px] flex-col">
        <h1 className="font-poppins text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] text-gray-50 sm:text-heading-s">
          {title}
        </h1>
        <p className="mt-2 text-heading-xs text-gray-50">{subtitle}</p>
        <p className="mt-6 font-satoshi text-lg leading-[22px] text-gray-50">
          by{" "}
          <Link href={`/creators/${creator.slug}`} className="text-lime-400 hover:underline">
            purepearl studio
          </Link>
        </p>
        <ul className="mt-6 flex flex-wrap gap-4">
          <Stat icon="signal">{level}</Stat>
          <Stat icon="starRound">
            {rating} ({reviewCount} reviews)
          </Stat>
          <Stat icon="people">{students} Students</Stat>
        </ul>
      </div>
      <ShareButton title={title} />
    </div>
  );
}
