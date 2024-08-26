import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


   const handleToggle = () => setIsOpen(!isOpen);

    useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
    return () => {
      document.body.style.overflow = 'auto'; // Clean up on unmount
    };
  }, [isOpen]);


  return (
      <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Brand Name */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold text-gray-700">
            Handyman
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow justify-between items-center space-x-8">
          <div className="flex-grow flex items-center justify-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-teal-500 relative group transition-colors duration-300"
            >
              Home
              <span className="block h-0.5 bg-teal-500 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-teal-500 relative group transition-colors duration-300"
            >
              About
              <span className="block h-0.5 bg-teal-500 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-teal-500 relative group transition-colors duration-300"
            >
              Services
              <span className="block h-0.5 bg-teal-500 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-teal-500 relative group transition-colors duration-300"
            >
              Contact
              <span className="block h-0.5 bg-teal-500 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Authentication Links */}
          <div className="flex items-center space-x-4">
            <Link
              to="/auth/signin"
             className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-200"
            >
              Sign In
            </Link>
            <Link
              to="/auth/signup"
              className="px-4 py-2 text-teal-500 bg-white border rounded-lg hover:bg-teal-50 transition-colors duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Hamburger Icon */}
        <button onClick={handleToggle} className="md:hidden p-2">
          {isOpen ? <XMarkIcon className="h-6 w-6 text-gray-700" /> : <Bars3Icon className="h-6 w-6 text-gray-700" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="relative h-full w-4/5 max-w-xs bg-gray-900 text-white flex flex-col">
          {/* Close Button */}
          <button onClick={handleToggle} className="absolute top-4 right-4 text-white">
            <XMarkIcon className="h-8 w-8" />
          </button>
          <div className="flex flex-col items-center justify-center flex-grow space-y-4 mt-16">
            <Link
              to="/"
              className="text-xl hover:text-teal-400 relative group transition-colors duration-300"
              onClick={handleToggle}
            >
              Home
              <span className="block h-0.5 bg-teal-400 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/about"
              className="text-xl hover:text-teal-400 relative group transition-colors duration-300"
              onClick={handleToggle}
            >
              About
              <span className="block h-0.5 bg-teal-400 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/services"
              className="text-xl hover:text-teal-400 relative group transition-colors duration-300"
              onClick={handleToggle}
            >
              Services
              <span className="block h-0.5 bg-teal-400 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/contact"
              className="text-xl hover:text-teal-400 relative group transition-colors duration-300"
              onClick={handleToggle}
            >
              Contact
              <span className="block h-0.5 bg-blue-400 absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/auth/signin"
             className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition duration-200"
            >
              Sign In
            </Link>
            <Link
              to="/auth/signup"
              className="px-4 py-2 text-teal-500 bg-white border rounded-lg hover:bg-teal-50 transition-colors duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>

);
};

export default Navbar;
