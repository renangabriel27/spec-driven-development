import { footerColumns } from '@/constants/navigation'
import { FOOTER } from '@/constants/strings'

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-navy">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="text-xl font-bold tracking-widest text-white">FRETADÃO</p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">{FOOTER.tagline}</p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                {column.heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/40">{FOOTER.copyright}</p>
          <p className="text-sm text-white/40">{FOOTER.sideTagline}</p>
        </div>
      </div>
    </footer>
  )
}
