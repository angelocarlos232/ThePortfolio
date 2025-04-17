"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Title } from "../ui/title";
import { Description } from "../ui/description";
import { Text } from "../ui/text";
import { projects } from "./project";

/**
 * ProjectCarousel component displays a list of projects with a carousel for images.
 * Each project shows its details and allows navigation through associated images.
 */
const ProjectCarousel: React.FC = () => {
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

  return (
    <div className="h-[80vh] overflow-y-auto pr-4">
      {projects.map((project) => {
        const currentIndex = currentImageIndex[project.id] || 0;
        const totalImages = project.images.length;
        const currentImage = project.images[currentIndex];

        return (
          <div key={project.id} className="mb-12">
            <div className="flex justify-between w-full border-b-2 border-gray-400 border-dashed pb-2 mb-8">
              <div className="flex items-baseline">
                <Text variant="medium" className="text-gray-500 mr-2">
                  /{project.year}
                </Text>
                <Title variant="secondary" size="small">
                  {project.title}
                </Title>
              </div>
              <div className="flex gap-2 items-center">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <Description>{project.description}</Description>
            <div className="mt-6 relative">
              <Image
                className="rounded-2xl shadow-lg w-full h-auto object-cover min-h-[300px] max-h-[400px] max-w-[800px] mx-auto"
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
  );
};

export default ProjectCarousel;
