"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Title } from "../ui/title";
import { Description } from "../ui/description";
import { Text } from "../ui/text";
import { projects } from "./project";

/**
 * Props for the ProjectCarousel component
 */
interface ProjectCarouselProps {
  selectedTech: string | null;
  selectedYear: string | null;
}

/**
 * ProjectCarousel component displays a list of projects with a carousel for images.
 * Each project shows its details and allows navigation through associated images.
 * Projects can be filtered by technology or year.
 */
const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  selectedTech,
  selectedYear,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: string]: number;
  }>({});

  const handleNextImage = (projectId: string, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]:
        (prev[projectId] || 0) + 1 >= totalImages
          ? 0
          : (prev[projectId] || 0) + 1,
    }));
  };

  const handlePrevImage = (projectId: string, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]:
        (prev[projectId] || 0) - 1 < 0
          ? totalImages - 1
          : (prev[projectId] || 0) - 1,
    }));
  };

  // Filter projects based on selected technology or year
  const filteredProjects = projects.filter((project) => {
    if (selectedTech) {
      return project.technologies.includes(selectedTech);
    }
    if (selectedYear) {
      return project.year === selectedYear;
    }
    return true; // No filter applied
  });

  // Display a message if no projects match the filters
  if (filteredProjects.length === 0) {
    return (
      <div className="h-[10vh] flex items-center justify-center">
        <div className="text-center p-8  rounded-lg">
          <Title variant="secondary" size="small" className="mb-4">
            No projects found
          </Title>
          <Description>
            No projects match the selected filter. Try selecting a different
            filter.
          </Description>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto pr-4 custom-scrollbar">
      <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
        {filteredProjects.map((project) => {
          const currentIndex = currentImageIndex[project.id] || 0;
          const totalImages = project.images.length;
          const currentImage = project.images[currentIndex];

          return (
            <div key={project.id} className="w-full  rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between w-full border-b-2 border-gray-400 border-dashed pb-4 mb-6">
                <div className="flex items-baseline mb-4 md:mb-0">
                  <Text variant="medium" className="text-gray-500 mr-2">
                    /{project.year}
                  </Text>
                  <Title variant="secondary" size="small">
                    {project.title}
                  </Title>
                </div>
                <div className="flex flex-wrap gap-2 items-center">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedTech === tech
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <Description>{project.description}</Description>
              </div>
              <div className="relative">
                <Image
                  className="rounded-2xl shadow-lg w-full h-auto object-cover min-h-[200px] max-h-[400px] mx-auto"
                  src={currentImage.src}
                  alt={currentImage.alt}
                  width={800}
                  height={450}
                />
                {totalImages > 1 && (
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <button
                      onClick={() => handlePrevImage(project.id, totalImages)}
                      className="bg-gray-800 text-white px-3 py-1 rounded-full"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => handleNextImage(project.id, totalImages)}
                      className="bg-gray-800 text-white px-3 py-1 rounded-full"
                    >
                      →
                    </button>
                  </div>
                )}
                {totalImages > 1 && (
                  <div className="absolute bottom-4 left-4 flex gap-1">
                    {project.images.map((_, index) => (
                      <span
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCarousel;
