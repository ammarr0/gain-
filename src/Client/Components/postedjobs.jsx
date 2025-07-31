import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

function PostedJobs() {
    const navigate = useNavigate();
    const [jobCardsData, setJobCardsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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

    return (
        <div className="space-y-6 mt-7" >
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
                                            className="w-[135px] h-[28px] rounded-[16px] bg-white border border-[#030923] text-sm text-[#030923] flex items-center justify-center"
                                            onClick={() => navigate(`/client/jobs-details/${job._id}`)}
                                        >
                                            Manage Jobs <img src={arrowupblack} alt="" className="ml-1" />
                                        </button>
                                        <button
                                            className="w-[135px] h-[28px] rounded-[16px] bg-[#030923] text-sm text-white flex items-center justify-center"
                                            onClick={() => navigate(`/client/projects/${job._id}`)}
                                        >
                                            View Jobs <img src={arrowup} alt="" className="ml-1" />
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