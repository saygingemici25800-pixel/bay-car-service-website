import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
}

export default function Emergency() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="w-full bg-surface">
      <Helmet>
        <title>7/24 Yol Yardım Fethiye | Bay Car Service</title>
        <link rel="canonical" href="https://baycarservice.com/acil" />
        <meta property="og:url" content="https://baycarservice.com/acil" />
        <meta name="description" content="Fethiye, Ölüdeniz, Çalış, Kayaköy çevresine 30 dakika içinde yol yardım. Akü, yakıt, lastik, çekme. 0534 668 24 45." />
      </Helmet>

      {/* Hero */}
      <section className="bg-[var(--color-alert)] text-surface pt-40 pb-32 px-6 w-full text-center md:text-left relative overflow-hidden">
         <div className="absolute top-[-50%] right-[-10%] w-[80%] md:w-[40%] h-[150%] bg-surface/10 rotate-12 pointer-events-none" />
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="md:w-1/2">
               <p className="text-surface border border-surface/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-6 inline-block">7/24 YOL YARDIM</p>
               <motion.h1 
                 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}
               >
                 Yolda mı kaldınız?
               </motion.h1>
               <motion.p 
                 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                 className="text-xl md:text-2xl opacity-90 max-w-lg leading-relaxed font-medium mb-12"
               >
                 Fethiye, Ölüdeniz, Çalış, Kayaköy ve çevresine 30 dakika içinde ulaşırız.
               </motion.p>
            </div>
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
               className="md:w-1/2 flex flex-col gap-4 w-full"
            >
               <a 
                 href="tel:+905346682445" 
                 className="bg-surface text-ink text-3xl md:text-5xl font-bold flex items-center justify-center py-6 px-12 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-2xl"
                 style={{ fontFamily: 'var(--font-display)' }}
               >
                 0534 668 24 45
               </a>
               <a 
                 href="https://wa.me/905346682445?text=Acil%20yol%20yard%C4%B1m%20laz%C4%B1m" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="border-2 border-surface/30 hover:border-surface text-surface text-2xl font-bold py-5 px-8 rounded-2xl flex justify-center items-center gap-3 transition-colors shadow-lg"
                 style={{ fontFamily: 'var(--font-display)' }}
               >
                 WhatsApp'tan Konum At
               </a>
            </motion.div>
         </div>
      </section>

      {/* Coverage Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 w-full">
         <motion.div {...fadeInUp} className="mb-16">
           <h2 className="text-4xl md:text-5xl font-bold text-ink mb-4" style={{ fontFamily: 'var(--font-display)' }}>Hizmet bölgemiz</h2>
           <p className="text-lg text-mute font-medium">Bölgeye göre tahmini varış süresi</p>
         </motion.div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { loc: "Fethiye Merkez", time: "10-15 dakika" },
              { loc: "Çalış / Karaçulha", time: "15-20 dakika" },
              { loc: "Ölüdeniz / Hisarönü", time: "25-30 dakika" },
              { loc: "Kayaköy / Göcek", time: "30-35 dakika" },
            ].map((region, i) => (
              <motion.div 
                 key={i} {...fadeInUp} transition={{ duration: 0.6, delay: i * 0.1 }}
                 className="bg-white border border-ink/10 p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-sm"
              >
                 <h3 className="text-xl font-bold text-ink mb-2" style={{ fontFamily: 'var(--font-display)' }}>{region.loc}</h3>
                 <p className="text-mute font-medium uppercase tracking-widest text-xs border border-ink/10 px-3 py-1 rounded-full">{region.time}</p>
              </motion.div>
            ))}
         </div>
      </section>

      {/* What We Fix */}
      <section className="bg-ink text-surface py-24 w-full">
         <div className="max-w-7xl mx-auto px-6">
            <motion.h2 {...fadeInUp} className="text-4xl md:text-5xl font-bold mb-16 text-white" style={{ fontFamily: 'var(--font-display)' }}>
               Yol kenarında çözebileceklerimiz
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 text-lg mb-16">
               <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="flex flex-col gap-4">
                 <p className="flex items-start gap-4"><span className="text-accent text-2xl font-bold">·</span> Akü çalıştırma (jump start)</p>
                 <p className="flex items-start gap-4"><span className="text-accent text-2xl font-bold">·</span> Yakıt bitti — yedek yakıt destek</p>
                 <p className="flex items-start gap-4"><span className="text-accent text-2xl font-bold">·</span> Lastik patlağı — yedek lastik montajı</p>
                 <p className="flex items-start gap-4"><span className="text-accent text-2xl font-bold">·</span> Anahtar içeride kaldı</p>
               </motion.div>
               <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex flex-col gap-4">
                 <p className="flex items-start gap-4"><span className="text-accent text-2xl font-bold">·</span> Motor arıza ışığı — anlık diagnoz</p>
                 <p className="flex items-start gap-4"><span className="text-accent text-2xl font-bold">·</span> Aşırı ısınma — soğutma sistemi müdahalesi</p>
                 <p className="flex items-start gap-4"><span className="text-accent text-2xl font-bold">·</span> Fren sistemi acil müdahale</p>
                 <p className="flex items-start gap-4"><span className="text-accent text-2xl font-bold">·</span> Çekme kurtarma — atölyeye güvenli taşıma</p>
               </motion.div>
            </div>
            <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="pt-8 border-t border-surface/10">
               <p className="font-medium text-surface/80">Not: Atölyede büyük tamir gerekirse, aracınızı ücretsiz çekeriz.</p>
            </motion.div>
         </div>
      </section>

      {/* Pricing Note */}
      <section className="py-24 bg-surface w-full">
         <div className="max-w-7xl mx-auto px-6">
            <motion.h2 {...fadeInUp} className="text-4xl font-bold text-ink mb-12" style={{ fontFamily: 'var(--font-display)' }}>Şeffaf fiyat</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
                  <p className="text-ink/80 leading-relaxed text-lg font-medium border-l-2 border-accent pl-4">
                    Ücretsiz keşif. Önce sorunu yerinde tespit ederiz, fiyatta anlaşırız, ondan sonra çalışmaya başlarız.
                  </p>
               </motion.div>
               <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
                  <p className="text-ink/80 leading-relaxed text-lg font-medium border-l-2 border-accent pl-4">
                    Yedek parça maliyeti son derece açık. Faturaya dayanır, nereden alındığı bellidir.
                  </p>
               </motion.div>
               <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                  <p className="text-ink/80 leading-relaxed text-lg font-medium border-l-2 border-accent pl-4">
                    İşçilik bedeli standart saat ücretine dayanır. Faturada saat, parça ve KDV ayrı ayrıdır. Sürpriz yoktur.
                  </p>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[var(--color-alert)] py-32 w-full text-center px-6">
         <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-surface">
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'var(--font-display)' }}>Acil mi? Şimdi arayın.</h2>
            <a href="tel:+905346682445" className="text-5xl md:text-7xl font-bold hover:text-white transition-colors" style={{ fontFamily: 'var(--font-display)' }}>
              0534 668 24 45
            </a>
         </motion.div>
      </section>

    </motion.div>
  )
}
