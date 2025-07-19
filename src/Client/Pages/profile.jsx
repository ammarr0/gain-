import React, { useState } from 'react';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    companyName: '',
    location: '',
    phoneNumber: '',
    emailAddress: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      <div className="w-full max-w-6xl mx-auto flex-1 flex flex-col px-2 sm:px-4 py-6">
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Your Profile</h1>
          <p className="text-gray-600 mt-2 text-base sm:text-lg">
            Manage your profile and settings to maximize your experience on the platform.
          </p>
        </div>
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 mt-2 w-full">
          {/* Sidebar */}
          <div className="w-full lg:w-1/4 bg-gray-100 p-4 sm:p-6 rounded-lg flex-shrink-0">
            <div className="text-center mb-6">
              <img
                src="/profile-placeholder.jpg"
                alt="Profile Picture"
                className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-gray-300"
              />
              <p className="mt-2 text-sm sm:text-base">
                Profile Picture{' '}
                <a href="#" className="text-blue-500 hover:underline">
                  Click here to change
                </a>
              </p>
            </div>
            <h2 className="text-lg font-semibold">Basic Information</h2>
            <ul className="mt-4 space-y-2 text-gray-700 text-base">
              <li>About</li>
              <li>Preferences</li>
              <li>Billing and Payment</li>
              <li>Account Settings</li>
            </ul>
          </div>
          {/* Profile Form */}
          <div className="w-full lg:w-3/4 bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <form className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-700 font-medium block mb-1" htmlFor="companyName">
                    Company/Organization Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={profileData.companyName}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-medium block mb-1" htmlFor="location">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={profileData.location}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-medium block mb-1" htmlFor="phoneNumber">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={profileData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-medium block mb-1" htmlFor="emailAddress">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    value={profileData.emailAddress}
                    onChange={handleInputChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>
              {/* Save Button for mobile */}
              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;