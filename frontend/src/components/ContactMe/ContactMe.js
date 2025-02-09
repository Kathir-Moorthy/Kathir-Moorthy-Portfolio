import React, { useState, useContext, useRef, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaGoogle, FaPhone } from "react-icons/fa"; // Import FaPhone
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DarkModeContext } from "../../common/DarkModeContext";

const ContactMe = () => {
    const { darkMode } = useContext(DarkModeContext); // Access dark mode state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        file: null,
    });
    const [sending, setSending] = useState(false);

    const pulseRef = useRef(null); // Ref for the "stunning pulse" container

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill in all required fields!", {
                position: "top-center",
            });
            return;
        }
    
        setSending(true);
    
        const data = new FormData();
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("message", formData.message);
        if (formData.file) {
            data.append("file", formData.file);
        }
    
        try {
            await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/contact`, data);
            toast.success("Message sent successfully!", {
                position: "top-center",
            });
    
            // Reset form data
            setFormData({ name: "", email: "", message: "", file: null });
    
            // Explicitly reset file input
            const fileInput = document.querySelector('input[type="file"]');
            if (fileInput) fileInput.value = "";
        } catch (error) {
            toast.error("Error sending message. Please try again later.", {
                position: "top-center",
            });
        } finally {
            setSending(false);
        }
    };    

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    pulseRef.current.classList.remove("animate-stunning-pulse");
                    // Force reflow to restart the animation
                    void pulseRef.current.offsetWidth;
                    pulseRef.current.classList.add("animate-stunning-pulse");
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the element is visible
        );

        if (pulseRef.current) {
            observer.observe(pulseRef.current);
        }

        return () => {
            if (pulseRef.current) {
                observer.unobserve(pulseRef.current);
            }
        };
    }, []);

    return (
        <div
            className={`fade-in-animation min-h-screen py-12 px-6 md:px-12 lg:px-20 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
                } animate-fade-in`}
        >
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                className="z-50 mt-12 text-center"
                toastClassName={() =>
                    `relative flex p-4 min-h-10 rounded-lg justify-between overflow-hidden cursor-pointer shadow-lg ${darkMode ? "bg-gray-800 text-white" : "bg-slate-700 text-white"
                    }`
                }
                bodyClassName={() =>
                    "text-sm font-semibold flex items-center"
                }
                closeButton={({ closeToast }) => (
                    <button
                        onClick={closeToast}
                        className={`rounded-full ml-1 w-6 h-6 flex items-center justify-center transition-colors duration-300 ${darkMode
                                ? "text-gray-300 hover:text-white"
                                : "text-white hover:text-blue-900"
                            }`}
                        aria-label="Close"
                    >
                        ✖
                    </button>
                )}
            />
            <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>
            <div className="flex flex-col md:flex-row gap-8">
                {/* Contact Form */}
                <div
                    ref={pulseRef} // Attach ref for observing
                    className={`sm:mx-auto md:w-1/2 sm:w-3/4 xs:w-full p-6 sm:p-4 xs:p-3 rounded-lg shadow-lg border ${darkMode
                        ? "bg-gray-800 border-gray-700"
                        : "bg-white border-gray-200"
                        } animate-stunning-pulse`}
                >
                    <h3 className="text-3xl sm:text-2xl xs:text-xl font-bold mb-4 sm:mb-3">
                        Get in Touch
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-3 xs:space-y-2">
                        <div>
                            <label
                                className={`block font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-600"
                                    }`}
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className={`w-full border rounded-lg px-3 py-2 sm:py-1.5 xs:py-1 focus:outline-none focus:ring-2 transition ${darkMode
                                    ? "bg-gray-700 text-white border-gray-600 focus:ring-blue-400"
                                    : "bg-white text-gray-800 border-gray-300 focus:ring-blue-500"
                                    }`}
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label
                                className={`block font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-600"
                                    }`}
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={`w-full border rounded-lg px-3 py-2 sm:py-1.5 xs:py-1 focus:outline-none focus:ring-2 transition ${darkMode
                                    ? "bg-gray-700 text-white border-gray-600 focus:ring-blue-400"
                                    : "bg-white text-gray-800 border-gray-300 focus:ring-blue-500"
                                    }`}
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label
                                className={`block font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-600"
                                    }`}
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className={`w-full border rounded-lg px-3 py-2 sm:py-1.5 xs:py-1 focus:outline-none focus:ring-2 transition ${darkMode
                                    ? "bg-gray-700 text-white border-gray-600 focus:ring-blue-400"
                                    : "bg-white text-gray-800 border-gray-300 focus:ring-blue-500"
                                    }`}
                                placeholder="Write your message"
                                rows={4}
                            />
                        </div>
                        <div>
                            <label
                                className={`block font-medium mb-2 ${darkMode ? "text-gray-300" : "text-gray-600"
                                    }`}
                            >
                                Attach File (Optional)
                            </label>
                            <input
                                type="file"
                                onChange={handleFileChange}
                                className={`w-full border rounded-lg px-3 py-2 sm:py-1.5 xs:py-1 focus:outline-none focus:ring-2 transition ${darkMode
                                    ? "bg-gray-700 text-white border-gray-600 focus:ring-blue-400"
                                    : "bg-white text-gray-800 border-gray-300 focus:ring-blue-500"
                                    }`}
                            />
                        </div>
                        <button
                            type="submit"
                            className={`w-full px-4 py-3 sm:py-2 xs:py-1.5 font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 ${sending
                                ? "bg-gray-400 cursor-not-allowed"
                                : darkMode
                                    ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400"
                                    : "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 focus:ring-blue-300"
                                }`}
                            disabled={sending}
                        >
                            {sending ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
                {/* Connect with Me */}
                <div className="sm:mx-auto md:w-1/2 animate-float-effect">
                    <h3 className={`text-2xl font-semibold mb-6 ml-6 ${darkMode ? "text-white" : "text-gray-800"}`}>
                        Connect with Me
                    </h3>
                    <ul className="space-y-4">
                        <li className="flex items-center hover:animate-hover-glow">
                            <FaGoogle
                                className={`text-xl mr-3 ${darkMode ? "text-[#EA4335]" : "text-[#DB4437]"
                                    } animate-social-glow`}
                            />
                            <a
                                href="mailto:kathirmoorthybsb05@gmail.com"
                                className={`text-lg font-medium no-underline hover:no-underline ${darkMode ? "text-white" : "text-blue-500"
                                    }`}
                            >
                                kathirmoorthybsb05@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center hover:animate-hover-glow">
                            <FaLinkedin
                                className={`text-xl mr-3 ${darkMode ? "text-[#0077B5]" : "text-blue-600"
                                    } animate-social-glow`}
                            />
                            <a
                                href="https://www.linkedin.com/in/kathir-moorthy-suresh-babu05"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-lg font-medium no-underline hover:no-underline ${darkMode ? "text-white" : "text-blue-500"
                                    }`}
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li className="flex items-center hover:animate-hover-glow">
                            <FaGithub
                                className={`text-xl mr-3 ${darkMode ? "text-gray-300" : "text-gray-900"
                                    } animate-social-glow`}
                            />
                            <a
                                href="https://github.com/Kathir-Moorthy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-lg font-medium no-underline hover:no-underline ${darkMode ? "text-white" : "text-blue-500"
                                    }`}
                            >
                                GitHub
                            </a>
                        </li>
                        <li className="flex items-center hover:animate-hover-glow">
                            <FaInstagram
                                className={`text-xl mr-3 ${darkMode ? "text-[#E4405F]" : "text-pink-600"
                                    } animate-social-glow`}
                            />
                            <a
                                href="https://www.instagram.com/___kathir05___"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`text-lg font-medium no-underline hover:no-underline ${darkMode ? "text-white" : "text-blue-500"
                                    }`}
                            >
                                Instagram
                            </a>
                        </li>
                        {/* Add Phone Number */}
                        <li className="flex items-center hover:animate-hover-glow">
                            <FaPhone
                                className={`text-xl mr-3 ${darkMode ? "text-green-400" : "text-green-600"
                                    } animate-social-glow`}
                            />
                            <span
                                className={`text-lg font-medium no-underline hover:no-underline ${darkMode ? "text-white" : "text-blue-500"
                                    }`}
                            >
                                (+91) 6374767720
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;