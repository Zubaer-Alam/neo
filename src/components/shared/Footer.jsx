import React from "react";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col justify-around gap-5 bg-[#EEF9F8] py-6 text-gray-700 mt-20">
        <nav className="text-sm">
          <ul className="flex h-full flex-wrap items-center justify-center gap-3 ">
            <li>
              <Link to="/" className="cursor-pointer hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="cursor-pointer hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link to="/signIn" className="cursor-pointer hover:underline">
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="text-lg">
          <ul className="flex h-full flex-wrap items-center justify-center gap-5">
            <li className="cursor-pointer">
              <Link to="">
                <FaLinkedin />
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="">
                <FaYoutube />
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="">
                <FaFacebook />
              </Link>
            </li>
          </ul>
        </nav>
        <aside className="text-center text-xs">
          <p>&copy; 2024 Automatica.Software. All Rights Reserved.</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
