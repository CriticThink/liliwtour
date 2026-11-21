import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import Photo from './Photo'

export default function Carousel({ slides }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = slides.length

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), 5000)
    return () => clearInterval(timer)
  }, [paused, count])

  const go = (i) => setIndex((i + count) % count)

  return (
    <div
      className="relative overflow-hidden rounded-3xl shadow-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s) => (
          <Photo
            key={s.id}
            src={s.image}
            alt={s.name}
            color={s.color}
            className="min-w-full h-[420px] md:h-[540px]"
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-12 text-white max-w-2xl">
              <span className="inline-flex items-center gap-1 text-xs font-bold tracking-widest bg-white/20 backdrop-blur rounded-full px-3 py-1">
                <MapPin size={14} /> {s.location.toUpperCase()}
              </span>
              <h2 className="text-5xl md:text-7xl leading-none mt-3">{s.name.toUpperCase()}</h2>
              <p className="mt-3 text-sm md:text-base text-white/90">{s.description}</p>
            </div>
          </Photo>
        ))}
      </div>

      <button
        onClick={() => go(index - 1)}
        aria-label="Previous"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => go(index + 1)}
        aria-label="Next"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
      >
        <ChevronRight />
      </button>

      <div className="absolute bottom-4 right-6 flex gap-2">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === index ? 'w-6 bg-sunset' : 'w-2 bg-white/70'}`}
          />
        ))}
      </div>
    </div>
  )
}