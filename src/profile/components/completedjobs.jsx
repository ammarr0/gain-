import React from 'react';

const CompletedJobs = () => {
  const jobs = [
    {
      title: 'AI Risk Analysis',
      description:
        'Develop machine learning models to assess and mitigate financial risks, including credit, market, and operational risks.',
      date: '15-10-2024',
      rate: '$350.00/hr',
      status: 'Completed',
      clientName: 'Tyrion Lannister',
      clientLocation: 'Kings Landing',
    },
    {
      title: 'Blockchain Integration',
      description:
        'Implement blockchain solutions to enhance security and transparency in supply chain management.',
      date: '20-09-2024',
      rate: '$400.00/hr',
      status: 'Completed',
      clientName: 'Daenerys Targaryen',
      clientLocation: 'Dragonstone',
    },
    {
      title: 'Data Visualization',
      description:
        'Create interactive dashboards to visualize key performance indicators for business intelligence.',
      date: '05-08-2024',
      rate: '$300.00/hr',
      status: 'Completed',
      clientName: 'Jon Snow',
      clientLocation: 'Winterfell',
    },
    {
      title: 'Cybersecurity Audit',
      description:
        'Conduct a comprehensive audit of IT infrastructure to identify and mitigate potential security threats.',
      date: '12-07-2024',
      rate: '$450.00/hr',
      status: 'Completed',
      clientName: 'Cersei Lannister',
      clientLocation: 'Kings Landing',
    },
    {
      title: 'Cloud Migration',
      description:
        'Migrate on-premises applications and data to a cloud-based infrastructure to improve scalability.',
      date: '30-06-2024',
      rate: '$500.00/hr',
      status: 'Completed',
      clientName: 'Sansa Stark',
      clientLocation: 'The Eyrie',
    },
    {
      title: 'AI Chatbot Development',
      description:
        'Develop an AI-powered chatbot to enhance customer service and automate routine inquiries.',
      date: '15-05-2024',
      rate: '$350.00/hr',
      status: 'Completed',
      clientName: 'Arya Stark',
      clientLocation: 'Braavos',
    },
    {
      title: 'E-commerce Platform Optimization',
      description:
        'Optimize the performance and user experience of an e-commerce platform to increase conversion rates.',
      date: '10-04-2024',
      rate: '$375.00/hr',
      status: 'Completed',
      clientName: 'Bran Stark',
      clientLocation: 'Beyond the Wall',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Completed Jobs</h2>

      {jobs.map((job, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-semibold">{job.title}</h3>
          <p className="text-gray-700">{job.description}</p>
          <div className="flex justify-between items-center mt-4">
            <div className="text-gray-500 text-sm">{job.date}</div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500 font-semibold">{job.rate}</span>
              <span className="text-yellow-500 font-semibold">{job.status}</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="text-sm text-gray-600">
              <span className="font-semibold">Client:</span> {job.clientName} - {job.clientLocation}
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompletedJobs;