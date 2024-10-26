import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import {updateProfile } from "firebase/auth";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from 'react-icons/fa';
import { ImEye } from 'react-icons/im';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {


    // variables
    const auth = getAuth();
    const naviagate = useNavigate()
    const [loader, setloader]=useState(false)
    const [vist, setVisit]=useState('')
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [nameError, setNameError]=useState('')
    const [emailError, setEmailError]=useState('')
    const [passwordError, setPasswordError]=useState('')
  
    
    
    // functions
    const show =()=>{
      setVisit(!vist)
    }
    
    const handleName = (meter)=>{
      setName(meter.target.value)
      setNameError('')
    }
    
    const handleEmail = (meter)=>{
      setEmail(meter.target.value)
      setEmailError('')
    }
    
    const handlePass = (meter)=>{
      setPassword(meter.target.value)
       setPasswordError('')
      }
    //   submit function
      const formSubmit = (key)=>{
        key.preventDefault()
        if(!name){
          setNameError('Enter your name')
        }if(!email){
          setEmailError('Enter your email')
      }if(!password){
        setPasswordError('Enter your password')
      }else{
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    
    updateProfile(auth.currentUser, {
        displayName: name, 
        photoURL: "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-image-gray-blank-silhouette-vector-illustration-305503988.jpg"
    })
    sendEmailVerification(auth.currentUser)
    toast.success('Registration done', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
        naviagate('/login')


  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if(errorCode == 'auth/email-already-in-use'){
        toast.error('Email already used', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }if(errorCode == 'auth/weak-password'){
        toast.error('password very weak', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
    }
    // ..
  });
      }
    }

    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true, 
        });
      }, []);
  return (
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-sky-600 p-5">
        <div data-aos="zoom-out">
      <div className="w-[450px] bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-blue-800">Register</h2>
        <form onSubmit={formSubmit} className="space-y-4">
          {/* Username Input */}
          <div>
            <label className="block text-gray-600 font-medium mb-1" htmlFor="username">
              Username
            </label>
            <input
            onChange={handleName}
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              />
              <p className='text-sm text-red-500'>{nameError}</p>
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-600 font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
            onChange={handleEmail}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              />
              <p className='text-sm text-red-500'>{emailError}</p>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-600 font-medium mb-1" htmlFor="password">
              Password
            </label>
            <div className="w-full relative">
            <input
            onChange={handlePass}
            type={vist? 'password':'text'}
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            />
            {
                vist?
                <FaEye onClick={show} className='absolute top-1/3 left-[90%]'/>
                :
                <FaEyeSlash onClick={show} className='absolute top-1/3 left-[90%]'/>
            }
            </div>
              <p className='text-sm text-red-500'>{passwordError}</p>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
            >
            Sign Up
          </button>
        </form>

        {/* Forgot Password and Login Link */}
        <div className="flex justify-center items-center text-sm mt-4 text-gray-600">
          <Link to="/login" className="hover:underline">
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
              </div>
  );
};

export default Signup;
