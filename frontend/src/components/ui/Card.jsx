import React from 'react';

export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-accent/50 transition-all duration-200 ${className}`}>
      {children}
    </div>
  );
}
