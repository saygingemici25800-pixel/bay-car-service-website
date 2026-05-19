import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}

const reviews = [
  { text: "Mercedes'imin Adblue arızası vardı, yetkili servis 3 hafta dedi. Bayram Usta 2 günde halletti, üstelik fiyatın yarısı.", author: "Ahmet K.", car: "Mercedes E220d 2019", date: "Kasım 2025" },
  { text: "BMW 320'me bakım yaptırdım. Hem temiz iş hem detaylı açıklama. Hangi parça neden değişmiş, hepsi yazılı.", author: "Sibel T.", car: "BMW 320i 2017", date: "Ekim 2025" },
  { text: "Audi'mle yolda kaldım Ölüdeniz'de. 30 dakikada geldiler, yerinde tamir. Tatilim kurtuldu.", author: "Mehmet A.", car: "Audi A4 2020", date: "Eylül 2025" },
  { text: "Porsche Cayenne için Türkiye'de güvendiğim 2-3 atölyeden biri. Hijyen, organizasyon, ekipman tam.", author: "Cem Y.", car: "Porsche Cayenne 2021", date: "Ağustos 2025" },
  { text: "VW Touareg'imin DSG'sini yeniledi. 1 yıl oldu, hiçbir sorun. Yetkili servisin yarı fiyatına.", author: "Hatice D.", car: "VW Touareg 2018", date: "Temmuz 2025" },
  { text: "Almanca konuşabilen tek atölye Fethiye'de. Karım Alman, ona güven veriyor bu.", author: "Hans M.", car: "Mercedes GLC 2022", date: "Haziran 2025" }
];

export default function Reviews() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="w-full bg-surface">
      <Helmet>
        <title>Müşteri Yorumları | Bay Car Service</title>
        <meta name="description" content="Bay Car Service Fethiye hakkında Google'da yapılan 5 yıldızlı müşteri yorumları ve deneyimler." />
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
           Google'da 5 yıldızlı. Çünkü iş bittikten sonra konuşmak müşterinin hakkı.
         </motion.p>
      </section>

      {/* Grid */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((rev, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
                 className="bg-white p-8 md:p-10 rounded-2xl border border-ink/10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
               >
                  <div>
                    <div className="text-[#FABB05] text-xl tracking-widest mb-6">★★★★★</div>
                    <p className="text-ink text-lg leading-relaxed font-medium mb-8">"{rev.text}"</p>
                  </div>
                  <div className="border-t border-ink/5 pt-6">
                    <p className="font-bold text-ink">{rev.author}</p>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2 gap-1">
                      <p className="text-sm text-mute">{rev.car}</p>
                      <p className="text-[11px] text-mute font-medium uppercase tracking-widest">{rev.date}</p>
                    </div>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>

      {/* CTA */}
      <section className="pb-32 px-6 flex justify-center">
         <motion.div {...fadeInUp} className="text-center bg-white p-10 md:p-16 rounded-3xl border border-ink/10 max-w-3xl w-full">
            <h3 className="text-3xl font-bold mb-6 text-ink" style={{ fontFamily: 'var(--font-display)' }}>Siz de yorumunuzu paylaşın</h3>
            <p className="text-mute mb-8 text-lg">Hizmetimizden memnun kaldınız mı? Başkalarının da bizi tanımasına yardımcı olun.</p>
            <a href="#" className="inline-block bg-accent text-surface px-8 py-4 rounded-xl font-bold hover:scale-105 hover:bg-ink transition shadow-xl cursor-default">
               Google'da yorum yap
            </a>
         </motion.div>
      </section>
    </motion.div>
  )
}
