import React, { useState } from "react";
import ProjectTopic from "../components/ProjectTopic";
import ProjectCard from "../components/ProjectCard";
import { cloudProjects } from "../constants/Constants";
import { machineLearningProjects } from "../constants/Constants";
const Project = () => {
  const [isCloud, setIsCloud] = useState(true);
  const handleChangeProject = () => {
    setIsCloud((prev) => !prev);
  };
  return (
    <div className="mt-20  sm:mx-10 flex flex-col gap-5 pb-10">
      <div className="w-full flex justify-center items-center">
        <p className="bg-white/50 rounded-full px-2 opacity-100 font-subheading">
          Projects
        </p>
      </div>
      <div>
        <ProjectTopic isCloud={isCloud} handleChange={handleChangeProject} />
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center items-center px-5">
        {isCloud ? (
          <>
            {cloudProjects.map((curr, idx) => {
              return (
                <ProjectCard
                  heading={curr.topic}
                  githubLink={curr.githublink}
                  image={curr.image}
                  techStack={curr.techStack}
                  description={curr.description}
                  key={idx}
                />
              );
            })}
          </>
        ) : (
          <>
            {machineLearningProjects.map((curr, idx) => {
              return (
                <ProjectCard
                  heading={curr.topic}
                  githubLink={curr.githublink}
                  image={curr.image}
                  techStack={curr.techStack}
                  description={curr.description}
                  key={idx}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default Project;
