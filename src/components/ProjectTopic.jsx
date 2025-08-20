import React from "react";

const ProjectTopic = ({ isCloud, handleChange }) => {
  return (
    <div className=" flex justify-center items-center">
      <div className="border flex rounded-full">
        <span
          className={`rounded-l-full cursor-pointer ${
            isCloud ? "bg-accent" : ""
          }`}
          onClick={handleChange}
        >
          <p className="p-2 border-r ">Cloud Computing</p>
        </span>
        <span
          className={` rounded-r-full cursor-pointer ${
            !isCloud ? "bg-accent" : ""
          }`}
          onClick={handleChange}
        >
          <p className="p-2">Machine Learning</p>
        </span>
      </div>
    </div>
  );
};

export default ProjectTopic;
