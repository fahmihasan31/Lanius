import React from "react";

const Header = () => {
  return (
    <div>
      <div className="text-white py-6 flex justify-between items-center px-6">
        {/* Teks HI-FI di sebelah kiri */}
        <div className="text-2xl font-bold text-green-700 ml-4 ">HI-FI</div>

        {/* Navigasi di tengah */}
        <nav className="flex-1 mx-4 text-center">
          <a href="/" className="mx-4 text-gray-600 hover:text-green-500">
            Home
          </a>
          <a href="/not-found" className="mx-4 text-gray-600 hover:text-green-500">
            Shop
          </a>
          <a href="/not-found" className="mx-4 text-gray-600 hover:text-green-500">
            Event
          </a>
        </nav>

        {/* Tombol Join Now di sebelah kanan */}
        <a
          href="#join"
          className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition duration-200"
        >
          Join Now
        </a>
      </div>
    </div>
  );
};

export default Header;
