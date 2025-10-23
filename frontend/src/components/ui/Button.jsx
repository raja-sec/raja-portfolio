import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
}) {
  const baseClasses =
    'px-6 py-3 rounded-lg font-medium transition-all duration-200 inline-block text-center';

  const variants = {
    primary: 'bg-accent hover:bg-accent/90 text-white',
    secondary: 'bg-gray-800 hover:bg-gray-700 text-white',
    outline:
      'border-2 border-accent text-accent hover:bg-accent hover:text-white',
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  // Internal navigation (React Router)
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  // External links
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  // Regular button (default)
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
