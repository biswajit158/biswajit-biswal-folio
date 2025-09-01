import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background pt-20"
    >
      <div className="absolute inset-0 bg-hero-gradient opacity-20 dark:opacity-30"></div>
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-20"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="container mx-auto px-4 text-center relative z-20 py-16">
        <div className="animate-fade-in bg-card/90 dark:bg-card/80 backdrop-blur-xl rounded-3xl p-12 shadow-glow border border-border/50 max-w-4xl mx-auto">
          <div className="mb-10">
            <div className="relative inline-block group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-primary-glow to-primary rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500 animate-pulse"></div>
              <img
                src="/lovable-uploads/ca638ad2-6bf6-4594-a3b2-fdf20a261301.png"
                alt="Biswajit Biswal - Professional Software Developer"
                className="relative w-52 h-52 rounded-full mx-auto shadow-glow border-4 border-primary/50 object-cover transition-all duration-500 ring-8 ring-primary/20 group-hover:ring-primary/40 group-hover:scale-105 group-hover:shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-transparent group-hover:from-primary/20 transition-all duration-300"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            Biswajit Biswal
          </h1>
          
          <h2 className="text-2xl md:text-3xl mb-8 text-primary font-semibold tracking-wide">
            B.Tech CSE Student | Web & Java Developer | AI Enthusiast
          </h2>
          
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-card-foreground leading-relaxed font-medium">
            Passionate about building innovative software solutions with a focus on web development, 
            AI applications, and cutting-edge technology. Currently pursuing Computer Science Engineering 
            at GIET University with a vision to become a leading software engineer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
            <Button 
              onClick={() => scrollToSection('#projects')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-semibold"
            >
              View Projects
            </Button>
            <Button 
              onClick={() => scrollToSection('#contact')}
              variant="outline" 
              size="lg"
              className="border-primary/50 bg-background/50 text-foreground hover:bg-primary hover:text-primary-foreground backdrop-blur-sm transition-all duration-300 hover:scale-105 px-8 py-4 text-lg font-semibold"
            >
              Contact Me
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="text-card-foreground hover:text-primary transition-all duration-200 hover:scale-110 transform p-4 rounded-full bg-background/60 hover:bg-primary/10 shadow-medium"
              aria-label="GitHub Profile"
            >
              <Github size={28} />
            </a>
            <a 
              href="#" 
              className="text-card-foreground hover:text-primary transition-all duration-200 hover:scale-110 transform p-4 rounded-full bg-background/60 hover:bg-primary/10 shadow-medium"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="#" 
              className="text-card-foreground hover:text-primary transition-all duration-200 hover:scale-110 transform p-4 rounded-full bg-background/60 hover:bg-primary/10 shadow-medium"
              aria-label="Email Contact"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;