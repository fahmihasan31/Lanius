// components/LoginForm.js
import { FaGoogle } from "react-icons/fa";

import Image from 'next/image'
import Login from '../images/login.jpg'


const LoginForm = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-200 flex items-center justify-center">
        <Image
          src={Login}
          alt="Background"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Bagian form login */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-10">
        <h1 className="text-5xl font-bold mb-6 text-green-700">Login!</h1>
        <p className="mb-8 text-gray-600">Please continue to log in to your account</p>

        <form className="w-full max-w-sm space-y-6">
          {/* Input Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          {/* Input Password */}
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <div className="text-right mt-2">
              <a href="#" className="text-green-700 text-sm">Forgot Password?</a>
            </div>
          </div>

          {/* Tombol Sign In */}
          <button className="w-full p-3 bg-green-700 text-white rounded hover:bg-green-800 transition duration-200 ease-in-out">
            Sign In
          </button>

          {/* Tombol Sign in with Google */}
          <button className="w-full p-3 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition duration-200 ease-in-out">
            <FaGoogle className="mr-2 text-green-700" />
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;