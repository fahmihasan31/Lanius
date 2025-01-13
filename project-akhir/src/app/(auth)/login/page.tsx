"use client";

import { useState } from "react";
import Image from "next/image";
import Login from "@/app/images/login.jpg";
import axios from "axios";
import { useRouter } from "next/navigation";

// Define interface for the user data returned by the API
interface UserData {
  nama_user: string;
  password: string;
  username: string;
  status: string;
  date_deleted: string;
  id_user: number;
}

interface LoginResponse {
  data: {
    access_token: string;
    expires: number;  // Misalnya token berlaku selama `expires` ms
  };
}

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  // Helper function to get token from sessionStorage
  const getToken = (): string => {
    return sessionStorage.getItem("access_token") ?? "";
  };  

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    let token = getToken(); // Pastikan variabel dapat diperbarui

    if (!token) {
      try {
        
        const response = await axios.post<LoginResponse>("https://tech-class.datacore.machinevision.global/auth/login", {
          email: "developer1@mail.com",
          password: "d3veloper1",
        });

        token = response.data.data.access_token; // Simpan token yang diterima dari API
        sessionStorage.setItem("access_token", token); // Simpan token di sessionStorage
      } catch (error) {
        console.error("Login error:", error);
        setError("Failed to authenticate user.");
        return;
      }
    }


    try {
      // Send request to the API with the username as search parameter
      const response = await axios.get<{ data: UserData[] }>("https://tech-class.datacore.machinevision.global/items/user_HiFi", {
        params: {
          limit: 25,
          fields: ["nama_user", "password", "status", "username", "date_deleted", "id_user"],
          sort: "-nama_user",
          page: 1,
          search: username,
        },
        headers: {
          Authorization: `Bearer ${token}`, // Include token for authorization
        },
      });

      const user = response.data.data[0]; // Assuming only one user matches

      if (user) {
        // Check if the password entered matches the one returned from the API
        if (user.password === password) {
          // If password matches, store the user's name in sessionStorage
          localStorage.setItem("nama_user", user.nama_user);

          // Redirect to the dashboard or another page after successful login
          router.push("/"); // Change this to the appropriate page
        } else {
          setError("Invalid password.");
        }
      } else {
        setError("Username not found.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred during login. Please try again.");
    }
  };

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

      {/* Bagian form login */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-10 shadow-lg">
        <h1 className="text-5xl font-bold mb-6 text-green-700">Login!</h1>
        <p className="mb-6 text-gray-600">Please continue to login to your account</p>

        {/* Display error message if any */}
        {error && <p className="text-red-600 mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <button className="w-full p-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded hover:from-green-700 hover:to-green-800 transition duration-200 ease-in-out shadow-md mb-4">
            Sign In
          </button>

          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-green-700 font-semibold hover:text-green-900 transition duration-200"
            >
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;