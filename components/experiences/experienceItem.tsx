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
      className="grid grid-cols-1 md:grid-cols-[1fr_2px_3fr] p-5 sm:p-8 md:p-10 rounded-lg gap-4 items-start hover:cursor-pointer hover:bg-[#f3f4f6] transition-all duration-300"
      onClick={() => {
        if (url) window.open(url, "_blank");
      }}
    >
      {/* Left Column: Year Duration - Full width on mobile, in own column on desktop */}
      <div className="text-center md:text-left mb-3 md:mb-0">
        <Text className="font-bold md:font-normal">{years}</Text>
      </div>

      {/* Middle Border - Hidden on mobile */}
      <div className="hidden md:block h-full bg-gray-200"></div>

      {/* Right Column: Job Details */}
      <div>
        <Title size="medium" className="text-center md:text-left">
          {title}
        </Title>
        {company && (
          <Text className="text-center md:text-left text-sm text-gray-600 mt-1">
            {company}
          </Text>
        )}
        <ul className="mt-4 list-disc pl-5">
          {description.map((desc, index) => (
            <li key={index} className="mt-2">
              <Description>{desc}</Description>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2">
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
