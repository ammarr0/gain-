import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FiMessageCircle, FiBookmark, FiShare2 } from 'react-icons/fi';
import menu from "../../assets/menu.svg";
import linkedinIcon from "../../assets/linkedin.png";
import calendarIcon from "../../assets/calender.png";
import websiteIcon from "../../assets/website.png";
import msg from "../../assets/msg.png";

const talentData = [
  {
    name: "Ned Stark",
    role: "Project Manager",
    experience: "6 Years",
    rate: "$150.00/hr",
    location: "Winterfell, Westeros",
    availability: "Available Now",
    description: "Assisting businesses in crafting awareness and compelling digital experiences. With a specialization in UI design and branding, I bring a proven record of enhancing user engagement, driving sales conversions, and fostering customer loyalty. I address challenges such as suboptimal usability and outdated aesthetics, ensuring your brand not only stands apart but also delivers tangible, measurable results.",
  },
  {
    name: "Arya Stark",
    role: "Software Engineer",
    experience: "3 Years",
    rate: "$120.00/hr",
    location: "Braavos, Essos",
    availability: "Available Now",
    description: "Specializing in full-stack development with a focus on creating seamless user experiences. I have a strong background in JavaScript frameworks and a passion for building scalable applications.",
  },
  {
    name: "Jon Snow",
    role: "Data Scientist",
    experience: "5 Years",
    rate: "$140.00/hr",
    location: "Castle Black, Westeros",
    availability: "Available Now",
    description: "Expert in data analysis and machine learning, helping organizations make data-driven decisions. I excel in predictive modeling and data visualization.",
  },
  {
    name: "Daenerys Targaryen",
    role: "Marketing Specialist",
    experience: "4 Years",
    rate: "$130.00/hr",
    location: "Dragonstone, Westeros",
    availability: "Available Now",
    description: "Focused on digital marketing strategies that drive brand growth and customer engagement. I have a proven track record in social media marketing and content creation.",
  },
  {
    name: "Tyrion Lannister",
    role: "Business Analyst",
    experience: "7 Years",
    rate: "$160.00/hr",
    location: "King's Landing, Westeros",
    availability: "Available Now",
    description: "Skilled in business process improvement and strategic planning. I provide insights that help businesses optimize operations and achieve their goals.",
  }
];

const TalentProfileCard = () => {
  return (
    <>
      {talentData.map((talent, index) => (
        <div key={index} className="border rounded-xl p-6 shadow-sm bg-white w-[96%] mx-auto mb-6">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex gap-4">
              <img
                src="https://via.placeholder.com/80"
                alt={talent.name}
                className="w-20 h-20 rounded-full object-cover border border-gray-300"
              />
              <div>
                <h2 className="text-2xl font-semibold">{talent.name}</h2>
                <p className="text-gray-500 text-lg">{talent.role}</p>
                <div className="flex items-center text-black text-lg mt-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end justify-between">
              <div className="text-2xl text-black flex items-center gap-2">
                <span className="font-semibold">{talent.experience}</span> • <span>{talent.rate}</span>
                <img src={linkedinIcon} alt="LinkedIn" />
                <img src={calendarIcon} alt="Calendar" />
                <img src={websiteIcon} alt="Website" />
              </div>
              <div className="flex gap-2 mt-4 md:mt-0">
                <FiMessageCircle className="w-6 h-6 text-gray-500 cursor-pointer" />
                <FiBookmark className="w-6 h-6 text-gray-500 cursor-pointer" />
                <FiShare2 className="w-6 h-6 text-gray-500 cursor-pointer" />
              </div>
            </div>
          </div>
          <div>
            <p className="text-lg text-gray-500 mt-1">📍 {talent.location} – 5:30 pm local time</p>
            <span className="inline-block bg-blue-600 text-white text-base px-3 py-1 rounded-full mt-2">
              ✅ {talent.availability}
            </span>
          </div>
          <hr className="my-4" />
          <p className="text-gray-700 text-lg mt-4">
            {talent.description}
          </p>
          <hr className="my-4" />
          <div className="flex justify-end items-center mt-6 gap-2">
            <button className="border border-black p-1 rounded-[10px] w-15 h-15 text-lg font-medium hover:bg-gray-100 px-5 py-2">
              View Profile
            </button>
            <img src={menu} alt="" />
            <img src={msg} alt="" className='border border-black p-1 rounded-[10px] w-15 h-15' />
          </div>
        </div>
      ))}
    </>
  );
};

export default TalentProfileCard;