import React from 'react';
import User from "../../assets/user.png";
import star from "../../assets/star.png";
import Jobs from "../../assets/job.png";
import location from "../../assets/location.png";
import calendar from "../../assets/calendar.png";
import clock from "../../assets/clock.png";
import arrowup from "../../assets/arrow-up-right-white.png";
import arrowupblack from "../../assets/arrow-up-right-black.png";
import { useNavigate } from 'react-router-dom';
import jobs from "../../jobs.json";

const iconMap = {
    "location.png": location,
    "calendar.png": calendar,
    "clock.png": clock,
};

function JobCard() {
    const navigate = useNavigate();

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

    const renderInfoItem = (imgSrc, altText, text) => (
        <div className="flex items-center gap-1" key={altText + text}>
            <img src={imgSrc} alt={altText} className="h-4 w-4" />
            <span className="text-sm text-gray-700">{text}</span>
        </div>
    );

    return (
        <div className="space-y-6">
            {jobs.map((job, index) => (
                <div
                    key={job.id || index}
                    className="bg-white border border-gray-300 rounded-xl w-full mx-auto p-6 flex flex-col min-h-[300px] justify-between cursor-pointer"
                    onClick={() => navigate(`/client/jobs-details`)}
                >
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <h2 className="text-xl md:text-2xl font-bold text-black">{job.title}</h2>
                        <div className="flex flex-wrap gap-2 md:gap-4 mt-2 md:mt-0">
                            {renderButton("bg-white border border-[#030923]", "text-[#030923]", "Manage Jobs", arrowupblack, () => navigate(`/client/jobs-details`))}
                            {renderButton("bg-[#030923]", "text-white", "View Jobs", arrowup, () => navigate(`/client/jobs-details`))}
                        </div>
                    </div>

                    <p className="text-black mt-2">{job.description}</p>

                    <div className="mt-4 flex flex-col md:flex-row items-start md:items-center justify-start gap-3">
                        <img src={User} alt="User" className="h-8 w-8 rounded-full object-cover cursor-pointer" />
                        <div>
                            <h3 className="font-semibold text-black">{job.userName}</h3>
                            <hr className="border-black" />
                            <p className="text-xs text-black">{job.location}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={star} alt="Star" className="h-5 w-5" />
                            <span className="text-lg text-gray-700">{job.rating}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={Jobs} alt="Jobs" className="h-5 w-5" />
                            <span className="text-lg text-gray-700">{job.jobs}</span>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row gap-4'>
                        {job.infoItems && job.infoItems.map((item, idx) =>
                            renderInfoItem(
                                iconMap[item.imgSrc] || location,
                                item.altText,
                                item.text
                            )
                        )}
                    </div>

                    <hr className="my-1 border-black" />

                    <div className="mt-3 flex flex-wrap gap-2">
                        {job.tags && job.tags.map((text, idx) => (
                            <span key={idx} className="bg-white border border-gray-200 text-sm text-black rounded px-3 py-1">{text}</span>
                        ))}
                        <p className="text-sm text-red-800 ml-auto">Due on: {job.dueDate}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default JobCard;