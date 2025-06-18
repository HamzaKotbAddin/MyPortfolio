"use client";

import { gridItems } from "../data";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { useFadeInOnScroll } from "./ui/components/FadeInOnScroll";

const Grid = () => {
  useFadeInOnScroll();

  return (
    <section id="about me" className="fade-in-up">
      <BentoGrid className="w-full py-20 ">
        {gridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
