import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "./DarkModeContext";
import m1 from "../assets/MiPics/m1.jpg";
import SideMenu from "./SideMenu";

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [closing, setClosing] = useState(false);

    const navigate = useNavigate();

    const openMenu = () => {
        setIsMenuOpen(true);
        setClosing(false);
    };

    const closeMenu = () => {
        setClosing(true);
        setTimeout(() => {
            setIsMenuOpen(false);
        }, 300); // Match this with your animation duration
    };

    return (
        <>
            <nav
                className={`sticky top-0 flex items-center justify-between px-4 py-2 shadow-lg w-full z-50 transition-all duration-300 ${
                    darkMode
                        ? "bg-gradient-to-r from-gray-700 to-gray-800 text-gray-200"
                        : "bg-gradient-to-r from-slate-400 to-slate-600 text-white"
                } animate-fade-in`}
            >
                {/* Left Section: Profile + Name */}
                <div className="flex items-center space-x-3">
                    <img
                        src={m1}
                        alt="Profile"
                        className="sm:w-8 sm:h-8 w-10 h-10 rounded-full"
                    />
                    <span className="text-base sm:font-semibold md:font-medium lg:font-bold">
                        Kathir Moorthy Suresh Babu
                    </span>
                </div>

                {/* Middle Section: Navigation Links */}
                <ul className="hidden md:hidden lg:flex mt-3 space-x-6 items-center">
                    {[
                        { name: "Home", path: "/" },
                        { name: "About Me", path: "/aboutme" },
                        { name: "Skills", path: "/myskills" },
                        { name: "Projects", path: "/myprojects" },
                    ].map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                className={`text-base relative group no-underline ${
                                    darkMode ? "text-white" : "text-white"
                                } transition-all duration-300`}
                            >
                                {item.name}
                                {/* Underline Animation */}
                                <span
                                    className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                                        darkMode ? "bg-blue-300" : "bg-blue-200"
                                    } transition-all duration-300 group-hover:w-full group-focus:w-full`}
                                ></span>
                            </Link>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => navigate("/contactme")}
                            className={`text-base px-4 py-2 rounded-md transition-all duration-300 relative overflow-hidden group ${
                                darkMode
                                    ? "bg-black text-white border-2 border-transparent hover:border-white"
                                    : "bg-black text-white border-2 border-transparent hover:border-white"
                            }`}
                        >
                            <span className="relative z-10 transition-all duration-300 group-hover:text-black">
                                Contact Me
                            </span>
                            {/* Hover Background Effect */}
                            <span
                                className={`absolute top-0 left-0 w-full h-full bg-white transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left`}
                            ></span>
                        </button>
                    </li>
                </ul>

                {/* Right Section: Dark Mode Toggle + Hamburger Menu */}
                <div className="flex items-center space-x-4">
                    {/* Dark Mode Toggle */}
                    <div className="flex items-center space-x-2">
                        <span className="text-base">{darkMode ? "🌜" : "🌞"}</span>
                        <label className="relative flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only"
                                onChange={toggleDarkMode}
                                checked={darkMode}
                            />
                            <div
                                className={`w-10 h-6 rounded-full p-1 ${
                                    darkMode ? "bg-gray-600" : "bg-gray-300"
                                }`}
                            >
                                <div
                                    className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                                        darkMode
                                            ? "translate-x-4"
                                            : "translate-x-0"
                                    }`}
                                ></div>
                            </div>
                        </label>
                    </div>

                    {/* Hamburger Menu */}
                    <button
                        onClick={openMenu}
                        className="lg:hidden flex flex-col space-y-1.5"
                    >
                        <span
                            className={`w-6 h-0.5 ${
                                darkMode ? "bg-gray-200" : "bg-white"
                            }`}
                        ></span>
                        <span
                            className={`w-6 h-0.5 ${
                                darkMode ? "bg-gray-200" : "bg-white"
                            }`}
                        ></span>
                        <span
                            className={`w-6 h-0.5 ${
                                darkMode ? "bg-gray-200" : "bg-white"
                            }`}
                        ></span>
                    </button>
                </div>
            </nav>

            {/* Side Menu */}
            {isMenuOpen && (
                <div
                    className={`${
                        closing ? "animate-slide-out" : "animate-slide-in"
                    }`}
                >
                    <SideMenu closeMenu={closeMenu} />
                </div>
            )}
        </>
    );
};

export default Navbar;