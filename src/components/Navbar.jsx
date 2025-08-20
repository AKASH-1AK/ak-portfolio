import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { MdClose } from "react-icons/md";
import Button from "./Button";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <nav className="flex justify-between px-5 py-6 bg-black/50 backdrop-blur-lg fixed w-full shadow-lg z-50">
        {/* //*header logo */}
        <h1>Akash's Portfolio</h1>

        {/* //*hamburger  */}
        <span className="text-white flex justify-center items-center sm:hidden cursor-pointer">
          {isOpen ? (
            <MdClose size={26} onClick={handleOpen} />
          ) : (
            <CiMenuBurger size={26} onClick={handleOpen} />
          )}
        </span>

        {/* //*sm and above screen navlist */}
        <ul className="sm:flex justify-center items-center sm:gap-3 md:gap-5 hidden">
          <li>
            <a href="#About"> About</a>
          </li>
          <li>
            <a href="#Skill">Skills</a>
          </li>
          <li>
            <a href="#Project">Projects</a>
          </li>
          <li>
            <a href="#Certificate">Certificates</a>
          </li>
        </ul>
        {/* 
        <div className="hidden lg:block">
          <Button>Download Resume</Button>
        </div> */}

        {/* //*navlist for mobile */}
        {isOpen && (
          <ul className="absolute w-full flex flex-col  justify-center items-center sm:gap-3 md:gap-5 gap-4 left-0 top-20 bg-black/100 backdrop-blur-md rounded-b-lg px-2 transition-all duration-300 sm:hidden shadow-lg z-50">
            <li className="p-2">
              <a href="#About"> About</a>
            </li>
            <li className="p-2">
              <a href="#Skill">Skills</a>
            </li>
            <li className="p-2">
              {" "}
              <a href="#Project">Projects</a>
            </li>
            <li className="p-2">
              {" "}
              <a href="#Certificate">Certificates</a>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
