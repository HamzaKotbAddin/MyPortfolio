"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";
import Image from "next/image";
import { useFadeInOnScroll } from "./ui/components/FadeInOnScroll";

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
        {/* <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col anti-aliased relative overflow-hidden">
          {" "}
          <InfiniteMovingCards
            items={testimonials}
            speed="slow"
            pauseOnHover={true}
          />
        </div> */}
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
