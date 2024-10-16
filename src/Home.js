import React from 'react';
import Benefits from './components/BenefitsSection'; // Import Benefits section
import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <h1>Beautiful Life Art Therapy</h1><img
        src={`${process.env.PUBLIC_URL}/images/happy-kids.jpg`}
        alt="Art therapy"
        className="homepage-image"
      />
      <Benefits /> {/* Add Benefits section here */}
    </div>
  );
};

export default Home;
