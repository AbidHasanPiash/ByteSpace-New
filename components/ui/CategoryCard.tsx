import { Icon, type IconName } from "@/components/icons/Icon";

type CategoryCardProps = { label: string; icon: IconName };

export function CategoryCard({ label, icon }: CategoryCardProps) {
  return (
    <a
      href="#courses"
      className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-3xl border border-gray-200 bg-white transition-colors duration-200 hover:border-blue-800"
    >
      <span className="flex rounded-[40px] bg-lime-400 p-3 text-gray-950 transition-transform duration-200 group-hover:scale-110">
        <Icon name={icon} size={36} />
      </span>
      <span className="text-center text-label-xl text-gray-950">{label}</span>
    </a>
  );
}
