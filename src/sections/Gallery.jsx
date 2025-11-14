import React from 'react'
import GalleryItem from '../components/GalleryItem'
import './Gallery.css'

// Import images
import saffronFlowers from '../assets/images/Saffron flowers in bloom.png'
import kashmirFields from '../assets/images/Kashmir valley fields.png'
import harvestingProcess from '../assets/images/Harvesting process.png'
import saffronDrying from '../assets/images/Saffron threads dying.png'
import premiumPackage from '../assets/images/Premium package.png'
import pureSaffron from '../assets/images/Pure Saffron threads.png'

const Gallery = () => {
  const galleryImages = [
    { id: 1, image: saffronFlowers, alt: "Saffron flowers in bloom" },
    { id: 2, image: kashmirFields, alt: "Kashmir valley fields" },
    { id: 3, image: harvestingProcess, alt: "Harvesting process" },
    { id: 4, image: saffronDrying, alt: "Saffron threads drying" },
    { id: 5, image: premiumPackage, alt: "Premium packaging" },
    { id: 6, image: pureSaffron, alt: "Pure saffron threads" }
  ]

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <h2 className="gallery-title">From Farm to Table</h2>
        <p className="gallery-subtitle">
          Witness the journey of our premium saffron from the beautiful Kashmir valleys to your kitchen
        </p>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <GalleryItem
              key={image.id}
              image={image.image}
              alt={image.alt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery