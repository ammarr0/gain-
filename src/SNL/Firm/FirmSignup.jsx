
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FirmSignUpModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firmName: '',
    numberOfEmployees: '',
    contactPersonName: '',
    contactPersonRole: '',
    contactPersonPhone: '',
    contactPersonEmail: '',
    yearsOfExperience: '',
    servicesOffered: '',
    website: '',
    linkedin: '',
    location: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Firm sign-up form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => navigate('/consultingfirm/home'), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <style>
        {`
          .custom-scrollbar {
            overflow-y: auto;
            max-height: 80vh;
            padding-right: 0.5rem;
            scrollbar-width: thin;
            scrollbar-color: #9ca3af transparent;
          }
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

      <div className="bg-white rounded-[40px] shadow-xl p-10 max-w-[800px] w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ×
        </button>

        <div className="custom-scrollbar">
          <h1 className="text-3xl font-bold text-gray-900 text-left ml-2">
            Sign Up As Consulting Firm
          </h1>
          <p className="text-left text-gray-600 mb-6 ml-2">
            You are in good company.
          </p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {[
              { label: 'Firm Name*', name: 'firmName', type: 'text', placeholder: 'Your Consulting Firm' },
              { label: 'Number of Employees*', name: 'numberOfEmployees', type: 'number', placeholder: 'Number of Employees' },
              { label: 'Contact Person Name*', name: 'contactPersonName', type: 'text', placeholder: 'Contact Person Name' },
              { label: 'Contact Person Role*', name: 'contactPersonRole', type: 'text', placeholder: 'Contact Person Role' },
              { label: 'Contact Person Email*', name: 'contactPersonEmail', type: 'email', placeholder: 'Contact Person Email' },
              { label: 'Years of Experience*', name: 'yearsOfExperience', type: 'text', placeholder: 'Years of Experience' },
              { label: 'Services Offered*', name: 'servicesOffered', type: 'text', placeholder: 'Services Offered' },
              { label: 'Firm Website*', name: 'website', type: 'url', placeholder: 'http://gain.com/' },
              { label: 'Firm LinkedIn*', name: 'linkedin', type: 'url', placeholder: 'http://www.linkedin.com/' },
            ].map(({ label, name, type, placeholder }) => (
              <div key={name}>
                <label className="block text-sm text-gray-700 mb-1">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  required
                  className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm text-gray-700 mb-1">Contact Person Phone*</label>
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
                  name="contactPersonPhone"
                  value={formData.contactPersonPhone}
                  onChange={handleChange}
                  placeholder="+1 ............"
                  required
                  className="w-full border-t border-b border-r rounded-r-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm text-gray-700 mb-1">Firm Location*</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Select Location</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="IN">India</option>
              </select>
            </div>

            <p className="text-gray-500 text-xs md:col-span-2 mt-2 text-center">
              By signing up with us, you are agreeing to our{' '}
              <strong>Terms of Service</strong> and{' '}
              <strong>Privacy Policy</strong>.
            </p>

            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white w-2/4 py-3 text-lg rounded-full hover:bg-blue-600 transition duration-300"
              >
                Join Us
              </button>
            </div>
          </form>

          {isSubmitted && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
              <div className="bg-white p-8 rounded-xl shadow-2xl text-center max-w-md w-full">
                <h2 className="text-2xl font-bold text-green-600 mb-4">Sign Up Successful!</h2>
                <p className="text-gray-600">You will be redirected shortly...</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FirmSignUpModal;