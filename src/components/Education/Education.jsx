import React from "react";

const education = [
  {
    year: "2024-2028",
    degree: "Bachelor of Technology (Computer Science)",
    institution: "Newton School of Technology, Rishihood University",
    score: "8.2/10.0",
  },
  {
    year: "2022-2023",
    degree: "Intermediate (Class XII)",
    institution: "The Avenue Public School",
    score: "88.6%",
  },
  {
    year: "2021",
    degree: "Matriculation (Class X)",
    institution: "The Avenue Public School",
    score: "96%",
  },
];

const Education = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4" id="Education">
        <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Education</h1>
        <br /><br />
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="p-5 rounded-lg border border-dashed border-neutral-700"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm text-neutral-500">{edu.year}</span>
              <span className="text-sm bg-cyan-400 px-3 py-1 rounded-full">
                {edu.score}
              </span>
            </div>
            <h2 className="text-lg font-semibold text-white">{edu.degree}</h2>
            <p className="text-sm text-neutral-400 mt-1">{edu.institution}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
