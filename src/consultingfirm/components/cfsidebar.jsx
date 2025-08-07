import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { name: 'Home', icon: '/assets/home.svg', route: '/consultingfirm/home' },
  { name: 'Jobs', icon: '/assets/Jobs.png', route: '/consultingfirm/jobs' },
  { name: 'Projects', icon: '/assets/projects.svg', route: '/consultingfirm/projects' },
  { name: 'Explore Talents', icon: '/assets/uidesigner.svg', route: '/consultingfirm/explore-talent' },
  { name: 'Tracker', icon: '/assets/tracker.svg', route: '/consultingfirm/tracker' },
  { name: 'Courses', icon: '/assets/courses.svg', route: '/consultingfirm/explore-course' },
  { name: 'Community', icon: '/assets/community.svg', route: '/consultingfirm/community' },
];

const Sidebar = () => {
  const [active, setActive] = useState('Home');
  const navigate = useNavigate();
  const handleItemClick = (name, route) => {
    setActive(name);
    if (route) {
      navigate(route);
    }
  };

  return (
    // Hide sidebar on small screens, show on md and up
    <div className="hidden md:block w-[20%] h-full bg-white">
      <ul className="space-y-2 p-6 mt-4">
        {menuItems.map(({ name, icon, route, extra }, index) => (
          <li
            key={name}
            onClick={() => handleItemClick(name, route)}
            className={`flex items-center gap-1 p-6 rounded-lg cursor-pointer transition ${active === name ? 'bg-gray-100' : 'hover:bg-[#F3F3F3]'}`}
          >
            <img src={icon} alt={name} className="h-6 w-6" />
            <span className="text-[#313131] text-xl">{name}</span>
            {extra}
          </li>
        ))}
        <li
          key="Help Center"
          onClick={() => setActive('Help Center')}
          className={`flex items-center gap-1 p-6 rounded-lg cursor-pointer transition ${active === 'Help Center' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
          style={{ marginTop: '100%' }}
        >
          <img src="/assets/arrowupright.png" alt="Help Center" className="h-6 w-7" />
          <span className="text-[#313131] text-xl">Help Center</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;