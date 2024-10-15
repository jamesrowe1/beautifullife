import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home.js';         // Your homepage component
import Blog from './Blog.js';         // Blog component
import GalleryPage from './GalleryPage.js'; // Gallery component
import ContactPage from './ContactPage.js'; // Contact Form component
import './App.css'
import Footer from './components/Footer.js'; // Import Footer
import ClientForms from './components/ClientForms.js'; // Import the Paperwork page

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/clientforms">Client Forms</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/clientforms" element={<ClientForms />} />
        </Routes>
        <Footer /> {/* Add Footer to the app layout */}
      </div>
    </Router>
  );
}

export default App;
