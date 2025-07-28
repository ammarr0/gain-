import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from "../../Client/Components/coursecard";

const BlueCircleLoader = () => (
  <div className="flex justify-center items-center py-8">
    <div
      className="animate-spin rounded-full border-4 border-blue-500 border-t-transparent h-12 w-12"
      role="status"
      aria-label="Loading"
    />
  </div>
);

const TABS = [
  { label: 'Project Management Courses', key: 'pm' },
  { label: 'All Courses', key: 'all' },
  { label: 'Saved Courses', key: 'saved' }
];

const Explore = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('pm');
  const [savedCourses, setSavedCourses] = useState(() => {
    const saved = localStorage.getItem('savedCourses');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://gain-b7ea8e7de810.herokuapp.com/course/list', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access-token')}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setCourses(data);
        } else {
          console.error('Failed to fetch course data');
        }
      } catch (error) {
        console.error('Error fetching course data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handlePostCourseClick = () => {
    navigate('/talent/post-course');
  };

  let displayedCourses = courses;
  if (activeTab === 'saved') {
    displayedCourses = courses.filter(course => savedCourses.includes(course.id));
  } else if (activeTab === 'pm') {
    displayedCourses = courses.filter(course =>
      course.category?.toLowerCase().includes('project management')
    );
  }

  const handleSaveCourse = (courseId) => {
    setSavedCourses(prev => {
      let updated;
      if (prev.includes(courseId)) {
        updated = prev.filter(id => id !== courseId);
      } else {
        updated = [...prev, courseId];
      }
      localStorage.setItem('savedCourses', JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row bg-white">
      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/4 p-4 lg:p-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="bg-[#C7E1FF] rounded-2xl p-8 md:w-1/2 h-72">
                <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-2">
                  Discover <br />
                  Your Next <span className="font-bold">Opportunity</span> <br />
                  as a Firm
                </h1>
              </div>
              <div className="rounded-2xl border-2 border-blue-200 p-8 md:w-1/2 flex items-center justify-center text-left">
                <p className="text-gray-700 text-xl md:text-3xl leading-relaxed">
                  Browse opportunities and take the next step in your firm’s journey.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6 border-b border-gray-200 mb-8 overflow-x-auto">
              {TABS.map(tab => (
                <button
                  key={tab.key}
                  className={`pb-2 font-semibold ${
                    activeTab === tab.key
                      ? 'text-gray-900 border-b-4 border-blue-500'
                      : 'text-gray-500'
                  }`}
                  onClick={() => setActiveTab(tab.key)}
                  disabled={activeTab === tab.key}
                  tabIndex={activeTab === tab.key ? -1 : 0}
                  style={
                    activeTab === tab.key
                      ? {}
                      : { cursor: 'pointer', opacity: 0.6 }
                  }
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="mb-8">
              <button
                onClick={handlePostCourseClick}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Post a New Course
              </button>
            </div>
            <div>
              {loading ? (
                <BlueCircleLoader />
              ) : (
                <CourseCard
                  courses={displayedCourses}
                  onSaveCourse={handleSaveCourse}
                  savedCourses={savedCourses}
                />
              )}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/4 p-4 lg:p-6 ml-auto rounded-lg">
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl text-white">
                <span className="font-semibold">C</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#030923]">Clay</h3>
                <p className="text-sm text-gray-600">Consulting Firm</p>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span>4.5</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-xs text-[#007DF0]">Complete your profile</h4>
              {["Profile", "Portfolio", "Experience", "Education", "Certifications"].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <span className="text-[10px] w-1/3">{item}</span>
                  <div className="flex items-center gap-2 w-2/3">
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="h-2 rounded-full" style={{ width: '50%', backgroundColor: '#030923' }}></div>
                    </div>
                    <span className="text-[10px]">50%</span>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-semibold">Active Jobs</h4>
              <p className="text-[#007DF0]">3</p>
            </div>
            <div>
              <h4 className="font-semibold">Availability Badge</h4>
              <p className="text-[#007DF0]">On</p>
            </div>
            <div>
              <h4 className="font-semibold">Promotion with GAIN</h4>
              <p className="text-[#007DF0]">On</p>
            </div>
            <div>
              <h4 className="font-semibold">Promotion with Ads</h4>
              <p className="text-gray-600">Off</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4 mb-6">
            <h4 className="font-semibold text-xl">Preferences</h4>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="text-sm">Hours Per Week</span>
                <span className="text-sm">As per needed - Open to offers</span>
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex flex-col">
                <span className="text-sm">Profile Visibility</span>
                <span className="text-sm">Public</span>
              </div>
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-sm">Job Preference</span>
              <span className="text-sm">Open to job offers</span>
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-sm">My Categories</span>
              <span className="text-sm">Project Management</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;