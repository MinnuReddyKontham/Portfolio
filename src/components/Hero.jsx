


import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Hero Content */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Left Vertical Line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Main Text */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Minnu</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Turning Ideas into Scalable Web Solutions with AI Insights
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex gap-5">
            {/* Download Resume */}
            <a
              // href="/Minnu_Reddy_Resume.pdf" // must be in public/
              href="http://localhost:5173/Minnu_Reddyy_Resume.pdf
"
              download="Minnu_Reddy_Resume.pdf"
              className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#915EFF] to-purple-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Download Resume
            </a>

            
            
          </div>
        </div>
      </div>

      {/* 3D Canvas Background */}
      <ComputersCanvas />

      {/* Scroll Down */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-5">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;



// import React from "react";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
// import ResumePDF from "../assets/Minnu_Reddyy_Resume.pdf"
// const Hero = () => {
//   const handleScrollToContact = (e) => {
//     e.preventDefault();
//     const el = document.getElementById("contact");
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   return (
//     <section className="relative w-full h-screen mx-auto">
//       {/* Hero Content */}
//       <div
//         className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         {/* Left Vertical Line */}
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         {/* Main Text */}
//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className="text-[#915EFF]">Minnu</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             Turning Ideas into Scalable Web Solutions with AI Insights
//           </p>

//           {/* Action Buttons */}
//           <div className="mt-8 flex gap-5">
//             {/* Download Resume */}
//             <a
//               // href="/Minnu_Reddyy_Resume.pdf" // must be in public/

//               href={ResumePDF}
//               download="Minnu_Reddyy_Resume.pdf"
//               // onClick={() => alert("Resume download started! ✅")}
//               className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#915EFF] to-purple-700 hover:shadow-lg hover:scale-105 transition-all duration-300"
//             >
//               Download Resume
//             </a>

//             {/* Contact Me */}
//             {/* <button
//               onClick={handleScrollToContact}
//               className="px-6 py-3 rounded-lg font-semibold border border-[#915EFF] text-white hover:bg-[#915EFF] hover:text-white transition-all duration-300"
//             >
//               Contact Me
//             </button> */}
//           </div>
//         </div>
//       </div>

//       {/* 3D Canvas Background */}
//       <ComputersCanvas />

//       {/* Scroll Down */}
//       <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-5">
//             <motion.div
//               animate={{ y: [0, 24, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// import React from "react";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
// import ResumePDF from "../assets/Minnu_Reddyy_Resume.pdf"; // make sure file name matches exactly

// const Hero = () => {
//   const handleScrollToContact = (e) => {
//     e.preventDefault();
//     const el = document.getElementById("contact");
//     if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   // Force download function
//   const downloadResume = () => {
//     const link = document.createElement("a");
//     link.href = ResumePDF;
//     link.download = "Minnu_Reddyy_Resume.pdf"; // name for download
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <section className="relative w-full h-screen mx-auto">
//       {/* Hero Content */}
//       <div
//         className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         {/* Left Vertical Line */}
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         {/* Main Text */}
//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className="text-[#915EFF]">Minnu</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             Turning Ideas into Scalable Web Solutions with AI Insights
//           </p>

//           {/* Action Buttons */}
//           <div className="mt-8 flex gap-5">
//             {/* Download Resume */}
//             <button
//               onClick={downloadResume}
//               className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#915EFF] to-purple-700 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
//             >
//               Download Resume
//             </button>

//             {/* Contact Me */}
//             {/* <button
//               onClick={handleScrollToContact}
//               className="px-6 py-3 rounded-lg font-semibold border border-[#915EFF] text-white hover:bg-[#915EFF] hover:text-white transition-all duration-300"
//             >
//               Contact Me
//             </button> */}
//           </div>
//         </div>
//       </div>

//       {/* 3D Canvas Background */}
//       <ComputersCanvas />

//       {/* Scroll Down */}
//       <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-5">
//             <motion.div
//               animate={{ y: [0, 24, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// import React from "react";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {
//   const handleScrollToContact = (e) => {
//     e.preventDefault();
//     const el = document.getElementById("contact");
//     if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   // Force download function
//   // const downloadResume = () => {
//   //   const link = document.createElement("a");
//   //   link.href = "/Minnu_Reddyy_Resume.pdf"; // file in public folder
//   //   link.download = "Minnu_Reddyy_Resume.pdf";
//   //   document.body.appendChild(link);
//   //   link.click();
//   //   document.body.removeChild(link);
//   // };


//   const downloadResume = () => {
//   fetch("/Minnu_Reddyy_Resume.pdf")
//     .then((response) => response.blob())
//     .then((blob) => {
//       const url = window.URL.createObjectURL(blob);
//       const link = document.createElement("a");
//       link.href = url;
//       link.setAttribute("download", "Minnu_Reddyy_Resume.pdf");
//       document.body.appendChild(link);
//       link.click();
//       link.parentNode.removeChild(link);
//       window.URL.revokeObjectURL(url); // free memory
//     })
//     .catch(() => alert("Failed to download resume."));
// };


//   return (
//     <section className="relative w-full h-screen mx-auto">
//       {/* Hero Content */}
//       <div
//         className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         {/* Left Vertical Line */}
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         {/* Main Text */}
//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className="text-[#915EFF]">Minnu</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             Turning Ideas into Scalable Web Solutions with AI Insights
//           </p>

//           {/* Action Buttons */}
//           <div className="mt-8 flex gap-5">
//             {/* Download Resume */}
//             <button
//               onClick={downloadResume}
//               className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#915EFF] to-purple-700 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
//             >
//               Download Resume
//             </button>

//             {/* Contact Me */}
//             {/* <button
//               onClick={handleScrollToContact}
//               className="px-6 py-3 rounded-lg font-semibold border border-[#915EFF] text-white hover:bg-[#915EFF] hover:text-white transition-all duration-300"
//             >
//               Contact Me
//             </button> */}
//           </div>
//         </div>
//       </div>

//       {/* 3D Canvas Background */}
//       <ComputersCanvas />

//       {/* Scroll Down */}
//       <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-5">
//             <motion.div
//               animate={{ y: [0, 24, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// import React from "react";
// import { motion } from "framer-motion";
// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {
//   const handleScrollToContact = (e) => {
//     e.preventDefault();
//     const el = document.getElementById("contact");
//     if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   // Force download function
//   const downloadResume = () => {
//     fetch("/Minnu_Reddyy_Resume.pdf")
//       .then((response) => {
//         if (!response.ok) throw new Error("File not found");
//         return response.blob();
//       })
//       .then((blob) => {
//         const url = window.URL.createObjectURL(blob);
//         const link = document.createElement("a");
//         link.href = url;
//         link.download = "Minnu_Reddyy_Resume.pdf";
//         document.body.appendChild(link);
//         link.click();
//         link.remove();
//         window.URL.revokeObjectURL(url);
//       })
//       .catch(() => alert("Failed to download resume."));
//   };

//   return (
//     <section className="relative w-full h-screen mx-auto">
//       {/* Hero Content */}
//       <div
//         className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         {/* Left Vertical Line */}
//         <div className="flex flex-col justify-center items-center mt-5">
//           <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
//           <div className="w-1 sm:h-80 h-40 violet-gradient" />
//         </div>

//         {/* Main Text */}
//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className="text-[#915EFF]">Minnu</span>
//           </h1>
//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             Turning Ideas into Scalable Web Solutions with AI Insights
//           </p>

//           {/* Action Buttons */}
//           <div className="mt-8 flex gap-5">
//             <button
//               onClick={downloadResume}
//               className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#915EFF] to-purple-700 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
//             >
//               Download Resume
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* 3D Canvas Background */}
//       <ComputersCanvas />

//       {/* Scroll Down */}
//       <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
//         <a href="#about">
//           <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-5">
//             <motion.div
//               animate={{ y: [0, 24, 0] }}
//               transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
//               className="w-3 h-3 rounded-full bg-secondary mb-1"
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;
