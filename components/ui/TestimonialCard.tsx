import Image from "next/image";

type TestimonialCardProps = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

export function TestimonialCard({ name, role, avatar, quote }: TestimonialCardProps) {
  return (
    <figure className="flex flex-col items-start gap-6 rounded-3xl bg-white p-6">
      <Image src={avatar} alt={name} width={80} height={80} className="size-20 rounded-full" />
      <figcaption>
        <p className="text-heading-xs leading-7 text-black">{name}</p>
        <p className="text-body-l text-blue-800">{role}</p>
      </figcaption>
      <blockquote className="text-body-l text-black-700">&quot;{quote}&quot;</blockquote>
    </figure>
  );
}
