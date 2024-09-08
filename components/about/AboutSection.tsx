import React from "react";
import Description from "./Description";
import ImageHolder from "./ImageHolder";

const AboutSection = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-[4fr_3fr] gap-36">
        <Description />
        <ImageHolder />
      </div>
    </div>
  );
};

export default AboutSection;
