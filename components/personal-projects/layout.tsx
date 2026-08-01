import React, { useState, useEffect } from "react";
import { Title } from "../ui/title";
import { Description } from "../ui/description";
import { Text } from "../ui/text";
import ProjectCarousel from "./ProjectCarousel";

const PersonalProjectsLayout = () => {
  // Add state for selected filters
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile device on mount and on resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup event listener
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Handle filter selection
  const handleTechSelect = (tech: string) => {
    setSelectedTech(selectedTech === tech ? null : tech);
    // Clear year filter when tech is selected
    if (selectedYear && selectedTech !== tech) {
      setSelectedYear(null);
    }
  };

  const handleYearSelect = (year: string) => {
    setSelectedYear(selectedYear === year ? null : year);
    // Clear tech filter when year is selected
    if (selectedTech && selectedYear !== year) {
      setSelectedTech(null);
    }
  };

  // Commented out since it's not being used in the component
  // const experiences = [
  //   {
  //     company: "Tech Company A",
  //     role: "Frontend Developer",
  //     period: "2022 - Present",
  //     description:
  //       "Developed and maintained responsive web applications using React and Next.js.",
  //     technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  //   },
  //   {
  //     company: "Web Agency B",
  //     role: "Junior Web Developer",
  //     period: "2020 - 2022",
  //     description:
  //       "Collaborated on various client projects, focusing on HTML, CSS, and JavaScript implementations.",
  //     technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
  //   },
  // ];

  const technologies = [
    "React",
    "MongoDB",
    "Express",
    "Node",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "JavaScript",
  ];

  const years = ["2022", "2023", "2024", "2025"];

  return (
    <div className="bg-white p-4 md:p-6 lg:p-8 xl:p-10 rounded-lg w-full">
      <div className="flex justify-center md:justify-end border-b-2 border-gray-200 pb-6 md:pb-12 w-full">
        <Title size="large" variant="secondary">
          Personal Projects
        </Title>
      </div>

      {/* Main content - grid on desktop, single column on mobile */}
      <div className={isMobile ? "" : "grid grid-cols-3"}>
        {/* Index section - Hidden on mobile */}
        <div
          className={`${isMobile ? "hidden" : "block"} col-span-1 border-r-2 border-gray-200 pt-24`}
        >
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
                <div key={tech} className="flex items-center mb-2">
                  <span className="text-gray-500 w-16 font-mono">
                    /{index.toString().padStart(2, "0")}
                  </span>
                  <span
                    className={`${
                      selectedTech === tech
                        ? "text-blue-500 font-bold"
                        : "text-black-default"
                    } underline cursor-pointer`}
                    onClick={() => handleTechSelect(tech)}
                  >
                    {tech}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Text variant="medium" className="mb-4">
                BY YEAR:
              </Text>
              {years.map((year, index) => (
                <div key={year} className="flex items-center mb-2">
                  <span className="text-gray-500 w-16 font-mono">
                    /{index.toString().padStart(2, "0")}
                  </span>
                  <span
                    className={`${
                      selectedYear === year
                        ? "text-blue-500 font-bold"
                        : "text-black-default"
                    } underline cursor-pointer`}
                    onClick={() => handleYearSelect(year)}
                  >
                    {year}
                  </span>
                </div>
              ))}
            </div>
            {(selectedTech || selectedYear) && (
              <button
                className="mt-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                onClick={() => {
                  setSelectedTech(null);
                  setSelectedYear(null);
                }}
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Carousel section - Full width on mobile, 2/3 on desktop */}
        <div
          className={`${isMobile ? "w-full pt-6" : "h-[80vh] col-span-2 pl-20 pt-24"}`}
        >
          <ProjectCarousel
            selectedTech={selectedTech}
            selectedYear={selectedYear}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalProjectsLayout;
