import React from 'react';

const DesignAgencyProfile = () => {
  const teamStrengths = [
    { label: 'Web Development', percentage: 50, color: 'bg-blue-300' },
    { label: 'Artificial Intelligence', percentage: 30, color: 'bg-green-300' },
    { label: 'Design and Branding', percentage: 20, color: 'bg-orange-300' },
  ];

  const portfolioItems = [
    'Custom UI/UX Design for E-Commerce Website',
    'Custom UI/UX Design for E-Commerce Website',
    'Custom UI/UX Design for E-Commerce Website',
  ];

  const skills = ['UI/UX Design', 'Product Design', 'Website Design', 'User Experience', 'App Design', 'Figma', 'Photoshop'];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold">Design Agency</h1>
        <p className="text-xl text-gray-500">$100.00/hr</p>
        <p className="text-lg text-gray-700 mt-2">
          Assisting businesses in creating seamless and compelling digital experiences. With a specialization in UI design and branding, I bring a proven record of enhancing user engagement, driving sales conversions, and fostering customer loyalty. I address challenges such as successfully utilizing outdated aesthetics, ensuring your brand not only stands apart but also delivers tangible, measurable results.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Team Strength and Expertise</h2>
        <div className="text-sm text-gray-500 mb-4">Team members: 1 - 50 Employees</div>
        {teamStrengths.map((item, index) => (
          <div key={index} className="flex items-center mb-4">
            <span className="w-1/2 font-semibold">{item.label}</span>
            <div className="w-1/2 bg-gray-200 rounded-full h-2">
              <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${item.percentage}%` }}></div>
            </div>
            <span className="ml-2">{item.percentage}%</span>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Portfolio</h2>
        <div className="grid grid-cols-3 gap-4">
          {portfolioItems.map((item, index) => (
            <div key={index} className="h-40 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
        <div className="mt-4">
          {portfolioItems.map((item, index) => (
            <p key={index} className="text-blue-500">{item}</p>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="text-sm bg-blue-100 text-blue-500 py-1 px-3 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignAgencyProfile;