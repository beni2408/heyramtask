import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import './LoginPage.css'

const LoginPage = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle login logic
    console.log('Login attempt:', formData)
    alert('Login successful!')
    navigate('/home')
  }

  const goBack = () => {
    navigate('/home')
  }

  return (
    <div className="login-page">
      <Navbar />
      
      <section className="login-hero">
        <div className="login-container">
          <button onClick={goBack} className="back-button">
            ← Back to Home
          </button>
          
          <div className="login-card">
            <h1 className="login-title">Welcome Back</h1>
            <p className="login-subtitle">Sign in to your Z Princess Saffron account</p>
            
            <form onSubmit={handleSubmit} className="login-form">
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
                  placeholder="Enter your password"
                />
              </div>
              
              <Button text="Sign In" variant="primary" />
            </form>
            
            <div className="login-footer">
              <p>Don't have an account? <a href="/signup" className="signup-link">Sign up here</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default LoginPage