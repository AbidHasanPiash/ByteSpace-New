type AuthHeadingProps = { eyebrow: string; title: string };

export function AuthHeading({ eyebrow, title }: AuthHeadingProps) {
  return (
    <div>
      <p className="text-body-l text-blue-800">{eyebrow}</p>
      <h2 className="font-poppins text-[32px] leading-[1.2] font-semibold tracking-[-0.01em] text-gray-950 sm:text-heading-m">
        {title}
      </h2>
    </div>
  );
}
