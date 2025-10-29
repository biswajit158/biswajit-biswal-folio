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

const Index = () => {
  return (
    <div className="min-h-screen">
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
  );
};

export default Index;
