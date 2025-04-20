import React from "react";

const NavigationBar = () => {
  // Function to handle smooth scrolling when clicking on navigation links
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    e.preventDefault();
    
    // Find the section element to scroll to
    const section = document.querySelector(sectionId);
    
    if (section) {
      // Scroll to the section smoothly
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-between">
      <h1 className="text-2xl font-bold tracking-widest leading-7">
        Angelo <br />
        Carlos
      </h1>
      <div className="items-center inline space-x-12 font-bold tracking-wide">
        <button className="border-2 border-gray-default px-4 py-2 rounded-full">
          <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>About</a>
        </button>
        <a href="#workflow" onClick={(e) => scrollToSection(e, '#workflow')}>Workflow</a>
        <a href="#experience" onClick={(e) => scrollToSection(e, '#experience')}>Experience</a>
        <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')}>Projects</a>
        <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Contact</a>
      </div>
    </div>
  );
};

export default NavigationBar;
