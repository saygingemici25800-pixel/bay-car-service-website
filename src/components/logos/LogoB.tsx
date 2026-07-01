import type { SVGProps } from 'react'

/**
 * VARYASYON 3 — Tek harf "B", kare badge zeminde.
 * Güçlü/kalın, otomotiv badge hissi. Tek renk (currentColor).
 */
export default function LogoB(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g stroke="currentColor" strokeLinecap="square" strokeLinejoin="round">
        <rect x="12" y="12" width="76" height="76" rx="18" strokeWidth={6} />
        <g strokeWidth={12}>
          <path d="M38 28 V72" />
          <path d="M38 28 H52 A11 11 0 0 1 52 50 H38" />
          <path d="M38 50 H52 A11 11 0 0 1 52 72 H38" />
        </g>
      </g>
    </svg>
  )
}
