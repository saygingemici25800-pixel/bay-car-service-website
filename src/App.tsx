import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Emergency from './pages/Emergency'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Reviews from './pages/Reviews'
import Appointment from './pages/Appointment'
import Contact from './pages/Contact'

function Header() {
  return (
    <header className="border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <div className="inline-block">
            <h1 className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              BAY CAR SERVICE
            </h1>
            <p className="text-xs text-mute uppercase tracking-widest mt-1">
              Fethiye Özel Servis
            </p>
          </div>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link to="/servisler" className="hover:text-accent transition">Servisler</Link>
          <Link to="/hakkimizda" className="hover:text-accent transition">Hakkımızda</Link>
          <Link to="/iletisim" className="hover:text-accent transition">İletişim</Link>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-mute">
        <p>Bay Car Service — Alman Grubu Özel Servis</p>
        <p className="mt-1">Bayram Öğütveren · 0534 668 24 45</p>
      </div>
    </footer>
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
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-surface text-ink flex flex-col">
        <Header />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
