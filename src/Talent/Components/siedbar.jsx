import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Briefcase, Users, Search, GraduationCap, Globe, Wallet } from 'lucide-react';

const menuItems = [
  { name: 'Home', icon: <Home size={24} color="#313131" />, route: '/talent/dashboard/' },
  { name: 'Jobs', icon: <Briefcase size={24} color="#313131" />, route: '/talent/jobs/' },
  { name: 'Projects', icon: <Users size={24} color="#313131" />, route: '/talent/projects/' },
  { name: 'Tracker', icon: <Search size={24} color="#313131" />, route: '/talent/tracker' },
  { name: 'Courses', icon: <GraduationCap size={24} color="#313131" />, route: '/talent/explore-course' },
  { name: 'Community', icon: <Globe size={24} color="#313131" />, route: '/client/my-invoices' },
  { name: 'Earnings', icon: <Wallet size={24} color="#313131" />, route: '/client/my-invoices' }
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
    <div className="w-[25%] h-full bg-white" >
      <ul className="space-y-2 p-6 mt-4">
        {menuItems.map(({ name, icon, route }, index) => (
          <li
            key={name}
            onClick={() => handleItemClick(name, route)}
            className={`flex items-center gap-1 p-6 rounded-lg cursor-pointer transition ${active === name ? 'bg-gray-100' : 'hover:bg-[#F3F3F3]'
              }`}
          >
            {icon}
            <span className="text-[#313131] text-xl">{name}</span>
          </li>
        ))}
        <li
          key="Help Center"
          onClick={() => setActive('Help Center')}
          className={`flex items-center gap-1 p-6 rounded-lg cursor-pointer transition ${active === 'Help Center' ? 'bg-gray-100' : 'hover:bg-gray-50'
            }`}
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