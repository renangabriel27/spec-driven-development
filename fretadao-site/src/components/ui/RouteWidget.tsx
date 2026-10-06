import { MapPin, Navigation } from 'lucide-react'
import { HERO } from '@/constants/strings'

export function RouteWidget() {
  const { routeWidget } = HERO

  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
      <p className="mb-4 text-sm font-semibold text-brand-teal">{routeWidget.title}</p>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-teal/20">
            <MapPin className="h-4 w-4 text-brand-teal" />
          </div>
          <span className="text-sm text-white/80">{routeWidget.origin}</span>
        </div>
        <div className="ml-4 h-6 w-0.5 bg-white/20" />
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-teal">
            <Navigation className="h-4 w-4 text-brand-navy" />
          </div>
          <span className="text-sm text-white">{routeWidget.destination}</span>
        </div>
      </div>
      <div className="mt-4 rounded-lg bg-brand-teal/10 px-3 py-2">
        <p className="text-xs text-brand-teal">{routeWidget.status}</p>
      </div>
    </div>
  )
}
