// src/components/Testimonials.jsx
import React from 'react';
import SectionHeader from './sectionHeader';
import TestimonialCard from './TestimonialCards';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Discover Abysinia showed me parts of my own country I never knew existed. The cultural tours were authentic and deeply moving.",
      name: "Abebe Bekele",
      location: "Addis Ababa, Ethiopia",
      image: "../images/Screenshot (1617).png"
    },
    {
      id: 2,
      text: "From the Simien Mountains to Lalibela, every detail was perfectly organized.It was one of the best travel experience in Ethiopia!",
      name: "Hirut Tadesse",
      location: "Gondar, Ethiopia",
      image: "../images/Screenshot (1618).png"
    },
    {
      id: 3,
      text: "The guides were knowledgeable, passionate, and flexible. They made our family trip through Southern Ethiopia unforgettable.",
      name: "Dawit Gebre",
      location: "Hawassa, Ethiopia",
      image: "../images/Screenshot (1619).png"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <SectionHeader 
          title="Traveler Experiences"
          description="Hear from adventurers who discovered Ethiopia with us"
        />
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id}
              text={testimonial.text}
              name={testimonial.name}
              location={testimonial.location}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;