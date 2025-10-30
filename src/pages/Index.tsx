import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import WhatImLearning from "@/components/WhatImLearning";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import HackerLoader from "@/components/HackerLoader";

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Check if user has already seen the loader in this session
    const hasSeenLoader = sessionStorage.getItem('hasSeenHackerLoader');
    
    if (hasSeenLoader) {
      setShowLoader(false);
      setHasLoaded(true);
    }
  }, []);

  const handleLoadComplete = () => {
    sessionStorage.setItem('hasSeenHackerLoader', 'true');
    setShowLoader(false);
    setTimeout(() => {
      setHasLoaded(true);
    }, 300);
  };

  return (
    <>
      {showLoader && <HackerLoader onLoadComplete={handleLoadComplete} />}
      <div 
        className={`min-h-screen transition-opacity duration-500 ${
          hasLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <ScrollProgress />
        <Header />
        <main id="main-content" role="main">
          <Hero />
          <About />
          <Skills />
          <WhatImLearning />
          <Certifications />
          <Projects />
          <Research />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
