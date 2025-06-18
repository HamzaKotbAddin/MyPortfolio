"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { companies, testimonials } from "@/data";
import Image from "next/image";
import { useFadeInOnScroll } from "./ui/components/FadeInOnScroll";

const Clients = () => {
  useFadeInOnScroll();

  return (
    <div className="py-20 fade-in-up" id="testimonials">
      <h1 className="heading group text-center text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight transition-all duration-300 mb-10">
        a small collection of{" "}
        <span className="relative inline-block text-purple-400 transition duration-300 group-hover:text-purple-300">
          <span className="relative z-10">clients</span>
        </span>
      </h1>
      <div className="flex flex-col items-center">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col anti-aliased relative overflow-hidden">
          {" "}
          <InfiniteMovingCards
            items={testimonials}
            speed="slow"
            pauseOnHover={true}
          />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
          {companies.map((company) =>
            company.img || company.nameImg ? (
              <div key={company.id} className="gap-2 flex md:max-w-60 max-w-32">
                {company.img && (
                  <Image
                    src={company.img}
                    alt={company.name}
                    width={200}
                    height={200}
                    className="w-24 h-36 md:w-36 md:h-42 lg:w-42 lg:h-54 object-contain"
                  />
                )}
                {company.nameImg && (
                  <Image
                    src={company.nameImg}
                    alt={company.name}
                    width={200}
                    height={200}
                    className="w-32 h-40 md:w-48 md:h-56 lg:w-56 lg:h-72 object-contain"
                  />
                )}
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Clients;
