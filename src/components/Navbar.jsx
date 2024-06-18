import React from "react";
import logo from "../assets/SwaMehlogo.png";
import { FaLinkedin, FaGithub, FaMedium, FaDownload } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/swatimeher/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-600 active:animate-ping"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/swameher"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-700 active:animate-ping"
          title="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://swameher.medium.com/"
          aria-label="Medium"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-black active:animate-ping"
          title="Medium"
        >
          <FaMedium />
        </a>
        <a
          href="/SwatiMeher_2y6m.pdf"
          aria-label="Download Resume"
          download
          className="text-white hover:text-green-600 active:animate-ping"
          title="Download Resume"
        >
          <FaDownload />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
