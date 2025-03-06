import React, { useState } from 'react';

const insightsData = [
  { date: '27-12-2024', title: 'Maximise your freelance income by learning the art of effective pricing', author: 'GAIN', category: 'For Talent' },
  { date: '12-12-2024', title: 'How to approach your independent career like an entrepreneur', author: 'GAIN', category: 'For Talent' },
  { date: '27-12-2024', title: 'How to choose the right talent partner for your organisation', author: 'GAIN', category: 'For Client' },
  { date: '27-12-2024', title: 'Mastering Remote Work: Best Practices for Productivity', author: 'GAIN', category: 'For Talent' },
  { date: '12-12-2024', title: 'The Future of AI in Freelancing', author: 'GAIN', category: 'For Client' },
  { date: '20-12-2024', title: 'How to Build Strong Client Relationships', author: 'GAIN', category: 'For Talent' },
];

const Insights = () => {
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');

  // Filtered results based on category and search query
  const filteredInsights = insightsData.filter(
    (insight) =>
      (category === '' || insight.category === category) &&
      insight.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        {/* Title & Subheading */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Insights</h1>
          <p className="text-gray-600 text-sm max-w-sm">
            Articles, guides, and interviews for clients and talentt.
          </p>
        </div>
        {/* Large Gray Placeholder */}
        <div className="bg-gray-300 h-32 w-full md:w-[700px] rounded-lg"></div>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 items-center mb-8">
        {/* Category Dropdown */}
        <select
          className="border rounded-md px-4 py-2 w-[580px] focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select a category</option>
          <option value="For Talent">For Talent</option>
          <option value="For Client">For Client</option>
        </select>

        {/* Search Input */}
        <div className="relative w-[580px]">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="absolute right-4 top-0 bottom-0 bg-gray-800 text-white mr-4 px-4 py-2 rounded-full hover:bg-gray-700 m-1 flex items-center justify-center">
            Search
          </button>
        </div>
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-2">
        {filteredInsights.map((insight, index) => (
          <div
            key={index}
            className="border p-3 rounded-2xl shadow-sm bg-white w-[85%] mx-auto 
                       flex flex-col transition-transform transform hover:scale-105"
          >
            {/* Placeholder Image (height increased to h-48) */}
            <div className="bg-gray-300 h-48 w-full rounded-2xl mb-4"></div>

            {/* Date */}
            <p className="text-sm text-gray-500">{insight.date}</p>

            {/* Title */}
            <h2 className="font-semibold text-lg text-gray-800 mt-2 flex-grow">
              {insight.title}
            </h2>

            {/* Author & Category */}
            <p className="text-sm text-gray-600 mt-1">By {insight.author}</p>
            <p className="text-xs text-gray-500 mt-1">{insight.category}</p>

            <hr className="my-2" />

            {/* Footer (Read Button & Icon) */}
            <div className="flex justify-between items-center">
              <button className="text-blue-600 font-medium">Read Insight</button>
              <span className="text-xl">↗</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;
