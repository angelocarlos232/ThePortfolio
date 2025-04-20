import React from "react";
import { Title } from "@/components/ui/title";
import ExperienceItem from "@/components/experiences/experienceItem";

const ExperienceLayout = () => {
  return (
    <div className="flex flex-col py-8">
      <div className="flex justify-center">
        <Title size="large" variant="secondary">
          Experience
        </Title>
      </div>
      <div className="mt-12 space-y-2 max-w-4xl mx-auto">
        <ExperienceItem
          years="2024 - Present"
          title="Junior Frontend Developer"
          company="Media Meter Inc."
          description={[
            "Developed an advanced React TypeScript front-end web application with a responsive canvas-based interface for newspaper article annotations, implementing precise drawing tools (rectangles, polygons) for marking articles, dynamic merging of articles capabilities, editing annotation’s contents and metadata, and intuitive keyboard shortcuts that reduced manual correction time for the operations by 85%.",
            "Created a web application that has sophisticated media monitoring dashboard using Next.js 15, React 18, and TypeScript, that has application of CRUD and also implementing data visualization with Chart.js that enabled clients to analyze media presence across different search engines with customizable filters, date ranges, and real-time data processing.",
          ]}
          skills={[
            "React",
            "Node.js",
            "TypeScript",
            "Next.js",
            "Tailwind CSS",
            "Chart.js",
            "CRUD",
            "REST API",
            "Shadcn UI",
          ]}
          url="https://media-meter.com/"
        />
        <ExperienceItem
          years="2023 - 2023"
          title="Front-End Developer Intern"
          company="Polytechnic University of the Philippines - Psychology Department"
          description={[
            "Developed and designed the front-end of an accreditation website for BSPSY Department at PUP Psychology.",
            "Focused on identifying and resolving bugs, as well as enhancing page dynamics by integrating various animations and conducting thorough testing to ensure optimal performance.",
            "Collaborated with clients and team members to gather and incorporate required content, including images and text, ensuring alignment with project requirements.",
          ]}
          skills={["HTML", "CSS", "JavaScript"]}
          url="https://www.pup.edu.ph/cssd/bspsy"
        />
        <ExperienceItem
          years="2022 - 2022"
          title="Programmer Intern"
          company="8Box Solutions Inc."
          description={[
            "Proposed and implemented a backup and reuse system for project formats in PHPRunner, improving project initiation efficiency by 35%.",
            "Assisted in completing tasks that required fundamental programming skills, including database variable management and user interface design.",
            "Contributed to backend development by managing variables and configurations for the company's AOC/ACER monitor raffle project.",
          ]}
          skills={["PHP", "MySQL", "JavaScript"]}
          url="https://8box.solutions/"
        />
      </div>
    </div>
  );
};

export default ExperienceLayout;
