import { useEffect, useId, useRef, useState } from 'react'
import { navItems, sectionIds, site } from '../data/portfolio.ts'
import { useActiveSection } from '../hooks/useActiveSection.ts'
import styles from './Navbar.module.css'

/**
 * Minimal sticky bar. The short accent line marks the section under the viewport marker.
 * On narrow screens the links collapse behind a Menu button.
 */
export function Navbar() {
  const activeId = useActiveSection(sectionIds)
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuId = useId()

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape' || !open) return
      setOpen(false)
      buttonRef.current?.focus()
    }

    const desktop = window.matchMedia('(min-width: 861px)')
    const onViewportChange = () => {
      if (desktop.matches) setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    desktop.addEventListener('change', onViewportChange)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onViewportChange)
    }
  }, [open])

  return (
    <header className={styles.header}>
      <nav className={`wrap ${styles.nav}`} aria-label="Primary">
        <a className={styles.brand} href="#top">
          {site.name}
        </a>
        <button
          ref={buttonRef}
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => {
            setOpen((value) => !value)
          }}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <ul id={menuId} className={styles.menu} data-open={open ? 'true' : 'false'}>
          {navItems.map((section) => (
            <li key={section.id}>
              <a
                className={styles.link}
                href={`#${section.id}`}
                aria-current={activeId === section.id ? 'true' : undefined}
                onClick={() => {
                  setOpen(false)
                }}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
