const PRICING = [
  { label: "Airport Transfer", value: "From Rs. 699" },
  { label: "City Ride", value: "From Rs. 249" },
  { label: "Outstation One-Way", value: "From Rs. 10/km" },
]

const ROUTES = ["Indore Airport - Vijay Nagar", "Indore - Ujjain", "Indore - Omkareshwar", "Indore - Bhopal"]

function CoverageAndPricingSection() {
  return (
    <section className="section-space bg-white">
      <div className="container-custom grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200  p-7 shadow-soft sm:p-8">
          <h3 className="text-2xl font-bold text-ink-900">Pricing Preview</h3>
          <p className="mt-2 text-sm text-ink-700">
            Simple and transparent starting fares with no hidden surprises.
          </p>
          <div className="mt-6 space-y-3">
            {PRICING.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3"
              >
                <span className="text-sm font-medium text-ink-700">{item.label}</span>
                <span className="text-sm font-semibold text-brand-700">{item.value}</span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-ink-500">Final fare depends on distance, waiting time, tolls, and route.</p>
        </div>

        <div className="rounded-3xl border border-slate-200  p-7 shadow-soft sm:p-8">
          <h3 className="text-2xl font-bold text-ink-900">Popular Coverage Routes</h3>
          <p className="mt-2 text-sm text-ink-700">Frequently booked trip corridors from Indore and nearby regions.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {ROUTES.map((route) => (
              <span
                key={route}
                className="inline-flex rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-medium text-ink-700"
              >
                {route}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoverageAndPricingSection
