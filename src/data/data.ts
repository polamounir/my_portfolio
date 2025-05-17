import personalImage from '../assets/photo.webp';
// -----------------------------
import electrooImage from '../assets/electroo.png';
import medicalPredictionImage from '../assets/Baymax.png';
import weatherAppImage from '../assets/Weather.png';
import sefGoldImage from '../assets/SEF.png';
// -----------------------------
import htmlImage from '../assets/icons/html.png';
import cssImage from '../assets/icons/text.png';
import tailwindImage from '../assets/icons/tailwindcss-icon.png';
import javascriptImage from '../assets/icons/js.png';
import typescriptImage from '../assets/icons/typescript.png';
import reactImage from '../assets/icons/react-icon.png';
import reduxImage from '../assets/icons/redux-icon.png';
// -----------------------------
import nodeImage from '../assets/icons/node-js.png';
import expressImage from '../assets/icons/express-icon.png';
import mongoImage from '../assets/icons/mongodb-icon.png';

// -----------------------------
import gitImage from '../assets/icons/git-icon.png';
import githubImage from '../assets/icons/github-icon.png';
import apiImage from '../assets/icons/gear.png';




export const portfolioData = {
  name: "Pola Mounir",
  title: "React Frontend Developer",
  summary: "Frontend Developer with experience in building responsive and user-friendly web applications using React.js and modern web technologies. Skilled in creating efficient and maintainable code with a focus on performance and accessibility.",
  contact: {
    email: "polamounir103@gmail.com",
    location: "Cairo, Egypt",
    linkedin: "https://www.linkedin.com/in/pola-mounir-samir/",
    github: "https://github.com/polamounir"
  },
  photoUrl: personalImage,
  education: [
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "Modern Academy",
      date: "2020 - 2024",
      description: "Studied computer science fundamentals, algorithms, data structures, and software engineering principles"
    }
  ],
  experience: [
    {
      title: "Frontend Developer",
      company: "Freelance",
      date: "2023 - Present",
      description: [
        "Developed responsive web applications using React.js, TypeScript, and modern frontend technologies",
        "Implemented user interfaces following design specifications and best practices",
        "Created reusable components and maintained clean, efficient code",
      ]
    },
  
  ],
  projects: [
    {
      name: "Electroo E-commerce",
      description: "A full-featured e-commerce platform for electronic products with user authentication, product catalog, shopping cart, and checkout functionality",
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "Redux Toolkit" , "Axios" , "React Query" ,"Charts.js"],
      link: "https://electroo.vercel.app/",
      image: electrooImage
    },
    {
      name: "Medical Prediction System",
      description: "A healthcare application for predicting medical conditions using machine learning algorithms",
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "AI Integration"],
      link: "https://medical-prediction.vercel.app/",
      image: medicalPredictionImage
    },
    {
      name: "SEF Gold",
      description: "A dynamic course platform with exam systems, CV builders, and user role-based dashboards, improving user engagement and accessibility",
      technologies: ["React.js", "JavaScript", "Bootstrap", "Redux Toolkit"],
      link: "https://sef-gold.vercel.app/",
      image: sefGoldImage
    },
    {
      name: "Weather Application",
      description: "Real-time weather forecast application with location-based weather data and interactive maps",
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "Weather API", "Geolocation"],
      link: "https://weather-app-pola-mounirs-projects.vercel.app/",
      image: weatherAppImage
    },
  ],
  skills: [
    {
      category: "Development",
      items: [
        { name: "HTML5", icon: htmlImage },
        { name: "CSS3", icon: cssImage },
        { name: "Tailwind CSS", icon: tailwindImage },
        { name: "JavaScript", icon: javascriptImage },
        { name: "TypeScript", icon: typescriptImage },
        { name: "React.js", icon: reactImage },
        { name: "Redux Toolkit", icon: reduxImage },
        { name: "Node.js", icon: nodeImage },
        { name: "Express.js", icon: expressImage },
        { name: "MongoDB", icon: mongoImage }
      ]
    },
    {
      category: "Tools & Technologies",
      items: [
        { name: "Git", icon: gitImage },
        { name: "GitHub", icon: githubImage },
        { name: "RESTful APIs", icon: apiImage },
      ]
    },
    {
      category: "Soft Skills",
      items: [
        { name: "Problem Solving", icon: "" },
        { name: "Team Collaboration", icon: "" },
        { name: "Communication", icon: "" },
        { name: "Time Management", icon: "" },
        { name: "Attention to Detail", icon: "" }
      ]
    }
  ]
}; 