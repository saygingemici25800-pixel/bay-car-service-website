import { useEffect, useState } from 'react'

/**
 * Viewport md (768px) ve üzeri mi? Ağır 3D sahne yalnızca `true` iken mount
 * edilir; mobilde model HİÇ indirilmez (performans). Tailwind `md` ile hizalı.
 */
export function useIsDesktop(query = '(min-width: 768px)') {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches,
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setIsDesktop(mql.matches)
    setIsDesktop(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return isDesktop
}
