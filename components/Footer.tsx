import Link from "next/link";
import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaEnvelope } from "react-icons/fa6";
import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full relative pt-20 pb-10" id="contact">
      <div className="w-full absolute top-0 left-0 z-0 h-[500px]">
        <Image
          src="/footer-grid.svg"
          alt="footer"
          className="w-full h-full object-cover pointer-events-none"
          width={500}
          height={500}
        />
      </div>
      <div className="relative flex flex-col items-center justify-center gap-4 z-10">
        <h1 className="heading group text-center text-white text-4xl md:text-5xl lg:text-6xl font-bold transition-all duration-300 mb-10">
          contact{" "}
          <span className="relative text-purple-400 transition duration-300 group-hover:text-purple-300">
            <span className="relative z-10">me</span>
          </span>
        </h1>
        <p className="text-center text-white/90 dark:text-white/70 text-lg md:text-xl max-w-2xl">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Let&apos;s connect and create
          something amazing together!
        </p>
        <Link
          href="mailto:hamza.yasin.dev@gmail.com"
          className="text-center text-white/90 dark:text-white/70 text-lg md:text-xl max-w-2xl"
        >
          <MagicButton title="Email me" icon={<FaEnvelope />} position="left" />
        </Link>
      </div>
      <div className="flex justify-center items-center mt-10 md:flex-row flex-col gap-4">
        <p className="text-white/90 dark:text-white/70 text-sm md:text-base">
          © {new Date().getFullYear()} Hamza Mohammed. All rights reserved.
        </p>
      </div>
      <div className="flex justify-center items-center gap-4 mt-4">
        {socialMedia.map((item) => (
          <Link
            key={item.id}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 dark:text-white/70 hover:text-purple-400 transition-colors duration-300"
          >
            <Image
              src={item.img}
              alt={item.name}
              className="w-6 h-6 object-contain cursor-pointer z-50"
              width={24}
              height={24}
            />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
