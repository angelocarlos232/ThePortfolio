import { Title } from "../ui/title";

const ContactLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div>
        <Title>Contact Me</Title>
      </div>
      <div className="mt-4 bg-[#f3f4f6] p-6 rounded-lg ">
        <p className="text-lg">Google: angelocarlos232@gmail.com</p>
        <p className="text-lg">LinkedIn: Christian Angelo Carlos</p>
        <p className="text-lg">Github: angelocarlos232</p>
      </div>
    </div>
  );
};

export default ContactLayout;
