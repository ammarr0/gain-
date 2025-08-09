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

// Modal component for editing a project
function EditProjectModal({ open, onClose, project, onChange, onSave, saving }) {
  if (!open) return null;

  const handleInputChange = (field, value) => {
    onChange({ ...project, [field]: value });
  };

  const handleNumberChange = (field, value) => {
    const num = value === '' ? '' : Number(value);
    onChange({ ...project, [field]: num });
  };

  const handleArrayChange = (field, value) => {
    onChange({
      ...project,
      [field]: value.split(',').map(s => s.trim()).filter(Boolean)
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Edit Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input className="w-full border rounded px-2 py-1" value={project.title}
              onChange={e => handleInputChange('title', e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <input className="w-full border rounded px-2 py-1" value={project.category}
              onChange={e => handleInputChange('category', e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea className="w-full border rounded px-2 py-1" rows={3} value={project.description}
              onChange={e => handleInputChange('description', e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Experience</label>
            <input className="w-full border rounded px-2 py-1" value={project.experience}
              onChange={e => handleInputChange('experience', e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input className="w-full border rounded px-2 py-1" value={project.location}
              onChange={e => handleInputChange('location', e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Start Date</label>
            <input type="date" className="w-full border rounded px-2 py-1"
              value={project.start_date ? project.start_date.slice(0,10) : ''}
              onChange={e => handleInputChange('start_date', e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Duration</label>
            <input className="w-full border rounded px-2 py-1" value={project.duration}
              onChange={e => handleInputChange('duration', e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input className="w-full border rounded px-2 py-1" value={project.image}
              onChange={e => handleInputChange('image', e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Budget</label>
            <input type="number" className="w-full border rounded px-2 py-1" value={project.budget}
              onChange={e => handleNumberChange('budget', e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Payment Type</label>
            <input className="w-full border rounded px-2 py-1" value={project.payment_type}
              onChange={e => handleInputChange('payment_type', e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Budget Range</label>
            <input className="w-full border rounded px-2 py-1" value={project.budget_range}
              onChange={e => handleInputChange('budget_range', e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Location Type</label>
            <input className="w-full border rounded px-2 py-1" value={project.location_type}
              onChange={e => handleInputChange('location_type', e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Preferred Location</label>
            <input className="w-full border rounded px-2 py-1" value={project.preferred_location}
              onChange={e => handleInputChange('preferred_location', e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Preferred Location Talent Requirements</label>
            <input className="w-full border rounded px-2 py-1" value={project.preferred_location_talent_requirements}
              onChange={e => handleInputChange('preferred_location_talent_requirements', e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Open Roles (comma separated)</label>
            <input className="w-full border rounded px-2 py-1" value={(project.open_roles || []).join(', ')}
              onChange={e => handleArrayChange('open_roles', e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Role Descriptions (comma separated)</label>
            <input className="w-full border rounded px-2 py-1" value={(project.role_descriptions || []).join(', ')}
              onChange={e => handleArrayChange('role_descriptions', e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Key Skills (comma separated)</label>
            <input className="w-full border rounded px-2 py-1" value={(project.key_skills || []).join(', ')}
              onChange={e => handleArrayChange('key_skills', e.target.value)} />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={!!project.save_draft}
              onChange={e => handleInputChange('save_draft', e.target.checked)} />
            <label className="text-sm">Save as Draft</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={!!project.is_disabled}
              onChange={e => handleInputChange('is_disabled', e.target.checked)} />
            <label className="text-sm">Is Disabled</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={!!project.is_deleted}
              onChange={e => handleInputChange('is_deleted', e.target.checked)} />
            <label className="text-sm">Is Deleted</label>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <button className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300" onClick={onClose} disabled={saving}>Cancel</button>
          <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700" onClick={onSave} disabled={saving}>
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}

function ProjectsCard() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;
  const [activeTab, setActiveTab] = useState('in-progress');
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  const [modalProjectId, setModalProjectId] = useState(null);
  const [saving, setSaving] = useState(false);

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

  const handleManageProject = (project) => {
    setModalProject({
      title: project.title || '',
      description: project.description || '',
      experience: project.experience || '',
      location: project.location || '',
      start_date: project.start_date || '',
      duration: project.duration || '',
      image: project.image || '',
      category: project.category || '',
      open_roles: Array.isArray(project.open_roles) ? project.open_roles : [],
      role_descriptions: Array.isArray(project.role_descriptions) ? project.role_descriptions : [],
      key_skills: Array.isArray(project.key_skills) ? project.key_skills : [],
      budget: typeof project.budget === 'number' ? project.budget : (project.budget ? Number(project.budget) : 0),
      payment_type: project.payment_type || '',
      budget_range: project.budget_range || '',
      location_type: project.location_type || '',
      preferred_location: project.preferred_location || '',
      preferred_location_talent_requirements: project.preferred_location_talent_requirements || '',
      save_draft: !!project.save_draft,
      is_disabled: !!project.is_disabled,
      is_deleted: !!project.is_deleted,
    });
    setModalProjectId(project._id);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setModalProject(null);
    setModalProjectId(null);
  };

  const handleModalSave = async () => {
    if (!modalProjectId || !modalProject) return handleModalClose();
    setSaving(true);
    setError(null);

    if (typeof modalProjectId !== 'string' || !/^[a-fA-F0-9]{24}$/.test(modalProjectId)) {
      setError('Invalid project ID. Cannot update.');
      setSaving(false);
      return;
    }

    const payload = {
      title: modalProject.title,
      description: modalProject.description,
      experience: modalProject.experience,
      location: modalProject.location,
      start_date: modalProject.start_date,
      duration: modalProject.duration,
      image: modalProject.image,
      category: modalProject.category,
      open_roles: Array.isArray(modalProject.open_roles) ? modalProject.open_roles : [],
      role_descriptions: Array.isArray(modalProject.role_descriptions) ? modalProject.role_descriptions : [],
      key_skills: Array.isArray(modalProject.key_skills) ? modalProject.key_skills : [],
      budget: typeof modalProject.budget === 'number' ? modalProject.budget : 0,
      payment_type: modalProject.payment_type,
      budget_range: modalProject.budget_range,
      location_type: modalProject.location_type,
      preferred_location: modalProject.preferred_location,
      preferred_location_talent_requirements: modalProject.preferred_location_talent_requirements,
      save_draft: !!modalProject.save_draft,
      is_disabled: !!modalProject.is_disabled,
      is_deleted: !!modalProject.is_deleted,
    };

    try {
      const token = getCookie('access_token');
      const response = await fetch(`https://gain-b7ea8e7de810.herokuapp.com/projects/${modalProjectId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token ? `Bearer ${token}` : ''
        },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        setProjects(prev => prev.map(p => (p._id === modalProjectId ? { ...p, ...payload } : p)));
        handleModalClose();
      } else {
        const err = await response.json().catch(() => ({}));
        setError(err.message || 'Failed to update project');
      }
    } catch (e) {
      setError('Error updating project');
    } finally {
      setSaving(false);
    }
  };

  const handleModalChange = (updated) => setModalProject(updated);

  if (loading) {
    return <div className="text-center py-8">Loading projects...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 py-8">{error}</div>;
  }

  return (
    <div>
      {/* Edit Project Modal */}
      <EditProjectModal
        open={modalOpen}
        onClose={handleModalClose}
        project={modalProject || {
          title: '',
          description: '',
          experience: '',
          location: '',
          start_date: '',
          duration: '',
          image: '',
          category: '',
          open_roles: [],
          role_descriptions: [],
          key_skills: [],
          budget: 0,
          payment_type: '',
          budget_range: '',
          location_type: '',
          preferred_location: '',
          preferred_location_talent_requirements: '',
          save_draft: false,
          is_disabled: false,
          is_deleted: false,
        }}
        onChange={handleModalChange}
        onSave={handleModalSave}
        saving={saving}
      />
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
                {renderButton("bg-white border border-[#030923]", "text-[#030923]", "Manage Project", arrowupblack, () => handleManageProject(project))}
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