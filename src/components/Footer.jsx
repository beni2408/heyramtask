import React from 'react'
import './Footer.css'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <h3 className="footer-logo">Z PRINCESS SAFFRON</h3>
            <p className="footer-tagline">
              Premium saffron delivered fresh to your doorstep. 
              Experience the finest quality saffron with authentic heritage and modern purity.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="footer-contact">
              <p>📞 +91 72001 50588</p>
              <p>✉️ zprincessaffron07@gmail.com</p>
              <p>📍 Chennai, India</p>
            </div>
          </div>
          
          {/* Corporate Essentials */}
          <div className="footer-section">
            <h4 className="footer-title">CORPORATE Essentials</h4>
            <div className="corporate-info">
              <p>FSSAI License No: 12423008002367</p>
              <p>GSTIN: 33ABFA6551N1ZZ</p>
              <p>MSME UAN: TN-02-0006511</p>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="footer-section">
            <h4 className="footer-title">Follow Us</h4>
            <div className="footer-social">
              <a href="#" className="social-icon">📘</a>
              <a href="#" className="social-icon">📷</a>
              <a href="#" className="social-icon">🐦</a>
              <a href="#" className="social-icon">💬</a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; 2024 Z Princess Saffron. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer