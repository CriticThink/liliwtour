import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function MyBookings() {
  const { user, myBookings } = useAuth()

  if (!user) return <Navigate to="/login" state={{ from: '/my-bookings' }} replace />

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-5xl text-forest">MY BOOKINGS</h1>
      <p className="text-stone-600 mt-2 text-sm">Signed in as {user.username}</p>

      {myBookings.length === 0 ? (
        <div className="mt-8 bg-white rounded-2xl border border-black/5 p-8 text-center">
          <p className="text-stone-600">You have no bookings yet.</p>
          <Link to="/booking" className="inline-block mt-4 bg-sunset text-white font-bold px-6 py-2 rounded-full">
            Book a Tour
          </Link>
        </div>
      ) : (
        <div className="mt-8 space-y-4">
          {myBookings.map((b) => (
            <div key={b.id} className="bg-white rounded-2xl border border-black/5 p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl text-forest leading-tight">{b.packageName.toUpperCase()}</h3>
                <span className="text-xs font-bold bg-sunset/10 text-sunset px-3 py-1 rounded-full">{b.status}</span>
              </div>
              <p className="mt-2 text-sm text-stone-600">
                {b.travelDate} · {b.participants} participants · {b.payment}
              </p>
              <p className="mt-1 text-sm">
                Estimated total: <b>₱{b.estimatedTotal.toLocaleString()}</b>
              </p>
              {b.requests && <p className="mt-1 text-sm text-stone-500">Request: {b.requests}</p>}
            </div>
          ))}
        </div>
      )}
    </main>
  )
}