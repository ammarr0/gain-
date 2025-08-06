import React, { useEffect, useState } from 'react';
import location from "../../assets/location.png";
import calendar from "../../assets/calendar.png";
import clock from "../../assets/clock.png";
import arrowup from "../../assets/arrow-up-right-white.png";
import arrowupblack from "../../assets/arrow-up-right-black.png";

// Simple blue Loader component
function BlueLoader() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div
                style={{
                    border: "6px solid #e0e7ef",
                    borderTop: "6px solid #2563eb",
                    borderRadius: "50%",
                    width: "48px",
                    height: "48px",
                    animation: "spin 1s linear infinite"
                }}
            />
            <style>
                {`
                @keyframes spin {
                    0% { transform: rotate(0deg);}
                    100% { transform: rotate(360deg);}
                }
                `}
            </style>
        </div>
    );
}

// Helper to get cookie value by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

// Helper to truncate description to 30 words
function truncateWords(text, maxWords) {
    if (!text) return '';
    const words = text.split(/\s+/);
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(' ') + '...';
}

// Modal component for editing job/project
function EditJobModal({ open, onClose, job, onChange, onSave, saving }) {
    if (!open) return null;

    // Helper for handling array fields (comma separated)
    const handleArrayChange = (field, value) => {
        onChange({
            ...job,
            [field]: value.split(',').map(s => s.trim()).filter(Boolean)
        });
    };

    // Helper for handling number fields
    const handleNumberChange = (field, value) => {
        onChange({
            ...job,
            [field]: Number(value)
        });
    };

    // Helper for handling boolean fields
    const handleCheckboxChange = (field, checked) => {
        onChange({
            ...job,
            [field]: checked
        });
    };

    // Helper for handling normal fields
    const handleInputChange = (field, value) => {
        onChange({
            ...job,
            [field]: value
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
                        <input
                            className="w-full border rounded px-2 py-1"
                            value={job.title}
                            onChange={e => handleInputChange('title', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Category</label>
                        <input
                            className="w-full border rounded px-2 py-1"
                            value={job.category}
                            onChange={e => handleInputChange('category', e.target.value)}
                        />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea
                            className="w-full border rounded px-2 py-1"
                            value={job.description}
                            onChange={e => handleInputChange('description', e.target.value)}
                            rows={3}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Experience</label>
                        <input
                            className="w-full border rounded px-2 py-1"
                            value={job.experience}
                            onChange={e => handleInputChange('experience', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Location</label>
                        <input
                            className="w-full border rounded px-2 py-1"
                            value={job.location}
                            onChange={e => handleInputChange('location', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Start Date</label>
                        <input
                            type="date"
                            className="w-full border rounded px-2 py-1"
                            value={job.start_date ? job.start_date.slice(0, 10) : ''}
                            onChange={e => handleInputChange('start_date', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Duration</label>
                        <input
                            className="w-full border rounded px-2 py-1"
                            value={job.duration}
                            onChange={e => handleInputChange('duration', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Image URL</label>
                        <input
                            className="w-full border rounded px-2 py-1"
                            value={job.image}
                            onChange={e => handleInputChange('image', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Budget</label>
                        <input
                            type="number"
                            className="w-full border rounded px-2 py-1"
                            value={job.budget}
                            onChange={e => handleNumberChange('budget', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Payment Type</label>
                        <input
                            className="w-full border rounded px-2 py-1"
                            value={job.payment_type}
                            onChange={e => handleInputChange('payment_type', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Budget Range</label>
                        <input
                            className="w-full border rounded px-2 py-1"
                            value={job.budget_range}
                            onChange={e => handleInputChange('budget_range', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Location Type</label>
                        <input
                            className="w-full border rounded px-2 py-1"
                            value={job.location_type}
                            onChange={e => handleInputChange('location_type', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Preferred Location</label>
                        <input
                            className="w-full border rounded px-2 py-1"
                            value={job.preferred_location}
                            onChange={e => handleInputChange('preferred_location', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Preferred Location Talent Requirements</label>
                        <input
                            className="w-full border rounded px-2 py-1"
                            value={job.preferred_location_talent_requirements}
                            onChange={e => handleInputChange('preferred_location_talent_requirements', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Open Roles (comma separated)</label>
                        <input
                            className="w-full border rounded px-2 py-1"
                            value={job.open_roles.join(', ')}
                            onChange={e => handleArrayChange('open_roles', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Role Descriptions (comma separated)</label>
                        <input
                            className="w-full border rounded px-2 py-1"
                            value={job.role_descriptions.join(', ')}
                            onChange={e => handleArrayChange('role_descriptions', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Key Skills (comma separated)</label>
                        <input
                            className="w-full border rounded px-2 py-1"
                            value={job.key_skills.join(', ')}
                            onChange={e => handleArrayChange('key_skills', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Questions for Candidates (comma separated)</label>
                        <input
                            className="w-full border rounded px-2 py-1"
                            value={job.questions_for_candidates.join(', ')}
                            onChange={e => handleArrayChange('questions_for_candidates', e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Additional Questions (comma separated)</label>
                        <input
                            className="w-full border rounded px-2 py-1"
                            value={job.additional_questions.join(', ')}
                            onChange={e => handleArrayChange('additional_questions', e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={job.save_draft}
                            onChange={e => handleCheckboxChange('save_draft', e.target.checked)}
                        />
                        <label className="text-sm">Save as Draft</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={job.is_disabled}
                            onChange={e => handleCheckboxChange('is_disabled', e.target.checked)}
                        />
                        <label className="text-sm">Is Disabled</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={job.is_deleted}
                            onChange={e => handleCheckboxChange('is_deleted', e.target.checked)}
                        />
                        <label className="text-sm">Is Deleted</label>
                    </div>
                </div>
                <div className="flex justify-end gap-2 mt-6">
                    <button
                        className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
                        onClick={onClose}
                        disabled={saving}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
                        onClick={onSave}
                        disabled={saving}
                    >
                        {saving ? "Saving..." : "Save"}
                    </button>
                </div>
            </div>
        </div>
    );
}

function PostedJobs() {
    const [jobCardsData, setJobCardsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalJob, setModalJob] = useState(null);
    const [modalJobId, setModalJobId] = useState(null);
    const [saving, setSaving] = useState(false);
    const jobsPerPage = 10;

    useEffect(() => {
        const fetchJobData = async () => {
            setLoading(true);
            setError(null);
            try {
                const accessToken = getCookie('access_token');
                const response = await fetch('https://gain-b7ea8e7de810.herokuapp.com/projects/list', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setJobCardsData(data.data || []);
                } else {
                    setError('Failed to fetch job data');
                }
            } catch (error) {
                setError('Error fetching job data');
            } finally {
                setLoading(false);
            }
        };

        fetchJobData();
    }, []);

    // Helper to format date
    function formatDate(dateStr) {
        if (!dateStr) return '';
        const d = new Date(dateStr);
        if (isNaN(d)) return dateStr;
        return d.toLocaleDateString();
    }

    // Pagination logic
    const totalJobs = jobCardsData.length;
    const totalPages = Math.ceil(totalJobs / jobsPerPage);
    const startIdx = (currentPage - 1) * jobsPerPage;
    const endIdx = startIdx + jobsPerPage;
    const currentJobs = jobCardsData.slice(startIdx, endIdx);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Modal open handler
    const handleManageProjects = (job) => {
        // Fill all fields from the job, fallback to default values if missing
        setModalJob({
            title: job.title || "",
            description: job.description || "",
            experience: job.experience || "",
            location: job.location || "",
            start_date: job.start_date || "",
            duration: job.duration || "",
            image: job.image || "",
            category: job.category || "",
            open_roles: Array.isArray(job.open_roles) ? job.open_roles : [],
            role_descriptions: Array.isArray(job.role_descriptions) ? job.role_descriptions : [],
            key_skills: Array.isArray(job.key_skills) ? job.key_skills : [],
            budget: typeof job.budget === "number" ? job.budget : (job.budget ? Number(job.budget) : 0),
            payment_type: job.payment_type || "",
            budget_range: job.budget_range || "",
            location_type: job.location_type || "",
            preferred_location: job.preferred_location || "",
            preferred_location_talent_requirements: job.preferred_location_talent_requirements || "",
            questions_for_candidates: Array.isArray(job.questions_for_candidates) ? job.questions_for_candidates : [],
            additional_questions: Array.isArray(job.additional_questions) ? job.additional_questions : [],
            save_draft: !!job.save_draft,
            is_disabled: !!job.is_disabled,
            is_deleted: !!job.is_deleted
        });
        setModalJobId(job._id);
        setModalOpen(true);
    };

    // Modal close handler
    const handleModalClose = () => {
        setModalOpen(false);
        setModalJob(null);
        setModalJobId(null);
    };

    // Modal save handler (PUT to API)
    const handleModalSave = async () => {
        if (!modalJobId || !modalJob) {
            setModalOpen(false);
            setModalJob(null);
            setModalJobId(null);
            return;
        }
        setSaving(true);
        setError(null);

        // Fix: Only send fields that the API expects, and ensure the ID is valid and not undefined/null/empty
        // Also, check if the ID is a valid MongoDB ObjectId (24 hex chars)
        if (
            typeof modalJobId !== "string" ||
            !/^[a-fA-F0-9]{24}$/.test(modalJobId)
        ) {
            setError("Invalid project ID. Cannot update.");
            setSaving(false);
            return;
        }

        // Remove any fields that should not be sent (like _id, createdAt, updatedAt, etc.)
        // We'll only send the fields that are editable.
        const {
            title,
            description,
            experience,
            location,
            start_date,
            duration,
            image,
            category,
            open_roles,
            role_descriptions,
            key_skills,
            budget,
            payment_type,
            budget_range,
            location_type,
            preferred_location,
            preferred_location_talent_requirements,
            questions_for_candidates,
            additional_questions,
            save_draft,
            is_disabled,
            is_deleted
        } = modalJob;

        const payload = {
            title,
            description,
            experience,
            location,
            start_date,
            duration,
            image,
            category,
            open_roles,
            role_descriptions,
            key_skills,
            budget,
            payment_type,
            budget_range,
            location_type,
            preferred_location,
            preferred_location_talent_requirements,
            questions_for_candidates,
            additional_questions,
            save_draft,
            is_disabled,
            is_deleted
        };

        try {
            const accessToken = getCookie('access_token');
            const response = await fetch(`https://gain-b7ea8e7de810.herokuapp.com/projects/${modalJobId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(payload)
            });
            if (response.ok) {
                setJobCardsData(prev =>
                    prev.map(j => (j._id === modalJobId ? { ...j, ...payload } : j))
                );
                setModalOpen(false);
                setModalJob(null);
                setModalJobId(null);
            } else {
                if (response.status === 404) {
                    setError("Project not found. It may have been deleted.");
                } else if (response.status === 405) {
                    setError("Update not allowed. Please check if the project exists and you have permission.");
                } else {
                    const err = await response.json().catch(() => ({}));
                    setError(err.message || 'Failed to update project');
                }
            }
        } catch (err) {
            setError('Error updating project');
        } finally {
            setSaving(false);
        }
    };

    // Modal change handler
    const handleModalChange = (updatedJob) => {
        setModalJob(updatedJob);
    };

    return (
        <div className="space-y-6 mt-7" >
            <EditJobModal
                open={modalOpen}
                onClose={handleModalClose}
                job={modalJob || {
                    title: "",
                    description: "",
                    experience: "",
                    location: "",
                    start_date: "",
                    duration: "",
                    image: "",
                    category: "",
                    open_roles: [],
                    role_descriptions: [],
                    key_skills: [],
                    budget: 0,
                    payment_type: "",
                    budget_range: "",
                    location_type: "",
                    preferred_location: "",
                    preferred_location_talent_requirements: "",
                    questions_for_candidates: [],
                    additional_questions: [],
                    save_draft: false,
                    is_disabled: false,
                    is_deleted: false
                }}
                onChange={handleModalChange}
                onSave={handleModalSave}
                saving={saving}
            />
            {loading ? (
                <div className="flex flex-col justify-center items-center h-40">
                    <BlueLoader />
                </div>
            ) : error ? (
                <div className="flex justify-center items-center h-40">
                    <span className="text-lg text-red-600">{error}</span>
                </div>
            ) : currentJobs.length === 0 ? (
                <div className="flex justify-center items-center h-40">
                    <span className="text-lg text-gray-500">No data available</span>
                </div>
            ) : (
                <>
                    {currentJobs.map((job, index) => (
                        <div
                            key={job._id || index}
                            className="bg-white border border-gray-300 rounded-2xl w-full mx-auto p-6 flex flex-col min-h-[200px] justify-between"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                                <h2 className="text-xl md:text-2xl font-bold text-black">{job.title}</h2>
                                {job.category && (
                                    <span className="bg-gray-100 text-xs md:text-sm text-gray-700 rounded px-2 py-1 mt-2 md:mt-0">
                                        {job.category}
                                    </span>
                                )}
                            </div>
                            
                            <p className="text-black text-sm md:text-base mb-2">
                                {truncateWords(job.description, 30)}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-2">
                                {/* Location */}
                                {job.location && (
                                    <div className="flex items-center gap-1">
                                        <img src={location} alt="Location" className="h-4 w-4" />
                                        <span className="text-sm text-gray-700">{job.location}</span>
                                    </div>
                                )}
                                {/* Start Date */}
                                {job.start_date && (
                                    <div className="flex items-center gap-1">
                                        <img src={calendar} alt="Start Date" className="h-4 w-4" />
                                        <span className="text-sm text-gray-700">{formatDate(job.start_date)}</span>
                                    </div>
                                )}
                                {/* Duration */}
                                {job.duration && (
                                    <div className="flex items-center gap-1">
                                        <img src={clock} alt="Duration" className="h-4 w-4" />
                                        <span className="text-sm text-gray-700">{job.duration}</span>
                                    </div>
                                )}
                                {/* Experience */}
                                {job.experience && (
                                    <div className="flex items-center gap-1">
                                        <span className="text-sm text-gray-700 font-semibold">Experience:</span>
                                        <span className="text-sm text-gray-700">{job.experience}</span>
                                    </div>
                                )}
                            </div>

                            {/* Roles */}
                            {job.open_roles && job.open_roles.length > 0 && (
                                <div className="mb-2">
                                    <span className="font-semibold text-sm text-gray-800">Open Roles:</span>
                                    <ul className="list-disc list-inside text-sm text-gray-700">
                                        {job.open_roles.map((role, idx) => (
                                            <li key={idx}>{role}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Role Descriptions */}
                            {job.role_descriptions && job.role_descriptions.length > 0 && job.role_descriptions[0] && (
                                <div className="mb-2">
                                    <span className="font-semibold text-sm text-gray-800">Role Descriptions:</span>
                                    <ul className="list-disc list-inside text-sm text-gray-700">
                                        {job.role_descriptions.map(
                                            (desc, idx) =>
                                                desc && (
                                                    <li key={idx}>
                                                        {truncateWords(desc, 30)}
                                                    </li>
                                                )
                                        )}
                                    </ul>
                                </div>
                            )}

                            {/* Budget, Payment Type, Budget Range */}
                            <div className="flex flex-wrap gap-4 mb-2">
                                {job.budget && (
                                    <span className="text-sm text-gray-700 font-semibold">
                                        Budget: <span className="font-normal">{job.budget}</span>
                                    </span>
                                )}
                                {job.payment_type && (
                                    <span className="text-sm text-gray-700 font-semibold">
                                        Payment: <span className="font-normal">{job.payment_type}</span>
                                    </span>
                                )}
                                {job.budget_range && (
                                    <span className="text-sm text-gray-700 font-semibold">
                                        Range: <span className="font-normal">{job.budget_range}</span>
                                    </span>
                                )}
                            </div>

                            {/* Additional Questions */}
                            {job.additional_questions && job.additional_questions.length > 0 && job.additional_questions[0] && (
                                <div className="mb-2">
                                    <span className="font-semibold text-sm text-gray-800">Additional Questions:</span>
                                    <ul className="list-disc list-inside text-sm text-gray-700">
                                        {job.additional_questions.map((q, idx) => q && <li key={idx}>{q}</li>)}
                                    </ul>
                                </div>
                            )}

                            <hr className="border-black my-3" />

                            <div className="flex flex-wrap gap-2 items-center">
                                {/* Tags: use key_skills as tags for now */}
                                {job.key_skills && job.key_skills.map((text, idx) => (
                                    <span key={idx} className="bg-white border border-gray-200 text-xs md:text-sm text-black rounded px-2 md:px-3 py-1">{text}</span>
                                ))}
                                <div className="text-xs md:text-sm text-red-800 ml-auto flex flex-col items-end">
                                    <span>
                                        Start: {formatDate(job.start_date)}
                                    </span>
                                    <span>
                                        Duration: {job.duration}
                                    </span>
                                    <div className="flex flex-wrap gap-2 md:gap-4 mt-2">
                                        <button
                                            className="w-[180px] h-[28px] rounded-[16px] bg-white border border-[#030923] text-sm text-[#030923] flex items-center justify-center"
                                            onClick={() => handleManageProjects(job)}
                                        >
                                            Manage Projects <img src={arrowupblack} alt="" className="ml-1" />
                                        </button>
                                        <button
                                            className="w-[135px] h-[28px] rounded-[16px] bg-[#030923] text-sm text-white flex items-center justify-center"
                                            onClick={() => window.location.href = `/client/projects/${job._id}`}
                                        >
                                            View Projects <img src={arrowup} alt="" className="ml-1" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-8">
                            <button
                                className={`px-3 py-1 rounded border ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-black border-gray-300 hover:bg-gray-100'}`}
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Prev
                            </button>
                            {/* Page numbers */}
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    className={`px-3 py-1 rounded border ${currentPage === page ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-300 hover:bg-gray-100'}`}
                                    onClick={() => handlePageChange(page)}
                                >
                                    {page}
                                </button>
                            ))}
                            <button
                                className={`px-3 py-1 rounded border ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-black border-gray-300 hover:bg-gray-100'}`}
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default PostedJobs;