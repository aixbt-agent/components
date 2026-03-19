/**
 * @component
 * description: Minimal bracketed text tag for terse categorical labels.
 * use_when: Marking content with a lightweight label that should stay visually quiet.
 */

import React from 'react'

interface TagProps {
  text: string
  color?: string
}

export function Tag({ text, color = 'var(--c-secondary)' }: TagProps) {
  return <span style={{ color, fontSize: 'var(--fs-xs)' }}>[{text.toUpperCase()}]</span>
}
