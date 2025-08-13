import { Github, Linkedin, Mail, Heart, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Biswajit Biswal</h3>
            <p className="text-background/80 leading-relaxed">
              Passionate Computer Science student and aspiring software engineer, 
              dedicated to creating innovative solutions with cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { href: '#about', label: 'About' },
                { href: '#skills', label: 'Skills' },
                { href: '#projects', label: 'Projects' },
                { href: '#research', label: 'Research' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-left text-background/80 hover:text-background transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Let's Connect</h4>
            <p className="text-background/80">
              Follow my journey and stay updated with my latest projects and insights.
            </p>
            <div className="flex space-x-4">
              <a
                href="put the redirect link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors duration-200 group"
                aria-label="GitHub Profile"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="put the redirect link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors duration-200 group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="put the redirect link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors duration-200 group"
                aria-label="Facebook Profile"
              >
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="put the redirect link"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors duration-200 group"
                aria-label="Instagram Profile"
              >
                <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:put the redirect link"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors duration-200 group"
                aria-label="Email Contact"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-background/80">
              <span>© {currentYear} Biswajit Biswal. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-background/80">
              <span>Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
          
          <div className="text-center mt-6 text-background/60">
            <p className="text-sm">
              Built with modern web technologies • Optimized for performance • Designed for impact
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;