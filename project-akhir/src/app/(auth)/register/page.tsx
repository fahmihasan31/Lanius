"use client";

import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Login from "@/app/images/login.jpg";
import { useRouter } from "next/navigation";

const TOKEN_FILE_PATH = "access_token";

// Fungsi untuk mendapatkan token
function getToken(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem(TOKEN_FILE_PATH); // Menggunakan localStorage di frontend
  }
  return null;
}

// Fungsi untuk memeriksa apakah token masih berlaku
function isTokenValid(): boolean {
  const token = getToken();
  if (!token) return false;
  // Cek apakah token tidak kadaluarsa atau valid
  return true; // Bisa tambahkan pengecekan lebih lanjut jika ada informasi kadaluwarsa di token
}

// Tipe data untuk respons login
interface LoginResponse {
  data: {
    access_token: string;
    expires: number;  // Misalnya token berlaku selama `expires` ms
  };
}

async function loginAndStoreToken(): Promise<string | null> {
  try {
    const existingToken = getToken();
    if (existingToken && isTokenValid()) {
      console.log("Token already exists and is valid. Skipping login.");
      return existingToken;  // Kembalikan token yang sudah ada jika valid
    }

    // Lakukan login dan pastikan tipe respons adalah LoginResponse
    const response = await axios.post<LoginResponse>("https://tech-class.datacore.machinevision.global/auth/login", {
      email: "developer1@mail.com",
      password: "d3veloper1",
    });

    // Sekarang kita tahu bahwa response.data adalah LoginResponse
    const token = response.data.data.access_token;

    // Simpan token ke localStorage
    localStorage.setItem(TOKEN_FILE_PATH, token);

    console.log("Login successful, token saved.");
    return token;
  } catch (error) {
    console.error("Error logging in:", error);
    return null;
  }
}

// Memanggil fungsi loginAndStoreToken saat dibutuhkan
loginAndStoreToken();

// Fungsi untuk melakukan POST data registrasi
async function registerUser(userData: { username: string; email: string; password: string; }) {
  const token = await loginAndStoreToken();
  const router = useRouter();
  
  if (!token) {
    console.error("No token found. Please log in first.");
    return;
  }

  try {
    const response = await axios.post(
      "https://tech-class.datacore.machinevision.global/items/user_HiFi",
      {
        nama_user: userData.username,
        profil_picture: "default_picture_url", 
        username: userData.username,
        password: userData.password,
        poin: 0, 
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("User registered successfully:", response.data);
    router.push("/login"); 
  } catch (error) {
    console.error("Error registering user:", error);
  }
}

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Pastikan password dan konfirmasi password cocok
    if (password !== confirmPassword) {
      console.error("Passwords do not match!");
      return;
    }

    // Panggil fungsi untuk melakukan registrasi
    const userData = { username, email, password };
    await registerUser(userData);
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

      {/* Bagian form register */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white p-10 shadow-lg">
        <h1 className="text-5xl font-bold mb-6 text-green-700">Register!</h1>
        <p className="mb-6 text-gray-600">
          Let's make your account first! Please fill the box below
        </p>

        <form className="w-full max-w-sm space-y-4" onSubmit={handleSubmit}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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