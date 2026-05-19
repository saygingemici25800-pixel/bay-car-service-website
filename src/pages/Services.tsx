import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { brands } from '../lib/brands'

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

export default function Services() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full flex flex-col bg-surface"
    >
      <Helmet>
        <title>Servisler | Bay Car Service Fethiye</title>
      </Helmet>

      {/* Hero */}
      <motion.section {...fadeInUp} className="pt-40 pb-20 px-6 text-center w-full max-w-4xl mx-auto">
         <h1 className="text-5xl md:text-6xl font-bold text-ink mb-6" style={{ fontFamily: 'var(--font-display)' }}>
           Uzmanlık alanlarımız
         </h1>
         <p className="text-xl text-mute leading-relaxed font-medium">
           Fethiye'nin en donanımlı atölyesinde, sadece en iyi bildiğimiz işi yapıyoruz: Alman grubu araçlar.
         </p>
      </motion.section>

      {/* Brands Grid */}
      <section className="pb-32 max-w-7xl mx-auto px-6 w-full">
         <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(brands).map((brand) => (
              <Link to={`/servisler/${brand.slug}`} key={brand.slug} className="group flex">
                <motion.div variants={cardVariant} className="bg-white p-10 rounded-3xl border border-ink/10 group-hover:border-accent group-hover:shadow-2xl transition duration-500 flex flex-col justify-between w-full relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[100px] pointer-events-none group-hover:bg-accent/10 transition duration-500" />
                   <div>
                     <h3 className="text-3xl font-bold text-ink mb-2" style={{ fontFamily: 'var(--font-display)' }}>{brand.name}</h3>
                     <p className="text-mute font-medium max-w-xs">{brand.tagline}</p>
                   </div>
                   <div className="mt-12 flex items-center justify-between">
                     <span className="bg-surface text-ink/70 px-4 py-2 rounded-xl text-sm font-bold uppercase tracking-widest">Özel Servis</span>
                     <span className="text-accent underline underline-offset-4 opacity-0 group-hover:opacity-100 transition duration-500 font-bold">Detay &rarr;</span>
                   </div>
                </motion.div>
              </Link>
            ))}
         </motion.div>
      </section>

    </motion.div>
  )
}
