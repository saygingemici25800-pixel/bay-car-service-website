import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-surface px-6 text-center">
       <Helmet>
         <title>Sayfa Bulunamadı | Bay Car Service</title>
         <meta name="robots" content="noindex, follow" />
       </Helmet>
       <h1 className="text-8xl md:text-9xl font-bold text-ink mb-6" style={{ fontFamily: 'var(--font-display)' }}>404</h1>
       <p className="text-2xl text-mute mb-10 font-medium">Aradığınız sayfaya ulaşılamadı. Taşınmış veya kaldırılmış olabilir.</p>
       <Link to="/" className="bg-ink text-surface px-8 py-4 rounded-xl font-bold hover:bg-accent hover:text-white transition shadow-xl inline-block" aria-label="Anasayfaya Dön">
         Anasayfaya Dön
       </Link>
    </motion.div>
  )
}
