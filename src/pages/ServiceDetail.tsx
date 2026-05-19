import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { brands } from '../lib/brands';

export default function ServiceDetail() {
  const { brand } = useParams<{ brand: string }>();
  
  if (!brand || !brands[brand]) {
    return <Navigate to="/servisler" replace />;
  }

  const brandData = brands[brand];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full flex flex-col"
    >
      <Helmet>
        <title>{brandData.fullName} Fethiye | Bay Car Service</title>
        <meta name="description" content={`Fethiye'de ${brandData.fullName}. Bosch sertifikalı uzman kadro. Periyodik bakım, motor onarım, fren sistemi, elektronik diagnoz. 0534 668 24 45.`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": `Bay Car Service - ${brandData.name} Servisi`,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Taşyaka Mah. Sanayi Sitesi, Şht. Fethi Bey Cad. No: 47/B",
              "addressLocality": "Fethiye",
              "addressRegion": "Muğla",
              "addressCountry": "TR"
            },
            "telephone": "+905346682445",
            "url": `https://baycarservice.com/servisler/${brandData.slug}`
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-ink py-32 w-full text-surface relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0" style={{
          background: `radial-gradient(circle at 100% 0%, ${brandData.heroAccent}50 0%, transparent 60%)`
        }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center md:items-start">
           <div className="text-sm font-medium opacity-60 mb-8 uppercase tracking-widest flex items-center gap-2">
             <Link to="/" className="hover:text-accent transition">Anasayfa</Link>
             <span>›</span>
             <Link to="/servisler" className="hover:text-accent transition">Servisler</Link>
             <span>›</span>
             <span>{brandData.name}</span>
           </div>
           
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="text-6xl md:text-7xl font-bold mb-4 tracking-tight"
             style={{ fontFamily: 'var(--font-display)' }}
           >
             {brandData.name}
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="text-2xl opacity-70"
           >
             {brandData.tagline}
           </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-surface w-full">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-ink" style={{ fontFamily: 'var(--font-display)' }}>
            Sunduğumuz hizmetler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {brandData.services.map((service, index) => (
              <motion.div 
                key={service}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 hover:bg-white/50 rounded-xl transition duration-300 group cursor-default border border-transparent hover:border-ink/5"
              >
                <span className="text-accent font-bold text-xl group-hover:scale-125 transition-transform">·</span>
                <span className="text-lg text-ink font-medium">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues Section */}
      <section className="py-24 bg-ink/5 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-ink" style={{ fontFamily: 'var(--font-display)' }}>
            Sıkça karşılaşılan sorunlar
          </h2>
          <div className="flex flex-col">
            {brandData.commonIssues.map((issue, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border-b border-ink/10 py-6 last:border-0"
              >
                <h3 className="font-bold text-xl text-ink mb-2">{issue.problem}</h3>
                <p className="text-mute md:w-3/4 leading-relaxed">{issue.solution}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent w-full text-surface flex justify-center text-center">
         <div className="max-w-3xl mx-auto px-6 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              {brandData.name} randevusu alın
            </h2>
            <p className="text-surface/80 text-xl mb-10">Aracınızı Bosch sertifikalı uzman ellere bırakın.</p>
            <Link 
              to={`/randevu?brand=${brandData.slug}`} 
              className="bg-surface text-accent text-lg font-bold px-10 py-5 rounded-xl hover:scale-105 transition shadow-xl"
            >
              Randevu Al
            </Link>
         </div>
      </section>
    </motion.div>
  );
}
