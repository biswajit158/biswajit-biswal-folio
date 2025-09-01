import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextLocation, setNextLocation] = useState<string | null>(null);
  const location = useLocation();

  const navigateWithTransition = (to: string) => {
    setIsTransitioning(true);
    setNextLocation(to);
    
    setTimeout(() => {
      window.history.pushState({}, '', to);
      setIsTransitioning(false);
      setNextLocation(null);
    }, 300);
  };

  const scrollToSection = (sectionId: string) => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      const element = document.querySelector(sectionId);
      if (element) {
        const headerHeight = 80; // Account for fixed header
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setIsTransitioning(false);
    }, 100);
  };

  return {
    isTransitioning,
    navigateWithTransition,
    scrollToSection
  };
};