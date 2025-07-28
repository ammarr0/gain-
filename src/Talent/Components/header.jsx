import React, { useState, useRef, useEffect } from 'react';
import { Search, MessageSquare, Bell, Menu, ArrowLeft, User as UserIcon } from 'lucide-react';
import Logo from "../../assets/logo.png";
import { useNavigate } from 'react-router-dom';
import { Home, Briefcase, Users, GraduationCap, Globe, Wallet } from 'lucide-react';

const menuItems = [
  { name: 'Home', icon: <Home size={24} color="#313131" />, route: '/talent/home/' },
  { name: 'Jobs', icon: <Briefcase size={24} color="#313131" />, route: '/talent/jobs/' },
  { name: 'Projects', icon: <Users size={24} color="#313131" />, route: '/talent/projects/' },
  { name: 'Courses', icon: <GraduationCap size={24} color="#313131" />, route: '/talent/explore-course' },
  { name: 'Community', icon: <Globe size={24} color="#313131" />, route: '/talent/community' },
  { name: 'Earnings', icon: <Wallet size={24} color="#313131" />, route: '/talent/my-invoices' }
];

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const profileRef = useRef(null);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const handleItemClick = (name, route) => {
    setActive(name);
    if (route) {
      navigate(route);
    }
    setSidebarOpen(false);
  };

  const handleSearchClick = () => {
    setSearchOpen(true);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/talent/jobs?search=${encodeURIComponent(searchValue)}`);
      setSearchOpen(false);
      setSearchValue('');
    }
  };

  const handleMessagesClick = () => {
    navigate('/talent/community');
  };

  const handleNotificationsClick = () => {
    navigate('/talent/notifications');
  };

  const handleProfileClick = () => {
    setProfileDropdownOpen((prev) => !prev);
  };

  const handleProfileMenuClick = (action) => {
    setProfileDropdownOpen(false);
    if (action === 'profile') {
      navigate('/talent/profile');
    } else if (action === 'logout') {
      localStorage.clear();
      sessionStorage.clear();
      navigate('/');
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    }
    if (profileDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileDropdownOpen]);

  // Close search bar when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    }
    if (searchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchOpen]);

  return (
    <>
      <header className="flex items-center justify-between p-8 border-b bg-white">
        <div className="flex items-center gap-[10px]">
          <img src={Logo} alt="Logo" className="w-[101px] h-[43px]" style={{ cursor: 'pointer' }} onClick={() => navigate('/talent/home/')} />
        </div>

        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="relative" ref={searchRef}>
            <Search
              size={28}
              className="text-gray-600 cursor-pointer"
              onClick={handleSearchClick}
            />
            {searchOpen && (
              <form
                onSubmit={handleSearchSubmit}
                className="absolute right-0 top-10 bg-white border border-gray-200 rounded-xl shadow-lg flex items-center px-4 py-2 z-50 transition-all"
                style={{
                  minWidth: 320,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                  background: 'linear-gradient(90deg, #f8fafc 0%, #fff 100%)'
                }}
              >
                <Search size={20} className="text-blue-500 mr-2" />
                <input
                  type="text"
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)}
                  placeholder="Search"
                  className="outline-none px-2 py-1 text-base flex-1 bg-transparent text-[#313131] placeholder-gray-400"
                  autoFocus
                  style={{
                    border: 'none',
                    background: 'transparent'
                  }}
                />
              </form>
            )}
          </div>
          {/* Messages */}
          <MessageSquare
            size={28}
            className="text-gray-600 cursor-pointer"
            onClick={handleMessagesClick}
            title="Community"
          />
          {/* Notifications */}
          <Bell
            size={28}
            className="text-gray-600 cursor-pointer"
            onClick={handleNotificationsClick}
            title="Applications"
          />
          {/* Profile with border and dropdown */}
          <div className="relative" ref={profileRef}>
            <div
              className="flex items-center justify-center border border-gray-300 rounded-full p-1 cursor-pointer hover:border-blue-500 transition"
              style={{ width: 40, height: 40 }}
              onClick={handleProfileClick}
              title="Profile"
            >
              <UserIcon
                size={28}
                className="text-gray-600"
              />
            </div>
            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-[#313131] text-base"
                  onClick={() => handleProfileMenuClick('profile')}
                >
                  Profile
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-[#313131] text-base"
                  onClick={() => handleProfileMenuClick('logout')}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
          {/* Mobile Menu */}
          <Menu
            size={28}
            className="text-gray-600 cursor-pointer md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          />
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