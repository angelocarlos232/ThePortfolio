import { pictures } from "./pictures";

/**
 * Defines the structure for portfolio projects, each associated with a set of images.
 * This data can be used to dynamically render project information and images in the portfolio.
 */
export const projects = [
  {
    id: "fitnessRoutineGeneratorAndTracker",
    title: "Fitness Routine Generator and Tracker",
    description: "A tool to generate and track personalized fitness routines.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
    year: "2022",
    images: pictures.fitnessRoutineGeneratorAndTracker,
  },
  {
    id: "pippinsBreakfast",
    title: "Pippin's Breakfast",
    description: "A fun project related to breakfast planning or recipes.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
    year: "2023",
    images: pictures.pippinsBreakfast,
  },
  {
    id: "formPDF",
    title: "FormPDF",
    description: "A utility for creating and managing PDF forms.",
    technologies: ["Node.js", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
    year: "2025",
    images: pictures.formPDF,
  },
];
