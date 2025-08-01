// src/pages/home/components/FeaturedCourses.jsx
import React, { useRef } from 'react';
import { courses } from '../../AITrainings'; // Adjust if needed
import CourseCard from '../../../components/CourseCard'; // Adjust if needed

const FeaturedCourses = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="p-4 sm:p-8 max-w-8xl mx-auto">
      {/* Header + Arrows */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
        <h2 className="text-2xl sm:text-4xl font-lg text-center sm:text-left ml-0 sm:ml-12 text-gray-800">Featured Courses</h2>
        <div className="mt-2 sm:mt-0 space-x-2">
          <button
            onClick={scrollLeft}
            className="p-2 bg-white text-gray-600 rounded-full hover:bg-gray-300 focus:outline-none"
          >
            <img src="/assets/back.png" alt="Back" className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 bg-white text-gray-600 rounded-full hover:bg-gray-300 focus:outline-none"
          >
            <img src="/assets/next.png" alt="Next" className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={sliderRef}
        className="hide-scrollbar flex space-x-4 sm:space-x-10 px-2 sm:px-4 overflow-x-auto scroll-smooth pb-4"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {courses.map((course, index) => (
          <div key={index} className="min-w-[200px] sm:min-w-[270px] flex-shrink-0">
            <CourseCard {...course} />
          </div>
        ))}
      </div>

      {/* View All Link */}
      <div className="mt-4 flex justify-center sm:justify-end">
        <a href="/ai-trainings">
          <button className="text-[#4E96F7] font-semibold hover:underline">
            View All
          </button>
        </a>
      </div>
    </section>
  );
};

export default FeaturedCourses;
