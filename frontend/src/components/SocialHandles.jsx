import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FiGlobe } from "react-icons/fi";

const SocialHandles = () => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://manjaycodes.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-blue-500 transition"
      >
        <FiGlobe />
      </a>
      <a
        href="mailto:manjay6428@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-blue-500 transition"
      >
        <IoMdMail />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-blue-400 transition"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/manjay-kumar-922686203/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-blue-600 transition"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/manjay6428"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-gray-400 transition"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default SocialHandles;
