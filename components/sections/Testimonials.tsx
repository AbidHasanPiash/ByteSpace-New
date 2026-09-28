import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/home";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-snow py-20 lg:h-[784px] lg:pt-[74px] lg:pb-0">
      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-1/2 h-full w-[1440px] -translate-x-1/2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/blob-a.svg" alt="" className="absolute top-[-281px] left-[802px] w-[1217px] max-w-none" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/blob-lime-sm.svg" alt="" className="absolute top-[-178px] left-[355px] w-[752px] max-w-none" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/blob-b.svg" alt="" className="absolute top-[109px] left-[-482px] w-[1217px] max-w-none" />
      </div>

      <div className="relative mx-auto flex max-w-[1232px] flex-col gap-12 px-4 sm:px-6 lg:gap-[72px] xl:pr-4 xl:pl-[14px]">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-[43px]">
          <h2 className="font-poppins text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-black md:text-heading-m lg:w-[577px] lg:shrink-0">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-body-m text-black-700 md:text-body-l lg:w-[580px]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished
            creators.
          </p>
        </div>
        <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[41px]">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
