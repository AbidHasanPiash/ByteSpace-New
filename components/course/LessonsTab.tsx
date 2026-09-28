import { CourseSection, courseBody } from "@/components/course/CourseSection";
import { Icon } from "@/components/icons/Icon";
import { courseDetail } from "@/data/course";

export function LessonsTab() {
  const { modulesIntro, modules, lessonContent, progressTracking, progress } = courseDetail;
  return (
    <div className="flex flex-col gap-6 xl:w-[723px]">
      <CourseSection title="Explore the Modules">
        <p className={courseBody}>{modulesIntro}</p>
      </CourseSection>

      <CourseSection title="Lesson List">
        <ol className="flex flex-col gap-6">
          {modules.map((module) => (
            <li key={module.title} className="flex items-start gap-[13px]">
              <span className="mt-[1.5px] flex size-[72px] shrink-0 items-center justify-center rounded-3xl bg-lime-400 text-gray-950">
                <Icon name="videocam" size={40} />
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-label-m text-gray-950">{module.title}</h3>
                <p className={courseBody}>{module.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </CourseSection>

      <CourseSection title="Lesson Content">
        <p className={courseBody}>{lessonContent}</p>
      </CourseSection>

      <CourseSection title="Lesson Progress Tracking">
        <p className={courseBody}>{progressTracking}</p>
        <div className="-mx-px flex flex-col gap-2 rounded-2xl border border-gray-200 p-4">
          <p className="text-label-s leading-[17px] text-gray-950">Learning Progress</p>
          <p className="font-poppins text-4xl leading-[43px] font-semibold tracking-[-0.36px] text-gray-950">{progress}%</p>
          <div
            role="progressbar"
            aria-label="Learning progress"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            className="h-2 overflow-hidden rounded-3xl bg-gray-100"
          >
            <div className="h-full rounded-3xl bg-lime-400" style={{ width: `${(387 / 691) * 100}%` }} />
          </div>
        </div>
      </CourseSection>
    </div>
  );
}
