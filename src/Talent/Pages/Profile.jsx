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
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold">Your Profile</h1>
      <p className="text-gray-600 mt-2">Manage your profile and settings to maximize your experience on the platform.</p>

      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        <div className="lg:w-1/4 bg-gray-100 p-4 rounded-lg">
          <div className="text-center mb-6">
            <img src="/profile-placeholder.jpg" alt="Profile Picture" className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-gray-300" />
            <p className="mt-2">Profile Picture <a href="#" className="text-blue-500 hover:underline">Click here to change</a></p>
          </div>
          <h2 className="text-lg font-semibold">Basic Information</h2>
          <p className="mt-4">About</p>
          <p className="mt-2">Preferences</p>
          <p className="mt-2">Billing and Payment</p>
          <p className="mt-2">Account Settings</p>
        </div>
        <div className="lg:w-3/4 bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-700">Company/Organization Name</p>
              <input 
                type="text" 
                name="companyName" 
                value={profileData.companyName} 
                onChange={handleInputChange} 
                className="w-full mt-1 p-2 border border-gray-300 rounded" 
              />
            </div>
            <div>
              <p className="text-gray-700">Location</p>
              <input 
                type="text" 
                name="location" 
                value={profileData.location} 
                onChange={handleInputChange} 
                className="w-full mt-1 p-2 border border-gray-300 rounded" 
              />
            </div>
            <div>
              <p className="text-gray-700">Phone Number</p>
              <input 
                type="text" 
                name="phoneNumber" 
                value={profileData.phoneNumber} 
                onChange={handleInputChange} 
                className="w-full mt-1 p-2 border border-gray-300 rounded" 
              />
            </div>
            <div>
              <p className="text-gray-700">Email Address</p>
              <input 
                type="email" 
                name="emailAddress" 
                value={profileData.emailAddress} 
                onChange={handleInputChange} 
                className="w-full mt-1 p-2 border border-gray-300 rounded" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;