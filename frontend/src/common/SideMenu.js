import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import { DarkModeContext } from "./DarkModeContext";
import m1 from "../assets/MiPics/m1.jpg";

const SideMenu = ({ closeMenu }) => {
  const { darkMode } = useContext(DarkModeContext);
  const location = useLocation();

  const navItems = [
    { name: "Home", icon: <FaHome />, path: "/" },
    { name: "About Me", icon: <FaUser />, path: "/aboutme" },
    { name: "Skills", icon: <FaTools />, path: "/myskills" },
    { name: "Projects", icon: <FaProjectDiagram />, path: "/myprojects" },
    { name: "Contact Me", icon: <FaEnvelope />, path: "/contactme" },
  ];

  // Close the menu when the Escape key is pressed
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeMenu]);

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sideMenu = document.querySelector(".side-menu");
      if (sideMenu && !sideMenu.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeMenu]);

  return (
    <div
      className={`fixed inset-0 z-50 flex bg-opacity-25 ${
        darkMode ? "bg-black" : "bg-gray-800"
      }`}
    >
      {/* Side Menu */}
      <div
        className={`side-menu w-1/2 max-w-xs p-3 flex flex-col items-center space-y-4 relative animate-slide-in overflow-y-auto overflow-x-hidden max-h-screen scrollbar-thin ${
          darkMode
            ? "bg-gray-700 text-gray-200 scrollbar-thumb-gray-600 scrollbar-track-gray-800"
            : "bg-slate-500 text-gray-800 scrollbar-thumb-slate-400 scrollbar-track-slate-300"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className={`absolute top-3 right-3 text-3xl font-bold focus:outline-none ${
            darkMode ? "text-gray-200 hover:text-gray-100" : "text-gray-800 hover:text-gray-700"
          }`}
        >
          &times;
        </button>

        {/* Profile Picture */}
        <div className="relative">
          <img
            src={m1}
            alt="Profile"
            className="w-20 h-20 rounded-full border-2 border-white shadow-md"
          />
          <div
            className={`absolute inset-0 rounded-full border-2 animate-pulse ${
              darkMode ? "border-blue-500" : "border-blue-400"
            }`}
          ></div>
        </div>

        {/* Navigation Links */}
        <nav className="w-full space-y-3">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={closeMenu}
              className={`flex items-center space-x-3 px-3 py-2 rounded-md shadow-sm transition-all ${
                location.pathname === item.path
                  ? darkMode
                    ? "bg-gray-600 text-white"
                    : "bg-slate-600 text-white"
                  : darkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
                  : "bg-slate-500 text-gray-800 hover:bg-slate-600 hover:text-white"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Custom Scrollbar and Animations */}
      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }

        .scrollbar-thin::-webkit-scrollbar-track {
          background: ${darkMode ? "#374151" : "#d1d5db"};
          border-radius: 4px;
        }

        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: ${darkMode ? "#6b7280" : "#9ca3af"};
          border-radius: 4px;
          border: 2px solid ${darkMode ? "#4b5563" : "#e5e7eb"};
        }

        .scrollbar-thin:hover::-webkit-scrollbar-thumb {
          background: ${darkMode ? "#9ca3af" : "#6b7280"};
        }

        /* Hide side menu for medium screens and above */
        @media (min-width: 768px) {
          .side-menu {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default SideMenu;