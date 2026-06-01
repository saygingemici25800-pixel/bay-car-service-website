import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

function Counter({ value, suffix = '' }: { value: number, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { damping: 50, stiffness: 80 })
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [isInView, value, motionValue])

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (ref.current) ref.current.textContent = Math.floor(latest).toLocaleString('tr-TR')
    })
  }, [spring])

  return (
    <>
      <span ref={ref}>0</span>
      {suffix && <span>{suffix}</span>}
    </>
  )
}

type Stat = { value?: number; suffix?: string; text?: string; label: string; sub: string }

const stats: Stat[] = [
  { value: 12, suffix: '', label: 'yıl atölye', sub: '2010\'dan beri' },
  { text: 'Yüzlerce', label: 'araç bakımı', sub: 'Mercedes, BMW, Audi, VW, Porsche' },
  { value: 5, suffix: '', label: 'marka uzmanı', sub: 'Alman grubu, Bosch sertifikalı' },
]

export default function StatsSection() {
  return (
    <section className="bg-surface py-32 border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Asymetrik başlık */}
        <div className="grid grid-cols-12 gap-4 mb-20">
          <p className="col-span-12 md:col-span-3 text-xs font-mono uppercase tracking-widest text-mute mb-4 md:mb-0">
            — Sayılar
          </p>
          <h2 
            className="col-span-12 md:col-span-9 text-4xl md:text-6xl font-bold leading-[0.95] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            12 yıl.<br/>
            <span className="text-mute italic font-normal">Yüzlerce araç.</span><br/>
            1 atölye.
          </h2>
        </div>
        
        {/* Stats grid — asymetrik (eşit değil) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-ink/10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`bg-surface p-8 md:p-12 group hover:bg-ink hover:text-surface transition-colors duration-500 ${
                i === stats.length - 1 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <div
                className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {stat.value !== undefined
                  ? <Counter value={stat.value} suffix={stat.suffix} />
                  : stat.text}
              </div>
              <p className="text-sm uppercase tracking-widest font-mono mb-2 text-mute group-hover:text-surface/70 transition">
                {stat.label}
              </p>
              <p className="text-xs text-mute group-hover:text-surface/50 transition">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
