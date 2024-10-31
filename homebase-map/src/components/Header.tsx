import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-red-600 text-2xl font-bold">HomeBase</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/buy" className="text-gray-700 hover:text-red-600">Buy</Link></li>
            <li><Link to="/rent" className="text-gray-700 hover:text-red-600">Rent</Link></li>
            <li><Link to="/sell" className="text-gray-700 hover:text-red-600">Sell</Link></li>
            <li><Link to="/mortgage" className="text-gray-700 hover:text-red-600">Mortgage</Link></li>
          </ul>
        </nav>
        <div>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
export {};
