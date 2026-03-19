/**
 * @component
 * description: Standard surfaced container with shared padding and border treatment.
 * use_when: Wrapping content that should read as a distinct card or panel.
 */

import React from 'react'

interface PanelProps {
  children: React.ReactNode
  style?: React.CSSProperties
}

export const Panel: React.FC<PanelProps> = ({ children, style }) => (
  <div style={{
    background: 'var(--c-surface)',
    border: '1px solid var(--c-dim)',
    borderRadius: 'var(--radius-md)',
    padding: '12px 14px',
    fontSize: 'var(--fs-base)',
    fontFamily: 'var(--font-sans)',
    color: 'var(--c-text)',
    overflowY: 'auto',
    ...style,
  }}>
    {children}
  </div>
)
