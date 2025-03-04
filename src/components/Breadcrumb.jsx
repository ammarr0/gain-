import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const Breadcrumb = () => {
  return (
    <nav className="flex items-center text-gray-500 text-sm mb-4" aria-label="Breadcrumb">
      <Link to="/" className="hover:text-blue-500 font-medium">HOME</Link>
      <FaChevronRight className="mx-2 text-gray-400" />
      <span className="text-gray-600 font-medium">JOIN US</span>
    </nav>
  );
};

export default Breadcrumb;
