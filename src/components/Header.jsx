import { Link } from 'react-router-dom';

const Header = () => (
  <header className="flex justify-between items-center p-4 bg-white shadow-md">
    <Link
      to="/"
      className="inline-block text-2xl font-extrabold text-blue-600 border-2 border-black px-3 py-1"
    >
      GAIN+
    </Link>

    <nav className="space-x-4">
      <Link to="/join-us" className="hover:text-blue-500">
        Join Us
      </Link>
      <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Sign Up
      </Link>
    </nav>
  </header>
);

export default Header;