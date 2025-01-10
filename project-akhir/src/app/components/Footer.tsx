import React from "react";
import { FaInstagram, FaTwitter, FaTiktok, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="flex bg-green-900 p-20 justify-around">
        <div className="flex space-x-10 w-full">
          {/* Text Section */}
          <div className="text-block p-4 w-1/2">
            <p className="text-xl font-bold text-white mb-2 font-mono">HI-FI</p>
            <p className="text-white text-sm font-mono">
              Lorem ipsum dolor sit amet consectetur. At pulvinar ut consequat
              etiam nisl tincidunt a porttitor diam. Velit et senectus tellus
              ipsum nam.
            </p>
          </div>

          {/* Social Media Section */}
          <div className="text-block p-4 w-1/2 flex flex-col items-center">
            <p className="text-xl font-bold text-white mb-4 font-mono text-center">
              Social Media
            </p>
            <ul className="space-y-2 text-white text-sm font-mono">
              <li className="flex items-center space-x-2">
                <span className="text-2xl">
                  <i className="text-pink-500">
                    <FaInstagram />
                  </i>
                </span>
                <span>Instagram</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-2xl">
                  <i className="text-blue-500">
                    <FaTwitter />
                  </i>
                </span>
                <span>Twitter</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-2xl">
                  <i className="text-black">
                    <FaTiktok />
                  </i>
                </span>
                <span>TikTok</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-2xl">
                  <i className="text-blue-700">
                    <FaDiscord />
                  </i>
                </span>
                <span>Discord</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
