import React, { useState, useEffect } from "react";

const projects = [
  {
    img: "Waterboy.png",
    title: "Water Boy",
    description: "Shopify UI/UX Design",
    top: "top-10",
  },
  {
    img: "frame1.png",
    title: "Wild",
    description: "E-Commerce, Shopify",
    top: "top-20",
  },
  {
    img: "frame2.png",
    title: "Andrea Maack",
    description: "E-Commerce, Shopify",
    top: "top-30",
  },
  {
    img: "frame3.png",
    title: "Jot",
    description: "E-Commerce, Shopify",
    top: "top-40",
    width: "w-full",
  },
  {
    img: "frame4.png",
    title: "Fweygo",
    description: "E-Commerce, Shopify",
    top: "top-50",
    width: "w-full",
  },
  {
    img: "frame5.png",
    title: "OFFLIMITS",
    description: "Design & Development UI&UX Design",
    top: "top-60",
  },
];

const StickyProjectSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen px-4 sm:px-8 md:px-16">
      {projects.map((project, index) => {
        const translateValue = `translate-x-[${(scrollPosition / 10) % 50}px]`;

        return (
          <div
            key={index}
            className={` mx-auto max-w-xs sm:max-w-sm md:max-w-full sticky ${project.top} flex flex-col items-center`}
          >
            <div className="relative w-full">
              <img
                src={project.img}
                alt={project.title}
                className={`h-auto w-full transition-transform duration-500 ease-in-out group-hover:scale-105 ${translateValue} `}
              />
              <div className="absolute inset-0 flex flex-col justify-end items-start bg-gradient-to-t from-black/60 via-black/20 to-transparent p-2 sm:p-4">
                <p className="text-white text-sm sm:text-lg md:text-2xl font-bold text-left">
                  {project.title} <br />
                  <span className="text-yellow-500 text-xs sm:text-sm md:text-base">
                    {project.description}
                  </span>
                </p>
                <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center border-2 border-yellow-400 rounded-lg text-yellow-400 hover:bg-yellow-400 hover:text-black transition self-end">
                  ➜
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StickyProjectSection;
