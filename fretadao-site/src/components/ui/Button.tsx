import type { ReactNode } from 'react'

interface ButtonProps {
  variant: 'primary' | 'ghost'
  href?: string
  children: ReactNode
  className?: string
}

export function Button({ variant, href, children, className = '' }: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer'

  const variants = {
    primary:
      'bg-brand-teal text-brand-navy hover:bg-brand-teal-light',
    ghost:
      'border border-white/30 text-white hover:bg-white/10',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  )
}
