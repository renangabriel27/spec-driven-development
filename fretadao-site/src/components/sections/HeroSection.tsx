import { Button } from '@/components/ui/Button'
import { RouteWidget } from '@/components/ui/RouteWidget'
import { HERO } from '@/constants/strings'
import { bookingUrl } from '@/constants/env'

export function HeroSection() {
  return (
    <section
      data-section="hero"
      className="relative min-h-screen bg-brand-navy px-6 pt-32 pb-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <span className="inline-flex w-fit items-center rounded-full border border-brand-teal/30 bg-brand-teal/10 px-4 py-2 text-sm font-medium text-brand-teal">
              {HERO.badge}
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl whitespace-pre-line">
              {HERO.headline}
            </h1>

            <p className="text-lg leading-relaxed text-white/70 md:text-xl">
              {HERO.subheadline}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="primary" href={bookingUrl}>
                {HERO.ctaPrimary} →
              </Button>
              <Button variant="ghost" href="#solucoes">
                {HERO.ctaSecondary}
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-sm">
              <RouteWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
