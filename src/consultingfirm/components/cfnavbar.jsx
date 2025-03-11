import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [profileImage, setProfileImage] = useState('/assets/profile.png');

  return (
    <nav className="bg-white relative">
      {/* Logo moved outside the centered container and placed at the far left */}
      <Link
        to="/"
        className="focus:text-[#007DF0] absolute left-4 top-1/2 transform -translate-y-1/2"
      >
        <img src="/assets/logo.png" alt="Logo" className="h-12" />
      </Link>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end h-16 items-center space-x-8">
          {showSearch && (
            <div className="flex items-center border-b border-gray-300">
              <input
                type="text"
                placeholder="Courses, Experts, or AI products"
                className="w-72 px-3 py-1 focus:outline-none text-sm font-medium"
              />
            </div>
          )}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="text-gray-700 hover:text-blue-500 focus:outline-none focus:text-[#007DF0]"
          >
            <img src="/assets/search.png" alt="Search" className="h-5 w-5" />
          </button>
          <img src="/assets/chat.png" alt="Chat" className="h-5 w-5" />
          <img src="/assets/bell.png" alt="Notifications" className="h-5 w-5" />
          <img src={profileImage} alt="Profile" className="h-9 w-9" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
