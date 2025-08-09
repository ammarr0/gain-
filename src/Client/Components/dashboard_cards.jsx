import React, { useEffect, useState } from 'react';
import User from "../../assets/user.png";
import location from "../../assets/location.png";
import arrowup from "../../assets/arrow-up-right-white.png";
import arrowupblack from "../../assets/arrow-up-right-black.png";
import { useNavigate } from 'react-router-dom';

// Tabs component with working tab switching
function DashboardTabs({ activeTab, setActiveTab }) {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full pb-5">
      <div className="mb-4">
        <h2 className="text-xl md:text-2xl font-semibold text-black">Active Jobs</h2>
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

// Helper to truncate description to 35 words
function truncateWords(text, maxWords) {
  if (!text) return '';
  const words = text.split(/\s+/);
  if (words.length <= maxWords) return text;
  return words.slice(0, maxWords).join(' ') + '...';
}

// Modal component for editing a job
function EditJobModal({ open, onClose, job, onChange, onSave, saving }) {
  if (!open) return null;

  const handleInputChange = (field, value) => {
    onChange({ ...job, [field]: value });
  };

  const handleNumberChange = (field, value) => {
    const num = value === '' ? '' : Number(value);
    onChange({ ...job, [field]: num });
  };

  const handleArrayChange = (field, value) => {
    onChange({
      ...job,
      [field]: value.split(',').map(s => s.trim()).filter(Boolean)
    });
  };

  const handleTextAreaArray = (field, value) => {
    // newline separated to array
    const arr = value
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean);
    onChange({ ...job, [field]: arr });
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
        <h2 className="text-xl font-bold mb-4">Edit Job</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input className="w-full border rounded px-2 py-1" value={job.title}
              onChange={e => handleInputChange('title', e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <input className="w-full border rounded px-2 py-1" value={job.category}
              onChange={e => handleInputChange('category', e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea className="w-full border rounded px-2 py-1" rows={3} value={job.description}
              onChange={e => handleInputChange('description', e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Project Type</label>
            <input className="w-full border rounded px-2 py-1" value={job.project_type}
              onChange={e => handleInputChange('project_type', e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input className="w-full border rounded px-2 py-1" value={job.location}
              onChange={e => handleInputChange('location', e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Payment Type</label>
            <input className="w-full border rounded px-2 py-1" value={job.payment_type}
              onChange={e => handleInputChange('payment_type', e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Budget Range</label>
            <input className="w-full border rounded px-2 py-1" value={job.budget_range}
              onChange={e => handleInputChange('budget_range', e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Experience Level</label>
            <input className="w-full border rounded px-2 py-1" value={job.experience_level}
              onChange={e => handleInputChange('experience_level', e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Hourly Rate</label>
            <input className="w-full border rounded px-2 py-1" value={job.hourly_rate}
              onChange={e => handleInputChange('hourly_rate', e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Number of Applicants</label>
            <input type="number" className="w-full border rounded px-2 py-1" value={job.number_of_applicants}
              onChange={e => handleNumberChange('number_of_applicants', e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Skills (comma separated)</label>
            <input className="w-full border rounded px-2 py-1" value={(job.skills || []).join(', ')}
              onChange={e => handleArrayChange('skills', e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Questions (one per line)</label>
            <textarea className="w-full border rounded px-2 py-1" rows={3}
              value={(job.questions_for_candidates || []).join('\n')}
              onChange={e => handleTextAreaArray('questions_for_candidates', e.target.value)} />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={!!job.is_disabled}
              onChange={e => handleInputChange('is_disabled', e.target.checked)} />
            <label className="text-sm">Is Disabled</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={!!job.is_deleted}
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

function JobCard() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;
  // Tabs state
  const [activeTab, setActiveTab] = useState('in-progress');
  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalJob, setModalJob] = useState(null);
  const [modalJobId, setModalJobId] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://gain-b7ea8e7de810.herokuapp.com/jobs/list', {
      headers: {
        'Authorization': accessToken ? `Bearer ${accessToken}` : ''
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data && data.status && Array.isArray(data.data)) {
          setJobs(data.data);
        } else {
          setJobs([]);
        }
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching jobs');
        setLoading(false);
      });
  }, []);

  const renderButton = (bgColor, textColor, text, imgSrc, onClick) => (
    <button
      className={`w-[135px] h-[28px] rounded-[16px] ${bgColor} text-sm ${textColor} flex items-center justify-center`}
      onClick={e => {
        e.stopPropagation();
        onClick();
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

  // Filtering jobs based on activeTab
  const filteredJobs = jobs.filter(job => {
    // You may need to adjust these conditions based on your job data structure
    // For demonstration, let's assume job.status is one of: 'in-progress', 'on-hold', 'completed'
    if (activeTab === 'in-progress') {
      return job.status === 'in-progress' || !job.status || job.status === 'open';
    }
    if (activeTab === 'on-hold') {
      return job.status === 'on-hold';
    }
    if (activeTab === 'completed') {
      return job.status === 'completed';
    }
    return true;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIdx = (currentPage - 1) * jobsPerPage;
  const endIdx = startIdx + jobsPerPage;
  const jobsToDisplay = filteredJobs.slice(startIdx, endIdx);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Reset to page 1 when tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const handleManageJob = (job) => {
    setModalJob({
      title: job.title || '',
      description: job.description || '',
      project_type: job.project_type || job.category || '',
      category: job.category || '',
      skills: Array.isArray(job.skills) ? job.skills : [],
      location: job.location || '',
      hourly_rate: job.hourly_rate ?? '',
      payment_type: job.payment_type || '',
      budget_range: job.budget_range || '',
      experience_level: job.experience_level || '',
      number_of_applicants: typeof job.number_of_applicants === 'number' ? job.number_of_applicants : (job.number_of_applicants ? Number(job.number_of_applicants) : 0),
      questions_for_candidates: Array.isArray(job.questions_for_candidates) ? job.questions_for_candidates : [],
      is_disabled: !!job.is_disabled,
      is_deleted: !!job.is_deleted,
    });
    setModalJobId(job._id);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setModalJob(null);
    setModalJobId(null);
  };

  const handleModalSave = async () => {
    if (!modalJobId || !modalJob) return handleModalClose();
    setSaving(true);
    setError(null);

    if (typeof modalJobId !== 'string' || !/^[a-fA-F0-9]{24}$/.test(modalJobId)) {
      setError('Invalid job ID. Cannot update.');
      setSaving(false);
      return;
    }

    const payload = {
      title: modalJob.title,
      description: modalJob.description,
      project_type: modalJob.project_type,
      category: modalJob.category,
      skills: Array.isArray(modalJob.skills) ? modalJob.skills : [],
      location: modalJob.location,
      hourly_rate: modalJob.hourly_rate,
      payment_type: modalJob.payment_type,
      budget_range: modalJob.budget_range,
      experience_level: modalJob.experience_level,
      number_of_applicants: Number(modalJob.number_of_applicants) || 0,
      questions_for_candidates: Array.isArray(modalJob.questions_for_candidates) ? modalJob.questions_for_candidates : [],
      is_disabled: !!modalJob.is_disabled,
      is_deleted: !!modalJob.is_deleted,
    };

    try {
      const token = getCookie('access_token');
      const response = await fetch(`https://gain-b7ea8e7de810.herokuapp.com/jobs/${modalJobId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token ? `Bearer ${token}` : ''
        },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        setJobs(prev => prev.map(j => (j._id === modalJobId ? { ...j, ...payload } : j)));
        handleModalClose();
      } else {
        const err = await response.json().catch(() => ({}));
        setError(err.message || 'Failed to update job');
      }
    } catch (e) {
      setError('Error updating job');
    } finally {
      setSaving(false);
    }
  };

  const handleModalChange = (updated) => setModalJob(updated);

  if (loading) {
    return <div className="text-center py-8">Loading jobs...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 py-8">{error}</div>;
  }

  return (
    <div>
      {/* Edit Job Modal */}
      <EditJobModal
        open={modalOpen}
        onClose={handleModalClose}
        job={modalJob || {
          title: '',
          description: '',
          project_type: '',
          category: '',
          skills: [],
          location: '',
          hourly_rate: '',
          payment_type: '',
          budget_range: '',
          experience_level: '',
          number_of_applicants: 0,
          questions_for_candidates: [],
          is_disabled: false,
          is_deleted: false,
        }}
        onChange={handleModalChange}
        onSave={handleModalSave}
        saving={saving}
      />
      {/* Tabs on top */}
      <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="space-y-6">
        {jobsToDisplay.length === 0 && (
          <div className="text-center text-gray-500 py-8">No jobs found for this tab.</div>
        )}
        {jobsToDisplay.map((job, index) => (
          <div
            key={job._id || index}
            className="bg-white border border-gray-300 rounded-xl w-full mx-auto p-6 flex flex-col min-h-[200px] justify-between cursor-pointer"
            onClick={() => navigate(`/client/jobs/${job._id}`)}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <h2 className="text-xl md:text-2xl font-bold text-black">{job.title}</h2>
              <div className="flex flex-wrap gap-2 md:gap-4 mt-2 md:mt-0">
                {renderButton("bg-white border border-[#030923]", "text-[#030923]", "Manage Job", arrowupblack, () => handleManageJob(job))}
                {renderButton("bg-[#030923]", "text-white", "View Job", arrowup, () => navigate(`/client/jobs/${job._id}`))}
              </div>
            </div>

            <p className="text-black mt-2">{truncateWords(job.description, 35)}</p>

            <div className="mt-4 flex flex-col md:flex-row items-start md:items-center justify-start gap-3">
              <img src={User} alt="User" className="h-8 w-8 rounded-full object-cover cursor-pointer" />
              <div>
                <h3 className="font-semibold text-black">{job.project_type || "N/A"}</h3>
                <hr className="border-black" />
                <p className="text-xs text-black">{job.location}</p>
              </div>
              <div className="flex items-center gap-2">
                {renderInfoItem(location, "Location", job.location)}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700 font-semibold">Hourly Rate:</span>
                <span className="text-lg text-gray-700">{job.hourly_rate}</span>
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-4 mt-2'>
              {job.skills && job.skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, idx) => (
                    <span key={idx} className="bg-white border border-gray-200 text-sm text-black rounded px-3 py-1">{skill}</span>
                  ))}
                </div>
              )}
            </div>

            {job.files && job.files.length > 0 && (
              <div className="mt-2 flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-700">Files:</span>
                {job.files.map((file, idx) => (
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
      {/* Pagination Controls */}
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

export default JobCard;