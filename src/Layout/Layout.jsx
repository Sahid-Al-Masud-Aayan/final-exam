import React from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        {/* <Navbar /> */}
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
