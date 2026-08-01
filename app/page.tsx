"use client";

import AboutSection from "@/components/about/AboutSection";
import NavigationBar from "@/components/navbar/NavigationBar";
import Workflow from "@/components/workflow/Workflow";
import PersonalProjectsLayout from "@/components/personal-projects/layout";
import ExperienceLayout from "@/components/experiences/layout";
import Footer from "@/components/Footer";
import ContactLayout from "@/components/contact/layout";
import { useEffect, useState } from "react";

// ScrollToTop component that appears when scrolled down
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolled down 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-12 right-4 sm:right-8 p-3 rounded-full bg-[#f3f4f6] text-black-default z-50 shadow-lg transition-all duration-300 hover:bg-[#e2e2e2] focus:outline-none ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      {/* Up arrow SVG icon */}
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
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
};

export default function Home() {
  // State to track viewport size
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on client-side
    if (typeof window !== "undefined") {
      // Function to update mobile state
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Set initial state
      handleResize();

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Define updateScrollbar function outside the if statement to access it in cleanup
      let updateScrollbar = () => {}; // Default empty function

      // Custom Scrollbar Logic
      // Define updateScrollbar function
      updateScrollbar = () => {
        const totalHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollPosition = window.scrollY;
        const thumb = document.getElementById("scrollbarThumb");
        if (thumb && totalHeight > 0) {
          const thumbWidth =
            (window.innerWidth * window.innerHeight) /
            document.documentElement.scrollHeight;
          thumb.style.width = `${thumbWidth}px`;
          const maxScroll = window.innerWidth - thumbWidth;
          const scrollPercent = scrollPosition / totalHeight;
          thumb.style.transform = `translateX(${scrollPercent * maxScroll}px)`;
        }
      };

      window.addEventListener("scroll", updateScrollbar);
      window.addEventListener("resize", updateScrollbar);

      const scrollbar = document.querySelector(".fixed.bottom-0");
      if (scrollbar) {
        scrollbar.addEventListener("mousedown", (e) => {
          const thumb = document.getElementById("scrollbarThumb");
          if (!thumb || e.target === thumb) return;
          const rect = scrollbar.getBoundingClientRect();
          const clickX = (e as MouseEvent).clientX - rect.left;
          const thumbWidth = thumb.offsetWidth;
          const maxScroll = window.innerWidth - thumbWidth;
          const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercent = clickX / maxScroll;
          window.scrollTo({
            top: scrollPercent * totalHeight,
            behavior: "smooth",
          });
        });
      }

      // Initial update
      setTimeout(updateScrollbar, 100);

      // CSS to hide default scrollbar for different browsers
      const style = document.createElement("style");
      style.textContent = `
        html, body {
          overflow-y: auto !important;
          scrollbar-width: none !important; /* Firefox */
          -ms-overflow-style: none !important; /* IE and Edge */
        }
        html::-webkit-scrollbar, body::-webkit-scrollbar {
          display: none !important; /* Chrome, Safari, Opera */
        }
        .no-scrollbar {
          overflow-y: auto !important;
          scrollbar-width: none !important; /* Firefox */
          -ms-overflow-style: none !important; /* IE and Edge */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none !important; /* Chrome, Safari, Opera */
        }
      `;
      document.head.appendChild(style);

      // Cleanup event listeners on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", updateScrollbar);
        window.removeEventListener("resize", updateScrollbar);
      };
    }
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <main className="w-full flex flex-col items-center justify-center overflow-y-auto no-scrollbar">
      <div className="flex justify-center items-center bg-white-default w-full h-full px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-0 space-y-8 md:space-y-12 pt-6 md:pt-12">
        <div className="w-full max-w-[1440px] min-h-[calc(100vh-6rem)] md:min-h-[calc(120vh-12rem)] space-y-8 md:space-y-12">
          <NavigationBar />
          <div id="about" className="flex items-center justify-center">
            <AboutSection />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full mb-20 md:mb-36">
        <div className="max-w-[1440px] w-full px-4 sm:px-6 md:w-[85%] lg:w-[80%] xl:w-[70%]">
          <section
            id="workflow"
            className="min-h-[80vh] md:min-h-screen flex items-center justify-center py-12 md:py-0"
          >
            <Workflow />
          </section>
          <section
            id="experience"
            className="flex items-center justify-center mb-20 md:mb-36"
          >
            <ExperienceLayout />
          </section>
          <section id="projects" className="flex items-center justify-center">
            <PersonalProjectsLayout />
          </section>
        </div>
        <div
          id="contact"
          className="flex items-center justify-center mt-20 md:mt-40 w-full px-4"
        >
          <ContactLayout />
        </div>
      </div>
      <div className="pt-8 md:pt-12">
        <Footer />
      </div>
      {/* Custom Horizontal Scrollbar - Hidden on mobile */}
      <div className="fixed bottom-0 left-0 w-full h-3 bg-gray-200 z-50 hidden md:block">
        <div
          id="scrollbarThumb"
          className="h-3 bg-[#211111] transition-all"
          style={{ width: "0%" }}
        ></div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </main>
  );
}
