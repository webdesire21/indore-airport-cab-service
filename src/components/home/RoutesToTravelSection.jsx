import { Link } from "react-router-dom"
import { IndianRupee, Phone, ArrowRight } from "lucide-react"

const ROUTES = [
  {
    title: "Indore to bhopal",
    description: "One way seden cab cost with clean car and timely pickup.",
    price: "Starting at Rs 2,499",
    image: "/indore-bhopal.jpg",
  },
  {
    title: "Indore to Omkareshwar",
    description: "Same day round trip with comfortable seating and smooth return.",
    price: "Starting at Rs 2,499",
    image: "/indore-omkareswar.jpg",
  },
  {
    title: "Indore to Ujjain",
    description: "Same day round trip with reliable driver and easy booking.",
    price: "Starting at Rs 2,499",
    image: "/indore-ujjain.avif",
  },
  {
    title: "Indore to Maheshwar",
    description: "Same day round trip with safe travel and planned route.",
    price: "Starting at Rs 2,799",
    image: "/indore-maheshwar.jpg",
  },
  {
    title: "Indore to Mandu",
    description: "Sedan cab cost for same day round trip with return on time.",
    price: "Starting at Rs 2,799",
    image: "/indore-mandav.jpg",
  },
  {
    title: "Local Indore Package",
    description: "Local Indore package for city visits with flexible stops.",
    price: "Starting at Rs 2,499",
    image: "/indore-tour.jpg",
  },
]

function RoutesToTravelSection() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="container-custom">

        {/* Heading */}
        <div className="mb-16 text-center max-w-3xl mx-auto">

          <span className="inline-block rounded-full bg-[var(--color-brand-50)] px-4 py-1 text-xs font-semibold tracking-widest text-[var(--color-brand-600)]">
            ROUTES TO TRAVEL
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
            Popular Travel Routes From
            <span className="text-[var(--color-brand-600)]"> Indore</span>
          </h2>

          <p className="mt-4 text-slate-600">
            Explore the most booked routes from Indore with reliable drivers,
            transparent pricing and comfortable vehicles.
          </p>

        </div>

        {/* Routes Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {ROUTES.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Image */}
              <div className="relative h-52 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* Badge */}
                <span className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm">
                 {/* <Route size={13} /> */}
                  Popular Route
                </span>

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Price */}
                <div className="mt-4 inline-flex items-center gap-1 rounded-lg bg-[var(--color-brand-50)] px-3 py-2 text-sm font-semibold text-[var(--color-brand-700)]">
                  <IndianRupee size={14} />
                  {item.price}
                </div>

                {/* CTA */}
                <div className="mt-6 flex items-center gap-3">

                  <Link
                    to="/book-now"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-brand-600)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-brand-700)]"
                  >
                    Book Now
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                  <a
                    href="tel:+919826498273"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-[var(--color-brand-500)] hover:text-[var(--color-brand-600)]"
                    aria-label="Call now"
                  >
                    <Phone size={18} />
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default RoutesToTravelSection
