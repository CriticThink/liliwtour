import { Link } from 'react-router-dom'
import { Clock, Check } from 'lucide-react'
import Photo from './Photo'

export default function PackageCard({ pkg }) {
  return (
    <div className="bg-white rounded-2xl border border-black/5 shadow-sm overflow-hidden flex flex-col">
      <Photo src={pkg.image} alt={pkg.name} color={pkg.color} className="h-40">
        {pkg.tag && (
          <span className="absolute top-4 left-4 bg-white/90 text-sunset text-xs font-bold px-3 py-1 rounded-full">
            {pkg.tag.toUpperCase()}
          </span>
        )}
      </Photo>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-3xl text-forest leading-none">{pkg.name.toUpperCase()}</h3>
        <p className="flex items-center gap-1 text-sm text-stone-500 mt-2">
          <Clock size={14} /> {pkg.duration}
        </p>
        <p className="mt-3 text-stone-600 text-sm">{pkg.description}</p>
        <ul className="mt-4 space-y-1 text-sm text-stone-600">
          {pkg.inclusions.map((i) => (
            <li key={i} className="flex gap-2">
              <Check size={16} className="text-forest shrink-0 mt-0.5" /> {i}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6 flex items-center justify-between">
          <p>
            <span className="font-display text-3xl">₱{pkg.price.toLocaleString()}</span>
            <span className="text-xs text-stone-500"> / person</span>
          </p>
          <Link
            to={`/booking?package=${pkg.id}`}
            className="bg-forest text-white text-sm font-bold px-5 py-2 rounded-full hover:opacity-90"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}