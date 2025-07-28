import React, { useEffect, useState } from 'react';
import User from "../../assets/user.png";
import location from "../../assets/location.png";
import arrowup from "../../assets/arrow-up-right-white.png";
import { useNavigate } from 'react-router-dom';

const SaveIcon = ({ saved, ...props }) => (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke={saved ? "#007DF0" : "#A0AEC0"}
    strokeWidth="2"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M6 4a2 2 0 0 0-2 2v14l8-5.333L20 20V6a2 2 0 0 0-2-2H6z"
      fill={saved ? "#007DF0" : "none"}
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

const BlueCircleLoader = () => (
  <div className="flex justify-center items-center py-8">
    <div
      className="animate-spin rounded-full border-4 border-blue-500 border-t-transparent h-12 w-12"
      role="status"
      aria-label="Loading"
    />
  </div>
);

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

const accessToken = getCookie('access_token');

const TABS = [
  { label: 'Project Management Projects', key: 'pm' },
  { label: 'All Projects', key: 'all' },
  { label: 'Saved Projects', key: 'saved' }
];

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;

  const [savedProjects, setSavedProjects] = useState(() => {
    const saved = localStorage.getItem('savedProjects');
    return saved ? JSON.parse(saved) : [];
  });

  const [activeTab, setActiveTab] = useState('pm');

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('https://gain-b7ea8e7de810.herokuapp.com/projects/list', {
      headers: {
        'Authorization': accessToken ? `Bearer ${accessToken}` : ''
      }
    })
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        if (data && data.status && Array.isArray(data.data)) {
          setProjects(data.data);
        } else {
          setProjects([]);
        }
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching projects');
        setLoading(false);
      });
  }, []);

  const handleSaveProject = (projectId, e) => {
    e.stopPropagation();
    setSavedProjects(prev => {
      let updated;
      if (prev.includes(projectId)) {
        updated = prev.filter(id => id !== projectId);
      } else {
        updated = [...prev, projectId];
      }
      localStorage.setItem('savedProjects', JSON.stringify(updated));
      return updated;
    });
  };

  const renderButton = (bgColor, textColor, text, imgSrc, onClick) => (
    <button
      className={`w-[135px] h-[28px] rounded-[16px] ${bgColor} text-sm ${textColor} flex items-center justify-center`}
      onClick={e => {
        e.stopPropagation();
        onClick();
      }}
      type="button"
    >
      {text} <img src={imgSrc} alt="" className="ml-1" />
    </button>
  );

  const renderInfoItem = (icon, label, value) => (
    <div className="flex items-center gap-1" key={label + value}>
      <img src={icon} alt={label} className="h-4 w-4" />
      <span className="text-sm text-gray-700">{value}</span>
    </div>
  );

  let filteredProjects = projects;
  if (activeTab === 'pm') {
    filteredProjects = projects.filter(project =>
      (project.project_type && project.project_type.toLowerCase().includes('project'))
      || (project.title && project.title.toLowerCase().includes('project'))
    );
  } else if (activeTab === 'saved') {
    filteredProjects = projects.filter(project => savedProjects.includes(project._id));
  }

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIdx = (currentPage - 1) * projectsPerPage;
  const endIdx = startIdx + projectsPerPage;
  const projectsToDisplay = filteredProjects.slice(startIdx, endIdx);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, projects.length]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/4 p-4 sm:p-6 md:p-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="bg-[#D8FBAB] rounded-2xl p-5 pl-4 sm:pl-9 md:w-1/2 h-48 sm:h-60 md:h-72 flex items-center">
                <span className="text-3xl sm:text-4xl md:text-6xl text-gray-900 mb-2 leading-tight">
                  Build <br />
                  Something <br /> Great <br /><span className="font-bold"> Together!</span> <br />
                </span>
              </div>
              <div className="rounded-2xl border-2 border-green-600 p-4 sm:p-6 md:p-8 md:w-1/2 flex items-center justify-center text-left">
                <p className="text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed">
                  Discover exciting projects that need a team of skilled professionals. Apply as an individual, collaborate with others, and bring project ideas to life without the hassle of separate hiring.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center space-x-0 sm:space-x-6 border-b border-gray-200 mb-8">
              {TABS.map((tab, index) => (
                <button
                  key={tab.key}
                  className={`pb-2 mr-4 sm:mr-0 mb-2 sm:mb-0 ${
                    activeTab === tab.key
                      ? 'text-gray-900 font-semibold border-b-4 border-blue-500'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab(tab.key)}
                  type="button"
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="space-y-6">
              {loading && (
                <BlueCircleLoader />
              )}
              {error && (
                <div className="text-center text-red-600 py-8">{error}</div>
              )}
              {!loading && !error && projectsToDisplay.length === 0 && (
                <div className="text-center py-8 text-gray-500">No projects found.</div>
              )}
              {!loading && !error && projectsToDisplay.map((project, index) => (
                <div
                  key={project._id || index}
                  className="bg-white border border-gray-300 rounded-xl w-full mx-auto p-6 flex flex-col min-h-[200px] justify-between cursor-pointer relative"
                  onClick={() => navigate(`/talent/projects/${project._id}`)}
                >
                  <button
                    className="absolute bottom-4 right-4 z-10 p-1 rounded-full hover:bg-gray-100"
                    onClick={e => handleSaveProject(project._id, e)}
                    aria-label={savedProjects.includes(project._id) ? "Unsave Project" : "Save Project"}
                    type="button"
                  >
                    <SaveIcon saved={savedProjects.includes(project._id)} />
                  </button>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <h2 className="text-xl md:text-2xl font-bold text-black">{project.title}</h2>
                    <div className="flex flex-wrap gap-2 md:gap-4 mt-2 md:mt-0">
                      {renderButton("bg-[#030923]", "text-white", "View Project", arrowup, () => navigate(`/talent/projects/${project._id}`))}
                    </div>
                  </div>

                  <p className="text-black mt-2">{project.description}</p>

                  <div className="mt-4 flex flex-col md:flex-row items-start md:items-center justify-start gap-3">
                    <img src={User} alt="User" className="h-8 w-8 rounded-full object-cover cursor-pointer" />
                    <div>
                      <h3 className="font-semibold text-black">{project.project_type || "N/A"}</h3>
                      <hr className="border-black" />
                      <p className="text-xs text-black">{project.location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {renderInfoItem(location, "Location", project.location)}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-700 font-semibold">Budget:</span>
                      <span className="text-lg text-gray-700">{project.budget || project.hourly_rate || "N/A"}</span>
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row gap-4 mt-2'>
                    {project.skills && project.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.skills.map((skill, idx) => (
                          <span key={idx} className="bg-white border border-gray-200 text-sm text-black rounded px-3 py-1">{skill}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  {project.files && project.files.length > 0 && (
                    <div className="mt-2 flex flex-col gap-1">
                      <span className="text-xs font-semibold text-gray-700">Files:</span>
                      {project.files.map((file, idx) => (
                        <a
                          key={idx}
                          href={file}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline text-xs break-all"
                        >
                          {file}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {!loading && !error && totalPages > 1 && (
              <div className="flex justify-center items-center mt-8 gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 rounded-md border ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-black border-black hover:bg-gray-100'}`}
                  type="button"
                >
                  Prev
                </button>
                {Array.from({ length: totalPages }, (_, idx) => (
                  <button
                    key={idx + 1}
                    onClick={() => handlePageChange(idx + 1)}
                    className={`px-3 py-1 rounded-md border ${currentPage === idx + 1 ? 'bg-black text-white border-black' : 'bg-white text-black border-black hover:bg-gray-100'}`}
                    type="button"
                  >
                    {idx + 1}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1 rounded-md border ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-black border-black hover:bg-gray-100'}`}
                  type="button"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="w-full lg:w-1/4 p-4 sm:p-6 md:p-6 lg:p-6 ml-0 lg:ml-auto rounded-lg">
          <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 flex flex-col gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl text-white">
                <span className="font-semibold">P</span>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#030923]">ProjectHub</h3>
                <p className="text-xs sm:text-sm text-gray-600">Project Platform</p>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★</span>
                  <span>4.8</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-semibold text-xs text-[#007DF0]">Complete your project profile</h4>
              {["Project Details", "Portfolio", "Team Experience", "Project Plan", "Certifications"].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <span className="text-[10px] w-1/3">{item}</span>
                  <div className="flex items-center gap-2 w-2/3">
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="h-2 rounded-full " style={{ width: '50%', backgroundColor: '#030923' }}></div>
                    </div>
                    <span className="text-[10px]">50%</span>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-semibold text-xs sm:text-base">Active Projects</h4>
              <p className="text-[#007DF0] text-xs sm:text-base">3</p>
            </div>
            <div>
              <h4 className="font-semibold text-xs sm:text-base">Availability Badge</h4>
              <p className="text-[#007DF0] text-xs sm:text-base">On</p>
            </div>
            <div>
              <h4 className="font-semibold text-xs sm:text-base">Promotion with GAIN</h4>
              <p className="text-[#007DF0] text-xs sm:text-base">On</p>
            </div>
            <div>
              <h4 className="font-semibold text-xs sm:text-base">Promotion with Ads</h4>
              <p className="text-gray-600 text-xs sm:text-base">Off</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-4 sm:p-6 flex flex-col gap-4 mb-6">
            <h4 className="font-semibold text-lg sm:text-xl">Preferences</h4>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm">Hours Per Week</span>
                <span className="text-xs sm:text-sm">As per project needs - Open to offers</span>
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm">Project Visibility</span>
                <span className="text-xs sm:text-sm">Public</span>
              </div>
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-xs sm:text-sm">Project Preference</span>
              <span className="text-xs sm:text-sm">Open to project offers</span>
            </div>
            <div className="flex flex-col mt-2">
              <span className="text-xs sm:text-sm">My Categories</span>
              <span className="text-xs sm:text-sm">Project Management</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;