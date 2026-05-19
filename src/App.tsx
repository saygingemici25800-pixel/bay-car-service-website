function App() {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <header className="border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              BAY CAR SERVICE
            </h1>
            <p className="text-xs text-mute uppercase tracking-widest mt-1">
              Fethiye Özel Servis
            </p>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#" className="hover:text-accent transition">Servisler</a>
            <a href="#" className="hover:text-accent transition">Hakkımızda</a>
            <a href="#" className="hover:text-accent transition">İletişim</a>
          </nav>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <p className="text-mute uppercase tracking-widest text-xs mb-6">
          Mercedes · BMW · Audi · Volkswagen · Porsche
        </p>
        <h2
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] max-w-4xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Alman mühendisliği.<br />
          <span className="text-accent">Akdeniz güveni.</span>
        </h2>
        <p className="text-lg text-mute mt-8 max-w-xl">
          Fethiye Taşyaka'da, Bosch sertifikalı uzman kadromuzla
          premium Alman grubu araçlarına özel servis.
        </p>
        <div className="flex gap-4 mt-10">
          <button className="bg-ink text-surface px-6 py-3 rounded-lg font-medium hover:bg-accent transition">
            Randevu Al
          </button>
          <button className="border border-ink text-ink px-6 py-3 rounded-lg font-medium hover:bg-ink hover:text-surface transition">
            Acil Yol Yardım
          </button>
        </div>
      </section>

      <footer className="border-t border-ink/10 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-mute">
          <p>Bay Car Service — Alman Grubu Özel Servis</p>
          <p className="mt-1">Bayram Öğütveren · 0534 668 24 45</p>
        </div>
      </footer>
    </div>
  )
}

export default App
