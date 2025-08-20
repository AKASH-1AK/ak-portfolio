import React from "react";
import SkillList from "../components/SkillList";

const Skills = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-4 px-2">
      <p className="bg-white/50 px-6 py-1 rounded-full w-fit font-subheading opacity-100">
        Skills
      </p>
      <div>
        <p className="text-center pb-2">
          I work across data science, cloud, and backend — blending tools and
          technologies to solve real-world problems
        </p>
      </div>
      <div>
        <SkillList />
      </div>
    </div>
  );
};

export default Skills;
