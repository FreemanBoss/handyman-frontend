import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCraftsmen } from '../features/craftmen/craftmanthunks';
import { useNavigate, useParams } from 'react-router-dom';
import CraftsmanCard from '../Components/craftsmen/CraftsmanCard';
import CraftsmanModal from '../Components/craftsmen/CraftsmanModal';

const CraftsmanPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { craftsmanId } = useParams(); // Grab the craftsmanId from the URL
  
  // Fetch craftsmen from the Redux store
  const { craftsmen, isLoading, error } = useSelector((state) => state.craftsman);
  
  const [selectedCraftsman, setSelectedCraftsman] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // Fetch craftsmen when the component mounts or when the page number changes
  useEffect(() => {
    dispatch(fetchCraftsmen({ pageNumber, pageSize: 10 }));
  }, [dispatch, pageNumber]);

  // Set selected craftsman if craftsmanId is in the URL
  useEffect(() => {
    if (craftsmanId && craftsmen) {
      const craftsman = craftsmen.find(c => c.id === craftsmanId);
      setSelectedCraftsman(craftsman || null);
    }
  }, [craftsmanId, craftsmen]);

  // Handle card click to open modal and update the URL
  const handleCardClick = (craftsman) => {
    setSelectedCraftsman(craftsman);
    navigate(`/craftsmen/${craftsman.id}`); // Update the URL dynamically
  };

  // Handle modal close, reset the selected craftsman and update the URL
  const handleCloseModal = () => {
    setSelectedCraftsman(null);
    navigate('/craftsmen'); // Remove craftsmanId from the URL
  };

  // Handle page change
  const handlePageChange = (newPageNumber) => {
    if (newPageNumber > 0) {
      setPageNumber(newPageNumber);
    }
  };

  // Check if there are more craftsmen to display
  const hasMoreCraftsmen = craftsmen && craftsmen.length > 0;

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 mt-14 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
        Our Professional Craftsmen
      </h1>

      {isLoading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {(craftsmen || []).map((craftsman) => (
          <CraftsmanCard
            key={craftsman.id}
            craftsman={craftsman}
            onClick={() => handleCardClick(craftsman)}
          />
        ))}
      </div>

      {/* Modal for selected craftsman */}
      {selectedCraftsman && (
        <CraftsmanModal craftsman={selectedCraftsman} onClose={handleCloseModal} />
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8">
        <button
          className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition-colors duration-300"
          onClick={() => handlePageChange(pageNumber - 1)}
          disabled={pageNumber <= 1}
        >
          Previous
        </button>
        <span className="mx-4 text-gray-700">Page {pageNumber}</span>
        <button
          className="bg-teal-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-teal-600 transition-colors duration-300"
          onClick={() => hasMoreCraftsmen && handlePageChange(pageNumber + 1)}
          disabled={!hasMoreCraftsmen}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CraftsmanPage;
