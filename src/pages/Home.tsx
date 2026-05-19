import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroScene from '../components/HeroScene'

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="relative w-full overflow-hidden min-h-[85vh] flex items-center"
    >
      {/* Background subtle radial gradient */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{
        background: 'radial-gradient(circle at 75% 40%, rgba(0,58,135,0.06) 0%, transparent 60%)'
      }} />

      <HeroScene />
      
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10 w-full md:w-3/5">
        <p className="text-mute uppercase tracking-widest text-xs mb-6 font-medium">
          Mercedes · BMW · Audi · Volkswagen · Porsche
        </p>
        <h2
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Alman mühendisliği.<br />
          <span className="text-accent">Akdeniz güveni.</span>
        </h2>
        <p className="text-lg text-mute mt-8 max-w-xl">
          Fethiye Taşyaka'da, Bosch sertifikalı uzman kadromuzla
          premium Alman grubu araçlarına özel servis.
        </p>
        <div className="flex gap-4 mt-10">
          <Link to="/randevu" className="bg-ink text-surface px-6 py-3 rounded-lg font-medium hover:bg-accent hover:text-white transition inline-block">
            Randevu Al
          </Link>
          <Link to="/acil" className="border border-ink text-ink px-6 py-3 rounded-lg font-medium hover:bg-ink hover:text-surface transition inline-block">
            Acil Yol Yardım
          </Link>
        </div>
      </div>
    </motion.section>
  )
}
