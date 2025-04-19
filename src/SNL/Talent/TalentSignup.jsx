import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TalentSignUpModal = ({ isOpen, onClose }) => {
  const [isSignIn, setIsSignIn] = useState(false);
  const navigate = useNavigate();

  // If not open, do not render
  if (!isOpen) return null;

  // Switch to sign-in route or do sign-in logic
  const handleSignInClick = () => {
    console.log('Navigating to /signin or performing sign-in logic...');
    navigate('/signin');
  };

  // Toggle the UI between sign-up and sign-in
  const handleTabSwitch = (signIn) => {
    setIsSignIn(signIn);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm ">
      {/* White popup container */}
      <div className="bg-white rounded-[25px] shadow-xl w-[670px] h-[625px] py-[96px] px-8 relative flex flex-col">
        {/* Close button (X) top-right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          ×
        </button>

        {/* Header: Sign Up (left) / Sign In (right) */}
        <div className="flex w-full justify-center items-center mb-6">
          {/* Left: Sign Up */}
          <div
            className="cursor-pointer pr-6 flex-1 flex justify-center mb-6" // Adjusted margin
            onClick={() => handleTabSwitch(false)}
          >
            <div>
              <h1
                className={`text-xl md:text-2xl text-center font-bold mb-1 ${
                  !isSignIn ? 'text-gray-900' : 'text-gray-400'
                }`}
              >
                Sign Up
              </h1>
              <p
                className={`text-sm  ${
                  !isSignIn ? 'text-blue-500' : 'text-gray-300'
                }`}
              >
                Create your free account today.
              </p>
              {/* Blue underline if Sign Up is active */}
              {!isSignIn && <div className="h-[2px] bg-blue-500 w-full mt-2" />}
            </div>
          </div>

          {/* Right: Sign In */}
          <div
            className="cursor-pointer pl-6 flex-1 flex justify-center mb-6" // Adjusted margin
            onClick={() => handleTabSwitch(true)}
          >
            <div>
              <h1
                className={`text-xl md:text-2xl text-center font-bold mb-1 ${
                  isSignIn ? 'text-gray-900' : 'text-gray-400'
                }`}
              >
                Sign In
              </h1>
              <p
                className={`text-sm ${
                  isSignIn ? 'text-blue-500' : 'text-gray-300'
                }`}
              >
                Log in with your account.
              </p>
              {/* Blue underline if Sign In is active */}
              {isSignIn && <div className="h-[2px] bg-blue-500 w-full mt-2" />}
            </div>
          </div>
        </div>

        {/* Main Content: Sign Up or Sign In */}
        <div className="flex-1 flex flex-col items-center space-y-4">
          {isSignIn ? (
            /* Sign In options */
            <>
              {/* Sign In with Google */}
              <button className="w-full max-w-[449px] border border-gray-300 rounded-2xl py-3 flex items-center justify-center hover:bg-gray-50">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="h-6 w-8 mr-3"
                />
                <span className="text-sm font-medium text-gray-700">
                  Sign In with Google
                </span>
              </button>

              {/* Sign In with LinkedIn */}
              <button className="w-full max-w-[449px] border border-gray-300 rounded-2xl py-3 flex items-center justify-center hover:bg-gray-50">
                <img
                  src="https://www.svgrepo.com/show/448234/linkedin.svg"
                  alt="LinkedIn"
                  className="h-6 w-8 mr-3"
                />
                <span className="text-sm font-medium text-gray-700">
                  Sign In with LinkedIn
                </span>
              </button>

              {/* Sign In with Apple */}
              <button className="w-full max-w-[449px] border border-gray-300 rounded-2xl py-3 flex items-center justify-center hover:bg-gray-50">
                <img
                  src="https://www.svgrepo.com/show/473543/apple.svg"
                  alt="Apple"
                  className="h-6 w-8 mr-3"
                />
                <span className="text-sm font-medium text-gray-700">
                  Sign In with Apple
                </span>
              </button>

              {/* Sign In with Email */}
              <button className="w-full max-w-[449px] border border-gray-300 rounded-2xl py-3 flex items-center justify-center hover:bg-gray-50">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                  alt="Email"
                  className="h-6 w-8 mr-3"
                />
                <span className="text-sm font-medium text-gray-700">
                  Sign In with Email
                </span>
              </button>
            </>
          ) : (
            /* Sign Up buttons */
            <>
              {/* Sign Up with Google */}
              <button className="w-full max-w-[449px] border border-gray-300 rounded-2xl py-3 flex items-center justify-center hover:bg-gray-50">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="h-6 w-8 mr-3"
                />
                <span className="text-sm font-medium text-gray-700">
                  Sign Up with Google
                </span>
              </button>

              {/* Sign Up with LinkedIn */}
              <button className="w-full max-w-[449px] border border-gray-300 rounded-2xl py-3 flex items-center justify-center hover:bg-gray-50">
                <img
                  src="https://www.svgrepo.com/show/448234/linkedin.svg"
                  alt="LinkedIn"
                  className="h-6 w-8 mr-3"
                />
                <span className="text-sm font-medium text-gray-700">
                  Sign Up with LinkedIn
                </span>
              </button>

              {/* Sign Up with Apple */}
              <button className="w-full max-w-[449px] border border-gray-300 rounded-2xl py-3 flex items-center justify-center hover:bg-gray-50">
                <img
                  src="https://www.svgrepo.com/show/473543/apple.svg"
                  alt="Apple"
                  className="h-6 w-8 mr-3"
                />
                <span className="text-sm font-medium text-gray-700">
                  Sign Up with Apple
                </span>
              </button>

              {/* Sign Up with Email */}
              <button className="w-full max-w-[449px] border border-gray-300 rounded-2xl py-3 flex items-center justify-center hover:bg-gray-50">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                  alt="Email"
                  className="h-6 w-8 mr-3"
                />
                <span className="text-sm font-medium text-gray-700">
                  Sign Up with Email
                </span>
              </button>
            </>
          )}
        </div>

        {/* Terms & Privacy note */}
        <p className="text-xs text-gray-500 text-center mt-6">
          By {isSignIn ? 'signing in' : 'signing up'} with us you are agreeing to our{' '}
          <strong>Terms of Service</strong> and{' '}
          <strong>Privacy Policy</strong>.
        </p>
      </div>
    </div>
  );
};

export default TalentSignUpModal;
