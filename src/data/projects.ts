import Project1 from '../assets/Project1.jpg'

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 5,
    title: " Chat-application",
    description: "Real-time chat app with secure authentication and video calling feature",
    longDescription: "NestifyX Chat is a full-stack real-time chat application built with the MERN stack. It features secure user authentication using Firebase Google Sign-In and JWT, supports image uploads via Cloudinary, and integrates the Stream API for seamless messaging. The app offers an intuitive interface, responsive design, and smooth, real-time user interactions.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Firebase", "JWT"],
    githubUrl: "https://github.com/indranuj17/ChatApp",
    liveUrl: "https://nestify-x.onrender.com",
    featured: false
  },
  {
    id: 4,
    title: "URL-Shortner",
    description: "Url-shortner rendering smart applications in real life",
    longDescription: "A full-stack web application that allows users to shorten long URLs into concise, easy-to-share links. Built using MongoDB, Express.js, React.js, and Node.js, it supports user authentication, link analytics (like click count and creation date), and custom short link generation. The app features a sleek UI, secure backend, and real-time feedback, making it a practical and efficient tool for managing and sharing URLs",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Full Stack",
    technologies: ["React", "Node.js", "Express.js", "MongoDB","Axios"],
    githubUrl: "https://github.com/indranuj17/URL_Shortner",
    liveUrl: "",
    featured: false
  },
  {
    id: 3,
    title: "Password Generator",
    description: "Responsive dashboard for project and task management",
    longDescription: "A comprehensive project management tool with drag-and-drop functionality, team collaboration features, time tracking, and analytics. Includes Kanban boards, Gantt charts, and real-time notifications for enhanced productivity.",
    image: "https://media.istockphoto.com/id/1412282189/photo/lock-network-technology-concept.jpg?s=612x612&w=0&k=20&c=hripuxLs9pS_7Ln6YWQR-Ow2_-BU5RdQ4vOY8s1q1iQ=",
    category: "Web",
    technologies: ["HTML","CSS","Javascript","React"],
    githubUrl: "https://github.com/indranuj17/PasswordGenerator",
    liveUrl: "https://password-creator-24.netlify.app/",
    featured: false
  },
  {
    id: 1,
    title: "Weather Analytics App",
    description: "Weather tracking with data visualization and predictions",
    longDescription: "Advanced weather application featuring real-time weather data, historical analysis, interactive maps, and predictive modeling. Includes detailed charts, weather alerts, and location-based recommendations.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Web",
    technologies: ["HTML","CSS","Javascript", "Weather API"],
    githubUrl: "https://github.com/indranujdev/weather-app",
    liveUrl: "https://weather-analytics-demo.netlify.app",
    featured: false
  },
  {
    id: 2,
    title: "React Portfolio",
    description: "Collection of my skills,projects and experience",
    longDescription: "A modern, responsive personal portfolio built with React.js to showcase projects, skills, and experience. Integrated with animations using Framer Motion, dynamic content from constants, and styled-components for custom theming. Features include a dark/light mode toggle, smooth scroll navigation, and modular code structure for scalability and performance.",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Web",
    technologies: ["HTML","CSS","TailwindCSS","Javascript","Typescript","React","Framer"],
    githubUrl: "https://github.com/indranuj17/MyPortfolio/tree/main",
    liveUrl: "",
    featured:   false
  },
  // {
  //   id: 6,
  //   title: "Blockchain Voting System",
  //   description: "Secure voting platform using blockchain technology",
  //   longDescription: "A decentralized voting system built on blockchain technology ensuring transparency, security, and immutability. Features voter authentication, real-time results, and comprehensive audit trails.",
  //   image: "https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg?auto=compress&cs=tinysrgb&w=800",
  //   category: "Full Stack",
  //   technologies: ["Solidity", "Web3.js", "React", "Ethereum", "MetaMask"],
  //   githubUrl: "https://github.com/indranujdev/blockchain-voting",
  //   liveUrl: "https://blockchain-voting-demo.netlify.app",
  //   featured: false
  // }
];

export const categories = ["All", "Full Stack", "AI", "Web"];