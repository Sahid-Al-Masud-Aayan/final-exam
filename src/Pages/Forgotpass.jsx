import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";


const auth = getAuth()

const Forgotpass = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    if(!email){
        alert('enter your email')
    }else{
   sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-600">
              Enter your email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200"
          >
            Send Reset Link
          </button>
        </form>
        <p className="text-center text-gray-500 mt-6">
          Remember your password?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Forgotpass;