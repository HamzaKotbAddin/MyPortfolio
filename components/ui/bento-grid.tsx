import { cn } from "../../lib/utils";

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
        "w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:auto-rows-[120px] lg:grid-cols-5 px-4 ",

        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  spareImg,
  imgClassName,
  titleClassName,
  img,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;

  id?: number;
  link?: string;
  imgClassName?: string;
  titleClassName?: string;
  img?: string;
  spareImg?: string;
  yy;
}) => {
  return (
    <div
      className={cn(
        "group/bento relative shadow-input items-center justify-center p-4 flex flex-col  space-y-4 rounded-xl border border-neutral-200 bg-white transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
      style={{
        background: "rgb(6,29,52)",
        backgroundColor:
          "linear-gradient(0deg, rgba(6,29,52,1) 0%, rgba(0,0,0,1) 100%)",
      }}
    >
      <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
        {title}
      </div>
      <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
        {description}
      </div>
    </div>
  );
};
