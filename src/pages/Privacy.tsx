import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function Privacy() {
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
      className="w-full bg-surface"
    >
      <Helmet>
        <title>KVKK & Gizlilik | Bay Car Service</title>
        <meta name="robots" content="noindex" />
        <meta name="description" content="Bay Car Service kişisel verilerin korunması (KVKK) aydınlatma metni." />
      </Helmet>

      {/* Hero */}
      <section className="pt-40 pb-12 px-6 w-full max-w-3xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-mute mb-6">— Yasal</p>
        <h1 className="text-4xl md:text-5xl font-bold text-ink mb-6 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
          Kişisel Verilerin Korunması (KVKK)
        </h1>
        <p className="text-lg text-mute leading-relaxed">
          6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında; randevu formu aracılığıyla
          paylaştığınız kişisel verilerin nasıl işlendiğine dair aydınlatma metnidir.
        </p>
      </section>

      {/* Content */}
      <section className="pb-32 px-6 w-full max-w-3xl mx-auto">
        <div className="flex flex-col gap-10">

          <div className="border-l-2 border-accent pl-6">
            <h2 className="text-xl font-bold text-ink mb-3" style={{ fontFamily: 'var(--font-display)' }}>Veri Sorumlusu</h2>
            <p className="text-ink/80 leading-relaxed">
              Bay Car Service — Alman Grubu Özel Servis (Bayram Öğütveren).<br />
              Taşyaka Mah. Sanayi Sitesi, Şht. Fethi Bey Cad. No: 47/B, Fethiye / Muğla.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6">
            <h2 className="text-xl font-bold text-ink mb-3" style={{ fontFamily: 'var(--font-display)' }}>Toplanan Veriler</h2>
            <p className="text-ink/80 leading-relaxed">
              Randevu formu aracılığıyla ad-soyad, telefon numarası, e-posta adresi (opsiyonel) ve
              aracınıza ilişkin bilgiler (marka, model/yıl, sorun açıklaması) toplanır.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6">
            <h2 className="text-xl font-bold text-ink mb-3" style={{ fontFamily: 'var(--font-display)' }}>İşleme Amacı</h2>
            <p className="text-ink/80 leading-relaxed">
              Verileriniz; randevu talebinize yanıt vermek, talep ettiğiniz servis hizmetini sunmak ve
              sizinle iletişim kurmak amacıyla işlenir.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6">
            <h2 className="text-xl font-bold text-ink mb-3" style={{ fontFamily: 'var(--font-display)' }}>Veri Paylaşımı</h2>
            <p className="text-ink/80 leading-relaxed">
              Kişisel verileriniz üçüncü taraflarla pazarlama amacıyla paylaşılmaz; yalnızca hizmet sunumu
              için kullanılır. Randevu formunu gönderdiğinizde bilgileriniz WhatsApp üzerinden tarafımıza
              iletilir; bu iletişim sırasında WhatsApp / Meta Platforms gizlilik politikası geçerlidir.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6">
            <h2 className="text-xl font-bold text-ink mb-3" style={{ fontFamily: 'var(--font-display)' }}>Haklarınız</h2>
            <p className="text-ink/80 leading-relaxed">
              KVKK'nın 11. maddesi kapsamında; verilerinize erişme, düzeltilmesini, silinmesini ve işlenmesine
              itiraz etme hakkına sahipsiniz. Başvurularınız için bize{' '}
              <a href="tel:+905346682445" className="text-accent underline hover:text-ink transition">0534 668 24 45</a>{' '}
              numarasından ulaşabilirsiniz.
            </p>
          </div>

          <div className="border-l-2 border-accent pl-6">
            <h2 className="text-xl font-bold text-ink mb-3" style={{ fontFamily: 'var(--font-display)' }}>Saklama Süresi</h2>
            <p className="text-ink/80 leading-relaxed">
              Paylaştığınız veriler, randevu talebiniz sonuçlanana kadar saklanır; sonrasında işleme amacı
              ortadan kalktığında silinir.
            </p>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-ink/10">
          <Link to="/randevu" className="text-accent font-medium underline underline-offset-4 hover:text-ink transition">
            ← Randevu sayfasına dön
          </Link>
        </div>
      </section>
    </motion.div>
  )
}
