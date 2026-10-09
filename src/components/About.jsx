import { motion } from 'framer-motion'
import {
  fadeUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewport,
} from '../motion'
import CountUp from './CountUp'

const STATS = [
  { num: 2, label: 'Societies' },
  { num: 4, label: 'Wings' },
  { num: 70, label: 'Flats' },
  { num: 1964, label: 'Established' },
]

const FEATURES = [
  'Two registered co-operative societies',
  'Four wings — A, B, C & D, Ground + 6 floors',
  '70 flats across both buildings',
  'Steps from Juhu Beach & Juhu Market',
  'Cosmopolitan, multi-generational community',
  'Elected managing committee for each society',
]

const COMMITTEE = [
  {
    name: 'Atul Daga',
    role: 'Chairman',
    building: 'Rising Sun A & B',
    photo: null,
  },
  {
    name: 'Purshotam Walia',
    role: 'Secretary',
    building: 'Rising Sun A & B',
    photo: null,
  },
  {
    name: 'Rohit Patel',
    role: 'Treasurer',
    building: 'Rising Sun A & B',
    photo: null,
  },
  {
    name: 'Deeksha Hora',
    role: 'Chairman',
    building: 'New Rising Sun C & D',
    photo: '/images/deeksha.jpg',
  },
  {
    name: 'Niranjan Tirodkar',
    role: 'Secretary',
    building: 'New Rising Sun C & D',
    photo: '/images/niranjan.jfif',
  },
  {
    name: 'Hamid Badami',
    role: 'Treasurer',
    building: 'New Rising Sun C & D',
    photo: '/images/hamid.jpg',
  },
]

const HIGHLIGHTS = [
  {
    value: '1964',
    label: 'Rising Sun A & B',
    note: 'Regn. BOM/HSG/713, dt. 11/08/1964 — 34 flats, G+6',
  },
  {
    value: '1981',
    label: 'New Rising Sun C & D',
    note: 'Regn. BOM/HSG/H/6628, dt. 05/03/1981 — 36 flats, G+6',
  },
  {
    value: 'Juhu',
    label: 'Location',
    note: '11/12, Juhu Tara Road, Vile Parle (W), Mumbai 400049',
  },
]

function TickIcon() {
  return (
    <svg className="about__tick" viewBox="0 0 24 24">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

function PersonIcon() {
  return (
    <svg className="about__member-placeholder" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  )
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <motion.div
          className="about__stats"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} className="about__stat" variants={fadeUp}>
              <span className="about__stat-num">
                <CountUp end={stat.num} duration={stat.num > 100 ? 2500 : 1500} />
              </span>
              <span className="about__stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__content"
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p className="eyebrow" variants={fadeInLeft}>
              About the society
            </motion.p>
            <motion.h2 className="section-title" variants={fadeInLeft}>
              A Prestigious Address on Juhu Tara Road Since 1964
            </motion.h2>
            <motion.p className="about__para" variants={fadeInLeft}>
              The Rising Sun Co-operative Housing Society Ltd. (Regn. BOM/HSG/713, dt.
              11/08/1964) and New Rising Sun Co-operative Housing Society Ltd. (Regn.
              BOM/HSG/H/6628, dt. 05/03/1981) stand at 11/12, Juhu Tara Road,
              Vile Parle West, Mumbai — one of the city's most sought-after residential
              addresses.
            </motion.p>
            <motion.p className="about__para" variants={fadeInLeft}>
              Both buildings were built by Om Prakash Tolaram. Rising Sun A &amp; B has 34
              flats across Ground + 6 floors, while New Rising Sun C &amp; D has 36 flats
              across Ground + 6 floors. It is well located on Juhu Tara Road, very close to
              Juhu Beach, with Juhu Market approx. 1 km away and a couple of 3-star, 4-star
              &amp; 5-star hotels close by.
            </motion.p>
            <motion.p className="about__para" variants={fadeInLeft}>
              It is a cosmopolitan society with affluent middle &amp; upper class people.
              There are 2 generations of people staying, with children now from the 2nd
              generation. Each society is managed by its own elected
              committee, ensuring smooth day-to-day operations and well-maintained common
              areas for all residents.
            </motion.p>
            <motion.ul
              className="about__features"
              variants={staggerContainer(0.06)}
            >
              {FEATURES.map((feature) => (
                <motion.li key={feature} className="about__feature" variants={fadeUp}>
                  <TickIcon />
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
            <motion.a
              className="about__contact-link"
              href="#contact"
              variants={fadeInLeft}
            >
              Contact the Society
              <svg className="about__contact-arrow" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </motion.a>
          </motion.div>

          <motion.div
            className="about__media"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <img
              className="about__img"
              src="/images/wing-b.jpg"
              alt="The Rising Sun Co-operative Housing Society building"
            />
          </motion.div>
        </div>

        <motion.div
          className="about__highlights"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {HIGHLIGHTS.map((item) => (
            <motion.div key={item.label} className="about__card" variants={fadeUp}>
              <p className="about__card-value">{item.value}</p>
              <p className="about__card-label">{item.label}</p>
              <p className="about__card-note">{item.note}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="about__committee"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h3 className="about__committee-title" variants={fadeUp}>
            Managing Committee
          </motion.h3>
          <div className="about__committee-grid">
            {COMMITTEE.map((member) => (
              <motion.div className="about__member" key={`${member.building}-${member.name}`} variants={fadeUp}>
                <span className="about__member-photo">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} />
                  ) : (
                    <PersonIcon />
                  )}
                </span>
                <span className="about__member-name">{member.name}</span>
                <span className="about__member-role">{member.role}</span>
                <span className="about__member-building">{member.building}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
