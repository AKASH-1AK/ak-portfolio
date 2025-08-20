import React from "react";
import Info from "../components/Info";
const AboutInfo = () => {
  return (
    <div className="flex flex-col sm:flex-row   sm:py-10 lg:mb-10 mx-2 lg:mx-10 gap-4">
      <h1 className=" basis-1/2 text-center flex justify-center items-center">
        From projects to blogs, certs to badges — I’m always building and
        growing
      </h1>

      <div className="flex justify-center items-center basis-1/2">
        <Info />
      </div>
    </div>
  );
};

export default AboutInfo;
