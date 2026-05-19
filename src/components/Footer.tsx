import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-ink text-surface py-16 w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
           {/* Column 1 */}
           <div className="flex flex-col gap-4">
             <h3 className="text-3xl font-bold tracking-tight text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
               BAY CAR SERVICE
             </h3>
             <p className="text-surface/80">Alman Grubu Özel Servis</p>
             <p className="text-surface/80">Fethiye / Muğla</p>
           </div>
           
           {/* Column 2 */}
           <div className="flex flex-col gap-4">
             <h4 className="font-bold text-lg text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>Servislerimiz</h4>
             <Link to="/servisler/mercedes" className="text-surface/70 hover:text-white transition">Mercedes</Link>
             <Link to="/servisler/bmw" className="text-surface/70 hover:text-white transition">BMW</Link>
             <Link to="/servisler/audi" className="text-surface/70 hover:text-white transition">Audi</Link>
             <Link to="/servisler/volkswagen" className="text-surface/70 hover:text-white transition">VW</Link>
             <Link to="/servisler/porsche" className="text-surface/70 hover:text-white transition">Porsche</Link>
           </div>

           {/* Column 3 */}
           <div className="flex flex-col gap-4">
             <h4 className="font-bold text-lg text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>Site</h4>
             <Link to="/hakkimizda" className="text-surface/70 hover:text-white transition">Hakkımızda</Link>
             <Link to="/galeri" className="text-surface/70 hover:text-white transition">Galeri</Link>
             <Link to="/yorumlar" className="text-surface/70 hover:text-white transition">Yorumlar</Link>
             <Link to="/randevu" className="text-surface/70 hover:text-white transition">Randevu</Link>
             <Link to="/iletisim" className="text-surface/70 hover:text-white transition">İletişim</Link>
           </div>

           {/* Column 4 */}
           <div className="flex flex-col gap-4">
             <h4 className="font-bold text-lg text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>İletişim</h4>
             <a href="tel:+905346682445" className="text-accent font-bold hover:text-white transition text-lg w-max">0534 668 24 45</a>
             <a href="https://wa.me/905346682445" target="_blank" rel="noopener noreferrer" className="text-surface/70 hover:text-white transition w-max">WhatsApp'tan yazın</a>
             <p className="text-surface/70 mt-2">Çalışma saatleri:<br/>Pzt-Cmt 08:00-20:00</p>
             <p className="text-surface/40 text-xs mt-2 border border-surface/10 px-3 py-1.5 rounded-md inline-block w-max font-medium">7/24 yol yardım</p>
           </div>
        </div>

        <div className="border-t border-surface/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm mt-auto">
           <p className="text-surface/60 text-center md:text-left tracking-wide">© 2026 Bay Car Service. Tüm hakları saklıdır.</p>
           <p className="text-surface/40 text-center md:text-right">
             <a href="#" className="hover:text-surface/80 transition">Saygın Kartal</a> tarafından tasarlandı.
           </p>
        </div>
      </div>
    </footer>
  )
}
