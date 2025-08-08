import React from 'react';

const cards = [
  {
    img: "/assets/home2.png",
    alt: "Hire a fully integrated AI team",
    title: "Build Your AI Team or Hire Individual Experts",
    desc:
      "Whether you need a fully integrated AI team or a specialized freelancer, quickly find and onboard the right talent to match your project’s requirements.",
    side: "left",
    imgClass: "h-[220px]",
  },
  {
    img: "/assets/home3.png",
    alt: "Find the right talent in one place",
    title: "Access a Curated Pool of AI Specialists",
    desc:
      "Source top-tier AI professionals, including machine learning engineers, data scientists, and AI consultants, ensuring the right expertise for every stage of your project.",
    side: "right",
    imgClass: "h-[220px]",
  },
  {
    img: "/assets/home4.png",
    alt: "Talents can apply & join the team",
    title: "Review & Select the Best Candidates",
    desc:
      "Easily evaluate applicants, compare qualifications, and assemble a team that aligns with your project scope and business objectives.",
    side: "left",
    imgClass: "h-[220px]",
  },
  {
    img: "/assets/home5.png",
    alt: "Seamless collaboration & execution",
    title: "Seamless collaboration & execution",
    desc:
      "With built-in communication, project management & Dashboards, teams stay aligned, making it easy to share ideas, iterate quickly, and bring AI innovations to life.",
    side: "right",
    imgClass: "h-[240px]",
  },
  {
    img: "/assets/home6.png",
    alt: "Deliver scalable AI solutions",
    title: "Get the Best AI Solutions from Leading Talent",
    desc:
      "Receive tailored, high-quality AI solutions developed by experienced professionals, driving innovation and measurable results for your business.",
    side: "left",
    imgClass: "h-[220px]",
  },
];

const WhatWeOffer = () => {
  return (
    <>
      <div className="bg-white py-10 px-4 sm:px-8 md:px-16 lg:px-24">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-left text-gray-900 mb-5 leading-tight">
          Execute Projects Effortlessly With Leading <br className="hidden sm:block" /> On-Demand Talent
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-6 w-full leading-relaxed">
          We simplify AI hiring by connecting you with <strong>pre-vetted experts</strong> and <strong>specialized teams</strong> ready to deliver results. <br className="hidden sm:block" />
          Whether you need a full-scale AI team or an individual specialist, we ensure a seamless hiring process and <br className="hidden sm:block" />
          <strong>outcome-driven execution.</strong>
        </p>
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mt-16 sm:mt-20 md:mt-28">
          How Clients can Post Job and Projects
        </h2>
      </div>

      <div className="relative w-full mt-8 flex flex-col items-center">
        {/* Vertical line for large screens */}
        <div className="hidden md:block absolute top-10 bottom-10 left-1/2 -translate-x-1/2">
          <img
            src="/assets/line.png"
            alt="Vertical divider"
            className="h-[1350px] mt-12 w-auto"
          />
        </div>
        {/* Dots for mobile screens */}
        <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-0 z-0 flex flex-col items-center w-2">
          {cards.map((_, idx) => (
            <div key={idx} className="w-2 h-8 flex flex-col items-center">
              <div className="w-1 h-8 bg-gray-300 rounded-full" />
            </div>
          ))}
        </div>
        {/* Cards */}
        {cards.map((card, idx) => {
          // Responsive: On md+ alternate left/right, on mobile always center
          const isLeft = card.side === "left";
          return (
            <div
              key={idx}
              className={`
                relative w-full flex 
                ${isLeft ? "md:justify-start" : "md:justify-end"} 
                justify-center 
                mb-8 md:mb-12 z-10
              `}
            >
              <div
                className={`
                  bg-[#030923] border border-gray-200 
                  w-full max-w-[95vw] sm:max-w-[420px] md:max-w-[520px] 
                  h-auto min-h-[180px] md:h-[260px] 
                  rounded-3xl shadow-md p-4 
                  ${isLeft ? "md:ml-[8%]" : "md:mr-[8%]"}
                  flex
                  items-center
                `}
              >
                <img
                  src={card.img}
                  alt={card.alt}
                  className={`
                    w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[200px] ${card.imgClass} 
                    mr-4 rounded-2xl object-cover flex-shrink-0
                  `}
                />
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-semibold mb-2 text-white">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <section className="bg-white py-10 flex justify-center">
        <div className="section-container flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:max-w-md flex flex-col items-start">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#007DF0] leading-snug mt-8 sm:mt-12">
              Start Your AI Project Today
            </h1>
            <p className="text-gray-700 text-base sm:text-lg mt-3 font-medium mb-2">
              Find the top AI talent your business needs in just a few clicks.
            </p>
            <a href="/join-us" className="w-full">
              <button
                className="bg-[#4E96F7] text-white px-6 py-2 rounded-full mt-12 sm:mt-24 shadow-md hover:bg-blue-600 transition duration-300 w-full sm:w-auto"
              >
                Find Top Talent
              </button>
            </a>
          </div>
          <div className="w-full md:w-1/2 h-[180px] sm:h-[250px] md:h-96 bg-gray-300 rounded-3xl mr-0 md:mr-4 mt-8 md:mt-0"></div>
        </div>
      </section>
    </>
  );
};

export default WhatWeOffer;
