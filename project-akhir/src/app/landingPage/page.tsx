import React from 'react'

import { FaInstagram, FaTwitter, FaTiktok, FaDiscord, } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Image from 'next/image' // Import Image from Next.js
import Vector from '../images/Vector.png'

const landingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="text-white py-6 flex justify-between items-center px-6">
        {/* Teks HI-FI di sebelah kiri */}
        <div className="text-2xl font-bold text-green-700 ml-4 ">HI-FI</div>

        {/* Navigasi di tengah */}
        <nav className="flex-1 mx-4 text-center">
          <a href="#home" className="mx-4 text-gray-600 hover:text-green-500">Home</a>
          <a href="#shop" className="mx-4 text-gray-600 hover:text-green-500">Shop</a>
          <a href="#event" className="mx-4 text-gray-600 hover:text-green-500">Event</a>
        </nav>

        {/* Tombol Join Now di sebelah kanan */}
        <a
          href="#join"
          className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition duration-200"
        >
          Join Now
        </a>
      </div>

      {/* Content Section */}
      <section className="bg-gray-100 py-12 flex-grow mt-28">
        <div className="container mx-auto text-center">
          <h1 className="text-7xl font-bold mt-2 text-gray-950 font-mono ">Jelajahi Tingkat</h1>
          <h2 className="text-7xl font-bold mt-4 text-gray-950 font-mono">Kesehatan Anda</h2>

          <div className="flex justify-center space-x-4 mt-8">
            {/* Button 1: Lanjutkan */}
            <a
              href="#"
              className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition duration-200"
            >
              Lanjutkan
            </a>

            {/* Button 2: Jelajahi */}
            <a
              href="#"
              className="bg-white text-green-800 border border-green-800 px-6 py-2 rounded-md hover:bg-green-700 hover:text-white transition duration-200"
            >
              Jelajahi
            </a>

          </div>
        </div>
      </section>


      <section className="mt-40">
        <div className="bg-green-900 py-8">
          <div className="flex justify-between items-center gap-6 text-white px-8 max-w-7xl mx-auto">
            {/* Text and icons with consistent spacing */}
            <span className="text-2xl font-mono font-bold cursor-pointer">
              Hidup Sehat
            </span>

            {/* Icon with rotating animation */}
            <span className="text-2xl animate-spin-slow">
              <FaStar className="w-8 h-8" />
            </span>

            <span className="text-2xl font-mono font-bold cursor-pointer">
              Marketplace
            </span>

            {/* Icon with rotating animation */}
            <span className="text-2xl animate-spin-slow">
              <FaStar className="w-8 h-8" />
            </span>

            <span className="text-2xl font-mono font-bold cursor-pointer">
              Mitigasi Resiko
            </span>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <div className="flex justify-center items-center py-8 px-10">

          {/* Image Section on the Right */}
          <div className="w-1/3 flex justify-center items-center">
            <div className="w-48 h-64">
              <Image
                src={Vector}
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>

          {/* Text Content Section on the Left */}
          <div className="w-2/3 pr-8">
            <h2 className="text-5xl font-semibold mb-10 text-gray-900 font-mono">
              Kenapa harus <span className="font-bold">hidup sehat?</span>
            </h2>
            <p className="text-gray-600 mb-6 font-mono">
              Lorem ipsum dolor sit amet consectetur. At pulvinar ut consequat
              etiam nisl tincidunt a porttitor diam. Velit ut Lorem ipsum dolor sit amet consectetur. At pulvinar ut consequat
              etiam nisl tincidunt a porttitor diam. Velit ut
              senectus tellus ipsum nam.
            </p>

            {/* Tips Section with Numbered Boxes */}
            <ul className="text-gray-600 space-y-4 font-mono">
              <li className="flex items-center">
                <div className="w-10 h-10 flex justify-center items-center border border-green text-white mr-4 bg-green-700">
                  01
                </div>
                <span> Lorem ipsum dolor sit amet consectetur. Vitae nibh at pellentesque lorem.</span>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 flex justify-center items-center border border-green text-white mr-4 bg-green-700">
                  02
                </div>
                <span> Lorem ipsum dolor sit amet consectetur. Vitae nibh at pellentesque lorem.</span>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 flex justify-center items-center border border-green text-white mr-4 bg-green-700">
                  03
                </div>
                <span> Lorem ipsum dolor sit amet consectetur. Vitae nibh at pellentesque lorem.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-24 py-12">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-mono font-bold mb-10 text-gray-900">Program Unggulan Kami</h2>
          <div className="flex space-x-6">
            {/* Card 1 */}
            <div className="w-full max-w-[450px] h-[180px] border border-green-600 flex justify-between bg-white shadow-md p-4">
              {/* Image Section */}
              <div className="w-1/2 h-full mr-4">
                <div className="w-full h-full bg-green-600"></div>
              </div>
              {/* Text Content Section */}
              <div className="w-1/2 flex-col justify-between">
                <h3 className="text-xl font-mono font-bold text-gray-900 mb-2">Hidup Sehat</h3>
                <p className="text-gray-600 text-sm overflow-hidden text-ellipsis line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="text-green-700 font-bold hover:text-green-800 transition duration-200 mt-6">
                  Detail
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full max-w-[450px] h-[180px] border border-green-600 flex justify-between bg-white shadow-md p-4">
              {/* Image Section */}
              <div className="w-1/2 h-full mr-4">
                <div className="w-full h-full bg-green-600"></div>
              </div>
              {/* Text Content Section */}
              <div className="w-1/2 flex-col justify-between">
                <h3 className="text-xl font-mono font-bold text-gray-900 mb-2">Hidup Sehat</h3>
                <p className="text-gray-600 text-sm overflow-hidden text-ellipsis line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="text-green-700 font-bold hover:text-green-800 transition duration-200 mt-6">
                  Detail
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full max-w-[450px] h-[180px] border border-green-600 flex justify-between bg-white shadow-md p-4">
              {/* Image Section */}
              <div className="w-1/2 h-full mr-4">
                <div className="w-full h-full bg-green-600"></div>
              </div>
              {/* Text Content Section */}
              <div className="w-1/2 flex-col justify-between">
                <h3 className="text-xl font-mono font-bold text-gray-900 mb-2">Hidup Sehat</h3>
                <p className="text-gray-600 text-sm overflow-hidden text-ellipsis line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="text-green-700 font-bold hover:text-green-800 transition duration-200 mt-6">
                  Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-24 bg-green-900 p-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 flex justify-between">
          {/* Text 1 */}
          <div className="text-block p-4">
            <p className="text-xl font-bold text-white mb-2 font-mono">HI-FI</p>
            <p className="text-white text-sm font-mono">
              Lorem ipsum dolor sit amet consectetur. At pulvinar ut consequat
              etiam nisl tincidunt a porttitor diam. Velit et senectus tellus
              ipsum nam.
            </p>
          </div>

          {/* Social Media Section */}
          {/* Social Media Section */}
          <div className="text-block p-4 flex flex-col items-center">
            <p className="text-xl font-bold text-white mb-4 font-mono text-center">Social Media</p>
            <ul className="space-y-2 text-white text-sm font-mono">
              <li className="flex items-center space-x-2">
                <span className="text-2xl"><i className="text-pink-500"><FaInstagram /></i></span>
                <span>Instagram</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-2xl"><i className="text-blue-500"><FaTwitter /></i></span>
                <span>Twitter</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-2xl"><i className="text-black"><FaTiktok /></i></span>
                <span>TikTok</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-2xl"><i className="text-blue-700"><FaDiscord /></i></span>
                <span>Discord</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default landingPage