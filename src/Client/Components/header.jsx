import React, { useState } from 'react';
import { Search, MessageSquare, Bell, Menu, ArrowLeft } from 'lucide-react';
import Logo from "../../assets/logo.png";
import User from "../../assets/user.png";
import { useNavigate } from 'react-router-dom';
import { Home, Briefcase, Users, GraduationCap, DollarSign } from 'lucide-react';

const menuItems = [
  { name: 'Home', icon: <Home size={24} color="#313131" />, route: '/client/dashboard/' },
  { name: 'My Jobs', icon: <Briefcase size={24} color="#313131" />, route: '/client/my-jobs/' },
  { name: 'My Projects', icon: <Users size={24} color="#313131" />, route: '/client/my-projects/' },
  { name: 'Explore Talents', icon: <Search size={24} color="#313131" />, route: '/client/explore-talent' },
  { name: 'Courses', icon: <GraduationCap size={24} color="#313131" />, route: '/client/explore-course' },
  { name: 'Invoices', icon: <DollarSign size={24} color="#313131" />, route: '/client/my-invoices' }
];

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown visibility state
  const navigate = useNavigate();

  const handleItemClick = (name, route) => {
    setActive(name);
    if (route) {
      navigate(route);
    }
    setSidebarOpen(false);
  };

  const handleLogout = () => {
    // Clear user data and perform logout action
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
              onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown visibility
            />
            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border">
                <ul>
                  <li
                    onClick={() => navigate('/client/profile')}
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
