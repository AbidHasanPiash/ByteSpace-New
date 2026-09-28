import Image from "next/image";
import { Icon } from "@/components/icons/Icon";
import { CourseCard } from "@/components/ui/CourseCard";
import { HappyStudentsCard, ProgressCard, RevenueCard } from "@/components/ui/FloatingCards";
import { Ornament } from "@/components/ui/Ornament";
import { ScaledCanvas } from "@/components/ui/ScaledCanvas";
import { courses, creatorPerks, growthStats } from "@/data/home";

const canvasScale = "[--s:.52] min-[400px]:[--s:.58] sm:[--s:.85] md:[--s:1]";
const photoShadow =
  "drop-shadow-[51px_73px_72px_rgb(0_0_0/0.13)] drop-shadow-[17px_24px_24px_rgb(0_0_0/0.09)] drop-shadow-[2px_3px_6px_rgb(0_0_0/0.06)]";

/** "Your Path to Professional Growth" + "Create & Manage Courses" (1440×1460). */
export function Growth() {
  return (
    <section id="creators" className="relative scroll-mt-10 overflow-hidden bg-snow py-20 xl:h-[1460px] xl:py-[120px]">
      {/* Soft gradient blobs */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/blobs-growth.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-[-506px] left-[calc(50%-1268px)] w-[2536px] max-w-none"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/blob-lime-sm.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-[906px] left-[calc(50%-1047px)] w-[752px] max-w-none"
      />

      <div className="relative mx-auto flex max-w-[1232px] flex-col gap-20 px-4 sm:px-6 xl:gap-[72px] xl:px-4 xl:pl-[17px]">
        {/* Row 1 */}
        <div className="flex flex-col items-center gap-12 xl:flex-row xl:gap-[63px]">
          <div className="flex w-full flex-col gap-8 xl:w-[574px] xl:shrink-0 xl:gap-10">
            <h2 className="font-poppins text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-gray-950 md:text-heading-m xl:w-[577px]">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="max-w-[477px] text-body-m text-gray-700 md:text-body-l">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career
              journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new
              career path entirely, we have the resources you need.
            </p>
            <dl className="flex items-end gap-10 whitespace-nowrap sm:gap-14">
              {growthStats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="text-body-l text-gray-700">{stat.label}</dt>
                  <dd className="text-display-xs text-blue-800">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ScaledCanvas width={621} height={552} scaleClassName={canvasScale}>
            <CourseCard variant="feature" course={courses[0]} className="absolute -top-px -left-px h-[386px] w-[375px]" />
            <Image
              src="/images/student.png"
              alt="Student learning online with a laptop"
              width={577}
              height={540}
              sizes="577px"
              className={`absolute top-3 left-0 h-[540px] w-[577px] object-cover ${photoShadow}`}
            />
            <ProgressCard className="absolute top-[213px] left-[345px]" />
            <Ornament src="/images/ornaments/coil-a.png" tint="lime" className="top-[67px] left-[406px] w-[215px]" />
          </ScaledCanvas>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col-reverse items-center gap-12 xl:flex-row xl:gap-[79px]">
          <ScaledCanvas width={541} height={596} scaleClassName={canvasScale}>
            <RevenueCard wide title="Total Revenue" period="July 1-28" amount="$120.29" className="absolute top-11 left-0" />
            <RevenueCard title="Year to Date" period="2023" amount="$1,200.38" className="absolute top-[194px] left-0 w-[134px]" />
            <div className={`absolute top-0 left-[28px] h-[596px] w-[435px] ${photoShadow}`}>
              <div className="relative size-full overflow-hidden">
                <Image
                  src="/images/creator.png"
                  alt="Smiling creator with headphones holding a tablet"
                  width={683}
                  height={683}
                  sizes="683px"
                  className="absolute top-0 left-[-28.51%] h-[114.6%] w-[157.01%] max-w-none"
                />
              </div>
            </div>
            <HappyStudentsCard variant="feature" className="absolute top-[413px] left-[283px]" />
            <Ornament src="/images/ornaments/coil-b.png" tint="lime" className="top-[114px] left-[305px] w-[215px]" />
          </ScaledCanvas>

          <div className="flex w-full flex-col gap-8 xl:w-[580px] xl:shrink-0 xl:gap-10">
            <h2 className="max-w-[391px] font-poppins text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-gray-950 md:text-heading-m">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="max-w-[574px] text-body-m text-gray-700 md:text-body-l">
              <strong className="font-bold text-gray-950">ByteSpace</strong> supports individuals or entities in the
              creation, publication, and administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {creatorPerks.map((perk) => (
                <li key={perk} className="flex items-end gap-2 text-label-l text-gray-950">
                  <Icon name="checkCircle" className="shrink-0 text-blue-800" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
