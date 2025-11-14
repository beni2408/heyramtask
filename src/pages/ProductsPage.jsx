import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import './ProductsPage.css'

const ProductsPage = () => {
  const navigate = useNavigate()
  
  const products = [
    {
      id: 1,
      name: "Indian Kashmiri Saffron",
      description: "Premium quality saffron from the valleys of Kashmir",
      price: "₹3,400",
      quantity: "1 kg",
      image: "🌸"
    },
    {
      id: 2,
      name: "Spanish Saffron",
      description: "High-grade Spanish saffron with rich aroma and color",
      price: "₹3,600",
      quantity: "1 kg",
      image: "🇪🇸"
    }
  ]

  const handleBuyNow = (product) => {
    // Add to cart and navigate to cart page
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]')
    const existingItem = cartItems.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cartItems.push({ ...product, cartQuantity: 1 })
    }
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    navigate('/cart')
  }

  const goBack = () => {
    navigate('/home')
  }

  return (
    <div className="products-page">
      <Navbar />
      
      <section className="products-hero">
        <div className="products-hero-container">
          <button onClick={goBack} className="back-button">
            ← Back to Home
          </button>
          <h1 className="products-hero-title">OUR PREMIUM SAFFRON COLLECTION</h1>
          <p className="products-hero-subtitle">
            Discover the finest quality saffron products, hand-picked from Kashmir valleys
          </p>
        </div>
      </section>

      <section className="products-catalog">
        <div className="products-catalog-container">
          <div className="products-grid">
            {products.map((product) => (
              <Card
                key={product.id}
                image={product.image}
                title={product.name}
                description={product.description}
                price={product.price}
                quantity={product.quantity}
                onBuyClick={() => handleBuyNow(product)}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ProductsPage