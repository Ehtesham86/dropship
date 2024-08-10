import React from 'react';
import './Toolcard.css';

const ToolCard = ({ title }) => {
  return (
    <div className="tool-card">
      <h3>{title}</h3>
      <button>Watch Tutorial</button>
    </div>
  );
};

export default ToolCard;
