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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
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
