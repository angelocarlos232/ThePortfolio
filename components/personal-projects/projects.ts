import { pictures } from "./pictures";

export const projects = [
  {
    name: "Fitness Routine Generator and Tracker",
    description:
      "A web application that allows users to generate and track their fitness routines using hardware sensors.",
    technologies: [
      "React.js",
      "Express.js",
      "MongoDB",
      "Node.js",
      "Tailwind CSS",
      "Firebase",
    ],
    year: "2023",
    pictures: pictures.fitnessRoutineGeneratorAndTracker,
  },
  {
    name: "Pippin's Breakfast",
    description:
      "My first project, a simple website for a breakfast restaurant.",
    technologies: ["React.js", "Express.js", "MongoDB", "Node.js", "CSS"],
    year: "2021",
    pictures: pictures.pippinsBreakfast,
  },
  {
    name: "FormPDF",
    description:
      "A web application that converts pdf forms into a form that can be filled out then be pasted into the original pdf by using canvas manipulation.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Next.js"],
    year: "2025",
    pictures: pictures.formPDF,
  },
];
