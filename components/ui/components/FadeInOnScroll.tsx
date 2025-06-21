"use client";
import { useEffect } from "react";

export function useFadeInOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // observer.unobserve(entry.target); // optional
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null; // ما في شي تحتاج ترجعه فعليًا
}
