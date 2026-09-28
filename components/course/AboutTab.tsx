import Image from "next/image";
import { CourseSection, courseBody } from "@/components/course/CourseSection";
import { Icon } from "@/components/icons/Icon";
import { courseDetail } from "@/data/course";

export function AboutTab() {
  const { description, sneakPeek, keyPoints } = courseDetail;
  return (
    <div className="flex flex-col gap-6">
      <CourseSection title="Description">
        <div className={`flex flex-col gap-[26px] ${courseBody}`}>
          {description.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </CourseSection>

      <CourseSection title="Sneak Peak">
        <ul className="grid grid-cols-2 gap-[19px] sm:grid-cols-4">
          {sneakPeek.map((src, i) => (
            <li key={src} className="relative aspect-[167/125] overflow-hidden rounded-2xl bg-[#d9d9d9]">
              <Image src={src} alt={`Course preview ${i + 1}`} fill sizes="(min-width: 640px) 167px, 45vw" className="object-cover" />
            </li>
          ))}
        </ul>
      </CourseSection>

      <CourseSection title="Key Points">
        <ul className="flex flex-col gap-3">
          {keyPoints.map((point) => (
            <li key={point} className={`flex items-start gap-2 ${courseBody}`}>
              <Icon name="checkCircle" className="shrink-0 text-blue-800" />
              {point}
            </li>
          ))}
        </ul>
      </CourseSection>
    </div>
  );
}
