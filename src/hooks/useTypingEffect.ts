import { useEffect, useState } from 'react'

interface TypingOptions {
  typeMs?: number
  deleteMs?: number
  holdMs?: number
}

/**
 * Small stand-in for Typed.js.
 * Types a line, holds, deletes, then moves to the next line.
 * Callers that detect reduced motion should skip this and render static text.
 */
export function useTypingEffect(
  lines: readonly string[],
  paused: boolean,
  options: TypingOptions = {},
): string {
  const typeMs = options.typeMs ?? 78
  const deleteMs = options.deleteMs ?? 40
  const holdMs = options.holdMs ?? 1500

  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const full = lines[lineIndex] ?? ''

  useEffect(() => {
    if (paused || lines.length === 0) return

    let delay = deleting ? deleteMs : typeMs
    if (!deleting && charIndex === full.length) delay = holdMs
    if (deleting && charIndex === 0) delay = 280

    const timer = window.setTimeout(() => {
      if (!deleting && charIndex < full.length) {
        setCharIndex((count) => count + 1)
        return
      }
      if (!deleting && charIndex === full.length) {
        setDeleting(true)
        return
      }
      if (deleting && charIndex > 0) {
        setCharIndex((count) => count - 1)
        return
      }
      setDeleting(false)
      setLineIndex((index) => (index + 1) % lines.length)
    }, delay)

    return () => {
      window.clearTimeout(timer)
    }
  }, [
    charIndex,
    deleteMs,
    deleting,
    full.length,
    holdMs,
    lines.length,
    paused,
    typeMs,
  ])

  if (paused) return lines[0] ?? ''
  return full.slice(0, charIndex)
}

/** "A, B, and C" — used when motion is reduced so every role is still readable. */
export function joinLines(lines: readonly string[]): string {
  if (lines.length === 0) return ''
  if (lines.length === 1) return lines[0] ?? ''
  if (lines.length === 2) return `${lines[0]} and ${lines[1]}`
  const head = lines.slice(0, -1).join(', ')
  return `${head}, and ${lines[lines.length - 1]}`
}
