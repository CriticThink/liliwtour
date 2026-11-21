import { MapPin, Ticket } from 'lucide-react'
import { destinations } from '../data/destinations'
import Carousel from '../components/Carousel'
import Photo from '../components/Photo'

export default function Destinations() {
  return (
    <main>
      <section className="max-w-6xl mx-auto px-4 pt-12">
        <p className="text-sunset text-xs font-bold tracking-widest">WHERE TO NEXT?</p>
        <h1 className="text-6xl text-forest">DESTINATIONS</h1>
        <p className="text-stone-600 mt-2 max-w-2xl">
          Explore the beauty of Liliw and nearby Laguna destinations.
        </p>
        <div className="mt-8">
          <Carousel slides={destinations} />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl text-forest">ALL DESTINATIONS</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <article key={d.id} className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden flex flex-col">
              <Photo src={d.image} alt={d.name} color={d.color} className="h-48" />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-3xl text-forest leading-none">{d.name.toUpperCase()}</h3>
                <p className="flex items-center gap-1 text-sm text-stone-500 mt-2">
                  <MapPin size={14} /> {d.location}
                </p>
                <p className="text-sm text-stone-600 mt-3">{d.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {d.activities.map((a) => (
                    <span key={a} className="text-xs bg-forest/10 text-forest font-semibold px-3 py-1 rounded-full">
                      {a}
                    </span>
                  ))}
                </div>
                <p className="flex gap-2 text-xs text-stone-500 mt-auto pt-4">
                  <Ticket size={14} className="shrink-0 mt-0.5" /> {d.fee}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}