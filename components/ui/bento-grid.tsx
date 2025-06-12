"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";
import { CustomProgressBar } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

const GlobeDemo = dynamic(
  () =>
    import("./GlobeDemo").then((mod) => ({
      default: mod.GlobeDemo, // ← map named export to default
    })),
  {
    ssr: false,
    loading: () => <CustomProgressBar value={100} />,
  }
);

export default function LazyGlobeWrapper() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [showGlobe, setShowGlobe] = useState(false);

  useEffect(() => {
    if (inView) {
      setShowGlobe(true);
    }
  }, [inView]);

  return <div ref={ref}>{showGlobe && <GlobeDemo />}</div>;
}

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const leftLists = ["Next.js", "React.js", "TypeScript"];
  const rightLists = ["Supabase", "Tailwind CSS", "Vercel"];
  const [showGlobe, setShowGlobe] = useState(false);

  useEffect(() => {
    if (id === 2) {
      // Delay mounting to let Spotlight animate
      const timeout = setTimeout(() => {
        if ("requestIdleCallback" in window) {
          (window as any).requestIdleCallback(() => setShowGlobe(true));
        } else {
          setShowGlobe(true);
        }
      }, 1500); // delay slightly after transition/render

      return () => clearTimeout(timeout);
    } else {
      setShowGlobe(false); // hide if not visible
    }
  }, [id]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("hamza.yasin.dev@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    } catch (err) {
      console.error("Failed to copy: ", err);
      setCopied(false);
    }
  };
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/10 group/bento transition-shadow duration-200 hover:shadow-xl shadow-input dark:shadow-none flex flex-col justify-between",
        className
      )}
    >
      {/* Background Image */}
      {img && (
        <img
          src={img}
          alt="background"
          className={cn(
            "absolute inset-0 object-cover object-center w-full h-full z-0",
            imgClassName
          )}
        />
      )}

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg,rgba(0, 0, 0, 1) 6%, rgba(66, 32, 69, 0.15) 51%, rgba(71, 43, 79, 0.19) 70%, rgba(13, 13, 13, 1) 100%)",
        }}
      />

      {/* Optional spare image */}
      {spareImg && (
        <img
          src={spareImg}
          alt="spare visual"
          className="absolute bottom-0 right-0 w-full h-auto object-contain opacity-40 z-20"
        />
      )}

      {/* Gradient animation for ID 6 */}
      {id === 6 && (
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4 text-white text-3xl text-center md:text-4xl lg:text-7xl pointer-events-none"></div>
      )}

      {/* Content */}
      <div
        className={cn(
          titleClassName,
          "relative z-30 px-5 py-5 lg:p-10 flex flex-col justify-between text-white min-h-40"
        )}
      >
        <div className="text-sm md:text-xs lg:text-base font-extralight text-[#C1C2D3]">
          {description}
        </div>
        <div className="text-lg lg:text-3xl font-bold max-w-96 mt-2">
          {title}
        </div>

        {/* Globe */}
        {id === 2 && <GlobeDemo />}

        {/* Tech Stack Grid */}
        {id === 3 && (
          <div className="relative z-30 mt-4 grid grid-cols-2 gap-3 lg:gap-4">
            <div className="flex flex-col gap-3 lg:gap-4">
              {leftLists.map((item, i) => (
                <span
                  key={i}
                  className="py-2 px-3 lg:py-4 lg:px-4 text-xs lg:text-base bg-[#10132E] rounded-lg text-center opacity-70"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3 lg:gap-4">
              {rightLists.map((item, i) => (
                <span
                  key={i}
                  className="py-2 px-3 lg:py-4 lg:px-4 text-xs lg:text-base bg-[#10132E] rounded-lg text-center opacity-70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
        {/* Copy Button */}
        {id === 6 && (
          <div className="mt-6">
            <MagicButton
              title={copied ? "Email is Copied!" : "Copy my email address"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              copied={copied}
              otherClasses="!bg-[#161A31] rounded-md h-10"
            />
          </div>
        )}
      </div>
    </div>
  );
};
