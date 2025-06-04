"use client";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number>(0);
  const [isHovering, setIsHovering] = useState(false);

  let w = 0,
    h = 0,
    nt = 0;

  const getSpeed = () => (speed === "fast" ? 0.002 : 0.001);

  const init = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    w = canvas.width = rect.width;
    h = canvas.height = rect.height;

    ctx.filter = `blur(${blur}px)`;
    nt = 0;

    const render = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      ctx.fillStyle = backgroundFill || "black";
      ctx.globalAlpha = waveOpacity;
      ctx.fillRect(0, 0, w, h);

      const waveColors = colors ?? [
        "#38bdf8",
        "#818cf8",
        "#c084fc",
        "#e879f9",
        "#22d3ee",
      ];

      nt += getSpeed();

      const amplitude = isHovering ? 200 : 100; // 👈 Hover increases wave height

      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * amplitude;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }

      animationIdRef.current = requestAnimationFrame(render);
    };

    render();

    const resizeHandler = () => {
      if (!canvas || !ctx || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      w = canvas.width = rect.width;
      h = canvas.height = rect.height;
      ctx.filter = `blur(${blur}px)`;
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  };

  useEffect(() => {
    const cleanup = init();
    return () => {
      cancelAnimationFrame(animationIdRef.current);
      cleanup?.();
    };
  }, [isHovering]);

  return (
    <div
      ref={containerRef}
      className={containerClassName}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        height: "150px",
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
        style={{ filter: `blur(${blur}px)` }}
      />
      <div
        className={className}
        {...props}
        style={{ position: "relative", zIndex: 10 }}
      >
        {children}
      </div>
    </div>
  );
};
