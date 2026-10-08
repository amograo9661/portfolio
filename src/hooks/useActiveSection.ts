import { useEffect, useState } from 'react'
import type { SectionId } from '../data/portfolio.ts'

/**
 * Highlights the nav link for the section currently under the sticky bar.
 * A scroll listener is used instead of IntersectionObserver so the highlight
 * follows the section whose top has passed the navbar, which feels steadier
 * on a long single page.
 */
export function useActiveSection(ids: readonly SectionId[]): SectionId | '' {
  const [activeId, setActiveId] = useState<SectionId | ''>('')

  useEffect(() => {
    const update = () => {
      const marker = window.scrollY + 96
      let current: SectionId | '' = ''
      for (const id of ids) {
        const element = document.getElementById(id)
        if (!element) continue
        const top = element.getBoundingClientRect().top + window.scrollY
        if (top <= marker) current = id
      }
      setActiveId(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ids])

  return activeId
}
