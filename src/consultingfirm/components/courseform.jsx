import React, { useState } from 'react';
import {
  Laptop,
  LayoutTemplate,
  Megaphone,
  Settings2,
} from 'lucide-react'; // or use any icons you prefer

const categories = [
  { label: 'Development', icon: <Laptop size={24} /> },
  { label: 'Web Design', icon: <LayoutTemplate size={24} /> },
  { label: 'Marketing', icon: <Megaphone size={24} /> },
  { label: 'Other', icon: <Settings2 size={24} /> },
];

const CreateCoursePage = () => {
  const [category, setCategory] = useState('Development');

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <div className="bg-yellow-100 p-6 rounded-lg h-72 flex items-center justify-start">
          <h1 className="text-5xl font-bold leading-tight text-gray-900">
            Teach and <br />
            Transform <br />
            <span className="text-black">Lives!</span>
          </h1>
        </div>
        <div className="border border-yellow-600 p-6 rounded-lg h-72 flex items-center justify-start">
          <p className="text-2xl text-gray-700 leading-relaxed">
            Create impactful courses <br />
            and share your expertise <br />
            with the world.
          </p>
        </div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">
          Create a New AI Course
        </h2>
        <p className="text-gray-600 max-w-xl">
          Share your expertise and connect with learners globally. Complete the form below to publish your course.
        </p>
      </div>

      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl">
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Course Category</h3>
          <p className="text-sm text-gray-500 mb-4">
            Please select which service you are interested in.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setCategory(cat.label)}
                className={`flex flex-col items-center justify-center p-4 border rounded-xl transition-all duration-200 ${
                  category === cat.label
                    ? 'border-blue-500 bg-blue-50 text-blue-600 shadow-sm'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300'
                }`}
              >
                <div className="mb-2">{cat.icon}</div>
                <span className="text-sm font-medium">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Course Title</label>
          <input
            type="text"
            className="w-full border rounded-md p-2"
            placeholder="AI for You"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Short Description</label>
          <textarea
            className="w-full border rounded-md p-2"
            rows="2"
            placeholder="Provide a one-line summary of what this course covers."
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Course Objectives</label>
          <textarea
            className="w-full border rounded-md p-2"
            rows="2"
            placeholder="List key takeaways or learning goals."
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Course Module</label>
          <input
            type="text"
            className="w-full border rounded-md p-2"
            placeholder="e.g. 1. Introduction to AI"
          />
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">Pricing Model</label>
            <select className="w-full border rounded-md p-2">
              <option>Free</option>
              <option>Paid</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium">Course Price ($)</label>
            <input
              type="number"
              className="w-full border rounded-md p-2"
              placeholder="50"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Course Schedule</label>
          <div className="flex items-center gap-3">
            <select className="border p-2 rounded-md">
              <option>Live</option>
              <option>Recorded</option>
            </select>
            <label>Start Date:</label>
            <input type="date" className="border p-2 rounded-md" />
          </div>
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium">Materials</label>
          <div className="border-dashed border-2 border-gray-300 p-6 rounded-md text-center text-sm text-gray-500">
            PDF, video, etc. <br />
            <span className="font-medium">Click or drag files here</span>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            className="text-gray-600 hover:underline"
          >
            Save Draft
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCoursePage;