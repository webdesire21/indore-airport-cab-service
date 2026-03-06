import { ArrowRight } from "lucide-react"

const BLOG_CARDS = [
  {
    title: "How to Book an Airport Cab in Under 2 Minutes",
    excerpt:
      "A simple step-by-step flow to confirm rides quickly, avoid booking errors, and keep your travel schedule on track.",
    href: "/blog/book-airport-cab-fast",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "7 Things to Check Before Late-Night Airport Pickup",
    excerpt:
      "From driver verification to live tracking, use this checklist to ensure safer and smoother midnight transfers.",
    href: "/blog/late-night-airport-pickup-checklist",
    image:
      "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Sedan or SUV: Picking the Right Cab for Family Trips",
    excerpt:
      "Compare luggage space, comfort, and pricing so your family airport journey stays practical and hassle-free.",
    href: "/blog/sedan-vs-suv-family-airport-trip",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
  },
]

function LatestBlogsSection() {
  return (
    <section className="section-space bg-gradient-to-b from-white via-slate-50/70 to-white">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 inline-flex rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold tracking-wide text-brand-700 uppercase">
            Latest Blogs
          </p>
          <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl">Travel Insights for Smarter Airport Rides</h2>
          <p className="mt-3 text-base text-ink-700">
            Fresh tips and practical guides to help you book better, travel safer, and save time on every ride.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_CARDS.map((blog) => (
            <article
              key={blog.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold leading-snug text-ink-900">{blog.title}</h3>
                <p className="mt-3 text-sm text-ink-700">{blog.excerpt}</p>
                <a
                  href={blog.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition hover:text-brand-700"
                >
                  Read More
                  <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestBlogsSection
