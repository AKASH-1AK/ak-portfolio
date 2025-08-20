import React from "react";
import Project from "../assets/proj-demo.png";
const ProjectCard = ({heading, githubLink, image, techStack,description}) => {
  return (
    <div className="w-full sm:w-[300px] bg-[#1a1a2e] rounded-xl shadow-md p-4 flex flex-col justify-between h-[420px]">
      {/* Heading */}
      <h2 className="text-lg font-bold text-white line-clamp-2">{heading}</h2>

      {/* GitHub Link */}
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 text-sm hover:underline"
        >
          Github Link
        </a>
      )}

      {/* Image */}
      <div className="mt-2 w-full h-[140px] overflow-hidden rounded-md bg-white flex justify-center items-center">
        <img
          src={image}
          alt="project"
          className="object-contain h-full w-full"
        />
      </div>

      {/* Description */}
      <p className="text-sm text-white mt-3 line-clamp-3">{description}</p>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 mt-3 max-h-[60px] overflow-y-auto">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-600 text-white px-2 py-1 rounded-full text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
