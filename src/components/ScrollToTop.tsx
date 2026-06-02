import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenisRef } from './lenisContext';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const lenisRef = useLenisRef();

  useEffect(() => {
    // Lenis scroll'u kontrol ettiği için route değişiminde onun API'siyle resetle;
    // henüz hazır değilse native fallback.
    const lenis = lenisRef?.current;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenisRef]);

  return null;
}
