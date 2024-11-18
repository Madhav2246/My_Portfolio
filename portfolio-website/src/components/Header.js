import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Madhav's Portfolio</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
          <li><Link to="/skills" className="hover:text-blue-400">Skills</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
