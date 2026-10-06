import { Factory, Truck, ShoppingBag, Briefcase } from 'lucide-react'
import type { ElementType } from 'react'
import { SOCIAL_PROOF } from '@/constants/strings'

const iconMap: Record<string, ElementType> = {
  Factory,
  Truck,
  ShoppingBag,
  Briefcase,
}

export function SocialProofSection() {
  return (
    <section data-section="social-proof" className="bg-brand-gray-100 px-6 py-16 md:px-12">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-brand-gray-600 md:text-base">
          {SOCIAL_PROOF.title}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {SOCIAL_PROOF.segments.map((segment) => {
            const Icon = iconMap[segment.icon]
            return (
              <div
                key={segment.label}
                className="flex flex-col items-center gap-2 text-brand-gray-600"
              >
                {Icon && <Icon className="h-8 w-8" />}
                <span className="text-sm font-medium">{segment.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
