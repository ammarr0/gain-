import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-52 h-full bg-white">
      <ul className="space-y-10 p-6 mt-4">
        <li className="flex items-center space-x-2">
          <img src="/assets/home.svg" alt="Home" className="h-6 w-6" />
          <Link to="/consultingfirm/home" className="text-gray-700 hover:text-blue-500">Home</Link>
        </li>
        <li className="flex items-center space-x-2">
          <img src="/assets/Jobs.png" alt="Jobs" className="h-6 w-6" />
          <Link to="/consultingfirm/jobs" className="text-gray-700 hover:text-blue-500">Jobs</Link>
        </li>
        <li className="flex items-center space-x-2">
          <img src="/assets/projects.svg" alt="Projects" className="h-6 w-6" />
          <Link to="/consultingfirm/projects" className="text-gray-700 hover:text-blue-500">Projects</Link>
        </li>
        <li className="flex items-center space-x-2">
          <img src="/assets/uidesigner.svg" alt="Explore Talents" className="h-6 w-6" />
          <Link to="/under-processing" className="text-gray-700 hover:text-blue-500">Explore Talents</Link>
        </li>
        <li className="flex items-center space-x-2">
          <img src="/assets/tracker.svg" alt="Tracker" className="h-6 w-6" />
          <Link to="/consultingfirm/tracker" className="text-gray-700 hover:text-blue-500">Tracker</Link>
        </li>
        <li className="flex items-center space-x-2">
          <img src="/assets/courses.svg" alt="Courses" className="h-6 w-6" />
          <Link to="/consultingfirm/explore-course" className="text-gray-700 hover:text-blue-500">Courses</Link>
        </li>
        <li className="flex items-center space-x-2">
          <img src="/assets/community.svg" alt="Community" className="h-6 w-6" />
          <Link to="/consultingfirm/community" className="text-gray-700 hover:text-blue-500">Community</Link>
        </li>
        <li className="flex items-center space-x-2">
          <img src="/assets/earnings.svg" alt="Earnings" className="h-6 w-6" />
          <Link to="/under-processing" className="text-gray-700 hover:text-blue-500">Earnings</Link>
          <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-1 ml-2">$1500</span>
        </li>
        <li className="flex items-center space-x-2">
          <img src="/assets/invoices.png" alt="Invoices" className="h-6 w-6" />
          <Link to="/under-processing" className="text-gray-700 hover:text-blue-500">Invoices</Link>
        </li>
        <li className="flex items-center space-x-2 space-y-40">
          <img src="/assets/arrowupright.png" alt="Help Center" className="h-5  w-6 mt-40" />
          <Link to="/help-center" className="text-gray-700 hover:text-blue-500">Help Center</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;