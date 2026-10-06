import { Card } from '@/components/ui/Card'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { HOW_IT_WORKS } from '@/constants/strings'

export function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      data-section="how-it-works"
      className="bg-brand-gray-100 px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <SectionLabel>{HOW_IT_WORKS.label}</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold text-brand-navy md:text-4xl">
            {HOW_IT_WORKS.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {HOW_IT_WORKS.steps.map((step) => (
            <Card key={step.number} className="border-brand-gray-200 bg-white">
              <div className="flex flex-col gap-4">
                <span className="text-4xl font-bold text-brand-teal">{step.number}</span>
                <h3 className="text-xl font-semibold text-brand-navy">{step.title}</h3>
                <p className="text-base leading-relaxed text-brand-gray-600">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
