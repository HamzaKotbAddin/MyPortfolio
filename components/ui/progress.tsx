"use client";
import { useEffect, useState } from "react";

interface CustomProgressBarProps {
  value: number; // 0 to 100
  className?: string;
  barColor?: string;
  bgColor?: string;
  height?: number | string;
  animationDurationMs?: number;
}

export function CustomProgressBar({
  value,
  className = "",
  barColor = "#7c3aed", // purple-700 by default
  bgColor = "rgba(139, 92, 246, 0.3)", // purple-500 with opacity
  height = 12,
  animationDurationMs = 800,
}: CustomProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress to value on mount or update
    const timeout = setTimeout(() => {
      setProgress(value);
    }, 100); // slight delay to trigger transition

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div
      className={`w-full rounded-xl overflow-hidden ${className}`}
      style={{ backgroundColor: bgColor, height }}
    >
      <div
        className="h-full rounded-xl"
        style={{
          width: `${progress}%`,
          backgroundColor: barColor,
          transition: `width ${animationDurationMs}ms ease-in-out`,
        }}
      />
    </div>
  );
}
