import type { SVGProps } from 'react'

/**
 * VARYASYON 1 — "BC" birleşik monogram.
 * Geometrik, kalın; B ve C yan yana. Tek renk (currentColor).
 */
export default function LogoBC(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g stroke="currentColor" strokeWidth={8} strokeLinejoin="round">
        <g strokeLinecap="square">
          <path d="M8 26 V74" />
          <path d="M8 26 H20 A12 12 0 0 1 20 50 H8" />
          <path d="M8 50 H20 A12 12 0 0 1 20 74 H8" />
        </g>
        <path d="M87.66 63.76 A24 24 0 1 1 87.66 36.24" strokeLinecap="round" />
      </g>
    </svg>
  )
}
