import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  copied,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  copied?: boolean;
}) => {
  return (
    <button
      onClick={handleClick}
      type="button"
      className={`relative inline-flex h-12 overflow-hidden rounded-7xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" ${otherClasses}`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center bg-slate-950 px-10 text-sm font-medium text-white backdrop-blur-3xl">
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
        {copied && (
          <span className="ml-2 text-green-400 text-xl animate-fade-in">
            ✅
          </span>
        )}
      </span>
    </button>
  );
};

export default MagicButton;
