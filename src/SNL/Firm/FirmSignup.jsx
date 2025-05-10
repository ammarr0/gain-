import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FirmSignUpModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    image: '',
    first_name: '',
    last_name: '',
    role: '',
    email: '',
    dob: '',
    country_code: '',
    phone_no: '',
    password: '',
    country: '',
    city: '',
    street: '',
    website: '',
    linkedin: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSubmitted) {
      toast.success('Sign-up successful! Redirecting...', { autoClose: 2000 });
    }
  }, [isSubmitted]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5200/auth/sign-up`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Firm sign-up form submitted:', formData);
        setIsSubmitted(true);
        setTimeout(() => navigate('/consultingfirm/home'), 2000);
      } else {
        if (response.status === 409) {
          toast.error('User already registered');
        } else {
          const errorData = await response.json();
          console.error('Failed to submit form:', errorData.message || response.statusText);
          toast.error('Failed to submit form: ' + (errorData.message || response.statusText));
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form: ' + error.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <ToastContainer />
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
              { label: 'Image URL', name: 'image', type: 'url', placeholder: 'http://example.com/image.jpg' },
              { label: 'First Name*', name: 'first_name', type: 'text', placeholder: 'First Name' },
              { label: 'Last Name*', name: 'last_name', type: 'text', placeholder: 'Last Name' },
              { label: 'Role*', name: 'role', type: 'text', placeholder: 'Role' },
              { label: 'Email*', name: 'email', type: 'email', placeholder: 'Email' },
              { label: 'Date of Birth*', name: 'dob', type: 'date', placeholder: 'Date of Birth' },
              { label: 'Country Code*', name: 'country_code', type: 'text', placeholder: 'Country Code' },
              { label: 'Phone Number*', name: 'phone_no', type: 'tel', placeholder: 'Phone Number' },
              { label: 'Password*', name: 'password', type: 'password', placeholder: 'Password' },
              { label: 'Country*', name: 'country', type: 'text', placeholder: 'Country' },
              { label: 'City*', name: 'city', type: 'text', placeholder: 'City' },
              { label: 'Street*', name: 'street', type: 'text', placeholder: 'Street' },
              { label: 'Website*', name: 'website', type: 'url', placeholder: 'http://example.com/' },
              { label: 'LinkedIn*', name: 'linkedin', type: 'url', placeholder: 'http://www.linkedin.com/' },
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
        </div>
      </div>
    </div>
  );
};

export default FirmSignUpModal;