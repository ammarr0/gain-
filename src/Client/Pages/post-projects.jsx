import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostProject = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/client/post-success');
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectTitle">
              Project Title
            </label>
            <input
              type="text"
              id="projectTitle"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter project title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectDescription">
              Project Description
            </label>
            <textarea
              id="projectDescription"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter project description"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="openRoles">
              Open Roles
            </label>
            <input
              type="text"
              id="openRoles"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter open roles"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="roleDescription">
              Role Description
            </label>
            <textarea
              id="roleDescription"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter role description"
            />
          </div>
          <div className="mb-4">
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="keySkills">
              Key Skills
            </label>
            <input
              type="text"
              id="keySkills"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter key skills"
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter budget"
              />
            </div>
            <div className="sm:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="paymentType">
                Payment Type
              </label>
              <input
                type="text"
                id="paymentType"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter payment type"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="budgetRange">
              Budget Range
            </label>
            <input
              type="text"
              id="budgetRange"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter budget range"
            />
          </div>
          <div className="mb-4 flex flex-col sm:flex-row sm:justify-between gap-3">
            <div className="sm:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectDuration">
                Project Duration
              </label>
              <input
                type="text"
                id="projectDuration"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter project duration"
              />
            </div>
            <div className="sm:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="mb-4 flex flex-col sm:flex-row sm:justify-between gap-3">
            <div className="sm:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="locationType">
                Location Type
              </label>
              <input
                type="text"
                id="locationType"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter location type"
              />
            </div>
            <div className="sm:w-1/2">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preferredLocation">
                Preferred Location
              </label>
              <input
                type="text"
                id="preferredLocation"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter preferred location"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="preferredLocationTalentRequirements">
              Preferred Location Talent Requirements
            </label>
            <input
              type="text"
              id="preferredLocationTalentRequirements"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter preferred location talent requirements"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="candidateQuestions">
              Questions for Candidates
            </label>
            <textarea
              id="candidateQuestions"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter questions for candidates"
            />
          </div>
          <div className="mb-4">
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
              Post Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostProject;