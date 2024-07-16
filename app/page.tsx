import "./global.css";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import FeedBacks from "@/components/FeedBacks";
import Hero from "@/components/Hero";
import StarsCanvas from "@/components/canvas/StarsCanvas";
import Tech from "@/components/Tech";
import Works from "@/components/Works";
import ProjectsViewer from "@/components/ProjectsViewer";

const Home = () => {
  return (
    <main className="relative z-0 bg-primary">
      <section className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </section>
      <About />
      <Experience />
      <Tech />
      <ProjectsViewer />
      <FeedBacks />
      <section className="relative z-0">
        <Contact />
        <StarsCanvas />
      </section>
    </main>
  );
};

export default Home;
