import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import { Star } from "lucide-react";
import { FaSearch, FaThLarge, FaGraduationCap, FaSlidersH, FaClock, FaDollarSign, FaRegBookmark, FaBookmark } from 'react-icons/fa';

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

const getUnique = (arr, key) => {
  return Array.from(new Set(arr.map(item => item[key]))).filter(Boolean);
};

const CARDS_PER_PAGE = 10;

const CourseCard = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedPricing, setSelectedPricing] = useState("");

  const [openDropdown, setOpenDropdown] = useState(null);
  const [savedCourses, setSavedCourses] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

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
        if (!response.ok) throw new Error('Failed to fetch courses');
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

  const categories = useMemo(() => getUnique(courses, "category"), [courses]);
  const types = useMemo(() => getUnique(courses, "course_type"), [courses]);
  const levels = useMemo(() => getUnique(courses, "course_level"), [courses]);
  const durations = useMemo(() => getUnique(courses, "estimated_time"), [courses]);
  const pricings = useMemo(() => getUnique(courses, "pricing"), [courses]);

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch =
        !search ||
        (course.title && course.title.toLowerCase().includes(search.toLowerCase())) ||
        (course.description && course.description.toLowerCase().includes(search.toLowerCase()));
      const matchesCategory = !selectedCategory || course.category === selectedCategory;
      const matchesType = !selectedType || course.course_type === selectedType;
      const matchesLevel = !selectedLevel || course.course_level === selectedLevel;
      const matchesDuration = !selectedDuration || course.estimated_time === selectedDuration;
      const matchesPricing = !selectedPricing || course.pricing === selectedPricing;
      return (
        matchesSearch &&
        matchesCategory &&
        matchesType &&
        matchesLevel &&
        matchesDuration &&
        matchesPricing
      );
    });
  }, [courses, search, selectedCategory, selectedType, selectedLevel, selectedDuration, selectedPricing]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategory, selectedType, selectedLevel, selectedDuration, selectedPricing]);

  const totalPages = Math.ceil(filteredCourses.length / CARDS_PER_PAGE);
  const paginatedCourses = useMemo(() => {
    const startIdx = (currentPage - 1) * CARDS_PER_PAGE;
    return filteredCourses.slice(startIdx, startIdx + CARDS_PER_PAGE);
  }, [filteredCourses, currentPage]);

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleDropdownSelect = (dropdown, value) => {
    switch (dropdown) {
      case "category":
        setSelectedCategory(value);
        break;
      case "type":
        setSelectedType(value);
        break;
      case "level":
        setSelectedLevel(value);
        break;
      case "duration":
        setSelectedDuration(value);
        break;
      case "pricing":
        setSelectedPricing(value);
        break;
      default:
        break;
    }
    setOpenDropdown(null);
  };

  const handleCourseClick = (courseId) => {
    if (courseId) {
      navigate(`/talent/main-course/${courseId}`);
    }
  };

  const handleSaveClick = (e, courseId) => {
    e.stopPropagation();
    setSavedCourses(prev => ({
      ...prev,
      [courseId]: !prev[courseId]
    }));
  };

  const getButtonLabel = (type, selected, defaultLabel) => {
    if (!selected) return defaultLabel;
    return (
      <span>
        {defaultLabel}: <span className="font-semibold text-blue-600">{selected}</span>
      </span>
    );
  };

  useEffect(() => {
    if (!openDropdown) return;
    const handleClick = (e) => {
      if (!e.target.closest(".dropdown-filter")) setOpenDropdown(null);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [openDropdown]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    if (totalPages <= 1) return null;
    const pages = [];
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 3) {
      end = Math.min(5, totalPages);
    } else if (currentPage >= totalPages - 2) {
      start = Math.max(1, totalPages - 4);
    }

    if (start > 1) {
      pages.push(
        <button
          key={1}
          className={`px-2 py-1 rounded ${currentPage === 1 ? "bg-black text-white" : "bg-white text-black border border-black"}`}
          onClick={() => handlePageChange(1)}
        >1</button>
      );
      if (start > 2) {
        pages.push(<span key="start-ellipsis" className="px-2 text-black">...</span>);
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          className={`px-2 py-1 rounded ${currentPage === i ? "bg-black text-white" : "bg-white text-black border border-black"}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    if (end < totalPages) {
      if (end < totalPages - 1) {
        pages.push(<span key="end-ellipsis" className="px-2 text-black">...</span>);
      }
      pages.push(
        <button
          key={totalPages}
          className={`px-2 py-1 rounded ${currentPage === totalPages ? "bg-black text-white" : "bg-white text-black border border-black"}`}
          onClick={() => handlePageChange(totalPages)}
        >{totalPages}</button>
      );
    }

    return pages;
  };

  return (
    <>
      <div className="flex flex-wrap gap-4 ">
        <div className="flex items-center border rounded px-3 py-2 w-64 bg-white">
          <FaSearch className="mr-2 text-gray-500" />
          <input
            type="text"
            placeholder="Search for Courses"
            className="w-full outline-none bg-transparent text-gray-500"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="relative dropdown-filter">
          <button
            className="flex items-center border rounded px-4 py-2 text-gray-500 bg-white"
            onClick={() => handleDropdownToggle("category")}
            type="button"
          >
            <FaThLarge className="mr-2 text-gray-500" />
            {getButtonLabel("category", selectedCategory, "Categories")}
            {selectedCategory && (
              <span
                className="ml-2 text-xs text-red-500 cursor-pointer"
                onClick={e => {
                  e.stopPropagation();
                  setSelectedCategory("");
                }}
                title="Clear"
              >
                ✕
              </span>
            )}
          </button>
          {openDropdown === "category" && (
            <div className="absolute z-10 mt-2 w-48 bg-white border rounded shadow-lg max-h-60 overflow-auto">
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleDropdownSelect("category", "")}
              >
                All Categories
              </div>
              {categories.map((cat, idx) => {
                if (typeof cat === "string" && /^[a-fA-F0-9]{24}$/.test(cat)) {
                  return null;
                }
                return (
                  <div
                    key={cat || idx}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleDropdownSelect("category", cat)}
                  >
                    {cat}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="relative dropdown-filter">
          <button
            className="flex items-center border rounded px-4 py-2 text-gray-500 bg-white"
            onClick={() => handleDropdownToggle("type")}
            type="button"
          >
            <FaGraduationCap className="mr-2 text-gray-500" />
            {getButtonLabel("type", selectedType, "Course Type")}
            {selectedType && (
              <span
                className="ml-2 text-xs text-red-500 cursor-pointer"
                onClick={e => {
                  e.stopPropagation();
                  setSelectedType("");
                }}
                title="Clear"
              >
                ✕
              </span>
            )}
          </button>
          {openDropdown === "type" && (
            <div className="absolute z-10 mt-2 w-48 bg-white border rounded shadow-lg max-h-60 overflow-auto">
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleDropdownSelect("type", "")}
              >
                All Types
              </div>
              {types.map((type, idx) => (
                <div
                  key={type || idx}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleDropdownSelect("type", type)}
                >
                  {type}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="relative dropdown-filter">
          <button
            className="flex items-center border rounded px-4 py-2 text-gray-500 bg-white"
            onClick={() => handleDropdownToggle("level")}
            type="button"
          >
            <FaSlidersH className="mr-2 text-gray-500" />
            {getButtonLabel("level", selectedLevel, "Skill Level")}
            {selectedLevel && (
              <span
                className="ml-2 text-xs text-red-500 cursor-pointer"
                onClick={e => {
                  e.stopPropagation();
                  setSelectedLevel("");
                }}
                title="Clear"
              >
                ✕
              </span>
            )}
          </button>
          {openDropdown === "level" && (
            <div className="absolute z-10 mt-2 w-48 bg-white border rounded shadow-lg max-h-60 overflow-auto">
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleDropdownSelect("level", "")}
              >
                All Levels
              </div>
              {levels.map((level, idx) => (
                <div
                  key={level || idx}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleDropdownSelect("level", level)}
                >
                  {level}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="relative dropdown-filter">
          <button
            className="flex items-center border rounded px-4 py-2 text-gray-500 bg-white"
            onClick={() => handleDropdownToggle("duration")}
            type="button"
          >
            <FaClock className="mr-2 text-gray-500" />
            {getButtonLabel("duration", selectedDuration, "Duration")}
            {selectedDuration && (
              <span
                className="ml-2 text-xs text-red-500 cursor-pointer"
                onClick={e => {
                  e.stopPropagation();
                  setSelectedDuration("");
                }}
                title="Clear"
              >
                ✕
              </span>
            )}
          </button>
          {openDropdown === "duration" && (
            <div className="absolute z-10 mt-2 w-48 bg-white border rounded shadow-lg max-h-60 overflow-auto">
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleDropdownSelect("duration", "")}
              >
                All Durations
              </div>
              {durations.map((duration, idx) => (
                <div
                  key={duration || idx}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleDropdownSelect("duration", duration)}
                >
                  {duration}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="relative dropdown-filter">
          <button
            className="flex items-center border rounded px-4 py-2 text-gray-500 bg-white"
            onClick={() => handleDropdownToggle("pricing")}
            type="button"
          >
            <FaDollarSign className="mr-2 text-gray-500" />
            {getButtonLabel("pricing", selectedPricing, "Pricing")}
            {selectedPricing && (
              <span
                className="ml-2 text-xs text-red-500 cursor-pointer"
                onClick={e => {
                  e.stopPropagation();
                  setSelectedPricing("");
                }}
                title="Clear"
              >
                ✕
              </span>
            )}
          </button>
          {openDropdown === "pricing" && (
            <div className="absolute z-10 mt-2 w-48 bg-white border rounded shadow-lg max-h-60 overflow-auto">
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleDropdownSelect("pricing", "")}
              >
                All Pricing
              </div>
              {pricings.map((pricing, idx) => (
                <div
                  key={pricing || idx}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleDropdownSelect("pricing", pricing)}
                >
                  {pricing}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {loading ? (
        <div className="p-6 text-center text-gray-500">Loading courses...</div>
      ) : filteredCourses && filteredCourses.length > 0 ? (
        <>
          {paginatedCourses.map((course, index) => (
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
                <button
                  className="absolute top-2 right-2 text-xl cursor-pointer bg-white bg-opacity-80 rounded-full p-1 border border-gray-200 hover:bg-opacity-100 transition"
                  title={savedCourses[course._id] ? "Unsave" : "Save"}
                  onClick={e => handleSaveClick(e, course._id)}
                  tabIndex={0}
                  aria-label={savedCourses[course._id] ? "Unsave course" : "Save course"}
                >
                  {savedCourses[course._id] ? (
                    <FaBookmark className="text-blue-600" />
                  ) : (
                    <FaRegBookmark className="text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          ))}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 my-6">
              <button
                className={`px-3 py-1 rounded ${currentPage === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-black text-white border border-black"}`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              {renderPageNumbers()}
              <button
                className={`px-3 py-1 rounded ${currentPage === totalPages ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-black text-white border border-black"}`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
              <span className="ml-4 text-sm text-black">
                Page {currentPage} of {totalPages}
              </span>
            </div>
          )}
        </>
      ) : (
        <div className="p-6 text-center text-gray-500">No courses found.</div>
      )}
    </>
  );
};

export default CourseCard;