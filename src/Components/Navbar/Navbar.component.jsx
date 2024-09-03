// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';


const Navbar = () => {

  return (
    <>
   
  {/* NAVBAR SECTION */}
  <nav className="bg-[#3e2723] text-white fixed top-0 left-0 w-full  z-50" data-aos="fade-down">
    
    {/* Dark brown navbar */}
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex-shrink-0" data-aos="fade-right">
           <a href="#" className="text-2xl text-[#ffcc80] font-bold">
            Logo
          </a> 
        </div>

        {/* Hamburger Icon (for mobile) */}
        <div className="md:hidden" data-aos="fade-left">
          <button
            id="menu-button"
            className="text-[#bca07d] hover:text-white focus:outline-none focus:text-white"
          >
            {/* Light golden hover */}
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {/* Navigation Links (for larger screens) */}
        <div className="hidden md:flex space-x-8" data-aos="fade-down">
          <Link to='/' className="text-base font-medium hover:text-[#ffcc80]">
            Home
          </Link>
          {/* Soft orange hover */}
          <a href="#" className="text-base font-medium hover:text-[#ffcc80]">
            About
          </a>
          <a href="#" className="text-base font-medium hover:text-[#ffcc80]">
            Services
          </a>
          <a href="#" className="text-base font-medium hover:text-[#ffcc80]">
            Contact
          </a>
        </div>
        {/* Sign In / Sign Up (for larger screens) */}
        <div className="hidden md:flex space-x-4 " data-aos="fade-left">
          <Link to='/auth/signin'
            className="text-base font-medium hover:text-[#ffcc80] mt-2">
            Sign In
          </Link>

          <Link to='/auth/signup'
            className="px-4 py-2 bg-[#ffcc80] text-white rounded-md font-medium hover:bg-[#3e2723]">
            Sign Up
          </Link>

          {/* Dark brown button */}
        </div>
      </div>
    </div>
    {/* Mobile Menu */}
    <div
      id="mobile-menu"
      className="hidden md:hidden bg-[#3e2723] px-4 py-4 space-y-2" data-aos="fade-down"
    >
      <a href="#" className="block text-base font-medium hover:text-[#ffcc80]">
        Home
      </a>
      <a href="#" className="block text-base font-medium hover:text-[#ffcc80]">
        About
      </a>
      <a href="#" className="block text-base font-medium hover:text-[#ffcc80]">
        Services
      </a>
      <a href="#" className="block text-base font-medium hover:text-[#ffcc80]">
        Contact
      </a>
      <a href="#" className="block text-base font-medium hover:text-[#bca07d]">
        Sign In
      </a>
      <a
        href="#"
        className="block px-4 py-2 bg-[#5d4037] text-white rounded-md font-medium hover:bg-[#3e2723]"
      >
        Sign Up
      </a>
    </div>
  </nav>
</>
  )
  
};

export default Navbar;
