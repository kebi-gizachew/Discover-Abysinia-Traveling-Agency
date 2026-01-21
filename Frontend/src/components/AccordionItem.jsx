import React from 'react';
import PropTypes from 'prop-types';

const AccordionItem = ({ id, question, answer, isOpen, onToggle }) => {
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div className={`accordion-item ${isOpen ? 'active' : ''}`}>
      <div 
        className="accordion-header"
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={`content-${id}`}
      >
        <h3 className="accordion-question">
          {question}
        </h3>
        <span className="accordion-icon">
          <svg 
            className={`icon ${isOpen ? 'rotate' : ''}`} 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path 
              d="M5 7.5L10 12.5L15 7.5" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      
      <div 
        id={`content-${id}`}
        className={`accordion-content ${isOpen ? 'open' : ''}`}
        role="region"
        aria-labelledby={`header-${id}`}
      >
        <div className="accordion-answer">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default AccordionItem;