import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validateField = (name, value) => {
  switch (name) {
    case 'first_name':
    case 'last_name':
    case 'country':
    case 'city':
    case 'street':
      if (!value.trim()) return 'This field is required';
      break;
    case 'role':
      if (!value) return 'Please select a role';
      break;
    case 'email':
      if (!value.trim()) return 'Email is required';
      // Simple email regex
      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(value)) return 'Invalid email address';
      break;
    case 'dob':
      if (!value) return 'Date of Birth is required';
      break;
    case 'country_code':
      if (!value.trim()) return 'Country code is required';
      if (!/^\+?\d{1,4}$/.test(value)) return 'Invalid country code';
      break;
    case 'phone_no':
      if (!value.trim()) return 'Phone number is required';
      if (!/^\d{7,15}$/.test(value.replace(/\D/g, ''))) return 'Invalid phone number';
      break;
    case 'password':
      if (!value) return 'Password is required';
      if (value.length < 6) return 'Password must be at least 6 characters';
      break;
    case 'website':
      if (!value.trim()) return 'Website is required';
      if (!/^https?:\/\/.+\..+/.test(value)) return 'Invalid URL';
      break;
    case 'linkedin':
      if (!value.trim()) return 'LinkedIn is required';
      if (!/^https?:\/\/(www\.)?linkedin\.com\/.+/.test(value)) return 'Invalid LinkedIn URL';
      break;
    case 'image':
      if (value && !/^https?:\/\/.+\..+/.test(value)) return 'Invalid image URL';
      break;
    default:
      break;
  }
  return '';
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [touched, setTouched] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (isSubmitted) {
      toast.success('User Registered Successfully!!!', { autoClose: 2000 });
    }
  }, [isSubmitted]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Validate on change
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
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
    const validationErrors = validateAll();
    setTouched(
      Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );
    if (Object.values(validationErrors).some(Boolean)) {
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
            Sign Up As Client
          </h1>
          <p className="text-left text-gray-600 mb-6 ml-2">
            You are in good company.
          </p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6" noValidate>
            {[
              { label: 'Image URL', name: 'image', type: 'url', placeholder: 'http://example.com/image.jpg' },
              { label: 'First Name*', name: 'first_name', type: 'text', placeholder: 'First Name' },
              { label: 'Last Name*', name: 'last_name', type: 'text', placeholder: 'Last Name' },
              {
                label: 'Role*',
                name: 'role',
                type: 'select',
                options: [
                  'CUSTOMER_SUPPORT',
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
                    required={label.includes('*')}
                    className={`w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                      errors[name] && touched[name] ? 'border-red-500' : ''
                    }`}
                  />
                )}
                {errors[name] && touched[name] && (
                  <span className="text-xs text-red-600 mt-1 block">{errors[name]}</span>
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