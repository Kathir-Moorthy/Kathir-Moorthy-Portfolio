# 📁My Personal Portfolio

## 🚀 Introduction
Welcome to my personal portfolio! This portfolio showcases my skills, projects, and certifications in a clean and modern design. It is built with a focus on user experience, responsiveness, and interactivity. Whether you're here to learn more about me, explore my projects, or get in touch, this portfolio has it all.

---

## 🛠 Tech Stack

### Frontend
- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- ![React](https://img.shields.io/badge/ReactJS-61DAFB?style=for-the-badge&logo=react&logoColor=black)

### Backend
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
- ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

### Database
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

---

## 📁 Project Structure

### Frontend
```
  ├── public/
  │   ├── index.html              # Main HTML file
  │   └── logo.png                # Logo image 
  ├── src/
  │   ├── assets/                 # Images used in the portfolio and videos related to projects        
  │   ├── common/
  │   │   ├── DarkModeContext.js  # Dark mode context provider 
  │   │   ├── Navbar.js           # Navigation bar
  │   │   └── SideMenu.js         # Side menu navigation
  │   ├── components/
  │   │   ├── AboutMe/            # About Me section
  │   │   ├── ContactMe/          # Contact Me form and social media links
  │   │   ├── Home/               # Homepage section
  │   │   ├── MySkills/           # Skills and certifications section
  │   │   └── Projects/           # Projects section with demo videos and links
  │   ├── App.js                  # Main React app component with app routes
  │   ├── index.css               # Global styles 
  │   └── index.js                # Entry point for React
  ├── .gitignore
  ├── package-lock.json
  ├── package.json
  ├── postcss.config.js
  └── tailwind.config.js
```

### Backend
```
├── uploads/                      # Directory for uploaded files
├── index.js                      # Backend entry point for handling contact form submissions
├── package-lock.json 
└── package.json
```
---

## 📦 Dependencies

### Frontend
```
"dependencies": {
  "react": "^19.0.0",                               # React framework
  "react-dom": "^19.0.0",                           # ReactDOM for rendering components
  "react-icons": "^5.4.0",                          # React icons library
  "react-router-dom": "^7.1.1",                     # React Router for navigation
  "axios": "^1.7.9",                                # HTTP client for API calls
  "react-toastify": "^11.0.2",                      # Toast notifications
  "react-router-dom": "^7.1.1",                     # Detects when elements enter or leave the viewport.
  "lottie-react": "^2.4.1"                          # Lottie animations for UI
  "swiper": "^11.1.15",                             # Swiper.js for carousels
  "tailwindcss": "^3.0.0",                          # Tailwind CSS for styling
  "tailwind-scrollbar": "^3.1.0",                   # Custom scrollbar styling
  "tailwind-scrollbar-hide": "^2.0.0"               # Hides scrollbars
}
```

### Backend
```
"dependencies": {
  "express": "^4.21.2",                # Express.js framework
  "cors": "^2.8.5",                    # Enables CORS policy 
  "dotenv": "^16.4.7",                 # Loads environment variables
  "mongoose": "^8.9.5",                # MongoDB ORM for Node.js 
  "multer": "^1.4.4",                  # Middleware for file uploads
  "nodemailer": "^6.9.1"               # For sending emails from the contact form
}
```
---

## 🎯 Features

### 🌙 Dark Mode Support  
- Provides a user-friendly dark mode interface for comfortable browsing.  
- Uses a toggle switch to switch between light and dark themes.  
- Saves the user's preference for future visits.  

### 📱💻 Fully Responsive Design  
- Ensures a seamless experience across all devices, including desktops, tablets, and mobile phones.  
- Uses **Tailwind CSS** for a flexible, mobile-first design.  
- Optimized for fast performance and smooth animations.  

### 🏠 Home Page  
- Features a clean and modern design with a downloadable resume.  
- Provides a quick overview of my skills, projects, and certifications.  

### 👤 About Me Section  
- Learn more about my background, interests, and professional journey.  
- Includes a brief introduction and a personal story.  

### 🛠️ My Skills Section  
- Displays my technical skills and certifications in a visually appealing way.  
- Skills are ranked and categorized for easy understanding.  

### 🚀 Projects Section  
- Showcases my projects with detailed descriptions, demo videos, and live links.  
- Each project includes:  
  - **Key Features**  
  - **Technologies Used**  
  - **Live Demo Link**  
  - **GitHub Repository Link**  

### 📧 Contact Me Section  
- Allows visitors to send me messages directly from the portfolio.  
- Supports file uploads for additional context.  
- Includes links to my social media profiles for easy connection.  

---

## 🎉 Conclusion
This portfolio is a reflection of my skills, creativity, and passion for building meaningful projects. It is designed to provide a seamless and engaging experience for anyone who visits. Feel free to explore, connect, or reach out to me for collaborations or opportunities.


## 🌐 Check the Live App  
[Click here to view the app on Vercel!](https://kathir-moorthy-portfolio.vercel.app/)
