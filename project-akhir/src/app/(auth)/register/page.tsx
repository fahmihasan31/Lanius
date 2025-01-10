// components/RegisterForm.js
import Image from "next/image";
import Login from "@/app/images/login.jpg";

const RegisterForm = () => {
  return (
    <div className="flex h-screen">
      {/* Bagian gambar latar */}
      <div className="w-1/2 bg-gray-200 flex items-center justify-center">
        <Image
          src={Login}
          alt="Background"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Bagian form register */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-10 shadow-lg">
        <h1 className="text-5xl font-bold mb-6 text-green-700">Register!</h1>
        <p className="mb-6 text-gray-600">
          Let's make your account first! Please fill the box below
        </p>

        <form className="w-full max-w-sm space-y-4">
          {/* Input Username */}
          <div className="flex flex-col mb-2">
            <label
              htmlFor="username"
              className="text-sm font-semibold text-gray-700 mb-2"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          {/* Input Email */}
          <div className="flex flex-col mb-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          {/* Input Password */}
          <div className="flex flex-col mb-2">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
            />
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col mb-2">
            <label
              htmlFor="confirm-password"
              className="text-sm font-semibold text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-700"
            />

            <div className="text-right mt-2 mb-4">
              <a
                href="#"
                className="text-green-700 text-sm hover:text-green-900 transition duration-200"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          {/* Tombol Sign Up dengan Gradien */}
          <button className="w-full p-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded hover:from-green-700 hover:to-green-800 transition duration-200 ease-in-out shadow-md mb-4">
            Sign Up
          </button>

          {/* Link ke halaman login */}
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-green-700 font-semibold hover:text-green-900 transition duration-200"
            >
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
