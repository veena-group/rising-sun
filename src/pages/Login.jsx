import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, tapHover } from '../motion'

function UserIcon() {
  return (
    <svg className="login__input-icon" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg className="login__input-icon" viewBox="0 0 24 24">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function EyeOffIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-11-8-11-8a19.4 19.4 0 0 1 5.06-5.94M9.9 4.24A10.6 10.6 0 0 1 12 4c7 0 11 8 11 8a19.5 19.5 0 0 1-2.16 3.19M14.12 14.12a3 3 0 1 1-4.24-4.24" />
      <path d="M1 1l22 22" />
    </svg>
  )
}

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      const res = await fetch(`${import.meta.env.VITE_DASHBOARD_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const body = await res.json()

      if (!res.ok || !body.success) {
        throw new Error(body.message || 'Invalid username or password')
      }

      const encoded = encodeURIComponent(btoa(unescape(encodeURIComponent(JSON.stringify(body.data)))))
      window.location.href = `${import.meta.env.VITE_DASHBOARD_APP_URL}/auth/callback#session=${encoded}`
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <section className="login">
      <div className="login__media">
        <img className="login__photo" src="/images/wing-d.jpg" alt="" />
        <div className="login__media-overlay"></div>
        <div className="login__media-content">
          <img className="login__logo-mark" src="/images/logo.png" alt="Rising Sun Society logo" />
          <p className="login__media-title">Rising Sun Co-operative Housing Society</p>
          <p className="login__media-sub">Juhu Church Road, Santacruz (W), Mumbai 400049</p>
        </div>
      </div>

      <div className="login__panel">
        <motion.div
          className="login__form-wrap"
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            Member Login
          </motion.p>
          <motion.h1 className="login__title" variants={fadeUp}>
            Welcome back
          </motion.h1>
          <motion.p className="login__subtitle" variants={fadeUp}>
            Sign in with your registered member credentials to access society services online.
          </motion.p>

          {error && (
            <motion.p className="login__error" variants={fadeUp}>
              {error}
            </motion.p>
          )}

          <motion.form className="login__form" variants={fadeUp} onSubmit={handleSubmit}>
            <label className="contact__field">
              <span className="contact__label">
                Email <em>*</em>
              </span>
              <div className="login__input">
                <UserIcon />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
            </label>
            <label className="contact__field">
              <span className="contact__label">
                Password <em>*</em>
              </span>
              <div className="login__input">
                <LockIcon />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                />
                <button
                  type="button"
                  className="login__input-toggle"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </label>

            <motion.button
              type="submit"
              className="btn btn--accent login__submit"
              disabled={submitting}
              {...tapHover}
            >
              {submitting ? 'Signing In…' : 'Sign In'}
              <svg className="login__submit-icon" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </motion.button>
          </motion.form>

          <motion.p className="login__note" variants={fadeUp}>
            Not a registered member yet, or having trouble signing in? Contact the society office
            for assistance.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link className="login__back" to="/">
              &larr; Back to home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Login
