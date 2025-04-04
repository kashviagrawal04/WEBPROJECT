import React, { useState } from 'react';
import {
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function Login() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="max-w-md w-full text-white p-6 rounded-lg shadow-lg bg-transparent">
          {isSubmitted ? (
            <h2 className="text-center text-lg font-semibold text-green-400">Thank you! 🎉</h2>
          ) : isRegistering ? (
           
            <>
            <h2 className="opacity-0">hahahahaha</h2>
              <h2 className="text-center text-lg font-semibold">Create an Account</h2>
              <MDBInput className="w-full bg-gray-700 text-white p-3 rounded-lg mt-3" label="Full Name" type="text"/>
              <MDBInput className="w-full bg-gray-700 text-white p-3 rounded-lg mt-3" label="Username" type="text"/>
              <MDBInput className="w-full bg-gray-700 text-white p-3 rounded-lg mt-3" label="Email" type="email"/>
              <MDBInput className="w-full bg-gray-700 text-white p-3 rounded-lg mt-3" label="Password" type="password"/>

              <div className="flex justify-center my-3">
                <MDBCheckbox id="terms" label="I agree to the terms" className="text-gray-400"/>
              </div>

              <MDBBtn onClick={handleSubmit} className=" w-full  hover: py-3 rounded-lg text-white">
                Sign Up
              </MDBBtn>

              <p className="text-center mt-4 text-gray-400">
                Already have an account? <span className="text-blue-400 cursor-pointer" onClick={() => setIsRegistering(false)}>Sign In</span>
              </p>
            </>
          ) : (
           
            <>
              <h2 className="text-center text-lg font-semibold">Welcome Back</h2>
              <MDBInput className="w-full bg-gray-700 text-white p-3 rounded-lg mt-3" label="Email" type="email"/>
              <MDBInput className="w-full bg-gray-700 text-white p-3 rounded-lg mt-3" label="Password" type="password"/>

              <div className="flex justify-between items-center my-3">
                <MDBCheckbox id="rememberMe" label="Remember me" className="text-gray-400"/>
                <a href="#" className="text-blue-400 text-sm">Forgot password?</a>
              </div>

              <MDBBtn onClick={handleSubmit} className=" w-full  hover: py-3 rounded-lg text-white">
                Sign In
              </MDBBtn>

              <p className="text-center mt-4 text-gray-400">
                Not a member? <span className="text-red-400 cursor-pointer" onClick={() => setIsRegistering(true)}>Register</span>
              </p>
            </>
          )}
        </div>
      </div>

      <style>
        {`
          html, body {
            zoom: 1; /* Ensures no forced zoom */
            transform: none !important;
            touch-action: manipulation; /* Prevents zoom on touch devices */
            overflow-x: hidden; /* Prevents unwanted horizontal scrolling */
          }
          * {
            touch-action: manipulation;
          }
        `}
      </style>
    </>
  );
}

export default Login;