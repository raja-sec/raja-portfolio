import React from 'react';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 mt-16 text-center min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-9xl font-bold text-accent mb-4">404</h1>
      <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <Button to="/">Go Back Home</Button>
    </div>
  );
}