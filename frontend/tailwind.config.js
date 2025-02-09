/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f9fafb",
        secondary: "#e2e8f0",
        accent: "#38bdf8",
        darkAccent: "#1e293b",
        lightGray: "#4b5563",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        pulse: "pulse 2s infinite",
        lighting: "lighting 1s ease-in-out",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "popup-slide-in": "popup-slide-in 0.5s ease-in-out",
        "slide-in": "slideIn 0.5s ease-out",
        glow: "glow 1.5s infinite",
        "progress-bar": "progressBar 2s ease-in-out forwards",
        "lighting-bar": "lightingBar 1s ease-in-out forwards",
        "float-effect": "floatEffect 6s ease-in-out infinite",
        "stunning-pulse": "stunningPulse 2.5s ease-in-out forwards",
        "social-glow": "socialGlow 1.5s infinite alternate ease-in-out",
        "hover-glow": "hoverGlow 0.5s ease-in-out forwards",
      },
      keyframes: {
        pulse: {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "0.8",
          },
          "50%": {
            transform: "scale(1.2)",
            opacity: "1",
          },
        },
        lighting: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "popup-slide-in": {
          "0%": {
            transform: "translateY(-20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 5px rgba(59, 130, 246, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
          },
        },
        progressBar: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        lightingBar: {
          "0%": { opacity: "0", transform: "scaleX(0)" },
          "100%": { opacity: "1", transform: "scaleX(1)" },
        },
        floatEffect: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        stunningPulse: {
          "0%": {
            transform: "scale(0.5)",
            opacity: "0.4",
          },
          "50%": {
            transform: "scale(0.75)",
            opacity: "0.5",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        socialGlow: {
          "0%": {
            boxShadow: "0 0 5px rgba(255, 255, 255, 0.3)",
          },
          "100%": {
            boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
          },
        },
        hoverGlow: {
          "0%": {
            transform: "translateX(0px) scale(1)",
            boxShadow: "0 0 0 rgba(255, 255, 255, 0)",
          },
          "100%": {
            transform: "translateX(20px) scale(1.1)",
            boxShadow: "0 0 15px rgba(255, 255, 255, 0.8)",
          },
        },
      },
      boxShadow: {
        "white-glow": "0 0 20px 5px rgba(255, 255, 255, 0.8), 0 0 30px 10px rgba(255, 255, 255, 0.6)",
        "inset-glow": "inset 0 0 15px 5px rgba(255, 255, 255, 0.6)",
      },
      borderWidth: {
        6: "6px",
      },
      borderColor: {
        white: "rgba(255, 255, 255, 0.8)", // White glow effect for borders
      },
    },
  },
  plugins: [],
};