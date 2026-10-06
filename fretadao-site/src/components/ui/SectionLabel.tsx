import type { ReactNode } from 'react'

interface SectionLabelProps {
  children: ReactNode
  className?: string
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold uppercase tracking-widest text-brand-teal ${className}`}
    >
      {children}
    </span>
  )
}
