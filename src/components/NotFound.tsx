import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800">404</h1>
      <p className="text-lg text-gray-600">Oops! Can't find the page you're looking for.</p>
      <Link to="/" className="mt-4 text-blue-500 hover:underline">
      Return to main page
      </Link>
    </div>
  );
};

export default NotFound;