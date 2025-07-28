"use client";
import React from "react";
import { FaLinkedin, FaBehance, FaDribbble, FaStar, FaCheckCircle } from "react-icons/fa";
import { User as UserIcon, Edit2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const profile = {
  name: "Ned Stark",
  title: "Project Manager",
  role: "UI/UX Designer",
  avatar: "",
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
      icon: <FaLinkedin className="text-gray-700" />,
    },
    {
      name: "Behance",
      url: "#",
      icon: <FaBehance className="text-gray-700" />,
    },
    {
      name: "Dribbble",
      url: "#",
      icon: <FaDribbble className="text-gray-700" />,
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
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white px-0 py-0 font-sans text-black">
      {/* Profile Header */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 py-12 px-6 border-b border-gray-200">
        <div className="flex items-center gap-8">
          <div className="relative">
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-gray-200 shadow"
              />
            ) : (
              <div className="w-32 h-32 md:w-36 md:h-36 flex items-center justify-center rounded-full border-4 border-gray-200 shadow bg-gray-100">
                <UserIcon size={72} className="text-gray-400" />
              </div>
            )}
            <button
              type="button"
              className="absolute top-2 right-2 bg-white border border-gray-300 rounded-full p-1.5 shadow hover:bg-gray-100 transition z-20"
              title="Edit Profile"
              onClick={() => navigate("/talent/edit-profile")}
              tabIndex={0}
              aria-label="Edit Profile"
            >
              <Edit2 size={22} className="text-gray-700" />
            </button>
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-black flex items-center gap-3">
              {profile.name}
              <span className="ml-2 px-3 py-1 bg-gray-100 text-black text-sm rounded-full font-semibold border border-gray-300">
                {profile.title}
              </span>
            </h1>
            <div className="flex items-center gap-2 mt-3">
              {[...Array(profile.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
              <span className="text-gray-500 text-base ml-2 font-medium">{profile.rating}.0</span>
            </div>
            <p className="text-gray-700 mt-2 text-lg font-medium">{profile.role}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-3">
          <button
            type="button"
            className="flex items-center gap-3 bg-blue-600 text-white px-8 py-3 rounded-xl shadow font-semibold text-lg hover:scale-105 hover:shadow-lg transition"
            tabIndex={0}
          >
            <span className="w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow"></span>
            Available Now
          </button>
          {/* Edit Profile Button (main button, visible and clear) */}
          <button
            type="button"
            className="flex items-centeer gap-2 bg-white border border-gray-400 text-black px-6 py-2.5 rounded-xl shadow hover:bg-gray-100 transition font-semibold mt-2 z-10"
            onClick={() => navigate("/talent/edit-profile")}
            tabIndex={0}
            aria-label="Edit Profile"
          >
            <Edit2 size={20} className="text-gray-700" />
            Edit Profile
          </button>
        </div>
      </div>

      {/* Role & Earnings */}
      <div className="w-full mt-2 flex flex-col md:flex-row justify-between items-center px-6 border-b border-gray-200 pb-8">
        <h2 className="text-2xl font-bold text-black flex items-center gap-3">
          <span className="inline-block w-3 h-3 bg-gray-400 rounded-full mr-2 shadow"></span>
          {profile.role}
        </h2>
        <p className="text-2xl text-green-600 font-extrabold bg-gray-50 px-6 py-3 rounded-xl border border-gray-200 mt-4 md:mt-0 flex items-center gap-2">
          {profile.earned}
          <span className="text-base font-normal text-green-700 ml-1">Earned</span>
        </p>
      </div>

      {/* About Section */}
      <div className="w-full mt-10 text-black px-6">
        <div className="bg-white rounded-3xl shadow p-8 border border-gray-200">
          <h3 className="text-xl font-bold mb-3 text-black flex items-center gap-2">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            About
          </h3>
          <p className="leading-relaxed text-gray-700 text-lg">{profile.about}</p>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="w-full mt-12 px-6">
        <h3 className="text-2xl font-bold mb-7 text-black flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          Portfolio
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profile.portfolio.map((item, index) => (
            <div
              key={index}
              className="relative group h-56 bg-gray-100 rounded-2xl shadow overflow-hidden flex flex-col justify-end p-6 hover:scale-105 hover:shadow-lg transition border border-gray-200"
            >
              <div className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-35 transition"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="relative z-10">
                <h4 className="text-lg font-bold text-black mb-1">{item.title}</h4>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-full mt-12 px-6">
        <h3 className="text-2xl font-bold mb-7 text-black flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          Skills
        </h3>
        <div className="flex flex-wrap gap-4">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 text-black px-5 py-2 rounded-full text-base font-semibold shadow hover:bg-gray-200 transition border border-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Linked Accounts */}
      <div className="w-full mt-12 px-6">
        <h3 className="text-2xl font-bold mb-7 text-black flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          Linked Accounts
        </h3>
        <div className="flex gap-8">
          {profile.links.map((site) => (
            <a
              key={site.name}
              href={site.url}
              className="flex items-center gap-2 text-gray-700 hover:text-black font-semibold text-lg transition hover:scale-110"
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
      <div className="w-full mt-12 px-6 pb-20">
        <h3 className="text-2xl font-bold mb-7 text-black flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          Completed Jobs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profile.completedJobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow p-6 flex flex-col gap-3 border border-gray-200 hover:scale-[1.02] hover:shadow-lg transition"
            >
              <p className="font-semibold text-black text-lg">{job.title}</p>
              <div className="flex items-center gap-1 text-yellow-500 text-xl">
                {[...Array(job.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="text-gray-600 text-base ml-2">
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
