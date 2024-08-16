import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setIsOpen(false); 
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="gradient-container overflow-x-hidden epilogue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-lg font-bold">
              <img className="h-8" src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex text-[18px] items-baseline space-x-10">
              <Link
                to="/"
                className={`cursor-pointer ${
                  activeMenu === "home"
                    ? "text-slate-400 border-[#C23DF5] border-b-2"
                    : "hover:text-slate-400"
                }`}
                onClick={() => handleMenuClick("home")}
              >
                Home
              </Link>
              <Link
                to="/games"
                className={`cursor-pointer ${
                  activeMenu === "games"
                    ? "text-slate-400 border-[#C23DF5] border-b-2"
                    : "hover:text-slate-400"
                }`}
                onClick={() => handleMenuClick("games")}
              >
                Games
              </Link>
              <Link
                to="/playground"
                className={`cursor-pointer ${
                  activeMenu === "playground"
                    ? "text-slate-400 border-[#C23DF5] border-b-2"
                    : "hover:hover:text-slate-400"
                }`}
                onClick={() => handleMenuClick("playground")}
              >
                Playboard
              </Link>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdqOaFS_QcIj1tl_-NvdMjjNjxEMqbUvRdkN6hB3U94MKPTaQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className={`cursor-pointer ${
                  activeMenu === "contact"
                    ? "text-slate-400 border-[#C23DF5] border-b-2"
                    : "hover:text-slate-400"
                }`}
                onClick={() => handleMenuClick("contact")}
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className={`block px-3 py-2 rounded-md text-base font-medium hover:underline ${
              activeMenu === "home" ? "text-slate-400" : ""
            }`}
            onClick={() => handleMenuClick("home")}
          >
            Home
          </Link>
          <Link
            to="/games"
            className={`block px-3 py-2 rounded-md text-base font-medium hover:underline ${
              activeMenu === "games" ? "text-slate-400" : ""
            }`}
            onClick={() => handleMenuClick("games")}
          >
            Games
          </Link>
          <Link
            to="/playground"
            className={`block px-3 py-2 rounded-md text-base font-medium hover:underline ${
              activeMenu === "playground" ? "text-slate-400" : ""
            }`}
            onClick={() => handleMenuClick("playground")}
          >
            Playground
          </Link>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdqOaFS_QcIj1tl_-NvdMjjNjxEMqbUvRdkN6hB3U94MKPTaQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className={`block px-3 py-2 rounded-md text-base font-medium hover:underline ${
              activeMenu === "contact" ? "text-slate-400" : ""
            }`}
            onClick={() => handleMenuClick("contact")}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
