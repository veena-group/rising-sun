import { motion } from 'framer-motion'
import { fadeUp, imageReveal, staggerContainer, viewport } from '../motion'

const LEFT_COL = [
  { caption: 'Building Entrance', image: '/images/building-1.jpg', tall: true },
  { caption: 'Society Compound', image: '/images/building-2.jpg', tall: false },
  { caption: 'Parking Area', image: '/images/building-1.jpg', tall: true },
]

const RIGHT_COL = [
  { caption: 'Common Areas', image: '/images/building-2.jpg', tall: false },
  { caption: 'Juhu Church Road', image: '/images/hero.jpg', tall: true },
  { caption: 'Society Events', image: '/images/building-2.jpg', tall: false },
]

function GalleryItem({ item, index, prefix }) {
  return (
    <motion.figure
      key={`${prefix}-${index}`}
      className={`gallery__item${item.tall ? ' gallery__item--tall' : ''}`}
      variants={imageReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <img className="gallery__img" src={item.image} alt={item.caption} />
      <figcaption className="gallery__caption">
        <span>{item.caption}</span>
      </figcaption>
    </motion.figure>
  )
}

function Gallery() {
  return (
    <section className="section section--alt gallery" id="gallery">
      <div className="container">
        <motion.div
          className="section-head section-head--center"
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            Gallery
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            A look around the society
          </motion.h2>
          <motion.p className="gallery__intro" variants={fadeUp}>
            Photographs of the building, the common areas and society events.
          </motion.p>
        </motion.div>

        <div className="gallery__masonry">
          <div className="gallery__col">
            {LEFT_COL.map((item, i) => (
              <GalleryItem key={`l-${i}`} item={item} index={i} prefix="l" />
            ))}
          </div>

          <div className="gallery__col">
            {RIGHT_COL.map((item, i) => (
              <GalleryItem key={`r-${i}`} item={item} index={i} prefix="r" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
