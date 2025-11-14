import React from 'react'
import Button from './Button'
import './Card.css'

const Card = ({ image, title, description, price, quantity, onBuyClick }) => {
  return (
    <div className="card">
      <div className="card-image">
        <span className="card-emoji">{image}</span>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        {quantity && <div className="card-quantity">Quantity: {quantity}</div>}
        <div className="card-price">{price}</div>
        <div className="card-actions">
          <Button 
            text="Buy Now" 
            onClick={onBuyClick}
            variant="primary"
          />
        </div>
      </div>
    </div>
  )
}

export default Card