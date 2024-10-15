import React from 'react';
import './BenefitsSection.css';

const Benefits = () => {
  const benefitsData = [
    {
      icon: '/images/relaxation-icon.svg',
      title: 'Improves Relaxation',
      description: 'Art therapy helps children express emotions and unwind in a calming, creative environment.'
    },
    {
      icon: '/images/self-esteem-icon.svg',
      title: 'Boosts Self-Esteem',
      description: 'Engaging in creative activities builds confidence and encourages self-expression.'
    },
    {
      icon: '/images/emotion-icon.svg',
      title: 'Enhances Emotional Expression',
      description: 'Children learn to channel their emotions into artistic works, helping them process feelings in a positive way.'
    },
    {
      icon: '/images/creativity-icon.svg',
      title: 'Stimulates Creativity',
      description: 'Our therapy sessions encourage imagination and originality, fostering a love for art.'
    },
    // Add more benefits as needed
  ];

  return (
    <div className="benefits-section">
      {benefitsData.map((benefit, index) => (
        <div key={index} className="benefit-item">
          <img src={benefit.icon} alt={benefit.title} className="benefit-icon" />
          <h3 className="benefit-title">{benefit.title}</h3>
          <p className="benefit-description">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
