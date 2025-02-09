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
    };

    return (
        <div
            className={`flex flex-col min-h-screen md:flex-row items-start justify-center px-8 py-16 transition-colors duration-300 ${darkMode
                ? "bg-gradient-to-tr from-gray-900 to-gray-800 text-gray-100"
                : "bg-gradient-to-tr from-slate-50 to-slate-100 text-gray-800"
                }`}
            id="about"
        >
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
                    Hi, I’m Kathir Moorthy Suresh Babu. I specialize in creating web
                    applications that are both visually stunning and highly functional.
                    My expertise includes React.js, Node.js, Express.js, and MongoDB.
                </p>
                <p
                    className={`text-lg text-justify font-medium leading-relaxed mt-4 ${darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                >
                    I graduated as a Mechanical Engineer from PSG College of Technology
                    with a CGPA of 8.45. My foundation in engineering has equipped me
                    with problem-solving skills that I now bring to the world of software
                    development.
                </p>
                <p
                    className={`text-lg text-justify font-medium leading-relaxed mt-4 ${darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                >
                    I’m skilled in front-end technologies like Tailwind CSS, Redux, and
                    responsive design. I enjoy turning ideas into impactful solutions and
                    solving complex technical challenges.
                </p>
                <p
                    className={`text-lg text-justify font-medium leading-relaxed mt-4 ${darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                >
                    My journey began in mechanical engineering, but my passion for
                    technology led me to software development. I’ve worked on diverse
                    projects, including e-commerce platforms and portfolio sites, always
                    aiming for seamless user experiences.
                </p>
                <p
                    className={`text-lg text-justify font-medium leading-relaxed mt-4 ${darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                >
                    When I’m not coding, I enjoy exploring new frameworks, learning new
                    technologies, and collaborating on exciting projects. Let’s build
                    something amazing together!
                </p>
            </motion.div>
        </div>
    );
}

export default AboutMe;