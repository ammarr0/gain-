import { Search, MessageSquare, Bell } from 'lucide-react';
import Logo from "../../assets/logo.png";
import User from "../../assets/user.png"

const Header = () => {
  return (
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
      </div>
    </header>
  );
};

export default Header;