import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / scrollHeight) * 100;
      setProgress(progress);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress(); // Initial calculation

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-1 z-[10001] bg-gradient-to-r from-primary via-primary-glow to-accent transition-all duration-300"
      style={{ 
        width: `${progress}%`,
        boxShadow: progress > 0 ? '0 0 10px hsl(var(--primary) / 0.5)' : 'none'
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  );
};

export default ScrollProgress;
