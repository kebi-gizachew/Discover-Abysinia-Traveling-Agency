// src/components/AccordionItem.jsx
import React, { useState } from 'react';
import '../styles/FAQ.css';

const AccordionItem = ({ id, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <input 
        type="checkbox" 
        id={id} 
        className="accordion-toggle"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <label 
        htmlFor={id} 
        className="accordion-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <i className={`ri-add-line accordion-icon ${isOpen ? 'open' : ''}`}></i>
      </label>
      <div className="accordion-content" style={{ 
        maxHeight: isOpen ? '300px' : '0',
        padding: isOpen ? '25px 25px' : '0 25px'
      }}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;