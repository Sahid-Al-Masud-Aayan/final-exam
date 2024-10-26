import React from 'react'
import { IoMdAdd } from "react-icons/io";
import { BsTrashFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa6";

const Task = () => {
  return (
    <>        
        <div className="flex-grow min-h-screen bg-[url('./back2.jpg')] flex items-center justify-center p-8 bg-cover bg-center">
          <div className="w-full p-6 bg-[#0091ff] rounded-lg max-w-xl shadow-lg">
            
            <h1 className="text-2xl font-bold text-center text-white">My Tasks</h1>
            <div className="flex items-center mt-[20px] mb-[20px]">
        <input 
        className='w-full h-[45px] bg-blue-200 outline-none rounded-l-[20px] pl-[40px] placeholder: font-montserrat text-white placeholder:text-white font-medium text-[16px]' 
        type="text" 
        placeholder='Add new task' />

        <button className='w-1/4 h-[45px] bg-[#1a37a8] rounded-r-[20px] flex justify-center items-center hover:bg-blue-600 duration-200 active:scale-90'>
          <IoMdAdd className='text-[33px] text-white'/>
        </button>
      </div>
      <div className="bg-[#ffffff] h-[55px] rounded-lg flex items-center justify-between p-3 mb-2">
        <input
        className='w-6 h-6 '
         type="checkbox" name="" id="" />
         <h1 className='text-xl text-blue-500 font-medium'>Workout at evening</h1>
         <div className="flex items-center gap-2">
            <button className=" p-2  flex flex-col items-center justify-center rounded-md hover:mt-3 duration-150">
                <FaPen className=' text-xl text-green-600'/>
                {/* <span className='text-[10px] text-white font-medium'>Delete</span> */}
            </button>
            <button className=" flex flex-col items-center justify-center rounded-md hover:mt-3 duration-150">
                <BsTrashFill className='text-red-600 text-xl'/>
                {/* <span className='text-[10px] text-white font-medium'>Delete</span> */}
            </button>
         </div>
      </div>
      <div className="bg-[#ffffff] h-[55px] rounded-lg flex items-center justify-between p-3 mb-2">
        <input
        className='w-6 h-6 '
         type="checkbox" name="" id="" />
         <h1 className='text-xl text-blue-500 font-medium'>Laundry</h1>
         <div className="flex items-center gap-2">
            <button className=" p-2 flex flex-col items-center justify-center rounded-md hover:mt-3 duration-150">
                <FaPen className='text-xl text-green-600'/>
                {/* <span className='text-[10px] text-white font-medium'>Delete</span> */}
            </button>
            <button className=" flex flex-col items-center justify-center rounded-md hover:mt-3 duration-150">
                <BsTrashFill className='text-red-600 text-xl'/>
                {/* <span className='text-[10px] text-white font-medium'>Delete</span> */}
            </button>
         </div>
      </div>
      <div className="bg-[#ffffff] h-[55px] rounded-lg flex items-center justify-between p-3 mb-2">
        <input
        className='w-6 h-6 '
         type="checkbox" name="" id="" />
         <h1 className='text-xl text-blue-500 font-medium'>Walking at park</h1>
         <div className="flex items-center gap-2">
            <button className=" p-2 flex flex-col items-center justify-center rounded-md hover:mt-3 duration-150">
                <FaPen className='text-green-600 text-xl'/>
                {/* <span className='text-[10px] text-white font-medium'>Delete</span> */}
            </button>
            <button className=" flex flex-col items-center justify-center rounded-md hover:mt-3 duration-150">
                <BsTrashFill className='text-red-600 text-xl'/>
                {/* <span className='text-[10px] text-white font-medium'>Delete</span> */}
            </button>
         </div>
      </div>
      
            
          </div>
        </div>

    </>
  )
}

export default Task
