import React, { useState } from 'react';
import { FaHome, FaTasks, FaInfoCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`flex flex-col min-h-screen p-5 bg-gray-200 text-black ${
        isOpen ? 'w-64' : 'w-24'
      } transition-width duration-300 ease-in-out relative`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`absolute right-3 top-[6.5rem] bg-[#fff] text-blue-600 rounded-full p-1 shadow-md transition-transform duration-300 ${
          isOpen ? 'rotate-0' : 'rotate-180'
        }`}
      >
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>

      {/* Logo */}
      <div className="flex items-center mb-10">
        <div className="bg-white text-blue-500 rounded-full p-2">
          <FaTasks className="text-2xl" />
        </div>
        {isOpen && <h1 className="ml-3 text-xl font-bold text-black">My Todo</h1>}
      </div>

      {/* Menu Items */}
      <ul className="flex flex-col gap-4 pt-10">
        {/* Home Link */}

        {/* Tasks Link */}
        <Link to='/'>
          <h2 className="flex items-center gap-2 px-5 py-2 hover:bg-gray-300 rounded-lg text-lg font-semibold text-black duration-300">
            <FaTasks className="text-2xl text-green-400" />
            {isOpen && <span>Tasks</span>}
          </h2>
        </Link>

        <Link to='/account'>
          <h2 className="flex items-center gap-2 px-5 py-2 hover:bg-gray-300 rounded-lg text-lg font-semibold text-black duration-300">
            <FaCircleUser className="text-2xl text-red-400" />
            {isOpen && <span>Account</span>}
          </h2>
        </Link>

        {/* About Link */}
        <Link to='/about'>
          <h2 className="flex items-center gap-2 px-5 py-2 hover:bg-gray-300 rounded-lg text-lg font-semibold text-black duration-300">
            <FaInfoCircle className="text-2xl text-blue-400" />
            {isOpen && <span>About</span>}
          </h2>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;