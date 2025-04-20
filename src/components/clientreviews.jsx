import React from 'react';

const Resume = () => {
  const employmentHistory = [
    {
      title: 'Principle Graphic Designer - ABC Company',
      date: 'January 2020 - October 2024',
      achievements: [
        'Increased app downloads by 30% through refined branding.',
        'Collaborated closely with the product team to enhance UI/UX, reducing user drop-off rates by 70% and achieving a 90% improvement in user satisfaction.',
        'Crafted Facebook campaigns that led to a 40% increase in audience engagement and a 65% rise in brand awareness.',
      ],
    },
    {
      title: 'Senior Graphic Designer - FGH Company',
      date: 'January 2020 - October 2024',
      achievements: [
        'Increased app downloads by 30% through refined branding.',
        'Collaborated closely with the product team to enhance UI/UX, reducing user drop-off rates by 70% and achieving a 90% improvement in user satisfaction.',
        'Crafted Facebook campaigns that led to a 40% increase in audience engagement and a 65% rise in brand awareness.',
      ],
    },
    {
      title: 'Graphic Designer - MNO Company',
      date: 'January 2020 - October 2024',
      achievements: [
        'Increased app downloads by 30% through refined branding.',
        'Collaborated closely with the product team to enhance UI/UX, reducing user drop-off rates by 70% and achieving a 90% improvement in user satisfaction.',
        'Crafted Facebook campaigns that led to a 40% increase in audience engagement and a 65% rise in brand awareness.',
      ],
    },
    {
      title: 'Junior Graphic Designer - XYZ Company',
      date: 'January 2020 - October 2024',
      achievements: [
        'Increased app downloads by 30% through refined branding.',
        'Collaborated closely with the product team to enhance UI/UX, reducing user drop-off rates by 70% and achieving a 90% improvement in user satisfaction.',
        'Crafted Facebook campaigns that led to a 40% increase in audience engagement and a 65% rise in brand awareness.',
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        <p className="text-lg text-gray-500">Endorsements from past clients</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <p className="text-lg text-gray-500">
          Listing your certifications can help prove your specific knowledge or skills. (e.g., X,Y,Z)
        </p>
        <div className="flex gap-4 mt-4">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg">Add Manually</button>
          <button className="bg-gray-200 text-gray-700 py-2 px-6 rounded-lg">Import from Credly</button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Employment History</h2>
        {employmentHistory.map((job, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-sm text-gray-500">{job.date}</p>
            <ul className="list-disc pl-6 mt-2">
              {job.achievements.map((achievement, index) => (
                <li key={index} className="text-gray-700">{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <p className="text-lg font-semibold">Bachelor of Business Administration</p>
        <p className="text-sm text-gray-500">House of Stark Business University - Winterfell</p>
        <p className="text-sm text-gray-500">Sep 2012 - Nov 2016</p>
      </div>
    </div>
  );
};

export default Resume;