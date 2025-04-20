"use client";

import AboutSection from "@/components/about/AboutSection";
import Hero from "@/components/navbar/NavigationBar";
import Workflow from "@/components/workflow/Workflow";
import PersonalProjectsLayout from "@/components/personal-projects/layout";
import ExperienceLayout from "@/components/experiences/layout";
import Footer from "@/components/Footer";
import ContactLayout from "@/components/contact/layout";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Custom Scrollbar Logic
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", updateScrollbar);
      window.addEventListener("resize", updateScrollbar);

      function updateScrollbar() {
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
      }

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
    }

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", updateScrollbar);
      window.removeEventListener("resize", updateScrollbar);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <main className="w-full flex flex-col items-center justify-center overflow-y-auto no-scrollbar">
      <div className="flex justify-center items-center bg-white-default w-full h-full px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-0 space-y-12 pt-12 ">
        <div className="max-w-[1440px] min-h-[calc(120vh-12rem)] space-y-12">
          <Hero />
          <div className="flex items-center justify-center">
            <AboutSection />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full mb-36">
        <div className="max-w-[1440px] w-[70%]">
          <section className="min-h-screen flex items-center justify-center">
            <Workflow />
          </section>
          <section className="flex items-center justify-center mb-36">
            <ExperienceLayout />
          </section>
          <section className="flex items-center justify-center ">
            <PersonalProjectsLayout />
          </section>
        </div>
        <div className="flex items-center justify-center mt-40">
          <ContactLayout />
        </div>
      </div>
      <div className="pt-12">
        <Footer />
      </div>
      {/* Custom Horizontal Scrollbar */}
      <div className="fixed bottom-0 left-0 w-full h-3 bg-gray-200 z-50">
        <div
          id="scrollbarThumb"
          className="h-3 bg-[#211111] transition-all"
          style={{ width: "0%" }}
        ></div>
      </div>
    </main>
  );
}
function updateScrollbar(this: Window, ev: Event) {
  throw new Error("Function not implemented.");
}
