import React from 'react';
import { FaCheckCircle, FaTasks, FaCalendarAlt, FaUserCheck } from 'react-icons/fa';
import Lottie from 'lottie-react'
import note from '../../public/file.json'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white py-12 px-6">
      <div className="">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-10">About My Todo App</h1>
        <div className="flex flex-col items-center gap-5 lg:flex-row">
        <Lottie className='w-[500px]' animationData={note} />
        <p className="text-lg font-medium text-green-500 bg-white w-[600px] p-3 rounded-xl tracking-wider leading">
        My Todo List application is a simple yet effective tool designed to help users manage their tasks with ease and efficiency. The app features a clean and intuitive interface that allows users to add, remove, and mark tasks as complete with just a few clicks. The design emphasizes usability, making it accessible for users of all ages and technical backgrounds. Each task can be customized with titles, enabling users to categorize their activities according to personal preferences. The application also includes a responsive layout, ensuring a seamless experience across various devices, whether on desktop or mobile. Users can save their tasks and access them later, providing a sense of continuity and organization. The Todo List app not only enhances productivity but also encourages users to stay organized and focused on their goals, making it an essential tool for anyone looking to streamline their daily activities.
        </p>
        </div>

        
      </div>
    </div>
  );
};

export default About;
