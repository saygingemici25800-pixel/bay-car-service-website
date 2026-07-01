import type { SVGProps } from 'react'

/**
 * VARYASYON 2 — "BC" dairesel çerçeveli amblem.
 * Çember + içinde BC. Otomotiv amblem hissi. Tek renk (currentColor).
 */
export default function LogoCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="50" cy="50" r="43" stroke="currentColor" strokeWidth={6} />
      <g stroke="currentColor" strokeWidth={8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 34 V66" />
        <path d="M22 34 H30 A8 8 0 0 1 30 50 H22" />
        <path d="M22 50 H30 A8 8 0 0 1 30 66 H22" />
        <path d="M77.11 59.18 A16 16 0 1 1 77.11 40.82" />
      </g>
    </svg>
  )
}
