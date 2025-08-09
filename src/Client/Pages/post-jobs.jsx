import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

// Helper function to decode JWT
function decodeJWT(token) {
  if (!token) return null;
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
}

const initialFormData = {
  title: '',
  description: '',
  project_type: '',
  skills: '',
  files: [],
  location: '',
  hourly_rate: '',
  duration: '',
  preferred_location: '',
  start_date: '',
  category: '',
  payment_type: '',
  budget_range: '',
  experience_level: '',
  number_of_applicants: 0,
  questions_for_candidates: '',
  is_disabled: false,
  is_deleted: false,
};

const PostJobs = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setFormData({ ...formData, category, project_type: category });
  };

  const handleChange = (e) => {
    const { id, value, type } = e.target;
    if (id === 'number_of_applicants') {
      setFormData({ ...formData, [id]: Number(value) });
    } else if (id === 'files') {
      setFormData({ ...formData, files: Array.from(e.target.files) });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const accessToken = Cookies.get('access_token');
    // Decode and console log the access token
    const decoded = decodeJWT(accessToken);
    console.log('Decoded access_token:', decoded);

    try {
      const response = await fetch('https://gain-b7ea8e7de810.herokuapp.com/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          ...formData,
          skills: formData.skills
            ? formData.skills.split(',').map(skill => skill.trim()).filter(Boolean)
            : [],
          files: formData.files || [],
          number_of_applicants: Number(formData.number_of_applicants) || 0,
          questions_for_candidates: formData.questions_for_candidates
            ? formData.questions_for_candidates.split('\n').map(q => q.trim()).filter(Boolean)
            : [],
          is_disabled: false,
          is_deleted: false,
        }),
      });

      if (response.ok) {
        toast.success('Job posted successfully!');
        navigate('/client/post-success');
      } else {
        toast.error('Failed to post job. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen py-6 px-2 sm:px-4 bg-gray-50">
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-2xl w-full max-w-lg sm:max-w-xl md:max-w-2xl">
        <h1 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Post a New Job</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {['Web Development', 'AI', 'Mobile Development', 'Other'].map((category) => (
              <div
                key={category}
                className={`bg-gray-100 p-3 sm:p-4 rounded-lg text-center cursor-pointer transition border ${selectedCategory === category ? 'border-2 border-blue-500' : 'border-transparent'
                  }`}
                onClick={() => handleCategoryClick(category)}
              >
                <p className="text-gray-700 font-bold text-sm sm:text-base">{category}</p>
              </div>
            ))}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Project Title
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter project title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Project Description
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter project description"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skills">
              Key Skills
            </label>
            <input
              type="text"
              id="skills"
              value={formData.skills}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter key skills (comma-separated)"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="files">
              Attach Files
            </label>
            <input
              type="file"
              id="files"
              multiple
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="hourly_rate">
              Hourly Rate
            </label>
            <input
              type="text"
              id="hourly_rate"
              value={formData.hourly_rate}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter hourly rate"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="duration">
              Project Duration
            </label>
            <input
              type="text"
              id="duration"
              value={formData.duration}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter project duration (e.g. 3 months)"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={formData.location}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter location"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preferred_location">
              Preferred Location
            </label>
            <input
              type="text"
              id="preferred_location"
              value={formData.preferred_location}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter preferred location (optional)"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start_date">
              Start Date
            </label>
            <input
              type="date"
              id="start_date"
              value={formData.start_date}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Select start date"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="payment_type">
              Payment Type
            </label>
            <select
              id="payment_type"
              value={formData.payment_type}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select payment type</option>
              <option value="Hourly">Hourly</option>
              <option value="Fixed">Fixed</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="budget_range">
              Budget Range
            </label>
            <input
              type="text"
              id="budget_range"
              value={formData.budget_range}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter budget range (e.g. $500 - $1000)"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experience_level">
              Experience Level
            </label>
            <select
              id="experience_level"
              value={formData.experience_level}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select experience level</option>
              <option value="Entry">Entry</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number_of_applicants">
              Number of Applicants
            </label>
            <input
              type="number"
              id="number_of_applicants"
              value={formData.number_of_applicants}
              onChange={handleChange}
              min={0}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter number of applicants"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="questions_for_candidates">
              Questions for Candidates
            </label>
            <textarea
              id="questions_for_candidates"
              value={formData.questions_for_candidates}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter questions (one per line)"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              className="text-gray-500 font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full sm:w-auto"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto"
            >
              Post Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJobs;