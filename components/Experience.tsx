import { useEffect, useState } from "react";
import { Button } from "./ui/moving-border";
import { workExperience } from "@/data";
import Image from "next/image";

const Experience = () => {
  return (
    <div
      className="py-20 fade-in-up"
      suppressHydrationWarning
      id="testimonials"
    >
      <h1 className="heading group text-center text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-all duration-300 mb-10">
        My{" "}
        <span className="relative inline-block text-purple-400 transition duration-300 group-hover:text-purple-300">
          <span className="relative z-10">work experience</span>
        </span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((experience) => (
          <div key={experience.id} className={experience.className}>
            <Button
              duration={Math.floor(Math.random() * (6000 - 5000 + 1)) + 5000}
              className="border-pink-400 hover:bg-pink-400 text-white dark:border-slate-600"
              containerClassName="w-full h-72 sm:h-80"
              borderClassName="opacity-50"
            >
              <div className="flex flex-col items-center justify-center h-full gap-3 px-4 text-center">
                <Image
                  src={experience.thumbnail}
                  alt={experience.title}
                  className="lg:w-28 lg:h-28 md:w-24 md:h-24 w-20 h-20 rounded-full object-cover"
                  width={100}
                  height={100}
                />
                <h2 className="text-xl font-bold text-white">
                  {experience.title}
                </h2>
                <p className="text-base text-white/90 dark:text-white/70">
                  {experience.desc}
                </p>
              </div>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
