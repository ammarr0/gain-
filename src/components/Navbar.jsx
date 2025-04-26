import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const navLinks = [
    { to: '/pricing', label: 'Pricing' },
    { to: '/freelance-jobs', label: 'Freelance Jobs' },
    { to: '/ai-trainings', label: 'AI Trainings' },
    { to: '/careers', label: 'Careers' },
    { to: '/contact', label: 'Contact', extraClass: 'ml-6' },
  ];

  const dropdownLinks = [
    {
      label: 'For Clients',
      links: [
        { to: '/for-clients/whatweoffer', label: 'What We Offer' },
        { to: '/for-clients/consulting', label: 'Consulting' },
        { to: '/for-clients/corporate', label: 'Corporate' },
      ],
    },
    {
      label: 'About',
      links: [
        { to: '/about/services', label: 'Services' },
        { to: '/about/insights', label: 'Insights' },
      ],
    },
  ];

  const renderLinks = () =>
    navLinks.map(({ to, label, extraClass = '' }) => (
      <Link
        key={to}
        to={to}
        className={`text-gray-700 hover:text-blue-500 focus:text-[#007DF0] ${extraClass}`}
      >
        {label}
      </Link>
    ));

  const renderDropdowns = () =>
    dropdownLinks.map(({ label, links }) => (
      <div key={label} className="group inline-block relative">
        <button className="text-gray-700 hover:text-blue-500 font-medium px-2 inline-flex items-center focus:text-[#007DF0]">
          {label}
          <svg
            className="fill-current h-4 w-4 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </button>
        <ul className="absolute hidden text-gray-700 bg-white group-hover:block">
          {links.map(({ to, label }, index) => (
            <li key={to}>
              <Link
                to={to}
                className={`py-2 px-4 block whitespace-no-wrap hover:text-blue-500 bg-white focus:text-[#007DF0] ${
                  index === 0 ? 'rounded-t' : ''
                } ${index === links.length - 1 ? 'rounded-b' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ));

  return (
    <nav className="bg-white relative">
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
              {renderLinks()}
              {renderDropdowns()}
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

          <Link
            to="/join-us"
            className="text-gray-700 px-3 py-1 rounded-full hover:bg-blue-500 hover:text-white text-sm focus:text-[#007DF0] flex justify-center"
            style={{ width: '100px' }}
          >
            Log In
          </Link>
          <Link
            to="/join-us"
            className="bg-[#007DF0] text-white px-3 py-1 border border-[#007DF0] rounded-full hover:bg-blue-500 hover:text-white text-sm focus:text-[#007DF0] flex justify-center"
            style={{ width: '100px' }}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;