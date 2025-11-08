// import React from "react";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";
// import { testimonials } from "../constants";

// const FeedbackCard = ({
//   index,
//   testimonial,
//   name,
//   designation,
//   company,
//   image,
// }) => (
//   <motion.div
//     variants={fadeIn("", "spring", index * 0.5, 0.75)}
//     className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
//   >
//     <p className='text-white font-black text-[48px]'>"</p>

//     <div className='mt-1'>
//       <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

//       <div className='mt-7 flex justify-between items-center gap-1'>
//         <div className='flex-1 flex flex-col'>
//           <p className='text-white font-medium text-[16px]'>
//             <span className='blue-text-gradient'>@</span> {name}
//           </p>
//           <p className='mt-1 text-secondary text-[12px]'>
//             {designation} of {company}
//           </p>
//         </div>

//         <img
//           src={image}
//           alt={`feedback_by-${name}`}
//           className='w-10 h-10 rounded-full object-cover'
//         />
//       </div>
//     </div>
//   </motion.div>
// );

// const Feedbacks = () => {
//   return (
//     <div className={`mt-12 bg-black-100 rounded-[20px]`}>
//       <div
//         className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
//       >
//         <motion.div variants={textVariant()}>
//           <p className={styles.sectionSubText}>What others say</p>
//           <h2 className={styles.sectionHeadText}>Testimonials.</h2>
//         </motion.div>
//       </div>
//       <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
//         {testimonials.map((testimonial, index) => (
//           <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Feedbacks, "");


import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const phases = [
  {
    title: "Phase 1",
    heading: "Planning & Research",
    description:
      "Understanding requirements, researching solutions, and planning the project structure before writing a single line of code.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Phase 2",
    heading: "Design & Prototype",
    description:
      "Creating wireframes and prototypes to visualize the product, focusing on UI/UX and usability.",
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Phase 3",
    heading: "Launch",
    description:
      "Turning designs into functional code, building scalable applications, and deploying them for real users.",
    color: "from-blue-500 to-cyan-500",
  },
];

const PhaseCard = ({ title, heading, description, color }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
    className="relative group w-[280px] h-[200px] bg-black-200 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
  >
    {/* Rotating border effect */}
    <div
      className={`absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r ${color} animate-spin-slow`}
    ></div>

    {/* Inner content */}
    <div className="relative z-10 w-full h-full bg-black-100 rounded-2xl flex flex-col justify-center items-center text-center p-5 transition-all duration-500 group-hover:justify-start group-hover:pt-6">
      {/* Phase title tag */}
      <div
        className={`inline-block px-3 py-1 text-sm font-semibold text-white rounded-full bg-gradient-to-r ${color}`}
      >
        {title}
      </div>

      {/* Heading */}
      <h3 className="text-white text-lg font-bold mt-4 group-hover:mt-2 transition-all duration-500">
        {heading}
      </h3>

      {/* Description (hidden until hover) */}
      <p className="text-secondary text-sm mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {description}
      </p>
    </div>
  </motion.div>
);

const MyApproach = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px] p-10">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>How I work</p>
        <h2 className={styles.sectionHeadText}>My Approach.</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-8 justify-center">
        {phases.map((phase, index) => (
          <PhaseCard key={index} {...phase} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(MyApproach, "approach");
