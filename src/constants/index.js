

import {
  mobile,
  link,
  lp,
  community,
  solarsystem,
  leoAi,
  linkedin,
  gmail,
  backend,
  creator,
  express,
  web,
  solidity,
  javascript,
  
  html,
  css,
  reactjs,

  tailwind,
  nodejs,
  mongodb,
  git,
  
  blockchain,
  
  github,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title:"Blockchain Developer",
    icon:blockchain,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name:"express",
    icon:express,
  },
{
  name:"solidity",
  icon:solidity,
}
];

const experiences = [
  {
    title: "HTML & CSS Foundations",
    company_name: "Self-Learning",
    icon: html,
    iconBg: "#383E56",
    date: "Mid 2024",
    points: [
      "Learned the basics of HTML5 and CSS3.",
      "Built my first static web pages and styled them using Flexbox and Grid.",
      "Understood responsive design principles for mobile-friendly layouts.",
      "Experimented with different design styles to improve creativity.",
    ],
  },
  {
    title: "JavaScript & DOM Manipulation",
    company_name: "Self-Learning",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "Late 2024",
    points: [
      "Learned core JavaScript concepts including ES6+ features.",
      "Practiced DOM manipulation and event handling.",
      "Built small interactive apps like a calculator and to-do list.",
      "Explored APIs and fetched data for dynamic content.",
    ],
  },
  {
    title: "Frontend Framework: React.js",
    company_name: "Self-Learning",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Early 2025",
    points: [
      "Mastered React basics including components, props, and state.",
      "Used React Router for multi-page navigation.",
      "Implemented animations using Framer Motion.",
      "Built and deployed a responsive portfolio site.",
    ],
  },
  {
    title: "Backend Development & Databases",
    company_name: "Self-Learning",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "Mid 2025",
    points: [
      "Learned Node.js and Express.js for building backend APIs.",
      "Connected MongoDB for database management.",
      "Practiced authentication and authorization.",
      "Built a full-stack MERN application.",
    ],
  },
  {
    title: "3D Web & Blockchain Basics",
    company_name: "Self-Learning",
    icon: threejs,
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Explored 3D web development using Three.js.",
      "Learned basics of blockchain development and Solidity.",
      "Experimented with simple smart contracts on test networks.",
      "Currently building Web3-enabled interactive projects.",
    ],
  },
  {
    title: "Blockchain & Solidity",
    company_name: "Currently Learning",
    icon: solidity,
    iconBg: "#E6DEDD",
    date: "2025 - Present",
    points: [
      "Learning the fundamentals of blockchain technology.",
      "Writing and testing basic smart contracts using Solidity.",
      "Deploying contracts on Ethereum test networks.",
      "Exploring Web3.js integration with frontend applications.",
    ],
  },
];


const projects = [
  {
    name: "Solar System",
    description:
      "Interactive 3D simulation of our solar system, built using Three.js and React Three Fiber. Users can explore planets, moons, and orbital paths in real-time.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "threejs", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: solarsystem,
    source_code_link: "https://github.com/espresso-elysium/SolarSystem-threejs-",
    live_link:"https://solar-system-threejs-sigma.vercel.app/", 
  },
    {
    name: "Community Notice Board",
    description:
      "A platform that allows communities to share announcements, events, and important updates in real time, improving communication within local groups.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: community, 
    source_code_link: "https://github.com/espresso-elysium/Community-notice-board",
    live_link: "https://community-notice-board-gilt.vercel.app/",
  },
  {
    name: "Leo AI",
    description:
      "An AI-powered chatbot platform that enables users to interact with a conversational model for answering questions and generating text responses.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "openai-api", color: "pink-text-gradient" },
    ],
    image: leoAi, 
    source_code_link: "https://github.com/espresso-elysium/LEOAI",
    live_link: "https://leoai-nym8.onrender.com/",
  },
];



const socials = [
  {
    name: "LinkedIn",
    img: linkedin,
    link: "https://www.linkedin.com/in/kritika-tyagi-910bb3319/",
  },
  {
    name: "GitHub",
    img: github,
    link: "https://github.com/espresso-elysium",
  },
  {
    name: "Gmail",
    img: gmail,
    link: "espressoelysium@gmail.com", 
  },
];

export { services, technologies, experiences, projects,socials };