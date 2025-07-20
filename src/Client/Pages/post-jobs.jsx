import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

const PostJobs = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    project_type: '',
    skills: '',
    location: '',
    hourly_rate: '',
  });
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setFormData({ ...formData, project_type: category });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const accessToken = Cookies.get('access_token');
    try {
      const response = await fetch('https://gain-b7ea8e7de810.herokuapp.com/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          ...formData,
          skills: formData.skills.split(',').map(skill => skill.trim()),
          files: [],
          is_disabled: false,
          is_deleted: false,
          created_by: '',
          updated_by: '',
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