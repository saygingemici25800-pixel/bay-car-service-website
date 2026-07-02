import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { brands } from '../lib/brands'
import { businessSchema } from '../lib/seo'
import { YEARS_EXPERIENCE } from '../lib/site'
import { useIsDesktop } from '../hooks/useIsDesktop'
import StatsSection from '../components/StatsSection'

// three.js ağır bir chunk — sadece desktop'ta ve talep üzerine indirilsin.
const HeroScene = lazy(() => import('../components/HeroScene'))

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

// Geçici örnek yorumlar — Bayram Usta'dan gerçek Google yorumları gelince değiştirilecek.
const homeReviews = [
  { text: 'İşçiliği temiz, açıklaması net. Hangi parça neden değişmiş hepsi belli.', author: 'M. K.', car: 'Mercedes' },
  { text: 'Yetkili servise gitmeden güvendiğim tek yer. Fiyat da makul.', author: 'A. T.', car: 'BMW' },
  { text: 'Yolda kaldım, hızlı geldiler. Profesyonel yaklaşım.', author: 'C. Y.', car: 'Audi' },
]

export default function Home() {
  const isDesktop = useIsDesktop()

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
        <link rel="canonical" href="https://baycarservice.com/" />
        <meta property="og:url" content="https://baycarservice.com/" />
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
      </Helmet>

      {/* 1. HERO YENİDEN: ASYMETRİK KOMPOZİSYON */}
      <section className="min-h-screen relative overflow-hidden bg-surface">
        {/* SAĞ TARAF: dönen 3D motor — sadece desktop.
            Mobilde hiç mount edilmez (model indirilmez). */}
        {isDesktop && (
          <div className="absolute top-[10%] right-0 w-[42%] h-[52vh] z-20 hidden md:block">
            <Suspense fallback={null}>
              <HeroScene />
            </Suspense>
          </div>
        )}

        {/* Üst köşe: küçük cesur ifade — header'ın altına alındı (logo ile çakışmasın), z-20 */}
        <div className="absolute top-24 left-6 md:left-12 z-20">
          <p className="text-xs font-mono uppercase tracking-widest text-mute">
            <span className="text-accent">●</span> Fethiye Taşyaka · Şu an açık
          </p>
        </div>
        
        {/* 12-column grid container */}
        <div className="grid grid-cols-12 gap-4 px-6 md:px-12 pt-40 pb-24 relative z-10">
          
          {/* SOL ALT: küçük kicker (col 1-3) */}
          <div className="col-span-12 md:col-span-3 md:col-start-1 md:row-start-1 mt-8">
            <p className="text-xs uppercase tracking-widest text-mute font-mono">
              — Özel servis<br/>
              — Yol yardım<br/>
              — Bosch sertifika
            </p>
          </div>
          
          {/* MERKEZ: dev başlık (col 1-9) — asymetrik */}
          <div className="col-span-12 md:col-span-9 md:col-start-2 md:row-start-1">
            <h1 
              className="font-bold leading-[0.95] tracking-tight"
              style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 11vw, 11rem)'
              }}
            >
              <motion.span 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="block"
              >
                Bayram
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="block md:pl-[20%] italic font-normal text-accent"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Usta'nın
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="block"
              >
                atölyesi.
              </motion.span>
            </h1>
          </div>

          {/* MOBİL fallback: 3D yerine hafif statik marka bloğu (model yüklenmez) */}
          {!isDesktop && (
            <div className="col-span-12 md:hidden mt-8">
              <div className="bg-ink text-surface rounded-2xl px-6 py-8 flex flex-col gap-3">
                <span
                  className="font-bold uppercase leading-[0.85] tracking-tight text-5xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Bay Car
                </span>
                <p className="text-surface/60 text-[11px] font-mono uppercase tracking-[0.2em] leading-relaxed">
                  {Object.values(brands).map((b) => b.name).join(' · ')}
                </p>
              </div>
            </div>
          )}

          {/* SAĞ ALT (col 9-12): meta info kart */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="col-span-12 md:col-span-4 md:col-start-9 md:row-start-2 mt-12 md:mt-8"
          >
            <div className="border-l-2 border-ink pl-6">
              <p className="text-sm text-ink leading-relaxed mb-4">
                {YEARS_EXPERIENCE}+ yıldır Fethiye'de. Mercedes, BMW, Audi, Volkswagen,
                Porsche için <span className="font-bold">tek atölye</span>.
              </p>
              <div className="flex flex-col gap-3 mt-6">
                <Link 
                  to="/randevu"
                  className="group inline-flex items-center gap-3 text-ink hover:text-accent transition"
                >
                  <span className="w-12 h-px bg-ink group-hover:w-20 transition-all duration-500"></span>
                  <span className="text-sm uppercase tracking-widest font-mono">
                    Randevu al
                  </span>
                </Link>
                <a 
                  href="tel:+905346682445"
                  className="group inline-flex items-center gap-3 text-ink hover:text-alert transition"
                >
                  <span className="w-12 h-px bg-ink group-hover:w-20 transition-all duration-500"></span>
                  <span className="text-sm uppercase tracking-widest font-mono">
                    Acil yol yardım
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* SOL ALT 2 (col 1-6): büyük tipografi notu */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="col-span-12 md:col-span-6 md:col-start-1 md:row-start-2 mt-8 md:mt-8"
          >
            <p 
              className="text-lg md:text-xl text-ink leading-relaxed"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Yetkili servis kalitesi.<br/>
              <span className="text-mute italic">Sanayi fiyatı.</span>
            </p>
          </motion.div>
          
        </div>
      </section>

      {/* GALERİ — Akışımız (anasayfa kısa galeri) */}
      <section id="home-gallery" className="py-24 bg-surface w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Asymetrik başlık (sol) */}
          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-mute mb-4">— Akışımız</p>
            <h2 className="text-4xl md:text-6xl font-bold text-ink leading-[0.95] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Atölyeden kareler
            </h2>
          </div>

          {/* Kartlar — her biri ayrı motion.div, framer-motion'a hazır */}
          {/* Animasyon sonra eklenecek - Saygın */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="aspect-[4/3] bg-ink/5 border border-ink/10 rounded-lg flex items-center justify-center hover:scale-[1.02] transition-transform duration-300"
              >
                <span className="text-mute text-sm font-medium">Fotoğraf yakında</span>
              </motion.div>
            ))}
          </div>

          {/* Alt sağ link */}
          <div className="flex justify-end mt-8">
            <Link to="/galeri" className="group inline-flex items-center gap-3 text-ink hover:text-accent transition">
              <span className="text-sm uppercase tracking-widest font-mono">Tüm akışı gör</span>
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* 2. BRAND GRID SECTION */}
      <section id="brands" className="py-24 bg-surface max-w-7xl mx-auto px-6 w-full">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-ink leading-[0.95]" style={{ fontFamily: 'var(--font-display)' }}>
             Beş marka.<br/>
             <span className="text-mute italic font-normal text-3xl md:text-4xl">Tek uzmanlık.</span>
          </h2>
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

      {/* YORUMLAR — premium (placeholder; gerçek Google yorumlarıyla değişecek) */}
      {/* Bayram Usta'dan gerçek Google yorumları gelince değiştirilecek */}
      <section id="home-reviews" className="py-32 bg-surface w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Asymetrik başlık (sol) */}
          <div className="mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-mute mb-4">— Müşteri yorumları</p>
            <h2 className="text-4xl md:text-6xl font-bold text-ink leading-[0.95] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              Ne diyorlar?
            </h2>
          </div>

          {/* 3 kart — her biri ayrı motion.div, framer-motion'a hazır */}
          {/* Animasyon sonra eklenecek - Saygın */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeReviews.map((review, i) => (
              <motion.div
                key={i}
                className="bg-white p-8 md:p-10 rounded-xl border border-ink/5 flex flex-col justify-between"
              >
                <p className="text-ink text-lg leading-relaxed mb-8">"{review.text}"</p>
                <div className="border-t border-ink/5 pt-6">
                  <p className="font-bold text-ink">{review.author}</p>
                  <p className="text-sm text-mute mt-1">{review.car}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Alt sağ link */}
          <div className="flex justify-end mt-12">
            <a
              href="https://www.google.com/maps/search/Bay+Car+Service+Fethiye+Taşyaka"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-ink hover:text-accent transition"
            >
              <span className="text-sm uppercase tracking-widest font-mono">Google'da tüm yorumları gör</span>
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </a>
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
              <a href="https://www.google.com/maps/dir/?api=1&destination=Bay+Car+Service+Fethiye+Taşyaka" target="_blank" rel="noopener noreferrer" className="text-accent font-medium group-hover:text-ink transition border-b border-accent group-hover:border-ink pb-0.5 inline-block">
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
