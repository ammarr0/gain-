// src/pages/home/components/Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

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
        <div className="flex justify-end h-16 items-center">
          {!showSearch && (
            <div className="flex space-x-6 text-sm font-medium">
              <Link
                to="/pricing"
                className="text-gray-700 hover:text-blue-500 focus:text-[#007DF0]"
              >
                Pricing
              </Link>
              <div className="group inline-block relative">
                <button className="text-gray-700 hover:text-blue-500 font-medium px-2 inline-flex items-center focus:text-[#007DF0]">
                  For Clients
                  <svg
                    className="fill-current h-4 w-4 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </button>
                <ul className="absolute hidden text-gray-700 bg-white group-hover:block">
                  <li>
                    <Link
                      to="/for-clients/whatweoffer"
                      className="rounded-t py-2 px-4 block whitespace-no-wrap hover:text-blue-500 bg-white focus:text-[#007DF0]"
                    >
                      What We Offer
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/for-clients/consulting"
                      className="py-2 px-4 block whitespace-no-wrap hover:text-blue-500 bg-white focus:text-[#007DF0]"
                    >
                      Consulting
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/for-clients/corporate"
                      className="rounded-b py-2 px-4 block whitespace-no-wrap hover:text-blue-500 bg-white focus:text-[#007DF0]"
                    >
                      Corporate
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                to="/freelance-jobs"
                className="text-gray-700 hover:text-blue-500 focus:text-[#007DF0]"
              >
                Freelance Jobs
              </Link>
              <Link
                to="/ai-trainings"
                className="text-gray-700 hover:text-blue-500 focus:text-[#007DF0]"
              >
                AI Trainings
              </Link>
              <div className="group inline-block relative">
                <button className="text-gray-700 hover:text-blue-500 font-medium px-2 inline-flex items-center focus:text-[#007DF0]">
                  About
                  <svg
                    className="fill-current h-4 w-4 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </button>
                <ul className="absolute hidden text-gray-700 bg-white group-hover:block">
                  <li>
                    <Link
                      to="/about/services"
                      className="rounded-t py-2 px-4 block whitespace-no-wrap hover:text-blue-500 bg-white focus:text-[#007DF0]"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about/insights"
                      className="rounded-b py-2 px-4 block whitespace-no-wrap hover:text-blue-500 bg-white focus:text-[#007DF0]"
                    >
                      Insights
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                to="/careers"
                className="text-gray-700 hover:text-gray-400 focus:text-[#007DF0]"
              >
                Careers
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-gray-400 focus:text-[#007DF0] ml-6"
              >
                Contact
              </Link>
            </div>
          )}

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
            className="text-gray-700 hover:text-blue-500 focus:outline-none focus:text-[#007DF0] ml-6"
          >
            <img src="/assets/search.png" alt="Search" className="h-5 w-5" />
          </button>
          <button className="text-gray-700 px-3 py-1 border border-gray-300 rounded-full hover:bg-blue-500 hover:text-white text-sm focus:text-[#007DF0] ml-6">
            Post a Job
          </button>
          <Link
            to="/join-us"
            className="text-[#007DF0] px-3 py-1 border border-[#007DF0] rounded-full hover:bg-blue-500 hover:text-white text-sm focus:text-[#007DF0] ml-6"
          >
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
