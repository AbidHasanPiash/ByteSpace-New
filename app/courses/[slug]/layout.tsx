import { notFound } from "next/navigation";
import { CourseHero } from "@/components/course/CourseHero";
import { CoursePreview } from "@/components/course/CoursePreview";
import { CourseSidebar } from "@/components/course/CourseSidebar";
import { CourseTabs } from "@/components/course/CourseTabs";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { courseDetail } from "@/data/course";
import { courses, getCourse } from "@/data/home";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: LayoutProps<"/courses/[slug]">) {
  const { slug } = await params;
  const course = getCourse(slug);
  return { title: course ? `${course.title} — ByteSpace` : "Course not found — ByteSpace" };
}

/**
 * Shared course page: blue header (title, stats, preview video), enrollment sidebar
 * and the About / Lessons / Reviews tabs. Each tab is a nested route rendered as `children`.
 */
export default async function CourseLayout({ params, children }: LayoutProps<"/courses/[slug]">) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const title = slug === "build-digital-asset" ? courseDetail.headline : course.title;

  return (
    <>
      <Navbar />
      <main className="relative">
        <section className="bg-blue-800 bg-grid pt-28 pb-10 lg:pt-[172px] xl:h-[957px] xl:pb-0">
          <div className="mx-auto max-w-[1232px] px-4 sm:px-6 xl:px-4">
            <CourseHero title={title} />
            <div className="mt-10 xl:mt-[59px] xl:ml-[5px] xl:w-[720px]">
              <CoursePreview src={courseDetail.videoCover} title={course.title} />
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-[1232px] px-4 pt-10 sm:px-6 xl:absolute xl:top-[415px] xl:left-[calc(50%+187px)] xl:w-auto xl:max-w-none xl:p-0">
          <CourseSidebar price={course.price} />
        </div>

        <div className="mx-auto max-w-[1232px] px-4 pt-10 pb-16 sm:px-6 xl:px-4 xl:pt-[62.5px] xl:pb-[64.5px]">
          <div className="flex flex-col gap-10 xl:w-[725px]">
            <CourseTabs slug={slug} />
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
