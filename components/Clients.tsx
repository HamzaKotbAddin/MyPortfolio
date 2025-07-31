"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="py-20 " id="testimonials">
      {/* <h1 className="heading group text-center text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-all duration-300 mb-10">
        a small collection of{" "}
        <span className="relative inline-block text-purple-400 transition duration-300 group-hover:text-purple-300">
          <span className="relative z-10">clients</span>
        </span>
      </h1> */}
      <div className="flex flex-col items-center">
        <div className="h-[30vh] md:h-[15rem] rounded-md flex flex-col anti-aliased relative overflow-hidden">
          <p className="text-lg italic text-white/80 text-center">
            "Hamza was a great addition to our team at AJA Space. He showed
            solid React and UI/UX skills, and always delivered his tasks on
            time."
          </p>
          <div className="mt-4 flex items-center gap-4">
            <img
              src="/Rakan-Alanzi.webp"
              className="w-12 h-12 rounded-full"
              alt="Rakan Alanzi"
            />
            <div>
              <p className="font-semibold text-white">Rakan Alanzi</p>
              <p className="text-sm text-muted-foreground text-white/70">
                CEO and Team Lead at AJA Space
              </p>
            </div>
          </div>
          {/* {" "}
          <InfiniteMovingCards
            items={testimonials}
            speed="slow"
            pauseOnHover={true}
          /> */}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-10">
          {companies.map((company) =>
            company.nameImg ? (
              <div key={company.id} className="gap-2 flex max-w-36 md:max-w-32">
                <Image
                  src={company.nameImg}
                  alt={company.name}
                  width={140}
                  height={80}
                  className="w-20 h-20 md:w-28 md:h-28 "
                />
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Clients;
