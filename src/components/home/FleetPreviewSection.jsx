

import { Link } from "react-router-dom"
import { ArrowRight, Fuel, ShieldCheck, Users } from "lucide-react"

const FLEET = [
  { name: "Swift Dzire", seats: "4+1 Seats", fuel: "Petrol / CNG", tag: "Economy Sedan", image: "/swift-dzire.jpeg" },
  { name: "Ertiga", seats: "6+1 Seats", fuel: "Petrol / CNG", tag: "Family MPV", image: "/ertiga01.jpeg" },
  { name: "Fortuner", seats: "6+1 Seats", fuel: "Petrol", tag: "Premium MPV", image: "/fortuner.jpeg" },
  { name: "Innova Crysta", seats: "6+1 Seats", fuel: "Diesel", tag: "Executive Class", image: "/innova-crysta.jpeg" },
]

function FleetPreviewSection() {
  return (
    <section
      className="relative py-24 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/our-fleet-bg.jpg')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/80"></div>

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 bg-[var(--color-brand-500)] opacity-10 blur-[140px]"></div>

      <div className="container-custom relative">

        {/* Heading */}
        <div className="mb-16 flex flex-wrap items-end justify-between gap-6">

          <div>

            <span className="inline-block rounded-full bg-white/10 backdrop-blur px-4 py-1 text-xs font-semibold tracking-widest text-white">
              OUR FLEET
            </span>

            <h2 className="mt-5 max-w-2xl text-3xl font-bold text-white md:text-4xl">
              Comfortable Cars for
              <span className="text-[var(--color-brand-400)]"> Every Journey</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm text-white/70">
              Choose from economy sedans to premium MPVs — clean vehicles,
              professional drivers and reliable service every time.
            </p>

          </div>

          <Link
            to="/fleet"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900"
          >
            Explore Fleet
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* Fleet Grid */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {FLEET.map((car) => (
            <article
              key={car.name}
              className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/95 backdrop-blur transition duration-300 hover:-translate-y-3 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.55)]"
            >

              {/* Image */}
              <div className="relative h-56 overflow-hidden">

                <img
                  src={car.image}
                  alt={car.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

                {/* Tag */}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow">
                  {car.tag}
                </span>

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-lg font-semibold text-slate-900">
                  {car.name}
                </h3>

                <div className="mt-4 space-y-2">

                  <p className="flex items-center gap-2 text-sm text-slate-600">
                    <Users size={15} className="text-[var(--color-brand-600)]" />
                    {car.seats}
                  </p>

                  <p className="flex items-center gap-2 text-sm text-slate-600">
                    <Fuel size={15} className="text-[var(--color-brand-600)]" />
                    {car.fuel}
                  </p>

                  <p className="flex items-center gap-2 text-sm text-slate-600">
                    <ShieldCheck size={15} className="text-[var(--color-brand-600)]" />
                    Sanitized & Verified
                  </p>

                </div>

                <Link
                  to="/book-now"
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-600)] transition hover:text-[var(--color-brand-700)]"
                >
                  Book This Car
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  )
}

export default FleetPreviewSection