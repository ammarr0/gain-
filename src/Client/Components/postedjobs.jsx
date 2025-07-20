import React from 'react';
import { useNavigate } from 'react-router-dom';
import jobs from "../../jobs.json";
import location from "../../assets/location.png";
import calendar from "../../assets/calendar.png";
import clock from "../../assets/clock.png";
import arrowup from "../../assets/arrow-up-right-white.png";
import arrowupblack from "../../assets/arrow-up-right-black.png";

const iconMap = {
    "location.png": location,
    "calendar.png": calendar,
    "clock.png": clock,
};

function PostedJobs() {
    const navigate = useNavigate();

    const renderButton = (bgColor, textColor, text, imgSrc, onClick) => (
        <button 
            className={`w-[135px] h-[28px] rounded-[16px] ${bgColor} text-sm ${textColor} flex items-center justify-center`}
            onClick={onClick}
        >
            {text} <img src={imgSrc} alt="" className="ml-1" />
        </button>
    );

    const renderInfoItem = (imgSrc, altText, text) => (
        <div className="flex items-center gap-1">
            <img src={imgSrc} alt={altText} className="h-4 w-4" />
            <span className="text-sm text-gray-700">{text}</span>
        </div>
    );

    return (
        <div className="space-y-6 mt-7">
            {jobs.map((job, index) => (
                <div key={index} className="bg-white border border-gray-300 rounded-2xl w-full mx-auto p-6 flex flex-col min-h-[200px] justify-between">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <h2 className="text-xl md:text-2xl font-bold text-black">{job.title}</h2>
                    </div>

                    <p className="text-black text-sm md:text-base">{job.description}</p>
                    <div className='flex flex-wrap gap-2 md:gap-4'>
                        {job.infoItems.map((item, idx) => renderInfoItem(iconMap[item.imgSrc], item.altText, item.text))}
                    </div>

                    <hr className="border-black" />

                    <div className="flex flex-wrap gap-2">
                        {job.tags.map((text, idx) => (
                            <span key={idx} className="bg-white border border-gray-200 text-xs md:text-sm text-black rounded px-2 md:px-3 py-1">{text}</span>
                        ))}
                        <div className="text-xs md:text-sm text-red-800 ml-auto">
                            Due on: {job.dueDate}
                            <div className="flex flex-wrap gap-2 md:gap-4">
                                {renderButton("bg-white border border-[#030923]", "text-[#030923]", "Manage Jobs", arrowupblack, () => navigate(`/client/jobs-details/${job.id}`))}
                                {renderButton("bg-[#030923]", "text-white", "View Jobs", arrowup, () => navigate(`/client/jobs-details/${job.id}`))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PostedJobs;