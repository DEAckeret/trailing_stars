import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Footer from '../Footer/Footer';
import Navbar from '../Navigation/Navbar';
import PopupModal from '../Modal/Modal';

function Home() {
  const [showModal, setShowModal] = useState(true);

  /*useEffect(() => {
    localStorage.setItem("isDismissed", "false");
  }, []); */
  // sets the value of isDismissed to false in localStorage when the page loads.  

  const handleModalClose = () => {
    setShowModal(false);
    // store the user's preference not to show the modal again using localStorage or another method
  };
  

  // check if the user has dismissed the modal before, and only show it if they haven't
  const shouldShowModal = !localStorage.getItem('dismissedModal');

  return (
    <div>
      <Navbar />
      <Header />
        <div>
          <main className='main-content'>
            <h2 className='main-content h2'>A Galaxy Awaits... </h2>
            <p className='main-content p'>This is the main content section of the page.</p>
          </main>
          <span className='h1'>
            <h1>more content!</h1>
          </span>
          <span className='main-content'>
          <p className='main-content p'>Welcome to Trailing Stars, where the beauty of Montana meets the magic of the cosmos. 
              Our outdoor excursions will take you on a journey through the rugged and wild landscapes of Montana, 
              where you'll explore the mysteries of the universe under a star-filled sky. Let our expert guides 
              show you the wonders of the constellations, and help you discover the secrets of the cosmos. 
              With Trailing Stars, you'll experience the thrill of adventure and the magic of the night sky, 
              all against the breathtaking backdrop of Montana's majestic mountains and rolling hills.
          </p>
          </span>
        </div>
      <Footer />
      {shouldShowModal && (
        <PopupModal handleClose={handleModalClose}>
          {/* modal content goes here */}
        </PopupModal>
      )}
    </div>
  );
}

export default Home;
