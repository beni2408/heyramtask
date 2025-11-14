import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import saffronHD from '../assets/images/Saffron HD 2.png'
import './AboutPage.css'

const AboutPage = () => {
  const navigate = useNavigate()
  
  const goBack = () => {
    navigate('/home')
  }

  return (
    <div className="about-page">
      <Navbar />
      
      <section className="about-hero">
        <div className="about-hero-container">
          <button onClick={goBack} className="back-button">
            ← Back to Home
          </button>
          <h1 className="about-hero-title">Z PRINCESS SAFFRON</h1>
          <p className="about-hero-subtitle">
            At the crossroads of ancient heritage and modern purity, Z PRINCESS SAFFRON embodies the golden promise of authenticity.
          </p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-container">
          
          {/* Who We Are Section */}
          <div className="content-section">
            <h2 className="section-title">Who We Are</h2>
            <p className="section-text">
              Z PRINCESS SAFFRON is more than a saffron brand—it is the fruit of passion, tradition, and technological excellence. 
              This project was proudly launched by HeyRam Infrastructure, an IT services, web development, and digital marketing 
              company led by Managing Director Raja K. With deep roots in innovation and quality, HeyRam Infrastructure envisioned 
              a brand that brings the richness of saffron to the world with modern integrity and ancient reverence.
            </p>
            <p className="section-text">
              Our journey blends the digital future with age-old agricultural heritage. Every strand of saffron we offer is a 
              symbol of luxury, purity, and authenticity—sourced directly from the highlands of Kashmir and presented to you 
              with meticulous care and quality assurance.
            </p>
          </div>

          {/* Our Essence Section */}
          <div className="content-section">
            <h2 className="section-title">Our Essence</h2>
            <p className="section-text">
              We aren't just merchants of saffron—we're curators of a legacy. Each strand tells a story from high Himalayan 
              valleys and sun-kissed Spanish fields. With every harvest, we preserve a piece of heritage, transforming kitchens, 
              ceremonies, and lives.
            </p>
          </div>

          {/* Features Grid */}
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Origin-Based Sourcing</h3>
              <p>Direct partnerships with farms in Kashmir, Iran, and Spain ensure true traceability and freshness.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🧪</div>
              <h3>Laboratory Tested</h3>
              <p>Each batch is tested for purity, aroma, and color strength before it reaches your hands.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Crafted Experiences</h3>
              <p>We believe saffron is more than spice—it's a symbol of wellness, celebration, and royalty.</p>
            </div>
          </div>

          {/* Visual Section */}
          <div className="visual-section">
            <div className="saffron-showcase">
              <img src={saffronHD} alt="Premium Saffron" className="showcase-image" />
              <div className="showcase-overlay">
                <h3>Premium Saffron Excellence</h3>
              </div>
            </div>
            <div className="visual-process">
              <div className="visual-item">
                <div className="visual-icon">🌸</div>
                <span>Crocuses</span>
              </div>
              <div className="visual-arrow">→</div>
              <div className="visual-item">
                <div className="visual-icon">🌾</div>
                <span>Harvest</span>
              </div>
            </div>
          </div>

          {/* Culture Section */}
          <div className="content-section culture-section">
            <h2 className="section-title">A Culture of Saffron</h2>
            <p className="section-text">
              Our vision is simple: make luxury ethical, and authenticity accessible. From sacred rituals to Michelin-starred 
              dishes, our saffron enriches every moment. We're proud to redefine saffron—from commodity to craft.
            </p>
            <p className="section-text">
              Explore our journey, share our story, and taste the legacy in every golden thread.
            </p>
          </div>

          {/* Signature Quote */}
          <div className="quote-section">
            <blockquote className="signature-quote">
              "Every thread must whisper luxury, heritage, and healing."
            </blockquote>
            <cite className="quote-author">Z PRINCESS SAFFRON</cite>
          </div>

        </div>
      </section>

      {/* Footer Links Section */}
      <section className="footer-links-section">
        <div className="footer-links-container">
          <div className="footer-links-grid">
            <a href="#contact" className="footer-link">Contact</a>
            <a href="#about" className="footer-link">ABOUT</a>
            <a href="#terms" className="footer-link">Terms and Condition</a>
            <a href="#privacy" className="footer-link">PRIVACY POLICY</a>
            <a href="#corporate" className="footer-link">CORPORATE Essentials</a>
            <a href="#refund" className="footer-link">REFUND POLICY</a>
            <a href="#shipping" className="footer-link">SHIPPING POLICY</a>
            <a href="#faq" className="footer-link">FAQ</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage