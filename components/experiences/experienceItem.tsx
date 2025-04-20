import React from "react";
import { Title } from "@/components/ui/title";
import { Description } from "@/components/ui/description";
import { Text } from "@/components/ui/text";

interface ExperienceItemProps {
  years: string;
  title: string;
  company?: string;
  description: string[];
  skills: string[];
  url?: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  years,
  title,
  company,
  description,
  skills,
  url,
}) => {
  return (
    <div
      className="grid grid-cols-[1fr_2px_3fr] p-10 rounded-lg gap-4 items-start hover:cursor-pointer hover:scale-105 hover:bg-[#f3f4f6] transition-all duration-300"
      onClick={() => {
        window.open(url, "_blank");
      }}
    >
      {/* Left Column: Year Duration */}
      <div className="text-left">
        <Text>{years}</Text>
      </div>

      {/* Middle Border */}
      <div className="h-full bg-gray-200"></div>

      {/* Right Column: Job Details */}
      <div>
        <Title size="medium">{title}</Title>
        {company && (
          <Text className="text-sm text-gray-600 mt-1">{company}</Text>
        )}
        <ul className="mt-2 list-disc pl-5">
          {description.map((desc, index) => (
            <li key={index} className="mt-1">
              <Description>{desc}</Description>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-gray-100 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
