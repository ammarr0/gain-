import React, { useState } from 'react';
import { Home, Briefcase, Users, Search, GraduationCap, DollarSign } from 'lucide-react';

const menuItems = [
  { name: 'Home', icon: <Home size={24} color="#313131" /> },
  { name: 'My Jobs', icon: <Briefcase size={24} color="#313131" /> },
  { name: 'My Projects', icon: <Users size={24} color="#313131" /> },
  { name: 'Explore Talents', icon: <Search size={24} color="#313131" /> },
  { name: 'Courses', icon: <GraduationCap size={24} color="#313131" /> },
  { name: 'Invoices', icon: <DollarSign size={24} color="#313131" /> }
];

const Sidebar = () => {
  const [active, setActive] = useState('Home');
  
  return (
    <div className="w-[30rem] h-full bg-white" >
      <ul className="space-y-2 p-6 mt-4">
        {menuItems.map(({ name, icon }, index) => (
          <li
            key={name}
            onClick={() => setActive(name)}
            className={`flex items-center gap-1 p-6 rounded-lg cursor-pointer transition ${
              active === name ? 'bg-gray-100' : 'hover:bg-[#F3F3F3]'
            }`}
          >
            {icon}
            <span className="text-[#313131] text-xl">{name}</span>
          </li>
        ))}
        <li
          key="Help Center"
          onClick={() => setActive('Help Center')}
          className={`flex items-center gap-1 p-6 rounded-lg cursor-pointer transition ${
            active === 'Help Center' ? 'bg-gray-100' : 'hover:bg-gray-50'
          }`}
          style={{ marginTop: '100%'}}
        >
          <img src="/assets/arrowupright.png" alt="Help Center" className="h-6 w-7" />
          <span className="text-[#313131] text-xl">Help Center</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;