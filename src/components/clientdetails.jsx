import React from 'react';

const JobPosting = () => {
  const jobDetails = {
    title: 'Business Development Manager for IT Projects in Middle East',
    salary: '$300/hr',
    experienceLevel: 'Intermediate Level',
    location: 'United States',
    description:
      'We’re seeking a skilled Business Development Manager to lead and expand our IT projects across the Middle East. This role is responsible for establishing strong partnerships in regions with promising growth opportunities. You will involve strategizing, identifying opportunities, and building relationships with clients to ensure our IT services and solutions meet their needs effectively.',
    responsibilities: [
      'Develop and implement business growth strategies for IT projects in the Middle East.',
      'Manage the entire sales funnel, from targeting prospects to contract negotiations and successful closures.',
      'Collaborate with internal teams to deliver solutions that address client business challenges.',
      'Capture trends in market research, competitive analysis, and forecast future market dynamics.',
    ],
    requirements: [
      'Proven experience in business development, sales, or account management, preferably in the IT sector.',
      'Excellent communication and negotiation skills with a client-focused approach.',
      'Experience in managing multiple projects and working with cross-functional teams.',
      'Ability to thrive in a dynamic, fast-paced environment.',
    ],
    projectType: 'One-Time Project',
    skills: ['Business Development', 'Market Research', 'Negotiation', 'IT Solutions', 'Sales'],
    files: [
      { name: 'PDF', icon: '📄' },
      { name: 'Cover Letter', icon: '✉️' },
      { name: 'CV', icon: '📑' },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{jobDetails.title}</h1>
        <p className="text-lg text-gray-600">{jobDetails.salary} | {jobDetails.experienceLevel} | {jobDetails.location}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Job Description</h2>
        <p className="text-gray-700">{jobDetails.description}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Responsibilities</h2>
        <ul className="list-disc pl-6 text-gray-700">
          {jobDetails.responsibilities.map((responsibility, index) => (
            <li key={index} className="mb-2">{responsibility}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Requirements</h2>
        <ul className="list-disc pl-6 text-gray-700">
          {jobDetails.requirements.map((requirement, index) => (
            <li key={index} className="mb-2">{requirement}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Project Type</h2>
        <p className="text-gray-700">{jobDetails.projectType}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Skills and Expertise</h2>
        <div className="flex flex-wrap gap-4">
          {jobDetails.skills.map((skill, index) => (
            <span key={index} className="bg-blue-100 text-blue-500 py-1 px-3 rounded-full">{skill}</span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Files</h2>
        <div className="flex gap-6">
          {jobDetails.files.map((file, index) => (
            <button key={index} className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg flex items-center">
              <span className="mr-2">{file.icon}</span>{file.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <a href="#" className="text-blue-500 hover:underline">Back to Profile</a>
      </div>
    </div>
  );
};

export default JobPosting;