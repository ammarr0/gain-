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

function JobCard() {
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

    const jobCardsData = [
        {
            title: "AI Risk Analysis",
            description: "Develop machine learning models to assess and mitigate financial risks, including credit, market, and operational risks.",
            userName: "Juxtapose",
            location: "UAE | United States",
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
            userName: "Reddit",
            location: "UK | Canada",
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
        {
            title: "AI Model Deployment",
            description: "Deploy AI models into production environments ensuring scalability and reliability.",
            userName: "Bank of America",
            location: "USA | Canada",
            rating: 4.7,
            jobs: 25,
            infoItems: [
                { imgSrc: location, altText: "Location", text: "USA | Canada" },
                { imgSrc: calendar, altText: "Calendar", text: "20 hrs/wk" },
                { imgSrc: clock, altText: "Clock", text: "Remote" }
            ],
            tags: ["AWS", "Docker", "Kubernetes"],
            dueDate: "20-11-2025"
        },
        {
            title: "AI Research",
            description: "Conduct research on cutting-edge AI technologies and publish findings in top journals.",
            userName: "Daenerys Targaryen",
            location: "Australia | New Zealand",
            rating: 4.9,
            jobs: 40,
            infoItems: [
                { imgSrc: location, altText: "Location", text: "Australia | New Zealand" },
                { imgSrc: calendar, altText: "Calendar", text: "40 hrs/wk" },
                { imgSrc: clock, altText: "Clock", text: "On-site" }
            ],
            tags: ["AI Research", "TensorFlow", "PyTorch"],
            dueDate: "05-12-2025"
        },
        {
            title: "AI System Design",
            description: "Design AI systems that integrate with existing infrastructure to enhance business operations.",
            userName: "Cersei Lannister",
            location: "France | Germany",
            rating: 4.6,
            jobs: 35,
            infoItems: [
                { imgSrc: location, altText: "Location", text: "France | Germany" },
                { imgSrc: calendar, altText: "Calendar", text: "35 hrs/wk" },
                { imgSrc: clock, altText: "Clock", text: "Hybrid" }
            ],
            tags: ["System Design", "Java", "C++"],
            dueDate: "10-01-2026"
        }
    ];

    return (
        <div className="space-y-6">
            {jobCardsData.map((job, index) => (
                <div
                    key={index}
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
                        {job.infoItems.map((item, idx) => renderInfoItem(item.imgSrc, item.altText, item.text))}
                    </div>

                    <hr className="my-1 border-black" />

                    <div className="mt-3 flex flex-wrap gap-2">
                        {job.tags.map((text, idx) => (
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