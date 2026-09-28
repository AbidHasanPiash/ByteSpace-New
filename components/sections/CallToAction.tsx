import { ButtonLink } from "@/components/ui/Button";
import { Ornament } from "@/components/ui/Ornament";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-blue-800 bg-grid lg:h-[488px]">
      {/* Decorative shapes — exact Figma positions on a centred 1440px canvas */}
      <div aria-hidden="true" className="absolute top-0 left-1/2 hidden h-[488px] w-[1440px] -translate-x-1/2 lg:block">
        <Ornament src="/images/ornaments/coil-b.png" tint="lime" className="top-[-162px] left-[-118px] w-[385px]" />
        <Ornament src="/images/ornaments/coil-b.png" tint="white" flip className="top-[5px] left-[178px] w-[175px]" />
        <Ornament src="/images/ornaments/cone.png" tint="white" className="top-[225px] left-[-48px] w-[188px]" />
        <Ornament src="/images/ornaments/torus.png" tint="lime" className="top-[299px] left-[20px] w-[342px]" />
        <Ornament src="/images/ornaments/pyramid.png" tint="lime" className="top-0 left-[1080px] w-[188px]" />
        <Ornament src="/images/ornaments/cylinder.png" tint="white" className="top-[6px] left-[1226px] w-[370px]" />
        <Ornament src="/images/ornaments/coil-a.png" tint="lime" className="top-[289px] left-[1110px] w-[330px]" />
      </div>
      <div aria-hidden="true" className="lg:hidden">
        <Ornament src="/images/ornaments/coil-b.png" tint="lime" className="-top-16 -left-16 w-40" />
        <Ornament src="/images/ornaments/coil-a.png" tint="lime" className="-right-14 -bottom-16 w-40" />
      </div>

      <div className="relative mx-auto flex h-full max-w-[996px] flex-col items-center justify-center gap-8 px-4 py-24 text-center sm:px-6 lg:gap-10 lg:py-0 lg:pt-px">
        <h2 className="max-w-[710px] font-poppins text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-gray-50 md:text-heading-m">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="text-body-m text-gray-50 md:text-body-l">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <ButtonLink href="/signup">Join as Creator</ButtonLink>
      </div>
    </section>
  );
}
