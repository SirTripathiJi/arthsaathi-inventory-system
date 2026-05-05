import React from 'react';

function Card({ children, className = '' }) {
  return (
    <div className={`dash-card ${className}`}>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default Card;
