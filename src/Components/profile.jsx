import { useState } from 'react';
import { UserIcon, EnvelopeIcon, PhoneIcon, MapPinIcon, LockClosedIcon, XMarkIcon, CheckIcon } from '@heroicons/react/24/outline';



const ProfilePage = () => {
  const [formData, setFormData] = useState({
    firstName: 'Mehrab',
    lastName: 'Bozorgi',
    email: 'mehrabbozorgi.business@gmail.com',
    address: '33062 Zboncak isle',
    contactNumber: '58077.79',
    city: 'Mehrab',
    state: 'Bozorgi',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
    <div className="flex justify-center items-center  min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl p-8 bg-white shadow-xl rounded-lg border border-gray-200"
      >
        <div className="text-center mb-8">
          <img
            className="w-16 h-16 rounded-full mx-auto"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <h2 className="text-2xl font-semibold text-gray-700 mt-4 tracking-wide">
            Edit Profile
          </h2>
        </div>

        {/* Grid Layout - 2 Columns on md and up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500">First Name</label>
            <div className="relative mt-1">
              <UserIcon className="w-5 h-5 text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3" />
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-150 ease-in-out"
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500">Last Name</label>
            <div className="relative mt-1">
              <UserIcon className="w-5 h-5 text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3" />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-150 ease-in-out"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500">Email</label>
            <div className="relative mt-1">
              <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-150 ease-in-out"
              />
            </div>
          </div>

          {/* Contact Number */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500">Contact Number</label>
            <div className="relative mt-1">
              <PhoneIcon className="w-5 h-5 text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3" />
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-150 ease-in-out"
              />
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-medium text-gray-500">Address</label>
            <div className="relative mt-1">
              <MapPinIcon className="w-5 h-5 text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3" />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-150 ease-in-out"
              />
            </div>
          </div>

          {/* City */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500">City</label>
            <div className="relative mt-1">
              <MapPinIcon className="w-5 h-5 text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3" />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-150 ease-in-out"
              />
            </div>
          </div>

          {/* State */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-500">State</label>
            <div className="relative mt-1">
              <MapPinIcon className="w-5 h-5 text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3" />
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-150 ease-in-out"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col md:col-span-2">
            <label className="text-sm font-medium text-gray-500">Password</label>
            <div className="relative mt-1">
              <LockClosedIcon className="w-5 h-5 text-gray-400 absolute top-1/2 transform -translate-y-1/2 left-3" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-300 focus:outline-none transition-all duration-150 ease-in-out"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-8">
          <button
            type="button"
            className="flex items-center px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-500 transition-all duration-150 ease-in-out"
          >
            <XMarkIcon className="w-5 h-5 mr-2" />
            Cancel
          </button>
          <button
            type="submit"
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-150 ease-in-out"
          >
            <CheckIcon className="w-5 h-5 mr-2" />
            Save
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default ProfilePage;
