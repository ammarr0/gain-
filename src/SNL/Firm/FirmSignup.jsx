// src/components/FirmSignUpModal.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FirmSignUpModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    role: '',
    firmName: '',
    email: '',
    phone: '',
    website: '',
    linkedin: '',
    location: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);  // State to manage submission success
  const navigate = useNavigate();  // Hook to navigate to new route after submission

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Firm sign-up form submitted:', formData);
    setIsSubmitted(true); // Set submission success

    // Simulate a delay or a success action before redirect
    setTimeout(() => {
      navigate('/consultingfirm/home'); // Redirect to the new route after form submission
    }, 2000); // Redirect after 2 seconds (you can adjust the delay as needed)
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      {/* Custom CSS for a thin scrollbar */}
      <style>
        {`
          .custom-scrollbar {
            overflow-y: auto;
            max-height: 80vh; // Increased the max-height from 70vh to 90vh
            padding-right: 0.5rem;
          }
          /* Firefox */
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #9ca3af transparent;
          }
          /* WebKit browsers */
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #9ca3af;
            border-radius: 9999px;
            border: 1px solid transparent;
          }
        `}
      </style>

      {/* White modal container */}
      <div className="bg-white rounded-[40px] shadow-xl p-10 max-w-[800px] w-full relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ×
        </button>

        {/* Scrollable container for modal content */}
        <div className="custom-scrollbar">
          {/* Heading & Subheading */}
          <h1 className="text-3xl font-bold text-gray-900 text-left ml-2">
            Sign Up As Consulting Firm
          </h1>
          <p className="text-left text-gray-600 mb-6 ml-2">
            You are in good company.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {/* First Name */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">First Name*</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Last Name*</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Your Role*</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Your Role"
                required
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Firm Name */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Your Firm*</label>
              <input
                type="text"
                name="firmName"
                value={formData.firmName}
                onChange={handleChange}
                placeholder="Your Consulting Firm"
                required
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Your Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Your Phone*</label>
              <div className="flex">
                <select
                  className="border rounded-l-md px-3 py-2 bg-gray-100 text-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>US</option>
                  <option>UK</option>
                  <option>IN</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 ............"
                  required
                  className="w-full border-t border-b border-r rounded-r-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            {/* Firm Website */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Firm Website*</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="http://yourfirm.com"
                required
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Firm LinkedIn */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Firm LinkedIn*</label>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="http://linkedin.com"
                required
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Location */}
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-700 mb-1">Your Location*</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Your Location"
                required
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Terms & Privacy Notice */}
            <p className="text-gray-500 text-xs md:col-span-2 mt-2 text-center">
              By signing up with us, you are agreeing to our{' '}
              <strong>Terms of Service</strong> and{' '}
              <strong>Privacy Policy</strong>.
            </p>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white w-2/4 py-3 text-lg rounded-2xl hover:bg-blue-600 transition duration-300"
              >
                Join Us
              </button>
            </div>
          </form>

          {/* Success Popup */}
          {isSubmitted && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
                <h2 className="text-xl font-semibold text-green-600">Sign Up Successful!</h2>
                <p className="mt-2 text-gray-600">You will be redirected shortly...</p>
              </div>
            </div>
          )}

          {/* Back to Home link */}
          <div className="text-center mt-4">
            <Link to="/" className="text-blue-400 hover:underline text-sm">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirmSignUpModal;
