import { useEffect } from 'react';

interface SmoothScrollWrapperProps {
  children: React.ReactNode;
}

const SmoothScrollWrapper = ({ children }: SmoothScrollWrapperProps) => {
  useEffect(() => {
    // Enhanced smooth scrolling behavior
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }
    };

    // Handle hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Handle initial hash on load
    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }

    // Add smooth scroll CSS to body
    document.body.style.scrollBehavior = 'smooth';

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.body.style.scrollBehavior = 'auto';
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScrollWrapper;