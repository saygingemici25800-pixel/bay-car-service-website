import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

type TreatedImageProps = {
  src: string
  /** Açıklayıcı Türkçe alt metni (a11y) */
  alt: string
  /** İntrinsik boyutlar — CLS önleme için zorunlu */
  width: number
  height: number
  /** Konum + boyut sınıfları (w-, absolute, negatif margin, z-index vb.) */
  className?: string
  /** Köşe yuvarlama sınıfı */
  rounded?: string
  /** Hafif eğim (derece) — asimetri için */
  rotate?: number
  /** Stagger gecikmesi (sn) */
  delay?: number
  /** Ink gradient overlay (varsayılan açık) */
  overlay?: boolean
}

/**
 * 5 farklı kaynaktan gelen fotoğrafları tek görsel dile sokan ortak bileşen:
 * aynı CSS filter tretmanı + ink gradient overlay + yumuşak scroll fade-in.
 */
export default function TreatedImage({
  src,
  alt,
  width,
  height,
  className = '',
  rounded = 'rounded-xl',
  rotate = 0,
  delay = 0,
  overlay = true,
}: TreatedImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 1.04, rotate }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.2, ease: EASE, delay }}
      className={`relative overflow-hidden ${rounded} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="block w-full h-auto select-none"
        style={{ filter: 'saturate(0.55) contrast(1.1) brightness(0.92)' }}
      />
      {overlay && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(26,29,33,0.15), rgba(26,29,33,0.35))' }}
        />
      )}
    </motion.div>
  )
}
