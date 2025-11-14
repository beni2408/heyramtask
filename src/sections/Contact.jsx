import React, { useState } from 'react'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import Button from '../components/Button'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">CONTACT DETAILS</h2>
        
        <div className="contact-content">
          <div className="contact-info-section">
            <div className="office-hours">
              <h3>Our office hours are Monday to Saturday</h3>
              <p className="hours">9 AM to 6 PM.</p>
            </div>
            
            <div className="contact-details-grid">
              <div className="contact-detail-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-info">
                  <p>Chennai, India</p>
                </div>
              </div>
              
              <div className="contact-detail-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-info">
                  <p>+91 72001 50588</p>
                </div>
              </div>
              
              <div className="contact-detail-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-info">
                  <p>zprincessaffron07@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact