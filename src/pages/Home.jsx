import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Facilities from '../components/Facilities'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home
