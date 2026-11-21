import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

const USERS_KEY = 'liwaliw_users'
const SESSION_KEY = 'liwaliw_session'
const BOOKINGS_KEY = 'liwaliw_bookings'

const read = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

const write = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // storage unavailable, ignore
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => read(SESSION_KEY, null))
  const [bookings, setBookings] = useState(() => read(BOOKINGS_KEY, []))

  const signup = ({ username, email, password }) => {
    const users = read(USERS_KEY, [])
    if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
      return { ok: false, error: 'An account with this email already exists.' }
    }
    if (users.some((u) => u.username.toLowerCase() === username.toLowerCase())) {
      return { ok: false, error: 'That username is already taken.' }
    }
    write(USERS_KEY, [...users, { username, email, password }])
    const session = { username, email }
    write(SESSION_KEY, session)
    setUser(session)
    return { ok: true }
  }

  const login = ({ email, password }) => {
    const users = read(USERS_KEY, [])
    const found = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    )
    if (!found) return { ok: false, error: 'Incorrect email or password.' }
    const session = { username: found.username, email: found.email }
    write(SESSION_KEY, session)
    setUser(session)
    return { ok: true }
  }

  const logout = () => {
    try {
      localStorage.removeItem(SESSION_KEY)
    } catch {
      // ignore
    }
    setUser(null)
  }

  const addBooking = (data) => {
    const booking = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      status: 'Pending',
      userEmail: user.email,
      ...data,
    }
    const next = [booking, ...bookings]
    write(BOOKINGS_KEY, next)
    setBookings(next)
    return booking
  }

  const myBookings = bookings.filter((b) => b.userEmail === user?.email)

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, addBooking, myBookings }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)