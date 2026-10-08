import { useEffect, useState } from 'react'

/**
 * Tracks the OS "reduce motion" setting.
 * The typing headline is the only motion on the page, and it checks this hook
 * before it animates.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => {
      setReduced(media.matches)
    }
    media.addEventListener('change', onChange)
    return () => {
      media.removeEventListener('change', onChange)
    }
  }, [])

  return reduced
}
