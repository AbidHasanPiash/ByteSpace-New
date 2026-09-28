import { CategoryCard } from "@/components/ui/CategoryCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { categories } from "@/data/home";

export function Categories() {
  return (
    <section id="categories" className="scroll-mt-10 pt-16 pb-20 lg:pt-[71px] lg:pb-[120px]">
      <div className="mx-auto max-w-[1234px] px-4 sm:px-6 xl:px-4">
        <SectionHeading
          size="s"
          widthClassName="max-w-[925px]" // browser text runs ~0.3% wider than Figma; keeps the design's 2 lines
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:mt-[68px] lg:grid-cols-6 lg:gap-10">
          {categories.map((category) => (
            <li key={category.label}>
              <CategoryCard {...category} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
