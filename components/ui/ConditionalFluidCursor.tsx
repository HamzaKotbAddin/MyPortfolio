"use client";
import { useEffect, useState } from "react";
import FluidCursor from "@/components/ui/GradientCursor";

export default function ConditionalFluidCursor() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth > 768);
    check(); // initial check

    // optional: update on resize
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isDesktop ? <FluidCursor /> : null;
}
