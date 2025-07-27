"use client";
import React from "react";
import { FaLinkedin, FaBehance, FaDribbble, FaStar, FaCheckCircle } from "react-icons/fa";

const profile = {
  name: "Ned Stark",
  title: "Project Manager",
  role: "UI/UX Designer",
  avatar: "/avatar.jpg",
  rating: 5,
  earned: "$5000+",
  about:
    "Aesthetically responsive UI/UX systems and component design specialist. I’m a specialist in UX logic and usability. I design interfaces that make users enjoy what they see and simplify what they do. My goal is to provide creative and user-focused design solutions that bring value to users and businesses.",
  portfolio: [
    {
      title: "Landing Page",
      desc: "Creative UI/UX Design for E-Commerce Website",
      img: "/portfolio1.jpg",
    },
    {
      title: "UX Case Study",
      desc: "Case Study: Improving Checkout Flow",
      img: "/portfolio2.jpg",
    },
    {
      title: "Product Redesign",
      desc: "Redesign of Mobile Banking App",
      img: "/portfolio3.jpg",
    },
  ],
  skills: [
    "Figma",
    "Product Design",
    "UX Research",
    "Mobile Design",
    "UI Systems",
    "Wireframes",
  ],
  links: [
    {
      name: "LinkedIn",
      url: "#",
      icon: <FaLinkedin className="text-blue-700" />,
    },
    {
      name: "Behance",
      url: "#",
      icon: <FaBehance className="text-blue-500" />,
    },
    {
      name: "Dribbble",
      url: "#",
      icon: <FaDribbble className="text-pink-500" />,
    },
  ],
  completedJobs: [
    {
      title: "Business Development Manager for IT Projects in Middle East",
      rating: 5,
      reviews: 1,
    },
  ],
};

const ProfilePage = () => {
  return (
    <div className="min-h-screen w-full bg-white font-sans flex justify-center items-start py-10">
      <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-sm p-0 text-black">
        {/* Header */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 py-10 px-4 md:px-12 border-b border-gray-200">
          <div className="flex items-center gap-6">
            <div className="relative">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-gray-200 shadow"
              />
              <span className="absolute bottom-2 right-2 bg-green-400 border-2 border-white rounded-full p-1">
                <FaCheckCircle className="text-white w-4 h-4" />
              </span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-black flex items-center gap-2">
                {profile.name}
                <span className="ml-2 px-2 py-0.5 bg-gray-100 text-blue-700 text-xs rounded-full font-medium border border-gray-200">
                  {profile.title}
                </span>
              </h1>
              <div className="flex items-center gap-2 mt-2">
                {[...Array(profile.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
                <span className="text-gray-500 text-sm ml-2">{profile.rating}.0</span>
              </div>
              <p className="text-gray-500 mt-1">{profile.role}</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-white text-blue-700 px-7 py-3 rounded-lg border border-gray-200 shadow font-semibold text-lg hover:bg-gray-50 hover:scale-105 transition">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
            Available Now
          </button>
        </div>

        {/* Role & Earnings */}
        <div className="w-full mt-2 flex flex-col md:flex-row justify-between items-center px-4 md:px-12 border-b border-gray-200 pb-6">
          <h2 className="text-2xl font-semibold text-blue-700 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-blue-700 rounded-full mr-2"></span>
            {profile.role}
          </h2>
          <p className="text-xl text-green-600 font-bold bg-green-50 px-4 py-2 rounded-lg shadow-sm mt-3 md:mt-0 border border-gray-200">
            {profile.earned} <span className="text-base font-normal text-green-700">Earned</span>
          </p>
        </div>

        {/* About */}
        <div className="w-full mt-8 text-black px-4 md:px-12">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-2 text-blue-700">About</h3>
            <p className="leading-relaxed text-black">{profile.about}</p>
          </div>
        </div>

        {/* Portfolio */}
        <div className="w-full mt-10 px-4 md:px-12">
          <h3 className="text-xl font-bold mb-5 text-blue-700">Portfolio</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profile.portfolio.map((item, index) => (
              <div
                key={index}
                className="relative group h-52 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col justify-end p-5 hover:scale-105 transition"
              >
                <div className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
                <div className="relative z-10">
                  <h4 className="text-lg font-semibold text-black mb-1">{item.title}</h4>
                  <p className="text-sm text-blue-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="w-full mt-10 px-4 md:px-12">
          <h3 className="text-xl font-bold mb-5 text-blue-700">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-gray-200 hover:bg-gray-200 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Linked Accounts */}
        <div className="w-full mt-10 px-4 md:px-12">
          <h3 className="text-xl font-bold mb-5 text-blue-700">Linked Accounts</h3>
          <div className="flex gap-6">
            {profile.links.map((site) => (
              <a
                key={site.name}
                href={site.url}
                className="flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium text-lg transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.icon}
                {site.name}
              </a>
            ))}
          </div>
        </div>

        {/* Completed Jobs */}
        <div className="w-full mt-10 px-4 md:px-12 pb-16">
          <h3 className="text-xl font-bold mb-5 text-blue-700">Completed Jobs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.completedJobs.map((job, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col gap-2"
              >
                <p className="font-semibold text-black">{job.title}</p>
                <div className="flex items-center gap-1 text-yellow-500 text-lg">
                  {[...Array(job.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  <span className="text-blue-700 text-sm ml-2">
                    - {job.reviews} review{job.reviews > 1 ? "s" : ""}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
