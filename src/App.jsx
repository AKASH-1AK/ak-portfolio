import React from "react";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Education from './sections/Education';
import Project from "./sections/Project";
import Certificates from "./sections/Certificates";
import AboutInfo from "./sections/AboutInfo";
import Badges from "./sections/Badges";
import Footer from "./sections/Footer";
import Blogs from "./sections/Blogs";
const App = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-1">
      <Navbar />
      <section id="About">
        <About />
      </section>
      <section id="">
        <AboutInfo />
      </section>

      <section id="Skill" className="scroll-mt-24">
        <Skills />
      </section>

      <section id="Education">
        <Education />
      </section>
      <section id="Project">
        <Project />
      </section>
      <section id="Certificate" className="scroll-mt-24">
        <Certificates />
      </section>
      <section>
        <Badges />
      </section>
      <section>
        <Blogs />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default App;
