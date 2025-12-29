// src/components/SectionHeader.jsx
import React from 'react';

const SectionHeader = ({ title, description }) => {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
};

export default SectionHeader;