import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import TreatedImage from '../components/TreatedImage'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
}

export default function Gallery() {
  /*
    Gerçek fotoğraflar (5 adet) + kalan "Fotoğraf yakında" placeholder'lar.
    Grid'e hizalı DEĞİL: masonry (CSS columns) + kayık genişlikler + hafif eğim.
    Bayram Usta'dan yeni fotoğraflar geldikçe placeholder'lar dolacak.
  */
  type GalleryItem =
    | { kind: 'photo'; src: string; alt: string; w: number; h: number; cls: string; rot: number }
    | { kind: 'ph'; cls: string; aspect: string }

  const galleryItems: GalleryItem[] = [
    { kind: 'photo', src: '/images/engine-bay.webp', alt: 'Atölyeden modern motor bölmesi', w: 1400, h: 1044, cls: 'w-full', rot: 1 },
    { kind: 'ph', cls: 'w-[64%] ml-auto', aspect: 'aspect-square' },
    { kind: 'photo', src: '/images/car-detail.webp', alt: 'Araç detayı, muted ton', w: 1000, h: 1500, cls: 'w-[80%] ml-auto', rot: -2 },
    { kind: 'photo', src: '/images/tools-dark.webp', alt: 'Karanlık atölyede aletler', w: 1400, h: 933, cls: 'w-[88%] mr-auto', rot: 1.5 },
    { kind: 'ph', cls: 'w-[82%]', aspect: 'aspect-[4/3]' },
    { kind: 'photo', src: '/images/workshop-wall.webp', alt: 'Atölye duvarı, alet askısı', w: 1400, h: 933, cls: 'w-[92%] mr-auto', rot: -1 },
    { kind: 'ph', cls: 'w-[52%] ml-auto', aspect: 'aspect-[3/4]' },
    { kind: 'photo', src: '/images/garage-vintage.webp', alt: 'Vintage garaj atmosferi', w: 1000, h: 1777, cls: 'w-[62%]', rot: 2 },
    { kind: 'ph', cls: 'w-[74%] mr-auto', aspect: 'aspect-square' },
    { kind: 'ph', cls: 'w-[58%] ml-auto', aspect: 'aspect-[4/5]' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
      className="w-full bg-surface"
    >
      <Helmet>
        <title>Galeri | Bay Car Service</title>
        <link rel="canonical" href="https://baycarservice.com/galeri" />
        <meta property="og:url" content="https://baycarservice.com/galeri" />
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

      {/* Masonry — hizalı değil, kayık, bol boşluk */}
      <section className="pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-10">
          {galleryItems.map((item, index) =>
            item.kind === 'photo' ? (
              <div key={index} className="break-inside-avoid mb-6 md:mb-10">
                <TreatedImage
                  src={item.src}
                  alt={item.alt}
                  width={item.w}
                  height={item.h}
                  rotate={item.rot}
                  delay={(index % 3) * 0.15}
                  rounded="rounded-2xl"
                  className={`${item.cls} shadow-lg`}
                />
              </div>
            ) : (
              <div key={index} className="break-inside-avoid mb-6 md:mb-10">
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 1.04 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.15 }}
                  className={`bg-ink/5 border border-ink/5 rounded-2xl flex items-center justify-center p-6 text-center ${item.cls} ${item.aspect}`}
                >
                  <span className="text-mute font-medium text-sm">Fotoğraf yakında</span>
                </motion.div>
              </div>
            )
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-32 px-6 flex justify-center">
         <motion.div {...fadeInUp} className="text-center bg-white p-10 md:p-16 rounded-3xl border border-ink/10 max-w-3xl w-full">
            <h3 className="text-3xl font-bold mb-6 text-ink" style={{ fontFamily: 'var(--font-display)' }}>Daha fazlası için</h3>
            <p className="text-mute mb-8 text-lg">Günlük operasyonlar, ilginç arızalar ve atölye hayatı Instagram'da.</p>
            {/* Gerçek Instagram profili gelince <a href="https://instagram.com/..." target="_blank"> ile değiştirilecek */}
            <span className="inline-flex items-center gap-2 bg-ink/40 text-surface px-8 py-4 rounded-xl font-bold shadow-xl cursor-default select-none">
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
               Instagram hesabımız yakında
            </span>
         </motion.div>
      </section>
    </motion.div>
  )
}
