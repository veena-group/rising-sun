export const EASE = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: EASE } },
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE } },
}

export const fadeInRight = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: EASE } },
}

export function staggerContainer(stagger = 0.1, delayChildren = 0) {
  return {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren } },
  }
}

export const viewport = { once: true, amount: 0.25 }

export const wordReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export const wordRevealChild = {
  hidden: { y: '100%', opacity: 0 },
  visible: { y: '0%', opacity: 1, transition: { duration: 0.5, ease: EASE } },
}

export const imageReveal = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: EASE },
  },
}

export const tapHover = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: { duration: 0.2, ease: EASE },
}
