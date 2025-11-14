import React from 'react'
import Button from '../components/Button'
import saffronHD from '../assets/images/Saffron HD 2.png'
import './Hero.css'

const Hero = () => {
  const navigateToAbout = () => {
    window.location.href = '/about'
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Z PRINCESS SAFFRON</h1>
          <h2 className="hero-subtitle">
            World's Finest Saffron
          </h2>
          <div className="hero-cta">
            <Button 
              text="DISCOVER NOW" 
              onClick={navigateToAbout}
              variant="primary"
            />
          </div>
        </div>
        <div className="hero-visual">
          <div className="saffron-display">
            <img src={saffronHD} alt="Premium Saffron" className="saffron-image" />
            <div className="saffron-overlay">
              <span className="saffron-emoji">🌸</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero