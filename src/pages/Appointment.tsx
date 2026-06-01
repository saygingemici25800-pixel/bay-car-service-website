import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { brands } from '../lib/brands';

const WHATSAPP_NUMBER = '905346682445';

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

  const [error, setError] = useState('');
  const [consent, setConsent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation: ad soyad ve telefon zorunlu
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Lütfen ad soyad ve telefon alanlarını doldurun.');
      return;
    }
    if (!consent) {
      setError('Devam etmek için KVKK Aydınlatma Metni onayını işaretleyin.');
      return;
    }
    setError('');

    // Form bilgilerinden WhatsApp mesajı oluştur (gerçek \n + encodeURIComponent)
    const message =
      `Merhaba, randevu talebim var:\n\n` +
      `Ad Soyad: ${formData.name}\n` +
      `Telefon: ${formData.phone}\n` +
      `E-posta: ${formData.email || '-'}\n` +
      `Marka: ${formData.brand}\n` +
      `Model/Yıl: ${formData.modelYear || '-'}\n` +
      `Sorun: ${formData.description || '-'}\n` +
      `Tercih edilen tarih: ${formData.date || '-'}\n` +
      `Tercih edilen saat: ${formData.time || '-'}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
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
          Formu doldurun, WhatsApp üzerinden size dönelim. Acil durumlar için <a href="tel:+905346682445" className="text-accent underline hover:text-ink transition">yol yardım hattını</a> arayın.
        </p>
      </div>

      <div className="bg-white max-w-3xl w-full rounded-2xl shadow-xl overflow-hidden border border-ink/10">
        <form
          onSubmit={handleSubmit}
          className="p-8 md:p-12 flex flex-col gap-6"
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
               <label htmlFor="name" className="text-sm font-bold text-ink/80">Ad Soyad</label>
               <input required aria-required="true" id="name" type="text" name="name" value={formData.name} onChange={handleChange} className="h-12 px-4 rounded-xl border border-ink/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition bg-surface/50" />
            </div>
            <div className="flex flex-col gap-2">
               <label htmlFor="phone" className="text-sm font-bold text-ink/80">Telefon</label>
               <input required aria-required="true" id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="0555..." className="h-12 px-4 rounded-xl border border-ink/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition bg-surface/50" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-bold text-ink/80">E-posta (Opsiyonel)</label>
            <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} className="h-12 px-4 rounded-xl border border-ink/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition bg-surface/50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
               <label htmlFor="brand" className="text-sm font-bold text-ink/80">Araç Markası</label>
               <select id="brand" name="brand" value={formData.brand} onChange={handleChange} className="h-12 px-4 rounded-xl border border-ink/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition bg-surface/50">
                 {Object.values(brands).map(b => (
                   <option key={b.name} value={b.name}>{b.name}</option>
                 ))}
                 <option value="Diğer">Diğer</option>
               </select>
            </div>
            <div className="flex flex-col gap-2">
               <label htmlFor="modelYear" className="text-sm font-bold text-ink/80">Model & Yıl</label>
               <input id="modelYear" type="text" name="modelYear" value={formData.modelYear} onChange={handleChange} placeholder="Örn. C200 2019" className="h-12 px-4 rounded-xl border border-ink/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition bg-surface/50" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="text-sm font-bold text-ink/80">Sorun Açıklaması / Talebiniz</label>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows={4} className="p-4 rounded-xl border border-ink/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition bg-surface/50 resize-none" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
               <label htmlFor="date" className="text-sm font-bold text-ink/80">Tercih Edilen Tarih</label>
               <input id="date" type="date" name="date" value={formData.date} onChange={handleChange} className="h-12 px-4 rounded-xl border border-ink/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition bg-surface/50" />
            </div>
            <div className="flex flex-col gap-2">
               <label htmlFor="time" className="text-sm font-bold text-ink/80">Tercih Edilen Saat</label>
               <select id="time" name="time" value={formData.time} onChange={handleChange} className="h-12 px-4 rounded-xl border border-ink/20 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition bg-surface/50">
                 <option value="">Saat seçiniz</option>
                 <option value="Sabah 09:00-12:00">Sabah 09:00 - 12:00</option>
                 <option value="Öğle 12:00-15:00">Öğle 12:00 - 15:00</option>
                 <option value="Öğleden sonra 15:00-18:00">Öğleden Sonra 15:00 - 18:00</option>
               </select>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              required
              aria-required="true"
              id="kvkk"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-accent)] cursor-pointer"
            />
            <label htmlFor="kvkk" className="text-sm text-mute leading-relaxed cursor-pointer">
              <Link to="/gizlilik" className="text-accent underline hover:text-ink transition">KVKK Aydınlatma Metni</Link>'ni okudum, kişisel verilerimin randevu talebim için işlenmesini onaylıyorum.
            </label>
          </div>

          {error && (
            <p role="alert" className="text-[var(--color-alert)] text-sm font-medium bg-[var(--color-alert)]/5 border border-[var(--color-alert)]/20 rounded-xl px-4 py-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            aria-label="WhatsApp ile randevu talebi gönder"
            className="mt-4 bg-ink text-surface h-14 rounded-xl font-bold text-lg hover:bg-accent transition shadow-lg"
          >
            WhatsApp ile Randevu Talebi Gönder
          </button>
          <p className="text-center text-sm text-mute -mt-2">
            WhatsApp uygulamanız açılacak, mesaj hazır gelecek.
          </p>
        </form>
      </div>

      <a
        href="https://wa.me/905346682445?text=Merhaba,%20randevu%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Acil durum için doğrudan WhatsApp'tan yazın"
        className="mt-8 text-mute hover:text-ink font-medium transition flex items-center gap-2"
      >
        Acil mi? WhatsApp'tan yazın →
      </a>
    </motion.div>
  );
}
