import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height <= 0) {
        setProgress(0);
      } else {
        setProgress(scrollY / height);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
