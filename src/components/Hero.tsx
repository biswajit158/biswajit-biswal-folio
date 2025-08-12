import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img
              src={profilePhoto}
              alt="Biswajit Biswal"
              className="w-40 h-40 rounded-full mx-auto shadow-glow border-4 border-white/20 object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            Biswajit Biswal
          </h1>
          
          <h2 className="text-xl md:text-2xl mb-6 text-gray-200 font-medium">
            B.Tech CSE Student | Web & Java Developer | AI Enthusiast
          </h2>
          
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Passionate about building innovative software solutions with a focus on web development, 
            AI applications, and cutting-edge technology. Currently pursuing Computer Science Engineering 
            at GIET University with a vision to become a leading software engineer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={() => scrollToSection('#projects')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
            >
              View Projects
            </Button>
            <Button 
              onClick={() => scrollToSection('#contact')}
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="text-white/80 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="#" 
              className="text-white/80 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#" 
              className="text-white/80 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              aria-label="Email Contact"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;