import React, { useState } from 'react'
import Button from '../components/Button'
import './Newsletter.css'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Subscribing email:', email)
      setIsSubscribed(true)
      setEmail('')
      
      // Reset the success message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false)
      }, 3000)
    }
  }

  return (
    <section id="newsletter" className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">SUBSCRIBE TO OUR NEWSLETTER</h2>
          
          {isSubscribed ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <p>Thank you for subscribing! You'll receive our latest updates and offers.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="newsletter-form">
              <div className="form-group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="email-input"
                />
                <Button 
                  text="SUBSCRIBE" 
                  variant="primary"
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Newsletter