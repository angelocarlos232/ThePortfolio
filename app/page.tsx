import AboutSection from "@/components/about/AboutSection";
import Hero from "@/components/navbar/NavigationBar";
import Workflow from "@/components/workflow/Workflow";
import ExperienceSection from "@/components/experience/layout";
export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div className="flex justify-center items-center bg-white-default w-full h-full px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-0 space-y-12 pt-12 ">
        <div className="max-w-[1440px] min-h-[calc(120vh-12rem)] space-y-12">
          <Hero />
          <div className="flex items-center justify-center">
            <AboutSection />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="max-w-[1440px] w-[70%]">
          <section className="min-h-screen flex items-center justify-center">
            <Workflow />
          </section>
          <section className=" flex items-center justify-center h-screen">
            <ExperienceSection />
          </section>
        </div>
      </div>
    </main>
  );
}
