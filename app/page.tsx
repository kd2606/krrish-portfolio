import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SpaceCanvas from "@/components/ui/SpaceCanvas";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Clubs from "@/components/sections/Clubs";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <SpaceCanvas />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Clubs />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
