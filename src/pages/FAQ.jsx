import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/faqs'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <main>
      <section className="bg-forest text-white text-center py-20 px-4">
        <h1 className="text-6xl md:text-7xl">FREQUENTLY ASKED QUESTIONS</h1>
        <p className="mt-4">Quick answers to common questions about booking and traveling with us.</p>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-16 space-y-3">
        {faqs.map((f, i) => (
          <div key={f.q} className="bg-white rounded-xl border border-black/5 overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left px-6 py-4 font-semibold"
            >
              {f.q}
              <ChevronDown className={`shrink-0 text-forest transition ${open === i ? 'rotate-180' : ''}`} />
            </button>
            {open === i && <p className="px-6 pb-5 text-sm text-stone-600">{f.a}</p>}
          </div>
        ))}

        <div className="text-center pt-8">
          <p className="text-stone-600">Still have questions?</p>
          <Link to="/about#contact" className="inline-block mt-3 bg-sunset text-white font-bold px-7 py-3 rounded-full">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  )
}