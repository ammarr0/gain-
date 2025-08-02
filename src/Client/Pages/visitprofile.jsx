"use client";
import React from "react";
import { FaLinkedin, FaStar } from "react-icons/fa";
import { User as UserIcon } from "lucide-react";

const ProfilePage = () => {
  const user = {
    first_name: "Areeba",
    last_name: "Malik",
    image: "/avatar-demo.jpg",
    role: "UI/UX Designer",
    email: "areeba.malik@example.com",
    country: "Pakistan",
    city: "Lahore",
    website: "https://areebadesigns.com",
    linkedin: "https://linkedin.com/in/areebamalik",
  };

  const fullName = `${user.first_name} ${user.last_name}`;
  const avatar = user.image || "";
  const role = user.role;
  const email = user.email;
  const country = user.country;
  const city = user.city;
  const website = user.website;
  const linkedin = user.linkedin;
  const rating = 5;
  const earned = "$4,250";
  const about = `Hi, I’m Areeba — a passionate UI/UX designer focused on creating intuitive and user-centered interfaces.\n\nEmail: ${email}\nLocation: ${city}, ${country}`;
  const portfolio = [
    {
      title: "Mobile App Redesign",
      desc: "Redesigned an eCommerce app for improved UX",
      img: "/portfolio1.jpg",
    },
    {
      title: "Landing Page",
      desc: "A modern landing page for a SaaS startup",
      img: "/portfolio2.jpg",
    },
    {
      title: "Design System",
      desc: "Built a scalable Figma design system for a large brand",
      img: "/portfolio3.jpg",
    },
  ];
  const locations = [country, city].filter(Boolean);
  const skills = ["Figma", "Adobe XD", "User Research", "Prototyping", "Responsive Design"];
  const links = [
    {
      name: "LinkedIn",
      url: linkedin,
      icon: <FaLinkedin className="text-gray-700" />,
    },
    {
      name: "Website",
      url: website,
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="9" stroke="#555" strokeWidth="2" />
          <path d="M5 10h10M10 5v10" stroke="#555" strokeWidth="2" />
        </svg>
      ),
    },
  ];
  const completedJobs = [
    {
      title: "Health App UI Design",
      rating: 5,
      reviews: 3,
    },
    {
      title: "Web Dashboard Revamp",
      rating: 4,
      reviews: 2,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white px-0 py-0 font-sans text-black">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 py-12 px-6 border-b border-gray-200">
        <div className="flex items-center gap-8">
          <div className="relative">
            {avatar ? (
              <img
                src={avatar}
                alt={fullName}
                className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-gray-200 shadow"
              />
            ) : (
              <div className="w-32 h-32 md:w-36 md:h-36 flex items-center justify-center rounded-full border-4 border-gray-200 shadow bg-gray-100">
                <UserIcon size={72} className="text-gray-400" />
              </div>
            )}
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-black flex items-center gap-3">
              {fullName}
              {role && (
                <span className="ml-2 px-3 py-1 bg-gray-100 text-black text-sm rounded-full font-semibold border border-gray-300">
                  {role}
                </span>
              )}
            </h1>
            <div className="flex items-center gap-2 mt-3">
              {[...Array(rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
              <span className="text-gray-500 text-base ml-2 font-medium">{rating}.0</span>
            </div>
            <p className="text-gray-700 mt-2 text-lg font-medium">{role}</p>
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
        </div>
      </div>

      <div className="w-full mt-2 flex flex-col md:flex-row justify-between items-center px-6 border-b border-gray-200 pb-8">
        <h2 className="text-2xl font-bold text-black flex items-center gap-3">
          <span className="inline-block w-3 h-3 bg-gray-400 rounded-full mr-2 shadow"></span>
          {role}
        </h2>
        <p className="text-2xl text-green-600 font-extrabold bg-gray-50 px-6 py-3 rounded-xl border border-gray-200 mt-4 md:mt-0 flex items-center gap-2">
          {earned}
          <span className="text-base font-normal text-green-700 ml-1">Earned</span>
        </p>
      </div>

      <div className="w-full mt-10 text-black px-6">
        <div className="bg-white rounded-3xl shadow p-8 border border-gray-200">
          <h3 className="text-xl font-bold mb-3 text-black flex items-center gap-2">
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            About
          </h3>
          <p className="leading-relaxed text-gray-700 text-lg whitespace-pre-line">{about}</p>
        </div>
      </div>

      {locations.length > 0 && (
        <div className="w-full mt-6 text-black px-6">
          <div className="bg-white rounded-3xl shadow p-8 border border-gray-200">
            <h3 className="text-xl font-bold mb-3 text-black flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              Locations
            </h3>
            <div className="flex flex-wrap gap-4">
              {locations.map((loc) => (
                <span
                  key={loc}
                  className="bg-gray-100 text-black px-5 py-2 rounded-full text-base font-semibold shadow hover:bg-gray-200 transition border border-gray-300"
                >
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="w-full mt-12 px-6">
        <h3 className="text-2xl font-bold mb-7 text-black flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          Portfolio
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolio.map((item, index) => (
            <div
              key={index}
              className="relative group h-56 bg-gray-100 rounded-2xl shadow overflow-hidden flex flex-col justify-end p-6 hover:scale-105 hover:shadow-lg transition border border-gray-200"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-35 transition"
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

      <div className="w-full mt-12 px-6">
        <h3 className="text-2xl font-bold mb-7 text-black flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          Skills
        </h3>
        <div className="flex flex-wrap gap-4">
          {skills.length > 0 ? (
            skills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 text-black px-5 py-2 rounded-full text-base font-semibold shadow hover:bg-gray-200 transition border border-gray-300"
              >
                {skill}
              </span>
            ))
          ) : (
            <span className="text-gray-500">No skills listed.</span>
          )}
        </div>
      </div>

      <div className="w-full mt-12 px-6">
        <h3 className="text-2xl font-bold mb-7 text-black flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          Linked Accounts
        </h3>
        <div className="flex gap-8">
          {links.map((site) => (
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

      <div className="w-full mt-12 px-6 pb-20">
        <h3 className="text-2xl font-bold mb-7 text-black flex items-center gap-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
          Completed Jobs
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {completedJobs.map((job, idx) => (
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
