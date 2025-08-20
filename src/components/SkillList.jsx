import React from "react";
import { skills } from "../constants/Constants";

const SkillList = () => {
  return (
    <div className="sm:flex sm:flex-wrap gap-3 justify-center items-center px-4 sm:px-24 grid grid-cols-2 ">
      {skills.map((skill, idx) => (
        <div
          className="flex flex-row gap-2 items-center  p-2 bg-[#1a1a2e] rounded-lg hover:scale-105 transition-all duration-300   "
          key={idx}
        >
          <img
            src={skill.url}
            alt={`image ${idx + 1}`}
            className="w-12 h-12 object-contain mx-auto "
          />
          <p className="text-sm text-center font-subheading">{skill.skill}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
