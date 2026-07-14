import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import TreatedImage from '../components/TreatedImage'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
}

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full flex flex-col"
    >
      <Helmet>
        <title>Hakkımızda | Bay Car Service</title>
        <link rel="canonical" href="https://baycarservice.com/hakkimizda" />
        <meta property="og:url" content="https://baycarservice.com/hakkimizda" />
        <meta name="description" content="Bayram Öğütveren'in Mercedes ve BMW yetkili servis tecrübesiyle kurulan Fethiye Bay Car Service hikayesi." />
      </Helmet>

      {/* 1. Hero */}
      <section className="bg-ink text-surface pt-40 pb-32 px-6 w-full relative">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-bold text-surface/60 uppercase tracking-[0.2em] mb-6">BAY CAR SERVICE · 2010+</p>
          <motion.h1 
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
             className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}
          >
             Bayram Usta'nın<br/>atölyesi.
          </motion.h1>
          <motion.p
             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
             className="text-xl md:text-2xl opacity-80 max-w-2xl leading-relaxed font-medium"
          >
             Mercedes'in ilk vites kutusunu açtığı günden bu yana, Fethiye'de Alman grubu araçların adresi.
          </motion.p>
        </div>
      </section>

      {/* 2. Story */}
      <section className="py-24 bg-surface w-full relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
           <motion.div {...fadeInUp}>
             <h2 className="text-3xl font-bold mb-8 text-ink" style={{ fontFamily: 'var(--font-display)' }}>Hikaye</h2>
             <div className="space-y-6 text-ink/80 leading-relaxed text-lg">
                <p>
                  Bayram Öğütveren, motor işine mutfağından başladı. Bosch Car Service eğitimlerini tamamlayıp yıllarca yetkili servis tezgahlarında marka standartlarını öğrendi. "Servis" demek, onun için önce parçayı, sonra sistemi anlamak demek oldu. En sonunda yetkili servis tecrübesini Fethiye'de kendi çatısı altında topladı.
                </p>
                <p>
                  Bugün Taşyaka'da, Fethiye'nin sanayi bölgesinde. Mercedes/BMW/Audi/VW/Porsche için tam donanım. Mercedes, BMW, Audi, VW ve Porsche araçların spesifik sistemlerine uygun en güncel diagnoz araçlarına sahibiz.
                </p>
                <p className="font-medium text-ink bg-white/50 p-6 rounded-xl border border-ink/5 relative italic">
                  "İşimiz markalara saygı. Bir aracın yetkili servis dışında bu kadar özenle ele alındığını gördüğünüzde, fark hemen anlaşılır."
                </p>
             </div>
           </motion.div>
           
           {/* workshop-wall — asimetrik, kolonun dışına taşar, hafif eğik */}
           <div className="w-full flex justify-center md:justify-end">
              <TreatedImage
                src="/images/workshop-wall.webp"
                alt="Bay Car atölyesi — alet duvarı ve tezgah"
                width={1400}
                height={933}
                rotate={-2}
                delay={0.15}
                rounded="rounded-2xl"
                className="w-[85%] sm:w-4/5 md:w-[112%] md:-mr-6 lg:-mr-16 shadow-xl"
              />
           </div>
        </div>
      </section>

      {/* 3. Credentials */}
      <section className="py-24 bg-ink text-surface w-full">
         <div className="max-w-7xl mx-auto px-6">
            <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-bold mb-16 text-white" style={{ fontFamily: 'var(--font-display)' }}>
              Eğitim & Sertifika
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }}>
                 <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                   <span className="text-accent text-3xl">·</span> Bosch Car Service
                 </h3>
                 <p className="text-surface/70 leading-relaxed text-sm md:text-base">Uzun süreli teknik eğitim. Modern araçlardaki diagnoz, motor ve şanzıman sistemlerine tam hakimiyet.</p>
               </motion.div>
               <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
                 <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                   <span className="text-accent text-3xl">·</span> Yetkili servis tecrübesi
                 </h3>
                 <p className="text-surface/70 leading-relaxed text-sm md:text-base">Yıllarca Mercedes-Benz ve BMW yetkili servislerinde elde edilmiş, kalibrasyon ve iş disiplini kültürü.</p>
               </motion.div>
               <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.3 }}>
                 <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                   <span className="text-accent text-3xl">·</span> Sürekli güncelleme
                 </h3>
                 <p className="text-surface/70 leading-relaxed text-sm md:text-base">Alman mühendisliği her yıl değişir. Yazılımların ve mekanik sistemlerin takibi için eğitime devam.</p>
               </motion.div>
            </div>
         </div>
      </section>

      {/* 4. Locations */}
      <section className="py-24 bg-surface w-full">
        <div className="max-w-2xl mx-auto px-6">
           <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-bold text-ink mb-16 text-center" style={{ fontFamily: 'var(--font-display)' }}>
              Atölyemiz
           </motion.h2>
           <div className="flex flex-col gap-8">
              <motion.div {...fadeInUp} transition={{ duration: 0.6, delay: 0.1 }} className="bg-white p-10 rounded-2xl border border-ink/10 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-ink" style={{ fontFamily: 'var(--font-display)' }}>Bay Car Service</h3>
                  <p className="text-ink/80 mb-6">Taşyaka Mah. Sanayi Sitesi, Şht. Fethi Bey Cad. No: 47/B, Fethiye</p>
                  
                  <h4 className="font-bold text-sm text-mute uppercase tracking-widest mb-3">Hizmetler</h4>
                  <ul className="space-y-2 text-ink/80 font-medium mb-8">
                    <li>Motor onarım ve rektifiye</li>
                    <li>Otomatik / Manuel şanzıman</li>
                    <li>Fren ve süspansiyon sistemleri</li>
                    <li>Ağır elektronik diagnoz</li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-ink/10">
                  <p className="text-sm font-bold text-mute">Pzt - Cmt | 08:00 - 20:00</p>
                </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Alt: garage-vintage — sola kayık, küçük, bol boşluk */}
      <section className="pb-28 bg-surface w-full">
        <div className="max-w-7xl mx-auto px-6 flex justify-center md:justify-start">
          <TreatedImage
            src="/images/garage-vintage.webp"
            alt="Vintage garaj atmosferi — atölyeden bir köşe"
            width={1000}
            height={1777}
            rotate={2}
            className="w-[68%] sm:w-[40%] md:w-[22%] max-w-[260px] shadow-xl"
          />
        </div>
      </section>

    </motion.div>
  )
}
