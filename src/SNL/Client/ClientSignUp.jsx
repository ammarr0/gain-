import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Country code and country mapping
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
  { code: '+234', country: 'Nigeria' },
  { code: '+20', country: 'Egypt' },
  { code: '+62', country: 'Indonesia' },
  { code: '+63', country: 'Philippines' },
  { code: '+92', country: 'Pakistan' },
  // ...add more as needed
];

const FIXED_ROLE = 'CUSTOMER_SUPPORT';

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

const fields = [
  { label: 'First Name*', name: 'first_name', type: 'text', placeholder: 'First Name' },
  { label: 'Last Name*', name: 'last_name', type: 'text', placeholder: 'Last Name' },
  { label: 'Email*', name: 'email', type: 'email', placeholder: 'Email' },
  { label: 'Date of Birth*', name: 'dob', type: 'date', placeholder: 'Date of Birth' },
  // Country code and country will be handled separately
  { label: 'Phone Number*', name: 'phone_no', type: 'tel', placeholder: 'Phone Number' },
  { label: 'Password*', name: 'password', type: 'password', placeholder: 'Password' },
  // Country will be handled separately
  { label: 'City*', name: 'city', type: 'text', placeholder: 'City' },
  { label: 'Street*', name: 'street', type: 'text', placeholder: 'Street' },
  { label: 'Website*', name: 'website', type: 'url', placeholder: 'http://example.com/' },
  { label: 'LinkedIn*', name: 'linkedin', type: 'url', placeholder: 'http://www.linkedin.com/' },
];

const validateField = (name, value) => {
  if (['first_name', 'last_name', 'country', 'city', 'street'].includes(name)) {
    if (!value.trim()) return 'This field is required';
  }
  if (name === 'email') {
    if (!value.trim()) return 'Email is required';
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(value)) return 'Invalid email address';
  }
  if (name === 'dob' && !value) return 'Date of Birth is required';
  if (name === 'country_code') {
    if (!value.trim()) return 'Country code is required';
    if (!/^\+?\d{1,4}$/.test(value)) return 'Invalid country code';
  }
  if (name === 'phone_no') {
    if (!value.trim()) return 'Phone number is required';
    if (!/^\d{7,15}$/.test(value.replace(/\D/g, ''))) return 'Invalid phone number';
  }
  if (name === 'password') {
    if (!value) return 'Password is required';
    if (value.length < 6) return 'Password must be at least 6 characters';
  }
  if (name === 'website') {
    if (!value.trim()) return 'Website is required';
    if (!/^https?:\/\/.+\..+/.test(value)) return 'Invalid URL';
  }
  if (name === 'linkedin') {
    if (!value.trim()) return 'LinkedIn is required';
    if (!/^https?:\/\/(www\.)?linkedin\.com\/.+/.test(value)) return 'Invalid LinkedIn URL';
  }
  return '';
};

const ClientSignUpModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      setErrors((prev) => ({
        ...prev,
        country: '', // clear country error if any
      }));
    }
  // eslint-disable-next-line
  }, [formData.country_code]);

  useEffect(() => {
    if (isSubmitted) {
      toast.success('User Registered Successfully!!!', { autoClose: 2000 });
    }
  }, [isSubmitted]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleCountryCodeChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      country_code: value,
      // country will be set by useEffect
    }));
    setTouched((prev) => ({ ...prev, country_code: true }));
    setErrors((prev) => ({
      ...prev,
      country_code: validateField('country_code', value),
      country: '', // clear country error if any
    }));
  };

  const handleCountryChange = (e) => {
    // Allow user to override country if needed
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      country: value,
    }));
    setTouched((prev) => ({ ...prev, country: true }));
    setErrors((prev) => ({
      ...prev,
      country: validateField('country', value),
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const validateAll = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });
    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    const validationErrors = validateAll();
    if (Object.values(validationErrors).some(Boolean)) {
      toast.error('Please fix the errors in the form.', { autoClose: 2000 });
      return;
    }
    try {
      const response = await fetch('https://gain-b7ea8e7de810.herokuapp.com/auth/sign-up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, role: FIXED_ROLE }),
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
            Sign Up As Client
          </h1>
          <p className="text-left text-gray-600 mb-6 ml-2">
            You are in good company.
          </p>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6" noValidate>
            {/* Render all fields except country_code and country */}
            {fields.map(({ label, name, type, placeholder }) => {
              if (name === 'country_code' || name === 'country') return null;
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
                    required={label.includes('*')}
                    className={`w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                      errors[name] && touched[name] ? 'border-red-500' : ''
                    }`}
                  />
                  {errors[name] && touched[name] && (
                    <span className="text-xs text-red-600 mt-1 block">{errors[name]}</span>
                  )}
                </div>
              );
            })}
            {/* Country Code Dropdown */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Country Code*</label>
              <select
                name="country_code"
                value={formData.country_code}
                onChange={handleCountryCodeChange}
                onBlur={handleBlur}
                required
                className={`w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.country_code && touched.country_code ? 'border-red-500' : ''
                }`}
              >
                <option value="">Select Country Code</option>
                {COUNTRY_CODES.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.country} ({c.code})
                  </option>
                ))}
              </select>
              {errors.country_code && touched.country_code && (
                <span className="text-xs text-red-600 mt-1 block">{errors.country_code}</span>
              )}
            </div>
            {/* Country Field (auto-filled, but editable) */}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Country*</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleCountryChange}
                onBlur={handleBlur}
                placeholder="Country"
                required
                className={`w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.country && touched.country ? 'border-red-500' : ''
                }`}
                readOnly={!!COUNTRY_CODES.find((c) => c.code === formData.country_code)}
                style={{
                  backgroundColor: !!COUNTRY_CODES.find((c) => c.code === formData.country_code)
                    ? '#f3f4f6'
                    : undefined,
                }}
              />
              {errors.country && touched.country && (
                <span className="text-xs text-red-600 mt-1 block">{errors.country}</span>
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

export default ClientSignUpModal;