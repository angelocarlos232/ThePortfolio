import React from "react";
import { Title } from '../ui/title';
import { Description } from '../ui/description';

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
            such as understanding the project requirements, creating a project plan, 
            designing the user interface and user experience, writing the code, 
            testing the application, and finally deploying it to the production 
            environment.
          </Description>
        </div>
      </div>

      {/* Flowchart Section */}
      <div className="mt-8">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-gray-200 p-4 rounded-full text-center">Briefing</div>
              <div className="w-1 h-8 bg-gray-300 mt-2"></div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-gray-200 p-4 rounded-full text-center">Research</div>
              <div className="w-1 h-8 bg-gray-300 mt-2"></div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-gray-200 p-4 rounded-full text-center">Wireframes</div>
              <div className="w-1 h-8 bg-gray-300 mt-2"></div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-gray-200 p-4 rounded-full text-center">Design</div>
              <div className="w-1 h-8 bg-gray-300 mt-2"></div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-gray-200 p-4 rounded-full text-center">Development</div>
              <div className="w-1 h-8 bg-gray-300 mt-2"></div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-gray-200 p-4 rounded-full text-center">Testing</div>
              <div className="w-1 h-8 bg-gray-300 mt-2"></div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-gray-200 p-4 rounded-full text-center">Deployment</div>
              <div className="w-1 h-8 bg-gray-300 mt-2"></div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-gray-200 p-4 rounded-full text-center">Maintenance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
