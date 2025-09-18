import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          vani.vashishtha2024@nst.rishihood.edu.in
        </li>
        <a href="https://www.linkedin.com/in/vanivashishtha111/">
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          linkedin.com/vanivashishtha111
        </li>
        </a>
        <a href="https://github.com/vani-max?tab=repositories">
        <li className="flex gap-1 items-center">
          <FaGithub />
          github.com/vani-max
        </li>
        </a>
      </ul>
    </div>
  );
};

export default Footer;