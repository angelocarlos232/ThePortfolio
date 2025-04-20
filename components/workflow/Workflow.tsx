import React from "react";
import { Title } from "../ui/title";
import { Description } from "../ui/description";

const Workflow = () => {
  return (
    <div className="w-full bg-white p-4 md:p-6 lg:p-8 xl:p-10 rounded-lg">
      {/* Header Content */}
      <div className="grid grid-cols-1 md:grid-cols-[40%,60%] gap-6 md:gap-4">
        <div className="flex">
          <Title>Project Workflow</Title>
        </div>
        <div className="flex items-center text-base md:text-2xl lg:text-2xl xl:text-2xl text-center md:text-justify">
          <Description>
            This would be my workflow, which usually involves a series of steps,
            such as understanding the project requirements, creating a project
            plan, designing the user interface and user experience, writing the
            code, testing the application, and finally deploying it to the
            production environment.
          </Description>
        </div>
      </div>

      {/* Flowchart Section */}
      <div className="mt-8 md:mt-12 flex items-center justify-center">
        <div className="flex flex-col space-y-8 md:space-y-12 w-full">
          {[
            {
              phase: "Phase 1",
              steps: ["Briefing", "Research", "Wireframes", "Design / UI kit"],
            },
            {
              phase: "Phase 2",
              steps: ["Development", "Testing", "Deployment", "Maintenance"],
            },
          ].map((phase, phaseIndex) => (
            <div key={phaseIndex} className="relative">
              <div className="absolute top-0 left-0 text-xl md:text-2xl font-bold text-gray-700">
                {phase.phase}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 mt-10 md:mt-12">
                {phase.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex flex-col items-center">
                    <div className="text-base md:text-lg text-gray-500 mb-1 md:mb-2">{`0${
                      phaseIndex * 4 + stepIndex + 1
                    }`}</div>
                    <div className="bg-gray-100 px-3 sm:px-4 md:px-6 lg:px-8 py-3 md:py-4 rounded-full text-center text-sm md:text-base font-medium w-full h-16 md:h-20 lg:h-24 flex items-center justify-center">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
