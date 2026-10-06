import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { headerLinks } from '@/constants/navigation'
import { bookingUrl } from '@/constants/env'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-brand-navy/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-xl font-bold tracking-widest text-white"
          aria-label="Fretadão — início"
        >
          FRETADÃO
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {headerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="primary" href={bookingUrl}>
            Agendar reunião →
          </Button>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-lg p-2 text-white/70 transition-colors hover:text-white md:hidden"
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-brand-navy px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4" aria-label="Navegação mobile">
            {headerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-white/80 transition-colors hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6">
            <Button variant="primary" href={bookingUrl} className="w-full justify-center">
              Agendar reunião →
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
