import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostCourses = () => {
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
        <>
        <div className='flex flex-col'>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="bg-yellow-100 rounded-2xl p-8 md:w-1/2 h-72 flex items-center">
                    <p className="text-3xl md:text-5xl text-gray-900 mb-2">
                        Teach and <br />
                        Transform <br/><strong>Live</strong> <br />
                    </p>
                </div>
                <div className="rounded-2xl border-2 border-yellow-100 p-8 md:w-1/2 flex items-center justify-center text-left">
                    <p className="text-gray-700 text-xl md:text-3xl leading-relaxed">
                        Browse opportunities and take the next step in your firm’s journey.
                    </p>
                </div>
            </div>
            <div className="text-center mt-12 md:mt-50">
                    <p className="text-2xl md:text-3xl leading-relaxed font-bold">
                        Create a new AI Course
                    </p>
                    <br/>
                    <p className="text-xl md:text-3xl leading-relaxed">
                        Browse opportunities and take the next step in your firm’s journey.
                    </p>
            </div>
            <div className="flex justify-center items-center w-full my-8">
                <div className="bg-white p-8 rounded-lg shadow-2xl max-w-full md:max-w-2xl w-full">
                    <h1 className="text-xl md:text-2xl font-semibold mb-4 text-center">Post a New Course</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                            {['Web Development', 'AI', 'Mobile Development', 'Other'].map((category) => (
                                <div
                                    key={category}
                                    className={`bg-gray-100 p-4 rounded-lg text-center cursor-pointer ${selectedCategory === category ? 'border-2 border-blue-500' : ''
                                        }`}
                                    onClick={() => handleCategoryClick(category)}
                                >
                                    <p className="text-gray-700 font-bold">{category}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseTitle">
                                Course Title
                            </label>
                            <input
                                type="text"
                                id="courseTitle"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter course title"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseDescription">
                                Course Description
                            </label>
                            <textarea
                                id="courseDescription"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter course description"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseModules">
                                Course Modules
                            </label>
                            <input
                                type="text"
                                id="courseModules"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter course modules"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="moduleDescription">
                                Module Description
                            </label>
                            <textarea
                                id="moduleDescription"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter module description"
                            />
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
                        <div className="mb-4 flex flex-col md:flex-row justify-between">
                            <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseDuration">
                                    Course Duration
                                </label>
                                <input
                                    type="text"
                                    id="courseDuration"
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Enter course duration"
                                />
                            </div>
                            <div className="w-full md:w-1/2 md:pl-2">
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
                        <div className="mb-4 flex flex-col md:flex-row justify-between">
                            <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
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
                            <div className="w-full md:w-1/2 md:pl-2">
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
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseRequirements">
                                Course Requirements
                            </label>
                            <input
                                type="text"
                                id="courseRequirements"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter course requirements"
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
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <button
                                type="button"
                                className="text-gray-500 font-bold py-2 px-4 focus:outline-none focus:shadow-outline mb-4 md:mb-0"
                            >
                                Save Draft
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Post Course
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </>
    );
};

export default PostCourses;