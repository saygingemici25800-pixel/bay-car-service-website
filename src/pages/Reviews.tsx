import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
}

export default function Reviews() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="w-full bg-surface">
      <Helmet>
        <title>Müşteri Yorumları | Bay Car Service</title>
        <meta name="description" content="Bay Car Service Fethiye müşteri yorumları. Deneyiminizi Google üzerinden paylaşın, değerlendirmeleri görün." />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 text-center w-full">
         <motion.h1
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
           className="text-5xl md:text-6xl font-bold text-ink mb-6" style={{ fontFamily: 'var(--font-display)' }}
         >
           Müşteri yorumları
         </motion.h1>
         <motion.p
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
           className="text-xl text-mute max-w-2xl mx-auto leading-relaxed"
         >
           İş bittikten sonra konuşmak müşterinin hakkı. Deneyiminizi Google üzerinden paylaşabilirsiniz.
         </motion.p>
      </section>

      {/* Honest CTA */}
      <section className="pb-32 px-6 flex justify-center">
         <motion.div {...fadeInUp} className="text-center bg-white p-10 md:p-16 rounded-3xl border border-ink/10 max-w-3xl w-full">
            <h2 className="text-3xl font-bold mb-6 text-ink" style={{ fontFamily: 'var(--font-display)' }}>Deneyiminizi paylaşın</h2>
            <p className="text-mute mb-10 text-lg leading-relaxed max-w-xl mx-auto">
               Google'da bizi değerlendiren müşterilerimize teşekkür ederiz. Yorumları görmek ve kendi deneyiminizi paylaşmak için:
            </p>
            <a href="#" className="inline-block bg-accent text-surface px-8 py-4 rounded-xl font-bold hover:scale-105 hover:bg-ink transition shadow-xl">
               Google'da yorumları gör
            </a>
         </motion.div>
      </section>
    </motion.div>
  )
}
