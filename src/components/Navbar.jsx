import React, { useState, useEffect } from 'react'
import { Menu, X, ShoppingCart, User } from 'lucide-react'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/home' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/home#contact' }
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <span className="logo-text">Z PRINCESS SAFFRON</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          
          {/* Cart and Auth Links */}
          <div className="nav-actions">
            <a href="/cart" className="nav-icon-link">
              <ShoppingCart size={20} />
              <span className="nav-icon-text">Cart</span>
            </a>
            <a href="/login" className="nav-icon-link">
              <User size={20} />
              <span className="nav-icon-text">Login</span>
            </a>
            <a href="/signup" className="nav-signup-btn">
              Sign Up
            </a>
          </div>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar