import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { categories, gallery } from '../data/gallery'
import Photo from '../components/Photo'

const shapes = ['aspect-[4/5]', 'aspect-square', 'aspect-[4/3]']

export default function Gallery() {
  const [cat, setCat] = useState('All')
  const [open, setOpen] = useState(null)

  const items = cat === 'All' ? gallery : gallery.filter((g) => g.category === cat)

  useEffect(() => {
    if (open === null) return
    const count = items.length
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen((i) => (i + 1) % count)
      if (e.key === 'ArrowLeft') setOpen((i) => (i - 1 + count) % count)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, items.length])

  const current = open !== null ? items[open] : null

  return (
    <main>
      <section className="bg-forest text-white text-center py-20 px-4">
        <h1 className="text-6xl md:text-7xl">GALLERY</h1>
        <p className="mt-4 max-w-xl mx-auto">Experience Liliw through our collection of travel photographs.</p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCat(c)
                setOpen(null)
              }}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                cat === c ? 'bg-forest text-white border-forest' : 'bg-white text-ink border-stone-300 hover:border-forest'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-2 md:columns-3 gap-4">
          {items.map((g, i) => (
            <button
              key={g.src}
              onClick={() => setOpen(i)}
              className="block w-full mb-4 break-inside-avoid rounded-2xl overflow-hidden group text-left"
            >
              <Photo src={g.src} alt={g.title} color={g.color} className={`${shapes[i % 3]} w-full`}>
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <p className="absolute bottom-3 left-4 right-4 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition">
                  {g.title}
                </p>
              </Photo>
            </button>
          ))}
        </div>
      </section>

      {current && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={() => setOpen(null)}>
          <button className="absolute top-4 right-4 text-white" aria-label="Close" onClick={() => setOpen(null)}>
            <X size={32} />
          </button>
          <button
            className="absolute left-3 text-white"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation()
              setOpen((i) => (i - 1 + items.length) % items.length)
            }}
          >
            <ChevronLeft size={40} />
          </button>
          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Photo src={current.src} alt={current.title} color={current.color} className="aspect-[4/3] w-full rounded-2xl" />
            <p className="text-white text-center mt-3">
              {current.title} <span className="text-white/60">· {current.category}</span>
            </p>
          </div>
          <button
            className="absolute right-3 text-white"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation()
              setOpen((i) => (i + 1) % items.length)
            }}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </main>
  )
}