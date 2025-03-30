import React from 'react';
import './WeekButton.css';

const scrollToSection = (id) => {
  if (id === 'top') {
    const main = document.querySelector('.Main');
    if (main) {
      main.scrollTo({ top: 0, behavior: 'smooth' });
    }
  } else {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};

const WeekButton = ({ weekNumber, isOpen, onToggle, highlightEmpty}) => {
  return (
    <div className="week-button-container">
      <button
        className="week-button"
        onClick={() => {
          onToggle();
          scrollToSection('top');
        }}
      >
        <span
            style={{ color: highlightEmpty ? 'red' : 'white', fontWeight: 'bold' }}
          >
            Week {weekNumber} / 2024
          </span>
      </button>

      {isOpen && (
        <div className="week-submenu">
          <div className="submenu-item bold" onClick={() => scrollToSection('top')}>Reflect on the Week</div>
          <div className="submenu-item" onClick={() => scrollToSection('summary')}>Summary & Follow Ups</div>
          <div className="submenu-item" onClick={() => scrollToSection('review')}>Review and Eval</div>
          <div className="submenu-item" onClick={() => scrollToSection('sanity')}>Sanity Check</div>
        </div>
      )}
    </div>
  );
};

export default WeekButton;
