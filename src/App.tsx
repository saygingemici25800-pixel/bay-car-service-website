import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Emergency from './pages/Emergency'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Reviews from './pages/Reviews'
import Appointment from './pages/Appointment'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import LogoBC from './components/logos/LogoBC'
import { PHONE_TEL, PHONE_DISPLAY } from './lib/site'

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    // eslint-disable-next-line
    setMenuOpen(false);
  }, [location.pathname]);

  // Mobil menü açıkken: arka plan scroll kilidi + Escape ile kapatma
  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);
  
  // Koyu hero'lu rotalar: en üstteyken (scroll yokken) header açık renk olmalı,
  // yoksa siyah logo/nav koyu hero üstünde görünmez kalır.
  const darkHeroRoutes = ['/acil', '/hakkimizda'];
  const isDarkHero = darkHeroRoutes.includes(location.pathname) || location.pathname.startsWith('/servisler/');
  const onDarkHero = !scrolled && isDarkHero;

  return (
    <>
      <header 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-surface/90 backdrop-blur-lg border-b border-ink/10 shadow-sm py-4' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="z-50 relative" aria-label="Bay Car Service — Anasayfa">
            <div className={`flex items-center gap-3 transition-colors duration-300 ${onDarkHero ? 'text-surface' : 'text-ink'}`}>
              <LogoBC aria-hidden="true" className="h-7 w-7 sm:h-8 sm:w-8 shrink-0" />
              <h1 className="text-2xl font-bold tracking-[0.2em]" style={{ fontFamily: 'var(--font-display)' }}>
                BAY·CAR
              </h1>
            </div>
          </Link>
          
          <nav className={`hidden md:flex items-center gap-8 text-[11px] uppercase tracking-widest font-mono font-bold transition-colors duration-300 ${onDarkHero ? 'text-surface/90' : 'text-ink'}`}>
            <Link to="/servisler" className={`${location.pathname.startsWith('/servisler') ? 'text-accent border-b border-accent' : 'hover:text-accent transition'}`}>Hizmetlerimiz</Link>
            <Link to="/hakkimizda" className={`${location.pathname === '/hakkimizda' ? 'text-accent border-b border-accent' : 'hover:text-accent transition'}`}>Biz</Link>
            <Link to="/galeri" className={`${location.pathname === '/galeri' ? 'text-accent border-b border-accent' : 'hover:text-accent transition'}`}>Akışımız</Link>
            <Link to="/iletisim" className={`${location.pathname === '/iletisim' ? 'text-accent border-b border-accent' : 'hover:text-accent transition'}`}>İletişimiz</Link>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            {/* Telefon — ikincil (ghost) buton; mobilde sadece ikon, geniş ekranda numara */}
            <a
              href={`tel:${PHONE_TEL}`}
              aria-label={`Telefonla ara: ${PHONE_DISPLAY}`}
              className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2.5 text-sm font-bold transition ${
                onDarkHero
                  ? 'border-surface/40 text-surface hover:bg-surface hover:text-ink'
                  : 'border-ink/25 text-ink hover:bg-ink hover:text-surface'
              }`}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="hidden lg:inline whitespace-nowrap">{PHONE_DISPLAY}</span>
            </a>

            {/* Randevu Al — desktop */}
            <Link to="/randevu" className={`hidden md:inline-block px-5 py-2.5 rounded-lg text-sm font-bold transition shadow ${
              onDarkHero
              ? 'bg-surface text-ink hover:bg-accent hover:text-surface'
              : 'bg-ink text-surface hover:bg-accent hover:text-white'
            }`}>
              Randevu Al
            </Link>

            {/* Mobil menü butonu */}
            <button
              className={`md:hidden z-50 relative p-2 -mr-2 transition-colors duration-300 ${menuOpen || onDarkHero ? 'text-surface' : 'text-ink'}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menüyü aç/kapat"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <svg className={`w-6 h-6 ${menuOpen ? 'text-ink' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-surface z-40 flex flex-col pt-24"
          >
             <div className="flex-1 flex flex-col items-center justify-center gap-8 text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                <Link to="/" className="text-ink hover:text-accent transition">Anasayfa</Link>
                <Link to="/servisler" className="text-ink hover:text-accent transition">Hizmetlerimiz</Link>
                <Link to="/hakkimizda" className="text-ink hover:text-accent transition">Biz</Link>
                <Link to="/galeri" className="text-ink hover:text-accent transition">Akışımız</Link>
                <Link to="/iletisim" className="text-ink hover:text-accent transition">İletişimiz</Link>
                <Link to="/randevu" className="text-accent underline underline-offset-8 mt-4">Randevu Al</Link>
             </div>
             <div className="p-6">
                <Link to="/acil" className="block w-full py-5 bg-alert text-surface text-center rounded-2xl font-bold text-xl shadow-xl active:scale-95 transition-transform" style={{ fontFamily: 'var(--font-display)' }}>
                   Acil Yol Yardım
                </Link>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/servisler" element={<Services />} />
        <Route path="/servisler/:brand" element={<ServiceDetail />} />
        <Route path="/acil" element={<Emergency />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/galeri" element={<Gallery />} />
        <Route path="/yorumlar" element={<Reviews />} />
        <Route path="/randevu" element={<Appointment />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/gizlilik" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-ink focus:text-surface focus:p-4 focus:top-0 focus:left-0" aria-label="İçeriğe atla">İçeriğe atla</a>
      <ScrollToTop />
      <div className="min-h-screen bg-surface text-ink flex flex-col relative w-full overflow-x-hidden">
        <Header />
        <main id="main-content" className="flex-grow flex flex-col w-full">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
