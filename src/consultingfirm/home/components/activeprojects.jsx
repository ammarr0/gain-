import React from 'react';

const team = [
  { name: "Tyrion Lannister", role: "Project Manager", image: "/assets/user.png", rating: 4.9, jobs: 32 },
  { name: "Abdullah Ahmad", role: "Product Designer", image: "/assets/user.png", rating: 4.8, jobs: 28 },
  { name: "Ned Stark", role: "Product Lead", image: "/assets/user.png", rating: 4.7, jobs: 30 },
  { name: "Peter Bailish", role: "Finance Manager", image: "/assets/user.png", rating: 4.6, jobs: 35 },
  { name: "Cersi Lannister", role: "Lead Developer", image: "/assets/user.png", rating: 4.5, jobs: 33 },
];

const ActiveProjects = () => {
  const tags = ["Project Management Tools", "Jira", "Hubspot", "Project Management Tools", "Hubspot"];

  return (
    <div className="p-6 bg-white rounded-xl  w-full max-w-7xl">
        <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-3xl font-lg ">Active Projects</h2>
          <p className="text-xl font-lg mt-2 ">
            Track progress, deadlines, and deliverables for all ongoing projects.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-2">
            <button className="px-3 py-1 rounded-lg">
              <img src="/assets/back.png" alt="Back" className="w-8 h-8" />
            </button>
            <button className="px-3 py-1 rounded-lg">
              <img src="/assets/next.png" alt="Next" className="w-8 h-8" />
            </button>
          </div>
          <button className="underline text-black">View All</button>
        </div>
      </div>

      <div className="flex gap-2  mt-8">
        <button className="bg-black text-white px-10 py-2 rounded-lg">In Progress</button>
        <button className="border text-gray-600 px-10 py-2 rounded-lg">On Hold</button>
        <button className="border text-gray-600 px-10 py-2 rounded-lg">Completed</button>
      </div>

      <div className="border border-[#848484] rounded-xl p-6 shadow-sm mt-10">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-lg mb-1">Website Development</h3>
            <p className="text-md mt-2 text-black max-w-xl">
              Develop machine learning models to assess and mitigate financial risks, including credit, market, and operational risks.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="border px-4 py-1 rounded-full flex items-center gap-1 text-sm">
              View Projects <img src="/assets/arrowupright.png" alt="arrow" className="inline w-4 h-4" />
            </button>
            <button className="border px-4 py-1 rounded-full flex items-center gap-1 text-sm">
              Manage Project <img src="/assets/arrowupright.png" alt="arrow" className="inline w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-sm font-lg mb-2">Assigned Talent:</h4>
          <ul className="space-y-2">
            {team.map((member, idx) => (
              <li key={idx} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <img src={member.image} alt={member.name} className="w-8 h-8 rounded-full" />
                  <div>
                    <p className="font-lg text-xl underline">{member.name}</p>
                    <p className="text-[#007DF0] text-[16px]">{member.role}</p>
                  </div>
                </div>
                <div className="flex mr-[500px] gap-6 text-[#464646]">
                  <img src="/assets/blackstar.png" alt="Star" className="w-6 h-6 inline " /> <span className="text-[17px]">{member.rating}</span>
                  <img src="/assets/jobs.png" alt="Jobs" className="w-6 h-6" />
                  <span className="text-[17px]">{member.jobs}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-3 border-black mt-6" />

        <div className="mt-6 flex flex-wrap gap-2 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="text-md border rounded-lg px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-lg text-red-500 font-medium">Due on: 01-03-2025</p>
        </div>
      </div>
    </div>
  );
};

export default ActiveProjects;
