import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { brands } from '../lib/brands';

export default function Appointment() {
  const [searchParams] = useSearchParams();
  // Expecting smallcase brand slug from URL
  const urlBrand = searchParams.get('brand');
  const initialBrand = urlBrand && brands[urlBrand] ? brands[urlBrand].name : '';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    brand: initialBrand || 'Diğer',
    modelYear: '',
    description: '',
    date: '',
    time: ''
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission for Web3Forms placeholder
    setTimeout(() => {
      setSuccess(true);
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full flex flex-col items-center bg-surface min-h-[85vh] py-20 px-6"
    >
      <Helmet>
        <title>Randevu Talebi | Bay Car Service</title>
        <meta name="description" content="Bay Car Service Fethiye için çevrimiçi randevu al. Alman grubu aracınız için hızlı servis imkanı." />
      </Helmet>

      <div className="max-w-3xl w-full text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-ink" style={{ fontFamily: 'var(--font-display)' }}>Randevu Talebi</h1>
        <p className="text-lg text-mute">
          24 saat içinde size geri dönelim. Acil durumlar için <a href="tel:+905346682445" className="text-accent underline hover:text-ink transition">yol yardım hattını</a> arayın.
        </p>
      </div>

      <div className="bg-white max-w-3xl w-full rounded-2xl shadow-xl overflow-hidden border border-ink/10">
        {success ? (
          <div className="p-16 text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-3xl font-bold text-ink mb-2" style={{ fontFamily: 'var(--font-display)' }}>Talebiniz Alındı</h2>
            <p className="text-mute mb-8">Randevu detaylarınızı inceleyip en kısa sürede sizinle iletişime geçeceğiz.</p>
            <button 
              onClick={() => setSuccess(false)}
              className="bg-ink text-surface px-8 py-3 rounded-xl font-medium hover:bg-accent transition"
            >
              Yeni Talep Oluştur
            </button>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit} 
            action="https://api.web3forms.com/submit" 
            method="POST"
            className="p-8 md:p-12 flex flex-col gap-6"
          >
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                 <label className="text-sm font-bold text-ink/80">Ad Soyad</label>
                 <input required type="text" name="name" value={formData.name} onChange={handleChange} className="h-12 px-4 rounded-xl border border-ink/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition bg-surface/50" />
              </div>
              <div className="flex flex-col gap-2">
                 <label className="text-sm font-bold text-ink/80">Telefon</label>
                 <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="0555..." className="h-12 px-4 rounded-xl border border-ink/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition bg-surface/50" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-ink/80">E-posta (Opsiyonel)</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="h-12 px-4 rounded-xl border border-ink/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition bg-surface/50" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                 <label className="text-sm font-bold text-ink/80">Araç Markası</label>
                 <select name="brand" value={formData.brand} onChange={handleChange} className="h-12 px-4 rounded-xl border border-ink/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition bg-surface/50">
                   {Object.values(brands).map(b => (
                     <option key={b.name} value={b.name}>{b.name}</option>
                   ))}
                   <option value="Diğer">Diğer</option>
                 </select>
              </div>
              <div className="flex flex-col gap-2">
                 <label className="text-sm font-bold text-ink/80">Model & Yıl</label>
                 <input type="text" name="modelYear" value={formData.modelYear} onChange={handleChange} placeholder="Örn. C200 2019" className="h-12 px-4 rounded-xl border border-ink/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition bg-surface/50" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-ink/80">Sorun Açıklaması / Talebiniz</label>
              <textarea name="description" value={formData.description} onChange={handleChange} rows={4} className="p-4 rounded-xl border border-ink/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition bg-surface/50 resize-none" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                 <label className="text-sm font-bold text-ink/80">Tercih Edilen Tarih</label>
                 <input type="date" name="date" value={formData.date} onChange={handleChange} className="h-12 px-4 rounded-xl border border-ink/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition bg-surface/50" />
              </div>
              <div className="flex flex-col gap-2">
                 <label className="text-sm font-bold text-ink/80">Tercih Edilen Saat</label>
                 <select name="time" value={formData.time} onChange={handleChange} className="h-12 px-4 rounded-xl border border-ink/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition bg-surface/50">
                   <option value="">Saat seçiniz</option>
                   <option value="Sabah 09:00-12:00">Sabah 09:00 - 12:00</option>
                   <option value="Öğle 12:00-15:00">Öğle 12:00 - 15:00</option>
                   <option value="Öğleden sonra 15:00-18:00">Öğleden Sonra 15:00 - 18:00</option>
                 </select>
              </div>
            </div>

            <button type="submit" className="mt-4 bg-ink text-surface h-14 rounded-xl font-bold text-lg hover:bg-accent transition shadow-lg">
              Randevu Talebi Gönder
            </button>
          </form>
        )}
      </div>

      <a 
        href="https://wa.me/905346682445?text=Merhaba,%20randevu%20almak%20istiyorum." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-8 text-mute hover:text-ink font-medium transition flex items-center gap-2"
      >
        Acil mi? WhatsApp'tan yazın →
      </a>
    </motion.div>
  );
}
