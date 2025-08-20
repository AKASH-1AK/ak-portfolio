import React from "react";
import CertificateSlider from "../components/CertificateSlider";
import { blogDetails } from "../constants/Constants";
import {certificates} from '../constants/Constants'
const Blogs = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center mx-2 sm:mx-10 gap-4">
      <h1 className="basis-1/2 text-center">
        Writing technical blogs to simplify cloud deployment and inspire other
        learners
      </h1>
      <div className="basis-1/2">
        <CertificateSlider images={blogDetails} />
      </div>
    </div>
  );
};

export default Blogs;
