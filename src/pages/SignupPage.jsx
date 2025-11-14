import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import './SignupPage.css'

const SignupPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    // Here you would typically handle signup logic
    console.log('Signup attempt:', formData)
    alert('Account created successfully!')
    navigate('/login')
  }

  const goBack = () => {
    navigate('/home')
  }

  return (
    <div className="signup-page">
      <Navbar />
      
      <section className="signup-hero">
        <div className="signup-container">
          <button onClick={goBack} className="back-button">
            ← Back to Home
          </button>
          
          <div className="signup-card">
            <h1 className="signup-title">Create Account</h1>
            <p className="signup-subtitle">Join Z Princess Saffron family today</p>
            
            <form onSubmit={handleSubmit} className="signup-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Create a password"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  placeholder="Confirm your password"
                />
              </div>
              
              <Button text="Create Account" variant="primary" />
            </form>
            
            <div className="signup-footer">
              <p>Already have an account? <a href="/login" className="login-link">Sign in here</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default SignupPage