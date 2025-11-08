// import React from "react";
// import { motion } from "framer-motion";
// import { SectionWrapper } from "../hoc";
// import { textVariant } from "../utils/motion";
// import { styles } from "../styles";

// const educationData = [
//   {
//     degree: "B.Tech in Cyber Security",
//     institute: "Sri Indu College of Engineering and Technology",
//     duration: "2022 - 2026",
//     cgpa: "9.34",
//   },
//   {
//     degree: "Intermediate (MPC)",
//     institute: "Sri Chaithanya Junior College",
//     duration: "2020 - 2022",
//     cgpa: "97.5%",
//   },
//   {
//     degree: "SSC",
//     institute: "Anna Memorial High School",
//     duration: "2018 - 2020",
//     cgpa: "100%",
//   },
// ];

// const Education = () => {
//   return (
//     <div className="w-full flex flex-col items-center">
//       {/* Section Heading */}
//       <motion.div variants={textVariant()} className="text-center mb-10">
//         <p className={`${styles.sectionSubText}`}>My Journey</p>
//         <h2 className={`${styles.sectionHeadText}`}>Education</h2>
//       </motion.div>

//       {/* Timeline */}
//       <div className="relative w-full max-w-3xl flex flex-col before:content-[''] before:absolute before:left-4 before:top-0 before:h-full before:w-1 before:bg-[#915EFF]">
//         {educationData.map((edu, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             className="relative mb-10 pl-12"
//           >
//             {/* Dot on timeline */}
//             <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-[#915EFF] border-2 border-white" />

//             {/* Education Card */}
//             <div className="bg-black-100 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
//               <h3 className="text-white text-xl font-semibold mb-1">{edu.degree}</h3>
//               <p className="text-white-100 mb-1">{edu.institute}</p>
//               <p className="text-gray-400 mb-1">{edu.duration}</p>
//               {edu.cgpa && <p className="text-[#915EFF] font-medium">{edu.cgpa}</p>}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Education, "education");


import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const educationData = [
  {
    degree: "B.Tech in Cyber Security",
    institute: "Sri Indu College of Engineering and Technology",
    duration: "2022 - 2026",
    cgpa: "9.34/10",
  },
  {
    degree: "Intermediate (MPC)",
    institute: "Sri Chaithanya  Junior College",
    duration: "2020 - 2022",
    cgpa: "97.5%",
  },
  {
    degree: "SSC",
    institute: "Anna Memorial High School",
    duration: "2018 - 2020",
    cgpa: "100%",
  },
];

const Education = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Section Heading */}
      <motion.div variants={textVariant()} className="text-center mb-10">
        <p className={`${styles.sectionSubText}`}>My Journey</p>
        <h2 className={`${styles.sectionHeadText}`}>Education</h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative w-full max-w-3xl flex flex-col before:content-[''] before:absolute before:left-4 before:top-0 before:h-full before:w-1 before:bg-[#915EFF]">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative mb-10 pl-12 flex items-center"
          >
            {/* Dot in middle of card */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-[#915EFF] border-2 border-white" />

            {/* Education Card */}
            <div className="bg-black-100 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 w-full">
              <h3 className="text-white text-xl font-semibold mb-1">{edu.degree}</h3>
              <p className="text-white-100 mb-1">{edu.institute}</p>
              <p className="text-gray-400 mb-1">{edu.duration}</p>
              {edu.cgpa && <p className="text-[#915EFF] font-medium">{edu.cgpa}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
