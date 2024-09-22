import { useEffect } from 'react';
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker, HiOutlineUser } from 'react-icons/hi';
import { BiTime } from 'react-icons/bi';
import { formatWorkingHours } from '../../helpers/timeFormat';
import PropTypes from 'prop-types';

const CraftsmanModal = ({ craftsman, onClose }) => {
  useEffect(() => {
    // Disable scrolling on body
    document.body.style.overflow = 'hidden';

    // Enable scrolling on body when the component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl relative p-6 mx-4 sm:mx-8">
        <button 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-3xl font-bold" 
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Profile Image */}
          <img 
            className="w-32 h-32 rounded-full border-4 border-teal-600 mb-6 md:mb-0 md:mr-6"
            src={craftsman.user.profilePicture || '/images/electri.jpg'}
            alt={craftsman.user.userName}
          />
          {/* Content Section */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-2 text-center md:text-left">{craftsman.user.userName}</h2>
            <div className="mb-4 text-center md:text-left">
              <p className="text-gray-700 text-xl mb-2">{craftsman.experience} years of experience</p>
              <p className="text-gray-600 text-base mb-2 flex items-center justify-center md:justify-start gap-2">
                            <BiTime className="text-teal-600" />Working Hours: {formatWorkingHours(craftsman.isAvailable)}

              </p>
              
              <p className="text-gray-600 text-base mb-2 flex items-center justify-center md:justify-start gap-2">
                <HiOutlineUser className="text-teal-600" /> Skills: {craftsman.skillSet}
              </p>
              {craftsman.certifications && (
                <p className="text-gray-600 text-base mb-2 flex items-center justify-center md:justify-start gap-2">
                  <HiOutlineUser className="text-teal-600" /> Certifications: {craftsman.certifications}
                </p>
              )}
            </div>
            {/* Personal and Contact Details */}
            <div className="flex flex-col md:flex-row justify-between">
              {/* Personal Details */}
              <div className="flex-1 mb-4 md:mb-0">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Details</h3>
                <div className="flex flex-col space-y-2 text-gray-600 text-base">
                  <div className="flex items-center gap-2">
                    <HiOutlineUser className="text-teal-600" />
                    <span>First Name: {craftsman.user.firstName || 'N/A'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiOutlineUser className="text-teal-600" />
                    <span>Last Name: {craftsman.user.lastName || 'N/A'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiOutlineUser className="text-teal-600" />
                    <span>Language: {craftsman.user.languagePreference || 'N/A'}</span>
                  </div>
                </div>
              </div>
              {/* Contact Details */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Details</h3>
                <div className="flex flex-col space-y-2 text-gray-600 text-base">
                  <div className="flex items-center gap-2">
                    <HiOutlinePhone className="text-teal-600" />
                    <span>Phone Number: {craftsman.user.phoneNumber || 'N/A'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiOutlineLocationMarker className="text-teal-600" />
                    <span>Address: {craftsman.user.address || 'N/A'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiOutlineMail className="text-teal-600" />
                    <span>Email: {craftsman.user.email || 'N/A'}</span>
                  </div>
                </div>
              </div>
            </div>
            <button 
              className="bg-teal-600 text-white py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors duration-300 mt-6 w-full"
              onClick={() => alert('Booking functionality not implemented yet')}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



CraftsmanModal.propTypes = {
  craftsman: PropTypes.shape({
    user: PropTypes.shape({
      profilePicture: PropTypes.string,
      userName: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      languagePreference: PropTypes.string,
      phoneNumber: PropTypes.string,
      address: PropTypes.string,
      email: PropTypes.string,
    }),
    experience: PropTypes.number,
    isAvailable: PropTypes.bool,
    skillSet: PropTypes.arrayOf(PropTypes.string),
    certifications: PropTypes.arrayOf(PropTypes.string),
  }),
  onClose: PropTypes.func.isRequired, // Ensures onClose is a function
};

export default CraftsmanModal;
