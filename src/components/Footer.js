import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-details">
          <h4>Contact Information</h4>
          <p>
            📍 
            <a 
              href="https://maps.app.goo.gl/kqCxBxy1C5wQwogdA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-link"
            >
              2240 Ridgewood Rd #100, Wyomissing, PA 19610
            </a>
          </p>
          <p>📞 (631) 513-6092</p>
          <p>📧 jodimichelle1976@gmail.com</p>
        </div>

        <div className="footer-newsletter">
          <h4>Stay Connected</h4>
          <p>Subscribe to receive updates on new blog posts and events.</p>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#/">Home</a></li>
            <li><a href="#/gallery">Gallery</a></li>
            <li><a href="#/contact">Contact Us</a></li>
            <li><a href="#/blog">Blog</a></li>
            <li><a href="#/clientforms">Client Forms</a></li>
          </ul>
        </div>

        <div className="footer-map">
          <h4>Visit Us</h4>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6081.897430753336!2d-75.98067082481424!3d40.343483660095316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c676b32afe1c9d%3A0xc238d43edef0a5db!2sChildren&#39;s%20Clinic%20of%20Wyomissing!5e0!3m2!1sen!2sus!4v1728940553557!5m2!1sen!2sus" 
            width="300" 
            height="200" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy"
            title="Business Location"
          ></iframe>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Beautiful Life Art Therapy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
