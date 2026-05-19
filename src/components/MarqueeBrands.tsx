import { motion } from 'framer-motion'

const brands = ['MERCEDES-BENZ', 'BMW', 'AUDI', 'VOLKSWAGEN', 'PORSCHE']

export default function MarqueeBrands() {
  // Dublicate brands for seamless loop
  const duplicated = [...brands, ...brands, ...brands, ...brands]
  
  return (
    <section className="bg-ink text-surface py-12 overflow-hidden border-y border-ink">
      <motion.div
        className="flex whitespace-nowrap gap-16 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear'
        }}
      >
        {duplicated.map((brand, i) => (
          <span 
            key={i}
            className="text-5xl md:text-7xl font-bold tracking-tight flex items-center gap-16"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {brand}
            <span className="text-accent">●</span>
          </span>
        ))}
      </motion.div>
    </section>
  )
}
