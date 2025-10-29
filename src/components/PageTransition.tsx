import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Reset states on location change
    setIsExiting(true);
    
    const exitTimeout = setTimeout(() => {
      setIsVisible(false);
      setIsExiting(false);
      
      const enterTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 50);
      
      return () => clearTimeout(enterTimeout);
    }, 150);

    return () => clearTimeout(exitTimeout);
  }, [location]);

  useEffect(() => {
    // Initial load
    setIsVisible(true);
  }, []);

  return (
    <div className={`transition-opacity duration-300 ease-out ${
      isVisible && !isExiting 
        ? 'opacity-100' 
        : 'opacity-0'
    }`}>
      {children}
    </div>
  );
};

export default PageTransition;