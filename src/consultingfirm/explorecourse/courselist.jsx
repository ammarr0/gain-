import React from "react";
import { useNavigate } from 'react-router-dom';
import { Star } from "lucide-react";
import Data from "../../DB/course.json";
import { FaSearch, FaThLarge, FaGraduationCap, FaSlidersH, FaClock, FaDollarSign } from 'react-icons/fa';

const CourseCard = () => {
  const navigate = useNavigate();

  const handleCourseClick = () => {
    navigate(`/consultingfirm/main-course`);
  };

  return (
    <>
      <div className="flex flex-wrap gap-4 p-2">
        <div className="flex items-center border rounded px-3 py-2 w-64">
          <FaSearch className="mr-2 text-gray-500" />
          <input
            type="text"
            placeholder="Search for Courses"
            className="w-full outline-none bg-transparent text-gray-500"
          />
        </div>
        <button className="flex items-center border rounded px-4 py-2 text-gray-500">
          <FaThLarge className="mr-2 text-gray-500" /> Categories
        </button>
        <button className="flex items-center border rounded px-4 py-2 text-gray-500">
          <FaGraduationCap className="mr-2 text-gray-500" /> Course Type
        </button>
        <button className="flex items-center border rounded px-4 py-2 text-gray-500">
          <FaSlidersH className="mr-2 text-gray-500" /> Skill Level
        </button>
        <button className="flex items-center border rounded px-4 py-2 text-gray-500">
          <FaClock className="mr-2 text-gray-500" /> Duration
        </button>
        <button className="flex items-center border rounded px-4 py-2 text-gray-500">
          <FaDollarSign className="mr-2 text-gray-500" /> Pricing
        </button>
      </div>
      {Data.map((course, index) => (
        <div 
          key={index} 
          className="w-full bg-white p-6 flex flex-col sm:flex-row items-start gap-6 mb-4 border-b cursor-pointer"
          onClick={() => handleCourseClick(course.id)}
        >
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {course.title}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              {course.description}
            </p>
            <div className="flex items-center text-sm text-gray-700 gap-2 mb-1">
              <Star className="text-yellow-500 fill-yellow-500 w-4 h-4" />
              <span className="font-semibold">{course.rating}</span>
              <span className="text-gray-500">· {course.reviews} Review{course.reviews > 1 ? 's' : ''}</span>
            </div>
            <div className="text-xs text-gray-500">
              {course.level} · Course · {course.duration}
            </div>
          </div>
          <div className="w-full sm:w-60 h-60 bg-gray-100 rounded-lg flex items-center justify-center relative">
            <div className="absolute top-2 right-2 text-gray-400 text-xl cursor-pointer">♡</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CourseCard;