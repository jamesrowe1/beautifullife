import React from 'react';
import './GalleryPage.css'

const GalleryPage = () => {
  const images = [
    '/image1.jpg',  // Replace with actual image paths
    '/image2.jpg',
    '/image3.jpg',
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
