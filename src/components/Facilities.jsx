import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from '../motion'

function ParkingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M9 16V8h3.5a2.5 2.5 0 0 1 0 5H9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function WaterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GardenIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 21V11" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 11C12 6 8 5 5 5c0 4 1 8 7 8z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 11c0-4 4-5 7-5 0 4-1 8-7 8z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PlaygroundIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="5" r="2" />
      <path d="M5 20l7-13 7 13" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 14h7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SchoolIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l9 4-9 4-9-4z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const FACILITIES = [
  { title: '2 Gardens', icon: GardenIcon },
  { title: "Children's Play Ground", icon: PlaygroundIcon },
  { title: '24 Hrs Running Water', icon: WaterIcon },
  { title: 'Ample Car Parking Space', icon: ParkingIcon },
  { title: 'Adjoining Play School — Tic-Tac-Toe', icon: SchoolIcon },
]

function Facilities() {
  return (
    <section className="section facilities" id="facilities">
      <div className="container">
        <motion.div
          className="section-head section-head--center"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            Facilities
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Amenities & Features
          </motion.h2>
        </motion.div>

        <motion.div
          className="facilities-grid"
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {FACILITIES.map((item) => {
            const Icon = item.icon
            return (
              <motion.div className="facilities-grid__item" key={item.title} variants={fadeUp}>
                <span className="facilities-grid__icon">
                  <Icon />
                </span>
                <h3 className="facilities-grid__title">{item.title}</h3>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Facilities
