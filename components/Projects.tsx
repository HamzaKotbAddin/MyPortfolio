import React, { memo, useMemo } from "react";
import { Projects } from "../data/index";
import Image from "next/image";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import { Boxes } from "./ui/background-boxes";

// Memoized project card component
type ProjectCardProps = { item: (typeof Projects)[number] };

const ProjectCard = memo(({ item }: ProjectCardProps) => (
  <div
    className="sm:h-[50rem] h-[40rem] lg:min-h-[45rem] flex items-center justify-center sm:w-[650px] w-[85vw] max-w-[500px]"
    id="projects"
  >
    <PinContainer title={item.title} href={item.link}>
      <div className="relative flex items-end justify-center sm:w-[650px] sm:h-[50vh] h-[35vh] w-[85vw] max-w-[480px] overflow-hidden mb-10 backdrop-blur-lg pb-4">
        <div
          className="absolute inset-0 w-full h-full overflow-hidden lg:rounded-3xl"
          style={{ backgroundColor: "#0f0f0f" }}
        >
          <Image
            src="/bg.png"
            alt="background"
            className="object-cover"
            sizes="(max-width: 768px) 85vw, (max-width: 1024px) 650px, 480px"
            loading="lazy"
            width={480}
            height={320}
          />
        </div>
        <Image
          src={item.image}
          alt={`Screenshot of ${item.title}`}
          width={480}
          height={320}
          className="z-10 relative w-[calc(100%-1.5rem)] h-[calc(100%-2rem)] object-cover object-top rounded-2xl shadow-2xl ring-1 ring-white/10 hover:scale-[1.02] transition-all duration-700 ease-out will-change-transform"
          sizes="(max-width: 768px) 85vw, (max-width: 1024px) 650px, 480px"
          loading="lazy"
        />
      </div>

      <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
        {item.title}
      </h1>

      <p
        className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
        style={{
          color: "#BEC1DD",
          margin: "1vh 0",
        }}
      >
        {item.description}
      </p>

      <div className="flex items-center justify-between mt-7 mb-3">
        <div className="flex items-center">
          {item.iconLists.map((icon, index) => (
            <div
              key={`${item.id}-icon-${index}`}
              className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
              style={{
                transform: `translateX(-${5 * index + 2}px)`,
              }}
            >
              <Image
                src={icon}
                alt={`Technology icon ${index + 1}`}
                width={24}
                height={24}
                className="p-1"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mP8//8/AwAI/wH+9Q2AAAAAElFTkSuQmCC"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <p className="flex lg:text-xl md:text-xs text-sm text-purple">
            Check Live Site
          </p>
          <FaLocationArrow className="ms-3" color="#CBACF9" />
        </div>
      </div>
    </PinContainer>
  </div>
));

ProjectCard.displayName = "ProjectCard";

// Memoized background component
const BackgroundBoxes = memo(() => (
  <div className="absolute inset-0 z-0 w-full h-full">
    <Boxes className="absolute inset-0 w-full h-full " />
  </div>
));

BackgroundBoxes.displayName = "BackgroundBoxes";

const MyProjects = memo(() => {
  // Memoize projects to prevent unnecessary re-renders
  const memoizedProjects = useMemo(() => Projects, []);

  return (
    <div className="relative py-20">
      <h1 className="group heading relative z-10 text-center text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-all duration-300">
        A small selection of{" "}
        <span className="relative inline-block text-purple-200 transition duration-300 group-hover:text-pink-500">
          <span className="relative z-10">recent projects</span>
          <span className="absolute inset-x-0 bottom-0 h-1 bg-purple/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>
        </span>
      </h1>

      {/* Foreground project cards */}
      <div className="relative z-10 flex items-center justify-center p-8 mt-10 rounded-3xl w-full">
        <div className="h-full relative w-full max-w-[1400px] overflow-hidden flex flex-wrap gap-8 xl:gap-12 items-center justify-center rounded-lg">
          <BackgroundBoxes />
          <div className="absolute inset-0 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

          {/* Grid layout for better responsiveness */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 xl:gap-12 w-full place-items-center">
            {memoizedProjects.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

MyProjects.displayName = "MyProjects";

export default MyProjects;
