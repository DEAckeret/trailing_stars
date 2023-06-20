/*import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../MainContent/MainContent.css"


function Testimonials() {
    return (
      <main>
        <Navbar />
        <Header />
        <Footer />
      </main>
    );
  }

 export default Testimonials; */

import React from "react";
import Navbar from "../Navigation/Navbar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "../MainContent/MainContent.css";

function Testimonial({ name, quote, image }) {
  return (
    <div className="testimonial">
      <img src={image} alt={name} className="testimonial__image" />
      <h3 className="testimonial__name">{name}</h3>
      <p className="testimonial__quote">"{quote}"</p>
    </div>
  );
} 

function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      quote: "I had an amazing experience with Trailing Stars. The team was extremely professional and the trip was unforgettable!",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Jane Smith",
      quote: "The outdoor adventure planned by Trailing Stars exceeded all my expectations. I would highly recommend them to anyone!",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Alice Brown",
      quote: "Trailing Stars made my trip so much more enjoyable. Their attention to detail and dedication to customer satisfaction is truly impressive.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <main>
      <Navbar />
      <Header />
      <div className="main-content">
        <h2>Testimonials</h2>
        <p>Here's what our customers have to say about their experiences with Trailing Stars:</p><br />
        <div className="testimonials-container">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Testimonials;
