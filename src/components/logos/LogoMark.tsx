import type { SVGProps } from 'react'

/**
 * VARYASYON 4 — Soyut/geometrik işaret: gösterge (speedometer) motifi.
 * Otomotiv/mühendislik hissi, minimal. Tek renk (currentColor).
 */
export default function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24.5 77.5 A36 36 0 1 1 75.5 77.5" strokeWidth={10} />
        <path d="M50 52 L67 27" strokeWidth={10} />
      </g>
      <circle cx="50" cy="52" r="6.5" fill="currentColor" />
    </svg>
  )
}
