import React, { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import './Testimonials.css'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "The quality of saffron is absolutely exceptional! The aroma and color are exactly what authentic Kashmir saffron should be. Highly recommended!",
      avatar: "👩"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "I've been buying saffron for years, but this is by far the best quality I've ever received. The packaging was also excellent.",
      avatar: "👨"
    },
    {
      id: 3,
      name: "Anita Patel",
      location: "Ahmedabad",
      rating: 5,
      text: "Ordered for my daughter's wedding. The saffron quality exceeded my expectations and all guests complimented the dishes.",
      avatar: "👵"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">What Our Customers Say</h2>
        
        <div className="testimonial-slider">
          <div className="testimonial-card">
            <div className="stars">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="star" fill="currentColor" />
              ))}
            </div>
            
            <blockquote className="testimonial-text">
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            <div className="customer-info">
              <div className="customer-avatar">
                {testimonials[currentIndex].avatar}
              </div>
              <div className="customer-details">
                <h4 className="customer-name">{testimonials[currentIndex].name}</h4>
                <p className="customer-location">{testimonials[currentIndex].location}</p>
              </div>
            </div>
          </div>
          
          <div className="slider-controls">
            <button className="slider-btn" onClick={prevTestimonial}>
              <ChevronLeft size={20} />
            </button>
            <button className="slider-btn" onClick={nextTestimonial}>
              <ChevronRight size={20} />
            </button>
          </div>
          
          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials