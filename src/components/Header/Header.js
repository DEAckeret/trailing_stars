import React from 'react';
import './Header.css';
import BookingBanner from '../BookingBanner/BookingBanner';
import { useLocation } from 'react-router-dom';

const Star = ({ size, top, left }) => (
  <div className={`star ${size}`} style={{ top, left }}></div>
);

const generateStars = (count) => {
  const stars = [];
  const sizes = ['small', 'medium', 'large'];

  for (let i = 0; i < count; i++) {
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    const top = Math.floor(Math.random() * 100) + '%';
    const left = Math.floor(Math.random() * 100) + '%';

    stars.push(<Star key={i} size={size} top={top} left={left} />);
  }

  return stars;
};

function Header() {
  const location = useLocation();
  const stars = generateStars(50); // Set the desired number of stars

  let title;
  let paragraph;
  switch (location.pathname) {
    case '/':
      title = 'Discover the Beauty of the Great Outdoors with Trailing Stars';
      paragraph = 'Book Your Next Outdoor Adventure Today';
      break;
    case '/about':
      title = 'About Us';
      paragraph = '';
      break;
    case '/contact':
      title = 'Contact Us';
      paragraph = '';
      break;
    case '/testimonials':
      title = 'Testimonials';
      paragraph = '';
      break;
    case '/book_adventure':
      title = 'Book Adventure';
      paragraph = '';
      break;
    case '/blog':
      title = 'Blog';
      paragraph = '';
      break;
    case '/artificial_supernova':
      title = 'Artificial Supernova';
      paragraph = '';
      break;
    default:
      title = 'Trailing Stars';
  }

  return (
    <div>
      <header className="header">
        {stars}
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </header>
      <BookingBanner />
    </div>
  );
}

export default Header;





/* import "./Header.css"
import BookingBanner from "../BookingBanner/BookingBanner";
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  let title;
  let paragraph;
  switch (location.pathname) {
    case '/':
      title = 'Discover the Beauty of the Great Outdoors with Trailing Stars'
      paragraph = 'Book Your Next Outdoor Adventure Today';
      break;
    case '/about':
      title = 'About Us'
      paragraph = '';
      break;
    case '/contact':
      title = 'Contact Us'
      paragraph = '';
      break;
    case '/testimonials':
      title = 'Testimonials'
      paragraph = '';
      break;
    case '/book_adventure':
      title = 'Book Adventure'
      paragraph = '';
      break;
    case '/blog':
      title = 'Blog'
      paragraph = '';
      break;
    case '/artificial_supernova':
      title = 'Artificial Supernova'
      paragraph = '';
      break;
    default:
      title = 'Trailing Stars';
  }

  return (
    <div>
      <header className="header">
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <div className="star small" style={{ top: '10px', left: '20px' }}></div>
        <div className="star medium" style={{ top: '30px', left: '50px' }}></div>
        <div className="star large" style={{ top: '50px', left: '80px' }}></div>
      </header>
      <BookingBanner />
    </div>
  );
}

export default Header; */

