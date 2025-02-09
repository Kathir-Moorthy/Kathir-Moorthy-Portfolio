import React, { useState, useContext, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { DarkModeContext } from "../../common/DarkModeContext";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Pi1 from '../../assets/Proimg/Pi1.jpg';
import Pi2 from '../../assets/Proimg/Pi2.jpg';
import Pi3 from '../../assets/Proimg/Pi3.jpg';
import Pi4 from '../../assets/Proimg/Pi4.jpg';
import Pi5 from '../../assets/Proimg/Pi5.jpg';
import Pi6 from '../../assets/Proimg/Pi6.jpg';
import Pi7 from '../../assets/Proimg/Pi7.jpg';
import Pi8 from '../../assets/Proimg/Pi8.jpg';
import Pv1 from '../../assets/Provid/Pv1.mp4';
import Pv2 from '../../assets/Provid/Pv2.mp4';
import Pv3 from '../../assets/Provid/Pv3.mp4';
import Pv4 from '../../assets/Provid/Pv4.mp4';
import Pv5 from '../../assets/Provid/Pv5.mp4';
import Pv6 from '../../assets/Provid/Pv6.mp4';
import Pv7 from '../../assets/Provid/Pv7.mp4';
import Pv8 from '../../assets/Provid/Pv8.mp4';

const projectData = [
  {
    name: "ALCABAA - Ecommerce Website",
    image: Pi1,
    video: Pv1,
    liveDemo: "https://alcabaa-ecommerce.vercel.app/",
    github: "https://github.com/Kathir-Moorthy/ALCABAA",
    description: "ALCABAA is a modern, full-stack e-commerce platform built with the MERN stack. It provides a seamless shopping experience with an attractive UI, interactive animations, and advanced features like real-time product filtering, secure authentication, and QR-based UPI payments.",
    skills: ["React.js", "Tailwind CSS", "Express.js", "Node.js", "MongoDB", "Firebase Authentication", "UI/UX Design", "Responsive Design"],
    features: [ "Fully responsive design optimized for all devices", "Dark mode with smooth theme switching","Interactive pop-ups for sign-in, promotions, and product details","Product categories including Electronics, Clothing, Furniture, and more","Advanced product filtering and real-time search functionality","Admin dashboard to add, edit, and delete products and sale banners","Shopping cart with quantity updates and session storage","Secure checkout process with QR-based UPI payments"]
  },
  {
    name: "Kathir's Bulk Mail App",
    image: Pi4,
    video: Pv4,
    liveDemo: "#",
    github: "https://github.com/Kathir-Moorthy/Kathir-s-Bulk-Mail-App-Frontend",
    description: "Kathir's Bulk Mail App is a powerful and intuitive application designed for managing and executing bulk email campaigns efficiently. It features a user-friendly frontend and a robust backend to handle large-scale email operations seamlessly.",
    skills: ["React JS", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JavaScript"],
    features: ["Responsive and optimized frontend", "Fast performance with modern technologies", "Schedulable emails", "Bulk email sending with optimized performance", "Secure authentication and credential storage", "Analytics integration for tracking email campaigns", "Scalable architecture to handle large volumes"]
  },
  {
    name: "Movinfo",
    image: Pi2,
    video: Pv2,
    liveDemo: "https://movinfo-virid.vercel.app",
    github: "https://github.com/Kathir-Moorthy/Movinfo",
    description: "Movinfo is a responsive and visually appealing React.js application designed to provide detailed movie information using the OMDB API. With smooth animations, an intuitive UI, and robust features, Movinfo is perfect for movie enthusiasts!",
    skills: ["React JS", "Redux", "Tailwind CSS", "OMDB API", "JavaScript", "Lottie Animations"],
    features: ["Movie search with OMDB API", "Modern UI with Tailwind CSS", "State management with Redux", "Lottie animations for smooth loading", "Detailed movie info cards", "Fully responsive design", "Downloadable movie info cards"]
  },
  {
    name: "Weather-Mania",
    image: Pi3,
    video: Pv3,
    liveDemo: "https://weather-mania.vercel.app",
    github: "https://github.com/Kathir-Moorthy/Weather-Mania",
    description: "Weather-Mania is a sleek and responsive weather companion app that provides real-time weather updates with dynamic themes and cool animations. Stay informed about the weather conditions with an intuitive and visually appealing interface.",
    skills: ["React", "JavaScript", "Tailwind CSS", "Weather API", "Lottie Animations"],
    features: ["Real-time weather updates", "Dynamic themes based on weather and time", "Weather animations for rain, thunder, and sunshine", "Integrated date and time display", "Fully responsive design", "Downloadable weather reports", "Easily removable weather cards"]
  },
  {
    name: "Nostra Ecommerce Website ",
    image: Pi5,
    video: Pv5,
    liveDemo: "https://kathir-moorthy.github.io/Nostra---Ecommerce-Website",
    github: "https://github.com/Kathir-Moorthy/Nostra---Ecommerce-Website",
    description: "Nostra is a professional, modern e-commerce platform built with HTML, CSS, and JavaScript. It offers an immersive shopping experience with an attractive UI, interactive animations, and comprehensive functionality, ensuring a seamless and engaging user experience.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX Design"],
    features: [ "Fully responsive design optimized for all devices", "Dark mode with smooth theme switching", "Sidebar navigation menu for easy access to categories","Interactive pop-ups for sign-in, promotions, and product details", "Product categories including Smartphones, Electronics, Furniture, and more","Advanced product filtering and search functionality","Detailed product cards with ratings, discounts, and add-to-cart feature",]
  },
  {
    name: "Kathir's Interactive World Clock",
    image: Pi6,
    video: Pv6,
    liveDemo: "https://kathir-moorthy.github.io/Interactive-World-Clock",
    github: "https://github.com/Kathir-Moorthy/Interactive-World-Clock",
    description: "Kathir's Interactive World Clock is an elegant and interactive clock application featuring real-time analog and digital displays, timezone selection, dark mode, and an alarm function. Designed for a seamless user experience across all devices.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX Design"],
    features: ["Real-time analog and digital clock display", "Timezone selector for viewing different time zones", "Dark mode toggle for a comfortable viewing experience", "Alarm functionality with customizable time and notifications", "Fully responsive design optimized for desktops, tablets, and mobile devices", "Smooth CSS animations and transitions for an interactive experience"]
  },
  {
    name: "Kathir's Image Gallery",
    image: Pi7,
    video: Pv7,
    liveDemo: "https://image-gallery-react-ebon.vercel.app",
    github: "https://github.com/Kathir-Moorthy/Image-Gallery-React",
    description: "Kathir's Image Gallery is a dynamic and responsive gallery built with React.js. It features an intuitive UI that allows users to view, enlarge, and download images while offering smooth animations and a modern design.",
    skills: ["React JS", "JavaScript", "CSS", "Responsive Design", "UI/UX Design"],
    features: ["Thumbnail gallery showcasing a collection of images", "Click-to-enlarge feature for detailed image viewing", "Download option for saving images easily", "Dark mode toggle for a comfortable viewing experience", "Fully responsive design optimized for mobile, tablet, and desktop screens", "Smooth animations and transitions for an interactive experience"]
  },
  {
    name: "Simple Udemy Clome React",
    image: Pi8,
    video: Pv8,
    liveDemo: "https://udemy-clone-raect.vercel.app/",
    github: "https://github.com/Kathir-Moorthy/Udemy-Clone-Raect",
    description: "Udemy Clone is a simple functional e-learning platform clone built with React.js, replicating core Udemy functionalities such as course listings, user authentication, and course enrollment.",
    skills: ["React JS", "JavaScript", "CSS", "Responsive Design", "UI/UX Design"],
    features: ["Fully responsive design optimized for all devices", "Browse and search for courses", "Detailed course information pages", "User authentication for secure access", "Course enrollment functionality"]
  },
];

const ProjectPopup = ({ project, onClose, darkMode }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 min-h-screen">
      <div
        ref={popupRef}
        className={`p-6 rounded-lg max-w-lg w-full relative overflow-y-auto custom-scrollbar animate-popup-slide-in ${
          darkMode
            ? "bg-gray-800 text-gray-100"
            : "bg-white text-gray-800"
        }`}
        style={{
          maxHeight: "80%",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.3)",
        }}
      >
        <button
          className={`absolute top-2 right-0 text-4xl font-bold transition duration-200 ${
            darkMode ? "text-gray-300 hover:text-red-400" : "text-gray-500 hover:text-red-500"
          }`}
          onClick={onClose}
        >
          &times;
        </button>
        <video controls autoPlay className="w-full rounded-md mb-4 shadow">
          <source src={project.video} type="video/mp4" />
        </video>
        <div className="flex flex-row gap-4 mb-4">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-lg shadow transition-transform duration-300 transform hover:scale-105 no-underline ${
              darkMode
                ? "bg-slate-500 hover:bg-slate-600 text-white"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-lg shadow transition-transform duration-300 transform hover:scale-105 no-underline ${
              darkMode
                ? "bg-gray-600 hover:bg-gray-700 text-gray-100"
                : "bg-gray-800 hover:bg-gray-900 text-white"
            }`}
          >
            GitHub
          </a>
        </div>
        <h3 className="text-xl font-semibold mb-2">Project Overview</h3>
        <div>
          <h4 className="text-lg font-medium mb-1">Description</h4>
          <p className="mb-3 text-justify">{project.description}</p>
          <h4 className="text-lg font-medium mb-1">Skills Used</h4>
          <ul className="list-disc pl-5 mb-3 text-justify">
            {project.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <h4 className="text-lg font-medium mb-1">Key Features</h4>
          <ul className="list-disc pl-5">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
      <style>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: ${darkMode ? "#6c63ff #3a3a3a" : "#6c63ff #f0f0f0"};
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #6c63ff, #8561f9);
          border-radius: 10px;
          border: 2px solid ${darkMode ? "#3a3a3a" : "#f0f0f0"};
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #6c63ff, #4739e6);
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: ${darkMode ? "#3a3a3a" : "#f0f0f0"};
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

const Projects = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div
      className={`min-h-screen animate-fade-in p-10 transition-colors duration-300 ${
        darkMode ? "bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100" : "bg-gradient-to-r from-slate-100 to-slate-200 text-blue-800"
      }`}
    >
      <h1
        className={`text-4xl font-bold mb-8 text-center ${
          darkMode ? "text-slate-400" : "text-blue-600"
        }`}
      >
        My Projects
      </h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="my-5 relative"
        style={{ position: "relative" }}
      >
        {projectData.map((project, index) => (
          <SwiperSlide key={index}>
            <div
              className={`cursor-pointer p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-gray-800 text-slate-200 hover:shadow-gray-700"
                  : "bg-white text-gray-800 hover:shadow-2xl"
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3
                className={`text-lg font-semibold ${
                  darkMode ? "text-slate-400" : "text-blue-800"
                }`}
              >
                {project.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
        <style>{`
          .swiper-button-next,
          .swiper-button-prev {
            opacity: 0;
            transition: opacity 0.3s;
          }
          .swiper:hover .swiper-button-next,
          .swiper:hover .swiper-button-prev {
            opacity: 1;
          }
        `}</style>
      </Swiper>

      {selectedProject && (
        <ProjectPopup
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          darkMode={darkMode}
        />
      )}
    </div>
  );
};

export default Projects;