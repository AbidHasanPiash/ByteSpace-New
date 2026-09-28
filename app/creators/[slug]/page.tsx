import { notFound } from "next/navigation";
import { CreatorCourses } from "@/components/creator/CreatorCourses";
import { CreatorHeader } from "@/components/creator/CreatorHeader";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { creators, getCreator } from "@/data/creators";

export function generateStaticParams() {
  return creators.map((creator) => ({ slug: creator.slug }));
}

export async function generateMetadata({ params }: PageProps<"/creators/[slug]">) {
  const { slug } = await params;
  const creator = getCreator(slug);
  return { title: creator ? `${creator.name} — ByteSpace` : "Creator not found — ByteSpace" };
}

export default async function CreatorPage({ params }: PageProps<"/creators/[slug]">) {
  const { slug } = await params;
  const creator = getCreator(slug);
  if (!creator) notFound();

  return (
    <>
      <Navbar />
      <main>
        <CreatorHeader {...creator} />
        <CreatorCourses courses={creator.courses} />
      </main>
      <Footer />
    </>
  );
}
