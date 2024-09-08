import AboutSection from "@/components/about/AboutSection";
import Hero from "@/components/navbar/NavigationBar";
import Workflow from "@/components/workflow/Workflow";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center ">
      <div className="flex justify-center items-center bg-white-default w-full h-full px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-0 space-y-12 pt-12 ">
        <div className="max-w-[1440px] min-h-[calc(120vh-12rem)] space-y-12">
          <Hero />
          <AboutSection />
        </div>
      </div>
      <div className="max-w-[1440px] mt-12">
        <Workflow />
      </div>
    </main>
  );
}

