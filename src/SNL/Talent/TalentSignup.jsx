import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FIXED_ROLE = 'INDIVIDUAL_TALENT';

const COUNTRY_CODES = [
  { code: '+1', country: 'United States' },
  { code: '+44', country: 'United Kingdom' },
  { code: '+91', country: 'India' },
  { code: '+61', country: 'Australia' },
  { code: '+81', country: 'Japan' },
  { code: '+49', country: 'Germany' },
  { code: '+33', country: 'France' },
  { code: '+86', country: 'China' },
  { code: '+971', country: 'United Arab Emirates' },
  { code: '+92', country: 'Pakistan' },
  { code: '+234', country: 'Nigeria' },
  { code: '+55', country: 'Brazil' },
  { code: '+7', country: 'Russia' },
  { code: '+27', country: 'South Africa' },
  { code: '+82', country: 'South Korea' },
  { code: '+39', country: 'Italy' },
  { code: '+34', country: 'Spain' },
  { code: '+46', country: 'Sweden' },
  { code: '+31', country: 'Netherlands' },
  { code: '+63', country: 'Philippines' }
];

const requiredFields = [
  'first_name',
  'last_name',
  'email',
  'dob',
  'country_code',
  'phone_no',
  'password',
  'country',
  'city',
  'street',
  'website',
  'linkedin',
];

const validateField = (name, value) => {
  if (requiredFields.includes(name) && !value.trim()) {
    return 'This field is required';
  }
  if (name === 'email' && value) {
    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return 'Invalid email address';
  }
  if (name === 'website' && value) {
    try {
      new URL(value);
    } catch {
      return 'Invalid URL';
    }
  }
  if (name === 'linkedin' && value) {
    try {
      new URL(value);
    } catch {
      return 'Invalid URL';
    }
  }
  if (name === 'password' && value && value.length < 6) {
    return 'Password must be at least 6 characters';
  }
  return '';
};

const TalentSignUpModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
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

  // When country code changes, update country accordingly
  useEffect(() => {
    const selected = COUNTRY_CODES.find(
      (c) => c.code === formData.country_code
    );
    if (selected) {
      setFormData((prev) => ({
        ...prev,
        country: selected.country,
      }));
    }
  // Only run when country_code changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.country_code]);

  useEffect(() => {
    if (isSubmitted) {
      toast.success('User Registered Successfully!!!', { autoClose: 2000 });
    }
  }, [isSubmitted]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If country_code changes, update country as well
    if (name === 'country_code') {
      const selected = COUNTRY_CODES.find((c) => c.code === value);
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        country: selected ? selected.country : '',
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validateField(name, value),
        country: selected ? '' : 'This field is required',
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const validateAll = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateAll();
    setErrors(newErrors);
    setTouched(
      Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );
    if (Object.keys(newErrors).length > 0) {
      toast.error('Please fix the errors in the form.', { autoClose: 2000 });
      return;
    }
    try {
      const payload = { ...formData, role: FIXED_ROLE };
      const response = await fetch(`https://gain-b7ea8e7de810.herokuapp.com/auth/sign-up`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log('Talent sign-up form submitted:', payload);
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
            Sign Up As Talent
          </h1>
          <p className="text-left text-gray-600 mb-6 ml-2">
            You are in good company.
          </p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {/* All fields except image and role */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">First Name*</label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="First Name"
                required
                className={`w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.first_name && touched.first_name ? 'border-red-500' : ''
                }`}
              />
              {errors.first_name && touched.first_name && (
                <span className="text-xs text-red-500">{errors.first_name}</span>
              )}
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Last Name*</label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Last Name"
                required
                className={`w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.last_name && touched.last_name ? 'border-red-500' : ''
                }`}
              />
              {errors.last_name && touched.last_name && (
                <span className="text-xs text-red-500">{errors.last_name}</span>
              )}
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
                required
                className={`w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.email && touched.email ? 'border-red-500' : ''
                }`}
              />
              {errors.email && touched.email && (
                <span className="text-xs text-red-500">{errors.email}</span>
              )}
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Date of Birth*</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Date of Birth"
                required
                className={`w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.dob && touched.dob ? 'border-red-500' : ''
                }`}
              />
              {errors.dob && touched.dob && (
                <span className="text-xs text-red-500">{errors.dob}</span>
              )}
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Country Code*</label>
              <select
                name="country_code"
                value={formData.country_code}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={`w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.country_code && touched.country_code ? 'border-red-500' : ''
                }`}
              >
                <option value="">Select Country Code</option>
                {COUNTRY_CODES.map(({ code, country }) => (
                  <option key={code} value={code}>
                    {country} ({code})
                  </option>
                ))}
              </select>
              {errors.country_code && touched.country_code && (
                <span className="text-xs text-red-500">{errors.country_code}</span>
              )}
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Phone Number*</label>
              <input
                type="tel"
                name="phone_no"
                value={formData.phone_no}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Phone Number"
                required
                className={`w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.phone_no && touched.phone_no ? 'border-red-500' : ''
                }`}
              />
              {errors.phone_no && touched.phone_no && (
                <span className="text-xs text-red-500">{errors.phone_no}</span>
              )}
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Password*</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Password"
                required
                className={`w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.password && touched.password ? 'border-red-500' : ''
                }`}
              />
              {errors.password && touched.password && (
                <span className="text-xs text-red-500">{errors.password}</span>
              )}
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Country*</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                readOnly
                placeholder="Country"
                required
                className={`w-full border rounded-md px-4 py-2 bg-gray-100 cursor-not-allowed focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.country && touched.country ? 'border-red-500' : ''
                }`}
                tabIndex={-1}
              />
              {errors.country && touched.country && (
                <span className="text-xs text-red-500">{errors.country}</span>
              )}
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">City*</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="City"
                required
                className={`w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.city && touched.city ? 'border-red-500' : ''
                }`}
              />
              {errors.city && touched.city && (
                <span className="text-xs text-red-500">{errors.city}</span>
              )}
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Street*</label>
              <input
                type="text"
                name="street"
                value={formData.street}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Street"
                required
                className={`w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.street && touched.street ? 'border-red-500' : ''
                }`}
              />
              {errors.street && touched.street && (
                <span className="text-xs text-red-500">{errors.street}</span>
              )}
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Website*</label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="http://example.com/"
                required
                className={`w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.website && touched.website ? 'border-red-500' : ''
                }`}
              />
              {errors.website && touched.website && (
                <span className="text-xs text-red-500">{errors.website}</span>
              )}
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">LinkedIn*</label>
              <input
                type="url"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="http://www.linkedin.com/"
                required
                className={`w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.linkedin && touched.linkedin ? 'border-red-500' : ''
                }`}
              />
              {errors.linkedin && touched.linkedin && (
                <span className="text-xs text-red-500">{errors.linkedin}</span>
              )}
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
        </div>
      </div>
    </div>
  );
};

export default TalentSignUpModal;