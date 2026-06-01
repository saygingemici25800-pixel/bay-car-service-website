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
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

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
          <Link to="/" className="z-50 relative">
            <div className={`inline-block relative transition-colors duration-300 ${onDarkHero ? 'text-surface' : 'text-ink'}`}>
              <h1 className="text-2xl font-bold tracking-[0.2em]" style={{ fontFamily: 'var(--font-display)' }}>
                BAY·CAR
              </h1>
            </div>
          </Link>
          
          <nav className={`hidden md:flex items-center gap-8 text-[11px] uppercase tracking-widest font-mono font-bold transition-colors duration-300 ${onDarkHero ? 'text-surface/90' : 'text-ink'}`}>
            <Link to="/servisler" className={`${location.pathname.startsWith('/servisler') ? 'text-accent border-b border-accent' : 'hover:text-accent transition'}`}>Servisler</Link>
            <Link to="/hakkimizda" className={`${location.pathname === '/hakkimizda' ? 'text-accent border-b border-accent' : 'hover:text-accent transition'}`}>Hakkımızda</Link>
            <Link to="/galeri" className={`${location.pathname === '/galeri' ? 'text-accent border-b border-accent' : 'hover:text-accent transition'}`}>Galeri</Link>
            <Link to="/yorumlar" className={`${location.pathname === '/yorumlar' ? 'text-accent border-b border-accent' : 'hover:text-accent transition'}`}>Yorumlar</Link>
            <Link to="/iletisim" className={`${location.pathname === '/iletisim' ? 'text-accent border-b border-accent' : 'hover:text-accent transition'}`}>İletişim</Link>
          </nav>

          <div className="hidden md:block">
            <Link to="/randevu" className={`px-5 py-2.5 rounded-lg text-sm font-bold transition shadow ${
              onDarkHero 
              ? 'bg-surface text-ink hover:bg-accent hover:text-surface' 
              : 'bg-ink text-surface hover:bg-accent hover:text-white'
            }`}>
              Randevu Al
            </Link>
          </div>

          <button 
            className={`md:hidden z-50 relative p-2 transition-colors duration-300 ${menuOpen || onDarkHero ? 'text-surface' : 'text-ink'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className={`w-6 h-6 ${menuOpen ? 'text-ink' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-surface z-40 flex flex-col pt-24"
          >
             <div className="flex-1 flex flex-col items-center justify-center gap-8 text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                <Link to="/" className="text-ink hover:text-accent transition">Anasayfa</Link>
                <Link to="/servisler" className="text-ink hover:text-accent transition">Servisler</Link>
                <Link to="/hakkimizda" className="text-ink hover:text-accent transition">Hakkımızda</Link>
                <Link to="/galeri" className="text-ink hover:text-accent transition">Galeri</Link>
                <Link to="/yorumlar" className="text-ink hover:text-accent transition">Yorumlar</Link>
                <Link to="/iletisim" className="text-ink hover:text-accent transition">İletişim</Link>
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
