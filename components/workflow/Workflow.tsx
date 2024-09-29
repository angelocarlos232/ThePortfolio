import React from "react";
import { Title } from "../ui/title";
import { Description } from "../ui/description";

const Workflow = () => {
  return (
    <div className="bg-white p-4 md:p-6 lg:p-8 xl:p-10 rounded-lg">
      {/* Existing Content */}
      <div className="grid grid-cols-[40%,60%] gap-4">
        <div className="flex">
          <Title>Project Workflow</Title>
        </div>
        <div className="flex items-center text-2xl text-justify">
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
      <div className="mt-12 flex items-center justify-center">
        <div className="flex flex-col space-y-12 w-[1200px]">
          {[
            { phase: "Phase 1", steps: ["Briefing", "Research", "Wireframes", "Design / UI kit"] },
            { phase: "Phase 2", steps: ["Development", "Testing", "Deployment", "Maintenance"] },
          ].map((phase, phaseIndex) => (
            <div key={phaseIndex} className="relative">
              <div className="absolute top-0 left-0 text-2xl font-bold text-gray-700 mb-4">
                {phase.phase}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-12">
                {phase.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex flex-col items-center">
                    <div className="text-lg text-gray-500 mb-2">{`0${phaseIndex * 4 + stepIndex + 1}`}</div>
                    <div className="bg-gray-100 px-8 py-4 rounded-full text-center text-base font-medium w-full h-24 flex items-center justify-center">
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
