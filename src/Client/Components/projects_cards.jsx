import React, { useEffect, useState } from 'react';
import User from "../../assets/user.png";
import location from "../../assets/location.png";
import arrowup from "../../assets/arrow-up-right-white.png";
import arrowupblack from "../../assets/arrow-up-right-black.png";
import { useNavigate } from 'react-router-dom';

function ProjectsTabs({ activeTab, setActiveTab }) {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full pb-5">
      <div className="mb-4">
        <h2 className="text-xl md:text-2xl font-semibold text-black">Active Projects</h2>
        <p className="text-black mt-1 text-sm md:text-base">Track progress, deadlines, and deliverables for all ongoing projects.</p>
      </div>
      <div className="flex flex-wrap gap-2 md:gap-4 mb-6">
        <button
          onClick={() => handleTabClick('in-progress')}
          className={`px-3 py-1 md:px-4 md:py-2 rounded-md text-xs md:text-sm font-medium ${activeTab === 'in-progress' ? 'bg-black text-white' : 'bg-white text-black border border-black'}`}
        >
          In Progress
        </button>
        <button
          onClick={() => handleTabClick('on-hold')}
          className={`px-3 py-1 md:px-4 md:py-2 rounded-md text-xs md:text-sm font-medium ${
            activeTab === 'on-hold'
              ? 'bg-black text-white'
              : 'bg-white text-black border border-black'
          }`}
        >
          On Hold
        </button>
        <button
          onClick={() => handleTabClick('completed')}
          className={`px-3 py-1 md:px-4 md:py-2 rounded-md text-xs md:text-sm font-medium ${
            activeTab === 'completed'
              ? 'bg-black text-white'
              : 'bg-white text-black border border-black'
          }`}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

const accessToken = getCookie('access_token');

function truncateWords(text, maxWords) {
  if (!text) return '';
  const words = text.split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '...';
}

function ProjectsCard() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;
  const [activeTab, setActiveTab] = useState('in-progress');

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch('https://gain-b7ea8e7de810.herokuapp.com/projects/list', {
      headers: {
        'Authorization': accessToken ? `Bearer ${accessToken}` : ''
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data && Array.isArray(data.data)) {
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

  const filteredProjects = projects.filter(project => {
    if (activeTab === 'in-progress') {
      return project.status === 'in-progress' || !project.status || project.status === 'open';
    }
    if (activeTab === 'on-hold') {
      return project.status === 'on-hold';
    }
    if (activeTab === 'completed') {
      return project.status === 'completed';
    }
    return true;
  });

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
  }, [activeTab]);

  const renderButton = (bgColor, textColor, text, imgSrc, onClick) => (
    <button
      className={`w-[135px] h-[28px] rounded-[16px] ${bgColor} text-sm ${textColor} flex items-center justify-center`}
      onClick={e => {
        e.stopPropagation();
        if (onClick) onClick();
      }}
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

  if (loading) {
    return <div className="text-center py-8">Loading projects...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 py-8">{error}</div>;
  }

  return (
    <div>
      <ProjectsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="space-y-6">
        {projectsToDisplay.length === 0 && (
          <div className="text-center text-gray-500 py-8">No projects found for this tab.</div>
        )}
        {projectsToDisplay.map((project, index) => (
          <div
            key={project._id || index}
            className="bg-white border border-gray-300 rounded-xl w-full mx-auto p-6 flex flex-col min-h-[200px] justify-between cursor-pointer"
            onClick={() => navigate(`/client/projects/${project._id}`)}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <h2 className="text-xl md:text-2xl font-bold text-black">{project.title}</h2>
              <div className="flex flex-wrap gap-2 md:gap-4 mt-2 md:mt-0">
                {renderButton("bg-white border border-[#030923]", "text-[#030923]", "Manage Project", arrowupblack, () => navigate(`/client/projects/${project._id}`))}
                {renderButton("bg-[#030923]", "text-white", "View Project", arrowup, () => navigate(`/client/projects/${project._id}`))}
              </div>
            </div>

            <p className="text-black mt-2">{truncateWords(project.description, 35)}</p>

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
                <span className="text-lg text-gray-700">{project.budget}</span>
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
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md border ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-black border-black hover:bg-gray-100'}`}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx + 1}
              onClick={() => handlePageChange(idx + 1)}
              className={`px-3 py-1 rounded-md border ${currentPage === idx + 1 ? 'bg-black text-white border-black' : 'bg-white text-black border-black hover:bg-gray-100'}`}
            >
              {idx + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md border ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-black border-black hover:bg-gray-100'}`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectsCard;