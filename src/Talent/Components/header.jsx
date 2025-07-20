import React, { useState } from 'react';
import { Search, MessageSquare, Bell, Menu, ArrowLeft } from 'lucide-react';
import Logo from "../../assets/logo.png";
import User from "../../assets/user.png";
import { useNavigate } from 'react-router-dom';
import { Home, Briefcase, Users, Search as SearchIcon, GraduationCap, Globe, Wallet } from 'lucide-react';

// Use the Talent menu items from file_context_0
const menuItems = [
  { name: 'Home', icon: <Home size={24} color="#313131" />, route: '/talent/home/' },
  { name: 'Jobs', icon: <Briefcase size={24} color="#313131" />, route: '/talent/jobs/' },
  { name: 'Projects', icon: <Users size={24} color="#313131" />, route: '/talent/projects/' },
  { name: 'Tracker', icon: <SearchIcon size={24} color="#313131" />, route: '/talent/tracker' },
  { name: 'Courses', icon: <GraduationCap size={24} color="#313131" />, route: '/talent/explore-course' },
  { name: 'Community', icon: <Globe size={24} color="#313131" />, route: '/client/my-invoices' },
  { name: 'Earnings', icon: <Wallet size={24} color="#313131" />, route: '/client/my-invoices' }
];

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const navigate = useNavigate();

  const handleItemClick = (name, route) => {
    setActive(name);
    if (route) {
      navigate(route);
    }
    setSidebarOpen(false);
  };

  return (
    <>
      <header className="flex items-center justify-between p-8 border-b bg-white">
        <div className="flex items-center gap-[10px]">
          <img src={Logo} alt="Logo" className="w-[101px] h-[43px]" />
        </div>

        <div className="flex items-center gap-6">
          <Search size={28} className="text-gray-600 cursor-pointer" />
          <MessageSquare size={28} className="text-gray-600 cursor-pointer" />
          <Bell size={28} className="text-gray-600 cursor-pointer" />
          <img
            src={User}
            alt="User"
            className="h-8 w-8 rounded-full object-cover cursor-pointer"
          />
          <Menu size={28} className="text-gray-600 cursor-pointer md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)} />
        </div>
      </header>

      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50">
          <div className="flex items-center justify-between p-4 border-b">
            <ArrowLeft size={28} className="text-gray-600 cursor-pointer" onClick={() => setSidebarOpen(false)} />
            <span className="text-xl font-bold">Menu</span>
          </div>
          <ul className="space-y-2 p-6 mt-4">
            {menuItems.map(({ name, icon, route }) => (
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
      )}
    </>
  );
};

export default Header;