import React from "react";
import { Title } from "../ui/title";
import { Description } from "../ui/description";
import { Text } from "../ui/text";
import Image from "next/image";
import SampleImage from "@/app/assets/image.png";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Tech Company A",
      role: "Frontend Developer",
      period: "2022 - Present",
      description:
        "Developed and maintained responsive web applications using React and Next.js.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      company: "Web Agency B",
      role: "Junior Web Developer",
      period: "2020 - 2022",
      description:
        "Collaborated on various client projects, focusing on HTML, CSS, and JavaScript implementations.",
      technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
    },
  ];

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
  ];

  const years = ["2021", "2022", "2023", "2024"];

  return (
    <div className="bg-white p-4 md:p-6 lg:p-8 xl:p-10 rounded-lg w-full">
      <div className="flex justify-end border-b-2 border-gray-200 pb-4 w-full">
        <Title size="large" variant="secondary">
          Personal Experiments
        </Title>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-1 border-r-2 border-gray-200  pt-24">
          <div className="w-4/5">
            <Title variant="accent" className="mb-12">
              Index.
            </Title>
            <div className="text-lg">
              <Description>
                My adventure with different technologies to discover new
                patterns.
              </Description>
            </div>
            <div className="mt-6">
              <Text variant="medium" className="mb-4">
                BY TECHNOLOGY:
              </Text>
              {technologies.map((tech, index) => (
                <div key={tech} className="flex items-center mb-2 gap-16">
                  <span className="text-gray-500 ">
                    /{index.toString().padStart(2, "0")}
                  </span>
                  <span className="text-black-default underline">{tech}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Text variant="medium" className="mb-4">
                BY YEAR:
              </Text>
              {years.map((year, index) => (
                <div key={year} className="flex items-center mb-2 gap-16">
                  <span className="text-gray-500 ">
                    /{index.toString().padStart(2, "0")}
                  </span>
                  <span className="text-black-default underline">{year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* //
        //
        // */}

        <div className="col-span-2 pl-20 pt-24 h-screen ">
          <div className="">
            <div className="flex justify-between w-full border-b-2 border-gray-400 border-dashed pb-2 mb-8">
              <div className="flex items-baseline">
                <Text variant="medium" className="text-gray-500 mr-2">
                  /2023
                </Text>
                <Title variant="secondary" size="small">
                  Scorelab AI
                </Title>
              </div>
              <div className="flex gap-2 items-center">
                {["Next.js", "Express.js", "VectorDB"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <Description>
              Supercharge your learning with Scorelab, an AI-powered learning
              platform.
            </Description>
            <div className="mt-6">
              <Image
                className="rounded-2xl shadow-lg"
                src={SampleImage}
                alt="Scorelab AI Screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
