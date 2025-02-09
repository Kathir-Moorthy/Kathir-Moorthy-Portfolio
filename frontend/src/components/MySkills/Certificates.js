import React, { useState, useContext, useEffect } from "react";
import { DarkModeContext } from "../../common/DarkModeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import P from '../../assets/Certificates/Python.jpg'
import S from '../../assets/Certificates/MySQL.jpg'
import T from '../../assets/Certificates/TBR.jpg'

const certificates = [
  {
    id: 1,
    image: T,
    name: "MERN Stack Developer",
    details:
      "This certificate acknowledges my successful completion of the MERN Stack Developer course at Error Makes Clever, where I acquired expertise in MongoDB, Express.js, React.js, and Node.js, developing full-stack web applications through hands-on projects.",
  },
  {
    id: 2,
    image: P,
    name: "Python Programming Certificate",
    details:
      "This certificate recognizes my successful completion of the Python programming course at iSOFT IT Training, where I gained expertise in Python fundamentals, scripting, and problem-solving techniques through hands-on projects.",
  },
  {
    id: 3,
    image: S,
    name: "MySQL Certificate",
    details:
      'This certificate recognizes my successful completion of the "Introduction to Database and SQL" course at Great Learning Academy, where I developed skills in database design, SQL queries, and data management concepts.',
  },
];

const Certificates = () => {
  const { darkMode } = useContext(DarkModeContext); // Access darkMode from context
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const openPopup = (certificate) => {
    setSelectedCertificate(certificate);
    document.body.style.overflow = "hidden"; // Disable scrolling when popup is open
  };

  const closePopup = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  // Handle Escape key press
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    if (selectedCertificate) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [selectedCertificate]);

  // Handle click outside popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      const popup = document.querySelector(".popup-container");
      if (popup && !popup.contains(event.target)) {
        closePopup();
      }
    };

    if (selectedCertificate) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedCertificate]);

  return (
    <div
      className={`min-h-screen p-10 transition-colors duration-300 ${darkMode ? "bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100" : "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800"}`}
    >
      <h1 className={`text-4xl font-bold mb-8 text-center ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
        My Certifications
      </h1>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        modules={[Navigation]}
        className="mySwiper"
      >
        {certificates.map((certificate) => (
          <SwiperSlide key={certificate.id}>
            <div
              className={`w-full h-72 flex flex-col justify-between items-center rounded-lg shadow-lg transform transition-transform hover:-translate-y-2 p-4 cursor-pointer ${darkMode ? "bg-gray-800 hover:shadow-gray-700" : "bg-white hover:shadow-2xl"}`}
              onClick={() => openPopup(certificate)}
            >
              <img
                src={certificate.image}
                alt={certificate.name}
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h3 className={`text-lg font-semibold text-center ${darkMode ? "text-blue-400" : "text-blue-800"}`}>
                {certificate.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedCertificate && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50 animate-fade-in">
          <div
            className={`w-11/12 md:w-2/3 lg:w-1/2 max-h-[80vh] rounded-lg shadow-xl overflow-y-auto custom-scrollbar relative popup-container ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"}`}
          >
            <button
              className={`text-5xl absolute top-4 right-2 cursor-pointer transition-colors ${darkMode ? "text-gray-300 hover:text-red-400" : "text-red-500 hover:text-red-600"}`}
              onClick={closePopup}
            >
              &times;
            </button>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.name}
              className="w-full max-h-100 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h2 className={`text-2xl font-bold mb-4 ${darkMode ? "text-slate-400" : "text-blue-800"}`}>
                {selectedCertificate.name}
              </h2>
              <p className="leading-relaxed text-justify">
                {selectedCertificate.details}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tailwind Scrollbar Styles */}
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: ${darkMode ? "linear-gradient(to bottom, #2779fb, #5714f4)" : "linear-gradient(to bottom, #2779fb, #5714f4)"};
            border-radius: 5px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: ${darkMode ? "#3a3a3a" : "#f1f1f1"};
          }

          .swiper-button-next,
          .swiper-button-prev {
            color: ${darkMode ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"};
            transition: opacity 0.3s;
            opacity: 0;
          }

          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};

export default Certificates;