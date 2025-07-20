import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

const PostProject = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    experience: '',
    location: '',
    start_date: '',
    duration: '',
    image: '',
    category: '',
    open_roles: '',
    role_descriptions: '',
    key_skills: '',
    budget: '',
    payment_type: '',
    budget_range: '',
    location_type: '',
    preferred_location: '',
    preferred_location_talent_requirements: '',
    questions_for_candidates: '',
    additional_questions: '',
    save_draft: false
  });
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setProjectData({ ...projectData, category });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProjectData({ ...projectData, [id]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const accessToken = Cookies.get('access_token');
    try {
      const response = await fetch('https://gain-b7ea8e7de810.herokuapp.com/projects/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({
          ...projectData,
          open_roles: projectData.open_roles.split(',').map(role => role.trim()),
          role_descriptions: projectData.role_descriptions.split(',').map(desc => desc.trim()),
          key_skills: projectData.key_skills.split(',').map(skill => skill.trim()),
          questions_for_candidates: projectData.questions_for_candidates.split(',').map(question => question.trim()),
          additional_questions: projectData.additional_questions.split(',').map(question => question.trim()),
          budget: parseFloat(projectData.budget),
        }),
      });

      if (response.ok) {
        toast.success('Project posted successfully!');
        navigate('/client/post-success');
      } else {
        toast.error('Failed to post project');
        console.error('Failed to post project');
      }
    } catch (error) {
      toast.error('An error occurred while posting the project');
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen py-6 px-2 sm:px-4 bg-gray-50">
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-2xl w-full max-w-lg sm:max-w-xl md:max-w-2xl">
        <h1 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Post a New Project</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {['Web Development', 'AI', 'Mobile Development', 'Other'].map((category) => (
              <div
                key={category}
                className={`bg-gray-100 p-3 sm:p-4 rounded-lg text-center cursor-pointer transition border ${
                  selectedCategory === category ? 'border-2 border-blue-500' : 'border-transparent'
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
              value={projectData.title}
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
              value={projectData.description}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter project description"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="open_roles">
              Open Roles
            </label>
            <input
              type="text"
              id="open_roles"
              value={projectData.open_roles}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter open roles (comma-separated)"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role_descriptions">
              Role Description
            </label>
            <textarea
              id="role_descriptions"
              value={projectData.role_descriptions}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter role descriptions (comma-separated)"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="key_skills">
              Key Skills
            </label>
            <input
              type="text"
              id="key_skills"
              value={projectData.key_skills}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter key skills (comma-separated)"
            />
          </div>
          <div className="mb-4 flex flex-col sm:flex-row sm:justify-between gap-3">
            <div className="sm:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="budget">
                Budget
              </label>
              <input
                type="text"
                id="budget"
                value={projectData.budget}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter budget"
              />
            </div>
            <div className="sm:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="payment_type">
                Payment Type
              </label>
              <input
                type="text"
                id="payment_type"
                value={projectData.payment_type}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter payment type"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="budget_range">
              Budget Range
            </label>
            <input
              type="text"
              id="budget_range"
              value={projectData.budget_range}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter budget range"
            />
          </div>
          <div className="mb-4 flex flex-col sm:flex-row sm:justify-between gap-3">
            <div className="sm:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="duration">
                Project Duration
              </label>
              <input
                type="text"
                id="duration"
                value={projectData.duration}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter project duration"
              />
            </div>
            <div className="sm:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start_date">
                Start Date
              </label>
              <input
                type="date"
                id="start_date"
                value={projectData.start_date}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="mb-4 flex flex-col sm:flex-row sm:justify-between gap-3">
            <div className="sm:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location_type">
                Location Type
              </label>
              <input
                type="text"
                id="location_type"
                value={projectData.location_type}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter location type"
              />
            </div>
            <div className="sm:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preferred_location">
                Preferred Location
              </label>
              <input
                type="text"
                id="preferred_location"
                value={projectData.preferred_location}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter preferred location"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preferred_location_talent_requirements">
              Preferred Location Talent Requirements
            </label>
            <input
              type="text"
              id="preferred_location_talent_requirements"
              value={projectData.preferred_location_talent_requirements}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter preferred location talent requirements"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="questions_for_candidates">
              Questions for Candidates
            </label>
            <textarea
              id="questions_for_candidates"
              value={projectData.questions_for_candidates}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter questions for candidates (comma-separated)"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setProjectData({ ...projectData, save_draft: true })}
              className="text-gray-500 font-bold py-2 px-4 focus:outline-none focus:shadow-outline w-full sm:w-auto"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto"
            >
              Post Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostProject;