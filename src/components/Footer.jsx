import { motion } from 'framer-motion'
import { fadeUp, viewport, tapHover } from '../motion'
import MotionLink from './MotionLink'

const QUICK_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#facilities', label: 'Facilities' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer__grid"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="footer__col footer__col--brand">
            <div className="footer__brand">
              <img className="footer__mark" src="/images/logo.png" alt="Rising Sun Society logo" />
            </div>
            <p className="footer__about">
              The Rising Sun &amp; New Rising Sun Co-operative Housing Society Ltd. (Regn. No.:
              BOM/HSG/713 of 1964), Juhu Church Road, Santacruz (W), Mumbai.
            </p>
            <MotionLink className="btn btn--accent footer__cta" to="/login" {...tapHover}>
              Member Login
            </MotionLink>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__list">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a className="footer__link" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Contact</h4>
            <ul className="footer__list">
              <li>
                <a className="footer__link" href="tel:+917666318747">
                  Hamid Badami: +91 76663 18747
                </a>
              </li>
              <li>
                <a className="footer__link" href="tel:+919820041703">
                  Sanjay Thapar: +91 98200 41703
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Address</h4>
            <address className="footer__address">
              11/12, Juhu Church Road, Juhu,
              <br />
              Santacruz (W), Mumbai - 400 049.
            </address>
          </div>
        </motion.div>

        <div className="footer__bottom">
          <p className="footer__copy">Rising Sun Society &copy; 2026. All rights reserved.</p>
          <p className="footer__credit">
            Designed and Developed by{' '}
            <a href="https://theveenagroup.com/" target="_blank" rel="noopener">
              Veena Infotech
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
