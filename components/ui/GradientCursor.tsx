"use client";
import { useEffect } from "react";

import fluidCursor from "../hooks/use-FluidCursor";
const FluidCursor = () => {
  useEffect(() => {
    fluidCursor();
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      <canvas
        id="fluid"
        className="w-full h-full"
        style={{
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
export default FluidCursor;
