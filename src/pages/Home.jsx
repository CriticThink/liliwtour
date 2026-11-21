import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Wallet, CalendarCheck, Landmark, Smile, ArrowRight } from 'lucide-react'
import { packages } from '../data/packages'
import { destinations } from '../data/destinations'
import PackageCard from '../components/PackageCard'
import Photo from '../components/Photo'
import Lightbox from '../components/Lightbox'

const reasons = [
  { icon: Wallet, title: 'Affordable Packages', text: 'Reasonable prices without compromising the enjoyment and quality of your trip.' },
  { icon: CalendarCheck, title: 'Convenient Travel', text: 'Organized itineraries so you can enjoy your trip with less planning and hassle.' },
  { icon: Landmark, title: 'Local Experience', text: 'Discover Liliw through its famous attractions, traditional products, and local food.' },
  { icon: Smile, title: 'Friendly Assistance', text: 'Helpful, clear communication throughout the booking process and your trip.' },
]

export default function Home() {
  const featured = destinations.filter((d) => d.featured)
  const [open, setOpen] = useState(null)

  return (
    <main>
      {/* Hero */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center bg-forest text-white text-center px-4 py-16">
        <span className="border border-white/40 rounded-full px-4 py-1 text-xs font-bold tracking-widest">
          TSINELAS CAPITAL OF THE PHILIPPINES
        </span>
        <h1 className="text-7xl md:text-9xl leading-none mt-6">
          LIWALIW SA <span className="text-sunset">LILIW</span>
        </h1>
        <p className="mt-4 text-lg max-w-2xl">
          Welcome to the Tsinelas Capital of the Philippines! Experience the beauty, culture, history, and exciting
          attractions of Liliw, Laguna. Tara na at magliwaliw sa Liliw!
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link to="/booking" className="bg-sunset px-7 py-3 rounded-full font-bold flex items-center gap-2">
            Book Your Tour <ArrowRight size={18} />
          </Link>
          <Link to="/destinations" className="border border-white/50 px-7 py-3 rounded-full font-bold">Explore Destinations</Link>
          <Link to="/packages" className="border border-white/50 px-7 py-3 rounded-full font-bold">View Tour Packages</Link>
          <Link to="/about#contact" className="border border-white/50 px-7 py-3 rounded-full font-bold">Contact Us</Link>
        </div>
      </section>

      {/* Why us */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-5xl text-forest text-center">WHY CHOOSE US?</h2>
        <p className="text-center text-stone-600 mt-3">
          We don't just plan trips; we create memorable experiences in Liliw and nearby Laguna.
        </p>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-forest/10 text-forest flex items-center justify-center">
                <Icon size={28} />
              </div>
              <h3 className="text-2xl mt-4">{title.toUpperCase()}</h3>
              <p className="text-sm text-stone-600 mt-2">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Destinations */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sunset text-xs font-bold tracking-widest">WHERE TO NEXT?</p>
              <h2 className="text-5xl text-forest">POPULAR DESTINATIONS</h2>
            </div>
            <Link to="/destinations" className="flex items-center gap-1 font-bold text-forest text-sm shrink-0">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map((d, i) => (
              <button
                key={d.id}
                onClick={() => setOpen(i)}
                className="group relative block h-64 w-full overflow-hidden rounded-2xl text-left text-white"
              >
                <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110">
                  <Photo src={d.image} alt={d.name} color={d.color} className="h-full w-full" />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 group-hover:from-black/85" />
                <div className="absolute bottom-0 left-0 right-0 p-5 origin-bottom-left transition-transform duration-500 ease-out group-hover:scale-105">
                  <span className="text-xs font-bold opacity-80">{d.area}</span>
                  <h3 className="text-3xl leading-none">{d.name.toUpperCase()}</h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-5xl text-forest text-center">TOUR PACKAGES</h2>
        <p className="text-center text-stone-600 mt-3">Choose the journey that speaks to you.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {packages.map((p) => (
            <PackageCard key={p.id} pkg={p} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest text-white text-center py-20 px-4">
        <h2 className="text-5xl md:text-6xl">READY TO START YOUR ADVENTURE?</h2>
        <p className="mt-4 max-w-xl mx-auto">
          Tara na at magliwaliw sa Liliw! Reserve your preferred tour and our team will contact you to confirm.
        </p>
        <Link to="/booking" className="inline-block mt-8 bg-sunset px-8 py-3 rounded-full font-bold">
          Book Your Tour Now
        </Link>
      </section>

      {/* Enlarged popup */}
      {open !== null && (
        <Lightbox
          items={featured}
          index={open}
          onClose={() => setOpen(null)}
          onChange={setOpen}
        />
      )}
    </main>
  )
}