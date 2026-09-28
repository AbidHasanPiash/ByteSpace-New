import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/icons/Icon";
import { courseDetail } from "@/data/course";

const sectionTitle = "font-poppins text-xl leading-6 font-semibold tracking-[-0.2px] text-gray-950";
const body = "text-body-m leading-[26px] text-gray-700";

/** Sticky-looking enrollment card on the right of the course page (412px wide on desktop). */
export function CourseSidebar({ price }: { price: number }) {
  const { lessonsSummary, lessonPreview, moreVideos, cta, includes, creator } = courseDetail;

  return (
    <aside className="flex w-full flex-col rounded-3xl border border-gray-200 bg-white p-6 sm:p-10 xl:w-[414px] xl:p-10">
      <h2 className={sectionTitle}>{lessonsSummary}</h2>
      <ol className="mt-6 flex flex-col gap-3">
        {lessonPreview.map((lesson, i) => (
          <li key={lesson.title} className="flex items-start justify-between gap-4 sm:pr-[9px]">
            <span className="flex gap-2 text-label-m leading-[19px] text-gray-950">
              <span className="w-6 shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <span className="max-w-[198px] leading-[19px]">{lesson.title}</span>
            </span>
            <span className="shrink-0 text-body-m leading-[26px] text-blue-800">{lesson.duration}</span>
          </li>
        ))}
        <li className={body}>{moreVideos} more videos</li>
      </ol>

      <p className={`mt-6 ${body}`}>{cta}</p>
      <p className="mt-6 flex items-end">
        <span className="font-poppins text-4xl leading-[38px] font-semibold tracking-[-0.36px] text-blue-800">
          ${price}
        </span>
        <span className={body}>/lifetime</span>
      </p>
      <Button className="mt-6 w-full">Enroll Now</Button>

      <h2 className={`mt-6 ${sectionTitle}`}>This course include</h2>
      <ul className="mt-6 flex flex-col gap-3">
        {includes.map((item) => (
          <li key={item.label} className={`flex items-start gap-2 ${body}`}>
            <Icon name={item.icon} className="shrink-0 text-blue-800" />
            {item.label}
          </li>
        ))}
      </ul>

      <hr className="mt-[23px] border-[#d1d1d1]" />

      <div className="mt-6 flex items-start gap-3">
        <Image
          src={creator.avatar}
          alt={creator.name}
          width={52}
          height={52}
          className="size-[52px] shrink-0 rounded-full bg-[#d9d9d9] object-cover"
        />
        <div>
          <p className="font-satoshi text-lg leading-[22px] text-gray-950">{creator.name}</p>
          <p className={body}>{creator.role}</p>
        </div>
      </div>
      <p className={`mt-6 ${body}`}>{cta}</p>
      <Link
        href={`/creators/${creator.slug}`}
        className="mt-6 self-start rounded-3xl border border-gray-200 px-4 py-2 text-label-m text-gray-700 transition-colors hover:border-gray-300 hover:text-gray-950"
      >
        See Full Profile
      </Link>
    </aside>
  );
}
