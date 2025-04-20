import React from "react";
import Description from "./Description";
import ImageHolder from "./ImageHolder";

const AboutSection = () => {
  return (
    <div className="w-full px-4 py-6 md:py-0">
      <div className="grid grid-cols-1 md:grid-cols-[4fr_3fr] gap-12 md:gap-24 lg:gap-36">
        <Description />
        <ImageHolder />
      </div>
    </div>
  );
};

export default AboutSection;
