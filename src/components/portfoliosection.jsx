import React from 'react';

const DesignerProfile = () => {
  const portfolioItems = [
    'Custom UI/UX Design for E-Commerce Website',
    'Custom UI/UX Design for E-Commerce Website',
    'Custom UI/UX Design for E-Commerce Website',
  ];

  const skills = ['UI/UX Design', 'Product Design', 'Website Design', 'App Design', 'Figma', 'Photoshop'];

  const completedJobs = [
    {
      jobTitle: 'Business Development Manager for IT Projects in Middle East',
      company: 'UI/UX Designer',
      location: 'United States',
      time: 'Anytime',
    },
  ];

  return (
    <div className="max-w-4xl p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold mb-2">UI/UX Designer</h1>
        <p className="text-xl text-gray-500">$5000+ Earned</p>
      </div>

      <div className="mb-8">
        <p className="text-lg text-gray-700">
          Assisting businesses in creating seamless and compelling digital experiences. With a specialization in UI design and branding, I bring a proven record of enhancing user engagement, driving sales conversions, and building customer loyalty. I tackle challenges such as successfully utilizing outdated aesthetics, ensuring your brand not only stands apart but also delivers tangible, measurable results.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Portfolio</h2>
        <div className="grid grid-cols-3 gap-4">
          {portfolioItems.map((item, index) => (
            <div key={index} className="h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-center text-sm text-gray-700"></span>
            </div>
          ))}
        </div>
        <div className="mt-4">
          {portfolioItems.map((item, index) => (
            <p key={index} className="text-blue-500">{item}</p>
          ))}
        </div>
      </div>

      <div className="mb-8">
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

      <div>
        <h2 className="text-2xl font-semibold mb-4">Completed Jobs</h2>
        {completedJobs.map((job, index) => (
          <div key={index} className="flex items-center bg-gray-100 p-4 rounded-lg mb-4">
            <div className="flex-1">
              <p className="text-lg font-semibold">{job.jobTitle}</p>
              <p className="text-sm text-gray-500">{job.company}</p>
            </div>
            <div className="text-sm text-gray-500">
              <p>{job.location}</p>
              <p>{job.time}</p>
            </div>
            <button className="text-blue-500 ml-4">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignerProfile;