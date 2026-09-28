import { partnerLogos } from "@/data/home";

export function Partners() {
  return (
    <section aria-label="Our partners" className="bg-gray-50 py-12 lg:h-[202px] lg:py-0 lg:pt-20">
      <ul className="mx-auto flex max-w-[1200px] flex-wrap items-end justify-center gap-x-10 gap-y-8 px-4 sm:px-6 lg:flex-nowrap lg:gap-[72px]">
        {partnerLogos.map((logo, i) => (
          <li key={logo.src} className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={`Partner logo ${i + 1}`}
              width={logo.width}
              height={logo.height}
              className="h-auto w-[128px] sm:w-auto"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
