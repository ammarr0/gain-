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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-0 py-0 font-sans">
      {/* Header */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 py-10 px-6">
        <div className="flex items-center gap-6">
          <div className="relative">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-blue-200 shadow-lg"
            />
            <span className="absolute bottom-2 right-2 bg-green-400 border-2 border-white rounded-full p-1">
              <FaCheckCircle className="text-white w-4 h-4" />
            </span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              {profile.name}
              <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
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
        <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-7 py-3 rounded-lg shadow-md font-semibold text-lg hover:scale-105 transition">
          <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
          Available Now
        </button>
      </div>

      {/* Role & Earnings */}
      <div className="max-w-5xl mx-auto mt-2 flex flex-col md:flex-row justify-between items-center px-6">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
          {profile.role}
        </h2>
        <p className="text-xl text-green-600 font-bold bg-green-50 px-4 py-2 rounded-lg shadow-sm mt-3 md:mt-0">
          {profile.earned} <span className="text-base font-normal text-green-700">Earned</span>
        </p>
      </div>

      {/* About */}
      <div className="max-w-5xl mx-auto mt-8 text-gray-700 px-6">
        <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-blue-400">
          <h3 className="text-lg font-semibold mb-2 text-blue-700">About</h3>
          <p className="leading-relaxed text-gray-700">{profile.about}</p>
        </div>
      </div>

      {/* Portfolio */}
      <div className="max-w-5xl mx-auto mt-10 px-6">
        <h3 className="text-xl font-bold mb-5 text-gray-800">Portfolio</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profile.portfolio.map((item, index) => (
            <div
              key={index}
              className="relative group h-52 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg overflow-hidden flex flex-col justify-end p-5 hover:scale-105 transition"
            >
              <div className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="relative z-10">
                <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="max-w-5xl mx-auto mt-10 px-6">
        <h3 className="text-xl font-bold mb-5 text-gray-800">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="bg-gradient-to-r from-blue-100 to-blue-300 text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-blue-200 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Linked Accounts */}
      <div className="max-w-5xl mx-auto mt-10 px-6">
        <h3 className="text-xl font-bold mb-5 text-gray-800">Linked Accounts</h3>
        <div className="flex gap-6">
          {profile.links.map((site) => (
            <a
              key={site.name}
              href={site.url}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-lg transition"
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
      <div className="max-w-5xl mx-auto mt-10 px-6 pb-16">
        <h3 className="text-xl font-bold mb-5 text-gray-800">Completed Jobs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profile.completedJobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl shadow p-5 flex flex-col gap-2 border-l-4 border-green-400"
            >
              <p className="font-semibold text-gray-900">{job.title}</p>
              <div className="flex items-center gap-1 text-yellow-500 text-lg">
                {[...Array(job.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="text-gray-600 text-sm ml-2">
                  - {job.reviews} review{job.reviews > 1 ? "s" : ""}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
