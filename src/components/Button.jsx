import React from 'react'
import './Button.css'

const Button = ({ text, onClick, variant = 'primary', disabled = false }) => {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button