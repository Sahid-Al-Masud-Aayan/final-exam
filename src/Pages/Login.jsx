import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { counterSlice, userData } from '../Slices/userSlice';

const Login = () => {

  const auth = getAuth();
  const dispatcher = useDispatch()
  const naviagate = useNavigate()
  const [load, setload]= useState(false)
  const [show, setShow]= useState(false)
  const [email, setEmail]= useState('')
  const [emailError, setEmailError]= useState('')
  const [Password, setPassword]= useState('')
  const [PasswordError, setPasswordError]= useState('')

  const shift= ()=>{
    setShow(!show)
  }

  const handlemail= (name)=>{
    setEmail(name.target.value)
    setEmailError('')
  }
  const handlePassword= (name)=>{
    setPassword(name.target.value)
    setPasswordError('')
  }

  const submit = (name)=>{
    name.preventDefault()
    if(!email){
      setEmailError('enter your email')
    }if(!Password){
      setPasswordError('enter your password')
    }else{
        signInWithEmailAndPassword(auth, email, Password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    localStorage.setItem('userInfo' , JSON.stringify(user))
    console.log(user)
    if(user.emailVerified == false){
        toast.error('Email not verified', {
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
    }else{
        naviagate('/')
        toast.success('Login successful', {
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
            dispatcher(userData(user))
    }
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;


    if(errorCode == "auth/invalid-credential"){
        toast.error('Email or password is incorrect', {
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
    

  });
    }
}

    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          once: true, // Whether animation should happen only once - while scrolling down
        });
      }, []);
      
  return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <div >
      <div data-aos="zoom-in" className="bg-white shadow-lg rounded-lg p-10 w-[450px]">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Login</h2>
        
        <form onSubmit={submit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
            onChange={handlemail}
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              
              />
              <p className='text-sm text-red-500'>{emailError}</p>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
            <input
            onChange={handlePassword}
            type={show? 'text':'password'}
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
            />

               {
                show?
                <FaEyeSlash onClick={shift} className='absolute top-1/3 left-[90%]'/>
                :
                <FaEye onClick={shift} className='absolute top-1/3 left-[90%]'/>
               }

            </div>
              <p className='text-sm text-red-500'>{PasswordError}</p>
          </div>

          <div className="text-right">
            <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">Forgot Password?</Link>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
            Log In
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 font-medium hover:underline">Sign up</Link>
        </p>
              </div>
      </div>
    </div>
  );
};

export default Login;
