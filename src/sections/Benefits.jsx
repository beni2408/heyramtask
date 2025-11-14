import React from 'react'
import './Benefits.css'

const Benefits = () => {
  const benefits = [
    {
      icon: "🔍",
      title: "Transparency",
      description: "We provide detailed information about the origin and processing of our saffron, so you know exactly what you're buying."
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "We continuously explore new ways to enhance the quality and usability of our saffron, ensuring we stay ahead of the market."
    },
    {
      icon: "❤️",
      title: "Passion",
      description: "Our passion for saffron drives us to maintain the highest standards and share this incredible spice with the world."
    }
  ]

  return (
    <section id="benefits" className="benefits">
      <div className="benefits-container">
        <h2 className="benefits-title">WHAT SET US APART</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <div className="benefit-icon">
                {benefit.icon}
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits