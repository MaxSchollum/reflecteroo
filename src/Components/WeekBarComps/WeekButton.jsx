import React, { useState } from 'react';

const WeekButton = ({ weekNumber }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`week-button-container ${isOpen ? 'open' : ''}`}>
      <button className="week-button" onClick={toggleOpen}>
        Week {weekNumber} / 24
        <div className={`arrow ${isOpen ? 'rotate' : ''}`}></div>
      </button>
      {/* Placeholder for the additional buttons */}
      <div className={`additional-buttons ${isOpen ? 'slide-in' : ''}`}>
        {/* Additional buttons will go here */}
      </div>
    </div>
  );
};

export default WeekButton;
