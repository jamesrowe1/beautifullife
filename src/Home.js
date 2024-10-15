import React from 'react';
import Benefits from './components/BenefitsSection'; // Import Benefits section
import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <h1>Beautiful Life Art Therapy</h1>
      <Benefits /> {/* Add Benefits section here */}
    </div>
  );
};

export default Home;
