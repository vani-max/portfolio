import React from "react";
import image1 from "../../assets/image1.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
      <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange/>
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
        Transforming concepts into code—full-stack development enthusiast with a strong foundation in algorithms and problem solving.
        </p>
        <a href="#Footer"><li className='text-md transition-all duration-300 p-1 md:p-0'>Contact</li>
        <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
        </a>
      </div>
      <div>
        <img className="" src={image1} alt="" />
      </div>
    </div>
  );
};

export default Home;