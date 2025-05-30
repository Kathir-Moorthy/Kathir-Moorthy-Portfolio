import React, { useEffect, useRef, useContext } from "react";
import { DarkModeContext } from "../../common/DarkModeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGit,
  FaRocket,
  FaBolt,
  FaFire,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiAxios,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiLinux,
} from "react-icons/si";
import { DiVisualstudio } from 'react-icons/di';
import Certificates from "./Certificates";

const skillsByCategory = {
  Frontend: [
    { name: "HTML5", icon: <FaHtml5 />, level: 5 },
    { name: "CSS3", icon: <FaCss3Alt />, level: 5 },
    { name: "TailwindCSS", icon: <SiTailwindcss />, level: 4 },
    { name: "JavaScript (ES6+)", icon: <SiJavascript />, level: 4 },
    { name: "React.js", icon: <FaReact />, level: 4 },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs />, level: 4 },
    { name: "Express.js", icon: <SiExpress />, level: 4 },
    { name: "Axios", icon: <SiAxios />, level: 4 },
  ],
  Database: [
    { name: "MongoDB", icon: <SiMongodb />, level: 4 },
    { name: "MySQL", icon: <SiMysql />, level: 4 },
    { name: "PostgreSQL", icon: <SiPostgresql />, level: 4 },
  ],
  Tools: [
    { name: "Git", icon: <FaGit />, level: 4 },
    { name: "VS Code", icon: <DiVisualstudio />, level: 4 },
    { name: "Linux", icon: <SiLinux />, level: 4 },
    { name: "Vercel", icon: <FaRocket />, level: 4 },
    { name: "Render", icon: <FaBolt />, level: 4 },
    { name: "Firebase", icon: <FaFire />, level: 4 },
    { name: "Python", icon: <FaPython />, level: 4 },
  ],
};

const MySkills = () => {
  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-lighting-bar");
          } else {
            entry.target.classList.remove("animate-lighting-bar");
          }
        });
      },
      { threshold: 0.2 }
    );

    const bars = document.querySelectorAll(".progress-bar");
    bars.forEach((bar) => observer.observe(bar));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`p-10 min-h-screen transition-colors duration-300 font-roboto animate-fade-in ${darkMode
        ? "bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100"
        : "bg-gradient-to-r from-slate-100 to-slate-200 text-gray-800"
        }`}
    >
      <h1
        className={`text-4xl mb-8 font-bold drop-shadow-lg text-center ${darkMode ? "text-slate-400" : "text-blue-600"
          }`}
      >
        My Skills
      </h1>
      {Object.entries(skillsByCategory).map(([category, skills], index) => (
        <div key={index} className="mb-10">
          <h2
            className={`text-2xl font-semibold mb-6 border-b-2 inline-block ${darkMode
              ? "text-slate-400 border-slate-500"
              : "text-blue-800 border-blue-500"
              }`}
          >
            {category}
          </h2>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            navigation
            modules={[Navigation]}
            className="skills-swiper"
          >
            {skills.map((skill, skillIndex) => (
              <SwiperSlide key={skillIndex}>
                <div
                  className={`w-full text-center p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2 ${darkMode
                    ? "bg-gray-800 hover:shadow-gray-700"
                    : "bg-white hover:shadow-2xl"
                    }`}
                >
                  <div
                    className={`text-5xl mb-4 animate-pulse drop-shadow-lg ${darkMode ? "text-slate-400" : "text-blue-800"
                      }`}
                  >
                    {skill.icon}
                  </div>
                  <h3
                    className={`text-lg mb-3 font-medium drop-shadow-md ${darkMode ? "text-slate-400" : "text-blue-800"
                      }`}
                  >
                    {skill.name}
                  </h3>
                  <div className="flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-5 h-2 rounded-md overflow-hidden ${i < skill.level
                          ? darkMode
                            ? "bg-gradient-to-r from-slate-400 to-slate-600 progress-bar"
                            : "bg-gradient-to-r from-blue-600 to-blue-800 progress-bar"
                          : "bg-gray-300"
                          }`}
                      >
                        {i < skill.level && (
                          <div
                            className="h-full w-full bg-gradient-to-r from-blue-400 to-blue-600 origin-left-center animate-lighting-bar"
                            style={{ animationDelay: `${i * 0.3}s` }}
                          ></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
      <Certificates />

      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: ${darkMode ? "#d1d5db" : "#1d4ed8"};
          opacity: 0.3; /* Slightly transparent by default for small screens */
          transition: opacity 0.3s;
        }
        @media (min-width: 1024px) {
          .swiper-button-next,
          .swiper-button-prev {
            opacity: 1; /* Fully visible for large screens */
          }
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          opacity: 1; /* Fully visible on hover */
          color: ${darkMode ? "#9ca3af" : "#2563eb"};
        }
      `}</style>
    </div>
  );
};

export default MySkills;