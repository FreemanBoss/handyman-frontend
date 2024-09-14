import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { performLogout } from '../../features/auth/authThunks';
import { LOGOUT_SUCCESS, LOGOUT_FAILED } from '../../helpers/systemMessages';
import { toast } from 'react-toastify';
import { FaUser, FaBook, FaSignOutAlt } from 'react-icons/fa';
import '../../index.css';

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAvatarMenuOpen, setAvatarMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await dispatch(performLogout());
      toast.success(LOGOUT_SUCCESS); // Show success toast
      setTimeout(() => {
        navigate('/auth/signin'); // Navigate to login page after a short delay
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error(LOGOUT_FAILED, {
        position: 'top-right',
        autoClose: 2000, // Close the toast after 2 seconds
      });
    }
  };

  return (
    <>
      {/* NAVBAR SECTION */}
      <nav className="bg-[#3e2723] text-white fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-4xl text-[#ffcc80] font-bold">
                HANDYMAN
              </a>
            </div>
            {/* Hamburger Icon (for mobile) */}
            <div className="md:hidden">
              <button
                id="menu-button"
                className="text-[#bca07d] hover:text-white focus:outline-none focus:text-white"
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              >
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
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-base font-medium hover:text-[#ffcc80]">
                Home
              </Link>
              <a href="/about-us" className="text-base font-medium hover:text-[#ffcc80]">
                About
              </a>
              <a href="/craftsmen" className="text-base font-medium hover:text-[#ffcc80]">
               Craftsmen
              </a>
              <a href="#" className="text-base font-medium hover:text-[#ffcc80]">
                Contact
              </a>
              {/* Conditional Rendering of Avatar and Auth Links */}
              {isAuthenticated ? (
                <div className="relative group">
                  <img
                    src={user?.avatarUrl || '/images/avata.png'} // Use the image from the public folder
                    alt="User Avatar"
                    className="w-16 h-16 rounded-full cursor-pointer" // Increased size
                    onClick={() => setAvatarMenuOpen(!isAvatarMenuOpen)}
                  />
                  <div
                    className={`absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg transition-opacity duration-300 ${
                      isAvatarMenuOpen ? 'opacity-100' : 'opacity-0'
                    } ${isAvatarMenuOpen ? 'block' : 'hidden'} ${
                      isAvatarMenuOpen ? 'translate-y-2' : ''
                    }`}
                    style={{ top: '100%', right: '0%' }}
                    onMouseLeave={() => setAvatarMenuOpen(false)}
                  >
                    <Link
                      to="/profile"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <FaUser className="mr-2" /> Profile
                    </Link>
                    <Link
                      to="/bookings"
                      className="flex items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                    >
                      <FaBook className="mr-2" /> Bookings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 bg-[#ffcc80] text-black rounded-md font-medium hover:bg-[#ffb74d] transition-colors duration-200 flex items-center justify-start"
                    >
                      <FaSignOutAlt className="mr-2" /> Logout
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <Link to="/auth/signin" className="text-base font-medium hover:text-[#ffcc80] mt-2">
                    Sign In
                  </Link>
                  <Link
                    to="/auth/signup"
                    className="px-4 py-2 bg-[#ffcc80] text-white rounded-md font-medium hover:bg-[#3e2723]"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden bg-[#3e2723] px-4 py-4 space-y-2 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <a href="#" className="block text-base font-medium hover:text-[#ffcc80]">
            Home
          </a>
          <a href="/about-us" className="block text-base font-medium hover:text-[#ffcc80]">
            About
          </a>
          <a href="#" className="block text-base font-medium hover:text-[#ffcc80]">
            Services
          </a>
          <a href="#" className="block text-base font-medium hover:text-[#ffcc80]">
            Contact
          </a>
          {isAuthenticated ? (
            <div className="relative group">
              <img
                src={user?.avatarUrl || '/images/avata.png'} // Use the image from the public folder
                alt="User Avatar"
                className="w-12 h-12 rounded-full cursor-pointer" // Increased size
                onClick={() => setAvatarMenuOpen(!isAvatarMenuOpen)}
              />
              <div
                className={`absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg transition-opacity duration-300 ${
                  isAvatarMenuOpen ? 'opacity-100' : 'opacity-0'
                } ${isAvatarMenuOpen ? 'block' : 'hidden'} ${
                  isAvatarMenuOpen ? 'translate-y-2' : ''
                }`}
                style={{ top: '100%', right: '0%' }}
                onMouseLeave={() => setAvatarMenuOpen(false)}
              >
                <Link
                  to="/profile"
                  className="flex items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                >
                  <FaUser className="mr-2" /> Profile
                </Link>
                <Link
                  to="/bookings"
                  className="flex items-center px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
                >
                  <FaBook className="mr-2" /> Bookings
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 bg-[#ffcc80] text-black rounded-md font-medium hover:bg-[#ffb74d] transition-colors duration-200 flex items-center justify-start"
                >
                  <FaSignOutAlt className="mr-2" /> Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <a href="/auth/signin" className="block text-base font-medium hover:text-[#ffcc80]">
                Sign In
              </a>
              <a
                href="/auth/signup"
                className="block px-4 py-2 bg-[#ffcc80] text-white rounded-md font-medium hover:bg-[#3e2723]"
              >
                Sign Up
              </a>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
