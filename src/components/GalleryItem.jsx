import React from 'react'
import './GalleryItem.css'

const GalleryItem = ({ image, alt }) => {
  return (
    <div className="gallery-item">
      <div className="gallery-image">
        <img src={image} alt={alt} className="gallery-img" />
      </div>
      <p className="gallery-caption">{alt}</p>
    </div>
  )
}

export default GalleryItem