"use client";
import React from "react";
import { FaLinkedin, FaBehance, FaDribbble, FaStar, FaCheckCircle } from "react-icons/fa";

const profile = {
  name: "Ned Stark",
  title: "Project Manager",
  role: "UI/UX Designer",
  location: "Winterfell, The North",
  email: "ned.stark@example.com",
  phone: "+1 (555) 123-4567",
  avatar: "/avatar.jpg",
  rating: 5,
  earned: "$5000+",
  about:
    "Aesthetically responsive UI/UX systems and component design specialist. I’m a specialist in UX logic and usability. I design interfaces that make users enjoy what they see and simplify what they do. My goal is to provide creative and user-focused design solutions that bring value to users and businesses.\n\nWith over 8 years of experience in the design industry, I have led cross-functional teams, managed large-scale projects, and delivered high-impact solutions for clients in e-commerce, fintech, and SaaS. My expertise includes user research, wireframing, prototyping, and usability testing. I am passionate about mentoring junior designers and fostering a collaborative work environment.",
  experience: [
    {
      company: "Stark Enterprises",
      position: "Lead UI/UX Designer",
      duration: "2019 - Present",
      description:
        "Led a team of 6 designers to deliver end-to-end design solutions for enterprise clients. Oversaw the redesign of the company’s flagship product, resulting in a 30% increase in user engagement.",
    },
    {
      company: "Winterfell Tech",
      position: "Senior Product Designer",
      duration: "2015 - 2019",
      description:
        "Worked closely with product managers and engineers to create intuitive mobile and web applications. Conducted user research and usability testing to inform design decisions.",
    },
  ],
  education: [
    {
      institution: "University of the North",
      degree: "B.Sc. in Computer Science",
      year: "2011 - 2015",
    },
  ],
  certifications: [
    {
      name: "Certified UX Professional",
      issuer: "Interaction Design Foundation",
      year: "2020",
    },
    {
      name: "Google UX Design Certificate",
      issuer: "Coursera",
      year: "2021",
    },
  ],
  languages: [
    "English (Native)",
    "French (Professional)",
    "Valyrian (Conversational)",
  ],
  portfolio: [
    {
      title: "Landing Page",
      desc: "Creative UI/UX Design for E-Commerce Website. Designed a modern, conversion-focused landing page for a leading online retailer, resulting in a 20% increase in sign-ups.",
      img: "/portfolio1.jpg",
      link: "#",
      tech: ["Figma", "React", "TailwindCSS"],
    },
    {
      title: "UX Case Study",
      desc: "Case Study: Improving Checkout Flow. Conducted user research and A/B testing to streamline the checkout process for a SaaS platform, reducing cart abandonment by 15%.",
      img: "/portfolio2.jpg",
      link: "#",
      tech: ["Sketch", "UserTesting", "Hotjar"],
    },
    {
      title: "Product Redesign",
      desc: "Redesign of Mobile Banking App. Led the redesign of a mobile banking app, focusing on accessibility and ease of use, which improved app ratings from 3.2 to 4.6 stars.",
      img: "/portfolio3.jpg",
      link: "#",
      tech: ["Adobe XD", "InVision", "Zeplin"],
    },
  ],
  skills: [
    "Figma",
    "Product Design",
    "UX Research",
    "Mobile Design",
    "UI Systems",
    "Wireframes",
    "Prototyping",
    "Usability Testing",
    "Design Systems",
    "Agile Methodologies",
    "Team Leadership",
    "Accessibility",
    "HTML/CSS",
    "React",
  ],
  links: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nedstark",
      icon: <FaLinkedin className="text-black" />,
    },
    {
      name: "Behance",
      url: "https://www.behance.net/nedstark",
      icon: <FaBehance className="text-black" />,
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/nedstark",
      icon: <FaDribbble className="text-black" />,
    },
  ],
  completedJobs: [
    {
      title: "Business Development Manager for IT Projects in Middle East",
      rating: 5,
      reviews: 1,
      details:
        "Managed a cross-border team to deliver a custom CRM solution for a major client in the Middle East. Project completed ahead of schedule and received excellent client feedback.",
      date: "March 2024",
    },
    {
      title: "UI/UX Audit for Fintech Startup",
      rating: 5,
      reviews: 2,
      details:
        "Conducted a comprehensive UI/UX audit for a fintech startup, providing actionable recommendations that improved user retention by 18%.",
      date: "January 2024",
    },
  ],
};

const ProfilePage = () => {
  return (
    <div className="min-h-screen w-full bg-white font-sans flex justify-center items-start py-10 text-black">
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
                <span className="ml-2 px-2 py-0.5 bg-gray-100 text-black text-xs rounded-full font-medium border border-gray-200">
                  {profile.title}
                </span>
              </h1>
              <div className="flex items-center gap-2 mt-2">
                {[...Array(profile.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
                <span className="text-black text-sm ml-2">{profile.rating}.0</span>
              </div>
              <p className="text-black mt-1">{profile.role}</p>
              <div className="flex flex-col md:flex-row md:items-center gap-2 mt-2">
                <span className="text-sm text-gray-600">
                  <strong>Location:</strong> {profile.location}
                </span>
                <span className="text-sm text-gray-600">
                  <strong>Email:</strong> {profile.email}
                </span>
                <span className="text-sm text-gray-600">
                  <strong>Phone:</strong> {profile.phone}
                </span>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-white text-black px-7 py-3 rounded-lg border border-gray-200 shadow font-semibold text-lg hover:bg-gray-50 hover:scale-105 transition">
            <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
            Available Now
          </button>
        </div>

        {/* Role & Earnings */}
        <div className="w-full mt-2 flex flex-col md:flex-row justify-between items-center px-4 md:px-12 border-b border-gray-200 pb-6">
          <h2 className="text-2xl font-semibold text-black flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-black rounded-full mr-2"></span>
            {profile.role}
          </h2>
          <p className="text-xl text-black font-bold bg-green-50 px-4 py-2 rounded-lg shadow-sm mt-3 md:mt-0 border border-gray-200">
            {profile.earned} <span className="text-base font-normal text-black">Earned</span>
          </p>
        </div>

        {/* About */}
        <div className="w-full mt-8 text-black px-4 md:px-12">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-semibold mb-2 text-black">About</h3>
            <p className="leading-relaxed text-black whitespace-pre-line">{profile.about}</p>
          </div>
        </div>

        {/* Experience */}
        <div className="w-full mt-10 px-4 md:px-12">
          <h3 className="text-xl font-bold mb-5 text-black">Experience</h3>
          <div className="flex flex-col gap-4">
            {profile.experience.map((exp, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-semibold text-black">{exp.position} at {exp.company}</p>
                    <p className="text-sm text-gray-600">{exp.duration}</p>
                  </div>
                </div>
                <p className="text-black mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="w-full mt-10 px-4 md:px-12">
          <h3 className="text-xl font-bold mb-5 text-black">Education</h3>
          <div className="flex flex-col gap-4">
            {profile.education.map((edu, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl shadow-sm p-5">
                <p className="font-semibold text-black">{edu.degree}</p>
                <p className="text-sm text-gray-600">{edu.institution} &middot; {edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="w-full mt-10 px-4 md:px-12">
          <h3 className="text-xl font-bold mb-5 text-black">Certifications</h3>
          <div className="flex flex-col gap-4">
            {profile.certifications.map((cert, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 flex flex-col md:flex-row md:items-center md:justify-between">
                <span className="font-semibold text-black">{cert.name}</span>
                <span className="text-sm text-gray-600">{cert.issuer} &middot; {cert.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="w-full mt-10 px-4 md:px-12">
          <h3 className="text-xl font-bold mb-5 text-black">Languages</h3>
          <div className="flex flex-wrap gap-3">
            {profile.languages.map((lang, idx) => (
              <span
                key={idx}
                className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-gray-200"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Portfolio */}
        <div className="w-full mt-10 px-4 md:px-12">
          <h3 className="text-xl font-bold mb-5 text-black">Portfolio</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profile.portfolio.map((item, index) => (
              <div
                key={index}
                className="relative group h-60 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col justify-end p-5 hover:scale-105 transition"
              >
                <div className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
                <div className="relative z-10">
                  <h4 className="text-lg font-semibold text-black mb-1">{item.title}</h4>
                  <p className="text-sm text-black mb-2">{item.desc}</p>
                  {item.tech && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {item.tech.map((tech, i) => (
                        <span key={i} className="bg-green-50 text-green-800 px-2 py-1 rounded text-xs border border-green-200">{tech}</span>
                      ))}
                    </div>
                  )}
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs underline">
                      View Project
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="w-full mt-10 px-4 md:px-12">
          <h3 className="text-xl font-bold mb-5 text-black">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-gray-200 hover:bg-gray-200 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Linked Accounts */}
        <div className="w-full mt-10 px-4 md:px-12">
          <h3 className="text-xl font-bold mb-5 text-black">Linked Accounts</h3>
          <div className="flex gap-6">
            {profile.links.map((site) => (
              <a
                key={site.name}
                href={site.url}
                className="flex items-center gap-2 text-black hover:text-black font-medium text-lg transition"
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
          <h3 className="text-xl font-bold mb-5 text-black">Completed Jobs</h3>
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
                  <span className="text-black text-sm ml-2">
                    - {job.reviews} review{job.reviews > 1 ? "s" : ""}
                  </span>
                </div>
                {job.date && (
                  <span className="text-xs text-gray-500">Completed: {job.date}</span>
                )}
                {job.details && (
                  <p className="text-sm text-gray-700">{job.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
