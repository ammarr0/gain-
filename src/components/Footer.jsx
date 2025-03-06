import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-white text-gray-800 p-6 space-y-8">
    {/* Top section: 6 columns */}
    <div className="grid grid-cols-6 gap-8 text-sm">
      {/* Column 1: Logo */}
      <div className="col-span-1 flex items-center">
        <Link to="/">
          <img
            src="/assets/logo.png"
            alt="GAIN Logo"
            className="h-12 inline-block"
          />
        </Link>
      </div>

      {/* Column 2: Home, etc. */}
      <div className="space-y-2">
        <h3 className="font-semibold mb-1">Home</h3>
        <p>Join Us</p>
        <p>Browse Jobs</p>
        <p>Browse Courses</p>
        <p>GAIN+ Projects</p>
        <p>FAQs</p>
        <p>Pricing</p>
      </div>

      {/* Column 3: Pricing */}
      <div className="space-y-2">
        <h3 className="font-semibold mb-1">Pricing</h3>
        <p>For Clients</p>
        <p>What We Offer</p>
        <p>Consulting</p>
        <p>Corporate</p>
      </div>

      {/* Column 4: Freelance Jobs */}
      <div className="space-y-2">
        <h3 className="font-semibold mb-1">Freelance Jobs</h3>
        <p>All Trainings</p>
      </div>

      {/* Column 5: About */}
      <div className="space-y-2">
        <h3 className="font-semibold mb-1">About</h3>
        <p>Services</p>
        <p>About</p>
        <p>Insights</p>
      </div>

      {/* Column 6: Careers */}
      <div className="space-y-2">
        <h3 className="font-semibold mb-1">Careers</h3>
        <p>Contact</p>
      </div>
    </div>

    {/* Divider line */}
    <div className="border-t-2 border-black"></div>

    {/* Bottom Section */}
    <div className="space-y-4 text-sm">
      {/* First line */}
      <div className="flex flex-row items-center justify-between w-full">
        {/* Left: Empty for alignment */}
        <div></div>
        {/* Middle: TOS, Privacy, Setting */}
        <div className="mx-auto text=center flex space-x-10">
          <Link to="/terms" className="hover:text-blue-500 font-semibold">
            Terms of Service
          </Link>
          <Link to="/privacy" className="hover:text-blue-500 font-semibold">
            Privacy Policy
          </Link>
          <Link to="/settings" className="hover:text-blue-500 font-semibold">
            Privacy Setting
          </Link>
        </div>
        {/* Right: Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <i className="fab fa-facebook-f text-xl"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600"
          >
            <i className="fab fa-youtube text-xl"></i>
          </a>
        </div>
      </div>

      {/* Second line */}
      <div className="flex flex-row items-center justify-between w-full">
        {/* Middle: Address */}
        <div className="text-center mx-auto">
          <p className="text-gray-600">
            Your address goes here, Area, City, Area Code
          </p>
        </div>
        {/* Right: © 2025 GAIN */}
        <p className="text-gray-600">© 2025 GAIN</p>
      </div>
    </div>
  </footer>
);

export default Footer;
