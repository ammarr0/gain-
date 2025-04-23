import React from 'react';
import { FaStar, FaEllipsisH } from 'react-icons/fa';
import { FiMessageCircle, FiBookmark, FiShare2 } from 'react-icons/fi';
import menu from "../../assets/menu.svg"
import msg from "../../assets/msg.png"

const TalentProfileCard = () => {
  return (
    <div className="border rounded-xl p-6 shadow-sm bg-white w-[96%] mx-auto mb-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex gap-4">
          <img
            src="https://via.placeholder.com/80"
            alt="Ned Stark"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold">Ned Stark</h2>
            <p className="text-gray-500 text-sm">Project Manager</p>
            <div className="flex items-center text-yellow-500 text-sm mt-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-1">📍 Winterfell, Westeros – 5:30 pm local time</p>
            <span className="inline-block bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full mt-2">
              ✅ Available Now
            </span>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <div className="text-sm text-gray-700">
            <span className="font-semibold">6 Years</span> • <span>$150.00/hr</span>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <FiMessageCircle className="w-5 h-5 text-gray-500 cursor-pointer" />
            <FiBookmark className="w-5 h-5 text-gray-500 cursor-pointer" />
            <FiShare2 className="w-5 h-5 text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-sm mt-4">
        Assisting businesses in crafting awareness and compelling digital experiences.
        With a specialization in UI design and branding, I bring a proven record of enhancing user engagement, 
        driving sales conversions, and fostering customer loyalty. I address challenges such as suboptimal usability 
        and outdated aesthetics, ensuring your brand not only stands apart but also delivers tangible, measurable results.
      </p>
      <hr className="my-4" />
      <div className="flex justify-end items-center mt-6 gap-2">
        <button className="border border-black p-1 rounded-[10px] w-15 h-15 text-sm font-medium hover:bg-gray-100 px-5 py-2">
          View Profile
        </button>
        <img src={menu} alt="" />
        <img src={msg} alt="" className='border border-black p-1 rounded-[10px] w-15 h-15' />
      </div>
    </div>
  );
};

export default TalentProfileCard;