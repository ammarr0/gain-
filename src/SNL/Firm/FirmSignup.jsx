import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fieldValidators = {
  image: (v) => !v || /^https?:\/\/.+\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i.test(v),
  first_name: (v) => !!v.trim(),
  last_name: (v) => !!v.trim(),
  role: (v) => !!v,
  email: (v) => !!v && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
  dob: (v) => !!v,
  country_code: (v) => !!v.trim(),
  phone_no: (v) => !!v.trim(),
  password: (v) => !!v,
  country: (v) => !!v.trim(),
  city: (v) => !!v.trim(),
  street: (v) => !!v.trim(),
  website: (v) => !!v || /^https?:\/\/.+/i.test(v),
  linkedin: (v) => !!v || /^https?:\/\/(www\.)?linkedin\.com\/.+/i.test(v),
};

const fieldErrorMessages = {
  image: 'Please enter a valid image URL (jpg, png, etc.) or leave blank.',
  first_name: 'First name is required.',
  last_name: 'Last name is required.',
  role: 'Role is required.',
  email: 'Please enter a valid email address.',
  dob: 'Date of birth is required.',
  country_code: 'Country code is required.',
  phone_no: 'Phone number is required.',
  password: 'Password is required.',
  country: 'Country is required.',
  city: 'City is required.',
  street: 'Street is required.',
  website: 'Please enter a valid website URL or leave blank.',
  linkedin: 'Please enter a valid LinkedIn URL or leave blank.',
};

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

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSubmitted) {
      toast.success('User Registered Successfully!!!', { autoClose: 2000 });
    }
  }, [isSubmitted]);

  if (!isOpen) return null;

  const validateField = (name, value) => {
    if (fieldValidators[name]) {
      return fieldValidators[name](value);
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Validate on change
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: !validateField(name, value),
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: !validateField(name, value),
    }));
  };

  const validateAll = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!validateField(key, formData[key])) {
        newErrors[key] = true;
      }
    });
    setErrors(newErrors);
    setTouched(
      Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAll()) {
      toast.error('Please fix the errors in the form.', { autoClose: 2000 });
      return;
    }
    try {
      const response = await fetch(`https://gain-b7ea8e7de810.herokuapp.com/auth/sign-up`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Firm sign-up form submitted:', formData);
        setIsSubmitted(true);
      } else {
        if (response.status === 409) {
          toast.error('User already registered', { autoClose: 2000 });
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
              {
                label: 'Role*',
                name: 'role',
                type: 'select',
                options: [
                  'COMPANY',
                  'USER',
                ],
              },
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
            ].map(({ label, name, type, placeholder, options }) => (
              <div key={name}>
                <label className="block text-sm text-gray-700 mb-1">{label}</label>
                {type === 'select' ? (
                  <select
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                      errors[name] && touched[name] ? 'border-red-500' : ''
                    }`}
                  >
                    <option value="" disabled>Select a role</option>
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={placeholder}
                    required
                    className={`w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                      errors[name] && touched[name] ? 'border-red-500' : ''
                    }`}
                  />
                )}
                {errors[name] && touched[name] && (
                  <span className="text-xs text-red-500">{fieldErrorMessages[name]}</span>
                )}
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