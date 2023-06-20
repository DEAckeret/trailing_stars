import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Testimonials from './components/Pages/Testimonials'; 
import BookAdventure from './components/Pages/BookAdventure';
import ArtificialSupernova from './components/Pages/ArtificialSupernova';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/book_adventure" element={<BookAdventure />} />
        <Route exact path="/testimonials" element={<Testimonials />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/artificial_supernova" element={<ArtificialSupernova />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;



