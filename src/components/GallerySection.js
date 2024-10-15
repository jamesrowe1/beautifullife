import React from 'react';

function GallerySection() {
  const images = [
    '/images/art1.jpg', // Replace with actual image paths
    '/images/art2.jpg',
    '/images/art3.jpg',
    '/images/art4.jpg',
    '/images/art5.jpg',
    '/images/art6.jpg'
  ];

  return (
    <div className="gallery-section" id="gallery">
      <h2>Our Little Artists' Creations</h2>
      <p>Take a look at some of the beautiful art pieces created by children during therapy sessions.</p>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Art piece ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GallerySection;
