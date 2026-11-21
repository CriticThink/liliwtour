import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Compass, Menu, X, User, LogOut, ClipboardList } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/packages', label: 'Packages' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/faq', label: 'FAQs' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [menu, setMenu] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition ${isActive ? 'text-forest' : 'text-ink hover:text-forest'}`

  const handleLogout = () => {
    logout()
    setMenu(false)
    setOpen(false)
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-t-2 border-sunset shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center">
      <img src="/images/logo.jpg" alt="Liwaliw sa Liliw Tour" className="h-14 md:h-20 w-auto rounded-lg" />
    </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/booking" className="bg-sunset text-white font-bold text-sm px-5 py-2 rounded-full hover:opacity-90">
            Book Trip
          </Link>

          {user ? (
            <div className="relative">
              <button
                onClick={() => setMenu(!menu)}
                className="flex items-center gap-2 bg-forest/10 text-forest font-bold text-sm px-4 py-2 rounded-full"
              >
                <User size={16} /> {user.username}
              </button>
              {menu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-black/5 py-2">
                  <Link
                    to="/my-bookings"
                    onClick={() => setMenu(false)}
                    className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-stone-50"
                  >
                    <ClipboardList size={16} /> My Bookings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-stone-50 text-left"
                  >
                    <LogOut size={16} /> Log out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login" className="text-sm font-semibold text-ink hover:text-forest">
                Log in
              </Link>
              <Link to="/signup" className="border border-forest text-forest font-bold text-sm px-5 py-2 rounded-full hover:bg-forest hover:text-white transition">
                Sign up
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-4">
          {user && (
            <p className="flex items-center gap-2 font-bold text-forest">
              <User size={16} /> {user.username}
            </p>
          )}
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          {user && (
            <Link to="/my-bookings" onClick={() => setOpen(false)} className="text-sm font-semibold">
              My Bookings
            </Link>
          )}
          <Link to="/booking" onClick={() => setOpen(false)} className="bg-sunset text-white font-bold text-center py-2 rounded-full">
            Book Trip
          </Link>
          {user ? (
            <button onClick={handleLogout} className="text-sm font-semibold text-left">
              Log out
            </button>
          ) : (
            <div className="flex gap-3">
              <Link to="/login" onClick={() => setOpen(false)} className="flex-1 text-center border border-stone-300 py-2 rounded-full text-sm font-semibold">
                Log in
              </Link>
              <Link to="/signup" onClick={() => setOpen(false)} className="flex-1 text-center border border-forest text-forest py-2 rounded-full text-sm font-bold">
                Sign up
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  )
}