import React, { useState } from 'react';
import './ContactPage.css'

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data (e.g., send to server)
    alert('Form submitted!');  // Temporary alert for testing
    setFormData({ name: '', email: '', message: '' });  // Reset form
  };

  return (
    
    <div className="contact-page">
      <h2>Contact Us</h2>
      <iframe title="contactform" src="https://docs.google.com/forms/d/e/1FAIpQLSdfE3HQxVTEJ0mNrSAa_VDFJxNgNe3qOxkO40n9EFwke0nPRA/viewform?embedded=true" 
      width="640" 
      height="687" 
      frameborder="0" 
      marginheight="0" 
      marginwidth="0"
      scrolling="no">Loading…</iframe>
      {/* <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form> */}
    </div>
  );
};

export default ContactPage;
