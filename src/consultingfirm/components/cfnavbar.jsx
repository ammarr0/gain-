import React, { useState } from 'react';
import { Search, MessageSquare, Bell, Menu, ArrowLeft } from 'lucide-react';
import Logo from "../../assets/logo.png";
import User from "../../assets/user.png";
import { useNavigate } from 'react-router-dom';

const menuItems = [
  { name: 'Home', icon: '/assets/home.svg', route: '/consultingfirm/home' },
  { name: 'Jobs', icon: '/assets/Jobs.png', route: '/consultingfirm/jobs' },
  { name: 'Projects', icon: '/assets/projects.svg', route: '/consultingfirm/projects' },
  { name: 'Explore Talents', icon: '/assets/uidesigner.svg', route: '/consultingfirm/explore-talent' },
  { name: 'Tracker', icon: '/assets/tracker.svg', route: '/consultingfirm/tracker' },
  { name: 'Courses', icon: '/assets/courses.svg', route: '/consultingfirm/explore-course' },
  { name: 'Community', icon: '/assets/community.svg', route: '/consultingfirm/community' },
  { name: 'Earnings', icon: '/assets/earnings.svg', route: '/under-processing', extra: <span className="bg-gray-200 text-gray-700 text-xs rounded-full px-2 py-1 ml-2">$1500</span> },
  { name: 'Invoices', icon: '/assets/invoices.png', route: '/under-processing' }
];

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to control dropdown visibility
  const navigate = useNavigate();

  const handleItemClick = (name, route) => {
    setActive(name);
    if (route) {
      navigate(route);
    }
    setSidebarOpen(false);
  };

  const handleLogout = () => {
    // Add logout logic here (e.g., remove token, redirect to login)
    localStorage.removeItem('access_token'); // Example for clearing token
    navigate('/'); // Redirect to login page
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
          <div className="relative">
            <img
              src={User}
              alt="User"
              className="h-8 w-8 rounded-full object-cover cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown on click
            />
            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border">
                <ul>
                  <li
                    onClick={() => navigate('/consultingfirm/profile')}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    Profile
                  </li>
                  <li
                    onClick={handleLogout}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
          <Menu size={28} className="text-gray-600 cursor-pointer md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)} />
        </div>
      </header>

      {/* Sidebar for mobile */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50">
          <div className="flex items-center justify-between p-4 border-b">
            <ArrowLeft size={28} className="text-gray-600 cursor-pointer" onClick={() => setSidebarOpen(false)} />
            <span className="text-xl font-bold">Menu</span>
          </div>
          <ul className="space-y-2 p-6 mt-4">
            {menuItems.map(({ name, icon, route, extra }) => (
              <li
                key={name}
                onClick={() => handleItemClick(name, route)}
                className={`flex items-center gap-2 p-4 rounded-lg cursor-pointer transition ${active === name ? 'bg-gray-100' : 'hover:bg-[#F3F3F3]'}`}
              >
                <img src={icon} alt={name} className="h-6 w-6 mr-2" />
                <span className="text-[#313131] text-xl">{name}</span>
                {extra && extra}
              </li>
            ))}
            <li
              key="Help Center"
              onClick={() => setActive('Help Center')}
              className={`flex items-center gap-2 p-4 rounded-lg cursor-pointer transition ${active === 'Help Center' ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
              style={{ marginTop: '100%' }}
            >
              <img src="/assets/arrowupright.png" alt="Help Center" className="h-6 w-7 mr-2" />
              <span className="text-[#313131] text-xl">Help Center</span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
