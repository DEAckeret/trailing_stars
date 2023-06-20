import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  return (
    <nav className={`navbar ${showNavbar ? 'navbar--visible' : ''}`}>
      <ul className="navbar__list">
        <li className="navbar__item"><a href="/">Home</a></li>
        <li className="navbar__item"><a href="/about">About</a></li>
        <li className="navbar__item"><a href="/testimonials">Testimonials</a></li>
        <li className="navbar__item"><a href="/book_adventure">Book Adventure</a></li>
        <li className="navbar__item"><a href="/contact">Contact</a></li>
        <li className='navbar__item' id='nav-link-glow'><a href='/artificial_supernova'>Artifical Supernova</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

