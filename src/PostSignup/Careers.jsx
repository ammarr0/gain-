import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const jobListings = [
  {
    title: 'Administration Manager',
    type: 'PART TIME',
    location: 'UAE',
    description: `GAIN is a fast-growing organization that operates on the most dynamic and resourceful global markets. 
    As a member of a small yet highly skilled team, you will get the chance to develop into a well-rounded, business-savvy 
    individual with first-hand experience in a truly international environment...`,
    responsibilities: [
      'Office supplies management: Ensure timely delivery and maintain inventory levels of office supplies',
      'Office administration: Oversee general organization and maintenance of the office environment',
      'Benefits administration: Handle employee benefit programs, including enrollment, queries, and issue resolution',
      'Support to the Finance Manager: Assist with basic payment and billing tasks',
      'Support to Accounting and HR departments: Help prepare financial and payroll documents',
    ],
    expectations: [
      'Minimum 1-year experience in administration, finance, HR, or supply management',
      'B2+ level of English',
      'Ability to independently perform end-to-end tasks',
      'Diligence and responsibility in completing assigned responsibilities',
    ],
    offer: [
      'Hybrid work',
      'Competitive salary',
      'Innovative and dynamic startup environment',
      'Contribution to multisport and private medical care',
    ],
    email: 'office@gain.com',
  },
  {
    title: 'Recruitment Specialist',
    type: 'FULL TIME',
    location: 'LONDON',
  },
  {
    title: 'Operations Admin',
    type: 'FULL TIME',
    location: 'WARSAW',
  },
  {
    title: 'Legal and Accounts Specialist',
    type: 'FULL TIME',
    location: 'QATAR',
  },
];

const testimonials = [
  {
    name: 'John Doe',
    description: 'Software Engineer',
    content:
      '“All base UI elements are made using Nested Symbols and shared styles that are logically connected. Gorgeous, high-quality video sharing on desktop, mobile, tablet.”',
  },
  {
    name: 'Jane Smith',
    description: 'Product Designer',
    content:
      '“This design system ensures consistency and scalability, allowing seamless collaboration across teams and platforms.”',
  },
  {
    name: 'Alex Johnson',
    description: 'Project Manager',
    content:
      '“EonD has revolutionized the way we manage projects. Efficient workflows and intuitive UI elements made our work effortless.”',
  },
];

const Careers = () => {
  const [openJob, setOpenJob] = useState(null);

  const toggleJob = (index) => {
    setOpenJob(openJob === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
        <div className="md:w-1/3">
          <h1 className="text-3xl font-bold text-gray-900">Careers</h1>
          <p className="text-gray-600 mt-2">Join Our Team and Shape the Future of AI</p>
        </div>
        <div className="bg-gray-300 h-40 md:h-48 w-full md:w-2/3 rounded-xl"></div>
      </div>

      {/* Job Listings */}
      {jobListings.map((job, index) => (
        <div key={index} className="border rounded-2xl mb-4 shadow-sm bg-white overflow-hidden">
          <button
            onClick={() => toggleJob(index)}
            className="w-full text-left p-5 flex justify-between items-center bg-white hover:bg-gray-50"
          >
            <div>
              <h2 className="font-semibold text-lg text-gray-900">{job.title}</h2>
              <p className="text-sm text-blue-500">{`${job.type} / ${job.location}`}</p>
            </div>
            {openJob === index ? (
              <ChevronUpIcon className="h-6 w-6 text-gray-500" />
            ) : (
              <ChevronDownIcon className="h-6 w-6 text-gray-500" />
            )}
          </button>

          {/* Dropdown Content */}
          {openJob === index && (
            <div className="border-t px-5 py-4 bg-gray-50">
              {job.description && (
                <>
                  <h3 className="font-semibold mb-2 text-gray-900">About the opportunity</h3>
                  <p className="text-gray-700 mb-4">{job.description}</p>

                  <h3 className="font-semibold text-gray-900">Responsibilities:</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    {job.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <h3 className="font-semibold text-gray-900">Expectations:</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    {job.expectations.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <h3 className="font-semibold text-gray-900">We Offer:</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    {job.offer.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <p className="text-sm mb-4">
                    Please send your CV to: <strong>{job.email}</strong>
                  </p>

                  <button className="bg-[#030923] text-white py-1 px-16 rounded-md hover:bg-blue-700">
                    Apply
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      ))}

      {/* Testimonials */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Testimonials</h2>
        <p className="text-gray-600 mb-6">What does our Team say about EonD</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 shadow-sm bg-white font-onset leading-relaxed"
            >
              <p className="text-gray-800 mb-4">{testimonial.content}</p>
              <div className="mt-2">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
