import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Star } from "lucide-react";
import { FaSearch, FaThLarge, FaGraduationCap, FaSlidersH, FaClock, FaDollarSign } from 'react-icons/fa';

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

const CourseCard = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const accessToken = getCookie('access_token');
        const response = await fetch("https://gain-b7ea8e7de810.herokuapp.com/courses/list", {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const result = await response.json();
        setCourses(Array.isArray(result.data) ? result.data : []);
      } catch (error) {
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  // Navigate using id
  const handleCourseClick = (courseId) => {
    if (courseId) {
      navigate(`/client/main-course/${courseId}`);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-4 p-2" >
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
      {loading ? (
        <div className="p-6 text-center text-gray-500">Loading courses...</div>
      ) : courses && courses.length > 0 ? (
        courses.map((course, index) => (
          <div 
            key={course._id || index} 
            className="w-full bg-white p-6 flex flex-col sm:flex-row items-start gap-6 mb-4 border-b cursor-pointer"
            onClick={() => handleCourseClick(course._id)}
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
                <span className="font-semibold">{"4.8"}</span>
                <span className="text-gray-500">· {"15 Reviews"}</span>
              </div>
              <div className="text-xs text-gray-500">
                {course.course_level} · Course · {course.estimated_time}
              </div>
            </div>
            <div className="w-full sm:w-60 h-60 bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
              {Array.isArray(course.media) && course.media.length > 0 && course.media.some(url => url.match(/\.(jpeg|jpg|gif|png)$/i)) ? (
                <img
                  src={course.media.find(url => url.match(/\.(jpeg|jpg|gif|png)$/i))}
                  alt={course.title}
                  className="object-cover w-full h-full rounded-lg"
                />
              ) : (
                <div className="text-gray-400 text-4xl">🎓</div>
              )}
              <div className="absolute top-2 right-2 text-gray-400 text-xl cursor-pointer">♡</div>
            </div>
          </div>
        ))
      ) : (
        <div className="p-6 text-center text-gray-500">No courses found.</div>
      )}
    </>
  );
};

export default CourseCard;