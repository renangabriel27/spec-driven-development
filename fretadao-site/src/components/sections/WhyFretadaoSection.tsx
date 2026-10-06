import { Monitor, Activity, Heart } from 'lucide-react'
import type { ElementType } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { WHY_FRETADAO } from '@/constants/strings'

const iconMap: Record<string, ElementType> = {
  Monitor,
  Activity,
  Heart,
}

export function WhyFretadaoSection() {
  return (
    <section
      id="por-que-fretadao"
      data-section="why-fretadao"
      className="bg-brand-navy-light px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <SectionLabel>{WHY_FRETADAO.label}</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            {WHY_FRETADAO.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {WHY_FRETADAO.pillars.map((pillar) => {
            const Icon = iconMap[pillar.icon]
            return (
              <div key={pillar.title} className="flex flex-col gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-teal/20">
                  {Icon && <Icon className="h-7 w-7 text-brand-teal" />}
                </div>
                <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="text-base leading-relaxed text-white/70">{pillar.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
