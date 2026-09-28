import { ButtonLink } from "@/components/ui/Button";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

/* "404" digit outlines from the design, filled with its lime-to-transparent gradient. */
const DIGITS_PATH =
  "M0.75 276.84 L0.75 220.68 L162.99 2.28 L235.47 2.28 L235.47 218.28 L279.63 218.28 L279.63 276.84 L235.47 276.84 L235.47 345 L167.31 345 L167.31 276.84 L0.75 276.84 M172.59 81.48 L69.87 218.28 L172.59 218.28 L172.59 81.48 M442.52 345 C356.12 345 312.92 287.56 312.92 172.68 C312.92 58.12 356.12 0.84 442.52 0.84 C488.28 0.84 521.24 16.2 541.4 46.92 C561.56 77.64 571.64 119.56 571.64 172.68 C571.64 226.12 561.56 268.2 541.4 298.92 C521.24 329.64 488.28 345 442.52 345 M491.96 253.32 C500.6 234.44 504.92 207.56 504.92 172.68 C504.92 138.12 500.6 111.56 491.96 93 C483.64 74.12 467.16 64.68 442.52 64.68 C417.56 64.68 400.76 74.12 392.12 93 C383.8 111.56 379.64 138.12 379.64 172.68 C379.64 207.56 383.8 234.44 392.12 253.32 C400.76 271.88 417.56 281.16 442.52 281.16 C467.16 281.16 483.64 271.88 491.96 253.32 M607.56 276.84 L607.56 220.68 L769.8 2.28 L842.28 2.28 L842.28 218.28 L886.44 218.28 L886.44 276.84 L842.28 276.84 L842.28 345 L774.12 345 L774.12 276.84 L607.56 276.84 M779.4 81.48 L676.68 218.28 L779.4 218.28 L779.4 81.48";

function Digits() {
  return (
    <svg viewBox="0 0 887 345" aria-hidden="true" className="h-auto w-full">
      <defs>
        <linearGradient id="nf-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d4fb1f" stopOpacity="0.976" />
          <stop offset="0.29" stopColor="#d4fb1f" stopOpacity="0.906" />
          <stop offset="0.58" stopColor="#d4fb1f" stopOpacity="0.761" />
          <stop offset="0.725" stopColor="#d4fb1f" stopOpacity="0.643" />
          <stop offset="0.87" stopColor="#ddfb52" stopOpacity="0.471" />
          <stop offset="1" stopColor="#eafd94" stopOpacity="0.29" />
        </linearGradient>
      </defs>
      <path d={DIGITS_PATH} fill="url(#nf-fill)" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="bg-blue-800 bg-grid px-4 pt-32 pb-20 sm:px-6 lg:h-[957px] lg:pt-[223px] lg:pb-0">
        <div className="relative mx-auto flex max-w-[935px] flex-col items-center text-center">
          <div className="w-full max-w-[887px] lg:ml-[2px]">
            <Digits />
          </div>
          <h1 className="relative -mt-[10%] max-w-[935px] font-poppins text-[40px] leading-[1.2] font-semibold tracking-[-0.01em] text-white sm:text-[56px] lg:-mt-[47px] lg:text-heading-l">
            The page you are looking for doesn&rsquo;t exist
          </h1>
          <p className="mt-8 text-body-m text-gray-100 sm:text-body-l">
            Try to use a correct url or go back to homepage to start again
          </p>
          <ButtonLink href="/" className="mt-8">
            Back to Home
          </ButtonLink>
        </div>
      </main>
      <Footer className="mt-[3px]" />
    </>
  );
}
