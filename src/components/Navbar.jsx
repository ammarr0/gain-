import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginModal from '../components/loginpopup';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  const navLinks = [
    { to: '/', label: 'Home' },
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
        onClick={() => setIsMobileMenuOpen(false)}
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
        <ul className="absolute hidden text-gray-700 bg-white group-hover:block min-w-max shadow-lg">
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

  const renderMobileLinks = () =>
    navLinks.map(({ to, label }) => (
      <Link
        key={to}
        to={to}
        className="block py-3 px-4 text-gray-700 hover:text-blue-500 focus:text-[#007DF0] border-b border-gray-200"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {label}
      </Link>
    ));

  // Mobile dropdowns: do NOT open submenus by default, only on tap/click
  const renderMobileDropdowns = () =>
    dropdownLinks.map(({ label, links }, idx) => (
      <div key={label} className="border-b border-gray-200">
        <button
          type="button"
          className="w-full text-left py-3 px-4 text-gray-700 font-medium flex items-center justify-between focus:outline-none"
          onClick={() =>
            setOpenMobileDropdown(openMobileDropdown === idx ? null : idx)
          }
          aria-expanded={openMobileDropdown === idx}
        >
          <span>{label}</span>
          <svg
            className={`h-4 w-4 ml-2 transition-transform duration-200 ${
              openMobileDropdown === idx ? 'transform rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {/* Only show submenu if openMobileDropdown === idx */}
        {openMobileDropdown === idx && (
          <div className="bg-gray-50">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="block py-2 px-8 text-gray-600 hover:text-blue-500 focus:text-[#007DF0]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    ));

  return (
    <nav className="bg-white relative">
      <Link
        to="/"
        className="focus:text-[#007DF0] absolute left-4 top-1/2 transform -translate-y-1/2 z-20"
      >
        <img src="/assets/logo.png" alt="Logo" className="h-12" />
      </Link>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end h-16 items-center">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            {renderLinks()}
            {renderDropdowns()}
          </div>

          {/* Search */}
          {!showSearch && (
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-gray-700 hover:text-blue-500 focus:outline-none focus:text-[#007DF0] ml-6"
            >
              <img src="/assets/search.png" alt="Search" className="h-5 w-5" />
            </button>
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

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4 ml-6">
            <button
              onClick={() => setShowLoginModal(true)}
              className="text-gray-700 px-3 py-1 rounded-full text-sm focus:text-[#007DF0] flex justify-center"
              style={{ width: '100px' }}
            >
              Log In
            </button>
            <Link
              to="/join-us"
              className="bg-[#007DF0] text-white px-3 py-1 border border-[#007DF0] rounded-full hover:bg-blue-500 hover:text-white text-sm flex justify-center"
              style={{ width: '100px' }}
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden ml-6 text-gray-700 hover:text-blue-500 focus:outline-none focus:text-[#007DF0]"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Search */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                  <img src="/assets/search.png" alt="Search" className="h-4 w-4 mr-2" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 focus:outline-none text-sm"
                  />
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto">
                {renderMobileLinks()}
                {renderMobileDropdowns()}
              </div>

              {/* Mobile Auth Buttons */}
              <div className="p-4 border-t border-gray-200 space-y-3">
                <button
                  onClick={() => {
                    setShowLoginModal(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full text-gray-700 px-4 py-2 rounded-full text-sm border border-gray-300 hover:bg-gray-50"
                >
                  Log In
                </button>
                <Link
                  to="/join-us"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full bg-[#007DF0] text-white px-4 py-2 rounded-full text-sm text-center hover:bg-blue-600"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {showLoginModal && <LoginModal />}
    </nav>
  );
};

export default Navbar;