// src/pages/home/components/TopProjects.jsx
import React from 'react';

const TopProjects = () => {
  return (
    <section className="py-12 w-full">
      <h2 className="text-2xl md:text-2xl ml-48 font-md text-left mb-6">
        Top Projects on GAIN+
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-40 px-6">
        {/* Card 1 */}
        <div className="border border-black rounded-2xl -ml-16 p-6 flex flex-col w-80">
          <img
            src="/assets/justpayee.png"
            alt="Justpayee"
            className="w-16 h-16 object-contain mb-3"
          />
          <h3 className="text-lg font-semibold mb-1">Justpayee</h3>
          <p className="text-sm text-gray-600 mb-3">Website Development</p>

          <h4 className="text-sm font-lg mb-1">Open Positions</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>UI Designer</li>
            <li>UX Researcher</li>
            <li>Backend Developer</li>
            <li>Machine Learner</li>
          </ul>

          <div className="border-t border-black mt-auto mb-3" />

          <button
            type="button"
            className="border border-black rounded-xl px-4 py-1 text-sm flex items-center justify-between hover:bg-gray-100"
          >
            Join us to view project
            <span className="ml-2 text-lg">↗</span>
          </button>
        </div>

        {/* Card 2 */}
        <div className="border border-black -ml-16 rounded-2xl p-6 flex flex-col w-80">
          <img
            src="https://www.redditinc.com/assets/images/site/reddit-logo.png"
            alt="Reddit"
            className="w-16 h-16 object-contain mb-3"
          />
          <h3 className="text-lg font-semibold mb-1">Reddit</h3>
          <p className="text-sm text-gray-600 mb-3">App Development</p>

          <h4 className="text-sm font-lg mb-1">Open Positions</h4>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
            <li>UI Designer</li>
            <li>UX Researcher</li>
            <li>Backend Developer</li>
            <li>Machine Learner</li>
          </ul>

          <div className="border-t border-black mt-auto mb-3" />

          <button
            type="button"
            className="border border-black rounded-xl px-4 py-1 text-sm flex items-center justify-between hover:bg-gray-100"
          >
            Join us to view project
            <span className="ml-2 text-lg">↗</span>
          </button>
        </div>

        {/* Card 3 */}
        <div className="border border-black -ml-16 rounded-2xl p-6 flex flex-col w-80">
          <img
            src="https://about.bankofamerica.com/assets/images/brand-logo.png"
            alt="Bank of America"
            className="w-16 h-16 object-contain mb-3"
          />
          <h3 className="text-lg font-semibold mb-1">Bank of America</h3>
          <p className="text-sm text-gray-600 mb-3">Fintech Product Development</p>

          <h4 className="text-sm font-lg mb-1">Open Positions</h4>
          <ul className="list-disc list-inside text-lg   text-gray-700 mb-4">
            <li>UI Designer</li>
            <li>UX Researcher</li>
            <li>Backend Developer</li>
            <li>Machine Learner</li>
          </ul>

          <div className="border-t border-black mt-auto mb-3" />

          <button
            type="button"
            className="border border-black rounded-xl px-4 py-1 text-sm flex items-center justify-between hover:bg-gray-100"
          >
            Join us to view project
            <span className="ml-2 text-lg">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopProjects;
