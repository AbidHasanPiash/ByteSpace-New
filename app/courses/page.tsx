import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CourseSearch } from "@/components/search/CourseSearch";

export const metadata: Metadata = { title: "Find Your Next Course — ByteSpace" };

export default async function CoursesPage({ searchParams }: PageProps<"/courses">) {
  const { q } = await searchParams;
  return (
    <>
      <Navbar />
      <main>
        <CourseSearch initialQuery={typeof q === "string" ? q : ""} />
      </main>
      <Footer />
    </>
  );
}
