import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, wordReveal, wordRevealChild, tapHover } from '../motion'
import MotionLink from './MotionLink'

const TITLE_WORDS = [
  { text: 'A', accent: false },
  { text: 'legacy', accent: false },
  { text: 'of', accent: false },
  { text: 'community', accent: true },
  { text: 'living', accent: true },
  { text: 'since', accent: false },
  { text: '1964', accent: true },
]

function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    function handleScroll() {
      if (bgRef.current) {
        const offset = window.scrollY * 0.35
        bgRef.current.style.transform = `translateY(${offset}px) scale(1.1)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <img
          ref={bgRef}
          className="hero__photo"
          src="/images/wing-c-front.jpg"
          alt=""
        />
      </div>
      <div className="hero__overlay"></div>
      <motion.div
        className="hero__inner"
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero__eyebrow" variants={fadeUp}>
          Juhu, Santacruz West, Mumbai
        </motion.p>
        <motion.h1 className="hero__title" variants={wordReveal} initial="hidden" animate="visible">
          {TITLE_WORDS.map((word, i) => (
            <span key={i} className="hero__word-wrap">
              <motion.span
                className={word.accent ? 'hero__title-accent' : undefined}
                variants={wordRevealChild}
              >
                {word.text}
              </motion.span>
            </span>
          ))}
        </motion.h1>
        <motion.p className="hero__regn" variants={fadeUp}>
          Regn. No.: BOM/HSG/713 of 1964 &bull; BOM/HSG/H/6628 of 1981
        </motion.p>
        <motion.p className="hero__text" variants={fadeUp}>
          The Rising Sun &amp; New Rising Sun Co-operative Housing Societies have been home to
          generations of families at Juhu Church Road, Santacruz West. A distinguished address,
          a well-managed community, and neighbours who look out for one another.
        </motion.p>
        <motion.div className="hero__actions" variants={fadeUp}>
          <MotionLink className="btn btn--accent" to="/login" {...tapHover}>
            Member Login
          </MotionLink>
          <motion.a className="btn btn--ghost-light" href="#about" {...tapHover}>
            Learn More
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.a
        className="hero__scroll"
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.9 },
          y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 1 },
        }}
      >
        <span className="hero__scroll-label">Scroll</span>
        <span className="hero__scroll-line"></span>
      </motion.a>
    </section>
  )
}

export default Hero
