"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Rojgaar",
    description: "A fully responsive job portal platform supporting job and company creation, deletion, and detailed listings",
    image: "/projects/JobPortal.png",
  },
  {
    title: "Social Hive",
    description: "A full-stack social media app with a Node.js/Express RESTful API for posts, comments, and follows.",
    image: "/projects/SocialHive.png",
  },
  {
    title: "Sportwave",
    description: "A full-stack platform for sports event management, featuring user profiles, team creation, and scheduling.",
    image: "/projects/Sportwave.png",
  },
];

const transition = { duration: 0.5 };

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef(false);
  const wheelTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleWheel = (e: React.WheelEvent) => {
    if (isScrolling.current) return;

    if (e.deltaY > 10 && activeIndex < projects.length - 1) {
      // scroll down
      setActiveIndex((prev) => prev + 1);
      isScrolling.current = true;
    } else if (e.deltaY < -10 && activeIndex > 0) {
      // scroll up
      setActiveIndex((prev) => prev - 1);
      isScrolling.current = true;
    }

    // debounce unlock
    if (wheelTimeout.current) clearTimeout(wheelTimeout.current);
    wheelTimeout.current = setTimeout(() => {
      isScrolling.current = false;
    }, 700);
  };

  useEffect(() => {
    return () => {
      if (wheelTimeout.current) clearTimeout(wheelTimeout.current);
    };
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row h-[80vh] w-full max-w-7xl mx-auto mt-10 bg-black rounded-xl shadow-lg overflow-hidden"
      onWheel={handleWheel}
      style={{ cursor: "grab" }}
    >
      {/* Left: Project Details */}
      <div className="w-full md:w-1/3 flex items-center justify-center p-8 relative bg-black text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={transition}
            className="w-full"
          >
            <span className="inline-block px-4 py-1 mb-4 bg-blue-400 rounded-full text-xs font-semibold">
              PROJECT {activeIndex + 1}
            </span>
            <h2 className="text-3xl font-bold mb-2">
              {projects[activeIndex].title}
            </h2>
            <p className=" text-lg mb-2">
              {projects[activeIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right: Only show active slide */}
      <div
        className="w-full md:w-2/3 h-64 md:h-auto overflow-hidden bg-gray-100 flex flex-col relative"
        style={{ height: "80vh" }}
      >
        <div className="flex items-center justify-center w-full p-8 h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={transition}
              className={`rounded-xl shadow-md bg-white flex items-center justify-center min-h-max p-3 w-full border-2 border-blue-400`}
            >
              <Image
                src={projects[activeIndex].image}
                alt={projects[activeIndex].title}
                className="object-fit rounded-xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Page;
