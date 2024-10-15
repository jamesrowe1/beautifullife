import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="overlay">
        <h1 className="hero-title">Nurture Your Child’s Creativity</h1>
        <p className="hero-subtitle">
          At our Art Therapy Studio, we encourage healing through creative expression. 
          Art is more than just fun—it’s a way for children to process emotions and find calm.
        </p>
        <a href="#benefits" className="cta-button">Learn More</a>
      </div>
    </div>
  );
}

export default HeroSection;
