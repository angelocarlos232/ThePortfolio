import React, { useState } from "react";

const NavigationBar = () => {
  // State to control mobile menu visibility
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to handle smooth scrolling when clicking on navigation links
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string,
  ) => {
    e.preventDefault();

    // Find the section element to scroll to
    const section = document.querySelector(sectionId);

    if (section) {
      // Scroll to the section smoothly
      section.scrollIntoView({ behavior: "smooth" });
      // Close mobile menu after clicking a link
      setMobileMenuOpen(false);
    }
  };

  // Navigation links array for DRY code
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Workflow", href: "#workflow" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full">
      <h1 className="text-2xl font-bold tracking-widest leading-7">
        Angelo <br />
        Carlos
      </h1>

      {/* Desktop Navigation - Hidden on mobile */}
      <div className="hidden md:flex items-center space-x-6 lg:space-x-12 font-bold tracking-wide">
        {navLinks.map((link, index) =>
          index === 0 ? (
            <button
              key={link.name}
              className="border-2 border-gray-default px-4 py-2 rounded-full"
            >
              <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.name}
              </a>
            </button>
          ) : (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="hover:text-gray-text transition-colors"
            >
              {link.name}
            </a>
          ),
        )}
      </div>

      {/* Mobile Menu Button - Visible only on mobile */}
      <button
        className="md:hidden p-2 focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {!mobileMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-x"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        )}
      </button>

      {/* Mobile Menu - Slides in from the right when active */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white-default shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-8 space-y-6">
          <div className="flex justify-end">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="py-2 font-bold tracking-wide hover:text-gray-text transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Overlay for when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black-default bg-opacity-50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default NavigationBar;
