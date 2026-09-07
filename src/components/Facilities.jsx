import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewport } from '../motion'

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 11l9-7 9 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ParkingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M9 16V8h3.5a2.5 2.5 0 0 1 0 5H9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

function LiftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M10 9l2-2 2 2M10 15l2 2 2-2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3l7 3v6c0 5-3.2 8-7 9-3.8-1-7-4-7-9V6z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
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

function CommunityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="8.5" cy="8" r="3" />
      <path d="M2 20c0-3.3 2.9-6 6.5-6S15 16.7 15 20" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="17" cy="9" r="2.3" />
      <path d="M16 11.5c2.8.3 5 2.6 5 5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CctvIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 6l11-2v6L3 8z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 7.5H20a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 8.5v4a2 2 0 0 0 2 2h1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const FACILITIES = [
  { title: 'Spacious Residences', icon: HomeIcon },
  { title: 'Covered Parking', icon: ParkingIcon },
  { title: 'Prime Location', icon: LocationIcon },
  { title: 'Lift Access', icon: LiftIcon },
  { title: '24x7 Security', icon: ShieldIcon },
  { title: 'Water Supply', icon: WaterIcon },
  { title: 'Community Hall', icon: CommunityIcon },
  { title: 'CCTV Surveillance', icon: CctvIcon },
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
