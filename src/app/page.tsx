import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { GameSection } from "@/components/game-section";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Testimonials } from "@/components/testimonials";
import { BlogPreview } from "@/components/blog-preview";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GameSection />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Testimonials />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
