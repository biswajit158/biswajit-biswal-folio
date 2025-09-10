import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { usePageTransition } from "@/hooks/use-page-transition";
import DeviceStatus from "./DeviceStatus";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { scrollToSection } = usePageTransition();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      
      // Update scroll state
      setIsScrolled(currentScrollY > 50);
      
      // Professional navbar behavior: hide on scroll down, show on scroll up
      if (currentScrollY < 50) {
        // Always visible at top
        setIsVisible(true);
      } else if (scrollDirection === 'down' && currentScrollY - lastScrollY > 5) {
        // Hide when scrolling down (with threshold to prevent flickering)
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding
      } else if (scrollDirection === 'up' && lastScrollY - currentScrollY > 5) {
        // Show when scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#learning', label: 'Learning' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleScrollToSection = (href: string) => {
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-background/98 backdrop-blur-xl shadow-medium border-b border-border/60' 
          : 'bg-background/20 backdrop-blur-sm'
      }`}
      style={{ 
        backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'blur(8px) saturate(120%)',
        WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'blur(8px) saturate(120%)'
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-2xl font-bold text-primary hover:text-primary-glow hover:scale-105 transition-all duration-300 cursor-pointer hover:drop-shadow-lg"
            onClick={() => scrollToSection('#home')}
          >
            Biswajit Biswal
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleScrollToSection(item.href)}
                  className={`text-foreground hover:text-primary transition-all duration-300 font-medium relative group px-3 py-2 rounded-lg hover:bg-primary/5 ${
                    isScrolled ? 'hover:bg-primary/10' : 'hover:bg-primary/5'
                  }`}
                >
                  {item.label}
                  <span className="absolute inset-x-3 -bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                </button>
              ))}
            </nav>

            {/* Device Status */}
            <DeviceStatus />
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 ${
                isScrolled ? 'hover:scale-105' : ''
              }`}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 ${
                isScrolled ? 'hover:scale-105' : ''
              }`}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-fade-in bg-background/99 backdrop-blur-xl rounded-xl border border-border/60 mx-4 shadow-medium">
            <div className="flex flex-col space-y-1 p-4">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => handleScrollToSection(item.href)}
                  className="text-left text-foreground hover:text-primary transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-primary/10 relative group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                  <span className="absolute inset-x-4 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;