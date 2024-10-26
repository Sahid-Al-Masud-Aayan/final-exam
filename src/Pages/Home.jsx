import React from 'react'
import Sidebar from '../Components/Sidebar'
import { FaPen } from "react-icons/fa6";
import { useSelector } from 'react-redux';

const Home = () => {

  const reduxUser= useSelector((info)=>info.counter.value)

  console.log(reduxUser);
  
  return (
    <>
    <div className="h-screen flex justify-center items-center bg-[url('./back.jpg')] bg-cover bg-center">
    <div className="w-[350px] bg-white/20 text-white rounded-2xl shadow-2xl p-8 text-center flex justify-center items-center">
      {/* Profile Image */}
      <div className="">

      <div className="group flex items-center justify-center gap-5">
      <img
        src={reduxUser?.photoURL}
        alt="User Profile"
        className="w-32 h-w-32 rounded-full shadow-lg mb-6"
        />
        <button className='hover:bg-white/40 p-3 rounded-md duration-200 hover:rotate-[360deg] hidden group-hover:block'>
      <FaPen className='text-green-500'/>
      </button>
      </div>
      {/* Username */}
      <div className="flex group items-center justify-center gap-5 duration-200">
      <h2 className="text-3xl font-bold text-blue-600">{reduxUser?.displayName}</h2>
      <button className='hover:bg-white/40 p-3 rounded-md duration-200 hover:rotate-[360deg] hidden group-hover:block'>
      <FaPen className='text-green-500'/>
      </button>
      </div>

      {/* User Email */}
      <div className="flex group items-center justify-center gap-5 duration-200">
      <p className="text-lg text-blue-600">{reduxUser?.email}</p>
      <button className='hover:bg-white/40 p-3 rounded-md duration-200 hover:rotate-[360deg] hidden group-hover:block'>
      <FaPen className='text-green-500'/>
      </button>
      </div>
      {/* Optional Button */}
      
        </div>
        
    </div>
        </div>
    </>
  )
}

export default Home
