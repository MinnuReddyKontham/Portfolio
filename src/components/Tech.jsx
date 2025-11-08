
// import React, { useState } from "react";
// import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
// import { motion } from "framer-motion";
// import { textVariant } from "../utils/motion";
// import { styles } from "../styles";
// import {
//   html,
//   css,
//   javascript,
//   reactjs,
//   redux,
//   tailwind,
//   nodejs,
//   mongodb,
//   git,
//   docker,
//   figma,
// } from "../assets"; // your assets file

// // Skills organized by category
// const skillsData = [
//   {
//     category: "Frontend",
//     skills: [
//       { name: "HTML", icon: html },
//       { name: "CSS", icon: css },
//       { name: "JavaScript", icon: javascript },
//       { name: "React", icon: reactjs },
//     ],
//   },
//   {
//     category: "Backend",
//     skills: [
//       { name: "Node.js", icon: nodejs },
//       { name: "MongoDB", icon: mongodb },
//     ],
//   },
//   {
//     category: "Frameworks / Libraries",
//     skills: [
//       { name: "Redux", icon: redux },
//       { name: "Tailwind CSS", icon: tailwind },
//     ],
//   },
//   {
//     category: "Tools",
//     skills: [
//       { name: "Git", icon: git },
//       { name: "Docker", icon: docker },
//       { name: "Figma", icon: figma },
//     ],
//   },
// ];

// const Skills = () => {
//   const [hoveredSkill, setHoveredSkill] = useState(null);

//   return (
//     <div className="w-full flex flex-col items-start gap-16">
//       <motion.div variants={textVariant()} className="w-full text-center mb-10">
//         <p className={`${styles.sectionSubText}`}>What I Know</p>
//         <h2 className={`${styles.sectionHeadText}`}>Skills & Technologies</h2>
//       </motion.div>

//       {skillsData.map((section) => (
//         <div
//           key={section.category}
//           className="flex flex-col md:flex-row items-center md:items-start md:gap-10 w-full"
//         >
//           {/* Heading on the left */}
//           <h3 className="text-white text-2xl md:text-3xl font-bold mb-4 md:mb-0 md:w-1/4 text-center md:text-left">
//             {section.category}
//           </h3>

//           {/* Skills on the right */}
//           <div className="flex flex-wrap gap-10 justify-center md:justify-start flex-1">
//             {section.skills.map((skill) => (
//               <div
//                 className="w-28 h-28 relative flex justify-center items-center"
//                 key={skill.name}
//                 onMouseEnter={() => setHoveredSkill(skill.name)}
//                 onMouseLeave={() => setHoveredSkill(null)}
//               >
//                 <BallCanvas icon={skill.icon} />

//                 {/* Tooltip */}
//                 {hoveredSkill === skill.name && (
//                   <div className="absolute bottom-0 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-lg whitespace-nowrap z-10">
//                     {skill.name}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Skills, "skills");



import React, { useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import {
  html,
  css,
  javascript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  figma,
  boot,
  express,
  postgresql,
  postman,
  java,
  python,
  vscode,
} from "../assets";

// Skills organized by category
const skillsData = [
  {
    category: "Languages",
    skills: [
     
      { name: "JavaScript", icon: javascript },
      {name:"java",icon:java},
       {name:"python",icon:python},
    
    ],
  },


  {
    category: "Frontend",
    skills: [
   
      { name: "Html", icon: html },
      { name: "Css", icon: css},
        { name: "react", icon: reactjs},
          { name: "Tailwind css", icon: tailwind},
      
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: nodejs },
       { name: "expressjs", icon: express },
     
    ],
  },

  {
    category: "DataBase",
    skills: [
      
     { name: "Mongodb", icon: mongodb },
     { name: "postgresql", icon: postgresql },
    ],
  },
  {
    category: "Frameworks / Libraries",
    skills: [
      { name: "Redux", icon: redux },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "bootstrap", icon: boot },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: git },
     { name: "vscode", icon: vscode },
     { name: "postman", icon: postman },
    ],
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Section Heading */}
      <motion.div variants={textVariant()} className="w-full text-center mb-10">
        <p className={`${styles.sectionSubText}`}>What I Know</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills & Technologies</h2>
      </motion.div>

      {/* Tabs for categories */}
      <div className="flex flex-wrap justify-center gap-5 mb-8">
        {skillsData.map((section) => (
          <button
            key={section.category}
            onClick={() => setActiveCategory(section.category)}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === section.category
                ? "bg-[#915EFF] text-white shadow-lg"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {section.category}
          </button>
        ))}
      </div>

      {/* Display skills for active category */}
      <div className="flex flex-wrap justify-center gap-10">
        {skillsData
          .find((section) => section.category === activeCategory)
          .skills.map((skill) => (
            <div
              className="w-28 h-28 relative flex justify-center items-center"
              key={skill.name}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <BallCanvas icon={skill.icon} />

              {/* Tooltip */}
              {hoveredSkill === skill.name && (
                <div className="absolute bottom-0 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-lg whitespace-nowrap z-10">
                  {skill.name}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
