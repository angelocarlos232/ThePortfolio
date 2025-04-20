import React from "react";

const Description = () => {
  return (
    <div className="min-h-[300px] md:min-h-[500px]">
      <div className="flex flex-col items-center justify-center relative w-full h-full">
        <div className="self-end mr-2 mb-4">
          <h2 className="text-lg md:text-xl font-bold border-2 border-gray-default py-2 md:py-3 px-4 md:px-6 rounded-full text-black-default">
            JUNIOR
          </h2>
        </div>
        <div className="w-full">
          <h1
            className="text-center font-bold tracking-wider text-black-default mb-6 md:mb-8"
            style={{ fontSize: "clamp(2rem, 8vw, 7rem)" }}
          >
            FRONT-END <br /> DEVELOPER
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-gray-500 text-sm md:text-base font-medium text-center md:text-justify">
            <p className="col-span-1">
              Hello there! I&apos;m Angelo Carlos, a Junior Frontend Developer
              dedicated to crafting engaging and visually appealing user
              experiences. My passion lies in combining aesthetics with
              functionality to build intuitive and interactive web applications.
            </p>
            <p className="col-span-1">
              With a strong foundation in HTML, CSS, and JavaScript, I strive to
              stay up-to-date with the latest web technologies and trends, like Next.js and React.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
