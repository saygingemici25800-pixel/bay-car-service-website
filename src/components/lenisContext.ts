import { createContext, useContext } from 'react';
import type { MutableRefObject } from 'react';
import type Lenis from '@studio-freight/lenis';

export type LenisRef = MutableRefObject<Lenis | null>;

// Lenis instance ref'ini paylaşan context. Component dışı export'lar burada (fast-refresh için ayrı dosya).
export const LenisContext = createContext<LenisRef | null>(null);

export function useLenisRef() {
  return useContext(LenisContext);
}
