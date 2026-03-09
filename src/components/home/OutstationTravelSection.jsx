import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2, Phone, Route, ShieldCheck } from "lucide-react"

const HIGHLIGHTS = [
  "Outstation travelling at 10 per kilometer",
  "Professional drivers with route familiarity",
  "Clean sedan cabs and on-time pickup",
]

const POPULAR_TRIPS = [
  "Indore to Bhopal - One way seden cab cost",
  "Indore to Omkareshwar - Same day round trip",
]

function OutstationTravelSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-50)] px-4 py-1 text-xs font-semibold tracking-widest text-[var(--color-brand-700)]">
                <Route size={14} />
                OUTSTATION TRAVELLING
              </span>

              <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl">
                Professional Outstation Rides From Indore
              </h2>

              <p className="mt-4 max-w-2xl text-slate-600">
                Simple and transparent outstation fare with comfortable cabs for same day and one-way travel plans.
              </p>

              <div className="mt-6 space-y-3">
                {HIGHLIGHTS.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white/80 px-4 py-3">
                    <CheckCircle2 size={18} className="mt-0.5 text-[var(--color-brand-600)]" />
                    <p className="text-sm text-slate-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link to="/book-now" className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-brand-600)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-brand-700)]">
                  Book Outstation Cab
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:+919826498273"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-[var(--color-brand-500)] hover:text-[var(--color-brand-700)]"
                >
                  <Phone size={16} />
                  Call Now
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <p className="text-xs font-semibold tracking-wider text-slate-500">RATE CARD</p>
             
              <div className="mt-3 flex items-end gap-1">
                <span className="text-3xl font-bold text-[var(--color-brand-700)]">Rs 10</span>
                <span className="pb-1 text-sm font-semibold text-slate-600">/ kilometer</span>
              </div>

              <div className="mt-6 rounded-xl border border-[var(--color-brand-100)] bg-[var(--color-brand-50)] p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <ShieldCheck size={16} className="text-[var(--color-brand-600)]" />
                  Trusted same day round trip option
                </p>
                <p className="mt-2 text-sm text-slate-700">Indore to Maheshwar same day round trip - Rs 2,799</p>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-slate-800">Popular Outstation Trips</p>
                <ul className="mt-3 space-y-2">
                  {POPULAR_TRIPS.map((trip) => (
                    <li key={trip} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                      {trip}
                    </li>
                  ))}
                </ul>
              </div>

               <div className="mt-4 overflow-hidden rounded-xl border border-slate-200">
                <img
                  src="/Ertiga.jpg"
                  alt="Outstation sedan cab"
                  className="h-36 w-full object-cover"
                />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OutstationTravelSection
