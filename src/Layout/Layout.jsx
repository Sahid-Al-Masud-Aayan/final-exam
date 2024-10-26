import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Layout = () => {

  const reduxData = useSelector((state)=>state.counter.value)
  console.log(reduxData);
  
  const navigate= useNavigate()

  useEffect(()=>{
    if(reduxData == null){
      navigate('/login')
    }
  },[])

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
