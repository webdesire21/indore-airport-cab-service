import { Link } from "react-router-dom"
import { ArrowRight, ShieldCheck } from "lucide-react"
import OurServicesSection from "../components/home/OurServicesSection"
import FleetPreviewSection from "../components/home/FleetPreviewSection"
import WhyChooseUsSection from "../components/home/WhyChooseUsSection"
import RoutesToTravelSection from "../components/home/RoutesToTravelSection"
import Testimonials from "../components/home/Testimonials"
import CallToAction from "../components/home/CallToAction"
import WhyHireTaxi from "../components/home/WhyHireTaxi"
import LatestBlogsSection from "../components/home/LatestBlogsSection"

const STATS = [
  { label: "Happy Riders", value: "12,000+" },
  { label: "Average Pickup Time", value: "15 mins" },
  { label: "Service Availability", value: "24/7" },
]

function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgba(2,8,23,0.86),rgba(15,23,42,0.66)_45%,rgba(238,146,6,0.46)_120%)]" />

        <div className="container-custom flex min-h-[88vh] items-center py-14 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-4 py-2 text-sm font-semibold text-white/95 backdrop-blur">
              <ShieldCheck size={16} />
              Trusted Airport Taxi in Indore
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Indore Airport Cab Service
            </h1>

            <p className="mt-5 max-w-2xl text-base text-slate-100/95 sm:text-lg">
              Premium rides for airport transfers, city trips, and outstation journeys with transparent pricing and
              professional drivers.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/book-now" className="btn-primary">
                Book Now
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+919826498273"
                className="inline-flex items-center rounded-xl border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Call +91 9826498273
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {STATS.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/30 bg-white/10 p-4 backdrop-blur">
                  <p className="text-2xl font-bold text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-100/90">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <BookingFormSection /> */}
      <OurServicesSection />
      <FleetPreviewSection />
      <RoutesToTravelSection />
      <CallToAction />
      <WhyChooseUsSection />
      <Testimonials />
      <LatestBlogsSection />
      <WhyHireTaxi />
    </main>
  )
}

export default Home
