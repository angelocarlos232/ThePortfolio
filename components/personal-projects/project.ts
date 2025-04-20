import { pictures } from "./pictures";

/**
 * Defines the structure for portfolio projects, each associated with a set of images.
 * This data can be used to dynamically render project information and images in the portfolio.
 */
export const projects = [
  {
    id: "fitnessRoutineGeneratorAndTracker",
    title: "Fitness Routine Generator and Tracker",
    description:
      "A thesis project that is a web application that allows users to generate fitness routines using hardware sensors to scan the user's body and allows users to input their body measurements and track their progress using the web application. Authentication in this web applicatiion can be done using facial recognition that uses models from the face-api.js library.",
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
    description:
      "A fun project related to breakfast ordering, a simple website for a breakfast restaurant with a simple menu and a checkout page that is made with a minimalistic design.",
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
    description:
      "A utility for creating and managing PDF forms, a web application that converts pdf forms into a form that can be filled out then be pasted into the original pdf by using canvas manipulation.",
    technologies: [
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "Next.js",
    ],
    year: "2025",
    images: pictures.formPDF,
  },
];
