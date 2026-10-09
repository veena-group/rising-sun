import { motion } from 'framer-motion'
import { fadeUp, fadeIn, staggerContainer, viewport, tapHover } from '../motion'

function Contact() {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <motion.div
          className="section-head section-head--center"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            Contact us
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Get in touch with the society office
          </motion.h2>
          <motion.p className="contact__intro" variants={fadeUp}>
            For maintenance queries, NOC requests, documentation or any other assistance, reach the
            society office using the details below.
          </motion.p>
        </motion.div>

        <motion.div
          className="contact__cards-row"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.a className="contact__card" href="tel:+917666318747" variants={fadeUp}>
            <span className="contact__icon">
              <svg viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <span className="contact__card-body">
              <span className="contact__card-label">Hamid Badami</span>
              <span className="contact__card-value">+91 76663 18747</span>
            </span>
          </motion.a>

          <motion.div className="contact__card contact__card--static" variants={fadeUp}>
            <span className="contact__icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </span>
            <span className="contact__card-body">
              <span className="contact__card-label">Sanjay Thapar</span>
            </span>
          </motion.div>

          <motion.div className="contact__card contact__card--static" variants={fadeUp}>
            <span className="contact__icon">
              <svg viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <span className="contact__card-body">
              <span className="contact__card-label">Address</span>
              <span className="contact__card-value">
                11/12, Juhu Tara Road,
                <br />
                Vile Parle (W), Mumbai - 400 049.
              </span>
            </span>
          </motion.div>

          <motion.div className="contact__card contact__card--static" variants={fadeUp}>
            <span className="contact__icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3.5 2" />
              </svg>
            </span>
            <span className="contact__card-body">
              <span className="contact__card-label">Office hours</span>
              <span className="contact__card-value">Mon – Sat, 10 am – 6 pm</span>
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          className="contact__form-wrap"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <h3 className="contact__form-title">Send an enquiry</h3>
          <form className="contact__form contact__form--wide" onSubmit={handleSubmit}>
            <div className="contact__row contact__row--3col">
              <label className="contact__field">
                <span className="contact__label">
                  Your name <em>*</em>
                </span>
                <input type="text" placeholder="Full name" />
              </label>
              <label className="contact__field">
                <span className="contact__label">
                  Email address <em>*</em>
                </span>
                <input type="email" placeholder="you@example.com" />
              </label>
              <label className="contact__field">
                <span className="contact__label">Flat / Unit no.</span>
                <input type="text" placeholder="e.g. A-101" />
              </label>
            </div>
            <label className="contact__field">
              <span className="contact__label">
                Message <em>*</em>
              </span>
              <textarea rows="4" placeholder="How can the society office help you?"></textarea>
            </label>
            <motion.button type="submit" className="btn btn--accent contact__submit" {...tapHover}>
              Send Enquiry
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          className="contact__map"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.006!2d72.826!3d19.103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b888ae67e7%3A0x5b5ef8ef44b4b0f3!2sJuhu%20Church%20Rd%2C%20Juhu%2C%20Andheri%20West%2C%20Mumbai%2C%20Maharashtra%20400049!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            title="Location"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
          <a
            className="contact__map-link"
            href="https://maps.app.goo.gl/PZ2GyWQqo2pLnUG48"
            target="_blank"
            rel="noopener"
          >
            View on Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
