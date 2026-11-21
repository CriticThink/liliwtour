import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, X, ArrowRight } from 'lucide-react'
import Photo from './Photo'

export default function Lightbox({ items, index, onClose, onChange }) {
  const count = items.length
  const item = items[index]

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onChange((index + 1) % count)
      if (e.key === 'ArrowLeft') onChange((index - 1 + count) % count)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden' // stop page scrolling behind the popup
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, count, onClose, onChange])

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button className="absolute top-4 right-4 text-white" aria-label="Close" onClick={onClose}>
        <X size={32} />
      </button>

      <button
        className="absolute left-3 text-white"
        aria-label="Previous"
        onClick={(e) => {
          e.stopPropagation()
          onChange((index - 1 + count) % count)
        }}
      >
        <ChevronLeft size={40} />
      </button>

      <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <Photo
          src={item.image}
          alt={item.name}
          color={item.color}
          className="aspect-[4/3] w-full rounded-2xl"
        />
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-white">
            <span className="font-display text-3xl">{item.name.toUpperCase()}</span>
            <span className="text-white/60"> · {item.area}</span>
          </p>
          <Link
            to="/destinations"
            onClick={onClose}
            className="flex items-center gap-2 bg-sunset text-white font-bold text-sm px-5 py-2 rounded-full"
          >
            View Destinations <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <button
        className="absolute right-3 text-white"
        aria-label="Next"
        onClick={(e) => {
          e.stopPropagation()
          onChange((index + 1) % count)
        }}
      >
        <ChevronRight size={40} />
      </button>
    </div>
  )
}