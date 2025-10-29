import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { usePageTransition } from "@/hooks/use-page-transition";
import DeviceStatus from "./DeviceStatus";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { scrollToSection } = usePageTransition();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scroll state for blur effect
      setIsScrolled(currentScrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10000] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg focus:shadow-glow"
      >
        Skip to main content
      </a>
      
      <header 
        className={`fixed top-0 left-0 right-0 z-[9999] w-full transition-all duration-300 ease-out ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/40' 
            : 'bg-background/10 backdrop-blur-md'
        }`}
        role="banner"
        style={{ 
          position: 'fixed',
          backdropFilter: isScrolled ? 'blur(24px) saturate(200%)' : 'blur(12px) saturate(150%)',
          WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(200%)' : 'blur(12px) saturate(150%)'
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
            <nav className="flex items-center space-x-8" role="navigation" aria-label="Main navigation">
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
              className={`min-w-[44px] min-h-[44px] text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 ${
                isScrolled ? 'hover:scale-105' : ''
              }`}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
            </Button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`min-w-[44px] min-h-[44px] text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 ${
                isScrolled ? 'hover:scale-105' : ''
              }`}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="min-w-[44px] min-h-[44px] text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav 
            className="mt-4 pb-4 bg-background/99 backdrop-blur-xl rounded-xl border border-border/60 mx-4 shadow-medium"
            role="navigation" 
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-1 p-4">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => handleScrollToSection(item.href)}
                  className={`text-left text-foreground hover:text-primary active:text-primary transition-all duration-300 font-medium min-h-[44px] px-4 rounded-lg hover:bg-primary/10 active:bg-primary/20 relative group flex items-center ${
                    isMobileMenuOpen ? 'animate-fade-in' : ''
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                  <span className="absolute inset-x-4 bottom-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;