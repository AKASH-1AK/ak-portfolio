import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
const CertificateSlider = ({ images = [] }) => {
  console.log("From certificate Slider", images);
  const length = images.length;
  const [present, setPresent] = useState(0);

  const handlePrev = () => {
    setPresent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const handleNext = () => {
    setPresent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="relative">
      <FaAngleRight
        size={26}
        className=" absolute -right-1 top-[45%] cursor-pointer  z-10  text-black"
        onClick={handleNext}
      />

      <FaAngleLeft
        size={24}
        className="text-black absolute -left-0 top-[45%] cursor-pointer z-10"
        onClick={handlePrev}
      />
      <div className="flex overflow-hidden   ">
        {images.map((image, idx) => (
          <div
            className="object-cover shrink-0 w-full transition-transform duration-300  flex flex-col  "
            style={{ transform: `translateX(-${present * 100}%)` }}
          >
            <img
              key={idx}
              src={image.image}
              alt={`certificate ${idx + 1}`}
              className="rounded-lg"
             
            />
            <a
              href={image.link}
              target="_blank"
              className="text-secondary text-center lg:w-full font-body  text-[12px]  mt-2 "
            >
              {image.description}
            </a>
          </div>
        ))}
      </div>
      <p className="text-center lg:relative lg:-top-0 text-secondary">
        {present + 1} / {length}
      </p>
    </div>
  );
};

export default CertificateSlider;
