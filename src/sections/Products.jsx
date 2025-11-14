import React from 'react'
import Button from '../components/Button'
import './Products.css'

const Products = () => {
  const navigateToProducts = () => {
    window.location.href = '/products'
  }

  return (
    <section id="products" className="products">
      <div className="products-container">
        <h2 className="products-title">OUR PRODUCTS</h2>
        <div className="products-cta">
          <Button 
            text="DISCOVER NOW" 
            onClick={navigateToProducts}
            variant="primary"
          />
        </div>
        <div className="products-preview">
          <p className="products-preview-text">
            Explore our premium collection of authentic Kashmir saffron products
          </p>
          <div className="products-preview-icons">
            <span className="preview-icon">🌸</span>
            <span className="preview-icon">✨</span>
            <span className="preview-icon">🎁</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products