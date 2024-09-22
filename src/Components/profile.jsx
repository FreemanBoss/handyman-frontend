import { useState } from 'react';
import { FaEdit, FaSave, FaTimes } from 'react-icons/fa';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    bio: 'Software developer with a passion for technology and coding.',
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Save user info (API call can be implemented here)
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    // Reset changes if needed
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-32 bg-gray-800"></div>
          <div className="relative flex items-center justify-center mt-16">
            <img
              src="/images/avatar.png" // Replace with your image path
              alt="Profile Avatar"
              className="w-32 h-32 rounded-full border-4 border-white"
            />
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{userInfo.name}</h1>
              <p className="text-gray-600">{userInfo.bio}</p>
            </div>
            {!isEditing && (
              <button
                onClick={handleEditClick}
                className="text-blue-500 hover:text-blue-700 flex items-center"
              >
                <FaEdit className="mr-2" /> Edit
              </button>
            )}
          </div>
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Contact Information</h2>
              <p className="text-gray-600">Email: {isEditing ? <input type="email" name="email" value={userInfo.email} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" /> : userInfo.email}</p>
              <p className="text-gray-600">Phone: {isEditing ? <input type="text" name="phone" value={userInfo.phone} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" /> : userInfo.phone}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Bio</h2>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={userInfo.bio}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              ) : (
                <p className="text-gray-600">{userInfo.bio}</p>
              )}
            </div>
            {isEditing && (
              <div className="flex justify-end mt-4 space-x-2">
                <button
                  onClick={handleSaveClick}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center"
                >
                  <FaSave className="mr-2" /> Save
                </button>
                <button
                  onClick={handleCancelClick}
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 flex items-center"
                >
                  <FaTimes className="mr-2" /> Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
