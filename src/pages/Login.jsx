import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { inputClass, labelClass } from '../components/formStyles'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from || '/'

  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    const res = login(form)
    if (!res.ok) {
      setError(res.error)
      return
    }
    navigate(from, { replace: true })
  }

  return (
    <main className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-5xl text-forest text-center">WELCOME BACK</h1>
      <p className="text-center text-stone-600 mt-2 text-sm">Log in to continue your booking.</p>

      <form onSubmit={onSubmit} className="mt-8 bg-white rounded-2xl border border-black/5 shadow-sm p-6 space-y-4">
        <div>
          <label className={labelClass}>Email Address</label>
          <input type="email" name="email" value={form.email} onChange={onChange} required className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Password</label>
          <input type="password" name="password" value={form.password} onChange={onChange} required className={inputClass} />
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button className="w-full bg-sunset text-white font-bold py-3 rounded-full hover:opacity-90">
          Log In
        </button>
        <p className="text-sm text-center text-stone-600">
          No account yet?{' '}
          <Link to="/signup" state={{ from }} className="text-forest font-bold">Sign up</Link>
        </p>
      </form>
    </main>
  )
}