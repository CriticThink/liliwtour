import { Link } from 'react-router-dom'
import { Check, X, Users, CalendarDays, Clock } from 'lucide-react'
import { packages } from '../data/packages'
import Photo from '../components/Photo'

export default function Packages() {
  return (
    <main>
      <section className="bg-forest text-white text-center py-20 px-4">
        <h1 className="text-6xl md:text-7xl">CURATED ADVENTURES</h1>
        <p className="mt-4 max-w-xl mx-auto">
          Whether you seek culture, history, or nature, we have a package designed for you.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-8">
        {packages.map((p, i) => (
          <article
            key={p.id}
            id={p.id}
            className="scroll-mt-24 grid gap-10 lg:grid-cols-2 items-center py-14 border-b border-black/10 last:border-0"
          >
            <div className={i % 2 ? 'lg:order-2' : ''}>
              {p.tag && <p className="text-sunset text-xs font-bold tracking-widest">{p.tag.toUpperCase()}</p>}
              <h2 className="text-5xl text-forest leading-none mt-1">{p.name.toUpperCase()}</h2>
              <p className="text-stone-600 mt-4">{p.description}</p>

              <ul className="mt-4 space-y-1 text-sm text-stone-600">
                <li className="flex items-center gap-2"><Clock size={16} className="text-forest" /> {p.duration}</li>
                <li className="flex items-center gap-2"><Users size={16} className="text-forest" /> {p.groupSize}</li>
                <li className="flex items-center gap-2"><CalendarDays size={16} className="text-forest" /> {p.dates}</li>
              </ul>

              <h3 className="text-xl mt-5">DESTINATIONS</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {p.destinations.map((d) => (
                  <span key={d} className="text-xs bg-forest/10 text-forest font-semibold px-3 py-1 rounded-full">{d}</span>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-xl">INCLUSIONS</h3>
                  <ul className="mt-2 space-y-1 text-sm text-stone-600">
                    {p.inclusions.map((x) => (
                      <li key={x} className="flex gap-2"><Check size={16} className="text-forest shrink-0 mt-0.5" /> {x}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl">EXCLUSIONS</h3>
                  <ul className="mt-2 space-y-1 text-sm text-stone-600">
                    {p.exclusions.map((x) => (
                      <li key={x} className="flex gap-2"><X size={16} className="text-sunset shrink-0 mt-0.5" /> {x}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-5">
                <p>
                  <span className="font-display text-4xl">₱{p.price.toLocaleString()}</span>
                  <span className="text-xs text-stone-500"> / PERSON</span>
                </p>
                <Link to={`/booking?package=${p.id}`} className="bg-forest text-white font-bold px-7 py-3 rounded-full hover:opacity-90">
                  Book Now
                </Link>
              </div>
            </div>

            <Photo
              src={p.image}
              alt={p.name}
              color={p.color}
              className={`h-80 lg:h-[460px] rounded-3xl shadow-xl ${i % 2 ? 'lg:order-1' : ''}`}
            />

            {p.itinerary && (
              <div className="lg:col-span-2 order-last bg-white rounded-2xl border border-black/5 p-6">
                <h3 className="text-3xl text-forest">SAMPLE {p.duration.split(',')[0].toUpperCase()} ITINERARY</h3>
                <table className="w-full mt-4 text-sm">
                  <thead>
                    <tr className="text-left border-b">
                      <th className="py-2 pr-4 w-24">Day</th>
                      <th className="py-2">Activities</th>
                    </tr>
                  </thead>
                  <tbody>
                    {p.itinerary.map((row) => (
                      <tr key={row.day} className="border-b last:border-0 align-top">
                        <td className="py-3 pr-4 font-bold text-forest">{row.day}</td>
                        <td className="py-3 text-stone-600">{row.activities}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="text-xs text-stone-500 mt-3">
                  Final route and itinerary are subject to travel distances, opening hours, transportation availability,
                  destination access, and weather conditions.
                </p>
              </div>
            )}
          </article>
        ))}
        <p className="text-center text-xs text-stone-500 pb-8">
          Prices are per person and subject to final confirmation by our team.
        </p>
      </section>
    </main>
  )
}