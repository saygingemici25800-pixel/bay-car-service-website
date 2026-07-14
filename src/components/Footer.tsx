import { Link } from 'react-router-dom';
import { ADDRESS, HOURS } from '../lib/site';

export default function Footer() {
  return (
    <footer className="bg-ink text-surface py-24 w-full relative overflow-hidden">
      
      {/* Decorative Giant Text */}
      <div aria-hidden="true" className="absolute -bottom-10 -left-10 md:-left-20 text-[10rem] md:text-[20rem] font-bold text-surface opacity-5 pointer-events-none select-none tracking-tighter mix-blend-overlay" style={{ fontFamily: 'var(--font-display)', lineHeight: '0.7' }}>
        BAY CAR
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8">
        
        {/* Left side info */}
        <div className="flex flex-col gap-8 md:w-1/3">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-bold tracking-widest text-white" style={{ fontFamily: 'var(--font-display)' }}>
              BAY·CAR
            </h3>
            <p className="text-surface/60 font-mono text-xs uppercase tracking-widest mt-2">Alman Grubu Özel &middot; EST. 2010</p>
          </div>
          <div className="text-surface/60 font-medium leading-relaxed">
            <p>{ADDRESS.street}</p>
            <p>{ADDRESS.cityLine}</p>
          </div>
          <p className="text-surface/40 text-xs border border-surface/10 px-3 py-1.5 rounded-md inline-block w-max font-medium">7/24 yol yardım</p>
        </div>

        {/* Right side links (Asymmetric) */}
        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-12 w-full pt-4">
           {/* Column 2 */}
           <div className="flex flex-col gap-4">
             <h4 className="font-bold text-sm uppercase tracking-widest text-white/50 font-mono mb-4">Servislerimiz</h4>
             <Link to="/servisler/mercedes" className="text-surface/80 hover:text-white transition">Mercedes</Link>
             <Link to="/servisler/bmw" className="text-surface/80 hover:text-white transition">BMW</Link>
             <Link to="/servisler/audi" className="text-surface/80 hover:text-white transition">Audi</Link>
             <Link to="/servisler/volkswagen" className="text-surface/80 hover:text-white transition">VW</Link>
             <Link to="/servisler/porsche" className="text-surface/80 hover:text-white transition">Porsche</Link>
           </div>

           {/* Column 3 */}
           <div className="flex flex-col gap-4">
             <h4 className="font-bold text-sm uppercase tracking-widest text-white/50 font-mono mb-4">Site</h4>
             <Link to="/hakkimizda" className="text-surface/80 hover:text-white transition">Biz</Link>
             <Link to="/galeri" className="text-surface/80 hover:text-white transition">Akışımız</Link>
             <Link to="/yorumlar" className="text-surface/80 hover:text-white transition">Yorumlar</Link>
             <Link to="/randevu" className="text-surface/80 hover:text-white transition">Randevu</Link>
             <Link to="/iletisim" className="text-surface/80 hover:text-white transition">İletişimiz</Link>
           </div>

           {/* Column 4 */}
           <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
             <h4 className="font-bold text-sm uppercase tracking-widest text-white/50 font-mono mb-4">İrtibat</h4>
             <a href="tel:+905346682445" className="text-accent font-bold hover:text-white transition text-2xl w-max tracking-tight">0534 668 24 45</a>
             <a href="https://wa.me/905346682445" target="_blank" rel="noopener noreferrer" className="text-surface/80 hover:text-white transition w-max">WhatsApp hattı</a>
             <div className="mt-4 text-surface/60 text-sm leading-relaxed">
               <p>{HOURS.weekLabel} · {HOURS.weekTime}</p>
               <p>{HOURS.sundayLabel}: {HOURS.sundayText}</p>
             </div>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="border-t border-surface/10 mt-24 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-surface/40 uppercase tracking-widest">
           <p>© 2026 Bay Car Service</p>
           <Link to="/gizlilik" className="hover:text-surface/80 transition">Gizlilik / KVKK</Link>
           <p>
             <a href="#" className="hover:text-surface/80 transition">Tasarım: Saygın Kartal</a>
           </p>
        </div>
      </div>
    </footer>
  )
}

