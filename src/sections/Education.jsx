import React from "react";

import EducationTimeLine from "../components/EducationTimeLine";
const Education = () => {
  return (
    <div className="pt-20 flex flex-col mx-2 sm:mx-10 gap-3 ">
      <div className="w-full flex justify-center items-center">
        <p className="bg-white/50 rounded-full px-2 py-1 font-subheading opacity-100 ">
          Education
        </p>
      </div>
      <div>
        <EducationTimeLine />
      </div>
    </div>
  );
};

export default Education;
