import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl font-bold tracking-widest leading-7">Angelo <br />Carlos</h1>
      <div className="items-center inline space-x-12 font-bold tracking-wide">
        <button className="border-2 border-gray-default px-4 py-2 rounded-full"><a href="#about">About</a></button>
        <a href="#about">Workflow</a>
        <a href="#projects">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Hero;
