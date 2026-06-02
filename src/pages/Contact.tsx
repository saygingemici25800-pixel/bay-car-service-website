import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
}

export default function Contact() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="w-full bg-surface">
      <Helmet>
        <title>İletişim | Bay Car Service Fethiye</title>
        <link rel="canonical" href="https://baycarservice.com/iletisim" />
        <meta property="og:url" content="https://baycarservice.com/iletisim" />
        <meta name="description" content="Bay Car Service iletişim bilgileri. Fethiye Taşyaka Sanayi Sitesi ve Çarşı adreslerimiz. Bize hemen ulaşın: 0534 668 24 45." />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 text-center w-full bg-surface">
         <motion.h1 
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
           className="text-5xl md:text-6xl font-bold text-ink mb-6 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}
         >
           İletişim
         </motion.h1>
         <motion.p 
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
           className="text-xl text-mute max-w-lg mx-auto font-medium"
         >
           Ya gelin, ya arayın. Cevap aynı: olur.
         </motion.p>
      </section>

      {/* Locations */}
      <section className="py-20 w-full max-w-3xl mx-auto px-6">
         <div className="flex flex-col gap-10">
            <motion.div {...fadeInUp} className="bg-white p-10 md:p-12 rounded-[2rem] border border-ink/10 shadow-sm flex flex-col justify-between">
               <div>
                  <h2 className="text-3xl font-bold text-ink mb-2" style={{ fontFamily: 'var(--font-display)' }}>Bay Car Service</h2>
                  <p className="text-ink/60 font-medium mb-10">Alman Grubu Özel Servis</p>
                  
                  <div className="mb-10 text-lg">
                    <p className="text-ink mb-2">Taşyaka Mah. Sanayi Sitesi,<br/>Şht. Fethi Bey Cad. No: 47/B<br/>Fethiye / Muğla</p>
                    <p className="text-mute text-base">Ölüdeniz yolu üzeri, kanal köprüsü yanı</p>
                  </div>

                  <div className="bg-surface/50 p-6 rounded-2xl border border-ink/5 mb-10">
                    <div className="flex justify-between items-center border-b border-ink/10 pb-3 mb-3">
                       <span className="font-bold text-ink">Pzt - Cmt</span>
                       <span className="text-mute font-medium">08:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                       <span className="font-bold text-ink text-opacity-50">Pazar</span>
                       <span className="text-[var(--color-alert)] font-medium text-sm">Kapalı (acil için ara)</span>
                    </div>
                  </div>
               </div>
               
               <div className="flex flex-col gap-3">
                 <a href="https://www.google.com/maps/search/Bay+Car+Service+Fethiye+Taşyaka" target="_blank" rel="noopener noreferrer" className="bg-ink text-surface text-center font-bold py-4 rounded-xl hover:bg-accent transition shadow-lg w-full" aria-label="Google Maps'te Aç">
                   Google Maps'te Aç
                 </a>
                 <a href="https://www.google.com/maps/dir/?api=1&destination=Bay+Car+Service+Fethiye+Taşyaka" target="_blank" rel="noopener noreferrer" className="border border-ink/20 text-ink text-center font-bold py-4 rounded-xl hover:bg-surface transition w-full" aria-label="Yol Tarifi Al">
                   Yol Tarifi Al
                 </a>
               </div>
            </motion.div>
         </div>
      </section>

      {/* Direct Contact */}
      <section className="py-24 bg-ink text-surface w-full mt-10">
         <div className="max-w-7xl mx-auto px-6">
            <motion.h2 {...fadeInUp} className="text-4xl font-bold mb-16 text-white" style={{ fontFamily: 'var(--font-display)' }}>Doğrudan ulaşın</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition duration-300">
                  <h3 className="text-xl font-medium text-surface/60 mb-2">Telefon</h3>
                  <a href="tel:+905346682445" className="text-3xl font-bold text-white hover:text-accent transition block mb-8" style={{ fontFamily: 'var(--font-display)' }}>0534 668 24 45</a>
                  <p className="text-accent text-sm font-bold uppercase tracking-widest">7/24 YOL YARDIM</p>
               </motion.div>
               <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition duration-300">
                  <h3 className="text-xl font-medium text-surface/60 mb-2">WhatsApp</h3>
                  <a href="https://wa.me/905346682445" target="_blank" rel="noopener noreferrer" className="text-3xl font-bold text-white hover:text-accent transition block mb-8" style={{ fontFamily: 'var(--font-display)' }}>0534 668 24 45</a>
                  <p className="text-surface/40 text-sm font-bold uppercase tracking-widest">Mesaj yazın, hızlı dönüş</p>
               </motion.div>
               <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition duration-300">
                  <h3 className="text-xl font-medium text-surface/60 mb-2">E-posta</h3>
                  <a href="mailto:info@baycarservice.com" className="text-2xl font-bold text-white hover:text-accent transition block mb-8" style={{ fontFamily: 'var(--font-display)' }}>info@baycarservice.com</a>
                  <p className="text-surface/40 text-sm font-bold uppercase tracking-widest">Detaylı sorularınız için</p>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Map */}
      <section className="w-full max-w-7xl mx-auto px-6 pb-24">
         {/* NOT: arama-bazlı embed. Bayram Usta'nın Google Business profili/koordinatı gelince
             tam pin'li embed (place_id) ile değiştirilebilir. */}
         <div className="rounded-2xl overflow-hidden shadow-lg border border-ink/10">
            <iframe
              src="https://www.google.com/maps?q=Bay+Car+Service+Fethiye+Taşyaka&output=embed"
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
              title="Bay Car Service Konum"
              className="w-full block"
            />
         </div>
      </section>

    </motion.div>
  )
}
