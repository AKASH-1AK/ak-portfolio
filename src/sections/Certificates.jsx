import React, { useState } from "react";
import {certificates} from '../constants/Constants'
import CertificateSlider from "../components/CertificateSlider";

const Certificates = () => {
  const [certificate, setCertificate] = useState(certificates); 

  return (
    <div className="mx-2 sm:mx-10 flex flex-col gap-5 pb-7 lg:min-h-[50vh]">
      <div className="flex justify-center items-center">
        <p className="bg-white/50 rounded-full px-2 opacity-100">
          Certificates
        </p>
      </div>
      <div className="sm:flex-row flex flex-col gap-4">
        <div className="basis-1/2 flex justify-center items-center ">
          <h1 className=" text-secondary text-center ">
            Certifications that validate my skills and commitment to continuous
            learning in cloud, data, and development
          </h1>
        </div>
        <div className="basis-1/2 flex justify-center items-center ">
          <CertificateSlider images={certificate} />
        </div>
      </div>
    </div>
  );
};

export default Certificates;
