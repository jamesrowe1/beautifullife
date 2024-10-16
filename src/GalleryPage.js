import React from 'react';
import './GalleryPage.css'

const GalleryPage = () => {
  const images = [
    `${process.env.PUBLIC_URL}/images/art1.jpg`,  // Replace with actual image paths
    `${process.env.PUBLIC_URL}/images/art2.jpg`,
    `${process.env.PUBLIC_URL}/images/art3.jpg`,
  ];

  return (
    <div className="gallery-page">
      <h2>Art Gallery</h2>
      <div className="gallery">
        {images.map((img, index) => (
          <img src={img} alt={`Gallery item ${index + 1}`} key={index} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
