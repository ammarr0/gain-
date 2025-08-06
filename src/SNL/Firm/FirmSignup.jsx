import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  { code: '+7', country: 'Russia' },
  { code: '+39', country: 'Italy' },
  { code: '+34', country: 'Spain' },
  { code: '+55', country: 'Brazil' },
  { code: '+27', country: 'South Africa' },
  { code: '+82', country: 'South Korea' },
  { code: '+46', country: 'Sweden' },
  { code: '+41', country: 'Switzerland' },
  { code: '+31', country: 'Netherlands' },
  { code: '+64', country: 'New Zealand' },
  { code: '+65', country: 'Singapore' },
];

const FIXED_ROLE = 'COMPANY';

const FIELDS = [
  { label: 'First Name*', name: 'first_name', type: 'text', placeholder: 'First Name' },
  { label: 'Last Name*', name: 'last_name', type: 'text', placeholder: 'Last Name' },
  { label: 'Email*', name: 'email', type: 'email', placeholder: 'Email' },
  { label: 'Date of Birth*', name: 'dob', type: 'date', placeholder: 'Date of Birth' },
  { label: 'Phone Number*', name: 'phone_no', type: 'tel', placeholder: 'Phone Number' },
  { label: 'Password*', name: 'password', type: 'password', placeholder: 'Password' },
  { label: 'City*', name: 'city', type: 'text', placeholder: 'City' },
  { label: 'Street*', name: 'street', type: 'text', placeholder: 'Street' },
  { label: 'Website*', name: 'website', type: 'url', placeholder: 'http://example.com/' },
  { label: 'LinkedIn*', name: 'linkedin', type: 'url', placeholder: 'http://www.linkedin.com/' },
];

const fieldValidators = {
  first_name: v => !!v.trim(),
  last_name: v => !!v.trim(),
  email: v => !!v && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
  dob: v => !!v,
  country_code: v => !!v.trim(),
  phone_no: v => !!v.trim(),
  password: v => !!v,
  country: v => !!v.trim(),
  city: v => !!v.trim(),
  street: v => !!v.trim(),
  website: v => !v || /^https?:\/\/.+/i.test(v),
  linkedin: v => !v || /^https?:\/\/(www\.)?linkedin\.com\/.+/i.test(v),
};

const fieldErrorMessages = {
  first_name: 'First name is required.',
  last_name: 'Last name is required.',
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

const initialFormData = {
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
};

const FirmSignUpModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // When country code changes, update country accordingly
  useEffect(() => {
    if (formData.country_code) {
      const found = COUNTRY_CODES.find(
        c => c.code === formData.country_code
      );
      if (found) {
        setFormData(prev => ({ ...prev, country: found.country }));
      }
    }
  }, [formData.country_code]);

  useEffect(() => {
    if (isSubmitted) {
      toast.success('User Registered Successfully!!!', { autoClose: 2000 });
    }
  }, [isSubmitted]);

  if (!isOpen) return null;

  const validateField = (name, value) =>
    fieldValidators[name] ? fieldValidators[name](value) : true;

  const handleChange = e => {
    const { name, value } = e.target;
    // If country_code, update both country_code and country
    if (name === 'country_code') {
      setFormData(prev => {
        const found = COUNTRY_CODES.find(c => c.code === value);
        return {
          ...prev,
          country_code: value,
          country: found ? found.country : '',
        };
      });
      setErrors(prev => ({
        ...prev,
        country_code: !validateField('country_code', value),
        country: !validateField('country', COUNTRY_CODES.find(c => c.code === value)?.country || ''),
      }));
    } else if (name === 'country') {
      // If user manually changes country (shouldn't happen if disabled, but for completeness)
      setFormData(prev => ({ ...prev, [name]: value }));
      setErrors(prev => ({ ...prev, [name]: !validateField(name, value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      setErrors(prev => ({ ...prev, [name]: !validateField(name, value) }));
    }
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: !validateField(name, value) }));
  };

  const validateAll = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (!validateField(key, formData[key])) newErrors[key] = true;
    });
    setErrors(newErrors);
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validateAll()) {
      toast.error('Please fix the errors in the form.', { autoClose: 2000 });
      return;
    }
    const dataToPost = { ...formData, role: FIXED_ROLE };
    try {
      const response = await fetch('https://gain-b7ea8e7de810.herokuapp.com/auth/sign-up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToPost),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else if (response.status === 409) {
        toast.error('User already registered', { autoClose: 2000 });
      } else {
        const errorData = await response.json();
        toast.error('Failed to submit form: ' + (errorData.message || response.statusText));
      }
    } catch (error) {
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
            {/* First four fields */}
            {FIELDS.slice(0, 4).map(({ label, name, type, placeholder }) => (
              <div key={name}>
                <label className="block text-sm text-gray-700 mb-1">{label}</label>
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
                {errors[name] && touched[name] && (
                  <span className="text-xs text-red-500">{fieldErrorMessages[name]}</span>
                )}
              </div>
            ))}

            {/* Country Code Dropdown */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Country Code*</label>
              <select
                name="country_code"
                value={formData.country_code}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={`w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors['country_code'] && touched['country_code'] ? 'border-red-500' : ''
                }`}
              >
                <option value="">Select Country Code</option>
                {COUNTRY_CODES.map(({ code, country }) => (
                  <option key={code} value={code}>
                    {country} ({code})
                  </option>
                ))}
              </select>
              {errors['country_code'] && touched['country_code'] && (
                <span className="text-xs text-red-500">{fieldErrorMessages['country_code']}</span>
              )}
            </div>

            {/* Phone Number */}
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
                  errors['phone_no'] && touched['phone_no'] ? 'border-red-500' : ''
                }`}
              />
              {errors['phone_no'] && touched['phone_no'] && (
                <span className="text-xs text-red-500">{fieldErrorMessages['phone_no']}</span>
              )}
            </div>

            {/* Password */}
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
                  errors['password'] && touched['password'] ? 'border-red-500' : ''
                }`}
              />
              {errors['password'] && touched['password'] && (
                <span className="text-xs text-red-500">{fieldErrorMessages['password']}</span>
              )}
            </div>

            {/* Country (auto-filled, disabled) */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Country*</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Country"
                required
                disabled
                className={`w-full border rounded-md px-4 py-2 bg-gray-100 cursor-not-allowed focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors['country'] && touched['country'] ? 'border-red-500' : ''
                }`}
              />
              {errors['country'] && touched['country'] && (
                <span className="text-xs text-red-500">{fieldErrorMessages['country']}</span>
              )}
            </div>

            {/* The rest of the fields */}
            {FIELDS.slice(6).map(({ label, name, type, placeholder }) => {
              // Skip 'country' field since it's handled above
              if (name === 'country') return null;
              return (
                <div key={name}>
                  <label className="block text-sm text-gray-700 mb-1">{label}</label>
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
                  {errors[name] && touched[name] && (
                    <span className="text-xs text-red-500">{fieldErrorMessages[name]}</span>
                  )}
                </div>
              );
            })}

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