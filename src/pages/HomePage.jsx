import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Products from '../sections/Products'
import Benefits from '../sections/Benefits'
import Newsletter from '../sections/Newsletter'
import Gallery from '../sections/Gallery'
import Testimonials from '../sections/Testimonials'
import Contact from '../sections/Contact'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <Products />
      <Benefits />
      <Newsletter />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage