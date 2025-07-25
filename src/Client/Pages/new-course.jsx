import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return '';
}

const PostCourses = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        media: [],
        course_level: '',
        estimated_time: '',
        category: '',
    });
    const [mediaInput, setMediaInput] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setFormData((prev) => ({
            ...prev,
            category,
        }));
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleMediaAdd = () => {
        if (mediaInput.trim() !== '') {
            setFormData((prev) => ({
                ...prev,
                media: [...prev.media, mediaInput.trim()],
            }));
            setMediaInput('');
        }
    };

    const handleMediaRemove = (index) => {
        setFormData((prev) => ({
            ...prev,
            media: prev.media.filter((_, i) => i !== index),
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        const payload = {
            ...formData,
        };
        const accessToken = getCookie('access_token');

        try {
            const response = await fetch('https://gain-b7ea8e7de810.herokuapp.com/courses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken || ''}`,
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                navigate('/client/post-success');
            } else {
                toast.error('Failed to post course. Please try again.');
            }
        } catch (error) {
            toast.error('An error occurred while posting the course.');
        } finally {
            setIsSubmitting(false);
        }
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
                                    className={`bg-gray-100 p-4 rounded-lg text-center cursor-pointer ${formData.category === category ? 'border-2 border-blue-500' : ''
                                        }`}
                                    onClick={() => handleCategoryClick(category)}
                                >
                                    <p className="text-gray-700 font-bold">{category}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                Course Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter course title"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                Course Description
                            </label>
                            <textarea
                                id="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter course description"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="media">
                                Media (URLs, one at a time)
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    id="mediaInput"
                                    value={mediaInput}
                                    onChange={e => setMediaInput(e.target.value)}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Add media URL"
                                />
                                <button
                                    type="button"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    onClick={handleMediaAdd}
                                    disabled={!mediaInput.trim()}
                                >
                                    Add
                                </button>
                            </div>
                            <ul className="mt-2">
                                {formData.media.map((url, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <span className="text-sm text-gray-700 break-all">{url}</span>
                                        <button
                                            type="button"
                                            className="text-red-500 text-xs"
                                            onClick={() => handleMediaRemove(idx)}
                                        >
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course_level">
                                Course Level
                            </label>
                            <select
                                id="course_level"
                                value={formData.course_level}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                required
                            >
                                <option value="">Select level</option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="estimated_time">
                                Estimated Time (e.g. 4-6 weeks)
                            </label>
                            <input
                                type="text"
                                id="estimated_time"
                                value={formData.estimated_time}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter estimated time"
                                required
                            />
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <button
                                type="button"
                                className="text-gray-500 font-bold py-2 px-4 focus:outline-none focus:shadow-outline mb-4 md:mb-0"
                                disabled={isSubmitting}
                            >
                                Save Draft
                            </button>
                            <button
                                type="submit"
                                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Posting...' : 'Post Course'}
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