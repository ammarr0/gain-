import React from 'react';
import location from "../../assets/location.png";
import calendar from "../../assets/calendar.png";
import clock from "../../assets/clock.png";
import arrowup from "../../assets/arrow-up-right-white.png";
import arrowupblack from "../../assets/arrow-up-right-black.png";

function PostedJobs() {
    const renderButton = (bgColor, textColor, text, imgSrc) => (
        <button className={`w-[135px] h-[28px] rounded-[16px] ${bgColor} text-sm ${textColor} flex items-center justify-center`}>
            {text} <img src={imgSrc} alt="" className="ml-1" />
        </button>
    );

    const renderInfoItem = (imgSrc, altText, text) => (
        <div className="flex items-center gap-1">
            <img src={imgSrc} alt={altText} className="h-4 w-4" />
            <span className="text-sm text-gray-700">{text}</span>
        </div>
    );

    const postedJobsData = [
        {
            title: "AI Risk Analysis",
            description: "Develop machine learning models to assess and mitigate financial risks, including credit, market, and operational risks.",
            userName: "Tyrion Lannister",
            location: "Kings Landing",
            rating: 4.9,
            jobs: 32,
            infoItems: [
                { imgSrc: location, altText: "Location", text: "UAE | United States" },
                { imgSrc: calendar, altText: "Calendar", text: "25 hrs/wk" },
                { imgSrc: clock, altText: "Clock", text: "Anytime" }
            ],
            tags: ["Project Management Tools", "Jira", "Hubspot"],
            dueDate: "01-09-2025"
        },
        {
            title: "AI Data Analysis",
            description: "Analyze large datasets to extract meaningful insights and support decision-making processes.",
            userName: "Arya Stark",
            location: "Winterfell",
            rating: 4.8,
            jobs: 28,
            infoItems: [
                { imgSrc: location, altText: "Location", text: "UK | Canada" },
                { imgSrc: calendar, altText: "Calendar", text: "30 hrs/wk" },
                { imgSrc: clock, altText: "Clock", text: "Flexible" }
            ],
            tags: ["Data Science", "Python", "R"],
            dueDate: "15-10-2025"
        },
    ];

    return (
        <div className="space-y-6 mt-7">
            {postedJobsData.map((job, index) => (
                <div key={index} className="bg-white border border-gray-300 rounded-2xl w-full mx-auto p-6 flex flex-col min-h-[200px] justify-between">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-black">{job.title}</h2>
                      
                    </div>

                    <p className="text-black">{job.description}</p>
                    <div className='flex gap-4'>
                        {job.infoItems.map((item, idx) => renderInfoItem(item.imgSrc, item.altText, item.text))}
                    </div>

                    <hr className="border-black" />

                    <div className="flex gap-2">
                        {job.tags.map((text, idx) => (
                            <span key={idx} className="bg-white border border-gray-200 text-sm text-black rounded px-3 py-1">{text}</span>
                        ))}
                        <div className="text-sm text-red-800 ml-auto">

                        <div className="flex gap-4">
                            {renderButton("bg-white border border-[#030923]", "text-[#030923]", "Manage Jobs", arrowupblack)}
                            {renderButton("bg-[#030923]", "text-white", "View Jobs", arrowup)}
                        </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PostedJobs;