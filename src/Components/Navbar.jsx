import React from 'react';
import { FaTasks, FaPlus, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav className="bg-[#37AFE1] shadow-md px-4 py-1 w-full overflow-hidden">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <Link to='/' className="flex items-center space-x-2 cursor-pointer rounded-lg hover:bg-white/40 p-2">
          <FaTasks className="text-[#FFE700] text-2xl" />
          <h1 className="text-xl font-semibold text-gray-800">TodoApp</h1>
        </Link>

        {/* Nav Items */}
        <Link to='/' className="flex  justify-center gap-3 items-center p-1 cursor-pointer rounded-lg hover:bg-white/40">
          {/* <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-500 bg-[#ffd519] px-5 py-2 rounded-2xl hover:scale-95 duration-200 hover:shadow-xl">
            <span className='text-lg text-[#ffffff] font-semibold'>
                Login
            </span>
          </button>
          <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-500  bg-[#ffd519] px-5 py-2 rounded-2xl hover:scale-95 duration-200 hover:shadow-xl">
            <span className='text-lg text-[#ffffff] font-semibold'>Register</span>
          </button> */}
          <img 
          className='w-8 h-8 rounded-full '
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-image-gray-blank-silhouette-vector-illustration-305503988.jpg" 
          alt="User" />
          <p className='text-sm text-white font-medium'>Account</p>
        </Link>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
