import { Quote } from 'lucide-react'
import { MANIFESTO } from '@/constants/strings'

export function ManifestoSection() {
  return (
    <section data-section="manifesto" className="bg-white px-6 py-20 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl text-center">
        <Quote className="mx-auto mb-8 h-12 w-12 text-brand-teal" />
        <blockquote className="text-2xl font-medium leading-relaxed text-brand-navy md:text-3xl">
          {MANIFESTO.quote}{' '}
          <span className="text-brand-teal">{MANIFESTO.highlight}</span>
        </blockquote>
      </div>
    </section>
  )
}
