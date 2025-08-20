import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Name or Logo */}
        <div className="text-lg font-semibold">
          © {new Date().getFullYear()} Akash
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#About" className="hover:text-gray-400">
            About
          </a>
          <a href="#Skill" className="hover:text-gray-400">
            Skills
          </a>
          <a href="#Project" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#Certificate" className="hover:text-gray-400">
            Certificates
          </a>
          <a
            href="https://dev.to/akashabish"
            target="_blank"
            className="hover:text-gray-400 "
          >
            Blogs
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-xl">
          <a
            href="https://github.com/AKASH-1AK"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/akashsasi01"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/_AKASHABISH"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
