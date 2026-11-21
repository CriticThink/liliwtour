import { useState } from 'react'
import { Link, Navigate, useLocation, useSearchParams } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { packages } from '../data/packages'
import { inputClass, labelClass } from '../components/formStyles'

const steps = [
  'Choose your preferred tour package.',
  'Complete the online booking form.',
  'Wait for our representative to contact you about availability and the final quotation.',
  'Review the booking details and payment instructions.',
  'Settle the required payment or deposit after receiving confirmation.',
  'Receive your booking confirmation and prepare for your trip.',
]

export default function Booking() {
  const { user, addBooking } = useAuth()
  const location = useLocation()
  const [params] = useSearchParams()

  const today = new Date().toISOString().split('T')[0]

  const [form, setForm] = useState({
    fullName: '',
    email: user?.email || '',
    contact: '',
    packageId: params.get('package') || packages[0].id,
    travelDate: '',
    participants: 5,
    requests: '',
    payment: 'GCash',
  })
  const [saved, setSaved] = useState(null)

  // Must be logged in to book
  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname + location.search }} replace />
  }

  const selected = packages.find((p) => p.id === form.packageId)
  const total = selected.price * Number(form.participants || 0)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    const booking = addBooking({
      ...form,
      packageName: selected.name,
      pricePerPerson: selected.price,
      estimatedTotal: total,
    })
    setSaved(booking)
  }

  if (saved) {
    return (
      <main className="max-w-xl mx-auto px-4 py-20 text-center">
        <CheckCircle2 size={56} className="mx-auto text-forest" />
        <h1 className="text-5xl text-forest mt-4">BOOKING SUBMITTED</h1>
        <p className="mt-3 text-stone-600">
          Thank you, {user.username}! Our team will contact you to confirm availability and the final quotation.
        </p>
        <div className="mt-6 bg-white rounded-2xl border border-black/5 p-6 text-left text-sm space-y-1">
          <p><b>Package:</b> {saved.packageName}</p>
          <p><b>Travel date:</b> {saved.travelDate}</p>
          <p><b>Participants:</b> {saved.participants}</p>
          <p><b>Estimated total:</b> ₱{saved.estimatedTotal.toLocaleString()}</p>
          <p><b>Status:</b> {saved.status}</p>
        </div>
        <div className="mt-8 flex gap-4 justify-center">
          <Link to="/my-bookings" className="bg-forest text-white font-bold px-6 py-3 rounded-full">My Bookings</Link>
          <Link to="/" className="border border-forest text-forest font-bold px-6 py-3 rounded-full">Back to Home</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl text-forest">PLAN YOUR NEXT ADVENTURE WITH US!</h1>
        <p className="mt-3 text-stone-600 max-w-2xl mx-auto">
          Ready to explore Liliw and Laguna? Provide the necessary information, and our team will contact you to confirm your reservation.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        <form onSubmit={onSubmit} className="lg:col-span-2 bg-white rounded-2xl border border-black/5 shadow-sm p-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Full Name</label>
            <input name="fullName" value={form.fullName} onChange={onChange} required className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Email Address</label>
            <input type="email" name="email" value={form.email} onChange={onChange} required className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Contact Number</label>
            <input type="tel" name="contact" value={form.contact} onChange={onChange} required placeholder="09XX XXX XXXX" className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Tour Package</label>
            <select name="packageId" value={form.packageId} onChange={onChange} className={inputClass}>
              {packages.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} (₱{p.price.toLocaleString()})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClass}>Travel Date</label>
            <input type="date" name="travelDate" min={today} value={form.travelDate} onChange={onChange} required className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Number of Participants</label>
            {/* Group size 5-15 per the PDF draft; change min/max once confirmed */}
            <input type="number" name="participants" min="5" max="15" value={form.participants} onChange={onChange} required className={inputClass} />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>Special Requests</label>
            <textarea name="requests" rows="3" value={form.requests} onChange={onChange} className={inputClass} />
          </div>
          <div className="sm:col-span-2">
            <label className={labelClass}>Payment Method</label>
            <select name="payment" value={form.payment} onChange={onChange} className={inputClass}>
              <option>GCash</option>
              <option>Bank Transfer</option>
              <option>Other (ask the team)</option>
            </select>
          </div>

          <div className="sm:col-span-2 flex items-center justify-between border-t pt-4">
            <p className="text-sm text-stone-600">
              Estimated total: <b className="text-ink text-lg">₱{total.toLocaleString()}</b>
              <span className="block text-xs">Final quotation will be confirmed by our team.</span>
            </p>
            <button className="bg-sunset text-white font-bold px-8 py-3 rounded-full hover:opacity-90">
              Submit Booking
            </button>
          </div>
        </form>

        <aside className="space-y-6">
          <div className="bg-white rounded-2xl border border-black/5 p-6">
            <h2 className="text-3xl text-forest">HOW IT WORKS</h2>
            <ol className="mt-3 space-y-2 text-sm text-stone-600 list-decimal list-inside">
              {steps.map((s) => <li key={s}>{s}</li>)}
            </ol>
          </div>
          <div className="bg-forest/10 rounded-2xl p-6 text-sm text-stone-700">
            <h3 className="text-2xl text-forest">CANCELLATION POLICY</h3>
            <p className="mt-2">
              Please inform us as early as possible if you wish to cancel. Refund eligibility depends on the booking conditions, payments already made, and any non-refundable expenses. Any refund amount and processing period will be communicated before payment.
            </p>
          </div>
        </aside>
      </div>
    </main>
  )
}