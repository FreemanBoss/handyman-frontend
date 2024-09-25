import { HiOutlineUser, HiOutlineClock } from 'react-icons/hi';
import { formatWorkingHours } from '../../helpers/timeFormat';
import PropTypes from 'prop-types';


const CraftsmanCard = ({ craftsman, onClick }) => {
  return (
    <div 
      className="relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer border border-gray-200"
      onClick={onClick}
    >
      {/* Image Section */}
      <div className="relative w-full h-48 overflow-hidden">
        <img 
          className="w-full h-full object-cover"
          src={craftsman.user.profilePicture || '/images/electri.jpg'}
          alt={craftsman.user.userName}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
      </div>
      {/* Content Section */}
      <div className="p-4 sm:p-6 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 truncate">{craftsman.user.userName}</h3>
          <p className="text-gray-600 text-sm sm:text-base mb-2 flex items-center gap-2">
            <HiOutlineUser className="text-teal-600" />
            {craftsman.experience} years of experience
          </p>
          <p className="text-gray-600 text-xs sm:text-sm flex items-center gap-2">
            <HiOutlineClock className="text-teal-600" />
            Working Hours: {formatWorkingHours(craftsman.isAvailable)}
          </p>
        </div>
        <button 
          className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition-colors duration-300 mt-4"
          onClick={(e) => {
            e.stopPropagation(); // Prevent click event from propagating to parent div
            onClick();
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

CraftsmanCard.propTypes = {
  craftsman: PropTypes.shape({
    user: PropTypes.shape({
      profilePicture: PropTypes.string,
      userName: PropTypes.string,
    }),
    experience: PropTypes.number,
    isAvailable: PropTypes.bool,
  }),
  onClick: PropTypes.func.isRequired, // Ensures onClick is a function
};

export default CraftsmanCard;
