// src/pages/home/components/AiProjectsTimeline.jsx
import React from 'react';

const AiProjectsTimeline = () => {
  return (
    <section className="py-12 w-full">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        How AI <span className="text-blue-600">Projects</span> Work on GAIN
      </h2>

      {/* Outer container for timeline + cards */}
      <div className="relative w-full flex flex-col items-center">
        <div className="absolute top-10 bottom-10 left-1/2 -translate-x-1/2">
          <img
            src="/assets/line.png"
            alt="Vertical divider"
            className="h-[1300px] mt-12 w-auto"
          />
        </div>

        {/* Card 1 (left side) */}
        <div className="relative w-full flex justify-start mb-12 z-10">
          <div className="bg-white border border-gray-200 w-[520px] h-[260px] rounded-3xl shadow-md p-4 ml-[8%] flex items-center">
            <img
              src="/assets/home2.png"
              alt="Hire a fully integrated AI team"
              className="w-2/5 h-auto mr-4"
            />
            <div className="flex-1 text-left">
              <h3 className="text-lg font-semibold mb-2">
                Hire a fully integrated AI team for your next project.
              </h3>
              <p className="text-gray-600 text-sm">
                Instead of hiring freelancers one by one, businesses can assemble a complete AI team from day one. Get experts across multiple disciplines working together efficiently, ensuring seamless collaboration and faster results.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 (right side) */}
        <div className="relative w-full flex justify-end mb-12 z-10">
          <div className="bg-white border border-gray-200 w-[520px] h-[260px] rounded-3xl shadow-md p-4 mr-[8%] flex items-center">
            <img
              src="/assets/home3.png"
              alt="Find the right talent in one place"
              className="w-2/5 h-auto mr-4"
            />
            <div className="flex-1 text-left">
              <h3 className="text-lg font-semibold mb-2">
                Find the right talent In one place.
              </h3>
              <p className="text-gray-600 text-sm">
                Browse a curated pool of AI professionals—developers, data scientists, AI researchers, and more—and select the perfect combination of skills for your project.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 (left side) */}
        <div className="relative w-full flex justify-start mb-12 z-10">
          <div className="bg-white border border-gray-200 w-[520px] h-[260px] rounded-3xl shadow-md p-4 ml-[8%] flex items-center">
            <img
              src="/assets/home4.png"
              alt="Talents can apply & join the team"
              className="w-2/5 h-auto mr-4"
            />
            <div className="flex-1 text-left">
              <h3 className="text-lg font-semibold mb-2">
                Talents can apply & join the team.
              </h3>
              <p className="text-gray-600 text-sm">
                AI experts can apply for projects and become part of high-impact teams, <span className="font-semibold">expanding their network</span> and working alongside top-tier professionals.
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 (right side) */}
        <div className="relative w-full flex justify-end mb-12 z-10">
          <div className="bg-white border border-gray-200 w-[520px] h-[260px] rounded-3xl shadow-md p-4 mr-[8%] flex items-center">
            <img
              src="/assets/home5.png"
              alt="Seamless collaboration & execution"
              className="w-2/5 h-auto mr-4"
            />
            <div className="flex-1 text-left">
              <h3 className="text-lg font-semibold mb-2">
                Seamless collaboration & execution
              </h3>
              <p className="text-gray-600 text-sm">
                With built-in communication, project management & Dashboards, teams stay aligned, making it easy to share ideas, iterate quickly, and bring AI innovations to life.
              </p>
            </div>
          </div>
        </div>

        {/* Card 5 (left side) */}
        <div className="relative w-full flex justify-start mb-12 z-10">
          <div className="bg-white border border-gray-200 w-[520px] h-[260px] rounded-3xl shadow-md p-4 ml-[8%] flex items-center">
            <img
              src="/assets/home6.png"
              alt="Deliver scalable AI solutions"
              className="w-2/5 h-auto mr-4"
            />
            <div className="flex-1 text-left">
              <h3 className="text-lg font-semibold mb-2">
                Deliver scalable AI solutions for clients.
              </h3>
              <p className="text-gray-600 text-sm">
                By working within a structured, results-driven framework, teams deliver AI solutions tailored to business objectives, driving measurable impact and long-term innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiProjectsTimeline;
