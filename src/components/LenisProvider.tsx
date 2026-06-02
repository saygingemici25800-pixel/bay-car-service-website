import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { LenisContext } from './lenisContext';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const instance = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      duration: 1.2,
    });
    lenisRef.current = instance;

    let frame = 0;
    function raf(time: number) {
      instance.raf(time);
      frame = requestAnimationFrame(raf);
    }
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      instance.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>;
}
