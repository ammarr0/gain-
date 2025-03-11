import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    message: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Your message has been submitted!');
    // Reset form fields
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      location: '',
      message: '',
      consent: false,
    });
  };

  return (
    <div className="bg-[#f0f8ff] min-h-screen flex flex-col">
      
      {/* Heading & Subheading Container */}
      <div className="bg-white py-8 px-4 ">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Contact Us
          </h1>
          <p className="text-gray-600">
            Contact us to explore how we can help design and implement agile workforce models.
          </p>
        </div>
      </div>
      
      {/* Contact Form Container */}
      <div className="flex-grow flex items-center justify-center py-10 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 max-w-3xl w-full">
          <form onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  First Name*
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md 
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Last Name*
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border border-gray-300 rounded-md 
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-1">
                Your Work Email*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Location Field */}
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-1">
                Your Location*
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select your location</option>
                <option value="USA">USA</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
              </select>
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label className="block font-medium text-gray-700 mb-1">
                What Would You Like to Discuss?*
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-md 
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start mb-4">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 
                           border-gray-300 rounded mt-1"
              />
              <label className="ml-2 text-sm text-gray-600">
                By ticking this box, you agree to receive information and 
                promotions from GAIN. You can unsubscribe at any time.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-16 
                         rounded-xl hover:bg-blue-700 
                         focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
