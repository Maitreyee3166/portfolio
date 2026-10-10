

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import WhatICanDo from "../components/WhatICanDo";
import Education from "../components/Education";
import LearningJourney from "../components/LearningJourney";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import GitHubProject from "../components/GitHubProject";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-[#080b16] text-white">
      <Navbar />

      <main>
        <Hero />
        <About />

        <Education />
        <Skills />
        
        <Projects />
        <GitHubProject/>
        
        <WhatICanDo />
        
        <LearningJourney />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;