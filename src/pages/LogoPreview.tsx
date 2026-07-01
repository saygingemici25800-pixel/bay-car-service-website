import type { ComponentType, SVGProps } from 'react'
import LogoBC from '../components/logos/LogoBC'
import LogoCircle from '../components/logos/LogoCircle'
import LogoB from '../components/logos/LogoB'
import LogoMark from '../components/logos/LogoMark'

type LogoComp = ComponentType<SVGProps<SVGSVGElement>>

const variations: { id: number; name: string; note: string; Comp: LogoComp }[] = [
  { id: 1, name: 'Varyasyon 1 — "BC" birleşik', note: 'İki harf yan yana, geometrik', Comp: LogoBC },
  { id: 2, name: 'Varyasyon 2 — "BC" dairesel', note: 'Çember içinde BC, amblem hissi (favicon default)', Comp: LogoCircle },
  { id: 3, name: 'Varyasyon 3 — "B" badge', note: 'Tek harf, kare badge, güçlü', Comp: LogoB },
  { id: 4, name: 'Varyasyon 4 — Gösterge', note: 'Soyut otomotiv gösterge motifi', Comp: LogoMark },
]

const sizes = [128, 48, 24]

function SizeRow({ Comp, colorClass }: { Comp: LogoComp; colorClass: string }) {
  return (
    <div className={`flex items-end gap-6 ${colorClass}`}>
      {sizes.map((s) => (
        <div key={s} className="flex flex-col items-center gap-2">
          <Comp style={{ width: s, height: s }} />
          <span className="text-[10px] font-mono text-mute">{s}px</span>
        </div>
      ))}
    </div>
  )
}

export default function LogoPreview() {
  return (
    <div className="min-h-screen bg-surface text-ink pt-28 pb-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-mute mb-3">— Geçici seçim sayfası</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-[0.95] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Logo varyasyonları
          </h1>
          <p className="text-mute mt-4 max-w-xl">
            Saygın, aşağıdaki 4 monogramı boyut ve renk bağlamında incele. Beğendiğini söyle;
            seçilen varyasyonla header ve favicon'ı sabitleyip bu sayfayı sileriz.
          </p>
        </header>

        {/* Her varyasyon: 3 boyut × 3 renk */}
        <div className="flex flex-col gap-16">
          {variations.map(({ id, name, note, Comp }) => (
            <section key={id} className="border-t border-ink/10 pt-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>{name}</h2>
                <p className="text-sm text-mute mt-1">{note}</p>
              </div>

              <div className="grid gap-10 md:grid-cols-3">
                {/* Ink */}
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-mute mb-4">Ink · #1A1D21</p>
                  <SizeRow Comp={Comp} colorClass="text-ink" />
                </div>
                {/* Accent */}
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-mute mb-4">Accent · #003A87</p>
                  <SizeRow Comp={Comp} colorClass="text-accent" />
                </div>
                {/* Surface on dark */}
                <div className="bg-ink rounded-xl p-6 -m-2">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-surface/50 mb-4">Surface · koyu zemin</p>
                  <SizeRow Comp={Comp} colorClass="text-surface" />
                </div>
              </div>

              {/* Header lockup (wordmark + monogram) */}
              <div className="mt-10">
                <p className="text-[10px] font-mono uppercase tracking-widest text-mute mb-3">Header görünümü</p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 bg-surface border border-ink/10 rounded-lg px-5 py-4">
                    <Comp style={{ width: 34, height: 34 }} className="text-ink shrink-0" />
                    <span className="text-2xl font-bold tracking-[0.2em] text-ink" style={{ fontFamily: 'var(--font-display)' }}>BAY·CAR</span>
                  </div>
                  <div className="flex items-center gap-3 bg-ink rounded-lg px-5 py-4">
                    <Comp style={{ width: 34, height: 34 }} className="text-surface shrink-0" />
                    <span className="text-2xl font-bold tracking-[0.2em] text-surface" style={{ fontFamily: 'var(--font-display)' }}>BAY·CAR</span>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Favicon preview */}
        <section className="border-t border-ink/10 pt-10 mt-16">
          <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Favicon önizleme</h2>
          <p className="text-sm text-mute mb-8">public/favicon.svg — dolu ink zemin + surface "BC" (Varyasyon 2 tabanlı).</p>
          <div className="flex items-end gap-10">
            {[16, 32, 48, 64].map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <img src="/favicon.svg" width={s} height={s} alt={`favicon ${s}px`} style={{ imageRendering: 'auto' }} />
                <span className="text-[10px] font-mono text-mute">{s}px</span>
              </div>
            ))}
          </div>

          {/* Sahte tarayıcı sekmesi */}
          <div className="mt-10 max-w-xs">
            <p className="text-[10px] font-mono uppercase tracking-widest text-mute mb-3">Tarayıcı sekmesi</p>
            <div className="flex items-center gap-2 bg-ink/5 border border-ink/10 rounded-t-lg px-3 py-2">
              <img src="/favicon.svg" width={16} height={16} alt="favicon" />
              <span className="text-xs text-ink truncate">Bay Car Service</span>
              <span className="ml-auto text-mute text-xs">×</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
