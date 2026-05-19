import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

export default function Gallery() {
  const galleryItems = [
    { aspect: "aspect-square" },
    { aspect: "aspect-[4/5] md:col-span-2 md:row-span-2" },
    { aspect: "aspect-[3/4]" },
    { aspect: "aspect-square" },
    { aspect: "aspect-[16/9] md:col-span-2" },
    { aspect: "aspect-[4/5]" },
    { aspect: "aspect-square" },
    { aspect: "aspect-[16/9] md:col-span-2" },
    { aspect: "aspect-[3/4] md:row-span-2" },
    { aspect: "aspect-square" },
    { aspect: "aspect-[4/5]" },
    { aspect: "aspect-square" },
  ];

  /* 
    Bayram Usta'dan gerçek fotoğraflar geldiğinde değiştirilecek 
  */

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
      className="w-full bg-surface"
    >
      <Helmet>
        <title>Galeri | Bay Car Service</title>
        <meta name="description" content="Bay Car Service atölyesinden fotoğraflar. Çalışma ortamımız ve onarım sürecinden detaylar." />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 text-center w-full relative">
         <motion.h1 
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
           className="text-5xl md:text-6xl font-bold text-ink mb-6" style={{ fontFamily: 'var(--font-display)' }}
         >
           Atölyeden
         </motion.h1>
         <motion.p 
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
           className="text-xl text-mute max-w-2xl mx-auto"
         >
           Detay önemlidir. Her parça, her temas, her geri dönen müşteri.
         </motion.p>
      </section>

      {/* Grid */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div 
               key={index}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
               className={`bg-ink/5 border border-ink/5 rounded-2xl flex items-center justify-center group overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 w-full h-full p-6 text-center ${item.aspect}`}
            >
               {/* Stand-in element */}
               <span className="text-mute font-medium text-sm group-hover:text-ink transition duration-300">Fotoğraf yakında</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32 px-6 flex justify-center">
         <motion.div {...fadeInUp} className="text-center bg-white p-10 md:p-16 rounded-3xl border border-ink/10 max-w-3xl w-full">
            <h3 className="text-3xl font-bold mb-6 text-ink" style={{ fontFamily: 'var(--font-display)' }}>Daha fazlası için</h3>
            <p className="text-mute mb-8 text-lg">Günlük operasyonlar, ilginç arızalar ve atölye hayatı Instagram'da.</p>
            <a href="#" className="inline-flex items-center gap-2 bg-ink text-surface px-8 py-4 rounded-xl font-bold hover:bg-accent hover:text-white transition shadow-xl">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
               Instagram'ı takip et
            </a>
         </motion.div>
      </section>
    </motion.div>
  )
}
