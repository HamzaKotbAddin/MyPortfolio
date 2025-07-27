import { Suspense, lazy } from "react";
import { FloatingNav } from "../../components/ui/floating-navbar";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import {
  SlideUpBlur,
  MagneticPull,
  StaggerContainer,
  MorphingScale,
} from "@/components/ui/FadeInSection";

// Lazy-loaded components
const Hero = lazy(() => import("../../components/Hero"));
const Grid = lazy(() => import("../../components/Grid"));
const Projects = lazy(() => import("@/components/Projects"));

export default function Home() {
  return (
    <main className="bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 overflow-x-hidden">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "#" },
            { name: "About", link: "#about" },
            { name: "Projects", link: "#projects" },
            { name: "Clients", link: "#testimonials" },
            { name: "Experience", link: "#experience" },
            { name: "Contact", link: "#contact" },
            {
              name: "Resume",
              link: "/Hamza_Yaseen_Developer_CV.pdf",
              target: "_blank",
              rel: "noopener noreferrer",
            },
          ]}
        />

        <Suspense fallback={<div className="h-screen bg-black" />}>
          <Hero />
        </Suspense>

        {/* About/Grid section - smooth morph */}
        <Suspense fallback={<div className="h-32 bg-black" />}>
          <Grid />
        </Suspense>

        {/* Projects - magnetic pull for interaction */}
        <Suspense fallback={<div className="h-32 bg-black" />}>
          <Projects />
        </Suspense>

        {/* Clients -  blur effect */}
        <SlideUpBlur>
          <Clients />
        </SlideUpBlur>

        {/* Experience - staggered reveal */}
        <StaggerContainer>
          <Experience />
        </StaggerContainer>

        {/* Footer - simple slide up */}
        <SlideUpBlur>
          <Footer />
        </SlideUpBlur>
      </div>
    </main>
  );
}
