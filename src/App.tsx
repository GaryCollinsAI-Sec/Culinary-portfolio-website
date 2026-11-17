
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/sections/Hero";
import Projects from "./assets/sections/Projects";
import Services from "./assets/sections/Services";
import About from "./assets/sections/About";
import Contact from "./assets/sections/Contact";
import Footer from "./assets/components/Footer";
import CulinaryApproach from "./assets/sections/SilverDragonsCaseStudy";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <CulinaryApproach />
        <Services />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
