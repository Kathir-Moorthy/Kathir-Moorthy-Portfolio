import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import m2 from "../../assets/MiPics/m2.jpg";
import { DarkModeContext } from "../../common/DarkModeContext";

function AboutMe() {
    const { darkMode } = useContext(DarkModeContext); // Access darkMode from context
    const [isImageLoaded, setImageLoaded] = useState(false);

    const animations = {
        container: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.8, staggerChildren: 0.2 } },
        },
        imageInitial: {
            hidden: { y: -100, opacity: 0 },
            visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 1, type: "spring", stiffness: 70 },
            },
        },
        hover: {
            hover: {
                scale: 1.1,
                rotateZ: 10,
                boxShadow: darkMode
                    ? "0px 15px 30px rgba(255, 255, 255, 0.2)"
                    : "0px 15px 30px rgba(0, 0, 0, 0.2)",
                filter: "hue-rotate(20deg) brightness(1.1)",
                transition: { duration: 0.5, type: "spring" },
            },
        },
        floating: {
            animate: {
                y: [0, -10, 0],
                transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                },
            },
        },
        content: {
            hidden: { y: 80, opacity: 0 },
            visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 1, delay: 0.5, type: "spring", stiffness: 80 },
            },
        },
        experience: {
            hidden: { opacity: 0, x: -50 },
            visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, delay: 0.3 }
            }
        }
    };

    return (
        <div
            className={`flex flex-col min-h-screen items-center justify-center px-8 py-16 transition-colors duration-300 ${darkMode
                ? "bg-gradient-to-tr from-gray-900 to-gray-800 text-gray-100"
                : "bg-gradient-to-tr from-slate-50 to-slate-100 text-gray-800"
                }`}
            id="about"
        >
            <div className="flex flex-col md:flex-row w-full max-w-6xl">
                {/* Left: Profile Image with Enhanced Animation */}
                <motion.div
                    className="relative flex justify-center items-start w-full md:w-1/2 p-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={animations.container}
                >
                    <motion.div
                        className={`w-96 h-96 ${darkMode
                            ? "bg-gradient-to-r from-purple-700 to-pink-600 shadow-moonlight-border border-6 border-moonlight"
                            : "bg-gradient-to-r from-purple-400 to-pink-400 shadow-inset-glow border-6 border-transparent"
                            } rounded-xl overflow-hidden shadow-lg hover:shadow-2xl relative transform perspective-1000 flex justify-center items-center`}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        whileInView="animate"
                        variants={{
                            ...animations.imageInitial,
                            ...animations.floating,
                        }}
                        whileTap={{ scale: 0.95 }}
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <motion.img
                            src={m2}
                            alt="Kathir Moorthy"
                            className="w-full h-full object-cover rounded-xl"
                            onLoad={() => setImageLoaded(true)}
                        />
                    </motion.div>
                </motion.div>

                {/* Right: About Me Content */}
                <motion.div
                    className={`mt-6 md:mt-0 md:ml-12 max-w-xl p-8 rounded-lg shadow-lg border ${darkMode
                        ? "bg-gray-800 bg-opacity-95 border-gray-700 hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.6)]"
                        : "bg-white bg-opacity-95 border-gray-200 hover:shadow-gray-300"
                        } transform hover:scale-105 transition-all duration-500`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={animations.content}
                >
                    <h2
                        className={`text-3xl font-bold ${darkMode ? "text-gray-100" : "text-gray-800"
                            } mb-6`}
                    >
                        About Me
                    </h2>
                    <p
                        className={`text-lg text-justify font-medium leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                    >
                        Hi, I'm Kathir Moorthy Suresh Babu. I specialize in creating web
                        applications that are both visually stunning and highly functional.
                        I'm a Full Stack Developer with expertise in React.js, Node.js, Express.js, MongoDB, and PostgreSQL.
                    </p>

                    <p
                        className={`text-lg text-justify font-medium leading-relaxed mt-4 ${darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                    >
                        I graduated as a Mechanical Engineer from PSG College of Technology with a CGPA of 8.45. My foundation in engineering has equipped me with problem-solving skills that I now bring to the world of software development.
                    </p>

                    <p
                        className={`text-lg text-justify font-medium leading-relaxed mt-4 ${darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                    >
                        I'm skilled in front-end technologies like Tailwind CSS, Redux, and responsive design. I also work confidently with Linux commands and backend systems. I enjoy turning ideas into impactful solutions and solving complex technical challenges.
                    </p>

                    <p
                        className={`text-lg text-justify font-medium leading-relaxed mt-4 ${darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                    >
                        My journey began in mechanical engineering, but my passion for technology led me to software development. I've worked on diverse projects, including e-commerce platforms and portfolio sites, always aiming for seamless user experiences.
                    </p>

                    <p
                        className={`text-lg text-justify font-medium leading-relaxed mt-4 ${darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                    >
                        I'm currently working as a Full Stack Developer at{" "}
                        <a
                            href="https://quantrail-data.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline"
                        >
                            Quantrail Data
                        </a>{" "}
                        where I build AI-powered customer-facing applications using modern web technologies.
                    </p>

                    <p
                        className={`text-lg text-justify font-medium leading-relaxed mt-4 ${darkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                    >
                        When I'm not coding, I enjoy exploring new frameworks, learning new technologies, and collaborating on exciting projects. Let's build something amazing together!
                    </p>
                </motion.div>
            </div>

            {/* Experience Section */}
            <motion.div 
                className={`w-full max-w-6xl mt-12 p-8 rounded-lg ${darkMode 
                    ? "bg-gray-800 border border-gray-700" 
                    : "bg-white border border-gray-200"
                } shadow-lg`}
                initial="hidden"
                whileInView="visible"
                variants={animations.experience}
                viewport={{ once: true }}
            >
                <h2 className={`text-2xl font-bold mb-6 ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
                    Experience
                </h2>
                
                <div className={`p-6 rounded-lg ${darkMode 
                    ? "bg-gray-700 border-l-4 border-purple-500" 
                    : "bg-slate-100 border-l-4 border-blue-500"
                }`}>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                        <h3 className={`text-xl font-semibold ${darkMode ? "text-gray-100" : "text-gray-800"}`}>
                            Full Stack Developer at Quantrail Data
                        </h3>
                        <span className={`text-sm mt-2 md:mt-0 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                            April 2025 - Present
                        </span>
                    </div>
                    <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        As a Full Stack Developer at Quantrail Data, I build AI-powered customer-facing applications using React, Next.js, and REST APIs. My role involves developing both frontend and backend solutions, working with databases, and deploying applications in a Linux environment.
                    </p>
                    <div className="mt-4">
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${darkMode 
                            ? "bg-purple-900 text-purple-100" 
                            : "bg-blue-100 text-blue-800"
                        }`}>
                            React
                        </div>
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ml-2 ${darkMode 
                            ? "bg-purple-900 text-purple-100" 
                            : "bg-blue-100 text-blue-800"
                        }`}>
                            Node.js
                        </div>
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ml-2 ${darkMode 
                            ? "bg-gray-700 text-gray-100" 
                            : "bg-gray-200 text-gray-800"
                        }`}>
                            PostgreSQL
                        </div>
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ml-2 ${darkMode 
                            ? "bg-gray-700 text-gray-100" 
                            : "bg-gray-200 text-gray-800"
                        }`}>
                            REST APIs
                        </div>
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ml-2 ${darkMode 
                            ? "bg-gray-700 text-gray-100" 
                            : "bg-gray-200 text-gray-800"
                        }`}>
                            Linux
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default AboutMe;
