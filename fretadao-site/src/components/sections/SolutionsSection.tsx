import { User, LayoutGrid, Bus, TrendingUp } from 'lucide-react'
import type { ElementType } from 'react'
import { Card } from '@/components/ui/Card'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SOLUTIONS } from '@/constants/strings'

const iconMap: Record<string, ElementType> = {
  User,
  LayoutGrid,
  Bus,
  TrendingUp,
}

export function SolutionsSection() {
  return (
    <section
      id="solucoes"
      data-section="solutions"
      className="bg-white px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <SectionLabel className="mb-4">{SOLUTIONS.label}</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold text-brand-navy md:text-4xl">
            {SOLUTIONS.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-gray-600 md:text-lg">
            {SOLUTIONS.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SOLUTIONS.cards.map((card) => {
            const Icon = iconMap[card.icon]
            return (
              <Card key={card.title} className="border-brand-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-teal/10">
                    {Icon && <Icon className="h-6 w-6 text-brand-teal" />}
                  </div>
                  <h3 className="text-xl font-semibold text-brand-navy">{card.title}</h3>
                  <p className="text-base leading-relaxed text-brand-gray-600">
                    {card.description}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
