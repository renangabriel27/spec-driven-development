import { Button } from '@/components/ui/Button'
import { CTA_FINAL } from '@/constants/strings'
import { bookingUrl } from '@/constants/env'

export function CtaSection() {
  return (
    <section
      id="contato"
      data-section="cta"
      className="bg-brand-gray-100 px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl bg-brand-navy px-8 py-16 text-center shadow-2xl md:px-16">
          <h2 className="text-3xl font-bold text-white md:text-4xl">{CTA_FINAL.title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            {CTA_FINAL.subtitle}
          </p>
          <div className="mt-10">
            <Button variant="primary" href={bookingUrl} className="px-10 py-4 text-lg">
              {CTA_FINAL.cta} →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
