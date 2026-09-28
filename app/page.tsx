import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CallToAction } from "@/components/sections/CallToAction";
import { Categories } from "@/components/sections/Categories";
import { Courses } from "@/components/sections/Courses";
import { Growth } from "@/components/sections/Growth";
import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Courses />
        <Categories />
        <Growth />
        <CallToAction />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
