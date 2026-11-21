import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { inputClass, labelClass } from '../components/formStyles'

export default function Signup() {
  const { signup } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from || '/'

  const [form, setForm] = useState({ username: '', email: '', password: '' })
  const [error, setError] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }
    const res = signup(form)
    if (!res.ok) {
      setError(res.error)
      return
    }
    navigate(from, { replace: true })
  }

  return (
    <main className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-5xl text-forest text-center">CREATE ACCOUNT</h1>
      <p className="text-center text-stone-600 mt-2 text-sm">Sign up to book your Liliw adventure.</p>

      <form onSubmit={onSubmit} className="mt-8 bg-white rounded-2xl border border-black/5 shadow-sm p-6 space-y-4">
        <div>
          <label className={labelClass}>Username</label>
          <input name="username" value={form.username} onChange={onChange} required className={inputClass} />
        </div>
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
          Sign Up
        </button>
        <p className="text-sm text-center text-stone-600">
          Already have an account?{' '}
          <Link to="/login" state={{ from }} className="text-forest font-bold">Log in</Link>
        </p>
      </form>
    </main>
  )
}