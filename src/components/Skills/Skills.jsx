import React from "react";
import { 
  FaCss3, 
  FaFigma, 
  FaHtml5, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaPython 
} from "react-icons/fa";
import { 
  SiRedis, 
  SiMysql, 
  SiExpress, 
  SiTailwindcss 
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 color="#E34F26" size={50} />, name: "HTML" },
  { icon: <FaCss3 color="#1572B6" size={50} />, name: "CSS" },
  { icon: <FaReact color="#61DAFB" size={50} />, name: "React" },
  { icon: <FaJs color="#F7DF1E" size={50} />, name: "JavaScript" },
  { icon: <FaFigma color="#F24E1E" size={50} />, name: "Figma" },
  { icon: <FaPython color="#3776AB" size={50} />, name: "Python" },
  { icon: <SiMysql color="#4479A1" size={50} />, name: "MySQL" },
  { icon: <FaNodeJs color="#339933" size={50} />, name: "Node.js" },
  { icon: <SiExpress color="#FFFFFF" size={50} />, name: "Express.js" },
  { icon: <SiTailwindcss color="#38B2AC" size={50} />, name: "TailwindCSS" },
  { icon: <FaGitAlt color="#F1502F" size={50} />, name: "Git" },
];

const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center">My Skills</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group"
            >
              <span
                className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl 
                transform transition-transform duration-300 hover:scale-110 cursor-pointer"
              >
                {typeof skill.icon === "string" ? (
                  <span className="text-white font-semibold text-lg">
                    {skill.icon}
                  </span>
                ) : (
                  skill.icon
                )}
              </span>
              <span
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 
                bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 
                transition-opacity duration-300"
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
