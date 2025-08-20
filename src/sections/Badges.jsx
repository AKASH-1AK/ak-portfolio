import React from "react";
import Badge from "../assets/badge.png";
import {badges} from "../constants/Constants";
const Badges = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row sm:justify-center sm:items-center mx-2 sm:mx-10 gap-4">
      <div className="grid grid-cols-3 basis-1/2 justify-center items-center ml-5">
        {badges.map((badge, idx) => (
          <div key={idx}>
            <img src={badge.image} alt={`badge ${idx + 1}`} width={"100px"} />;
          </div>
        ))}
      </div>
      <div className="basis-1/2 text-center">
        <h1>
          Earned digital badges that reflect practical skills in cloud,
          security, and GitHub foundations.
        </h1>
      </div>
    </div>
  );
};

export default Badges;
