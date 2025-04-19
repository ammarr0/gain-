import React from 'react';

const WhatWeOffer = () => {
    return (
        <>
            <div className="bg-white py-10 px-24 ">
                <h1 className="text-4xl md:text-5xl font-2xl  text-left text-gray-900 mb-5">
                    Execute Projects Effortlessly With Leading <br /> On-Demand Talent
                </h1>
                <p className="text-gray-600 text-lg mb-6 w-full leading-relaxed">
                    We simplify AI hiring by connecting you with <strong> pre-vetted experts</strong>  and <strong>specialized teams </strong>ready to deliver results. <br />
                    Whether you need a full-scale AI team or an individual specialist, we ensure a seamless hiring process and <br />
                    <strong>outcome-driven execution.</strong>
                </p>
                <h2 className="text-center text-4xl font-lg text-gray-900 mt-28">
                    How Clients can Post Job and Projects
                </h2>
            </div>

            <div className="relative w-full mt-8 flex flex-col items-center">
                <div className="absolute top-10 bottom-10 left-1/2 -translate-x-1/2">
                    <img
                        src="/assets/line.png"
                        alt="Vertical divider"
                        className="h-[1350px] mt-12 w-auto"
                    />
                </div>
                {/* Card 1 (left side) */}
                <div className="relative w-full flex justify-start mb-12 z-10">
                    <div className="bg-[#030923] border border-gray-200 w-[520px] h-[260px] rounded-3xl shadow-md p-4 ml-[8%]">
                        <div className="flex items-center h-full">
                            <img
                                src="/assets/home2.png"
                                alt="Hire a fully integrated AI team"
                                className="w-[200px] h-[220px] mr-4 rounded-2xl"
                            />
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-2 text-white">
                                    Build Your AI Team or Hire Individual Experts
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    Whether you need a fully integrated AI team or a specialized freelancer, quickly find and onboard the right talent to match your project’s requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Card 2 (right side) */}
                <div className="relative w-full flex justify-end mb-12 z-10">
                    <div className="bg-[#030923] border border-gray-200 w-[520px] h-[260px] rounded-3xl shadow-md p-4 mr-[8%]">
                        <div className="flex items-center h-full">
                            <img
                                src="/assets/home3.png"
                                alt="Find the right talent in one place"
                                className="w-[200px] h-[220px] mr-4 rounded-2xl"
                            />
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-2 text-white">
                                    Access a Curated Pool of AI Specialists
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    Source top-tier AI professionals, including machine learning engineers, data scientists, and AI consultants, ensuring the right expertise for every stage of your project.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 3 (left side) */}
                <div className="relative w-full flex justify-start mb-12 z-10">
                    <div className="bg-[#030923] border border-gray-200 w-[520px] h-[260px] rounded-3xl shadow-md p-4 ml-[8%]">
                        <div className="flex items-center h-full">
                            <img
                                src="/assets/home4.png"
                                alt="Talents can apply & join the team"
                                className="w-[200px] h-[220px] mr-4 rounded-2xl"
                            />
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-2 text-white">
                                    Review & Select the Best Candidates
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    Easily evaluate applicants, compare qualifications, and assemble a team that aligns with your project scope and business objectives.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 4 (right side) */}
                <div className="relative w-full flex justify-end mb-12 z-10">
                    <div className="bg-[#030923] border border-gray-200 w-[520px] h-[260px] rounded-3xl shadow-md p-4 mr-[8%]">
                        <div className="flex items-center h-full">
                            <img
                                src="/assets/home5.png"
                                alt="Seamless collaboration & execution"
                                className="w-[200px] h-[240px] mr-4 rounded-2xl"
                            />
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-2 text-white">
                                    Seamless collaboration & execution
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    With built-in communication, project management & Dashboards, teams stay aligned, making it easy to share ideas, iterate quickly, and bring AI innovations to life.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 5 (left side) */}
                <div className="relative w-full flex justify-start mb-8 z-10">
                    <div className="bg-[#030923] border border-gray-200 w-[520px] h-[260px] rounded-3xl shadow-md p-4 ml-[8%]">
                        <div className="flex items-center h-full">
                            <img
                                src="/assets/home6.png"
                                alt="Deliver scalable AI solutions"
                                className="w-[200px] h-[220px] mr-4 rounded-2xl"
                            />
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-2 text-white">
                                    Get the Best AI Solutions from Leading Talent
                                </h3>
                                <p className="text-gray-300 text-sm">
                                    Receive tailored, high-quality AI solutions developed by experienced professionals, driving innovation and measurable results for your business.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-white py-10 item-center ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row item-center justify-between gap-8">
        {}
        <div className="max-w-md ">
          
          <h1 className="text-4xl font-medium text-[#007DF0] leading-snug mt-12">
          Start Your AI Project Today
          </h1>
          <p className="text-gray-700 text-lg mt-3 font-medium mb-2 ">Find the top AI talent your business needs in just a few clicks.</p>
          <a href="/join-us">
            <button 
              className="bg-[#4E96F7] text-white px-6 py-2 rounded-full mt-24 shadow-md hover:bg-blue-600 transition duration-300"
            >
              Find Top Talent
            </button>
          </a>
        </div>

        {}
        <div className="w-full md:w-1/2 h-[300px] md:h-96  bg-gray-300  rounded-3xl mr-4"></div>
      </div>
    </section>
        </>
    );
};

export default WhatWeOffer;
