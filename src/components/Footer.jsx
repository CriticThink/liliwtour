import { Compass, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const socials = ['Facebook', 'Instagram', 'TikTok']

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 text-white">
            <Compass size={24} />
            <span className="font-display text-2xl">LIWALIW SA LILIW</span>
          </div>
          <p className="mt-4 text-sm">Dadalhin ka sa Liliw para maaliw!</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a key={s} href="#" className="text-xs border border-white/20 rounded-full px-3 py-1 hover:bg-white/10">
                {s}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl text-white mb-3">EXPLORE</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl text-white mb-3">HELP</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/booking">Book a Tour</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li><Link to="/policies">Policies and Terms</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl text-white mb-3">CONTACT</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin size={18} className="shrink-0" /> Barangay Masikap, Liliw, Laguna</li>
            <li className="flex gap-2"><Phone size={18} className="shrink-0" /> 0981 241 7807</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">
        © 2026 Liwaliw sa Liliw Tour. All rights reserved.
      </div>
    </footer>
  )
}