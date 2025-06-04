import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "../lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";
import MagicButton from "./ui/MagicButton";
import { LuAntenna } from "react-icons/lu";
import { WavyBackground } from "./ui/wavy-background";
import FluidCursor from "./ui/GradientCursor";

const hero = () => {
  return (
    <div className=" w-full min-h-screen relative">
      {/* Spotlights */}
      <Spotlight
        className="absolute top-[-8rem] left-[5rem] md:top-[-10rem] md:left-[8rem] h-[100vh] w-full max-w-none"
        fill="white"
      />
      <Spotlight
        className="absolute left-0 top-0 h-[80vh] w-[80vh] "
        fill="purple"
      />
      <Spotlight
        className="absolute top-[10%] left-[60%] h-[80vh] w-[50vw] max-w-none"
        fill="blue"
      />

      <div className="relative flex h-screen w-full items-center justify-center dark:bg-black flex-col ">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <p className="z-20 bg-gradient-to-b from-neutral-200 to-neutral-200 bg-clip-text py-4 text-xl font-semibold text-transparent sm:text-4xl leading-snug">
          Hi, I&apos;m{" "}
          <span className="font-bold text-transparent bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text transition duration-300 hover:brightness-125">
            Hamza Mohammed{" "}
          </span>
          a Full stack developer.
        </p>

        <TextGenerateEffect
          className="text-leftb md:text-5xl lg:text-6xl text-2xl font-bold text-black dark:text-white"
          words="A spark of curiosity led me to tech—now I turn ideas into solutions."
        />
        <Link href="#about">
          <MagicButton
            title="About Me"
            icon={<LuAntenna />}
            position="right"
            otherClasses="mt-10"
          />
        </Link>
      </div>
      <WavyBackground
        className="content-container"
        containerClassName="main-container"
        colors={["#1e2a78", "#3b2167", "#0f1b4c", "#2e254b", "#1a224a"]}
        waveWidth={20}
        backgroundFill="#0a0a20"
        blur={5}
        speed="slow"
        waveOpacity={0.8}
      />
    </div>
  );
};

export default hero;
