import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import './CartPage.css'

const CartPage = () => {
  const navigate = useNavigate()
  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems') || '[]')
    setCartItems(items)
    calculateTotal(items)
  }, [])

  const calculateTotal = (items) => {
    const totalAmount = items.reduce((sum, item) => {
      const price = parseInt(item.price.replace('₹', '').replace(',', ''))
      return sum + (price * item.cartQuantity)
    }, 0)
    setTotal(totalAmount)
  }

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id)
      return
    }
    
    const updatedItems = cartItems.map(item =>
      item.id === id ? { ...item, cartQuantity: newQuantity } : item
    )
    setCartItems(updatedItems)
    localStorage.setItem('cartItems', JSON.stringify(updatedItems))
    calculateTotal(updatedItems)
  }

  const removeItem = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id)
    setCartItems(updatedItems)
    localStorage.setItem('cartItems', JSON.stringify(updatedItems))
    calculateTotal(updatedItems)
  }

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!')
      return
    }

    const options = {
      key: "rzp_test_1234567890",
      amount: total * 100,
      currency: "INR",
      name: "Z Princess Saffron",
      description: "Saffron Purchase",
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`)
        // Clear cart after successful payment
        localStorage.removeItem('cartItems')
        setCartItems([])
        setTotal(0)
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#FF8C00"
      }
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const goBack = () => {
    navigate('/home')
  }

  return (
    <div className="cart-page">
      <Navbar />
      
      <section className="cart-hero">
        <div className="cart-hero-container">
          <button onClick={goBack} className="back-button">
            ← Back to Home
          </button>
          <h1 className="cart-hero-title">YOUR CART</h1>
          <p className="cart-hero-subtitle">
            Review your selected saffron products
          </p>
        </div>
      </section>

      <section className="cart-content">
        <div className="cart-container">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <div className="empty-cart-icon">🛒</div>
              <h2>Your cart is empty</h2>
              <p>Add some premium saffron to your cart to get started</p>
              <Button 
                text="Continue Shopping" 
                onClick={() => navigate('/products')}
                variant="primary"
              />
            </div>
          ) : (
            <div className="cart-items-section">
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <span className="item-emoji">{item.image}</span>
                    </div>
                    <div className="item-details">
                      <h3 className="item-name">{item.name}</h3>
                      <p className="item-description">{item.description}</p>
                      <p className="item-quantity-info">Package: {item.quantity}</p>
                      <p className="item-price">₹{parseInt(item.price.replace('₹', '').replace(',', '')).toLocaleString()}</p>
                    </div>
                    <div className="item-controls">
                      <div className="quantity-controls">
                        <button 
                          onClick={() => updateQuantity(item.id, item.cartQuantity - 1)}
                          className="quantity-btn"
                        >
                          -
                        </button>
                        <span className="quantity-display">{item.cartQuantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.cartQuantity + 1)}
                          className="quantity-btn"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="remove-btn"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="cart-summary">
                <div className="summary-card">
                  <h3>Order Summary</h3>
                  <div className="summary-line">
                    <span>Items ({cartItems.reduce((sum, item) => sum + item.cartQuantity, 0)})</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                  <div className="summary-line">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="summary-line total-line">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                  <Button 
                    text="Proceed to Checkout" 
                    onClick={handleCheckout}
                    variant="primary"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CartPage