import { CourseCard } from "@/components/ui/CourseCard";
import { HappyStudentsCard } from "@/components/ui/FloatingCards";
import { Logo } from "@/components/ui/Logo";
import { Ornament } from "@/components/ui/Ornament";
import { courses } from "@/data/home";

type AuthShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

/** Blue grid page shared by Login and Register: intro + decorative cards on the left, form panel on the right. */
export function AuthShell({ title, description, children }: AuthShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-blue-800 bg-grid">
      <header className="mx-auto flex h-20 max-w-[1440px] items-center px-4 sm:px-6 lg:h-[120px] lg:items-start lg:pt-[35px] xl:px-[122px]">
        <Logo tone="light" />
      </header>

      <main className="mx-auto flex max-w-[1440px] flex-col gap-10 px-4 pb-16 sm:px-6 xl:h-[904px] xl:flex-row xl:justify-between xl:gap-0 xl:pr-[120px] xl:pb-0 xl:pl-[120px]">
        <div className="relative xl:w-[606px]">
          <div className="max-w-[475px] xl:ml-0.5">
            <h1 className="font-poppins text-xl leading-[1.2] font-semibold tracking-[-0.2px] text-white">{title}</h1>
            <p className="mt-4 text-body-m text-gray-100 sm:text-body-l">{description}</p>
          </div>

          {/* Decorative composition (desktop only) — Figma coordinates relative to this column */}
          <div aria-hidden="true" className="pointer-events-none hidden xl:block">
            <CourseCard course={courses[1]} className="absolute top-[274px] left-0.5 h-[384px] w-[373px]" />
            <CourseCard course={courses[2]} className="absolute top-[185px] left-[113px] h-[384px] w-[373px]" />
            <HappyStudentsCard className="absolute top-[620px] left-[228px]" />
            <Ornament src="/images/ornaments/coil-b.png" tint="white" flip className="top-[506px] left-[525px] w-[175px]" />
            <Ornament src="/images/ornaments/cone.png" tint="lime" className="top-[200px] left-[31px] w-[146px]" />
            <Ornament src="/images/ornaments/pyramid.png" tint="white" className="top-[582px] left-[-23px] w-[188px]" />
          </div>
        </div>

        <section className="mx-auto w-full max-w-[579px] rounded-3xl bg-white px-5 py-10 sm:px-[63px] sm:pt-[61px] sm:pb-10 xl:mx-0 xl:h-[784px] xl:w-[579px] xl:max-w-none xl:shrink-0">
          {children}
        </section>
      </main>
    </div>
  );
}
