// src/components/TestimonialCard.jsx
import React from 'react';
import '../styles/Testimonials.css';

const TestimonialCard = ({ text, name, location, image }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <p className="testimonial-text">{text}</p>
      </div>
      <div className="testimonial-author">
        <img 
          src={image} 
          alt={name}
          loading="lazy"
        />
        <div>
          <h4>{name}</h4>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;