import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  logooc,
  gwinglogo
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
  id:"skills",
  title:"Skills",
  },
  {
    id:"project",
    title:"Projects"
  },
  {
    id:"approach",
    title:"My Approach"
  },
  {
    id:"education",
    title:"Education"
  },
  {
    id: "contact",
    title: "Contact",
  },
]


const services = [
  {
    title: "Backend Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Web Developer",
    company_name: "Octanet Services PVT LTD",
    // icon: starbucks,
    icon: logooc,
    iconBg: "#fff",
    date: "March 2020 - April 2021",
    points: [
      "Developed and maintained web applications using React.js and modern frontend technologies.",

"Collaborated with cross-functional teams including designers, product managers, and developers to deliver high-quality products.",

"Implemented responsive designs and ensured seamless performance across different browsers and devices.",

"Built responsive UIs with React.js, ES6+, HTML5, CSS3, improving load speed by 20%.",
 " Created reusable components with Tailwind CSS , reducing development time by 25%."

    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Gwing Software Technologies PVT LTD",
    icon: gwinglogo,
    iconBg: "#2C2C2C",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed end-to-end web applications using React, Node.js, Express, and MongoDB, ensuring smooth functionality and responsive design.",
       "Developed and deployed web applications using JavaScript, React.js, Node.js, and Express, improving application performance by 15%",
 " Collaborated with a cross-functional team to design and integrate RESTful APIs and optimize database queries using MongoDB/MySQL.",
 "Utilized Git/GitHub for version control, improving code collaboration and reducing merge conflicts by 30%, and deployed on Vercel.",
 "Strengthened expertise in Full-Stack Development, Cloud Deployment, API Integration, Agile Practices, and Software Debugging Testing"


    ],
  },
  
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ClaimIT",
    description:
      "Web-based platform that allows users to report, search, and track lost and found items, leveraging AI for intelligent matching and providing instant notifications to ensure quick recovery of belongings. Users can submit item details, receive real-time alerts, and increase the chances of retrieving lost possessions efficiently.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "nodemailer",
        color: "pink-text-gradient",
      },
       {
        name: "Embeddings",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  
  {
    name: "ResuMate",
    description:
      "AI-powered resume analyzer that offers a live resume editor, generates job-description-based interview questions, predicts career paths, and recommends skills for professional growth. The platform provides a personalized and comprehensive career toolkit to help users optimize their resumes and enhance employability.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "pdf-parser",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
{
    name: "3D_Portfolio",
    description:
      "Immersive 3D portfolio website designed to showcase projects, skills, and achievements with interactive animations, dynamic 3D elements, smooth transitions, and an integrated contact form that allows visitors to send instant emails—creating a modern, and interactive experience that reflects personal branding and technical expertise",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "EmailJS",
        color: "green-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
