import { useEffect, useRef, useState } from 'react'
import { tapHover } from '../motion'
import MotionLink from './MotionLink'

const NAV_LINKS = [
  { href: '#home', label: 'HOME' },
  { href: '#about', label: 'ABOUT US' },
  { href: '#facilities', label: 'FACILITIES' },
  { href: '#gallery', label: 'GALLERY' },
  { href: '#contact', label: 'CONTACT US' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')
  const progressRef = useRef(null)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40)

      const sections = NAV_LINKS.map((l) => l.href.slice(1))
      let current = '#home'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          current = `#${id}`
        }
      }
      setActiveSection(current)

      if (progressRef.current) {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
        progressRef.current.style.width = `${progress}%`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isSolid = isScrolled || isOpen

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <header className={`nav${isSolid ? ' nav--solid' : ''}`}>
      <div className="nav__progress" ref={progressRef}></div>
      <div className="container nav__inner">
        <a href="#home" className="brand" onClick={closeMenu}>
          <img className="brand__mark" src="/images/logo.png" alt="Rising Sun Society logo" />
        </a>

        <nav className={`nav__links${isOpen ? ' is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className={`nav__link${activeSection === link.href ? ' nav__link--active' : ''}`}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <MotionLink
            className="btn btn--accent nav__cta"
            to="/login"
            onClick={closeMenu}
            {...tapHover}
          >
            MEMBER LOGIN
          </MotionLink>
        </nav>

        <button
          className="nav__burger"
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className={isOpen ? 'is-open' : ''}></span>
          <span className={isOpen ? 'is-open' : ''}></span>
          <span className={isOpen ? 'is-open' : ''}></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
