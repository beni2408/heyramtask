import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <span className="about-emoji">🏔️</span>
            </div>
          </div>
          <div className="about-text">
            <h2 className="about-title">About Us</h2>
            <p className="about-paragraph">
              Our saffron comes from the pristine valleys of Kashmir, where the unique climate 
              and soil conditions create the world's finest saffron. Each thread is carefully 
              hand-picked during the brief harvest season.
            </p>
            <p className="about-paragraph">
              The manual harvesting process ensures that only the highest quality stigmas are 
              selected, preserving the authentic aroma, flavor, and deep red color that makes 
              Kashmiri saffron legendary.
            </p>
            <p className="about-paragraph">
              Our brand vision is to bring you the purest, most authentic saffron while 
              supporting local farmers and maintaining traditional harvesting methods that 
              have been passed down through generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About