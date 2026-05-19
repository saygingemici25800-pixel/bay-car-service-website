import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { brands } from '../lib/brands'
import { businessSchema } from '../lib/seo'
// import HeroScene from '../components/HeroScene'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
}

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.12
    }
  },
  viewport: { once: true, margin: "-50px" }
}

const cardVariant = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  whileInView: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
  }
}

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full flex flex-col"
    >
      <Helmet>
        <title>Bay Car Service Fethiye | Mercedes BMW Audi VW Porsche Özel Servisi</title>
        <meta name="description" content="Fethiye Taşyaka'da Bosch sertifikalı Alman grubu özel servis. Mercedes, BMW, Audi, Volkswagen, Porsche. 7/24 yol yardım. 0534 668 24 45." />
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
      </Helmet>

      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden min-h-[85vh] flex items-center">
        {/* Background subtle radial gradient */}
        <div className="absolute inset-0 pointer-events-none z-0" style={{
          background: 'radial-gradient(circle at 75% 40%, rgba(0,58,135,0.06) 0%, transparent 60%)'
        }} />

        {/* <HeroScene /> */}
        
        {/* 3D Model Placeholder */}
        <div className="absolute top-1/2 -translate-y-1/2 right-[5%] w-[40%] md:h-[60vh] hidden md:flex flex-col items-center justify-center bg-ink rounded-3xl border border-white/5 shadow-2xl z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          <div className="text-surface/60 font-mono text-lg tracking-[0.2em] text-center flex flex-col gap-5 relative z-10">
            <span className="text-surface/80 font-bold mb-4 text-[10px] tracking-widest border border-surface/20 px-3 py-1 rounded-full w-max mx-auto">3D MODEL PLACEHOLDER</span>
            <span className="hover:text-surface transition duration-300">MERCEDES</span>
            <span className="hover:text-surface transition duration-300">BMW</span>
            <span className="hover:text-surface transition duration-300">AUDI</span>
            <span className="hover:text-surface transition duration-300">VW</span>
            <span className="hover:text-surface transition duration-300">PORSCHE</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10 w-full md:w-3/5">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-mute uppercase tracking-widest text-xs mb-6 font-medium"
          >
            Mercedes · BMW · Audi · Volkswagen · Porsche
          </motion.p>
          <h2
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl flex flex-col"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="block"
            >
              Alman mühendisliği.
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="block text-accent"
            >
              Akdeniz güveni.
            </motion.span>
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
      </section>

      {/* 2. BRAND GRID SECTION */}
      <section id="brands" className="py-24 bg-surface max-w-7xl mx-auto px-6 w-full">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-ink" style={{ fontFamily: 'var(--font-display)' }}>
            Markamız bizim için özel
          </h2>
          <p className="text-lg text-mute mb-12">
            5 marka. Tek atölye. Bosch sertifikalı uzmanlık.
          </p>
        </motion.div>
        
        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {Object.values(brands).map((brand) => (
            <Link to={`/servisler/${brand.slug}`} key={brand.slug} className="group/brand">
              <motion.div 
                variants={cardVariant}
                className="bg-white p-6 rounded-xl border border-ink/10 group-hover/brand:border-accent group-hover/brand:scale-105 transition duration-300 flex flex-col justify-between aspect-square relative"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-ink" style={{ fontFamily: 'var(--font-display)' }}>{brand.name}</h3>
                  <p className="text-xs md:text-sm text-mute mt-4 font-medium uppercase tracking-wider">Özel servis</p>
                </div>
                
                <span className="text-accent underline text-sm mt-4 opacity-0 group-hover/brand:opacity-100 transition duration-300">
                  Detay &rarr;
                </span>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* 3. WHY US SECTION */}
      <section id="why-us" className="py-24 bg-ink text-surface w-full">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 md:gap-8">
          <motion.div {...fadeInUp} className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
              Neden Bay Car?
            </h2>
          </motion.div>
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-12">
             <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
               <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Sertifikalı eğitim</h3>
               <p className="text-surface/70 leading-relaxed text-sm md:text-base">
                 Bosch Car eğitimli uzman kadro. Yetkili servis kalitesi.
               </p>
             </motion.div>
             <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
               <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Premium odak</h3>
               <p className="text-surface/70 leading-relaxed text-sm md:text-base">
                 Yalnızca Alman grubu araçları. Markaya özel ekipman.
               </p>
             </motion.div>
             <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.3 }}>
               <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Adil fiyat</h3>
               <p className="text-surface/70 leading-relaxed text-sm md:text-base">
                 Yetkili servis kalitesi, sanayi fiyatı. Şeffaf maliyet.
               </p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 4. EMERGENCY SECTION */}
      <section id="emergency" className="py-20 bg-alert text-surface w-full overflow-hidden relative">
        {/* Subtle decorative circle */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          <motion.div {...fadeInUp} className="md:w-1/2 flex flex-col items-start text-left">
            <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              7/24 Yol Yardım
            </h2>
            <p className="text-lg md:text-xl text-surface/90 font-medium">
              Aracınız yolda kaldı mı? Tek tıkla arayın.
            </p>
          </motion.div>
          <motion.div 
            {...fadeInUp} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 flex flex-col md:items-end w-full"
          >
            <div className="flex flex-col items-start md:items-end gap-4 w-full md:w-auto">
              <a 
                href="tel:+905346682445" 
                className="bg-surface text-ink text-3xl md:text-5xl tracking-tight font-bold py-6 px-8 md:px-10 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-xl inline-block w-full md:w-auto text-center"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                0534 668 24 45
              </a>
              <a href="https://wa.me/905346682445" target="_blank" rel="noopener noreferrer" className="text-surface hover:text-white transition font-medium underline underline-offset-4 decoration-surface/50 hover:decoration-white inline-block">
                WhatsApp üzerinden ulaş →
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. CONTACT TEASER SECTION */}
      <section id="contact" className="py-24 bg-surface w-full">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            {...fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-16 text-ink" 
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Bizi ziyaret edin
          </motion.h2>
          <div className="max-w-2xl mx-auto mb-12">
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 md:p-10 rounded-2xl border border-ink/10 flex flex-col justify-between items-start group"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-ink" style={{ fontFamily: 'var(--font-display)' }}>Bay Car Service</h3>
                <p className="text-ink mb-2 max-w-sm leading-relaxed">
                  Taşyaka Mah. Sanayi Sitesi, Şht. Fethi Bey Cad. No: 47/B, Fethiye/Muğla
                </p>
                <p className="text-mute text-sm mb-12">Ölüdeniz yolu üzeri, kanal köprüsü yanı</p>
              </div>
              <a href="#" className="text-accent font-medium group-hover:text-ink transition border-b border-accent group-hover:border-ink pb-0.5 inline-block">
                Yol Tarifi Al →
              </a>
            </motion.div>
          </div>
          
          <motion.div 
             {...fadeInUp}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="pt-8 border-t border-ink/10 w-full flex"
          >
             <p className="text-mute font-medium text-sm md:text-base">Çalışma saatleri: Pazartesi-Cumartesi 08:00-20:00</p>
          </motion.div>
        </div>
      </section>

    </motion.div>
  )
}
