import { Title } from "../ui/title";

const ContactLayout = () => {
  const contactInfo = [
    { platform: "Google", value: "angelocarlos232@gmail.com" },
    { platform: "LinkedIn", value: "Christian Angelo Carlos" },
    { platform: "Github", value: "angelocarlos232" },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
      <div>
        <Title>Contact Me</Title>
      </div>
      <div className="mt-4 md:mt-6 bg-[#f3f4f6] p-4 md:p-6 rounded-lg w-full">
        {contactInfo.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center py-2"
          >
            <span className="font-medium text-base md:text-lg md:w-24">
              {item.platform}:
            </span>
            <span className="text-base md:text-lg text-gray-700 break-all">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactLayout;
