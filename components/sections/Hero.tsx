import Image from "next/image";
import { HappyStudentsCard, ProgressCard, TopicStatCard } from "@/components/ui/FloatingCards";
import { Ornament } from "@/components/ui/Ornament";
import { SearchBar } from "@/components/ui/SearchBar";

/**
 * Hero — 1440×1024 on desktop. Decorative shapes are positioned on a centred
 * 1440px canvas using the exact Figma coordinates.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-blue-800 bg-[url(/images/grid-hero.svg)] bg-top bg-no-repeat xl:h-[1024px]">
      {/* Desktop ornaments (exact Figma positions) */}
      <div aria-hidden="true" className="absolute top-0 left-1/2 hidden h-[1024px] w-[1440px] -translate-x-1/2 lg:block">
        <Ornament src="/images/ornaments/coil-b.png" tint="lime" className="top-[221px] left-[-118px] w-[385px]" />
        <Ornament src="/images/ornaments/coil-b.png" tint="white" flip className="top-[477px] left-[183px] w-[175px]" />
        <Ornament src="/images/ornaments/torus.png" tint="white" className="top-[682px] left-[18px] w-[342px]" />
        <Ornament src="/images/ornaments/cylinder.png" tint="lime" className="top-[221px] left-[1231px] w-[370px]" />
        <Ornament src="/images/ornaments/pyramid.png" tint="white" className="top-[464px] left-[1106px] w-[188px]" />
        <Ornament src="/images/ornaments/coil-a.png" tint="white" className="top-[672px] left-[1127px] w-[330px]" />
      </div>

      {/* Mobile / tablet ornaments */}
      <div aria-hidden="true" className="lg:hidden">
        <Ornament src="/images/ornaments/coil-b.png" tint="lime" className="top-[140px] -left-16 w-40 sm:w-56" />
        <Ornament src="/images/ornaments/cylinder.png" tint="lime" className="top-[130px] -right-16 w-40 sm:w-56" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-4 pt-32 text-center sm:px-6 sm:gap-[60px] lg:pt-[169px]">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <h1 className="max-w-[935px] font-poppins text-[40px] leading-[1.2] font-semibold tracking-[-0.01em] text-white sm:text-[56px] lg:text-heading-l">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="max-w-[830px] text-body-m text-gray-100 sm:text-body-l">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>
        <SearchBar />
      </div>

      <HeroVisual />
    </section>
  );
}

/**
 * Student photo, lime half-circle and floating cards. Positions are expressed in
 * container-query units of the 578px photo width so the composition scales.
 */
function HeroVisual() {
  return (
    <div className="relative z-10 mx-auto mt-10 aspect-[578/512] w-[min(578px,calc(100%-32px))] [container-type:inline-size] sm:mt-14 xl:absolute xl:top-[512px] xl:left-1/2 xl:mt-0 xl:-translate-x-1/2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero-circle.svg"
        alt=""
        aria-hidden="true"
        className="absolute top-[12.11cqw] left-[-49.48cqw] w-[198.79cqw] max-w-none"
      />
      <Image
        src="/images/student.png"
        alt="Smiling student with headphones holding a laptop"
        width={578}
        height={541}
        priority
        sizes="(min-width: 640px) 578px, 90vw"
        className="absolute top-0 left-0 h-[93.6cqw] w-full object-cover drop-shadow-[51px_73px_72px_rgb(0_0_0/0.13)]"
      />
      <TopicStatCard className="absolute top-[18cqw] left-0 origin-top-left scale-[.62] sm:scale-[.8] md:top-[21.97cqw] md:left-[-4.67cqw] md:scale-100" />
      <ProgressCard className="absolute top-[24.05cqw] right-0 origin-top-right scale-[.62] sm:scale-[.8] md:right-auto md:left-[71.11cqw] md:origin-top-left md:scale-100" />
      <HappyStudentsCard className="absolute top-[56.23cqw] left-0 origin-top-left scale-[.62] sm:scale-[.8] md:left-[-17.82cqw] md:scale-100" />
    </div>
  );
}
